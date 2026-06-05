import { NextRequest, NextResponse } from "next/server";

interface SimRequest {
  number: string;
}

function formatPhoneNumber(input: string): string {
  let cleaned = input.replace(/\D/g, "");

  // Just return the cleaned number without country code
  // The API seems to work with just the digits
  if (cleaned.startsWith("92")) {
    return cleaned; // Keep 923439325458 format
  } else if (cleaned.startsWith("0")) {
    return "92" + cleaned.slice(1); // Convert 03439325458 to 923439325458
  } else if (cleaned.length === 10) {
    return "923" + cleaned; // Convert 3439325458 to 923439325458
  }

  return cleaned;
}

async function fetchWithRetry(url: string, maxRetries: number = 3): Promise<any> {
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      console.log(`[Fetch] Attempt ${attempt + 1}: ${url}`);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseText = await response.text();

      console.log(`[Fetch] Status: ${response.status}`);
      console.log(`[Fetch] Raw response: ${responseText}`);

      try {
        const data = JSON.parse(responseText);
        console.log(`[Fetch] Parsed JSON:`, JSON.stringify(data).substring(0, 500));
        return data;
      } catch {
        console.log(`[Fetch] Could not parse as JSON`);
        return { rawResponse: responseText, status: response.status };
      }
    } catch (error) {
      lastError = error;
      console.log(`[Fetch] Error on attempt ${attempt + 1}:`, error);
      
      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
  }

  throw lastError;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: SimRequest = await request.json();
    const { number } = body;

    console.log(`[POST] Received number: ${number}`);

    if (!number || typeof number !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid number format" },
        { status: 400 }
      );
    }

    const formattedNumber = formatPhoneNumber(number.trim());
    console.log(`[POST] Formatted number: ${formattedNumber}`);

    // Call the API exactly as user provided
    const apiUrl = `https://amscript.xyz/PublicApi/Siminfo.php?number=${formattedNumber}`;
    
    console.log(`[POST] Calling API: ${apiUrl}`);

    let apiResponse: any;
    try {
      apiResponse = await fetchWithRetry(apiUrl);
    } catch (error) {
      console.error(`[POST] API fetch failed:`, error);
      return NextResponse.json(
        {
          success: false,
          error: "Could not reach the SIM info service. Please try again.",
        },
        { status: 503 }
      );
    }

    console.log(`[POST] API Response:`, apiResponse);

    // Handle the response - parse all possible formats
    let records: any[] = [];

    // If response has a 'data' field
    if (apiResponse.data) {
      if (Array.isArray(apiResponse.data)) {
        records = apiResponse.data;
      } else if (typeof apiResponse.data === "object") {
        records = [apiResponse.data];
      }
    }
    // If response is direct array
    else if (Array.isArray(apiResponse)) {
      records = apiResponse;
    }
    // If response looks like a direct object with fields
    else if (
      apiResponse.full_name ||
      apiResponse.phone ||
      apiResponse.cnic ||
      apiResponse.address ||
      apiResponse.name ||
      apiResponse.owner
    ) {
      records = [apiResponse];
    }

    console.log(`[POST] Extracted ${records.length} records`);

    // Filter and normalize
    const validRecords = records
      .filter((rec: any) => rec && typeof rec === "object")
      .map((rec: any) => ({
        full_name: rec.full_name || rec.name || rec.owner || "",
        phone: rec.phone || rec.mobile || rec.number || formattedNumber || "",
        cnic: rec.cnic || rec.id || rec.nric || "",
        address: rec.address || rec.location || "",
      }))
      .filter((rec: any) => {
        // Keep if has at least one field with data
        return (
          (rec.full_name && rec.full_name.trim().length > 0) ||
          (rec.phone && rec.phone.trim().length > 0) ||
          (rec.cnic && rec.cnic.trim().length > 0) ||
          (rec.address && rec.address.trim().length > 0)
        );
      });

    console.log(`[POST] Valid records: ${validRecords.length}`, validRecords);

    if (validRecords.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: validRecords,
    });
  } catch (error) {
    console.error(`[POST] Unexpected error:`, error);

    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "ok",
    message: "SIM Info API",
    usage: "POST with { number: 'XXXXXXXXXX' }",
  });
}
