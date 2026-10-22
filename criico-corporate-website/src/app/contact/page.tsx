import React from "react";
import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with CRIICO Nepal",
  description:
    "Contact CRIICO sports-technology corporate team for tournament support, academy onboarding, sponsorships, media enquiries, or general feedback.",
};

export default function ContactPage() {
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@criico.com";
  const companyLocation = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Kathmandu, Nepal";
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+977 (Official Contact Pending)";

  return (
    <div className="flex flex-col bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B1F49] text-white py-16 lg:py-24 border-b-4 border-[#ED1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ED1C2E] text-xs font-bold uppercase tracking-wider">Direct Communication</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 mb-6 tracking-tight">
              Contact CRIICO Nepal.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              Whether you are an aspiring tournament director, a club secretary, a sports journalist, or an investor, we welcome your correspondence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#F5F9FF] text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Details & Office Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Headquarters & Details</span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F49] mt-2 mb-3">
                  Corporate Information
                </h2>
                <div className="w-16 h-1 bg-[#ED1C2E] mb-4 rounded-full" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  All official enquiries are tracked and routed directly to our operations team in Kathmandu.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center shrink-0 border border-blue-200">
                    <Mail className="w-5 h-5 text-[#ED1C2E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Email</div>
                    <div className="text-sm font-bold text-[#0B1F49] mt-0.5">{companyEmail}</div>
                    <div className="text-xs text-slate-500 mt-1">Monitored during business hours (UTC+5:45)</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center shrink-0 border border-blue-200">
                    <MapPin className="w-5 h-5 text-[#0647B9]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Headquarters</div>
                    <div className="text-sm font-bold text-[#0B1F49] mt-0.5">{companyLocation}</div>
                    <div className="text-xs text-slate-500 mt-1">Operating hub for nationwide initiatives</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center shrink-0 border border-blue-200">
                    <Phone className="w-5 h-5 text-[#ED1C2E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Telephone</div>
                    <div className="text-sm font-bold text-[#0B1F49] mt-0.5">{companyPhone}</div>
                    <div className="text-xs text-slate-500 mt-1">Official voice channel active during match weekends</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#0647B9] flex items-center justify-center shrink-0 border border-blue-200">
                    <Clock className="w-5 h-5 text-[#0647B9]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Response Window</div>
                    <div className="text-sm font-bold text-[#0B1F49] mt-0.5">Within 24 to 48 Hours</div>
                    <div className="text-xs text-slate-500 mt-1">Urgent tournament scoring queries prioritized</div>
                  </div>
                </div>
              </div>

              {/* Data Transparency Notice */}
              <div className="bg-[#EEF5FF] p-6 rounded-2xl border border-blue-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0B1F49]">
                  <ShieldCheck className="w-4 h-4 text-[#0647B9]" />
                  <span>Enquiry Data Storage</span>
                </div>
                <p>
                  Your message is directly recorded in our secure corporate database. We do not sell or distribute your contact details to external marketers.
                </p>
              </div>
            </div>

            {/* The Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-[#0647B9] text-xs font-bold uppercase tracking-wider">Send an Enquiry</span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F49] mt-1">
                  How Can We Help You?
                </h2>
                <div className="w-16 h-1 bg-[#ED1C2E] mt-3 rounded-full" />
              </div>
              <ContactForm defaultCategory="General Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
