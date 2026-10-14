export const HERO_BG = "https://picsum.photos/seed/codenight/1920/1080";
export const PILL_IMG = "https://picsum.photos/seed/neural/240/96";

export const FIRM = {
  name: "BusinessGray",
  legal: "BusinessGray GmbH",
  street: "Torstraße 101",
  city: "10119 Berlin",
  email: "hello@businessgray.com",
  replyTime: "We reply within one business day.",
};

export interface PracticeArea {
  label: string;
  stat: number;
  description: string;
  img: string;
}

export const PRACTICE: PracticeArea[] = [
  {
    label: "Turnaround Ops",
    stat: 96,
    description:
      "Week zero is a two-day diagnostic on your P&L and your shop floor. Weeks one to twelve fix one bottleneck at a time with the team you already have — then a Friday scorecard your people actually read.",
    img: "https://picsum.photos/seed/terminal/400/800",
  },
  {
    label: "Cash-flow triage",
    stat: 94,
    description:
      "A thirteen-week rolling forecast, a debtor sprint that clears the over-60-day pile, and supplier terms renegotiated before the overdraft does the talking.",
    img: "https://picsum.photos/seed/labyrinth/400/800",
  },
  {
    label: "Hiring & org",
    stat: 91,
    description:
      "Role scorecards, paid trial projects instead of gut-feel interviews, and a 30-60-90 plan so new hires carry their weight by month three.",
    img: "https://picsum.photos/seed/library/400/800",
  },
  {
    label: "Analytics & KPIs",
    stat: 89,
    description:
      "One page the owner checks over coffee: revenue, gross margin, cash, and the three levers that move them. Built in the spreadsheet your controller already trusts.",
    img: "https://picsum.photos/seed/coins/400/800",
  },
  {
    label: "Process automation",
    stat: 84,
    description:
      "Quote-to-cash rebuilt end to end: templates, checklists, and approvals inside the tools you already pay for. Nothing exotic, nothing that dies the day we leave.",
    img: "https://picsum.photos/seed/source/400/800",
  },
  {
    label: "AI pilots",
    stat: 78,
    description:
      "Two- to four-week experiments on support tickets and quoting — instrumented, costed per ticket, and killed within a month when the math does not hold.",
    img: "https://picsum.photos/seed/spectrum/400/800",
  },
];

export interface CaseResult {
  client: string;
  trade: string;
  metric: string;
  metricLabel: string;
  summary: string;
  score: number;
  stats: [string, string][];
}

export const CASES: CaseResult[] = [
  {
    client: "Nordwind Logistics",
    trade: "Regional food distribution · Hanover",
    metric: "–38%",
    metricLabel: "subcontractor cost per stop",
    summary:
      "Re-tendered six lanes, moved two dispatchers onto one planning board, and cleared a Saturday backlog that had run for eleven months.",
    score: 96,
    stats: [
      ["Term", "12 wk"],
      ["Depots", "6"],
      ["On-time", "97%"],
      ["Payback", "3.1 mo"],
    ],
  },
  {
    client: "Hartwell & Co",
    trade: "Home-goods retail · 14 stores",
    metric: "–27%",
    metricLabel: "stockouts at shelf",
    summary:
      "Rebuilt replenishment around sell-through instead of supplier minimums; store managers got one par-level sheet instead of four portals.",
    score: 94,
    stats: [
      ["Term", "12 wk"],
      ["Stores", "14"],
      ["Gross margin", "+3.2pt"],
      ["Payback", "4.0 mo"],
    ],
  },
  {
    client: "Copperline",
    trade: "Precision turned parts · 180 people",
    metric: "–41%",
    metricLabel: "unplanned downtime",
    summary:
      "Moved maintenance off memory and onto a weekly plan, split the bottleneck cell across two shifts, and put scrap cost on the morning board.",
    score: 96,
    stats: [
      ["Term", "16 wk"],
      ["Lines", "5"],
      ["Output", "+12%"],
      ["Payback", "2.6 mo"],
    ],
  },
  {
    client: "Feldmann Bau",
    trade: "Commercial shell construction · Berlin-Brandenburg",
    metric: "19 days",
    metricLabel: "faster progress billing",
    summary:
      "Foremen started closing daily quantities on a one-page sheet; invoicing moved from month-end scramble to weekly rhythm and released €210k tied up in WIP.",
    score: 91,
    stats: [
      ["Term", "12 wk"],
      ["Crews", "9"],
      ["Cash freed", "€210k"],
      ["Payback", "4.8 mo"],
    ],
  },
  {
    client: "Atelier Mohr",
    trade: "Custom kitchens · 22 people",
    metric: "2.3×",
    metricLabel: "quotes sent per week",
    summary:
      "One configurator template, fixed option packages, and a standing rule: every quote leaves within 48 hours or the owner hears why.",
    score: 89,
    stats: [
      ["Term", "8 wk"],
      ["Team", "22"],
      ["Win rate", "+6pt"],
      ["Payback", "3.4 mo"],
    ],
  },
];

export interface ProofFigure {
  metric: string;
  value: string;
  note: string;
  cited: string;
}

export const PROOF: ProofFigure[] = [
  {
    metric: "Client retention",
    value: "96%",
    note: "Clients who sign a second engagement within a year. 2025 survey, n=31.",
    cited: "Hartwell & Co, Nordwind Logistics, Copperline",
  },
  {
    metric: "Average payback",
    value: "4.2 mo",
    note: "Fee repaid from verified savings or freed cash. Median across 2023–2026 closings.",
    cited: "Nordwind Logistics, Feldmann Bau, Atelier Mohr",
  },
  {
    metric: "Milestones on time",
    value: "98%",
    note: "Friday scorecard items closed in the week they were promised.",
    cited: "Copperline, Hartwell & Co, Feldmann Bau",
  },
  {
    metric: "Verified savings per engagement",
    value: "€310k",
    note: "Median across 41 closing reports — unaudited, quoted as the clients signed them.",
    cited: "Nordwind Logistics, Copperline, Hartwell & Co",
  },
];

export const PROOF_FOOTNOTE =
  "Retention from the 2025 client survey (n=31). All other figures are medians from 41 signed closing reports, 2023–2026.";

export const CLIENTS = [
  "Nordwind Logistics",
  "Hartwell & Co",
  "Copperline",
  "Feldmann Bau",
  "Atelier Mohr",
  "Kessler Med",
];

export const MOTION_CSS = `
.reveal{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
.reveal.in{opacity:1;transform:none}
.bar{width:0;transition:width 1.2s cubic-bezier(.22,1,.36,1)}
.in .bar{width:var(--w)}
.marquee-track{animation:marquee 42s linear infinite}
@keyframes marquee{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion: reduce){
  .reveal{opacity:1;transform:none;transition:none}
  .bar{width:var(--w);transition:none}
  .marquee-track{animation:none}
}
`;
