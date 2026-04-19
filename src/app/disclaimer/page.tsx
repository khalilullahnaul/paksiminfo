import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  AlertTriangle,
  ExternalLink,
  Scale,
  BookOpen,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Disclaimer - PakSimInfo",
  description:
    "Read the official disclaimer for PakSimInfo. We are an independent informational platform not affiliated with PTA, Jazz, Telenor, Zong, Ufone, or any government agency.",
  openGraph: {
    title: "Disclaimer - PakSimInfo",
    description:
      "Read the official disclaimer for PakSimInfo. Independent informational platform for SIM verification guides in Pakistan.",
    url: "https://paksiminfo-gules.vercel.app/disclaimer",
  },
};

export default function DisclaimerPage() {
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
                item: "https://paksiminfo-gules.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Disclaimer",
                item: "https://paksiminfo-gules.vercel.app/disclaimer",
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
              <li className="text-white font-medium">Disclaimer</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-blue-400">Disclaimer</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
              Please read this disclaimer carefully before using PakSimInfo. It
              explains the nature of our platform, our limitations, and the
              scope of information we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Official Disclaimer — Prominent */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-amber-300 bg-white shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-amber-900">
                    Official Disclaimer
                  </h2>
                  <p className="text-xs text-amber-700">
                    Please read this section carefully
                  </p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed text-sm space-y-4 pl-0 sm:pl-[60px]">
                <p>
                  PakSimInfo is an independent informational platform dedicated
                  to providing guides on telecom safety and SIM verification in
                  Pakistan. We are not affiliated with, endorsed by, or connected
                  to the Pakistan Telecommunication Authority (PTA), Jazz,
                  Telenor, Zong, Ufone, or any government agency.
                </p>
                <p>
                  We do not have access to private SIM databases, call records, or
                  real-time location tracking tools. Any feature on this site that
                  appears to &ldquo;check&rdquo; a SIM directs users to official
                  carrier codes or PTA portals. &ldquo;Sim Owner Detail&rdquo;
                  queries are answered via public verification methods intended
                  for self-checking. We strictly oppose privacy violations and
                  cyberstalking. For official complaints, please visit{" "}
                  <a
                    href="https://www.pta.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    PTA.gov.pk
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                Limitation of Liability
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                The information provided on PakSimInfo is for general
                informational and educational purposes only. While we strive to
                ensure the accuracy and timeliness of our content, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the information, products, services, or related
                graphics contained on this website.
              </p>
              <p>
                In no event will PakSimInfo, its author, or its contributors be
                liable for any loss or damage including without limitation,
                indirect or consequential loss or damage, or any loss or damage
                whatsoever arising from loss of data or profits arising out of, or
                in connection with, the use of this website and its content.
              </p>
              <p>
                Telecom regulations in Pakistan are subject to change. Carrier
                codes, PTA procedures, and SIM verification methods may be updated
                by the respective authorities at any time. Always verify current
                procedures directly with your carrier or PTA before taking action.
              </p>
            </div>
          </div>

          {/* Section 2: External Links */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                External Links
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                PakSimInfo may include links to external websites and resources
                that are not provided or maintained by us. We do not guarantee
                the accuracy, relevance, timeliness, or completeness of any
                information on these external websites.
              </p>
              <p>
                The inclusion of any links does not necessarily imply a
                recommendation, endorsement, or approval of the linked website.
                Links to carrier websites (Jazz, Telenor, Zong, Ufone), PTA
                portals, and government resources are provided solely for the
                convenience of our readers to access official SIM verification
                channels.
              </p>
              <p>
                We have no control over the nature, content, and availability of
                external sites. If you decide to access any third-party website,
                you do so entirely at your own risk and subject to the terms and
                conditions of use for such websites.
              </p>
            </div>
          </div>

          {/* Section 3: No Professional Advice */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                No Professional Advice
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                The content on PakSimInfo does not constitute legal advice,
                professional telecom consultation, or official regulatory
                guidance. The guides, tutorials, and information provided are
                based on publicly available data and personal research by the
                author.
              </p>
              <p>
                You should not act or refrain from acting based on information
                provided on this website without first seeking appropriate
                professional advice from qualified legal counsel, your telecom
                carrier, or the Pakistan Telecommunication Authority (PTA).
              </p>
              <p>
                For matters involving SIM fraud, unauthorized registration,
                identity theft, or other legal concerns, we strongly recommend
                contacting the relevant authorities:
              </p>
              <ul className="ml-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">PTA Complaints:</strong>{" "}
                    Visit{" "}
                    <a
                      href="https://www.pta.gov.pk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      PTA.gov.pk
                    </a>{" "}
                    or call PTA helpline
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">Jazz:</strong> Dial 111
                    from your Jazz number
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">Telenor:</strong> Dial 345
                    from your Telenor number
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">Zong:</strong> Dial 310
                    from your Zong number
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-blue-950">Ufone:</strong> Dial 333
                    from your Ufone number
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notice Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 mb-12">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-950 mb-2 text-sm">
                    Important Notice
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    PakSimInfo strictly opposes any form of privacy violation,
                    cyberstalking, or unauthorized access to personal information.
                    Our guides are designed to help Pakistani citizens
                    <strong className="text-blue-950"> legally verify their own SIMs</strong> and
                    protect themselves from fraud. If you are using SIM
                    verification methods for any purpose other than checking your
                    own registered numbers, you may be violating Pakistan&apos;s
                    cybercrime laws (PECA 2016). Always respect others&apos;
                    privacy and use telecom services responsibly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact / Questions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-950">
                Questions or Concerns?
              </h2>
            </div>
            <div className="ml-0 sm:ml-[52px] text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                If you have any questions about this disclaimer, believe any
                content on our site is inaccurate or misleading, or would like to
                request a correction, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
                    Contact Us
                  </button>
                </Link>
                <Link href="/privacy-policy">
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
                    Privacy Policy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Informed &amp; Stay Safe
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Browse our SIM verification guides to learn how to protect your
            identity and use legal channels for telecom services in Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/sim-owner-detail-pakistan">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg px-8 py-3 rounded-lg transition-colors">
                Read Main Guide
              </button>
            </Link>
            <Link href="/privacy-policy">
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                Privacy Policy
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
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Privacy Policy
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
