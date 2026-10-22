"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Login failed");
      window.location.href = "/admin";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="container" style={{maxWidth: 480, paddingTop: 70, paddingBottom: 70}}>
      <Link className="brand" href="/">
        <span style={{display: "inline-block", width: 13, height: 13, background: "var(--red)", borderRadius: "50%", marginRight: 9}}/>
        CRIICO
      </Link>
      <div className="panel" style={{marginTop: 24}}>
        <h1 style={{fontSize: 34, fontWeight: 900, marginBottom: 8}}>Administrator login</h1>
        <p className="muted">Use the admin account configured in your local environment.</p>
        <form onSubmit={submit} style={{display: "grid", gap: 14, marginTop: 20}}>
          <label>
            Email
            <input
              className="input"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              className="input"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
          {error && <p style={{color: "#c11"}} role="alert">{error}</p>}
          <button className="btn btn-red" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
      <p className="muted">Never use the sample development credentials on a public deployment.</p>
    </main>
  );
}

