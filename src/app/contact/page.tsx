import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact PakSimInfo - Get in Touch",
  description:
    "Get in touch with PakSimInfo for questions, corrections, or suggestions about SIM verification guides in Pakistan. Email: contact@paksiminfo-gules.vercel.app",
  openGraph: {
    title: "Contact PakSimInfo - Get in Touch",
    description:
      "Get in touch with PakSimInfo for questions, corrections, or suggestions about SIM verification guides in Pakistan.",
    url: "https://paksiminfo-gules.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
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
              <li className="text-white font-medium">Contact</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
              Have questions about SIM verification, found an error in our
              guides, or want to suggest a topic? We&apos;d love to hear from
              you. Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section (Client Component) */}
      <ContactForm />

      {/* FAQ-style Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
            Common Inquiries
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can you check a SIM owner's name for me?",
                a: "No, we do not provide SIM lookup services or access any private databases. Our site provides guides on how you can legally verify SIM ownership through official PTA and carrier channels.",
              },
              {
                q: "I found an error in one of your guides. How can I report it?",
                a: "Please use the contact form above or email us at contact@paksiminfo-gules.vercel.app. We take accuracy seriously and will update our content promptly when verified corrections are received.",
              },
              {
                q: "Can you help me block an unauthorized SIM registered against my CNIC?",
                a: "Our guide on reporting illegal SIMs covers this in detail. For immediate action, contact your carrier's helpline (Jazz: 111, Telenor: 345, Zong: 310, Ufone: 333) or visit PTA.gov.pk.",
              },
              {
                q: "Do you offer guest posting or partnerships?",
                a: "We welcome collaborations with telecom professionals and cybersecurity experts. Please reach out via the contact form with details about your proposal.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-blue-950 hover:text-blue-600 transition-colors">
                  <span className="text-sm">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore Our SIM Verification Guides
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Browse our comprehensive collection of guides covering PTA
            verification, carrier-specific SIM checks, and telecom safety tips
            for Pakistanis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/sim-owner-detail-pakistan">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg px-8 py-3 rounded-lg transition-colors">
                Read Main Guide
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
              href="/blog/sim-owner-detail-pakistan"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              SIM Owner Detail Pakistan
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog/pak-sim-info-check-guide"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              PTA SIM Check Guide
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
              href="/disclaimer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
