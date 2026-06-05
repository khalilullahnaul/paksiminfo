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
    // +923XXXXXXXXX format (international)
    return "+" + cleaned;
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    // 03XXXXXXXXX format (local)
    return "+92" + cleaned.slice(1);
  } else if (cleaned.length === 10) {
    // 3XXXXXXXXX format (without leading 0)
    return "+923" + cleaned;
  } else if (cleaned.startsWith("+")) {
    return cleaned;
  }

  // If already in correct format
  if (cleaned.length === 12 && !cleaned.startsWith("92")) {
    return "+92" + cleaned;
  }

  return "+" + cleaned;
}

async function fetchWithRetry(
  url: string,
  maxRetries: number = 3
): Promise<Response> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: "https://paksiminfo.vercel.app",
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

    // Build the API URL
    const apiUrl = `https://amscript.xyz/PublicApi/Siminfo.php?number=${encodeURIComponent(
      formattedNumber
    )}`;

    console.log(
      `[SIM Search] Formatted number: ${formattedNumber} from input: ${number}`
    );

    // Fetch from the API
    const response = await fetchWithRetry(apiUrl);
    const contentType = response.headers.get("content-type");

    let data: any;

    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        // If response is not JSON, return it as-is
        return NextResponse.json(
          {
            success: false,
            error:
              "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
            data: text,
          },
          { status: 404 }
        );
      }
    }

    // Handle various response structures
    if (data.success === false || !data.data) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No results found for the provided input(s). This database has limited historical data. Please try with a different number or use official PTA methods.",
        },
        { status: 404 }
      );
    }

    // Process and filter results
    let records = Array.isArray(data.data) ? data.data : [data.data];

    // Filter out empty/none records
    records = records.filter((rec: any) => {
      const isEmpty = (v: any) =>
        !v ||
        (typeof v === "string" &&
          (v.trim().toLowerCase() === "none" || v.trim() === ""));
      return !(
        isEmpty(rec.full_name) &&
        isEmpty(rec.phone) &&
        isEmpty(rec.cnic) &&
        isEmpty(rec.address)
      );
    });

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

    return NextResponse.json({
      success: true,
      data: records,
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
