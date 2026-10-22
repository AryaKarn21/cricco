"use client";
import { useState } from "react";
import Link from "next/link";

const links = [["Live Scores","#scores"],["Matches","#matches"],["Tournaments","#tournaments"],["News","#news"],["Players","#players"],["Community","#community"]];

export default function SiteHeader() {
  const [open,setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/"><span/>CRIICO</Link>
        <nav className="navlinks">{links.map(([name,href])=><a key={name} href={href}>{name}</a>)}</nav>
        <Link className="btn btn-red" href="/login">Admin / Login</Link>
        <button className="btn btn-outline" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <nav className="container" style={{paddingBottom:16,display:"grid",gap:12}}>
          {links.map(([name,href])=><a key={name} href={href} onClick={()=>setOpen(false)}>{name}</a>)}
        </nav>
      )}
    </header>
  );
}

