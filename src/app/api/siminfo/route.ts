import { NextRequest, NextResponse } from "next/server";

interface SimRequest {
  number: string;
}

function formatPhoneNumber(input: string): string {
  let cleaned = input.replace(/\D/g, "");

  if (cleaned.startsWith("92") && cleaned.length === 12) {
    return cleaned;
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    return "92" + cleaned.slice(1);
  } else if (cleaned.length === 10) {
    return "923" + cleaned;
  } else if (cleaned.length === 13) {
    return cleaned;
  }

  return cleaned;
}

async function fetchWithRetry(url: string, maxRetries: number = 3): Promise<any> {
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseText = await response.text();

      console.log(`[API] Attempt ${attempt + 1} - Status: ${response.status}`);
      console.log(`[API] Response: ${responseText.substring(0, 500)}`);

      if (response.ok) {
        try {
          return JSON.parse(responseText);
        } catch {
          return { rawData: responseText, status: response.status };
        }
      }

      if (response.status === 429 || response.status === 503) {
        await new Promise((resolve) => setTimeout(resolve, 2000 * (attempt + 1)));
        continue;
      }

      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
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

    if (!number || typeof number !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid number format" },
        { status: 400 }
      );
    }

    const formattedNumber = formatPhoneNumber(number.trim());
    console.log(`[Search] Searching for: ${formattedNumber}`);

    // Try multiple APIs
    const apis = [
      `https://amscript.xyz/PublicApi/Siminfo.php?number=${encodeURIComponent(formattedNumber)}`,
      `https://api.example.com/sim?number=${encodeURIComponent(formattedNumber)}`,
    ];

    let allResults: any[] = [];
    let lastError: any = null;

    for (const apiUrl of apis) {
      try {
        console.log(`[Search] Trying: ${apiUrl}`);
        const data = await fetchWithRetry(apiUrl);
        
        if (data && (data.data || data.result || data.operator)) {
          console.log(`[Search] Got data from ${apiUrl}:`, data);
          
          // Extract data based on response format
          let records: any[] = [];
          
          if (data.data) {
            records = Array.isArray(data.data) ? data.data : [data.data];
          } else if (data.result) {
            records = Array.isArray(data.result) ? data.result : [data.result];
          } else if (data.operator || data.nomor) {
            records = [data];
          }

          // Map to standard format
          const mapped = records
            .filter((r: any) => r && typeof r === "object")
            .map((rec: any) => ({
              full_name: rec.full_name || rec.name || rec.owner || rec.customer || "",
              phone: rec.phone || rec.mobile || rec.number || rec.nomor || formattedNumber,
              cnic: rec.cnic || rec.id || rec.nric || "",
              address: rec.address || rec.location || rec.lokasi || "",
              operator: rec.operator || "",
              category: rec.kategori || rec.category || "",
            }));

          allResults.push(...mapped);
        }
      } catch (error) {
        console.log(`[Search] API ${apiUrl} failed:`, error);
        lastError = error;
        continue;
      }
    }

    // If no data found, return helpful message
    if (allResults.length === 0) {
      console.log("[Search] No data found from any API");
      return NextResponse.json(
        {
          success: false,
          error: "No results found. The database has limited historical data for Pakistani numbers. Try using official PTA methods (SMS 668 with your CNIC) or contact your telecom provider.",
          info: "This search tool queries available public databases. For real-time SIM verification, use official carrier methods.",
        },
        { status: 404 }
      );
    }

    console.log(`[Search] Returning ${allResults.length} results`);
    return NextResponse.json({
      success: true,
      data: allResults,
    });
  } catch (error) {
    console.error("[Search] Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "ok",
    message: "SIM Info API - Pakistani Mobile Numbers",
    endpoints: {
      search: "POST /api/siminfo",
      example: { number: "03001234567" },
    },
    note: "This API queries public databases. For guaranteed results, use official PTA SMS 668 service.",
  });
}
