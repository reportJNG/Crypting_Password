<div align="center">

# 🔐 Crypting Password

**Stop memorizing passwords. Just remember a name.**

Give any password a label → we hash it into something unbreakable → use that same label anytime to get the exact same strong password back.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-crypting--password.vercel.app-0EA5E9?style=for-the-badge&logoColor=white)](https://crypting-password.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-reportJNG-181717?style=for-the-badge&logo=github)](https://github.com/reportJNG)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-hashing-green?style=flat-square)

</div>

---

## ✨ The Idea

Most people reuse weak passwords because strong ones are impossible to remember.

**Crypting Password** solves this differently — no vault, no master password, no browser extensions.

| Without Crypting | With Crypting |
|---|---|
| `password123` for everything | `$2b$12$xK9...` — cryptographically strong |
| One breach = everything exposed | Each label produces a unique hash |
| Have to remember complex strings | Just remember `"gmail"` or `"bank"` |
| Locked to a device or app | Works anywhere, anytime |

---

## 🚀 How It Works

```
  You type:  "gmail"
                │
                ▼
    ┌─────────────────────┐
    │   Next.js Server    │  ← 'use server' action
    │   bcrypt(label, 12) │
    └─────────────────────┘
                │
                ▼
    ┌─────────────────────┐
    │  Prisma → Database  │  ← stored securely
    └─────────────────────┘
                │
                ▼
  You get:  $2b$12$xK9mVqL...  ✅ (use this as your real password)
```

**Next time** you type `"gmail"` — you get the **exact same hash back**, instantly.

---

## 🏗️ Architecture

This app uses **Next.js Server Actions** (`'use server'`) as its entire backend.  
No Express. No separate API. No REST boilerplate. The server logic lives alongside the UI.

```
Crypting_Password/
├── app/
│   ├── page.tsx          # Client UI
│   └── actions.ts        # 'use server' — all backend logic lives here
├── lib/
│   └── prisma.ts         # Prisma singleton client
├── prisma/
│   └── schema.prisma     # Database schema
└── ...config files
```

### Why Server Actions?

> In traditional Next.js apps you'd write API routes like `/api/generate`. With Server Actions, you call server-side functions **directly from the client** — Next.js handles the network boundary automatically. Zero `fetch()`, zero endpoint management.

---

## 🧠 Core Logic

```typescript
// app/actions.ts
'use server'

import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'

export async function generatePassword(label: string) {
  // Hash the label server-side — bcrypt with salt rounds: 12
  const hashed = await hash(label, 12)

  // Persist via Prisma — no raw SQL needed
  await prisma.password.upsert({
    where:  { label },
    create: { label, hash: hashed },
    update: {},
  })

  return hashed
}

export async function getPassword(label: string) {
  return prisma.password.findUnique({ where: { label } })
}
```

The client calls `generatePassword()` like a regular function — no API, no `fetch`, no endpoint. Next.js handles the server boundary invisibly.

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Server Actions, file-based routing, zero-config deploy |
| **Backend** | `'use server'` Server Actions | No separate API server needed |
| **ORM** | Prisma (latest) | Type-safe DB access, auto migrations |
| **Database** | PostgreSQL | Reliable, Vercel-compatible |
| **Hashing** | bcrypt (salt: 12) | Industry-standard password hashing |
| **Language** | TypeScript | End-to-end type safety |
| **Styling** | Tailwind CSS + shadcn/ui | Fast, accessible, composable UI |
| **Deployment** | Vercel | Zero-config, edge network |

---

## ⚡ Getting Started

### Prerequisites

- Node.js `18+`
- PostgreSQL database (local or hosted — [Neon](https://neon.tech) or [Supabase](https://supabase.com) work great)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/reportJNG/Crypting_Password.git
cd Crypting_Password

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env
# → Edit .env with your DATABASE_URL

# 4. Push schema to your database
npx prisma db push

# 5. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're live. 🎉

---

## 🔑 Environment Variables

Create a `.env` file at the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE_NAME"
```

> **Tip:** Use [Neon.tech](https://neon.tech) for a free serverless PostgreSQL database that pairs perfectly with Vercel.

---

## 📦 Deployment

This app deploys to Vercel with **zero configuration**.

```bash
# Option A — Vercel CLI
npx vercel --prod

# Option B — Push to GitHub, connect on vercel.com
# Add DATABASE_URL in Project Settings → Environment Variables → done.
```

---

## 🔒 Security Notes

- Hashing happens **exclusively server-side** — the label never reaches bcrypt on the client
- `'use server'` ensures hashing logic is never shipped to the browser bundle
- bcrypt salt rounds set to `12` — strong enough to resist brute-force, fast enough for UX
- No plain-text passwords are ever stored in the database

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

```bash
git checkout -b feature/your-idea
git commit -m "feat: your idea"
git push origin feature/your-idea
```

---

<div align="center">

Made by [reportJNG](https://github.com/reportJNG)

*Next.js · Prisma · TypeScript · Vercel*

</div>