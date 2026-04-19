import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  BookOpen,
  Users,
  Award,
  Target,
  Eye,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About PakSimInfo - Our Mission & Author",
  description:
    "Learn about PakSimInfo, an independent informational platform providing accurate, legal SIM verification guides for Pakistan. Written by Muhammad Aoun Yousaf Naul, Telecom Analyst & Tech Strategist.",
  openGraph: {
    title: "About PakSimInfo - Our Mission & Author",
    description:
      "Learn about PakSimInfo, an independent informational platform providing accurate, legal SIM verification guides for Pakistan.",
    url: "https://paksiminfo.vercel.app/about",
  },
};

export default function AboutPage() {
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
                name: "About",
                item: "https://paksiminfo.vercel.app/about",
              },
            ],
          }),
        }}
      />

      {/* AboutHero Section */}
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
              <li className="text-white font-medium">About</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              About{" "}
              <span className="text-blue-400">PakSimInfo</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
              We are an independent informational platform dedicated to providing
              accurate, legal, and up-to-date SIM verification guides for
              Pakistan. Our mission is to empower citizens with the knowledge
              they need to protect their identity and verify SIM ownership safely.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Empowering Pakistanis with Legal SIM Verification Knowledge
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PakSimInfo was founded with a clear purpose: to provide
                  Pakistanis with reliable, step-by-step guides on how to verify
                  SIM ownership, check CNIC-registered SIMs, and navigate the
                  country&apos;s telecom regulations — all through legal and
                  officially approved methods.
                </p>
                <p>
                  With the rapid growth of mobile connectivity in Pakistan and the
                  increasing prevalence of SIM fraud, we recognized the urgent
                  need for a centralized resource that cuts through misinformation
                  and provides clear, actionable guidance based on official PTA
                  (Pakistan Telecommunication Authority) procedures.
                </p>
                <p>
                  Every guide on PakSimInfo is researched thoroughly, tested for
                  accuracy, and updated regularly to reflect the latest changes in
                  Pakistan&apos;s telecom landscape, including PTA DIRBS
                  regulations, carrier-specific procedures, and new security
                  measures.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Legal & Safe Methods",
                  description:
                    "All guides follow PTA guidelines and Pakistan privacy laws. No illegal tracking or unauthorized access.",
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Guides",
                  description:
                    "Detailed tutorials for Jazz, Telenor, Zong, Ufone SIM verification and PTA DIRBS system.",
                },
                {
                  icon: Eye,
                  title: "Transparency First",
                  description:
                    "We clearly state our limitations and always direct users to official channels when needed.",
                },
                {
                  icon: Users,
                  title: "Community Focused",
                  description:
                    "Built for the Pakistani public, with practical advice relevant to local telecom users.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600"
                >
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-950 mb-1 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Award className="w-4 h-4" />
              Meet the Author
            </div>
            <Card className="overflow-hidden">
              <div className="md:flex">
                {/* Author Avatar Area */}
                <div className="md:w-72 bg-gradient-to-br from-blue-950 to-blue-800 flex flex-col items-center justify-center p-8 text-white">
                  <div className="w-28 h-28 rounded-full bg-blue-500/30 border-4 border-blue-400/50 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-blue-200">MY</span>
                  </div>
                  <h3 className="text-xl font-bold text-center">
                    Muhammad Aoun Yousaf Naul
                  </h3>
                  <p className="text-blue-300 text-sm mt-1 text-center">
                    Telecom Analyst & Tech Strategist
                  </p>
                </div>

                {/* Author Bio */}
                <CardContent className="pt-8 md:p-8">
                  <h2 className="text-2xl font-bold text-blue-950 mb-4">
                    About the Author
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      <strong className="text-blue-950">
                        Muhammad Aoun Yousaf Naul
                      </strong>{" "}
                      is a Telecom Analyst and Tech Strategist with deep expertise
                      in Pakistan&apos;s telecommunications ecosystem. With years
                      of experience analyzing telecom policies, SIM registration
                      systems, and mobile network operations, he brings
                      authoritative insights to every guide published on
                      PakSimInfo.
                    </p>
                    <p>
                      His work focuses on bridging the gap between complex telecom
                      regulations and everyday users. Having extensively studied
                      PTA&apos;s DIRBS system, carrier-specific SIM verification
                      processes, and Pakistan&apos;s evolving cybersecurity laws,
                      he provides practical, legally sound advice that Pakistanis
                      can trust.
                    </p>
                    <p>
                      Muhammad Aoun founded PakSimInfo with the belief that every
                      Pakistani citizen deserves access to clear, accurate
                      information about SIM verification — empowering them to
                      protect their identity, report unauthorized SIMs, and
                      navigate the telecom system confidently.
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "SIM Verification",
                      "PTA DIRBS",
                      "Telecom Policy",
                      "CNIC Regulations",
                      "Cybersecurity",
                      "Mobile Networks",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* EEAT Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-3">
              Why Trust PakSimInfo?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our content is built on the pillars of Expertise, Experience,
              Authoritativeness, and Trustworthiness — the four signals that
              matter most for reliable information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Expertise",
                description:
                  "Our guides are written by a certified Telecom Analyst with in-depth knowledge of Pakistan's SIM verification systems, PTA regulations, and carrier-specific processes.",
              },
              {
                icon: Award,
                title: "Experience",
                description:
                  "Years of hands-on experience analyzing Pakistan's telecom ecosystem, studying PTA policy changes, and helping citizens navigate SIM verification processes.",
              },
              {
                icon: Shield,
                title: "Authoritativeness",
                description:
                  "PakSimInfo is cited as a reliable resource for SIM verification information. Our content references official PTA guidelines and carrier documentation.",
              },
              {
                icon: CheckCircle,
                title: "Trustworthiness",
                description:
                  "We maintain full transparency about our limitations, never claim affiliation with government agencies, and always recommend official channels for critical matters.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-950 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer / Non-Affiliation Section */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Important Disclaimer
          </h2>
          <div className="bg-white rounded-xl p-6 border border-amber-200 text-amber-900">
            <p className="text-lg font-semibold mb-2">
              We are not affiliated with PTA, Jazz, Telenor, Zong, Ufone, or any
              government agency.
            </p>
            <p className="text-sm leading-relaxed">
              PakSimInfo is an independent informational platform. We do not
              access private SIM databases, provide live tracking services, or
              represent any telecom operator or government body. Our guides are
              based on publicly available information and official PTA
              procedures. For official SIM verification, complaints, or
              regulatory matters, please visit{" "}
              <a
                href="https://www.pta.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold hover:text-amber-700"
              >
                PTA.gov.pk
              </a>{" "}
              or contact your carrier directly.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-3">
              Explore Our Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive SIM verification guides written with accuracy and
              legal compliance in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/blog/sim-owner-detail-pakistan",
                title: "How to Check SIM Owner Details in Pakistan (2026 Guide)",
              },
              {
                href: "/blog/cnic-sim-information",
                title: "How to Check CNIC SIM Information Online via PTA",
              },
              {
                href: "/blog/pak-sim-info-check-guide",
                title: "Pak SIM Info Check Guide - Complete PTA Verification",
              },
              {
                href: "/blog/latest-data-pakistan-sims-2026",
                title: "Latest Data Pakistan SIMs 2026: 5G, Privacy & Regulation",
              },
              {
                href: "/blog/report-illegal-sim-pakistan",
                title: "How to Report Illegal/Unregistered SIMs in Pakistan",
              },
              {
                href: "/blog/block-lost-sim-pakistan",
                title: "How to Block a Lost SIM Card in Pakistan Instantly",
              },
            ].map((blog) => (
              <Link key={blog.href} href={blog.href} className="group">
                <Card className="h-full hover:shadow-lg hover:border-blue-200 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
                      <Phone className="w-3.5 h-3.5" />
                      GUIDE
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug text-sm">
                      {blog.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-blue-600 text-xs font-medium">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get in touch with us for inquiries, corrections, or suggestions. We
            value feedback from our readers and are always working to improve
            our guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg px-8 py-3 rounded-lg transition-colors">
                Contact Us
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
            <span className="text-gray-300">|</span>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
