import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Cookie,
  ExternalLink,
  Lock,
  Users,
  FileText,
  RefreshCw,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - PakSimInfo",
  description:
    "Read PakSimInfo's privacy policy. Learn how we handle data, use cookies, and protect your privacy. PakSimInfo does not collect personal information from visitors.",
  openGraph: {
    title: "Privacy Policy - PakSimInfo",
    description:
      "Read PakSimInfo's privacy policy. Learn how we handle data, use cookies, and protect your privacy.",
    url: "https://paksiminfo.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://paksiminfo.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://paksiminfo.vercel.app/privacy-policy",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-blue-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Privacy Policy</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-blue-400">Privacy</span> Policy
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
              Your privacy matters to us. This policy explains how PakSimInfo
              handles data, uses cookies, and ensures a safe browsing experience
              for all visitors.
            </p>
            <p className="mt-4 text-sm text-blue-300">
              Last Updated: April 2026 &nbsp;|&nbsp; Author: Muhammad Aown
              Yousaf Naul
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed text-sm">
              At PakSimInfo, we are committed to protecting your privacy. This
              Privacy Policy describes the types of information we may collect,
              how we use it, and the choices you have regarding your data when you
              visit our website at{" "}
              <span className="text-blue-600 font-medium">
                paksiminfo.vercel.app
              </span>
              . By using our website, you agree to the terms outlined in this
              policy.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                1. Information We Collect
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                PakSimInfo is an <strong className="text-blue-950">informational website only</strong>. We do
                not collect, store, or process any personal information from our
                visitors. Specifically:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">No personal data collection</strong> &mdash; We do not
                    ask for or collect names, email addresses, phone numbers, CNIC
                    numbers, or any other personally identifiable information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">No SIM data access</strong> &mdash; We do not have
                    access to any SIM databases, call records, location data, or
                    telecom subscriber information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">No account registration</strong> &mdash; Our site does
                    not require user accounts, sign-ups, or logins of any kind.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">No payment processing</strong> &mdash; We do not
                    collect billing information, credit card details, or process
                    any payments.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                2. How We Use Information
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                Since we do not collect personal data from visitors, there is no
                personal information to use. However, our website may
                automatically collect certain technical, non-personal information
                for analytical and performance purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong className="text-blue-950">Browser type and version</strong> &mdash; To ensure
                  compatibility and optimize the user experience.
                </li>
                <li>
                  <strong className="text-blue-950">Operating system</strong> &mdash; To adapt content
                  display for different platforms.
                </li>
                <li>
                  <strong className="text-blue-950">Referring website</strong> &mdash; To understand how
                  visitors find our site.
                </li>
                <li>
                  <strong className="text-blue-950">Pages visited and time spent</strong> &mdash; To
                  identify popular content and improve our guides.
                </li>
                <li>
                  <strong className="text-blue-950">General geographic region</strong> &mdash; To serve
                  content relevant to Pakistani telecom users.
                </li>
              </ul>
              <p>
                This data is aggregated and anonymous. It cannot be used to
                identify individual visitors.
              </p>
            </div>
          </div>

          {/* Section 3: Third-Party Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                3. Third-Party Services
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                PakSimInfo uses the following third-party services to operate and
                improve the website:
              </p>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-blue-950 mb-1 text-sm">
                      Analytics Services
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We may use privacy-respecting analytics tools to understand
                      traffic patterns, popular pages, and general visitor
                      demographics. All analytics data is aggregated and does not
                      contain personally identifiable information. We do not use
                      analytics for tracking or profiling individual users.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-blue-950 mb-1 text-sm">
                      Content Delivery Networks (CDNs)
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Static assets (CSS, JavaScript, images) may be served
                      through CDNs for faster page loading. CDN providers may log
                      standard access information (IP address, browser, request
                      time) in accordance with their own privacy policies. We
                      choose CDN providers that minimize data retention.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-blue-950 mb-1 text-sm">
                      Hosting Provider
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      PakSimInfo is hosted on Vercel. Vercel may collect server
                      logs and performance metrics as part of their hosting
                      service. Please refer to{" "}
                      <a
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Vercel&apos;s Privacy Policy
                      </a>{" "}
                      for details.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Section 4: Cookies Policy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                4. Cookies Policy
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                Cookies are small text files stored on your device by your web
                browser. PakSimInfo may use cookies for the following purposes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-blue-950">
                        Cookie Type
                      </th>
                      <th className="px-4 py-3 font-semibold text-blue-950">
                        Purpose
                      </th>
                      <th className="px-4 py-3 font-semibold text-blue-950">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-blue-950">
                        Essential
                      </td>
                      <td className="px-4 py-3">
                        Required for basic site functionality and security
                      </td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-blue-950">
                        Analytics
                      </td>
                      <td className="px-4 py-3">
                        Anonymous traffic analysis and performance monitoring
                      </td>
                      <td className="px-4 py-3">Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-blue-950">
                        Preferences
                      </td>
                      <td className="px-4 py-3">
                        Remembering user preferences (e.g., theme settings)
                      </td>
                      <td className="px-4 py-3">Up to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We do not use cookies for advertising, retargeting, or tracking
                individual users across websites. You can manage or disable
                cookies through your browser settings. Note that disabling cookies
                may affect certain site features.
              </p>
            </div>
          </div>

          {/* Section 5: Third-Party Links Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                5. Third-Party Links Disclaimer
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                PakSimInfo contains links to external websites, including carrier
                websites (Jazz, Telenor, Zong, Ufone), government portals
                (PTA.gov.pk), and other resources. These links are provided for
                informational purposes and convenience only.
              </p>
              <p>
                We do not control the content, privacy practices, or policies of
                third-party websites. Visiting any external link is at your own
                risk, and we strongly recommend reviewing the privacy policy of
                any third-party site you visit. PakSimInfo is not responsible for
                the privacy practices or content of external websites.
              </p>
            </div>
          </div>

          {/* Section 6: Children's Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                6. Children&apos;s Privacy
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                PakSimInfo is a general-audience informational website. Our
                content is not specifically directed at children under the age of
                13. Since we do not knowingly collect personal information from
                any visitors, including children, this is not a concern for our
                platform.
              </p>
              <p>
                However, if you are a parent or guardian and believe that your
                child has somehow provided personal information through our
                website, please contact us immediately at{" "}
                <a
                  href="mailto:contact@paksiminfo.vercel.app"
                  className="text-blue-600 hover:underline font-medium"
                >
                  contact@paksiminfo.vercel.app
                </a>{" "}
                and we will take prompt action to remove any such data.
              </p>
            </div>
          </div>

          {/* Section 7: Changes to This Policy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                7. Changes to This Policy
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or other
                factors. When we make changes, we will update the &ldquo;Last
                Updated&rdquo; date at the top of this page.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your privacy. Continued use of
                our website after any changes constitutes your acceptance of the
                updated policy.
              </p>
            </div>
          </div>

          {/* Section 8: Contact Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                8. Contact Information
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                If you have any questions, concerns, or suggestions about this
                Privacy Policy or our data practices, please reach out to us:
              </p>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-950">Email:</span>
                      <a
                        href="mailto:contact@paksiminfo.vercel.app"
                        className="text-blue-600 hover:underline"
                      >
                        contact@paksiminfo.vercel.app
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-950">Website:</span>
                      <a
                        href="https://paksiminfo.vercel.app"
                        className="text-blue-600 hover:underline"
                      >
                        paksiminfo.vercel.app
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-950">Author:</span>
                      <span>Muhammad Aown Yousaf Naul</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <p>
                We will make every effort to respond to your inquiry within a
                reasonable timeframe.
              </p>
            </div>
          </div>

          {/* Summary Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-950 mb-2 text-sm">
                    Privacy at a Glance
                  </h3>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-px">&#10003;</span>
                      We do not collect personal information from visitors
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-px">&#10003;</span>
                      We do not access SIM databases or subscriber records
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-px">&#10003;</span>
                      Analytics data is anonymous and aggregated
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-px">&#10003;</span>
                      No advertising cookies or user tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-px">&#10003;</span>
                      We respect your privacy and follow legal guidelines
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions About Our Privacy Practices?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            We&apos;re committed to transparency. If anything in this policy is
            unclear, feel free to contact us or review our disclaimer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg px-8 py-3 rounded-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <Link href="/disclaimer">
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                Read Disclaimer
              </button>
            </Link>
            <Link href="/">
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <nav className="py-8 bg-white border-t" aria-label="Site links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              About
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Contact
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/disclaimer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Disclaimer
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog/sim-owner-detail-pakistan"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              SIM Owner Detail Pakistan
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog/cnic-sim-information"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              CNIC SIM Information
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog/pak-sim-info-check-guide"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              PTA SIM Check Guide
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
