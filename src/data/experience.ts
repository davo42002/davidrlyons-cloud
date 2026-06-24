// Professional experience — operations & logistics leadership.
// Sourced from David's record; keep accurate.

export interface Role {
  title: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Job {
  company: string;
  meta: string;
  roles: Role[];
}

export const experience: Job[] = [
  {
    company: "American Tire Distributors",
    meta: "Full-time · Feb 2024 – Present · Dallas, TX",
    roles: [
      {
        title: "General Manager",
        period: "Feb 2024 – Present",
        location: "Dallas, TX",
        bullets: [
          "Direct multi-million-dollar distribution center operations, driving a 54.5% jump in company-wide standings through strategic planning and performance-driven initiatives.",
          "Built and lead a 30-person team — owning hiring, mentoring, and data-driven training programs.",
          "Cut overtime expense 15% and improved inventory variance through targeted cost-saving measures.",
          "Lifted warehouse efficiency 10% with custom Excel tooling and streamlined workflows.",
          "Raised route-delivery window success 7.3% via driver training, manifest analysis, and DOT compliance.",
          "Stood up Power BI dashboards for daily order monitoring and rapid response to disruptions.",
        ],
      },
    ],
  },
  {
    company: "Union Pacific Railroad",
    meta: "Full-time · 12 yrs 3 mos · 2011 – 2023",
    roles: [
      {
        title: "Manager of Yard Operations",
        period: "Nov 2022 – Jun 2023",
        location: "Dallas, TX",
        bullets: [
          "Coordinated 700+ freight cars daily, cutting terminal dwell and improving departure reliability.",
          "Reduced safety incidents through field training exercises and Federal Code compliance enforcement.",
        ],
      },
      {
        title: "Corridor Manager",
        period: "Jun 2016 – Nov 2022",
        location: "Spring, TX",
        bullets: [
          "Led dispatching teams of 10+ across 3 corridors, lifting schedule adherence through a positive culture and strong field support.",
          "Supervised transportation plans for Class 1 railroads, reducing downtime several hours per week with better shift planning.",
        ],
      },
      {
        title: "Train Dispatcher",
        period: "Apr 2011 – Jun 2016",
        location: "Omaha, NE",
        bullets: [
          "Directed train traffic across 2,000+ miles of territory, dispatching 15–35 trains daily (Amtrak, intermodal, coal, auto).",
          "Enforced safety regulations and intervened in real time to prevent incidents across the network.",
        ],
      },
    ],
  },
  {
    company: "Clear Fork Surveying & Mapping Co., Inc.",
    meta: "Full-time · May 2009 – Apr 2011 · Graham, TX",
    roles: [
      {
        title: "Land Surveyor / Survey Engineer",
        period: "May 2009 – Apr 2011",
        location: "Graham, TX",
        bullets: [
          "Performed all aspects of the entire “field-to-finish” land survey, including GPS data collection and total-station surveys to determine property boundaries, riparian boundaries, easements, and well-location surveys for as-drilled and permit plat requirements.",
          "Conducted project research to obtain legal descriptions from deeds and leases, then drafted legal descriptions and associated survey plats for deed records.",
          "Computed map projections between State Plane grid coordinates and geographic latitude/longitude.",
        ],
      },
    ],
  },
];
