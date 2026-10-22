# CRIICO — Corporate Website

This repository contains the **official corporate website** for **CRIICO**, a Nepal-based cricket-focused digital platform and sports-technology startup.

> **Important**: This is a standalone corporate website and runs independently on **port 3001**, separate from the CRIICO cricket platform on port 3000.

---

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Deep Navy, Slate, Charcoal, and Lime Green accents)
- **Database & ORM**: SQLite + Prisma Client (local, self-contained contact enquiry storage)
- **Validation**: Zod schema validation (client and server)
- **Icons**: Lucide React

---

## Local Development & Setup

### 1. Install Dependencies

In the `criico-corporate-website` directory:

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` (already created with sensible local defaults):

```bash
cp .env.example .env
```

Variables configured:
- `DATABASE_URL`: `"file:./dev.db"` (SQLite database for corporate enquiries)
- `NEXT_PUBLIC_SITE_URL`: `"http://localhost:3001"`
- `NEXT_PUBLIC_COMPANY_NAME`: `"CRIICO"`
- `NEXT_PUBLIC_COMPANY_EMAIL`: Official support & contact address
- `NEXT_PUBLIC_COMPANY_LOCATION`: `"Kathmandu, Nepal"`
- `NEXT_PUBLIC_COMPANY_PHONE`: Official telephone channel placeholder

### 3. Initialize Database

Generate Prisma Client and push the database schema:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server (Port 3001)

```bash
npm run dev
```

Visit the website at: **[http://localhost:3001](http://localhost:3001)**

To build and run the production bundle:

```bash
npm run build
npm run start
```

---

## Pages & Structure

1. **Home (`/`)**:
   - Hero: *"Building the Future of Cricket Through Technology."*
   - About CRIICO introduction and strategic pillars.
   - Elegant service cards (Live Scoring, Tournament Engine, Player Passports, Grassroots Media).
   - Grassroots cricket & community impact spotlight.
   - Why CRIICO (offline-resilient, hyper-local architecture).
   - Partnership callout and integrated contact section.

2. **About Us (`/about`)**:
   - Origin story: why CRIICO was founded to bridge Nepal's grassroots cricket gap.
   - Formal Mission & Vision.
   - Guiding Core Values (Community First, Verifiable Integrity, Contextual Tech, Inclusivity).
   - Transparent founding ecosystem callout (no fake executive rosters).

3. **What We Do (`/what-we-do`)**:
   - In-depth breakdown of match intelligence, scoring, tournament engines, player discovery passports, and grassroots journalism.
   - Technical architecture highlights (low-bandwidth, mobile-first, offline resilience).

4. **Our Impact (`/impact`)**:
   - Focus on grassroots cricket, local talent visibility, and community development.
   - Transparent, honest metrics policy: no fabricated impressions or false claims.
   - Phased 77-district ecosystem roadmap.

5. **Partnerships (`/partnerships`)**:
   - Tailored collaboration frameworks for:
     - Tournament Organizers & District Associations
     - Cricket Academies & Clubs
     - Corporate Sponsors & Brands
     - Media & Press Partners
   - Embedded partnership enquiry form.

6. **Contact Us (`/contact`)**:
   - Validated enquiry submission form with Zod schema and honeypot spam protection.
   - Direct SQLite database storage with unique reference ID generation.
   - Corporate contact details wired to environment variables.

---

## Content & Company Details Still Needed from You

To bring this corporate website from local initialization to production public launch, please provide:

1. **Official Brand Logo File**:
   - If you have an approved vector or high-resolution graphic for CRIICO, place it into `public/criico-logo.svg` or `public/criico-logo.png`.
2. **Official Business Telephone & Legal Registration**:
   - Update `NEXT_PUBLIC_COMPANY_PHONE` in `.env` once your official phone number is active.
   - Update `NEXT_PUBLIC_COMPANY_LOCATION` if a registered street address or district office is ready.
3. **Outbound Notification Email / SMTP Service**:
   - If you want submissions from the contact form to trigger automated outbound emails to your inbox (e.g. via Resend, SendGrid, or AWS SES), configure `ENQUIRY_NOTIFICATION_EMAIL` and an email dispatch adapter. Currently, all messages are securely preserved in the local SQLite database (`CorporateEnquiry` model).
