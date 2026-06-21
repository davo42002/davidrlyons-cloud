// Selected Work content. Each entry renders one ProjectCard.
// All metrics are honest and traceable to project logs — do not inflate.

export interface Metric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  built: string;
  result: string;
  metrics: Metric[];
  tech: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "kansas-castings",
    name: "Kansas Castings",
    tagline: "AI-driven SEO + cold-outbound engine for an American iron foundry",
    problem:
      "A 30-year foundry with thin, unranked web presence and no inbound pipeline — invisible for the searches its buyers actually run.",
    built:
      "Rebuilt the site's technical SEO and content end-to-end (titles, schema, copy across every page), shipped a custom RFQ lead-capture form with a full JSON-LD schema stack, then stood up a cold-outbound system: dedicated sending domain with DKIM/SPF/DMARC, warmup, Apollo prospecting, and per-vertical email sequences.",
    result:
      "Surfaced in Google's AI Overview for a high-intent buyer query within a week of launch, and the SEO work produced a real inbound RFQ — direct revenue, not vanity metrics.",
    metrics: [
      { label: "ranking", value: "Google AI Overview" },
      { label: "time to rank", value: "< 1 week" },
      { label: "outbound deliverability", value: "100% inbox" },
      { label: "pipeline", value: "real inbound RFQ" },
    ],
    tech: [
      "WordPress REST",
      "Python automation",
      "JSON-LD schema",
      "Apollo + Smartlead",
      "Email deliverability",
    ],
  },
  {
    slug: "aitrader",
    name: "AITrader",
    tagline: "Multi-platform autonomous trading agents with eval-first discipline",
    problem:
      "Building trading automation that is honest about edge — most bots ship on backtest hopium and blow up live.",
    built:
      "Agents spanning five brokerages/markets behind a unified pipeline, an eval-first research harness that validates strategies out-of-sample before any capital moves, hard risk gates (stop-loss, position caps, momentum gates), and scheduled execution via OS task scheduling rather than fragile in-app crons.",
    result:
      "A disciplined research-to-execution loop where strategies must clear walk-forward evaluation to run — and unproven ones stay disabled. The engineering rigor is the point.",
    metrics: [
      { label: "markets", value: "5 brokerages" },
      { label: "method", value: "eval-first harness" },
      { label: "safety", value: "risk-gated execution" },
    ],
    tech: [
      "Python",
      "Broker APIs",
      "Backtest/eval MCP",
      "Task Scheduler",
      "Walk-forward eval",
    ],
  },
  {
    slug: "openclaw",
    name: "OpenClaw Agent Stack",
    tagline: "Self-hosted multi-agent orchestration across VPS + local",
    problem:
      "Running a fleet of always-on AI agents reliably, cheaply, and on infrastructure I control.",
    built:
      "Seven specialized agents with distinct workspaces and permissions, hybrid model routing (local GPU + cloud models with fallback), cron-driven automation, and a hardened VPS deployment running as a systemd service alongside a local node — with delivery routed through Telegram.",
    result:
      "An owned, resilient agent platform that runs scheduled work unattended and routes each task to the right model at the right cost.",
    metrics: [
      { label: "agents", value: "7 specialized" },
      { label: "routing", value: "hybrid local + cloud" },
      { label: "deployment", value: "self-hosted VPS" },
    ],
    tech: [
      "Node.js",
      "systemd",
      "MCP servers",
      "Model routing",
      "Cron automation",
    ],
  },
  {
    slug: "claude-code-tooling",
    name: "Agentic Dev Tooling",
    tagline: "A personal AI-development workflow system",
    problem:
      "Default AI coding tools waste tokens and lack durable context, repeatable process, and guardrails.",
    built:
      "A layered workflow system: custom skills, rules, and hooks that enforce process; a Rust token-optimizer proxy that compresses dev operations; and a persistent file-based memory backend that carries context across sessions.",
    result:
      "A faster, cheaper, more consistent agentic engineering loop — with large token savings on routine operations and context that survives between sessions.",
    metrics: [
      { label: "token savings", value: "60–90% on dev ops" },
      { label: "process", value: "skills + rules + hooks" },
      { label: "context", value: "persistent memory" },
    ],
    tech: ["Claude Code", "Rust", "Hooks", "MCP", "Skill authoring"],
  },
];
