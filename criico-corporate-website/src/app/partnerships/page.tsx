import React from "react";
import { Metadata } from "next";
import {
  Trophy,
  Users2,
  Building2,
  Tv,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partnerships | Collaborate with CRIICO Nepal",
  description:
    "Explore partnership opportunities with CRIICO for cricket tournament organizers, district associations, sports academies, and corporate sponsors across Nepal.",
};

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B1F49] text-white py-16 lg:py-24 border-b-4 border-[#ED1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Ecosystem Collaboration</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 mb-6 tracking-tight">
              Grow the Game Together Through Strategic Partnerships.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              CRIICO collaborates with clubs, district associations, corporate sponsors, and media organizations to build a modern, transparent sports-technology foundation for Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Partnership Pillars */}
      <section className="py-20 bg-[#F5F9FF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Collaboration Framework</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
              Tailored Models for Key Cricket Stakeholders
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mb-5 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              We know every cricket organization has different objectives. Explore how CRIICO delivers value for your specific organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model 1: Tournament Organizers */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <Trophy className="w-6 h-6 text-[#ED1C2E]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0647B9]">For Tournament Organizers</span>
                <h3 className="text-2xl font-bold text-[#0B1F49] mt-1 mb-4">District & Community Championships</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Upgrade your tournament from paper scorecards to a professional digital experience with zero technical friction.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Free live scoring engine for verified community cups</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Automated points tables, NRR calculations & official fixture schedule pages</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Dedicated public URL for fans, player families, and sponsors</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Certified scorer onboarding and remote assistance</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#partnership-enquiry"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0647B9] hover:underline"
                >
                  <span>Request Tournament Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ED1C2E]" />
                </a>
              </div>
            </div>

            {/* Model 2: Academies & Clubs */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <Users2 className="w-6 h-6 text-[#0647B9]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0647B9]">For Academies & Clubs</span>
                <h3 className="text-2xl font-bold text-[#0B1F49] mt-1 mb-4">Cricket Academies & Club Leagues</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Equip your coaching staff and academy athletes with structured digital player passports and training match records.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Digital squad rosters and player development tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Internal practice match scoring & historical season archives</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Verifiable performance portfolios for students aiming for national trials</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Club branding & social media export cards</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#partnership-enquiry"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0647B9] hover:underline"
                >
                  <span>Connect With Our Academy Team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ED1C2E]" />
                </a>
              </div>
            </div>

            {/* Model 3: Corporate Sponsors */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <Building2 className="w-6 h-6 text-[#ED1C2E]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0647B9]">For Corporate Sponsors</span>
                <h3 className="text-2xl font-bold text-[#0B1F49] mt-1 mb-4">Authentic Sports Sponsorship</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Connect your brand directly with genuine community goodwill and hyper-engaged cricket audiences across Nepal.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Digital scorecard branding on grassroots tournament portals</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Sponsorship attribution for player awards (Player of the Match, Top Wicket-Taker)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Verifiable impression and audience engagement reporting</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Corporate Social Responsibility (CSR) sports impact programs</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#partnership-enquiry"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0647B9] hover:underline"
                >
                  <span>Explore Sponsorship Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ED1C2E]" />
                </a>
              </div>
            </div>

            {/* Model 4: Media & Press */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <Tv className="w-6 h-6 text-[#0647B9]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0647B9]">For Media & Press</span>
                <h3 className="text-2xl font-bold text-[#0B1F49] mt-1 mb-4">Data Feeds & Grassroots Syndication</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Partner with CRIICO to access verified match data feeds, local cricket story leads, and player interview channels.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Verified district score data for sports publications and radio bulletins</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Original photography and documentary footage licensing</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Co-produced digital video series spotlighting emerging Nepali talent</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0647B9] shrink-0 mt-0.5" />
                    <span>Collaborative regional cricket journalism network</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#partnership-enquiry"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0647B9] hover:underline"
                >
                  <span>Press & Media Enquiries</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ED1C2E]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Partnership Enquiry Form */}
      <section id="partnership-enquiry" className="py-20 bg-white text-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Start a Conversation</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
              Submit a Partnership Enquiry
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mx-auto mb-5 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tell us about your organization, tournament schedule, or sponsorship vision. Our team responds to every genuine enquiry within 2 business days.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm defaultCategory="Partnership" />
          </div>
        </div>
      </section>
    </div>
  );
}
