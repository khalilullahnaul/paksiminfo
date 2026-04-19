"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { href: "/blog/sim-owner-detail-pakistan", label: "SIM Owner Detail" },
  { href: "/blog/pak-sim-info-check-guide", label: "SIM Check Guide" },
  { href: "/blog/cnic-sim-information", label: "CNIC SIM Info" },
  { href: "/blog/jazz-sim-owner-detail", label: "Jazz SIM Details" },
  { href: "/blog/telenor-sim-owner-check", label: "Telenor SIM" },
  { href: "/blog/zong-sim-ownership-check", label: "Zong SIM" },
  { href: "/blog/ufone-sim-details-verification", label: "Ufone SIM" },
  { href: "/blog/latest-data-pakistan-sims-2026", label: "Latest Data 2026" },
  { href: "/blog/report-illegal-sim-pakistan", label: "Report Illegal SIM" },
  { href: "/blog/block-lost-sim-pakistan", label: "Block Lost SIM" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-950/95 backdrop-blur supports-[backdrop-filter]:bg-blue-950/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Pak<span className="text-blue-400">SimInfo</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              About
            </Link>
            <div className="relative group">
              <button
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors flex items-center gap-1"
              >
                Blog
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {blogOpen && (
                <div
                  className="absolute top-full left-0 w-64 bg-blue-900 border border-blue-800 rounded-xl shadow-2xl py-2 mt-1"
                  onMouseEnter={() => setBlogOpen(true)}
                  onMouseLeave={() => setBlogOpen(false)}
                >
                  {blogPosts.map((post) => (
                    <Link key={post.href} href={post.href} className="block px-4 py-2 text-sm hover:bg-blue-800/60 transition-colors">
                      {post.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25">
                Check SIM Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-blue-900/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-blue-900 bg-blue-950">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-md text-sm font-medium hover:bg-blue-900/60 transition-colors">
              Contact
            </Link>
            <div className="pt-2 border-t border-blue-900">
              <p className="px-3 py-1 text-xs text-blue-400 uppercase tracking-wider font-semibold">Blog Posts</p>
              {blogPosts.map((post) => (
                <Link key={post.href} href={post.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-blue-900/60 transition-colors text-blue-200">
                  {post.label}
                </Link>
              ))}
            </div>
            <div className="pt-3">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  Check SIM Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
