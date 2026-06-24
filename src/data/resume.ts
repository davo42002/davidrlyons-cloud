// ATS-optimized resume content (ResumeWorded model): single column,
// standard sections, action-verb + quantified bullets. Two variants.

export interface ResumeRole {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  line: string;
}

export interface SkillLine {
  label: string;
  value: string;
}

export interface ResumeData {
  variant: string;
  name: string;
  headline: string;
  contact: string[];
  summary: string;
  experience: ResumeRole[];
  projects?: ResumeProject[];
  education: string[];
  certifications: string;
  skills: SkillLine[];
}

const contact = [
  "940-550-4012",
  "Forney, TX",
  "davidr.lyons@icloud.com",
  "linkedin.com/in/david-lyons-3a10ba111",
  "davidrlyons.cloud",
];

const experience: ResumeRole[] = [
  {
    title: "General Manager",
    org: "American Tire Distributors",
    location: "Carrollton, TX",
    dates: "2024 – Present",
    bullets: [
      "Directed multi-million-dollar distribution center operations and spearheaded its turnaround, driving a 54.5% jump in company-wide standings through performance-driven initiatives, strategic planning, and refined data utilization.",
      "Improved warehouse efficiency by 10% through the design of custom Excel tools and streamlined production workflows, improving team proficiency in data analysis and reducing operational bottlenecks.",
      "Improved route truck delivery window success by 7.3% and enhanced customer satisfaction through driver training programs and manifest analysis while maintaining DOT compliance.",
      "Implemented real-time supply chain monitoring using OTIF (On-Time In Full) metrics and Power BI dashboards to track customer orders daily, enhancing visibility and enabling rapid disruption response.",
      "Cultivated a high-performing 30-person team by leading talent acquisition, mentoring operations staff, implementing training programs, and fostering data-driven decision-making.",
      "Improved financial performance by reducing overtime expenses 15% and improving inventory variance, mitigating missed product sales through strategic cost-saving measures.",
    ],
  },
  {
    title: "Manager of Yard Operations",
    org: "Union Pacific Railroad",
    location: "Mesquite, TX",
    dates: "2022 – 2023",
    bullets: [
      "Ensured quality customer service, timely deliveries, system fluidity, and daily coordination of over 700 freight cars.",
      "Reduced safety incidents 3% by conducting Field Training Exercises, addressing rule violations, and enforcing Federal Code compliance.",
      "Reduced terminal dwell time by 2 hours by streamlining processes to improve efficiency and throughput in yard operations.",
      "Boosted departure reliability 5% through streamlined communication between yard operations and train dispatchers.",
    ],
  },
  {
    title: "Corridor Manager",
    org: "Union Pacific Railroad",
    location: "Spring, TX",
    dates: "2016 – 2022",
    bullets: [
      "Led dispatching teams of 10+, monitoring terminal dwell and subdivision velocity, achieving a 5% increase in schedule adherence through a positive culture and strong field support.",
      "Supervised transportation plans across 3 corridors, coordinating with yard masters and field crews to prioritize main track access and increase throughput by upwards of 10%.",
      "Optimized operations across high-volume corridors, ensuring service quality for Class 1 railroads and reducing downtime 3 hours per week through revolving dispatcher shift plans.",
      "Prioritized safety and compliance through shift check-ins, reducing safety incidents 8% by reviewing active traffic, incidents, and dispatcher well-being.",
    ],
  },
  {
    title: "Train Dispatcher",
    org: "Union Pacific Railroad",
    location: "Omaha, NE",
    dates: "2011 – 2016",
    bullets: [
      "Directed train traffic and coordinated train and maintenance crews across 2,000+ miles of territory, remotely managing signal systems and ensuring safe, efficient operations.",
      "Prevented a potential multi-million-dollar derailment by monitoring dispatch systems and intervening to halt an oncoming train when another went into emergency.",
      "Dispatched 15–35 trains daily of diverse types — Amtrak, coal, auto, and intermodal — carrying passengers and cargo.",
      "Elevated delivery timeliness by approximately 15% through strategic routing and scheduling adjustments, minimizing congestion across the rail network.",
    ],
  },
];

const education = ["Associate of Spatial Sciences — Texas A&M University"];
const certifications =
  "Google Data Analytics (Coursera): Foundations: Data, Data, Everywhere · Ask Questions to Make Data-Driven Decisions · Prepare Data for Exploration · Process Data from Dirty to Clean · Analyze Data to Answer Questions";

const projects: ResumeProject[] = [
  {
    name: "Kansas Castings — AI-Driven Growth Engine",
    line: "Built an AI-driven SEO and cold-outbound system for a manufacturer; reached Google's AI Overview within a week of launch and generated real inbound revenue (WordPress REST, Python, JSON-LD, Apollo/Smartlead, email deliverability).",
  },
  {
    name: "AITrader — Autonomous Trading Agents",
    line: "Engineered multi-platform autonomous trading agents with an eval-first research harness and hard risk gates across five brokerages/markets (Python, broker APIs, walk-forward evaluation).",
  },
  {
    name: "OpenClaw — Self-Hosted Agent Platform",
    line: "Deployed a self-hosted, 7-agent orchestration platform with hybrid local/cloud model routing and cron automation on a hardened VPS (Node.js, systemd, MCP).",
  },
  {
    name: "Agentic Dev Tooling",
    line: "Built a custom AI development workflow (skills, rules, hooks + a Rust token-optimizer proxy) that cut routine development token cost 60–90%.",
  },
];

export const opsResume: ResumeData = {
  variant: "ops",
  name: "David Lyons",
  headline: "Operations Leadership & Supply Chain Management",
  contact,
  summary:
    "Operations leader and manager with 14+ years building high-performing teams and running dependable operations — from a 54.5% jump in company-wide standings as a distribution-center GM to coordinating safe, on-time rail operations across 2,000+ miles. Pairs people leadership with data-driven management (Power BI, KPIs, cost reduction) to deliver measurable performance.",
  experience,
  education,
  certifications,
  skills: [
    {
      label: "Skills",
      value:
        "Operational Excellence | Supply Chain & Logistics Management | Performance Metrics & KPI Tracking | Program & Project Analysis | Data Visualization with Power BI | Cross-Functional Team Leadership | Revenue Growth & Cost Reduction | Advanced Excel (Macros)",
    },
    {
      label: "Software",
      value:
        "Oracle WMS | Descartes Logistics Suite | Power BI | Google Workspace | Generative AI Tools",
    },
  ],
};

export const builderResume: ResumeData = {
  variant: "builder",
  name: "David Lyons",
  headline: "Operations Leadership & Management  |  AI & Automation Builder",
  contact,
  summary:
    "Operations leader and manager (14+ years) who also builds the systems — pairing people leadership with hands-on operations management, and both with self-taught data, automation, and AI. Drove a 54.5% jump in company-wide standings as a distribution-center GM while shipping Power BI analytics, automations, and AI agents that turn operational data into faster decisions and measurable results.",
  experience,
  projects,
  education,
  certifications,
  skills: [
    {
      label: "Leadership & Operations",
      value:
        "Team Building & Hiring | Operations & Logistics Management | KPI & Performance Tracking | Cost Reduction & P&L | Safety & Compliance | Process Improvement",
    },
    {
      label: "Data, AI & Automation",
      value:
        "Power BI | Advanced Excel (Macros) | SQL | Python | AI Agents & LLM Tooling | Process Automation | Data Pipelines | API Integration | Technical SEO",
    },
    {
      label: "Software",
      value:
        "Oracle WMS | Descartes Logistics Suite | Power BI | Git/GitHub | Google Workspace | Generative AI Tools",
    },
  ],
};
