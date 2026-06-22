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
  role: "Operations Leader · AI & Automation Builder",
  taglineLead: "I lead teams and",
  taglineAccent: "build the systems.",
  intro:
    "For 14+ years I've led operations and logistics teams — from dispatching trains across 2,000+ miles at Union Pacific to running a multi-million-dollar distribution center as a GM today. Along the way I taught myself to build the tools I wished I had: Power BI dashboards, automations, and AI agents that turn messy operational data into faster, smarter decisions. I lead people and I build systems — and I'm happiest doing both.",
  sub: "Operations leader who builds: 14+ years scaling teams and logistics operations, plus self-taught AI/automation that turns data into real results.",
  photo: "/portrait.jpg", // TODO: drop real headshot into /public
  photoAlt: "David R. Lyons",
  email: "david@davidrlyons.cloud",
  github: "https://github.com/davo42002",
  linkedin: "https://www.linkedin.com/in/david-lyons-3a10ba111/",
  resume: "/resume.pdf", // TODO: drop real PDF into /public
  url: "https://davidrlyons.cloud",
  description:
    "David R. Lyons — operations & logistics leader and self-taught AI/automation builder. 14+ years scaling teams and operations, with Power BI, automation, and AI that drive measurable results.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
