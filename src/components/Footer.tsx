import Link from "next/link";
import { Phone, Mail, Shield } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const blogLinks = [
  { href: "/blog/sim-owner-detail-pakistan", label: "SIM Owner Detail Pakistan" },
  { href: "/blog/pak-sim-info-check-guide", label: "Pak SIM Info Check Guide" },
  { href: "/blog/cnic-sim-information", label: "CNIC SIM Information" },
  { href: "/blog/jazz-sim-owner-detail", label: "Jazz SIM Owner Detail" },
  { href: "/blog/telenor-sim-owner-check", label: "Telenor SIM Owner Check" },
  { href: "/blog/zong-sim-ownership-check", label: "Zong SIM Ownership Check" },
  { href: "/blog/ufone-sim-details-verification", label: "Ufone SIM Details" },
  { href: "/blog/latest-data-pakistan-sims-2026", label: "Latest Data Pakistan SIMs 2026" },
  { href: "/blog/report-illegal-sim-pakistan", label: "Report Illegal SIM" },
  { href: "/blog/block-lost-sim-pakistan", label: "Block Lost SIM" },
];

const carrierLinks = [
  { href: "/blog/jazz-sim-owner-detail", label: "Jazz" },
  { href: "/blog/telenor-sim-owner-check", label: "Telenor" },
  { href: "/blog/zong-sim-ownership-check", label: "Zong" },
  { href: "/blog/ufone-sim-details-verification", label: "Ufone" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 border-t border-blue-900">
      {/* Disclaimer Banner */}
      <div className="border-b border-blue-900 bg-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-start gap-2 text-sm text-blue-300">
            <Shield className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
            <p>
              <strong className="text-blue-200">Disclaimer:</strong> PakSimInfo is an independent informational platform. We are not affiliated with PTA, Jazz, Telenor, Zong, Ufone, or any government agency. We do not access private SIM databases or provide live tracking. For official matters, visit{" "}
              <a href="https://www.pta.gov.pk" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                PTA.gov.pk
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Pak<span className="text-blue-400">SimInfo</span>
              </span>
            </Link>
            <p className="text-sm text-blue-300 leading-relaxed mb-4">
              Your trusted source for Pakistan telecom guides, SIM verification methods, and PTA regulation updates. Providing accurate, legal, and up-to-date information since 2024.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Mail className="w-4 h-4" />
              <span>contact@paksiminfo.vercel.app</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Carrier Guides */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Carrier Guides</h3>
            <ul className="space-y-2.5">
              {carrierLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                    {link.label} SIM Details
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-4">Popular Articles</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog/latest-data-pakistan-sims-2026" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Latest Data Pakistan SIMs 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/report-illegal-sim-pakistan" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Report Illegal SIM
                </Link>
              </li>
            </ul>
          </div>

          {/* All Blog Posts */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">All Guides</h3>
            <ul className="space-y-2.5">
              {blogLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <p>&copy; {new Date().getFullYear()} PakSimInfo. All rights reserved.</p>
          <p>
            Written by <strong className="text-blue-300">Muhammad Aoun Yousaf Naul</strong> &middot; For informational purposes only.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
