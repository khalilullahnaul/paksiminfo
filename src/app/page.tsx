"use client";

import { useState, useCallback, useRef } from "react";
import { Search, Phone, Copy, Check, Download, FileText, Shield, ArrowRight, Zap, Users, BookOpen, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface SimRecord {
  full_name: string;
  phone: string;
  cnic: string;
  address: string;
}

const carrierInfo = [
  { name: "Jazz / Warid", code: "*110#", color: "bg-red-500" },
  { name: "Telenor", code: "*110#", color: "bg-blue-500" },
  { name: "Zong", code: "*310#", color: "bg-purple-500" },
  { name: "Ufone", code: "*110#", color: "bg-orange-500" },
];

const features = [
  {
    icon: Shield,
    title: "Legal & Safe",
    description: "All methods follow PTA guidelines and Pakistan privacy laws. No illegal tracking or unauthorized data access.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get SIM ownership information quickly through official carrier codes and PTA verification systems.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Guides",
    description: "Detailed step-by-step tutorials for Jazz, Telenor, Zong, Ufone SIM verification and PTA DIRBS.",
  },
  {
    icon: Users,
    title: "Trusted Author",
    description: "Written by Muhammad Aoun Yousaf Naul, telecom analyst with deep knowledge of Pakistan's telecom ecosystem.",
  },
];

const latestBlogs = [
  { href: "/blog/sim-owner-detail-pakistan", title: "How to Check SIM Owner Details in Pakistan (2026 Guide)" },
  { href: "/blog/latest-data-pakistan-sims-2026", title: "Latest Data Pakistan SIMs 2026: 5G, Privacy & Regulation Updates" },
  { href: "/blog/cnic-sim-information", title: "How to Check CNIC SIM Information Online via PTA" },
  { href: "/blog/jazz-sim-owner-detail", title: "Jazz SIM Owner Detail: Complete Verification Guide" },
  { href: "/blog/report-illegal-sim-pakistan", title: "How to Report Illegal/Unregistered SIMs in Pakistan" },
  { href: "/blog/block-lost-sim-pakistan", title: "How to Block a Lost SIM Card in Pakistan Instantly" },
];

function normalizeInput(input: string): { valid: boolean; value: string; type: string; message?: string } {
  let clean = input.replace(/\D/g, "");
  if (clean.length === 13) {
    return { valid: true, value: clean, type: "cnic" };
  }
  if (clean.startsWith("92") && clean.length === 12) {
    clean = clean.substring(2);
  } else if (clean.startsWith("0") && clean.length === 11) {
    clean = clean.substring(1);
  }
  if (clean.length === 10) {
    return { valid: true, value: clean, type: "phone" };
  }
  return {
    valid: false,
    value: clean,
    message: "Please enter a valid Pakistani mobile number (e.g., 03XXXXXXXXX) or 13-digit CNIC number.",
  };
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SimRecord[]>([]);
  const [error, setError] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const performSearch = useCallback(async () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const normalized = normalizeInput(trimmed);
    if (!normalized.valid) {
      setError(normalized.message || "Invalid input.");
      return;
    }

    setError("");
    setResults([]);
    setLoading(true);

    try {
      const targetUrl = `https://amscript.xyz/PublicApi/Siminfo.php?number=${normalized.value}`;
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
        `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`,
      ];

      const fetchWithTimeout = async (url: string) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        try {
          const response = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
          const json = await response.json();
          if (json && typeof json.success !== "undefined") return json;
          throw new Error("Invalid response");
        } catch (err) {
          clearTimeout(timeoutId);
          throw err;
        }
      };

      const data = await Promise.any(proxies.map((url) => fetchWithTimeout(url)));
      if (data.success && Array.isArray(data.data)) {
        const validRecs = data.data.filter((rec: SimRecord) => {
          const isNone = (v: string) => !v || v.trim().toLowerCase() === "none" || v.trim() === "";
          return !(isNone(rec.full_name) && isNone(rec.phone) && isNone(rec.cnic) && isNone(rec.address));
        });
        setResults(validRecs);
        if (validRecs.length > 0) {
          setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
        }
      } else {
        setError("No results found for this number/CNIC. This database has limited historical data.");
      }
    } catch {
      setError("Network error: Could not retrieve data. The API may be temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }, [query]);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 1500);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 1500);
    });
  };

  const exportCSV = () => {
    if (!results.length) return;
    let csv = "Full Name,Phone Number,CNIC,Address\n";
    results.forEach((r) => {
      const n = (r.full_name || "N/A").replace(/"/g, '""');
      const p = (r.phone || "N/A").replace(/"/g, '""');
      const c = (r.cnic || "N/A").replace(/"/g, '""');
      const a = (r.address || "N/A").replace(/"/g, '""');
      csv += `"${n}","${p}","${c}","${a}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "PakSimInfo_Export.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-700/50 rounded-full px-4 py-1.5 text-sm mb-6">
              <Clock className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200">Updated April 2026 &middot; Official PTA Methods</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Pak Sim Info: Complete Guide to{" "}
              <span className="text-blue-400">SIM Verification</span> & Ownership in Pakistan
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              Learn how to check SIM owner details, verify SIMs via PTA and CNIC, and protect yourself with the latest data on Pakistan SIMs 2026. All methods are legal, official, and up-to-date.
            </p>

            {/* Search Box */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && performSearch()}
                    placeholder="Enter mobile number (03XX) or CNIC (13 digits)"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/10 border-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl text-white placeholder:text-blue-300/70 text-base"
                  />
                </div>
                <Button
                  onClick={performSearch}
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 min-w-[140px]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Searching...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Search
                    </span>
                  )}
                </Button>
              </div>
              {error && (
                <div className="mt-3 flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-sm text-red-200">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-start gap-2 text-sm text-amber-800">
            <Shield className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              <strong>Legal Notice:</strong> PakSimInfo is an informational platform only. We are not affiliated with PTA or any telecom provider. We do not access private databases. The search tool queries publicly available historical data. For official SIM verification, use{" "}
              <Link href="/blog/pak-sim-info-check-guide" className="underline font-semibold hover:text-amber-900">PTA 668 SMS service</Link> or visit{" "}
              <a href="https://www.pta.gov.pk" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-900">PTA.gov.pk</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results.length > 0 && (
        <section ref={resultsRef} className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                <p className="text-sm text-gray-500 mt-1">{results.length} record(s) found from historical database</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={exportCSV}>
                  <Download className="w-4 h-4 mr-1" /> CSV
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((rec, i) => {
                const clean = (v: string) => (!v || v.toLowerCase() === "none" ? "N/A" : v);
                const name = clean(rec.full_name);
                const phone = clean(rec.phone);
                const cnic = clean(rec.cnic);
                const address = clean(rec.address);
                return (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{name}</CardTitle>
                          <p className="text-xs text-gray-500">Record #{i + 1}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="font-mono text-sm font-medium">{phone}</p>
                        </div>
                        {phone !== "N/A" && (
                          <button onClick={() => copyToClipboard(phone, `phone-${i}`)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Copy">
                            {copiedField === `phone-${i}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                          </button>
                        )}
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-xs text-gray-500">CNIC</p>
                          <p className="font-mono text-sm font-medium">{cnic}</p>
                        </div>
                        {cnic !== "N/A" && (
                          <button onClick={() => copyToClipboard(cnic, `cnic-${i}`)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Copy">
                            {copiedField === `cnic-${i}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                          </button>
                        )}
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Address</p>
                        <p className="text-sm">{address}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
              <strong>Note:</strong> This data comes from a historical database and may not reflect current SIM ownership. For the most accurate and up-to-date information, use the{" "}
              <Link href="/blog/pak-sim-info-check-guide" className="underline font-semibold">PTA 668 SMS service</Link> or visit your nearest carrier franchise.
            </div>
          </div>
        </section>
      )}

      {/* Carrier Codes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Official SIM Verification Codes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check how many SIMs are registered against your CNIC using these official carrier codes. Simply dial the code from your registered number.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carrierInfo.map((carrier) => (
              <Card key={carrier.name} className="hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: carrier.color === "bg-red-500" ? "#ef4444" : carrier.color === "bg-blue-500" ? "#3b82f6" : carrier.color === "bg-purple-500" ? "#a855f7" : "#f97316" }}>
                <CardContent className="pt-6">
                  <div className={`w-10 h-10 rounded-lg ${carrier.color} flex items-center justify-center mb-4`}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{carrier.name}</h3>
                  <p className="text-3xl font-mono font-bold text-blue-600 mb-2">{carrier.code}</p>
                  <p className="text-sm text-gray-500">Dial from your number to check SIM count</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-3">
              You can also check via PTA: Send your CNIC (no dashes) to <strong className="text-blue-600 font-mono">668</strong>
            </p>
            <Link href="/blog/pak-sim-info-check-guide">
              <Button variant="outline" className="font-semibold">
                Read Full Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Trust PakSimInfo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide accurate, legal, and up-to-date information about SIM verification in Pakistan. Our guides are based on official PTA procedures and carrier resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <Card key={feat.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <feat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Guides & Articles</h2>
              <p className="text-gray-600">Comprehensive SIM verification guides updated for 2026</p>
            </div>
            <Link href="/blog/sim-owner-detail-pakistan" className="hidden sm:flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <Link key={blog.href} href={blog.href} className="group">
                <Card className="h-full hover:shadow-lg hover:border-blue-200 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
                      <FileText className="w-3.5 h-3.5" />
                      GUIDE
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      By Muhammad Aoun Yousaf Naul &middot; Updated 2026
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about SIM verification in Pakistan</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Can I check the name of a SIM owner in Pakistan?", a: "Due to Pakistan's privacy laws, you cannot directly check the name of another person's SIM owner. However, you can verify how many SIMs are registered against your own CNIC by sending your CNIC number (without dashes) to PTA's 668 SMS service, or by dialing the carrier-specific code from your phone." },
              { q: "What is the PTA SIM Information System 668?", a: "The PTA SIM Information System 668 is an official service by the Pakistan Telecommunication Authority that allows citizens to check how many SIM cards are registered against their CNIC number. Simply send your 13-digit CNIC (without dashes) via SMS to 668 to receive the count of SIMs registered under your name across all networks." },
              { q: "How do I check how many SIMs are on my CNIC?", a: "Send your 13-digit CNIC number (without dashes) via SMS to 668. You will receive a reply listing the total number of SIMs registered against your CNIC across all Pakistani telecom networks including Jazz, Telenor, Zong, and Ufone." },
              { q: "Is it legal to track a mobile number in Pakistan?", a: "No, tracking someone's mobile number without their consent or a court order is illegal in Pakistan under the Prevention of Electronic Crimes Act (PECA) 2016 and Section 54 of the Telecommunication (Re-Organization) Act. Only law enforcement agencies with proper authorization can legally track mobile numbers." },
              { q: "How can I block a lost or stolen SIM?", a: "To block a lost SIM, immediately contact your carrier's helpline (Jazz: 111, Telenor: 345, Zong: 310, Ufone: 333) or visit the nearest franchise with your original CNIC. You should also file a complaint with PTA and the CPLC if your phone was stolen." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Can I check the name of a SIM owner in Pakistan?", acceptedAnswer: { "@type": "Answer", text: "Due to Pakistan's privacy laws, you cannot directly check the name of another person's SIM owner. However, you can verify how many SIMs are registered against your own CNIC by sending your CNIC number (without dashes) to PTA's 668 SMS service." } },
                  { "@type": "Question", name: "What is the PTA SIM Information System 668?", acceptedAnswer: { "@type": "Answer", text: "The PTA SIM Information System 668 is an official service by the Pakistan Telecommunication Authority that allows citizens to check how many SIM cards are registered against their CNIC number." } },
                  { "@type": "Question", name: "How do I check how many SIMs are on my CNIC?", acceptedAnswer: { "@type": "Answer", text: "Send your 13-digit CNIC number (without dashes) via SMS to 668. You will receive a reply listing the total number of SIMs registered against your CNIC across all Pakistani telecom networks." } },
                  { "@type": "Question", name: "Is it legal to track a mobile number in Pakistan?", acceptedAnswer: { "@type": "Answer", text: "No, tracking someone's mobile number without their consent or a court order is illegal in Pakistan under PECA 2016 and Section 54 of the Telecommunication (Re-Organization) Act." } },
                  { "@type": "Question", name: "How can I block a lost or stolen SIM?", acceptedAnswer: { "@type": "Answer", text: "Contact your carrier's helpline or visit the nearest franchise with your original CNIC. Jazz: 111, Telenor: 345, Zong: 310, Ufone: 333." } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify Your SIM?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Use our comprehensive guides to check SIM ownership, verify registrations, and protect your identity. All methods are officially approved by PTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg px-8">
                Check SIM Now
              </Button>
            </Link>
            <Link href="/blog/sim-owner-detail-pakistan">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
                Read Full Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
