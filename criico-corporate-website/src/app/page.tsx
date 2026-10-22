import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Cpu,
  Trophy,
  CheckCircle2,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. CINEMATIC CRICKET HERO SECTION (Clean Two-Column Layout) */}
      <section className="relative overflow-hidden bg-[#0B1F49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[580px] lg:min-h-[660px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
            {/* Left Content Column */}
            <div className="lg:col-span-7 z-10">
              {/* Eyebrow Label with Red Accent Line */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#ED1C2E] rounded-full" />
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-slate-300">
                  NEPAL&apos;S SPORTS-TECHNOLOGY PLATFORM
                </span>
              </div>

              {/* Main Headline with Highlighted Opportunity */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-5">
                Connecting Cricket. <br />
                Creating{" "}
                <span className="text-[#ED1C2E] relative inline-block">
                  Opportunity.
                  {/* Subtle Red Curved Underline Swoosh */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#ED1C2E]"
                    viewBox="0 0 240 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13C60 3 180 3 237 13"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
                Technology, stories and community powering the next generation of cricket.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-[#ED1C2E] hover:bg-[#d61828] text-white transition-all shadow-md hover:scale-[1.02] group"
                >
                  <span>Discover CRIICO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs transition-all hover:scale-[1.02]"
                >
                  <span>Our Vision</span>
                </Link>
              </div>

              {/* Three Compact Feature Links with Line Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/15">
                <a
                  href="#services"
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#ED1C2E] group-hover:text-[#ED1C2E] transition-colors shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 4.24 4.24" />
                      <path d="m14.83 14.83 4.24 4.24" />
                      <path d="M14.83 9.17a4 4 0 0 0-5.66 5.66" />
                    </svg>
                  </div>
                  <span>Cricket &amp; Community</span>
                </a>

                <a
                  href="#services"
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#0647B9] group-hover:text-blue-400 transition-colors shrink-0">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <span>Digital Experiences</span>
                </a>

                <a
                  href="#services"
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#ED1C2E] group-hover:text-[#ED1C2E] transition-colors shrink-0">
                    <Trophy className="w-3.5 h-3.5" />
                  </div>
                  <span>Talent &amp; Tournaments</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column (Cleanly Contained Batsman & Sunset Stadium Artwork) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#071533]">
                <Image
                  src="/hero-cricket-batsman.jpg"
                  alt="Professional cricket batsman in blue CRIICO jersey facing the stadium at golden hour sunset"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Subtle bottom-edge gradient to harmonize with container */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F49]/70 via-transparent to-transparent pointer-events-none" />
                {/* Corner brand accent line */}
                <div className="absolute top-0 right-0 w-24 h-1 bg-[#ED1C2E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REBUILT ABOUT SECTION (Clean Two-Column Grid with Himalayan Peaks Illustration Behind) */}
      <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-[#EEF5FF] border-b border-blue-100 overflow-hidden">
        {/* Dedicated Background Graphic Element (Himalayan Peaks - No Text, No Overlap) */}
        <div className="absolute right-0 bottom-0 top-0 w-full sm:w-2/3 lg:w-1/2 pointer-events-none z-0 select-none opacity-50 mix-blend-multiply">
          <Image
            src="/himalayan-peaks.svg"
            alt=""
            fill
            className="object-contain object-bottom-right"
            aria-hidden="true"
          />
        </div>

        {/* Foreground Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Label + Headline */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-[#ED1C2E] rounded-full" />
                <span className="text-xs uppercase font-bold tracking-widest text-[#0647B9]">
                  ABOUT CRIICO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F49] tracking-tight leading-[1.12]">
                A Cricket-First <br />
                Platform from Nepal
              </h2>
            </div>

            {/* Middle Divider on Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="w-px h-24 bg-blue-200/80 mx-auto" />
            </div>

            {/* Right Column: Description + Link */}
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
                CRIICO is a cricket-focused digital platform from Nepal, working to make the game more accessible, visible, and impactful for players, fans, tournaments and communities.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0647B9] hover:text-[#053aa0] group"
                >
                  <span>Explore our full journey &amp; values</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ED1C2E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (Three Premium White Cards) */}
      <section id="services" className="py-20 lg:py-28 bg-[#F5F9FF] border-b border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">What We Provide</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F49] tracking-tight mt-2 mb-4">
              Core Sports-Tech Services
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mx-auto mb-5 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              Engineered to bring modern professional digital infrastructure to local grounds, academies, and grassroots tournaments across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Cricket & Community */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1.5 flex flex-col justify-between border-b-4 border-b-[#ED1C2E] group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-[#0647B9] group-hover:text-white transition-colors">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F49] mb-3">Cricket &amp; Community</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Connecting players, fans, clubs, and local cricket communities through authentic grassroots storytelling, player spotlights, and community coverage.
                </p>
              </div>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0647B9] hover:text-[#053aa0] group pt-4 border-t border-slate-100"
              >
                <span>Explore Community Impact</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ED1C2E]" />
              </Link>
            </div>

            {/* Card 2: Digital Experiences */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1.5 flex flex-col justify-between border-b-4 border-b-[#ED1C2E] group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-[#0647B9] group-hover:text-white transition-colors">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F49] mb-3">Digital Experiences</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Modern digital platforms for cricket coverage, live ball-by-ball scoring, interactive match stats, and real-time community engagement.
                </p>
              </div>
              <Link
                href="/what-we-do#scoring"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0647B9] hover:text-[#053aa0] group pt-4 border-t border-slate-100"
              >
                <span>Discover Digital Scoring</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ED1C2E]" />
              </Link>
            </div>

            {/* Card 3: Talent & Tournaments */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1.5 flex flex-col justify-between border-b-4 border-b-[#ED1C2E] group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-[#0647B9] group-hover:text-white transition-colors">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F49] mb-3">Talent &amp; Tournaments</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Helping emerging talent gain visibility with verifiable career passports, alongside scalable tournament software for organizers and academies.
                </p>
              </div>
              <Link
                href="/what-we-do#tournaments"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0647B9] hover:text-[#053aa0] group pt-4 border-t border-slate-100"
              >
                <span>View Tournament Engine</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#ED1C2E]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION STATEMENT */}
      <section className="py-20 lg:py-24 bg-[#EEF5FF] border-b border-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Mission Statement</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F49] tracking-tight mt-3 mb-6">
              “Built for the game. Driven by the community.”
            </h2>
            <div className="w-20 h-1 bg-[#ED1C2E] mx-auto mb-8 rounded-full" />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              CRIICO exists to make cricket across Nepal more accessible, visible, and impactful. We believe that every local match, every volunteer scorer, and every aspiring youth player deserves the dignity of permanent digital records, factual recognition, and modern sports infrastructure.
            </p>
            <div className="inline-flex items-center gap-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-all shadow-md group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GRASSROOTS COMMITMENT & OPERATING PRINCIPLES */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Grassroots Commitment</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] tracking-tight mt-2 mb-6">
                Preserving Nepal&apos;s Cricket Heritage from the Pitch Up
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                While international matches capture stadium crowds, the bedrock of Nepali cricket lives on dusty local grounds in Biratnagar, Bhairahawa, Pokhara, and the Kathmandu Valley.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                CRIICO bridges this divide by providing tournament organizers with free, modern digital scoring tools and ensuring every match has a verified, searchable archive.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0" />
                  <span>Permanent career match logs for school and district cricketers</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0" />
                  <span>Free accessibility for community clubs and grassroots tournament organizers</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0" />
                  <span>Support for women&apos;s cricket and emerging regional leagues</span>
                </div>
              </div>

              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0647B9] hover:underline group"
              >
                <span>Learn more about our community initiatives</span>
                <ArrowRight className="w-4 h-4 text-[#ED1C2E] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0B1F49] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border-t-4 border-[#ED1C2E]">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#EEF5FF] mb-6">Our Operating Principles</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-[#ED1C2E] pl-4">
                    <h4 className="text-lg font-bold text-white mb-1">Authentic Records Only</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We never publish fabricated live scores, bot views, or inflated metrics. All data on CRIICO represents real, verified matches.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0647B9] pl-4">
                    <h4 className="text-lg font-bold text-white mb-1">Low-Bandwidth Resilience</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Designed to work seamlessly on 3G and rural data connections with automatic offline delivery buffering.
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-600 pl-4">
                    <h4 className="text-lg font-bold text-white mb-1">Community Focused</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Built to support the players, scorers, and tournament directors who make Nepali cricket thrive.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">CRIICO Sports Technology</span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTNERSHIP CALL TO ACTION BANNER */}
      <section className="py-16 bg-[#0B1F49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1F49] via-[#071533] to-[#0647B9] border-2 border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Collaborate with CRIICO</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
                Are You Organizing a Tournament or Leading a Cricket Academy?
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Provide your players with live scoring, digital fixtures, and verified career match logs. We offer free digital onboarding for community tournaments across Nepal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold bg-[#ED1C2E] hover:bg-[#d61425] text-white transition-all text-center shadow-md hover:scale-[1.02]"
              >
                Partner With Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-center hover:scale-[1.02]"
              >
                Direct Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact-section" className="py-20 lg:py-28 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
                Connect With Our Team
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Whether you represent a district cricket association, a commercial sponsor, an educational institution, or a local club, our team is eager to connect.
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-sm text-slate-700 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] flex items-center justify-center text-[#0647B9] shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Headquarters</div>
                    <div className="font-bold text-[#0B1F49]">Kathmandu, Nepal</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF5FF] flex items-center justify-center text-[#0647B9] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Platform Focus</div>
                    <div className="font-bold text-[#0B1F49]">Sports-Technology &amp; Grassroots Media</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm defaultCategory="Partnership" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
