# davidrlyons.cloud — Portfolio Site Design

**Date:** 2026-06-21
**Owner:** David R. Lyons
**Status:** Design approved (pending spec review)

## Goal

A personal portfolio website at `davidrlyons.cloud` that showcases David's
experience and abilities to **recruiters / employers**, positioning him as an
**AI / automation engineer**. Background is mixed / non-linear, so the site
leads with **demonstrated ability** (real shipped projects + business outcomes)
rather than a linear career history. The hand-built codebase is itself a
portfolio artifact.

## Success Criteria

- Live at `davidrlyons.cloud` over HTTPS.
- Public GitHub repo a recruiter can inspect.
- Lighthouse ≥ 95 in all four categories (Performance, Accessibility, Best
  Practices, SEO).
- Renders correctly and without overflow at 375 / 768 / 1440 px.
- Keyboard-navigable; respects `prefers-reduced-motion`.
- All project metrics are honest (traceable to project logs); no fabricated
  numbers.

## Stack & Hosting

- **Astro** (static output), TypeScript.
- Vanilla CSS with design tokens (CSS custom properties). No CSS framework.
- Minimal JS: mobile nav toggle + IntersectionObserver scroll reveals only.
  All motion on `transform` / `opacity`, gated by `prefers-reduced-motion`.
- **Repo:** public GitHub (`davidrlyons-cloud`).
- **Host:** Vercel (auto-deploy on push, SSL, CDN).
- **Domain:** `davidrlyons.cloud` — registrar Hostinger; DNS points to Vercel
  (A/CNAME records in hPanel).
- **Email:** `david@davidrlyons.cloud` set up via Hostinger email hosting
  (separate task; does not block site build). Address shown in footer.

## Visual System

- **Direction:** Dark Modern, amber personality.
- **Palette (tokens):**
  - `--bg`: near-black `#0c0a08`
  - `--text`: warm off-white (`#f4efe8`)
  - `--text-muted`: `#cbbfae`
  - `--accent`: amber `#f59e0b` (single accent, used semantically)
  - Soft radial amber glow behind hero (`#f59e0b` at low alpha).
- **Type:**
  - Headings/body: clean geometric/grotesk sans (Inter or Geist), self-hosted
    / subset, `font-display: swap`, preload critical weight only.
  - Labels/metadata: monospace (small dev signal).
  - Large type-scale contrast; `clamp()`-based fluid sizes in tokens.
- **Texture:** faint dot-grid or grain overlay so it doesn't read as a flat
  template. Amber glow is the hero focal point.
- **Accent usage:** CTAs, key metrics, link hovers — not decoration.
- Hover / focus / active states are explicitly designed (not browser defaults).

## Page Structure (single page, anchored nav)

1. **Hero** — name; headline "AI agents & automation, built to ship."; one-line
   sub (self-hosted multi-agent systems & real outcomes); CTAs: View work /
   Resume / GitHub.
2. **Selected Work** — project cards. Each card: problem → what was built →
   result, with tech tags and key metrics rendered in amber. Four projects:
   - **Kansas Castings** — AI-driven SEO + outbound sales engine for an American
     iron foundry. Result: hit Google AI Overview for "white iron castings
     supplier usa" within <1 week; generated real inbound RFQ revenue; built
     full lead-capture (custom RFQ form, schema stack) + cold-outbound pipeline
     (Apollo + Smartlead + Google Workspace, DKIM/SPF/DMARC, 100% inbox
     placement). Tech: WordPress REST, Python automation, JSON-LD schema,
     deliverability infra.
   - **AITrader** — multi-platform autonomous trading agents (Coinbase,
     Robinhood, Alpaca, Kalshi, Polymarket data). Eval-first research harness,
     risk gates, scheduled execution. Tech: Python, broker APIs, backtest/eval
     MCP, Task Scheduler orchestration. (Frame around the engineering + eval
     discipline, not P&L claims.)
   - **OpenClaw stack** — self-hosted multi-agent orchestration: 7 specialized
     agents, cron automation, hybrid model routing (Ollama Cloud + fallback),
     VPS + local deployment, Telegram delivery. Tech: Node, systemd, MCP
     servers, model routing.
   - **Claude Code tooling** — personal AI-dev-workflow system: custom
     skills/rules/hooks, RTK token-optimizer proxy, ponytail layer, memory
     backend. Shows deep agentic-engineering expertise. Tech: hooks, MCP,
     skill authoring.
3. **Capabilities** — grouped skill clusters:
   - AI / Agents (multi-agent orchestration, MCP, model routing, eval harnesses)
   - Automation (cron pipelines, browser automation, scheduled jobs)
   - Web / Eng (Astro, React/Electron, REST APIs, WordPress eng, SEO/schema)
   - Data / Integrations (broker APIs, Google Workspace, deliverability infra)
4. **About** — short, honest, skills-first narrative. Mixed background framed as
   self-directed builder.
5. **Contact / footer** — `david@davidrlyons.cloud`, GitHub, LinkedIn, resume
   download.

## Code Architecture

- `src/data/projects.ts` — typed project content (single source of truth;
  adding a project = one data entry).
- `src/data/capabilities.ts` — typed capability clusters.
- `src/components/` — focused components, each < ~150 lines:
  `Nav`, `Hero`, `ProjectCard`, `SelectedWork`, `Capabilities`, `About`,
  `Footer`.
- `src/styles/tokens.css` — palette, fluid type-scale, spacing, durations,
  easings.
- `src/styles/global.css` — base/reset + element styles from tokens.
- `src/pages/index.astro` — composition only.
- `public/` — resume PDF (provided by David), favicon, OG image, fonts.

Content-driven by design: copy lives in typed data files, not buried in markup,
so edits and additions are low-risk and isolated.

## Content Sources

- Kansas Castings metrics: from project memory log (AI Overview hit, inbound
  RFQ, deliverability stats) — all verified, honest.
- Other projects: summarized from memory; David confirms framing at review.
- Resume: **David provides a PDF**, hosted at `/public/resume.pdf`.
- Usable copy may be mined from David's existing Hostinger "Billie" builder
  draft (`billie-builder-szggjcseouezfjmf.hostingersite.com`).

## Testing & Verification

- `astro build` passes clean.
- Lighthouse run (mobile + desktop) meets ≥95 targets.
- Manual: keyboard nav, focus-visible states, reduced-motion path.
- Responsive check at 375 / 768 / 1440.
- Link check: resume, GitHub, LinkedIn, mailto all resolve.

## Dependencies / Open Items (non-blocking)

- David provides resume PDF.
- David provides GitHub username (repo + profile links).
- `@davidrlyons.cloud` email hosting set up via Hostinger.
- Confirm exact footer email (`david@` vs `hello@`).
- LinkedIn URL.

## Out of Scope (YAGNI)

- CMS / blog (can add later).
- Contact form backend (mailto link is enough for v1).
- Analytics (optional add post-launch).
- Multi-page routing (single page covers v1).
