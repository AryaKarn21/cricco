"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Summary = {
  articles: number;
  tournaments: number;
  matches: number;
  players: number;
  events: number;
  subscribers: number;
  messages?: number;
};

export default function AdminPage() {
  const [data, setData] = useState<Summary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/summary")
      .then(async r => {
        if (!r.ok) throw new Error(r.status === 401 ? "Please sign in with an authorized account." : "Could not load dashboard.");
        return r.json();
      })
      .then(setData)
      .catch(e => setError(e.message));
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <div className="admin-shell">
      <header className="admin-top">
        <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link className="brand" href="/"><span/>CRIICO Admin</Link>
          <button className="btn btn-outline" onClick={logout}>Sign out</button>
        </div>
      </header>
      <main className="container admin-layout">
        <aside className="admin-side">
          <h3>Workspace</h3>
          <Link href="/admin">Overview</Link>
          <Link href="/admin">Matches & scores</Link>
          <Link href="/admin">Tournaments</Link>
          <Link href="/admin">Articles</Link>
          <Link href="/admin">Players</Link>
          <Link href="/admin">Events</Link>
          <Link href="/admin">Subscribers</Link>
          <Link href="/admin">Messages</Link>
          <p className="muted">Management modules are added incrementally.</p>
        </aside>
        <section>
          <h1 style={{fontSize: 38, fontWeight: 950, marginBottom: 18}}>Dashboard overview</h1>
          {error ? (
            <div className="notice">{error} <Link href="/login"><b>Go to login →</b></Link></div>
          ) : !data ? (
            <div className="panel">Loading dashboard…</div>
          ) : (
            <>
              <div className="notice">Starter dashboard: counts are live from database. Create/edit management screens are the next implementation milestone.</div>
              <div className="grid">
                {Object.entries(data).map(([k, v]) => (
                  <div className="panel" key={k}>
                    <div className="muted">{k[0].toUpperCase() + k.slice(1)}</div>
                    <div className="stat">{v}</div>
                  </div>
                ))}
              </div>
              <div className="panel">
                <h2 style={{fontSize: 24, fontWeight: 900}}>Next tasks</h2>
                <ul style={{listStyle: "disc", paddingLeft: 22, marginTop: 12}}>
                  <li>Build create/edit forms for news, tournaments, players, and matches.</li>
                  <li>Connect a verified cricket data provider if live scores are required.</li>
                  <li>Add media uploads, audit logs, and more granular permissions before public launch.</li>
                </ul>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

