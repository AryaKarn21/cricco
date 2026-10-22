"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Tournament Registration & Coverage");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");

    if (name.trim().length < 2) {
      setError("Please provide your name (at least 2 characters).");
      setBusy(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setBusy(false);
      return;
    }

    if (message.trim().length < 10) {
      setError("Your message must be at least 10 characters long.");
      setBusy(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, botField }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit your message.");
      }

      setSuccess(true);
      setReferenceId(data.id || "");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred while submitting.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <SiteHeader />

      <main className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ marginBottom: 30 }}>
          <div className="eyebrow" style={{ color: "var(--red)", fontWeight: 900, textTransform: "uppercase", fontSize: 13, letterSpacing: 2 }}>
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 950, letterSpacing: "-1px", margin: "8px 0 14px" }}>
            Contact CRIICO
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 700, margin: 0 }}>
            Connect with Nepal&apos;s cricket platform team for tournament fixture publishing, digital scoring assistance, player profile updates, or community stories.
          </p>
        </div>

        <div className="community" style={{ alignItems: "start", gap: 36 }}>
          {/* Left Column: Interactive Form */}
          <div className="panel" style={{ padding: "28px 24px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 6 }}>Send a Message</h2>
            <p className="muted" style={{ marginBottom: 20 }}>
              All enquiries are recorded directly in the platform database for our operations team.
            </p>

            {success ? (
              <div style={{ padding: "24px 20px", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 10, textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#166534", margin: "0 0 8px" }}>
                  Message Successfully Received!
                </h3>
                <p style={{ fontSize: 14, color: "#15803d", margin: "0 0 14px", lineHeight: 1.5 }}>
                  Thank you for reaching out. Your communication has been stored in our system and our team will review it.
                </p>
                {referenceId && (
                  <div style={{ display: "inline-block", background: "#dcfce7", padding: "4px 12px", borderRadius: 6, fontSize: 12, color: "#14532d", fontWeight: 700, marginBottom: 16 }}>
                    Reference ID: {referenceId}
                  </div>
                )}
                <div>
                  <button
                    type="button"
                    className="btn btn-blue"
                    onClick={() => setSuccess(false)}
                    style={{ fontSize: 14, padding: "8px 18px" }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "grid", gap: 16 }}>
                {/* Honeypot field */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="botField">Leave blank</label>
                  <input
                    type="text"
                    id="botField"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                  <label style={{ fontWeight: 700, fontSize: 13 }}>
                    Your Name <span style={{ color: "var(--red)" }}>*</span>
                    <input
                      className="input"
                      type="text"
                      required
                      placeholder="e.g. Anil Adhikari"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ marginTop: 6 }}
                    />
                  </label>

                  <label style={{ fontWeight: 700, fontSize: 13 }}>
                    Email Address <span style={{ color: "var(--red)" }}>*</span>
                    <input
                      className="input"
                      type="email"
                      required
                      placeholder="anil@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginTop: 6 }}
                    />
                  </label>
                </div>

                <label style={{ fontWeight: 700, fontSize: 13 }}>
                  Topic / Subject <span style={{ color: "var(--red)" }}>*</span>
                  <select
                    className="input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ marginTop: 6 }}
                  >
                    <option value="Tournament Registration & Coverage">Tournament Registration & Coverage</option>
                    <option value="Match Scoring Support">Match Scoring Support</option>
                    <option value="Player Profile & Statistics">Player Profile & Statistics Verification</option>
                    <option value="Grassroots Partnership">Grassroots Club Partnership</option>
                    <option value="Community Story Pitch">Community Story / Photo Submission</option>
                    <option value="General Feedback">General Platform Feedback</option>
                  </select>
                </label>

                <label style={{ fontWeight: 700, fontSize: 13 }}>
                  Message <span style={{ color: "var(--red)" }}>*</span>
                  <textarea
                    className="input"
                    rows={5}
                    required
                    placeholder="Provide details about your tournament, club, match dates, or enquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ marginTop: 6, resize: "vertical", minHeight: 120 }}
                  />
                </label>

                {error && (
                  <div style={{ padding: "10px 14px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, color: "#991b1b", fontSize: 13 }}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="btn btn-red"
                  style={{ justifySelf: "start", padding: "12px 28px", fontSize: 15 }}
                >
                  {busy ? "Submitting Message…" : "Submit Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Platform Information & Links */}
          <div style={{ display: "grid", gap: 20 }}>
            <div className="panel">
              <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Tournament Directors</h3>
              <p className="muted" style={{ lineHeight: 1.5, margin: "0 0 12px" }}>
                Organizing a district or community cup in Nepal? We provide verified scorekeeping workflows and dedicated tournament fixture hubs.
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: 20, fontSize: 13, color: "var(--muted)", margin: 0 }}>
                <li>Group stage points tables & net-run-rate calculations</li>
                <li>Digital player rosters & match statistics</li>
                <li>Live public fixture links for fans & supporters</li>
              </ul>
            </div>

            <div className="panel" style={{ background: "linear-gradient(135deg, #071426, #0c2b52)", color: "white" }}>
              <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "white", marginBottom: 10 }}>
                Corporate & Sponsorship
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 900, margin: "6px 0 10px" }}>
                Looking for Corporate Solutions?
              </h3>
              <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, marginBottom: 16 }}>
                Explore commercial sponsorships, enterprise sports-tech infrastructure, or investor relations on our corporate portal.
              </p>
              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: 13, padding: "8px 16px" }}
              >
                Visit Corporate Website (:3001) ↗
              </a>
            </div>

            <div className="panel">
              <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>Quick Links</h3>
              <div style={{ display: "grid", gap: 8, fontSize: 14 }}>
                <Link href="/" style={{ color: "var(--blue)", fontWeight: 700 }}>
                  ← Back to Match Centre & Homepage
                </Link>
                <Link href="/login" style={{ color: "var(--muted)" }}>
                  Administrator Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand" href="/"><span/>CRIICO</Link>
            <p>Connecting Cricket. Empowering Communities. Inspiring the Next Generation.</p>
          </div>
          <div>
            <b>Explore</b>
            <p>
              <Link href="/#scores">Match Centre</Link><br/>
              <Link href="/#tournaments">Tournaments</Link><br/>
              <Link href="/#news">News</Link>
            </p>
          </div>
          <div>
            <b>Contact</b>
            <p>
              <Link href="/contact">Contact CRIICO</Link><br/>
              <Link href="/login">Admin login</Link>
            </p>
          </div>
        </div>
        <div className="container muted" style={{ marginTop: 24 }}>
          © {new Date().getFullYear()} CRIICO. All rights reserved.
        </div>
      </footer>
    </>
  );
}
