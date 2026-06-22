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
  role: "AI / Automation Engineer",
  taglineLead: "AI agents & automation,",
  taglineAccent: "built to ship.",
  intro:
    "I'm a self-taught engineer who turns ideas into systems that actually run — and earn their keep. I'm happiest taking something from \"what if\" to \"it's live in production,\" whether that's a fleet of AI agents, an automation pipeline, or a growth engine that brings a real business real revenue.",
  sub: "I design and run self-hosted multi-agent systems and automation pipelines that produce real business results — not demos.",
  photo: "/portrait.jpg", // TODO: drop real headshot into /public
  photoAlt: "David R. Lyons",
  email: "david@davidrlyons.cloud",
  github: "https://github.com/davo42002",
  linkedin: "https://www.linkedin.com/in/david-lyons-3a10ba111/",
  resume: "/resume.pdf", // TODO: drop real PDF into /public
  url: "https://davidrlyons.cloud",
  description:
    "David R. Lyons — AI/automation engineer. Multi-agent systems, automation pipelines, and growth engineering with shipped, measurable outcomes.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
