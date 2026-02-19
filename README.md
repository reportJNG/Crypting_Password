<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crypting Password — README</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #080b12;
      --surface: #0e1420;
      --surface2: #141b2a;
      --border: rgba(99, 179, 237, 0.12);
      --accent: #63b3ed;
      --accent2: #7ee8fa;
      --green: #68d391;
      --purple: #b794f4;
      --text: #e2e8f0;
      --muted: #718096;
      --glow: rgba(99, 179, 237, 0.15);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      line-height: 1.7;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── NOISE TEXTURE OVERLAY ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
      opacity: 0.4;
    }

    /* ── GRID LINES ── */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(99,179,237,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,179,237,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 24px 80px;
      position: relative;
      z-index: 1;
    }

    /* ── HERO ── */
    .hero {
      text-align: center;
      padding: 80px 0 60px;
      position: relative;
    }

    .hero-glow {
      position: absolute;
      top: 0; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 300px;
      background: radial-gradient(ellipse at center, rgba(99,179,237,0.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .lock-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 80px; height: 80px;
      background: linear-gradient(135deg, rgba(99,179,237,0.2), rgba(126,232,250,0.1));
      border: 1px solid rgba(99,179,237,0.3);
      border-radius: 22px;
      font-size: 36px;
      margin-bottom: 28px;
      position: relative;
      box-shadow: 0 0 40px rgba(99,179,237,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.1;
      background: linear-gradient(135deg, #e2e8f0 30%, var(--accent2) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
    }

    .hero-subtitle {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 520px;
      margin: 0 auto 36px;
      font-weight: 300;
    }

    .hero-subtitle strong {
      color: var(--accent);
      font-weight: 500;
    }

    /* ── BADGES ── */
    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-bottom: 36px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 100px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      border: 1px solid;
      transition: all 0.2s;
      text-decoration: none;
    }

    .badge:hover { transform: translateY(-2px); }

    .badge-blue { background: rgba(99,179,237,0.1); border-color: rgba(99,179,237,0.3); color: var(--accent2); }
    .badge-green { background: rgba(104,211,145,0.1); border-color: rgba(104,211,145,0.3); color: var(--green); }
    .badge-purple { background: rgba(183,148,244,0.1); border-color: rgba(183,148,244,0.3); color: var(--purple); }

    /* ── CTA BUTTONS ── */
    .cta-row {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 10px;
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: all 0.25s;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, rgba(99,179,237,0.9), rgba(126,232,250,0.7));
      color: #080b12;
      box-shadow: 0 4px 20px rgba(99,179,237,0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(99,179,237,0.4);
    }

    .btn-ghost {
      background: rgba(255,255,255,0.05);
      color: var(--text);
      border: 1px solid var(--border);
    }

    .btn-ghost:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(99,179,237,0.3);
      transform: translateY(-2px);
    }

    /* ── DIVIDER ── */
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
      margin: 56px 0;
    }

    /* ── SECTION LABELS ── */
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }

    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: 1.7rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 8px;
    }

    .section-desc {
      color: var(--muted);
      margin-bottom: 32px;
    }

    /* ── HOW IT WORKS - STEPS ── */
    .steps {
      display: grid;
      gap: 16px;
    }

    .step {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 24px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .step::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 3px; height: 100%;
      background: linear-gradient(180deg, var(--accent), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .step:hover {
      border-color: rgba(99,179,237,0.25);
      transform: translateX(4px);
      background: var(--surface2);
    }

    .step:hover::before { opacity: 1; }

    .step-num {
      flex-shrink: 0;
      width: 40px; height: 40px;
      background: linear-gradient(135deg, rgba(99,179,237,0.2), rgba(126,232,250,0.05));
      border: 1px solid rgba(99,179,237,0.25);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--accent2);
    }

    .step-content h3 {
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .step-content p { color: var(--muted); font-size: 0.9rem; }

    /* ── TECH STACK ── */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 14px;
    }

    .tech-card {
      padding: 20px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .tech-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 20%, var(--glow), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .tech-card:hover {
      border-color: rgba(99,179,237,0.3);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.3);
    }

    .tech-card:hover::after { opacity: 1; }

    .tech-icon {
      font-size: 1.6rem;
      margin-bottom: 10px;
      display: block;
    }

    .tech-name {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      margin-bottom: 4px;
    }

    .tech-desc {
      color: var(--muted);
      font-size: 0.8rem;
    }

    /* ── CODE BLOCK ── */
    .code-wrapper {
      background: #060910;
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }

    .code-dots {
      display: flex;
      gap: 6px;
    }

    .code-dot {
      width: 12px; height: 12px;
      border-radius: 50%;
    }

    .dot-red { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green { background: #28c840; }

    .code-filename {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--muted);
    }

    pre {
      padding: 24px;
      overflow-x: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      line-height: 1.8;
    }

    .kw { color: #b794f4; }
    .fn { color: #7ee8fa; }
    .str { color: #68d391; }
    .cm { color: #4a5568; font-style: italic; }
    .imp { color: #fbb6ce; }
    .num { color: #f6ad55; }
    .var { color: #e2e8f0; }

    /* ── ARCHITECTURE DIAGRAM ── */
    .arch {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
    }

    .arch-flow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .arch-node {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 16px 20px;
      border-radius: 12px;
      border: 1px solid;
      min-width: 110px;
      text-align: center;
    }

    .arch-node .node-icon { font-size: 1.4rem; }
    .arch-node .node-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 600;
    }
    .arch-node .node-sub { font-size: 0.68rem; color: var(--muted); }

    .node-client { background: rgba(183,148,244,0.1); border-color: rgba(183,148,244,0.3); color: var(--purple); }
    .node-server { background: rgba(99,179,237,0.1); border-color: rgba(99,179,237,0.3); color: var(--accent2); }
    .node-db { background: rgba(104,211,145,0.1); border-color: rgba(104,211,145,0.3); color: var(--green); }

    .arch-arrow {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 0 8px;
    }

    .arch-arrow-line {
      width: 40px; height: 1px;
      background: linear-gradient(90deg, var(--muted), var(--accent));
    }

    .arch-arrow-label {
      font-size: 0.62rem;
      color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
      white-space: nowrap;
    }

    /* ── SETUP STEPS ── */
    .setup-steps {
      counter-reset: setup;
      display: grid;
      gap: 12px;
    }

    .setup-step {
      counter-increment: setup;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .setup-step-num {
      flex-shrink: 0;
      width: 28px; height: 28px;
      background: rgba(99,179,237,0.15);
      border: 1px solid rgba(99,179,237,0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--accent);
      margin-top: 3px;
    }

    .setup-step-body { flex: 1; }

    .setup-step-title {
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 6px;
    }

    .inline-code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      background: rgba(99,179,237,0.1);
      border: 1px solid rgba(99,179,237,0.2);
      padding: 2px 8px;
      border-radius: 5px;
      color: var(--accent2);
    }

    .cmd-block {
      background: #060910;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 18px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--green);
      margin-top: 8px;
    }

    .cmd-block .prompt { color: var(--muted); }

    /* ── ENV BLOCK ── */
    .env-block {
      background: #060910;
      border: 1px solid rgba(104,211,145,0.2);
      border-radius: 12px;
      padding: 20px 24px;
    }

    .env-line { display: flex; gap: 8px; align-items: center; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; }
    .env-key { color: var(--accent2); }
    .env-eq { color: var(--muted); }
    .env-val { color: var(--green); }

    /* ── FOOTER ── */
    .footer {
      text-align: center;
      padding: 48px 0 0;
      color: var(--muted);
      font-size: 0.82rem;
    }

    .footer-links {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .footer-link {
      color: var(--muted);
      text-decoration: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      transition: color 0.2s;
    }

    .footer-link:hover { color: var(--accent2); }

    .footer-sig {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      opacity: 0.5;
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-up {
      animation: fadeUp 0.6s ease forwards;
      opacity: 0;
    }

    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }

    /* ── RESPONSIVE ── */
    @media (max-width: 600px) {
      .arch-flow { gap: 8px; flex-direction: column; }
      .arch-arrow { transform: rotate(90deg); }
      .tech-grid { grid-template-columns: 1fr 1fr; }
    }

  </style>
</head>
<body>
<div class="container">

  <!-- ══ HERO ══ -->
  <div class="hero">
    <div class="hero-glow"></div>
    <div class="lock-icon fade-up" style="animation-delay:0s">🔐</div>
    <h1 class="fade-up delay-1">Crypting Password</h1>
    <p class="hero-subtitle fade-up delay-2">
      Give your password a <strong>name</strong>. We hash it into something unbreakable.
      Same name, same strong password — <strong>every time</strong>.
    </p>

    <div class="badges fade-up delay-3">
      <span class="badge badge-blue">⚡ Next.js App Router</span>
      <span class="badge badge-green">🗄️ Prisma ORM</span>
      <span class="badge badge-purple">🔒 'use server'</span>
      <span class="badge badge-blue">📘 TypeScript</span>
      <span class="badge badge-green">✅ Deployed on Vercel</span>
    </div>

    <div class="cta-row fade-up delay-4">
      <a href="https://crypting-password.vercel.app" class="btn btn-primary">
        🌐 Live Demo
      </a>
      <a href="https://github.com/reportJNG/Crypting_Password" class="btn btn-ghost">
        ⚙ View Source
      </a>
    </div>

  </div>

  <div class="divider"></div>

  <!-- ══ HOW IT WORKS ══ -->
  <section class="fade-up delay-1">
    <div class="section-label">01 — Concept</div>
    <h2 class="section-title">How It Works</h2>
    <p class="section-desc">No vaults. No master passwords. Just a name you'll never forget.</p>

    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-content">
          <h3>Pick a name</h3>
          <p>Type any label that makes sense to you — <code class="inline-code">"gmail"</code>, <code class="inline-code">"bank"</code>, <code class="inline-code">"work-vpn"</code>. The simpler, the better.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <div class="step-content">
          <h3>We hash it server-side</h3>
          <p>Your label hits a Next.js Server Action, gets hashed with bcrypt (salt rounds: 12), and the result is stored securely via Prisma.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <div class="step-content">
          <h3>Get your strong password back</h3>
          <p>Copy the generated hash and use it as your actual password. Strong, unique, and reproducible — retrieved instantly by name anytime.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">04</div>
        <div class="step-content">
          <h3>Reuse forever</h3>
          <p>Enter the same name tomorrow, next year, on any device — you get the exact same password back. No memorization required.</p>
        </div>
      </div>
    </div>

  </section>

  <div class="divider"></div>

  <!-- ══ ARCHITECTURE ══ -->
  <section class="fade-up delay-2">
    <div class="section-label">02 — Architecture</div>
    <h2 class="section-title">How the Stack Connects</h2>
    <p class="section-desc">Zero separate backend. Server Actions handle everything in one codebase.</p>

    <div class="arch">
      <div class="arch-flow">
        <div class="arch-node node-client">
          <span class="node-icon">🖥</span>
          <span class="node-label">Browser</span>
          <span class="node-sub">Client Component</span>
        </div>
        <div class="arch-arrow">
          <div class="arch-arrow-line"></div>
          <div class="arch-arrow-label">'use server'</div>
        </div>
        <div class="arch-node node-server">
          <span class="node-icon">⚡</span>
          <span class="node-label">Server Action</span>
          <span class="node-sub">Next.js / bcrypt</span>
        </div>
        <div class="arch-arrow">
          <div class="arch-arrow-line"></div>
          <div class="arch-arrow-label">Prisma ORM</div>
        </div>
        <div class="arch-node node-db">
          <span class="node-icon">🗄</span>
          <span class="node-label">Database</span>
          <span class="node-sub">PostgreSQL</span>
        </div>
      </div>
      <p style="text-align:center; color: var(--muted); font-size:0.85rem;">
        The client calls server functions directly — no REST API, no fetch calls, no boilerplate.
      </p>
    </div>

  </section>

  <div class="divider"></div>

  <!-- ══ CODE EXAMPLE ══ -->
  <section class="fade-up delay-2">
    <div class="section-label">03 — Server Action</div>
    <h2 class="section-title">The Core Logic</h2>
    <p class="section-desc">This single file is the entire backend. No Express, no API routes.</p>

    <div class="code-wrapper">
      <div class="code-header">
        <div class="code-dots">
          <div class="code-dot dot-red"></div>
          <div class="code-dot dot-yellow"></div>
          <div class="code-dot dot-green"></div>
        </div>
        <span class="code-filename">app/actions.ts</span>
        <span></span>
      </div>
      <pre><span class="cm">// This directive tells Next.js: run this on the server only</span>

<span class="str">'use server'</span>

<span class="kw">import</span> { <span class="fn">prisma</span> } <span class="kw">from</span> <span class="str">'@/lib/prisma'</span>
<span class="kw">import</span> { <span class="fn">hash</span> } <span class="kw">from</span> <span class="str">'bcrypt'</span>

<span class="kw">export async function</span> <span class="fn">generatePassword</span>(<span class="var">label</span>: <span class="imp">string</span>) {
<span class="cm">// Hash the label with a strong salt</span>
<span class="kw">const</span> <span class="var">hashed</span> = <span class="kw">await</span> <span class="fn">hash</span>(<span class="var">label</span>, <span class="num">12</span>)

<span class="cm">// Persist via Prisma — no raw SQL needed</span>
<span class="kw">await</span> <span class="var">prisma</span>.<span class="fn">password</span>.<span class="fn">upsert</span>({
<span class="var">where</span>: { <span class="var">label</span> },
<span class="var">create</span>: { <span class="var">label</span>, <span class="var">hash</span>: <span class="var">hashed</span> },
<span class="var">update</span>: {},
})

<span class="kw">return</span> <span class="var">hashed</span>
}

<span class="kw">export async function</span> <span class="fn">getPassword</span>(<span class="var">label</span>: <span class="imp">string</span>) {
<span class="kw">return</span> <span class="var">prisma</span>.<span class="fn">password</span>.<span class="fn">findUnique</span>({ <span class="var">where</span>: { <span class="var">label</span> } })
}</pre>
</div>

  </section>

  <div class="divider"></div>

  <!-- ══ TECH STACK ══ -->
  <section class="fade-up delay-3">
    <div class="section-label">04 — Stack</div>
    <h2 class="section-title">Tech Stack</h2>
    <p class="section-desc">Modern, minimal, production-ready.</p>

    <div class="tech-grid">
      <div class="tech-card">
        <span class="tech-icon">▲</span>
        <div class="tech-name">Next.js</div>
        <div class="tech-desc">App Router · Server Actions · Edge-ready</div>
      </div>
      <div class="tech-card">
        <span class="tech-icon">🔷</span>
        <div class="tech-name">Prisma</div>
        <div class="tech-desc">Type-safe ORM · Auto-migrations · PostgreSQL</div>
      </div>
      <div class="tech-card">
        <span class="tech-icon">🔒</span>
        <div class="tech-name">bcrypt</div>
        <div class="tech-desc">Salt rounds: 12 · Server-only hashing</div>
      </div>
      <div class="tech-card">
        <span class="tech-icon">📘</span>
        <div class="tech-name">TypeScript</div>
        <div class="tech-desc">End-to-end type safety</div>
      </div>
      <div class="tech-card">
        <span class="tech-icon">🎨</span>
        <div class="tech-name">Tailwind + shadcn</div>
        <div class="tech-desc">Utility-first · Accessible components</div>
      </div>
      <div class="tech-card">
        <span class="tech-icon">🚀</span>
        <div class="tech-name">Vercel</div>
        <div class="tech-desc">Zero-config deploy · Edge network</div>
      </div>
    </div>

  </section>

  <div class="divider"></div>

  <!-- ══ GETTING STARTED ══ -->
  <section class="fade-up delay-3">
    <div class="section-label">05 — Setup</div>
    <h2 class="section-title">Get Running Locally</h2>
    <p class="section-desc">Node.js 18+ and a PostgreSQL database required.</p>

    <div class="setup-steps">
      <div class="setup-step">
        <div class="setup-step-num">1</div>
        <div class="setup-step-body">
          <div class="setup-step-title">Clone the repository</div>
          <div class="cmd-block">
            <span class="prompt">$ </span>git clone https://github.com/reportJNG/Crypting_Password.git<br/>
            <span class="prompt">$ </span>cd Crypting_Password
          </div>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-num">2</div>
        <div class="setup-step-body">
          <div class="setup-step-title">Install dependencies</div>
          <div class="cmd-block"><span class="prompt">$ </span>npm install</div>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-num">3</div>
        <div class="setup-step-body">
          <div class="setup-step-title">Configure environment variables</div>
          <div class="env-block" style="margin-top:8px">
            <div class="env-line">
              <span class="env-key">DATABASE_URL</span>
              <span class="env-eq">=</span>
              <span class="env-val">"postgresql://user:password@localhost:5432/crypting"</span>
            </div>
          </div>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-num">4</div>
        <div class="setup-step-body">
          <div class="setup-step-title">Push the Prisma schema</div>
          <div class="cmd-block"><span class="prompt">$ </span>npx prisma db push</div>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-num">5</div>
        <div class="setup-step-body">
          <div class="setup-step-title">Run the dev server</div>
          <div class="cmd-block">
            <span class="prompt">$ </span>npm run dev<br/>
            <span style="color:var(--muted)">  ➜ Local: </span><span style="color:var(--accent2)">http://localhost:3000</span>
          </div>
        </div>
      </div>
    </div>

  </section>

  <div class="divider"></div>

  <!-- ══ FOOTER ══ -->
  <footer class="footer fade-up delay-4">
    <div class="footer-links">
      <a href="https://crypting-password.vercel.app" class="footer-link">🌐 Live App</a>
      <a href="https://github.com/reportJNG/Crypting_Password" class="footer-link">⚙ Repository</a>
      <a href="https://github.com/reportJNG" class="footer-link">👤 reportJNG</a>
    </div>
    <p class="footer-sig">Built with Next.js · Prisma · Vercel · TypeScript · ❤️</p>
  </footer>

</div>
</body>
</html>
