import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Target,
  ShieldCheck,
  Users2,
  Cpu,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CRIICO Story, Mission, Vision & Values",
  description:
    "Learn about CRIICO's origin, our mission to empower Nepal's cricket ecosystem through digital sports technology, and our core operating values.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B1F49] text-white py-16 lg:py-24 border-b-4 border-[#ED1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Company Overview</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 mb-6 tracking-tight">
              Our Story, Mission, & Commitment to Nepal&apos;s Cricket.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              CRIICO was founded by cricket enthusiasts and technologists in Nepal who believe every ball bowled in a district championship carries the same dignity as a match in a national stadium.
            </p>
          </div>
        </div>
      </section>

      {/* The CRIICO Story */}
      <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Origin & Purpose</span>
              <h2 className="text-3xl font-black text-[#0B1F49] mt-2 mb-4">
                Why We Started CRIICO
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <div className="bg-[#EEF5FF] p-6 rounded-2xl border border-blue-100 text-sm text-slate-700 space-y-4 shadow-sm">
                <div className="text-xs font-bold uppercase text-[#0647B9]">The Problem We Observed</div>
                <p>
                  Across Nepal, passionate cricketers practice on uneven fields, organize grassroots tournaments with personal savings, and record landmark scores on paper notebooks that are lost within weeks.
                </p>
                <div className="pt-2 border-t border-blue-200">
                  <span className="text-[#ED1C2E] font-bold">The Consequence:</span> Outstanding grassroots talent remained unverified and unrecognized beyond their immediate community.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
              <p>
                In recent years, Nepal has witnessed breathtaking triumphs on the international cricket stage—capturing the world&apos;s imagination with unforgettable enthusiasm and stadium crowds that rival any sporting nation on Earth.
              </p>
              <p>
                Yet, behind the national team lies a fragile, disconnected grassroots foundation. District tournaments lack reliable digital platforms to showcase scores; young prodigies cannot point scouts to a verified record of their batting averages; and tournament sponsors have no verifiable analytics to measure their support.
              </p>
              <p>
                CRIICO was conceived to bridge this exact divide. We are building the unified digital infrastructure for cricket in Nepal—combining lightweight, mobile-first live scoring, tournament management tools, player passports, and grassroots community journalism.
              </p>
              <div className="pt-4">
                <div className="p-6 bg-[#F5F9FF] border-l-4 border-[#0647B9] rounded-r-xl">
                  <h3 className="text-[#0B1F49] font-bold text-base mb-1">Our Core Commitment</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We will never display fake scores, fabricate player profiles, or sell inflated metrics. We measure our success solely by how many real cricketers, clubs, and tournaments we empower across Nepal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Detailed */}
      <section className="py-20 bg-[#F5F9FF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Direction</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-3">
              Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm border-b-4 border-b-[#0647B9]">
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F49] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                To build, maintain, and provide accessible, cutting-edge sports technology that connects grassroots cricketers, tournament organizers, fans, and clubs across all 77 districts of Nepal—enabling transparent record-keeping, real-time match engagement, and authentic talent visibility.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm border-b-4 border-b-[#ED1C2E]">
              <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F49] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                To establish Nepal as a global benchmark for passionate, grassroots-driven sports technology—where every aspiring player has a permanent digital footprint, every regional championship runs with professional efficiency, and the sport thrives as a transformative community force.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mb-5 rounded-full" />
            <p className="text-slate-600 text-base">
              The operating standards that dictate how we engineer software, manage athletic records, and collaborate with grassroots partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F9FF] p-7 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F49] mb-2">Community First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize the practical needs of volunteer scorers, district coordinators, and youth players above all else.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-7 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F49] mb-2">Verifiable Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cricket records are sacred. We ensure all statistics published through our platform represent real, verified matches.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-7 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F49] mb-2">Contextual Tech</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We engineer systems that function seamlessly on low-bandwidth rural networks, mobile browsers, and basic devices.
              </p>
            </div>

            <div className="bg-[#F5F9FF] p-7 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-5">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F49] mb-2">Inclusivity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active encouragement of women&apos;s cricket, junior school leagues, and rural remote districts often ignored by mainstream media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Leadership & Collaboration Callout */}
      <section className="py-20 bg-[#0B1F49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071533] border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#EEF5FF] text-xs font-semibold uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#ED1C2E]" />
                Collaborative Movement
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Join the CRIICO Founding Ecosystem
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                CRIICO is driven by a passionate team of full-stack engineers, sports journalists, and community cricket leaders based in Kathmandu, Nepal. We believe in total transparency: we do not publish fabricated executive rosters or fake advisory titles.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                We are actively looking for district cricket coordinators, software contributors, sports journalists, and advisory partners who share our determination to elevate Nepal&apos;s sports-technology landscape.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  <span>Connect With Our Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/partnerships"
                  className="px-6 py-3 rounded-lg text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  Partnership Framework
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
