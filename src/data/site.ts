// Single source of truth for site-wide identity + links.
// Swap placeholder GitHub/LinkedIn URLs and confirm email before launch.

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  headlineLead: string;
  headlineAccent: string;
  sub: string;
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
  headlineLead: "AI agents & automation,",
  headlineAccent: "built to ship.",
  sub: "I design and run self-hosted multi-agent systems and automation pipelines that produce real business results — not demos.",
  email: "david@davidrlyons.cloud",
  github: "https://github.com/", // TODO: David's username
  linkedin: "https://www.linkedin.com/", // TODO: David's profile
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
