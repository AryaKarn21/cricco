import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  HeartHandshake,
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact | Grassroots Cricket & Community Development in Nepal",
  description:
    "Discover how CRIICO empowers grassroots cricket communities, supports youth and female cricketers, and builds verifiable digital athletic pathways across Nepal.",
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B1F49] text-white py-16 lg:py-24 border-b-4 border-[#ED1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Grassroots & Social Impact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 mb-6 tracking-tight">
              Honoring Grassroots Grit Through Digital Opportunity.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              At CRIICO, impact is not a marketing statistic. It is measured in every young cricketer whose career accomplishments are preserved, every volunteer scorer who gets modern tools, and every community cup that gains professional dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Honest Impact Philosophy Notice */}
      <section className="bg-[#EEF5FF] border-b border-blue-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#0647B9] shrink-0" />
            <span>
              <strong className="text-[#0B1F49]">Our Data Verification Guarantee:</strong> CRIICO strictly refuses to publish fabricated impact counts, bot impressions, or inflated vanity figures. We present our real initiatives, verified pilot grounds, and qualitative community milestones.
            </span>
          </div>
        </div>
      </section>

      {/* Core Impact Pillars */}
      <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Strategic Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
              Where CRIICO Makes a Tangible Difference
            </h2>
            <div className="w-16 h-1 bg-[#ED1C2E] mb-5 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              We focus our energy and technology on the areas of Nepali cricket that are systematically overlooked by mainstream broadcast networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <Award className="w-6 h-6 text-[#ED1C2E]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F49] mb-3">District Tournament Digitization</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Providing local tournament organizing committees across Nepal with free software tools to create schedules, calculate live net-run-rates, and manage certified team rosters.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs text-[#0647B9] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C2E]" />
                <span>Zero Subscription Fees for Community Cups</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <GraduationCap className="w-6 h-6 text-[#0647B9]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F49] mb-3">School & Youth Pathways</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Partnering with secondary schools and private cricket academies to record U-16 and U-19 inter-school tournaments, giving young players a verified athletic portfolio before district trials.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs text-[#0647B9] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C2E]" />
                <span>Empowering the Next Generation</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-slate-200 flex flex-col justify-between border-b-4 border-b-[#0647B9]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center mb-6 border border-blue-200">
                  <HeartHandshake className="w-6 h-6 text-[#ED1C2E]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F49] mb-3">Promoting Women&apos;s Cricket</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Providing equal digital visibility, fixture coverage, and player profiles for women&apos;s regional championships and emerging female cricket clubs across Nepal.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs text-[#0647B9] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C2E]" />
                <span>Closing the Grassroots Media Gap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Geographic Footprint & Phased Rollout */}
      <section className="py-20 bg-[#F5F9FF] text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Expansion Roadmap</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mt-2 mb-4">
                Our Phased 77-District Ecosystem Roadmap
              </h2>
              <div className="w-16 h-1 bg-[#ED1C2E] mb-6 rounded-full" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Rather than claiming imaginary nationwide coverage overnight, CRIICO is scaling methodically through authentic local relationships with verified ground coordinators.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0647B9] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Phase 1: Key Cricket Corridors (Active)</div>
                    <div className="text-xs text-slate-600 mt-1">Kathmandu Valley, Pokhara, Biratnagar, Bhairahawa, and Birgunj district club circuits.</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF5FF] text-[#0647B9] border border-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Phase 2: Far-West & Mid-West Hubs (Target 2026/27)</div>
                    <div className="text-xs text-slate-600 mt-1">Dhangadhi, Nepalgunj, Surkhet, and Mahendranagar grassroots leagues and junior academies.</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF5FF] text-[#0647B9] border border-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F49]">Phase 3: Nationwide District Reach</div>
                    <div className="text-xs text-slate-600 mt-1">Self-serve verified digital scoring platform accessible to certified scorers across all 77 districts.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0B1F49] text-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ED1C2E]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#EEF5FF] mb-6">Our Impact Commitments</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-base font-bold text-white mb-1">Open Data for Research & Selection</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      We commit to providing non-commercial anonymized analytics and performance datasets to authorized sports researchers, national selectors, and development programs studying grassroots cricket growth in Nepal.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-base font-bold text-white mb-1">Scorer & Volunteer Training</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Conducting free digital workshops for young enthusiasts and retired players to become certified digital scorers, unlocking paid officiating roles at local cups.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-base font-bold text-white mb-1">Preserving Nepal&apos;s Cricket Heritage</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Building a digital archive of community scorecards so that legendary performances in local tournaments are remembered for decades to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F49] mb-4">
            Do You Want to Bring CRIICO to Your District or League?
          </h2>
          <div className="w-16 h-1 bg-[#ED1C2E] mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We actively support local sports committees, non-profits, and educational institutions with digital scoring infrastructure. Let&apos;s build community pride together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors shadow-md"
            >
              <span>Connect About Grassroots Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold bg-[#EEF5FF] hover:bg-blue-100 text-[#0647B9] border border-blue-200 transition-colors"
            >
              <span>Community Partnerships</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
