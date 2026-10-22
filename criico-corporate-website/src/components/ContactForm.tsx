"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  defaultCategory?: string;
}

export default function ContactForm({ defaultCategory = "Partnership" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: defaultCategory,
    message: "",
    botField: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [referenceId, setReferenceId] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    // Client-side quick check
    if (formData.name.trim().length < 2) {
      setStatus("error");
      setFeedback("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("error");
      setFeedback("Please provide a message with at least 10 characters.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setStatus("success");
      setFeedback(data.message || "Enquiry successfully recorded.");
      if (data.enquiryId) {
        setReferenceId(data.enquiryId);
      }
      setFormData({
        name: "",
        email: "",
        organization: "",
        category: defaultCategory,
        message: "",
        botField: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-[#0647B9] rounded-2xl p-8 text-center animate-fadeIn shadow-lg">
        <div className="w-14 h-14 bg-[#EEF5FF] text-[#0647B9] rounded-full flex items-center justify-center mx-auto mb-5 border border-blue-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1F49] mb-2">Enquiry Successfully Logged</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto mb-4">
          {feedback}
        </p>
        {referenceId && (
          <div className="inline-block bg-[#EEF5FF] px-4 py-2 rounded-lg border border-blue-200 text-xs text-slate-700 mb-6 font-semibold">
            Reference ID: <span className="font-mono text-[#0647B9] font-bold">{referenceId}</span>
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-colors shadow-sm"
          >
            Submit Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Honeypot field */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="botField">Leave this blank</label>
        <input
          type="text"
          id="botField"
          name="botField"
          value={formData.botField}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F49] mb-2">
            Your Name <span className="text-[#ED1C2E]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Sharma"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0647B9] focus:bg-white focus:border-transparent transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F49] mb-2">
            Email Address <span className="text-[#ED1C2E]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="ramesh@organization.com"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0647B9] focus:bg-white focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F49] mb-2">
            Club / Organization <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. Kathmandu Cricket Club"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0647B9] focus:bg-white focus:border-transparent transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F49] mb-2">
            Enquiry Topic <span className="text-[#ED1C2E]">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0647B9] focus:bg-white focus:border-transparent transition-all text-sm"
          >
            <option value="Partnership">Partnership & Sponsorship</option>
            <option value="Tournament Organizers">Tournament Organizing & Tech</option>
            <option value="Cricket Academy">Cricket Academy / Club</option>
            <option value="Media & Press">Media, Press & Content</option>
            <option value="Technology & Product">Technology & Product</option>
            <option value="General Enquiry">General Corporate Enquiry</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F49] mb-2">
          Your Message <span className="text-[#ED1C2E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your initiative, tournament scope, or how CRIICO can collaborate with your team..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0647B9] focus:bg-white focus:border-transparent transition-all text-sm resize-y"
        />
      </div>

      {status === "error" && (
        <div className="mb-5 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#ED1C2E]" />
          <span>{feedback}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold bg-[#0647B9] hover:bg-[#053aa0] text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Recording Enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Corporate Enquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
