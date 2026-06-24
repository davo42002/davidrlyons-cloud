// Single source of truth for site-wide identity + links.
// Swap placeholder GitHub/LinkedIn URLs and confirm email before launch.

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  taglineLead: string;
  taglineAccent: string;
  intro: string;
  sub: string;
  photo: string;
  photoAlt: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  url: string;
  description: string;
  nav: NavLink[];
}

export const site: SiteConfig = {
  name: "David R. Lyons",
  role: "Operations Leadership & Management · AI Builder",
  taglineLead: "I lead people, manage operations,",
  taglineAccent: "and build the systems.",
  intro:
    "For 14+ years I've led and managed operations and logistics teams — developing the people while running the day-to-day, from dispatching trains across 2,000+ miles at Union Pacific to running a multi-million-dollar distribution center as a GM today. Along the way I taught myself the skillset to both build and use the tools I needed to succeed — Power BI dashboards, automations, and AI agents that turn messy operational data into faster, smarter decisions. Leadership and management, paired with the ability to build — that's the mix I bring.",
  sub: "Operations leader who builds: 14+ years scaling teams and logistics operations, plus self-taught AI/automation that turns data into real results.",
  photo: "/portrait.jpg", // TODO: drop real headshot into /public
  photoAlt: "David R. Lyons",
  email: "davidr.lyons@icloud.com",
  github: "https://github.com/davo42002",
  linkedin: "https://www.linkedin.com/in/david-lyons-3a10ba111/",
  resume: "/resume", // on-site resume page (links to PDF downloads)
  url: "https://davidrlyons.cloud",
  description:
    "David R. Lyons — operations & logistics leader and self-taught AI/automation builder. 14+ years scaling teams and operations, with Power BI, automation, and AI that drive measurable results.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
