# CRIICO — Sports-Technology Ecosystem

Welcome to the CRIICO workspace. CRIICO is a cricket-focused digital platform and sports-technology ecosystem from Nepal.

## Repository Structure

This monorepo workspace contains two standalone Next.js applications:

1. **`criico-platform/`** (Runs on `http://localhost:3000`)
   - The live cricket platform: real-time match centre, ball-by-ball scoring, player passports, tournament tables, authentication, and admin dashboards.
   - Built with Next.js, React, TypeScript, Tailwind CSS, PostgreSQL / SQLite, and Prisma.

2. **`criico-corporate-website/`** (Runs on `http://localhost:3001`)
   - The official CRIICO corporate website: brand identity, cinematic hero, services showcase, grassroots impact mission, partnership models, and corporate contact inquiries.
   - Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Prisma.

---

## Quick Start

### 1. Running the Corporate Website (`:3001`)
```bash
cd criico-corporate-website
npm install
npm run dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 2. Running the Cricket Platform (`:3000`)
```bash
cd criico-platform
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Official Brand Identity
- **Primary Blue**: `#0647B9`
- **Brand Red**: `#ED1C2E`
- **Deep Navy**: `#0B1F49`
- **Light Blue**: `#EEF5FF`
- **White**: `#FFFFFF`
