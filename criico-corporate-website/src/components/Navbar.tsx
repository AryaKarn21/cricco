"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

// TEMPORARY TOGGLE: Set to true to restore the Match Centre button in the header
const SHOW_MATCH_CENTRE_HEADER = false;

const navItems = [
  { name: "About", href: "/#about" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Our Impact", href: "/impact" },
  { name: "Partnerships", href: "/#partnerships" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200 shadow-sm py-2.5"
          : "border-b border-slate-100 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Official CRIICO Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0647B9] rounded-lg group py-1"
            aria-label="CRIICO Corporate Home"
          >
            <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/criico-logo.png"
                alt="CRIICO Official Logo"
                width={160}
                height={84}
                className="object-contain h-10 sm:h-12 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Corporate Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#0647B9] bg-[#EEF5FF] font-bold"
                      : "text-slate-700 hover:text-[#0647B9] hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Prominent Blue "Become a Partner" Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Preserved Match Centre link (temporarily hidden per requirements) */}
            {SHOW_MATCH_CENTRE_HEADER && (
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 hover:text-[#0647B9] hover:bg-[#EEF5FF] transition-colors border border-slate-200"
                title="Visit the live cricket match centre & scores platform"
              >
                <span>Match Centre</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0647B9]" />
              </a>
            )}

            <Link
              href="/#partnerships"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-all shadow-sm hover:shadow-md hover:scale-[1.01] group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0647B9] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0647B9]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-4 border-t border-slate-100 mt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "text-[#0647B9] bg-[#EEF5FF] font-bold"
                        : "text-slate-800 hover:text-[#0647B9] hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              {SHOW_MATCH_CENTRE_HEADER && (
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold bg-slate-50 text-slate-700 border border-slate-200"
                >
                  <span>Match Centre (:3000)</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0647B9]" />
                </a>
              )}

              <Link
                href="/#partnerships"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold bg-[#0647B9] text-white text-center shadow-sm hover:bg-[#053aa0] transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
