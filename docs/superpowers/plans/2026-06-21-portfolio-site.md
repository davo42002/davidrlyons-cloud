# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and locally verify `davidrlyons.cloud` — a dark-modern Astro portfolio for an AI/automation engineer, content-driven and ready to deploy to Vercel.

**Architecture:** Static Astro site, single page composed of focused components. Copy lives in typed data files (`src/data`). Vanilla CSS driven by tokens. Minimal JS (nav + scroll reveals), reduced-motion safe.

**Tech Stack:** Astro, TypeScript, vanilla CSS custom properties. Node 22 (nvm4w). Deploy: Vercel. Registrar: Hostinger.

## Global Constraints

- Palette: bg `#0c0a08`, text `#f4efe8`, muted `#cbbfae`, accent amber `#f59e0b`.
- Single accent, used semantically (CTAs, metrics, link hover). No second accent.
- Sans for headings/body; monospace for labels/metadata.
- Animate only `transform`/`opacity`; gate all motion on `prefers-reduced-motion`.
- Files focused, < ~150 lines each. Copy in `src/data/*.ts`, not markup.
- All project metrics honest (traceable to memory log). No fabricated numbers.
- Lighthouse ≥95 all categories. Responsive 375/768/1440. Keyboard-navigable.

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro`

- [ ] Step 1: `npm create astro@latest . -- --template minimal --no-install --no-git --skip-houston --typescript strict` (run inside existing dir/repo)
- [ ] Step 2: `npm install`
- [ ] Step 3: `npm run build` → expect clean build of starter
- [ ] Step 4: Commit `chore: scaffold astro`

### Task 2: Design tokens + global CSS

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/global.css`

**Produces:** CSS vars `--bg --text --text-muted --accent --accent-glow`, fluid type scale `--fs-*`, spacing `--space-*`, `--ease-out-expo`, `--dur-*`. Mono + sans `--font-*`.

- [ ] Step 1: Write `tokens.css` — palette, `clamp()` type scale (`--fs-hero`, `--fs-h2`, `--fs-body`, `--fs-label`), spacing scale, durations/easings, font stacks (Inter sans, system mono).
- [ ] Step 2: Write `global.css` — reset, base element styles from tokens, `:focus-visible` amber ring, `@media (prefers-reduced-motion: reduce)` kill transitions, body bg + radial amber glow at top.
- [ ] Step 3: Import both in `index.astro`; `npm run build` clean.
- [ ] Step 4: Commit `feat: design tokens + global styles`

### Task 3: Content data

**Files:**
- Create: `src/data/projects.ts`, `src/data/capabilities.ts`, `src/data/site.ts`

**Produces:**
- `Project { slug, name, tagline, problem, built, result, metrics: {label,value}[], tech: string[], links?: {label,href}[] }` + `projects: Project[]` (KC, AITrader, OpenClaw, Claude Code tooling).
- `CapabilityGroup { title, items: string[] }` + `capabilities: CapabilityGroup[]`.
- `site` — name, headline, sub, email `david@davidrlyons.cloud`, github (placeholder `#`), linkedin (placeholder `#`), resume `/resume.pdf`.

- [ ] Step 1: Write the three data files with real, honest copy from the spec/memory.
- [ ] Step 2: `npm run build` clean (TS strict catches type errors).
- [ ] Step 3: Commit `feat: site content data`

### Task 4: Nav + Hero

**Files:**
- Create: `src/components/Nav.astro`, `src/components/Hero.astro`

**Consumes:** `site`.

- [ ] Step 1: `Nav.astro` — sticky top, name left, anchor links (Work/Capabilities/About/Contact) right, mobile toggle (small inline script, reduced-motion safe).
- [ ] Step 2: `Hero.astro` — mono eyebrow (name), `<h1>` headline with amber "ship.", muted sub, 3 CTAs (View work / Resume / GitHub). Amber glow focal point.
- [ ] Step 3: Mount in `index.astro`; `npm run build` clean.
- [ ] Step 4: Commit `feat: nav + hero`

### Task 5: Selected Work

**Files:**
- Create: `src/components/ProjectCard.astro`, `src/components/SelectedWork.astro`

**Consumes:** `projects`.

- [ ] Step 1: `ProjectCard.astro` — name, tagline, problem→built→result, metrics row (values in amber), mono tech tags, optional links. Designed hover/focus state.
- [ ] Step 2: `SelectedWork.astro` — section heading + grid of cards mapped from `projects`.
- [ ] Step 3: Mount in `index.astro`; `npm run build` clean.
- [ ] Step 4: Commit `feat: selected work`

### Task 6: Capabilities + About + Footer

**Files:**
- Create: `src/components/Capabilities.astro`, `src/components/About.astro`, `src/components/Footer.astro`

**Consumes:** `capabilities`, `site`.

- [ ] Step 1: `Capabilities.astro` — grouped clusters, mono group titles, item chips.
- [ ] Step 2: `About.astro` — short skills-first narrative paragraph(s).
- [ ] Step 3: `Footer.astro` — email (mailto), GitHub, LinkedIn, resume; `#contact` anchor.
- [ ] Step 4: Mount all in `index.astro`; `npm run build` clean.
- [ ] Step 5: Commit `feat: capabilities + about + footer`

### Task 7: Scroll reveals + meta/SEO + assets

**Files:**
- Create: `src/components/Reveal.astro` (or inline script), `public/favicon.svg`, `public/robots.txt`
- Modify: `src/pages/index.astro` (head meta, OG)

- [ ] Step 1: IntersectionObserver fade/translate reveal, no-op under reduced-motion / no-JS (content visible by default).
- [ ] Step 2: `<head>`: title, meta description, OG/Twitter tags, theme-color `#0c0a08`, canonical `https://davidrlyons.cloud`. Preload primary font.
- [ ] Step 3: favicon (amber mark), robots.txt allow.
- [ ] Step 4: `npm run build` clean. Commit `feat: reveals + meta + assets`

### Task 8: Verify

- [ ] Step 1: `npm run build` clean; `npm run preview`, load locally.
- [ ] Step 2: Check responsive 375/768/1440 (no overflow), keyboard tab order, focus rings, reduced-motion.
- [ ] Step 3: Lighthouse (preview build) — record scores, fix anything <95.
- [ ] Step 4: Add `vercel.json` (or rely on Astro preset) + README with deploy + DNS steps. Commit `chore: deploy config + readme`.

## Deploy (post-verify, needs David)

- Push repo to GitHub (David's username), import to Vercel, add `davidrlyons.cloud` domain, set Hostinger DNS records Vercel provides.
- Drop in real resume.pdf, GitHub/LinkedIn URLs, confirm footer email.

## Self-Review

- Spec coverage: hero ✔ (T4), work+4 projects ✔ (T3,T5), capabilities ✔ (T6), about ✔ (T6), contact/footer ✔ (T6), tokens/visual ✔ (T2), perf/a11y/SEO ✔ (T7,T8), hosting/deploy ✔ (T8/Deploy). Email-hosting + resume PDF flagged as David deps.
- No unit-test theater for presentational components: verification is build + Lighthouse + manual a11y/responsive, per YAGNI. TS strict + `astro build` is the type/contract gate.
