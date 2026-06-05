import { NextRequest, NextResponse } from "next/server";

interface SimRequest {
  number: string;
}

function formatPhoneNumber(input: string): string {
  // Remove all non-digit characters
  let cleaned = input.replace(/\D/g, "");

  // For Pakistani numbers, we need +92 format
  if (cleaned.startsWith("92") && cleaned.length === 12) {
    return "+" + cleaned;
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    return "+92" + cleaned.slice(1);
  } else if (cleaned.length === 10) {
    return "+923" + cleaned;
  } else if (cleaned.length === 13) {
    // CNIC format
    return cleaned;
  }

  return cleaned;
}

async function fetchWithRetry(
  url: string,
  maxRetries: number = 5
): Promise<any> {
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      console.log(`[Attempt ${attempt + 1}] Fetching: ${url}`);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseText = await response.text();
      console.log(
        `[Response ${attempt + 1}] Status: ${response.status}, Text: ${responseText.substring(
          0,
          300
        )}`
      );

      if (response.ok) {
        try {
          const data = JSON.parse(responseText);
          return data;
        } catch {
          return { success: false, rawData: responseText };
        }
      }

      if (response.status === 429 || response.status === 503) {
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 * (attempt + 1))
        );
        continue;
      }

      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
      const errorMsg =
        error instanceof Error ? error.message : String(error);
      console.log(`[Attempt ${attempt + 1}] Error: ${errorMsg}`);

      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
  }

  throw lastError || new Error("Max retries exceeded");
}

function extractContactInfo(data: any): any[] {
  let records: any[] = [];

  console.log("[Extract] Processing data:", JSON.stringify(data).substring(0, 500));

  // Handle different response formats
  if (!data) {
    return [];
  }

  // Format 1: { success: true/false, data: [...] }
  if (data.success && data.data) {
    if (Array.isArray(data.data)) {
      records = data.data;
    } else if (typeof data.data === "object") {
      records = [data.data];
    }
  }
  // Format 2: { result: {...} }
  else if (data.result) {
    if (Array.isArray(data.result)) {
      records = data.result;
    } else {
      records = [data.result];
    }
  }
  // Format 3: Direct array
  else if (Array.isArray(data)) {
    records = data;
  }
  // Format 4: Direct object with sim/contact info
  else if (
    data.full_name ||
    data.phone ||
    data.cnic ||
    data.address ||
    data.name ||
    data.mobile ||
    data.operator
  ) {
    records = [data];
  }

  console.log(
    "[Extract] Found records count:",
    records.length,
    records.length > 0 ? records[0] : ""
  );

  // Normalize and filter records
  const normalized = records
    .filter((rec: any) => rec && typeof rec === "object")
    .map((rec: any) => ({
      full_name: rec.full_name || rec.name || rec.owner || "",
      phone: rec.phone || rec.mobile || rec.number || rec.nomor || "",
      cnic: rec.cnic || rec.id || rec.nric || "",
      address: rec.address || rec.location || rec.lokasi || "",
    }))
    .filter((rec: any) => {
      // Keep record if it has at least some data
      return (
        (rec.full_name && rec.full_name.trim()) ||
        (rec.phone && rec.phone.trim()) ||
        (rec.cnic && rec.cnic.trim()) ||
        (rec.address && rec.address.trim())
      );
    });

  console.log("[Extract] Normalized records:", normalized);
  return normalized;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: SimRequest = await request.json();
    const { number } = body;

    if (!number || typeof number !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid number format" },
        { status: 400 }
      );
    }

    const formattedNumber = formatPhoneNumber(number.trim());
    console.log(`[Search] Input: ${number}, Formatted: ${formattedNumber}`);

    // Try the main API endpoint
    const apiUrl = `https://amscript.xyz/PublicApi/Siminfo.php?number=${encodeURIComponent(
      formattedNumber
    )}`;

    console.log(`[Search] Calling: ${apiUrl}`);

    let responseData: any;
    try {
      responseData = await fetchWithRetry(apiUrl);
    } catch (error) {
      console.error("[Search] API call failed:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to connect to the SIM info service. Please try again later.",
        },
        { status: 503 }
      );
    }

    // Extract contact information
    const records = extractContactInfo(responseData);

    if (records.length === 0) {
      console.log("[Search] No valid records found");
      return NextResponse.json(
        {
          success: false,
          error:
            "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
        },
        { status: 404 }
      );
    }

    console.log("[Search] Returning records:", records);
    return NextResponse.json({
      success: true,
      data: records,
    });
  } catch (error) {
    console.error("[Search] Unexpected error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    if (
      errorMessage.includes("AbortError") ||
      errorMessage.includes("timeout")
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Request timeout. The API is taking too long to respond. Please try again.",
        },
        { status: 504 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    message: "SIM Info API",
    usage: "POST /api/siminfo with { number: 'Pakistani mobile number' }",
    example: "{ number: '03001234567' }",
  });
}
