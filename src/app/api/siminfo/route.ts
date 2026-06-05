import { NextRequest, NextResponse } from "next/server";

interface SimRequest {
  number: string;
}

interface SimResponse {
  success: boolean;
  data?: any;
  error?: string;
}

function formatPhoneNumber(input: string): string {
  // Remove all non-digit characters
  let cleaned = input.replace(/\D/g, "");

  // Handle different number formats
  if (cleaned.startsWith("92") && cleaned.length === 12) {
    // 923XXXXXXXXX format (international without +)
    return "+" + cleaned;
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    // 03XXXXXXXXX format (local)
    return "+92" + cleaned.slice(1);
  } else if (cleaned.length === 10) {
    // 3XXXXXXXXX format (without leading 0)
    return "+923" + cleaned;
  } else if (cleaned.length === 13) {
    // CNIC format
    return cleaned;
  } else if (!cleaned.startsWith("+")) {
    // Add + prefix if missing
    if (cleaned.startsWith("92")) {
      return "+" + cleaned;
    }
  }

  return cleaned;
}

async function fetchWithRetry(
  url: string,
  maxRetries: number = 3
): Promise<Response> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: "https://paksiminfo.vercel.app",
          Connection: "keep-alive",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return response;
      }

      if (response.status === 429 || response.status === 503) {
        // Rate limited or service unavailable, retry after delay
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * (attempt + 1))
        );
        continue;
      }

      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (attempt === maxRetries - 1) {
        throw error;
      }
      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }

  throw new Error("Max retries exceeded");
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

    console.log(
      `[SIM Search] Input: ${number}, Formatted: ${formattedNumber}`
    );

    // Build the API URL
    const apiUrl = `https://amscript.xyz/PublicApi/Siminfo.php?number=${encodeURIComponent(
      formattedNumber
    )}`;

    console.log(`[SIM Search] Calling API: ${apiUrl}`);

    // Fetch from the API
    const response = await fetchWithRetry(apiUrl);
    const responseText = await response.text();

    console.log(`[SIM Search] Raw response: ${responseText.substring(0, 500)}`);

    let data: any;

    // Try to parse as JSON
    try {
      data = JSON.parse(responseText);
    } catch {
      console.log("[SIM Search] Response is not JSON, treating as plain text");
      // If it's plain text, check what we got
      if (
        responseText.toLowerCase().includes("no results") ||
        responseText.toLowerCase().includes("not found")
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
          },
          { status: 404 }
        );
      }

      // Try to wrap it as data
      data = { success: false, data: responseText };
    }

    console.log(`[SIM Search] Parsed data:`, data);

    // Handle various response structures
    if (!data || (data.success === false && !data.data)) {
      console.log("[SIM Search] No data found in response");
      return NextResponse.json(
        {
          success: false,
          error:
            "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
        },
        { status: 404 }
      );
    }

    // Extract records - handle multiple possible response formats
    let records: any[] = [];

    if (data.data) {
      if (Array.isArray(data.data)) {
        records = data.data;
      } else if (typeof data.data === "object") {
        records = [data.data];
      } else if (typeof data.data === "string") {
        // Try to parse if it's a stringified JSON
        try {
          const parsed = JSON.parse(data.data);
          records = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
          // If it's just a string message, no data
          console.log("[SIM Search] data.data is a string message");
          records = [];
        }
      }
    } else if (Array.isArray(data)) {
      records = data;
    } else if (
      data.full_name ||
      data.phone ||
      data.cnic ||
      data.address
    ) {
      // Direct record format
      records = [data];
    }

    console.log(`[SIM Search] Extracted records count: ${records.length}`);

    // Filter out empty/none records
    const isEmpty = (v: any) =>
      !v ||
      (typeof v === "string" &&
        (v.trim().toLowerCase() === "none" ||
          v.trim() === "" ||
          v.trim().toLowerCase() === "n/a"));

    records = records.filter((rec: any) => {
      if (!rec || typeof rec !== "object") return false;
      
      const hasAnyData =
        !isEmpty(rec.full_name) ||
        !isEmpty(rec.phone) ||
        !isEmpty(rec.cnic) ||
        !isEmpty(rec.address);

      return hasAnyData;
    });

    console.log(
      `[SIM Search] Filtered records count: ${records.length}`,
      records
    );

    if (records.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
        },
        { status: 404 }
      );
    }

    // Normalize records
    const normalizedRecords = records.map((rec: any) => ({
      full_name: rec.full_name || rec.name || "",
      phone: rec.phone || rec.mobile || "",
      cnic: rec.cnic || rec.id || "",
      address: rec.address || rec.location || "",
    }));

    console.log("[SIM Search] Success, returning records:", normalizedRecords);

    return NextResponse.json({
      success: true,
      data: normalizedRecords,
    });
  } catch (error) {
    console.error("[SIM Search Error]", error);

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

    if (
      errorMessage.includes("fetch") ||
      errorMessage.includes("network") ||
      errorMessage.includes("ERR_")
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Network error: Could not connect to the service. Please check your internet connection and try again.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "An error occurred while processing your request. Please try again later.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    message: "SIM Info API",
    usage: "POST /api/siminfo with { number: 'Pakistani mobile number or CNIC' }",
  });
}
