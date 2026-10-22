# CRIICO Platform — development starter

This is the beginning of a real full-stack application based on the supplied CRIICO HTML prototype. It is **not yet production-complete**. The existing HTML prototype is a design reference; this project rebuilds its key visual direction in Next.js and establishes PostgreSQL models, login/session handling, a starter admin overview, and initial APIs.

## Requirements

- Node.js 20.9+ (LTS recommended)
- Git
- Docker Desktop, or a reachable PostgreSQL 16 database
- VS Code or Cursor

## 1. Open the project

Extract the ZIP, then open the `criico-platform` folder in VS Code/Cursor.

## 2. Configure environment

Copy `.env.example` to `.env`.

Generate a secure secret:
- macOS/Linux: `openssl rand -base64 48`
- PowerShell: `node -e "console.log(require('crypto').randomBytes(48).toString('base64'))"`

Replace `JWT_SECRET` with the generated value. Change `ADMIN_PASSWORD` to a unique strong password. Never commit `.env` to Git.

## 3. Start PostgreSQL

With Docker Desktop running, execute in the project terminal:

```bash
docker compose up -d
```

If you already have PostgreSQL, update `DATABASE_URL` to your database connection string instead.

## 4. Install and initialize

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Open http://localhost:3000 for the public homepage.
Open http://localhost:3000/login to sign in.
Open http://localhost:3000/admin for the starter admin overview.

Use the email/password from `.env` to sign in. The seed script creates or resets the configured admin account. Do not run the seed on production without understanding its password-reset behavior.

## What's implemented

- Responsive Next.js public homepage using CRIICO's blue/red/navy visual direction
- PostgreSQL/Prisma schema for users, teams, players, tournaments, matches, articles, videos, events, subscribers, and contact messages
- Password-hash-based login using bcrypt
- Signed, HTTP-only session cookie
- Admin-only summary API and starter dashboard
- Newsletter subscription API with consent validation
- Clear empty states rather than invented live scores or player statistics

## What's still required before launch

- CRUD pages and validated server-side APIs for matches, tournaments, players, articles, videos, and events
- More granular role-based permissions and audit logging
- Login rate limiting, password reset, CSRF/origin protections as appropriate, and security review
- Newsletter UI integration and transactional email provider
- Contact form endpoint, spam protection, and privacy/terms pages
- Licensed cricket API integration, data refresh strategy, caching, attribution, and outage handling
- Verified logo asset and authorized media
- Automated tests, deployment configuration, database backups, monitoring, and production security review

## Cricket API

No provider is assumed or selected. Once you choose a provider and obtain a key, configure `CRICKET_API_BASE_URL` and `CRICKET_API_KEY`, and implement a server-side adapter. Never put provider secrets in client-side code. Never display sample scores as live scores.

## Existing prototype

Keep your original `CRIICO — Nepal's Cricket Community.html` as a reference while migrating its design. This starter does not automatically import that file or the logo; place your approved logo in `public/criico-logo.svg` or `public/criico-logo.png` and update the `SiteHeader` and footer to use it.
