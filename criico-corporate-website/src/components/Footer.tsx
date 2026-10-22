import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@criico.com";
  const companyLocation = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Kathmandu, Nepal";
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+977 (Official Contact Pending)";

  return (
    <footer className="bg-[#0B1F49] text-slate-300 border-t-4 border-[#ED1C2E]">
      {/* Top Banner / Callout */}
      <div className="border-b border-white/10 bg-[#071533] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Grassroots To Elite</span>
            <h3 className="text-xl font-bold text-white mt-1">Ready to elevate your cricket tournament or club?</h3>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/partnerships"
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors shadow-sm"
            >
              Explore Partnerships
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column with actual logo */}
          <div className="lg:col-span-2">
            <BrandLogo variant="dark" showTagline={true} />
            <p className="mt-5 text-sm text-slate-300 leading-relaxed max-w-sm">
              CRIICO is a Nepal-based sports-technology company dedicated to connecting grassroots cricket, tournament organizers, players, and communities through modern digital infrastructure and authentic storytelling.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ED1C2E] shrink-0" />
                <span>{companyLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ED1C2E] shrink-0" />
                <span>{companyEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ED1C2E] shrink-0" />
                <span>{companyPhone}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#ED1C2E] pb-1.5 inline-block">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">Partnerships</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#ED1C2E] pb-1.5 inline-block">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/what-we-do#scoring" className="hover:text-white transition-colors">Digital Scoring</Link>
              </li>
              <li>
                <Link href="/what-we-do#tournaments" className="hover:text-white transition-colors">Tournament Engine</Link>
              </li>
              <li>
                <Link href="/what-we-do#players" className="hover:text-white transition-colors">Player Passports</Link>
              </li>
              <li>
                <Link href="/what-we-do#media" className="hover:text-white transition-colors">Grassroots Media</Link>
              </li>
              <li>
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#EEF5FF] hover:text-white font-medium"
                >
                  <span>Cricket Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ED1C2E]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#ED1C2E] pb-1.5 inline-block">
              Integrity
            </h4>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ED1C2E] shrink-0 mt-0.5" />
                <span>Verified Data Only: We do not publish fabricated scores, bot statistics, or unverified claims.</span>
              </div>
              <p>
                CRIICO operates as an independent sports-tech initiative aimed at empowering the cricket ecosystem across Nepal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} CRIICO (Nepal). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corporate Portal (Port 3001)</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ED1C2E]" />
            <span>Cricket Platform (Port 3000)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
