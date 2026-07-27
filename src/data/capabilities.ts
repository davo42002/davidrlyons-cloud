// Capability clusters rendered in the Capabilities section.

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    title: "Leadership",
    items: [
      "Team building & hiring",
      "Coaching & mentoring",
      "Culture & engagement",
      "Cross-functional leadership",
      "Talent development",
    ],
  },
  {
    title: "Management",
    items: [
      "Operations & logistics",
      "P&L / cost management",
      "KPI & performance tracking",
      "Process improvement",
      "Safety & compliance",
    ],
  },
  {
    title: "AI / Agents",
    items: [
      "Multi-agent orchestration",
      "MCP server integration",
      "Model routing & fallback",
      "Eval & backtest harnesses",
      "Prompt & workflow design",
    ],
  },
  {
    title: "Automation",
    items: [
      "Scheduled job pipelines",
      "Browser automation",
      "Cron & systemd services",
      "Hooks & process guardrails",
      "Notification routing",
    ],
  },
  {
    title: "Web / Engineering",
    items: [
      "Astro & static sites",
      "React / Electron apps",
      "REST API integration",
      "WordPress engineering",
      "Technical SEO & schema",
    ],
  },
  {
    title: "Data / Integrations",
    items: [
      "SQL & schema design",
      "Python data tooling",
      "Data migration & cleanup",
      "Broker & market APIs",
      "Google Workspace APIs",
    ],
  },
];
