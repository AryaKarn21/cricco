import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Activity,
  Trophy,
  Users,
  Film,
  Cpu,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Shield,
  Smartphone,
  BarChart3,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do | Sports-Tech Solutions & Cricket Coverage",
  description:
    "Explore CRIICO's technology stack: real-time digital scoring, grassroots tournament engines, player discovery passports, and community cricket journalism across Nepal.",
};

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B1F49] text-white py-16 lg:py-24 border-b-4 border-[#ED1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Solutions & Capabilities</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 mb-6 tracking-tight">
              Purpose-Built Technology for Every Level of Cricket.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              We engineer specialized digital infrastructure that solves the real operational bottlenecks facing cricket organizers, teams, and players across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Live Match Scoring */}
      <section id="scoring" className="py-20 bg-white text-slate-800 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5FF] text-[#0647B9] text-xs font-bold uppercase mb-4 border border-blue-200">
                <Activity className="w-4 h-4 text-[#ED1C2E]" />
                Digital Experiences
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mb-4">
                Digital Experiences: Real-Time Match Tracking &amp; Live Scoring
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Most live-scoring apps require expensive enterprise subscriptions or assume uninterrupted high-speed connectivity. Our digital scoring client was architected specifically for local pitch conditions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Intuitive Umpire & Scorer UX</div>
                    <div className="text-xs text-slate-600 mt-0.5">Quick one-tap delivery logging: runs, extras, dismissals, bowler rotations, and powerplay tracking.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Live Public Viewer Sync</div>
                    <div className="text-xs text-slate-600 mt-0.5">Instant scorecard synchronization to the public CRIICO web application for remote fans and family.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0647B9] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Automated Wagon Wheels & Run Rate Graphs</div>
                    <div className="text-xs text-slate-600 mt-0.5">Instant visual analytics that transform local matches into professional broadcast-style reports.</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0647B9] hover:underline font-bold text-sm"
                >
                  <span>View live match centre prototype (:3000)</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ED1C2E]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 shadow-sm border-b-4 border-b-[#0647B9]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0647B9] mb-6">Scoring Architecture Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <WifiOff className="w-6 h-6 text-[#ED1C2E] mb-2" />
                    <div className="text-sm font-bold text-[#0B1F49] mb-1">Offline Resilient</div>
                    <div className="text-xs text-slate-600">Stores deliveries locally in IndexedDB when signal drops, syncing safely once reconnected.</div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <Smartphone className="w-6 h-6 text-[#0647B9] mb-2" />
                    <div className="text-sm font-bold text-[#0B1F49] mb-1">Any Device</div>
                    <div className="text-xs text-slate-600">Zero app store barriers. Runs fast on lightweight Android mobile browsers and tablets.</div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <Shield className="w-6 h-6 text-[#0647B9] mb-2" />
                    <div className="text-sm font-bold text-[#0B1F49] mb-1">Scorer Audit Log</div>
                    <div className="text-xs text-slate-600">Tamper-proof revision history for correction of umpire signals or dispute resolution.</div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                    <BarChart3 className="w-6 h-6 text-[#ED1C2E] mb-2" />
                    <div className="text-sm font-bold text-[#0B1F49] mb-1">Exportable PDF/Data</div>
                    <div className="text-xs text-slate-600">Generates official printable match reports for club archives and district records.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tournament Engine */}
      <section id="tournaments" className="py-20 bg-[#EEF5FF] text-slate-800 border-b border-blue-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-sm space-y-4 border-b-4 border-b-[#ED1C2E]">
                <div className="p-4 bg-[#F5F9FF] rounded-xl border border-blue-100">
                  <div className="text-xs font-bold text-[#0647B9] uppercase">Automated Group Stage Calculations</div>
                  <div className="text-sm text-slate-700 mt-1">Automatic Net Run Rate (NRR) computation removing manual mathematical errors during tiebreakers.</div>
                </div>
                <div className="p-4 bg-[#F5F9FF] rounded-xl border border-blue-100">
                  <div className="text-xs font-bold text-[#0647B9] uppercase">Squad Eligibility & Rosters</div>
                  <div className="text-sm text-slate-700 mt-1">Prevention of illegal duplicate player registrations across competing clubs in the same tournament.</div>
                </div>
                <div className="p-4 bg-[#F5F9FF] rounded-xl border border-blue-100">
                  <div className="text-xs font-bold text-[#0647B9] uppercase">Public Tournament Portal</div>
                  <div className="text-sm text-slate-700 mt-1">Dedicated web URL for every tournament featuring live points tables, top run-scorers, and wicket-takers.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0647B9] text-xs font-bold uppercase mb-4 border border-blue-200 shadow-xs">
                <Trophy className="w-4 h-4 text-[#ED1C2E]" />
                Talent &amp; Tournaments
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mb-4">
                Talent &amp; Tournaments: Grassroots Management Made Effortless
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Organizing a district cup or school championship involves dozens of moving parts: schedule changes, weather delays, points disputes, and sponsor reporting. CRIICO handles the heavy lifting so organizers can focus on the cricket.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                From 4-team school round-robins to 32-team district knockout cups, our engine scales flexibly without requiring costly enterprise software setups.
              </p>
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors shadow-sm"
              >
                <span>Partner for Your Tournament</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Player Passports */}
      <section id="players" className="py-20 bg-white text-slate-800 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5FF] text-[#0647B9] text-xs font-bold uppercase mb-4 border border-blue-200">
              <Users className="w-4 h-4 text-[#ED1C2E]" />
              Athlete Visibility
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F49] mb-4">
              Player Discovery & Digital Passports
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              Every young cricketer in Nepal should possess a verifiable, permanent record of their sporting journey. CRIICO turns match data into lifelong athletic passports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 border-b-4 border-b-[#0647B9]">
              <h3 className="text-lg font-bold text-[#0B1F49] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ED1C2E]" />
                Verified Career Records
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Innings-by-innings batting and bowling stats calculated directly from verified match scorecards, eliminating fabricated or exaggerated resumes.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 border-b-4 border-b-[#0647B9]">
              <h3 className="text-lg font-bold text-[#0B1F49] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ED1C2E]" />
                Scouting Accessibility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Allows regional coaches, academy directors, and district selectors to review promising talent from remote districts through factual data.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 border-b-4 border-b-[#0647B9]">
              <h3 className="text-lg font-bold text-[#0B1F49] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ED1C2E]" />
                Player Milestone Badges
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Celebrate five-wicket hauls, half-centuries, and match-winning moments with shareable digital accolades for families and community fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Digital Media & Journalism */}
      <section id="media" className="py-20 bg-[#F5F9FF] text-slate-800 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0647B9] text-xs font-bold uppercase mb-4 border border-blue-200 shadow-xs">
                <Film className="w-4 h-4 text-[#ED1C2E]" />
                Cricket &amp; Community
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mb-4">
                Cricket &amp; Community: Grassroots Media &amp; Authentic Storytelling
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Traditional sports channels only cover international fixtures and top-tier national leagues. The thousands of stories taking place on district grounds remain completely untold.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                CRIICO creates dedicated original media: spotlighting dedicated local coaches, emerging teenage prodigies, community volunteers, and rural tournaments that embody the true heart of Nepali cricket.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors shadow-sm"
              >
                <span>Pitch a Grassroots Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm border-t-4 border-[#0647B9]">
              <div className="border-l-2 border-[#ED1C2E] pl-4">
                <div className="text-xs uppercase font-bold text-[#0647B9]">Spotlight Feature</div>
                <div className="text-base font-bold text-[#0B1F49] mt-1">Player Journey Longforms</div>
                <div className="text-xs text-slate-600 mt-1">Deep, verified reporting on athletes overcoming financial or geographical hardship to pursue cricket in Nepal.</div>
              </div>

              <div className="border-l-2 border-[#0647B9] pl-4">
                <div className="text-xs uppercase font-bold text-[#0647B9]">Match Archives</div>
                <div className="text-base font-bold text-[#0B1F49] mt-1">Permanent Digital Memory</div>
                <div className="text-xs text-slate-600 mt-1">Preserving tournament chronicles for historical record and community pride.</div>
              </div>

              <div className="border-l-2 border-slate-400 pl-4">
                <div className="text-xs uppercase font-bold text-slate-500">Visual Journalism</div>
                <div className="text-base font-bold text-[#0B1F49] mt-1">High-Quality Ground Photography</div>
                <div className="text-xs text-slate-600 mt-1">Honoring the grit, terrain, and spirit of Nepali grounds through documentary-style photography.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technology Architecture */}
      <section className="py-20 bg-[#0B1F49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Engineering Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Sports-Tech Built for Real-World Reliability
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We engineer our systems to be resilient, performant, and battery-friendly, ensuring scorers and fans can rely on CRIICO even in remote grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#071533] p-6 rounded-2xl border border-white/10">
              <Cpu className="w-6 h-6 text-[#ED1C2E] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Modern Next.js Stack</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                App Router architecture delivering fast static prerendering alongside on-demand real-time updates.
              </p>
            </div>

            <div className="bg-[#071533] p-6 rounded-2xl border border-white/10">
              <Layers className="w-6 h-6 text-[#0647B9] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Low-Bandwidth Optimized</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compressed payloads under 150KB for core live match updates to ensure reliability on slow connections.
              </p>
            </div>

            <div className="bg-[#071533] p-6 rounded-2xl border border-white/10">
              <Shield className="w-6 h-6 text-[#ED1C2E] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Data Privacy & Security</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict protection of youth athlete contact data and secure role-based tournament authorization.
              </p>
            </div>

            <div className="bg-[#071533] p-6 rounded-2xl border border-white/10">
              <Activity className="w-6 h-6 text-[#0647B9] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Clean API Design</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Future-ready REST & WebSocket endpoints ready for verified cricket API integration and broadcaster feeds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
