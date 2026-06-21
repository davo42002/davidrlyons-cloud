# davidrlyons.cloud

Personal portfolio for **David R. Lyons** — AI / automation engineer.
Static [Astro](https://astro.build) site, dark-modern design, content-driven.

## Stack

- Astro (static), TypeScript
- Vanilla CSS with design tokens (`src/styles/tokens.css`)
- `@astrojs/sitemap`
- Deploy: Vercel · Domain: Hostinger (`davidrlyons.cloud`)

## Structure

```text
src/
├── data/          # content (single source of truth)
│   ├── site.ts            # name, headline, links
│   ├── projects.ts        # Selected Work entries
│   └── capabilities.ts    # capability clusters
├── components/    # Nav, Hero, ProjectCard, SelectedWork,
│                  # Capabilities, About, Footer
├── styles/        # tokens.css, global.css
└── pages/index.astro      # page composition + <head>
```

**To edit content**, change the files in `src/data/` — no markup edits needed.
Adding a project = one entry in `src/data/projects.ts`.

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Dev server at `localhost:4321`      |
| `npm run build`   | Build to `./dist/`                  |
| `npm run preview` | Preview the production build        |

## Deploy (Vercel + Hostinger)

1. Push this repo to GitHub.
2. In Vercel: **New Project → import the repo**. Astro is auto-detected
   (build `astro build`, output `dist`). Deploy.
3. Vercel → Project → **Settings → Domains** → add `davidrlyons.cloud`.
4. In Hostinger **hPanel → DNS**, add the records Vercel shows:
   - `A  @  76.76.21.21` (Vercel apex), and
   - `CNAME  www  cname.vercel-dns.com`
   (use the exact values Vercel displays — they can change).
5. Wait for DNS + SSL to provision. Done.

## Before launch — fill these in

- [ ] `public/resume.pdf` — drop in the real resume
- [ ] `src/data/site.ts` — real `github` + `linkedin` URLs
- [ ] Confirm footer email (`david@davidrlyons.cloud`) and set up the
      mailbox via Hostinger email hosting
- [ ] Optional: add `public/og.png` (1200×630) for link previews
