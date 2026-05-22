// Sustainability Transformation - Global Sustainability Practice + RA+ Playbook Data

export const strategicPillars = [
  {
    id: "productivity",
    title: "Advisory Productivity",
    tagline: "For the Global Sustainability Practice",
    promise: "We turn world-class GSP expertise into repeatable operating models, structured methodologies, and governed deliverables that scale advisory across regions, all running on the RA+ sustainability data spine.",
    description: "Lower cost to serve and higher delivery capacity for GHG accounting, decarbonization, climate risk, and reporting engagements. The strategy standardizes assumptions, calculation methods, client context, and deliverables on a shared RA+ foundation so 400+ climate experts move faster with more consistent outputs.",
    whatLivesHere: [
      "Faster carbon footprint and inventory work through standardized methods, factors, and defaults",
      "Consistent Scope 1, 2, and 3 calculations across engagements and regions",
      "Structured, audit-grade deliverables generated in the platform from governed data",
      "Less rework on CDP, CSRD, and TCFD submissions, higher throughput per consultant",
      "Centralized client sustainability context across sites, footprints, and disclosures on a single spine",
    ],
    successMetrics: [
      "Inventories completed faster with higher consistency",
      "Reduced time to quote for advisory engagements",
      "Lower cost to serve per disclosure cycle",
      "Higher throughput per consultant across regions",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "upsell-engine",
    title: "Advisory Upsell Engine",
    tagline: "For deeper sustainability engagements",
    promise: "We intentionally expose selected expert content (SBTi pathways, climate risk previews, biodiversity baselines) inside RA+, powered by client sustainability data, to create demand for deeper, paid GSP engagements.",
    description: "Higher conversion to multi-year sustainability programs and better qualified pipeline for the GSP. By exposing credible early guidance grounded in real client data, customers see the value of expert deep-dives, creating pull for SBTi target-setting, transition planning, offsetting strategy, and assurance services.",
    whatLivesHere: [
      "Always-on identification of high-impact decarbonization opportunities from client emissions and operational data",
      "Clear visibility into what deeper sustainability analysis would unlock",
      "In-product calls to action to request SBTi support, climate risk assessments, or assurance",
      "Pre-filled context and assumptions from the spine when an advisory engagement is quoted",
      "Seamless path from early insight to expert GSP engagement",
    ],
    successMetrics: [
      "Increased upsell rate from in-product insight to advisory engagement",
      "Better win rates on multi-year sustainability programs",
      "Shorter sales cycles for SBTi, CSRD, and TCFD work",
      "Higher qualified pipeline from in-product prompts",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "recurring-revenue",
    title: "Recurring RA+ Revenue",
    tagline: "Through in-product sustainability advice",
    promise: "We productize early-stage sustainability insights as part of the RA+ experience, turning client data and GSP methodologies into ongoing value beyond one-off consulting engagements.",
    description: "Recurring revenue justified by continuous sustainability guidance, not just periodic reporting. With the RA+ sustainability spine and Sera as the AI interface, the platform shifts from one-off disclosure value to ongoing advisory value, creating stronger stickiness and differentiation versus ESG software peers.",
    whatLivesHere: [
      "Continuous, contextual decarbonization and risk recommendations inside the platform",
      "Value delivered between formal advisory cycles, on top of live client sustainability data",
      "A shift from one-off CDP or CSRD value to ongoing transition planning value",
      "Stronger platform stickiness through embedded GSP methodologies",
      "Self-serve, expert-supported, and fully-managed engagement profiles on one platform",
      "Goal-to-action recommendations integrated in Strategy module",
    ],
    successMetrics: [
      "Measurable adoption of in-product sustainability recommendations",
      "Tangible contribution to RA+ recurring revenue",
      "Platform stickiness improvement",
      "Customer self-service engagement rates",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];


export const objectives = [
  {
    id: "O1",
    title: "Establish the Sustainability Strategy foundation",
    linkedPillar: "productivity",
    customerOutcome: "A governed strategy foundation that improves continuously and supports sustainability guidance across RA+.",
    businessValue: "Single source of truth for GHG factors, methodologies, assumptions, and workflows across modules and regions.",
    keyResults: [
      { id: "KR1", title: "Sustainability taxonomy and governance model finalized", metric: "100%", roiMetric: "Standardization score" },
      { id: "KR2", title: "Provisional decarbonization knowledge base published", metric: "Seed list + SME review", roiMetric: "Library completeness" },
      { id: "KR3", title: "Clean service boundaries defined", metric: "All modules", roiMetric: "Integration readiness" },
    ],
  },
  {
    id: "O2",
    title: "Deliver customer value through Strategy integration",
    linkedPillar: "recurring-revenue",
    customerOutcome: "Customers can quickly answer 'What should I do next on my net-zero path?' through goal-based sustainability guidance directly in RA+.",
    businessValue: "First customer-facing milestone that proves value early and creates demand for deeper GSP analysis.",
    keyResults: [
      { id: "KR4", title: "Sustainability guidance integrated in Strategy module", metric: "Q1 2026", roiMetric: "Customer adoption" },
      { id: "KR5", title: "Goal-based decarbonization recommendations working", metric: "Enabled", roiMetric: "Recommendation accuracy" },
      { id: "KR6", title: "Actions and transition planning workflows connected", metric: "Complete", roiMetric: "Workflow efficiency" },
    ],
  },
  {
    id: "O3",
    title: "Introduce bottom-up Portfolio View for opportunity discovery",
    linkedPillar: "upsell-engine",
    customerOutcome: "Customers can drill into specific sites or Maisons to see asset-level emissions, risks, and opportunities.",
    businessValue: "Creates the first bottom-up sustainability experience and bridges toward the broader RA+ Sustainability product.",
    keyResults: [
      { id: "KR7", title: "Portfolio View MVP launched", metric: "2026", roiMetric: "Site coverage" },
      { id: "KR8", title: "Site-level emissions and risk relevance surfacing", metric: "Enabled", roiMetric: "Discovery rate" },
      { id: "KR9", title: "Pattern logic for opportunity identification", metric: "Operational", roiMetric: "Hit rate" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "Finalize unified sustainability taxonomy", pillar: "productivity", outcome: "Standardized emission categories, factors, and methodologies", objective: "O1", kr: "KR1" },
    { title: "Publish provisional decarbonization knowledge base", pillar: "productivity", outcome: "Seed list with CLICK review complete", objective: "O1", kr: "KR2" },
    { title: "Define clean service boundaries", pillar: "recurring-revenue", outcome: "Clear interfaces for Strategy and future modules", objective: "O1", kr: "KR3" },
    { title: "Connect sustainability guidance to Strategy", pillar: "recurring-revenue", outcome: "Goal-based decarbonization guidance live", objective: "O2", kr: "KR4" },
    { title: "Define guardrails for customer-facing advice", pillar: "upsell-engine", outcome: "Trust and credibility protected across disclosures", objective: "O2", kr: "KR5" },
    { title: "Establish data quality standards", pillar: "productivity", outcome: "Required fields and DQA processes for Scope 1, 2, 3", objective: "O1", kr: "KR1" },
  ],
  next: [
    { title: "Launch Portfolio View MVP", pillar: "upsell-engine", outcome: "Site-level opportunity discovery available", objective: "O3", kr: "KR7" },
    { title: "Implement opportunity relevance logic", pillar: "upsell-engine", outcome: "Pattern-based decarbonization surfacing", objective: "O3", kr: "KR8" },
    { title: "Enable customer self-service exploration", pillar: "recurring-revenue", outcome: "DIY scenario comparison and target setting", objective: "O3", kr: "KR9" },
    { title: "Build structured disclosure deliverables", pillar: "productivity", outcome: "Platform-native CDP and CSRD outputs", objective: "O1", kr: "KR2" },
    { title: "Integrate climate risk and biodiversity data", pillar: "productivity", outcome: "Enhanced TCFD and TNFD context", objective: "O3", kr: "KR7" },
    { title: "Deploy rule-based opportunity surfacing", pillar: "recurring-revenue", outcome: "Automated decarbonization recommendations", objective: "O2", kr: "KR5" },
  ],
  later: [
    { title: "Full consultant workflow integration", pillar: "productivity", outcome: "End-to-end digital advisory process", objective: "O1", kr: "KR2" },
    { title: "Performance feedback loop implementation", pillar: "productivity", outcome: "Continuous improvement from disclosure outcomes", objective: "O1", kr: "KR1" },
    { title: "AI-powered transition planning recommendations", pillar: "recurring-revenue", outcome: "Sera-driven scenario modeling and pathways", objective: "O2", kr: "KR5" },
    { title: "Dedicated RA+ Sustainability product", pillar: "recurring-revenue", outcome: "Full GSP capability in RA+", objective: "O3", kr: "KR9" },
    { title: "Offsetting marketplace integration", pillar: "upsell-engine", outcome: "NTBS carbon credits and project finance surfaced in-product", objective: "O3", kr: "KR8" },
    { title: "External regulatory and science feeds", pillar: "productivity", outcome: "Live CLICK research powering recommendations", objective: "O2", kr: "KR6" },
  ],
};

export const domainInitiatives = [
  {
    domain: "Sales Discovery",
    initiatives: [
      "Opportunity spotting from minimal client sustainability facts",
      "Data-light emissions ranges with confidence labels",
      "Quick applicability checks by segment and geography",
      "Evidence snippets and case patterns from GSP track record",
      "Early business case generation for SBTi and CSRD work",
      "Pipeline qualification acceleration",
    ],
  },
  {
    domain: "Pre-sales Scoping",
    initiatives: [
      "Parameterized sustainability templates with defaults",
      "Engagement stacking logic across GHG, risk, and reporting",
      "Sensitivity analysis and scenario comparison",
      "Export to CPQ with aligned assumptions",
      "Consistent scoping across sales and delivery",
      "Reduced rework and faster quote cycles",
    ],
  },
  {
    domain: "Proposal Alignment",
    initiatives: [
      "Estimate to quote traceability",
      "Confidence bands and risk notes per recommendation",
      "Regulatory and assurance linkbacks (CSRD, ISSB, CDP)",
      "Non-binding language blocks for early guidance",
      "Assumption registry for transparency",
      "Reduced commercial risk and redlines",
    ],
  },
  {
    domain: "Delivery Handoff",
    initiatives: [
      "Handoff package with opportunity set and rationales",
      "Inventory and disclosure placeholders pre-populated",
      "Task list templates and dependencies",
      "Data needs documentation by Scope and category",
      "Smooth transition to consulting execution",
      "Reduced change order rates",
    ],
  },
  {
    domain: "Customer Experience",
    initiatives: [
      "In-product recommendations with impact labels",
      "Next-best sustainability suggestions as data evolves",
      "Scenario comparison for target setting and pathway choice",
      "Transparent assumptions and DIY inputs",
      "Request help links from any advice card",
      "Self-service insights with upsell paths to GSP",
    ],
  },
  {
    domain: "Guardrails & Trust",
    initiatives: [
      "Advice labeled as guidance, not assurance",
      "Emissions and savings shown as ranges with confidence levels",
      "Data freshness and gap indicators",
      "Expert escalation paths clearly visible",
      "Audit trails of advice shown for compliance",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Consultant Productivity",
    description: "Faster inventories, consistent factors, and structured deliverables reduce effort per engagement",
    metrics: ["Inventory completion time", "Throughput per consultant", "Rework reduction"],
    icon: "TrendingDown",
  },
  {
    lever: "Advisory Upsell",
    description: "Early guidance creates demand for SBTi, climate risk, transition planning, and assurance work",
    metrics: ["Insight-to-engagement conversion", "Pipeline from in-product", "Win rate improvement"],
    icon: "TrendingUp",
  },
  {
    lever: "Platform Revenue",
    description: "Continuous sustainability guidance justifies recurring RA+ subscription value",
    metrics: ["Feature adoption rate", "Recurring revenue contribution", "Customer retention"],
    icon: "DollarSign",
  },
  {
    lever: "Customer Self-Service",
    description: "Customers discover insights on their own, then request deeper GSP support when ready",
    metrics: ["Self-service actions", "Time to first engagement", "Customer satisfaction"],
    icon: "Users",
  },
];

export const aiScorecard = [
  { metric: "Strategy Foundation Coverage", target: "100%", description: "Core decarbonization patterns documented with full metadata" },
  { metric: "Strategy Integration", target: "Live", description: "Goal to action recommendations working" },
  { metric: "Portfolio View", target: "2026", description: "Site-level emissions and risk discovery available" },
  { metric: "Inventory Consistency", target: ">90%", description: "Standardized Scope 1, 2, 3 calculations across engagements" },
];

export const startStopMatrix = {
  audits: {
    theme: "Advisory Workflows",
    stop: "Manual workflows and PowerPoint deliverables that do not scale across 7,500+ projects",
    start: "Structured, digital advisory workflows with platform-native deliverables",
  },
  context: {
    theme: "Client Context",
    stop: "Fragmented across tools, Excel templates, and Word documents, recreated for each engagement",
    start: "Centralized once and reused across inventory, disclosure, risk, and transition planning",
  },
  expertise: {
    theme: "Expert Advisory",
    stop: "Delivered late in the cycle and does not scale beyond individual consultants and regions",
    start: "Exposed early in-product to create pull for deeper GSP engagement",
  },
  value: {
    theme: "Recurring Value",
    stop: "One-off disclosure value with no ongoing customer touchpoint",
    start: "Continuous sustainability guidance that supports RA+ recurring revenue",
  },
  discovery: {
    theme: "Opportunity Discovery",
    stop: "Customers wait for full carbon footprint or CDP cycle to learn what is possible",
    start: "Early, credible sustainability advice visible directly in RA+",
  },
  deliverables: {
    theme: "Reporting Deliverables",
    stop: "Slide- and document-driven CSRD, CDP, and TCFD processes requiring manual assembly",
    start: "Structured, visual, interactive deliverables generated in platform",
  },
  recommendations: {
    theme: "Decarbonization Recommendations",
    stop: "Static guidance buried in 200-page reports that requires expert interpretation",
    start: "Actionable measures with transparent assumptions and confidence levels",
  },
  feedback: {
    theme: "Continuous Improvement",
    stop: "Delivered disclosures are isolated, not feeding back into methodology",
    start: "Every engagement improves future recommendations through outcome feedback",
  },
};

export const northStarMetrics = [
  { metric: "Inventory Speed", target: "2x faster", description: "Scope 1, 2, 3 inventories completed with higher consistency" },
  { metric: "Upsell Rate", target: "Increase", description: "From early in-product insight to SBTi, climate risk, and transition advisory" },
  { metric: "Platform Adoption", target: "Measurable", description: "In-product sustainability recommendations used by Maisons and sites" },
];

export const valuePillars = [
  {
    title: "Productivity",
    icon: "Zap",
    description: "Faster inventories, consistent factors, and structured deliverables for the GSP",
  },
  {
    title: "Upsell",
    icon: "TrendingUp",
    description: "Early guidance creates demand for SBTi, climate risk, and transition advisory",
  },
  {
    title: "Revenue",
    icon: "DollarSign",
    description: "Continuous sustainability guidance supports recurring RA+ platform value",
  },
  {
    title: "Scale",
    icon: "Rocket",
    description: "Transform world-class GSP expertise into scalable product capability",
  },
];

export const strategicContext = {
  summary: "Today, sustainability advisory relies heavily on manual workflows, Excel templates, and PowerPoint deliverables. Client context is fragmented across tools and documents, GSP expertise is delivered engagement by engagement and does not scale, and early advice is not productized to generate recurring value inside RA+.",
  northStarTitle: "A governed GSP capability embedded in RA+",
  northStar: "The north star is an authoritative sustainability foundation inside RA+ that connects client emissions and operational data, expert GSP knowledge from advisory, NTBS and DIH, and guided workflows. It should power goal-based Strategy recommendations, site-level Portfolio View discovery, structured disclosure deliverables, and a clear path from early insight to expert engagement.",
};

export const supportingScorecard = [
  { metric: "Sustainability Taxonomy", definition: "Unified emission categories, factors, methodologies, and governance standardized" },
  { metric: "Knowledge Base Completeness", definition: "% of core decarbonization patterns with metadata and assumptions" },
  { metric: "Service Boundaries", definition: "Clean interfaces defined for Strategy and Portfolio View" },
  { metric: "Strategy Integration", definition: "Goal to action recommendations live in platform" },
  { metric: "Portfolio View Coverage", definition: "% of site and asset types with opportunity relevance logic" },
  { metric: "Guardrail Compliance", definition: "% of customer-facing advice meeting trust and assurance standards" },
];

export const roiScorecard = [
  { metric: "Inventory Speed", definition: "Time to complete Scope 1, 2, 3 footprint", target: "2x faster" },
  { metric: "Upsell Conversion", definition: "Early guidance converting to deeper GSP engagement", target: "+30%" },
  { metric: "Quote Time", definition: "Reduction in time to quote for advisory engagements", target: "50% faster" },
  { metric: "Platform Revenue", definition: "Contribution to RA+ recurring revenue", target: "Measurable" },
];

export const executiveTakeaway = {
  summary: "Sustainability Transformation turns world-class GSP expertise, client context, digital workflows, and advisory guidance into a scalable RA+ capability that improves consultant productivity, creates demand for deeper services, and supports recurring platform value.",
  conclusion: "By connecting top-down sustainability strategy, bottom-up site and asset insight, expert workflows, and customer-facing guidance, we create a broader Sustainability strategy that helps clients move from ambition to action inside RA+.",
};

export const appendixPillars = [
  {
    pillar: "Advisory Productivity",
    focus: [
      "Develop reusable methodologies to improve consultant effectiveness",
      "Standardize emission factors and defaults for faster inventories",
      "Generate structured CSRD, CDP, and TCFD deliverables in platform",
      "Centralize client sustainability context across sites and engagements",
    ],
    outcomes: [
      "Lower cost to serve per engagement",
      "Higher delivery capacity without headcount growth",
      "Reduced rework on disclosure cycles",
      "Consistent calculations across all consultants and regions",
    ],
    themes: [
      "Standardized methodologies and defaults",
      "Platform-native deliverable generation",
      "Centralized client context management",
      "Advisory workflow digitization",
    ],
    valueProof: [
      "Inventory completion time reduction",
      "Consultant throughput improvement",
      "Rework rate decrease",
    ],
  },
  {
    pillar: "Advisory Upsell Engine",
    focus: [
      "Expose selected GSP content and early advisory in RA+",
      "Create demand for SBTi, transition planning, and assurance",
      "Enable seamless path from insight to engagement",
      "Pre-fill context when advisory work is quoted",
    ],
    outcomes: [
      "Higher conversion to multi-year sustainability programs",
      "Better qualified GSP pipeline",
      "Shorter sales cycles for engagements",
      "Improved win rates on proposals",
    ],
    themes: [
      "Early high-impact opportunity identification",
      "In-product calls to action for GSP services",
      "Pre-filled assumptions for quotes",
      "Visibility into deeper analysis value",
    ],
    valueProof: [
      "Insight-to-engagement conversion rate",
      "Pipeline from in-product prompts",
      "Quote-to-close time reduction",
    ],
  },
  {
    pillar: "Recurring RA+ Revenue",
    focus: [
      "Productize early-stage sustainability insights",
      "Deliver value between formal disclosure cycles",
      "Create ongoing advisory value vs one-off",
      "Strengthen platform differentiation versus ESG software",
    ],
    outcomes: [
      "Recurring revenue from in-product sustainability guidance",
      "Stronger platform stickiness",
      "Customer value between disclosure cycles",
      "Differentiated RA+ value proposition",
    ],
    themes: [
      "Continuous decarbonization recommendations",
      "Goal-to-action Strategy integration",
      "Portfolio View for discovery",
      "Self-service scenario comparison",
    ],
    valueProof: [
      "Feature adoption rate",
      "Recurring revenue contribution",
      "Customer retention improvement",
    ],
  },
];

export const roadmapSummary = {
  investmentPriorities: [
    {
      number: 1,
      text: "Establish the Sustainability Strategy foundation with governed taxonomy and clean service boundaries",
    },
    {
      number: 2,
      text: "Deliver customer value through Strategy integration with goal-based decarbonization guidance",
    },
    {
      number: 3,
      text: "Introduce Portfolio View for bottom-up opportunity discovery at site and asset level",
    },
  ],
  pillars: [
    {
      id: "productivity",
      name: "Pillar 1: Advisory Productivity",
      tagline: "For the Global Sustainability Practice",
      icon: "Layers",
      focus: [
        "Develop reusable methodologies to improve consultant effectiveness",
        "Standardize factors and assumptions across engagements",
        "Generate structured deliverables in the platform",
      ],
      outcomes: [
        "Lower cost to serve per engagement",
        "Higher throughput per consultant",
        "Consistent outputs across all regions",
      ],
      themes: [
        "Standardized methodologies",
        "Platform-native deliverables",
        "Centralized client context",
        "Digital advisory workflows",
      ],
      valueProof: [
        "Inventory completion time reduction",
        "Consultant throughput improvement",
        "Rework rate decrease",
      ],
    },
    {
      id: "upsell-engine",
      name: "Pillar 2: Advisory Upsell Engine",
      tagline: "For deeper sustainability engagements",
      icon: "TrendingUp",
      focus: [
        "Expose early sustainability insights to create demand",
        "Enable seamless path from insight to engagement",
        "Pre-fill context for faster quote generation",
      ],
      outcomes: [
        "Higher conversion to multi-year programs",
        "Better qualified GSP pipeline",
        "Shorter sales cycles",
      ],
      themes: [
        "Early opportunity identification",
        "In-product calls to action",
        "Pre-filled assumptions",
        "Visibility into deeper value",
      ],
      valueProof: [
        "Insight-to-engagement conversion",
        "Pipeline from in-product prompts",
        "Win rate improvement",
      ],
    },
    {
      id: "recurring-revenue",
      name: "Pillar 3: Recurring Revenue",
      tagline: "Through in-product sustainability advice",
      icon: "Sparkles",
      focus: [
        "Productize early-stage sustainability insights",
        "Deliver value between formal disclosure cycles",
        "Create ongoing advisory value",
      ],
      outcomes: [
        "Recurring revenue from sustainability guidance",
        "Stronger platform stickiness",
        "Differentiated RA+ value proposition",
      ],
      themes: [
        "Continuous recommendations",
        "Strategy integration",
        "Portfolio View discovery",
        "Self-service exploration",
      ],
      valueProof: [
        "Feature adoption rate",
        "Recurring revenue contribution",
        "Customer retention",
      ],
    },
  ],
};

export const keyChallenges = [
  {
    id: "manual-workflows",
    title: "Manual Advisory Workflows",
    issues: [
      "Inventory and disclosure work relies on Excel templates and PowerPoint deliverables",
      "Inconsistent emission factors and assumptions across consultants and regions",
      "High time and effort per engagement limits scalability across 400+ experts",
    ],
  },
  {
    id: "fragmented-context",
    title: "Fragmented Client Context",
    issues: [
      "Client sustainability data is fragmented across tools, SharePoints, and vendor platforms",
      "Context must be recreated for each new engagement",
      "No centralized view across sites, Maisons, footprints, and disclosures",
    ],
  },
  {
    id: "late-expertise",
    title: "Late Expertise Delivery",
    issues: [
      "GSP expertise is delivered late in the cycle and does not scale",
      "Customers must wait for full CDP, CSRD, or footprint cycle to see opportunities",
      "No early credibility-building touchpoints in the sales process",
    ],
  },
  {
    id: "no-recurring-value",
    title: "No Recurring Value",
    issues: [
      "Early sustainability advice is not productized and cannot generate recurring value",
      "One-off advisory model limits ongoing customer relationship",
      "Platform value tied to episodic disclosures, not continuous guidance",
    ],
  },
];

// Why Now - 6-column narrative
export const whyNowColumns = [
  {
    id: "pressure",
    title: "Pressure",
    color: "amber",
    items: [
      "Customers expect earlier and clearer sustainability guidance, not annual reports",
      "CSRD, ISSB, TCFD, and TNFD timelines are creating concrete buying pressure across regions",
      "SBTi-aligned net-zero targets push customers to make capital decisions in 2026",
      "AI bypass risk: customers like LVMH and Syngenta are evaluating in-house AI on their sustainability data",
      "Competitor movement accelerating digital sustainability advisory (Deepki, Measurabl, Sweep, Watershed)",
      "Internal scaling limits (manual inventories, fragmented tools across 400+ consultants)",
    ],
  },
  {
    id: "confusion",
    title: "Confusion",
    color: "orange",
    items: [
      "Customers cannot access credible guidance without a full CDP or CSRD cycle",
      "No central system of record for sustainability methodologies, factors, and assumptions",
      "Advisory workflows are disconnected from the RA+ product",
    ],
  },
  {
    id: "structure",
    title: "Structure",
    color: "emerald",
    items: [
      "Provisional decarbonization knowledge base now, enriched via past-engagement pipeline",
      "Create the connection from shared guidance to Strategy, Portfolio View, and the RA+ Sustainability product",
      "Single governed sustainability knowledge base with taxonomy, required fields, and versions",
      "Lock shared methodologies, factors, and assumptions to remove variance across regions",
    ],
  },
  {
    id: "value",
    title: "Value",
    color: "blue",
    items: [
      "Top-down: goal-based decarbonization guidance inside Strategy so customers get value before a full engagement",
      "Bottom-up: site- and asset-level opportunity relevance so customers explore by place, not just targets",
      "Explainability and guardrails so early advice is credible and upsells to deeper GSP advisory when needed",
      "Dedicated RA+ Sustainability product with end-to-end workflows for clients and consultants",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    color: "violet",
    items: [
      "Customers receive faster, more consistent guidance through one governed source",
      "The same sustainability intelligence can be reused across Strategy, Portfolio View, regions, and sectors",
      "Integration with RA+, NTBS offsetting, vendor software platforms, and external data feeds",
      "GSP expertise is leveraged at scale rather than repeated manually across 7,500+ projects",
      "This foundation supports the future RA+ Sustainability product",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    color: "green",
    items: [
      "Better customer decisions and higher adoption of decarbonization measures",
      "Customers achieve measurable Scope 1, 2, 3 emissions reductions",
      "Schneider Electric gains stronger credibility as #1 sustainability consulting practice",
      "Stickier RA+ recurring revenue",
      "GSP teams get advisory upsell from early insight, become more productive through digitization",
    ],
  },
];

// Capability Matrix
export const capabilityMatrix = {
  phases: [
    "Draft Knowledge Base",
    "Engagement-Mining Project",
    "NOW (Strategy Integration)",
    "NEXT (Portfolio View)",
    "LATER (RA+ Sustainability Product)",
  ],
  capabilities: [
    {
      id: 1,
      opportunity: "Shared sustainability language, taxonomy, and governance",
      statuses: [
        { status: "done", note: "Defined first taxonomy: scopes, categories, factors, methodologies" },
        { status: "done", note: "Validates and enriches taxonomy with real engagement examples" },
        { status: "done", note: "Needed immediately for Strategy" },
        { status: "done", note: "Required for Portfolio View" },
        { status: "done", note: "Core always" },
      ],
    },
    {
      id: 2,
      opportunity: "Standardized data model (validation and DQA)",
      statuses: [
        { status: "done", note: "Draft schema and required fields defined for Scope 1, 2, 3" },
        { status: "done", note: "Engagement mining exposes inconsistencies to fix" },
        { status: "done", note: "Enforced for Strategy consumption" },
        { status: "done", note: "Required for consistent filtering" },
        { status: "done", note: "Required for all workflows and assurance" },
      ],
    },
    {
      id: 3,
      opportunity: "Central Knowledge Base (Library UI)",
      statuses: [
        { status: "done", note: "Draft decarbonization measure set created" },
        { status: "done", note: "Adds more examples for knowledge base population" },
        { status: "done", note: "Knowledge base MVP used by Strategy" },
        { status: "done", note: "Knowledge base used by Portfolio View" },
        { status: "done", note: "Extended with deeper metadata" },
      ],
    },
    {
      id: 4,
      opportunity: "Machine-readable guidance (programmatic access)",
      statuses: [
        { status: "done", note: "Metadata definitions created" },
        { status: "done", note: "Extracted metadata increases machine-readability" },
        { status: "done", note: "Needed to expose guidance to Strategy" },
        { status: "done", note: "Critical for Portfolio View logic" },
        { status: "done", note: "Mandatory for full product workflows and Sera agents" },
      ],
    },
    {
      id: 5,
      opportunity: "Library to Strategy service boundary",
      statuses: [
        { status: "partial", note: "Early thinking only" },
        { status: "partial", note: "Engagement mining not directly relevant" },
        { status: "done", note: "Main delivery in NOW" },
        { status: "partial", note: "Reused by Portfolio View" },
        { status: "partial", note: "Reused later" },
      ],
    },
    {
      id: 6,
      opportunity: "Convert goals into actions (net-zero pathways)",
      statuses: [
        { status: "partial", note: "Foundation only" },
        { status: "partial", note: "Knowledge base enrichment improves relevance" },
        { status: "done", note: "Implemented in Strategy" },
        { status: "partial", note: "Indirectly reused" },
        { status: "not-done", note: "Not used directly" },
      ],
    },
    {
      id: 7,
      opportunity: "Assumption defaults and prefill (emission factors)",
      statuses: [
        { status: "done", note: "Identified needed fields" },
        { status: "done", note: "Mined patterns help create default logic" },
        { status: "partial", note: "Light use possible" },
        { status: "done", note: "Key relevance feature in Portfolio View" },
        { status: "done", note: "Full automation in product" },
      ],
    },
    {
      id: 8,
      opportunity: "Analysis scaffolding (per-measure guidance)",
      statuses: [
        { status: "partial", note: "Only conceptual" },
        { status: "partial", note: "Raw data helps understand common variables" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented in product" },
      ],
    },
    {
      id: 9,
      opportunity: "Structured asset and site capture",
      statuses: [
        { status: "not-done", note: "Not addressed" },
        { status: "not-done", note: "Not addressed" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented in product" },
      ],
    },
    {
      id: 10,
      opportunity: "Disclosure deliverable builder (CDP, CSRD, TCFD)",
      statuses: [
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented fully" },
      ],
    },
    {
      id: 11,
      opportunity: "Performance and assurance feedback loop",
      statuses: [
        { status: "not-done", note: "" },
        { status: "partial", note: "Partial: historical patterns help with priors" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented when real outcomes exist" },
      ],
    },
  ],
};

// Quarterly Roadmap
export const quarterlyRoadmap = [
  {
    quarter: "Q2 2026",
    theme: "Assessment and Scope Definition",
    color: "amber",
    deliverables: [
      "Run the first assessment of what GSP methodologies should bring into RA+",
      "Confirm the decarbonization measure and emissions data model, taxonomy, metadata, and governance needs",
      "Define minimum RA+ service boundaries for sustainability guidance and emissions signals",
      "Prioritize the top 200 decarbonization measures for the initial library launch",
      "Start SME review loops across regions to refine priorities",
      "Ship targeted intelligence enhancements in existing vendor software workflows in parallel (June 2026) so existing customers feel forward motion",
    ],
    teamImpact: [
      "Teams align on what must be built before RA+ exposes sustainability capability",
      "Experts from advisory, NTBS, CLICK, and DIH help define expectations early during workshops",
      "Methodology requirements are captured before delivery work hardens around the wrong assumptions",
      "Existing customers see continued investment while RA+ foundations are built in parallel",
    ],
  },
  {
    quarter: "Q3 2026",
    theme: "Initial Decarbonization Library Launch",
    color: "emerald",
    deliverables: [
      "Launch the initial decarbonization library late Q3 with the top 200 measures",
      "Publish taxonomy, naming rules, granularity, and metadata standards for v1",
      "Connect sustainability guidance to the Strategy product as the first RA+ consumption path",
      "Document emissions and operational data inputs needed for opportunity relevance",
      "Prepare the MVP scope for Q4, including measure guidance and emissions signal priorities",
    ],
    teamImpact: [
      "Consultants start leveraging a standard database connected with client data and get access to common measure language",
      "The Strategy product starts consuming a governed sustainability foundation",
      "The team has a concrete data backlog tied to the RA+ MVP instead of a generic migration plan",
    ],
  },
  {
    quarter: "Q4 2026",
    theme: "RA+ Sustainability MVP Launch",
    color: "blue",
    deliverables: [
      "Launch the initial RA+ MVP for Sustainability",
      "Expose the top 200 decarbonization measures through governed guidance and Strategy workflows",
      "Bring initial emissions and risk signals into RA+ for client context",
      "Enable early expert engagement request paths from guided discovery (SBTi, climate risk, offsetting)",
      "Capture feedback from pilot users to refine data fields, assumptions, and workflow handoffs",
    ],
    teamImpact: [
      "Customers and GSP teams see the first usable RA+ Sustainability experience",
      "Consultants receive better prepared demand from early guided discovery",
      "Emissions data starts contributing to action guidance on a central platform",
    ],
  },
  {
    quarter: "Q1 2027",
    theme: "MVP Hardening and Workflow Expansion",
    color: "violet",
    deliverables: [
      "Go live with SE Corporate as the lead reference customer in March 2027",
      "Improve measure metadata quality and expand beyond the top 200 based on usage",
      "Deepen emissions integration for data-quality visibility, trend context, and assurance support",
      "Refine assumption defaults, applicability rules, and expert escalation triggers",
      "Add structured handoff outputs for GSP advisory and engagement preparation",
      "Prepare the next release path toward Portfolio View and dedicated Sustainability workflows",
    ],
    teamImpact: [
      "SE Corporate provides a living proof point for the RA+ Sustainability experience",
      "The MVP becomes more reliable and useful for real advisory workflows",
      "GSP teams become more productive through reusable methodology and client context",
      "The roadmap shifts from foundation building to workflow depth and scaled adoption",
    ],
  },
];

export const dataNeeded = [
  { name: "Sustainability Taxonomy", description: "Scopes, categories, emission factors, and methodologies" },
  { name: "Default Assumptions", description: "Standard values for Scope 1, 2, 3 calculations" },
  { name: "Site Descriptors", description: "Facility type, geography, sector, regulatory exposure" },
  { name: "Constraint Inputs", description: "Budget, timeline, capital cycle, risk tolerance" },
  { name: "Goal Mappings", description: "Net-zero targets, SBTi pathways, sector benchmarks" },
  { name: "Pattern Data", description: "Similar client outcomes and case evidence from 7,500+ projects" },
  { name: "Assurance Outcomes", description: "ISO 14064 verification, ISSA 5000 readiness, third-party assurance results" },
  { name: "Regulatory Links", description: "CSRD, ISSB, CDP, TCFD, TNFD, EU Taxonomy requirements" },
];

export const optionalClientContext = [
  { name: "Operational Data", description: "Energy, water, waste, and process data feeds" },
  { name: "Supply Chain Data", description: "Supplier emissions, spend-based and activity-based Scope 3 inputs" },
];

export const existingTools = [
  { name: "GSP Methodologies", description: "Global Sustainability Practice methodologies for GHG accounting, SBTi, climate risk, and disclosure", limitation: "Documented in SharePoints and Word, not yet wired into the RA+ sustainability graph, EF library, or SERA workflows" },
  { name: "Vendor Software Stack", description: "Tennaxia, Watershed, Persefoni and other third-party sustainability platforms supported by GSP", limitation: "Disconnected from the RA+ governed data spine, lineage, and advisory upsell paths" },
  { name: "Existing Carbon and ESG Tools", description: "Carbon footprint platforms, CDP and CSRD reporting modules across the SE estate", limitation: "Reporting-focused, no shared sustainability graph or agentic action layer" },
  { name: "GSP Digital Assets", description: "Digital assets for physical climate risk, transition risk, biodiversity, and financial quantification", limitation: "Powerful but client-by-client deployed, not yet productized on the RA+ platform foundation" },
];

export const idmCapabilities = {
  tagline:
    "GSP rides the RA+ sustainability spine: a shared sustainability graph, governed ingest and transform pipelines, an EF library with end-to-end lineage, and SERA-led agentic workflows that connect emissions, operational, financial, supply chain, and disclosure signals with expert GSP knowledge.",
  positioning: {
    title: "Sustainability Data Backbone",
    subtitle: "Trusted client data before insight, proof after action.",
    modes: [
      {
        label: "Step Zero",
        role: "Signal where action is needed",
        description:
          "Connected emissions, operational, and supply chain data reveals decarbonization and risk gaps before a full advisory engagement is launched.",
        outcome: "A credible trigger for expert review and targeted GSP action.",
      },
      {
        label: "Step Last",
        role: "Prove what changed",
        description:
          "After actions are taken, the spine tracks performance against SBTi targets and net-zero baselines and keeps customers connected to outcomes.",
        outcome: "Continuous proof and a path into the next improvement cycle.",
      },
    ],
    principle:
      "The RA+ opportunity is not a reporting migration or visual lift-over. It is turning proven GSP capabilities into shared platform intelligence that guides decisions, prioritization, and continuous improvement.",
  },
  bmsBypass: {
    title: "Vendor Software Bypass: Bypass the Heavy Implementation",
    subtitle:
      "The biggest adoption blocker for many customers is the cost and lead time of standing up a new ESG platform. RA+ connectivity removes that barrier by meeting customers where their data already lives.",
    benefits: [
      {
        label: "No platform rip and replace",
        detail: "Pull existing emissions and operational data directly from the customer's existing vendor stack.",
      },
      {
        label: "Faster time to insight",
        detail: "Weeks, not quarters. No procurement cycle, no rebuild of the data model.",
      },
      {
        label: "Wider addressable base",
        detail: "Unlocks customers who have a vendor ESG tool but no Schneider sustainability footprint.",
      },
      {
        label: "Cross-business synergy",
        detail: "Direct hook into Schneider energy and operational data; reuses existing data flows.",
      },
    ],
    fallback:
      "Where no vendor platform exists, utility, ERP, and survey feeds still provide a baseline sustainability experience. Vendor software implementation becomes an upsell, not a prerequisite.",
  },
  stats: [
    { value: "426.54M", label: "tCO2 managed", detail: "Across the GSP client base" },
    { value: "400+", label: "Climate experts", detail: "Across regions and global functions" },
    { value: "7,500+", label: "Projects delivered", detail: "Climate and environmental engagements" },
    { value: "2,000+", label: "Carbon footprints", detail: "Calculated across all sectors and geographies" },
    { value: "400+", label: "Offsetting projects", detail: "Supported in 55+ countries with 200+ local partners" },
    { value: "#1", label: "Globally ranked", detail: "Sustainability Magazine consulting services" },
  ],
  categories: [
    {
      name: "Data Ingestion",
      capabilities: [
        "Emissions, utility, ERP, supplier, and vendor software intake",
        "Multiple stream stitching, reprocessing, and normalization",
        "Activity-based and spend-based Scope 3 conversion",
        "Data validation routines and bulk editing",
        "Patch-on-the-fly data quality",
        "Connectivity monitoring tools",
      ],
    },
    {
      name: "Analysis and Intelligence",
      capabilities: [
        "GHG inventory modeling and baseline engine",
        "SBTi pathway and scenario modeling",
        "Comprehensive emission factor library and updates",
        "Marginal abatement cost curves and decarbonization libraries",
        "Tag and hierarchy-based aggregation across Maisons and sites",
        "Alerting, notification, and smart anomaly detection on emissions drift",
      ],
    },
    {
      name: "Assurance and Outcomes",
      capabilities: [
        "Workflows that measure, verify, and explain whether decarbonization actions delivered expected outcomes",
        "ISO 14064-aligned inventory and assurance support, progressing toward ISSA 5000 and ISO 17029",
        "Actual vs. baseline tracking across emissions, cost, and operational outcomes",
        "Performance indicators normalized for activity, occupancy, or production to support ISO 50001",
        "Multiple baselines per data stream",
        "Performance deviation detection and reforecasting",
        "Investment protection and verification linked to disclosure",
      ],
    },
  ],
};

export const competitiveLandscape = [
  {
    name: "Watershed",
    scope: "Global",
    description: "Carbon accounting and decarbonization platform with strong supply chain (Scope 3) focus",
    threat: "Fast-moving, well-funded, strong UX and AI investment",
  },
  {
    name: "Sweep",
    scope: "Global",
    description: "Sustainability data platform with Scope 3 and supplier engagement modules",
    threat: "Aggressive enterprise sales motion and CSRD-aligned positioning",
  },
  {
    name: "Persefoni",
    scope: "Global",
    description: "Climate management and accounting platform with strong assurance positioning",
    threat: "Big four accounting partnerships and ISSB-readiness messaging",
  },
  {
    name: "Deepki",
    scope: "EU focused",
    description: "ESG data intelligence and advisory for commercial real estate",
    threat: "Segment-focused with strong AI workflow investments",
  },
  {
    name: "Measurabl",
    scope: "Global",
    description: "ESG software for CRE with asset-level data and acquired submetering (Hatch)",
    threat: "Deepening into the action layer via acquisitions",
  },
];

export const marketTrends = [
  "AI fueling expectations for intelligent, agentic sustainability management",
  "Scope 3 and supply chain decarbonization are now the dominant client conversation",
  "CSRD, ISSB, CDP, TCFD, and TNFD timelines pulling investment into compliance and assurance",
  "SBTi-aligned net-zero targets driving capital allocation decisions in 2026 and beyond",
  "Segment-focused leaders investing in AI-first ESG workflows (Watershed, Sweep, Persefoni)",
  "Nature, biodiversity, and water risk emerging as the next reporting frontier",
  "Increasing need for cross-disciplinary expertise: climate, nature, finance, regulation, data science",
];

export const serviceModelComparison = [
  {
    model: "Advisory + Platform",
    fullName: "GSP Advisory wrapped around RA+",
    description: "A service model where the customer subscribes to RA+ for continuous sustainability intelligence, with GSP advisory consumed for SBTi, climate risk, transition planning, and assurance as needed.",
    typicalOutcomes: ["Continuous decarbonization progress", "Audit-ready disclosures", "Pulled-in expert engagement at the right moments"],
    dataNeeds: ["Connected emissions and operational data", "Supplier and spend data for Scope 3", "Site, asset, and capital plan context"],
    verificationLevel: "Higher. Assurance and compliance need to be credible for CSRD, ISSB, and CDP, supported by ISO 14064 and progressing toward ISSA 5000.",
  },
  {
    model: "NTBS + Offsetting",
    fullName: "Nature and Technology Based Solutions",
    description: "A complementary model where residual emissions are addressed through high-integrity carbon credits and project development, supported by Schneider's EcoScore methodology.",
    typicalOutcomes: ["Credible net-zero residual handling", "Voluntary and compliance market access", "Bespoke project development (forestry, blue carbon, cookstoves)"],
    dataNeeds: ["Decarbonization roadmap and residual emissions estimate", "Sector and geography preferences", "Quality and integrity thresholds"],
    verificationLevel: "Highest for project development. 300 projects analyzed per year and 20+ site audits annually under EcoScore.",
  },
];

export const intelligenceFlywheel = {
  title: "Strategy-to-Improvement Flywheel",
  subtitle: "The operating model that connects advisory, NTBS offsetting, and continuous performance improvement in RA+",
  veeExplainer: {
    title: "DQA: Data Quality Assurance",
    description:
      "DQA is the trust layer that prepares emissions and activity data before it informs analysis, recommendations, or assurance claims.",
    usedWhen: [
      "A data feed has gaps, missing categories, double-counted streams, or inconsistent factors",
      "Estimated values are needed to create a complete inventory",
      "A baseline, target, or assurance claim depends on trusted activity and emissions data",
    ],
    outcome:
      "The result is a cleaner, auditable data set that the sustainability workflow can trust before moving into benchmarking, opportunity discovery, transition planning, or disclosure.",
  },
  stages: [
    { name: "Data", description: "Integrations plus DQA to make emissions and activity data reliable before it informs decisions", icon: "Database" },
    { name: "Strategy", description: "Portfolio priorities, materiality, maturity assessment, and site or Maison prioritization", icon: "Brain" },
    { name: "Design", description: "Inventories, baselines, SBTi pathways, and transition plan inputs from trusted context", icon: "Settings" },
    { name: "Execution", description: "Workflow integration, project handoff, implementation support, and outcome tracking", icon: "Eye" },
    { name: "Output", description: "Living disclosures, guided findings, advisory deliverables, and executive narratives", icon: "FileText" },
    { name: "Improve", description: "Continuous optimization, assurance feedback, and next-best recommendations", icon: "Zap" },
  ],
  keyInsight: "The future platform advantage is not another ESG dashboard. It is the RA+ intelligence layer (sustainability graph, governed lineage, EF library, SERA agents) connecting trusted client data, expert GSP knowledge, and NTBS offsetting pathways so users move from sustainability ambition to measurable improvement.",
  differentiators: [
    { label: "Data availability", status: "Baseline" },
    { label: "Expert context (400+ experts)", status: "Essential" },
    { label: "Implementation path (Advisory + NTBS)", status: "Advantage" },
    { label: "Continuous outcomes and assurance", status: "Differentiator" },
  ],
};

export const marketConstraints = [
  "Trust is essential: in-product advice must be labeled as guidance, not assurance",
  "Emissions and savings must show ranges with confidence levels",
  "Measures requiring licensed assurance (ISO 14064, ISSA 5000) need clear expert escalation paths",
  "Audit trails required for all advice shown and inputs used",
  "Methodology transparency mandatory where disclosure or regulatory exposure exists",
];

export const executiveNarrative = {
  whatsHappening: "Sustainability Transformation is broader than a content library. It is the operating strategy for bringing GSP expertise, NTBS offsetting, DIH digital assets, and client context into a scalable RA+ capability.",
  trueProblem: "Today, client emissions and operational data, GSP advisory expertise, NTBS offsetting pathways, and disclosure workflows are not yet operating as one system. That limits RA+ from moving beyond reporting into guided sustainability improvement.",
  northStarTitle: "A governed GSP capability embedded in RA+",
  northStar: "The north star is an authoritative sustainability foundation inside RA+ that connects client data as the trusted system of record, expert GSP knowledge, and guided workflows. It should power goal-based Strategy recommendations, site- and asset-level Portfolio View discovery, structured disclosure deliverables, and a clear path from early insight to expert engagement.",
  pragmaticWay: "We will lift the highest-value GSP methodologies into RA+, establish the governed sustainability strategy foundation, deliver immediate value through Strategy integration, and build toward an agentic sustainability experience over time.",
  economicImpact: [
    "Inventories and disclosures completed faster with higher consistency",
    "Increased upsell rate from early in-product insight to SBTi, climate risk, and transition advisory",
    "Reduced time to quote for advisory engagements",
    "Measurable adoption of in-product sustainability recommendations",
    "Tangible contribution to RA+ recurring revenue",
  ],
  strategicUpside: "The vision connects top-down sustainability strategy, bottom-up site and asset insights, NTBS offsetting, expert workflows, and customer-facing experiences. It establishes a shared operating foundation and a clear path toward intelligence-driven sustainability management in RA+.",
  risks: [
    { risk: "Trust and credibility", mitigation: "Implement guardrails for customer-facing advice: ranges, confidence levels, expert escalation paths" },
    { risk: "Scope creep", mitigation: "Keep out of scope: assurance commitments, regulatory filings without validation" },
    { risk: "Adoption barriers", mitigation: "Deliver immediate value through Strategy integration before Portfolio View" },
    { risk: "Data quality", mitigation: "Enforce minimum data checks; display applicability rules and blockers" },
  ],
  needsNow: [
    "Finalize and govern unified sustainability taxonomy",
    "Connect sustainability guidance to Strategy for goal-based decarbonization guidance",
    "Define and implement guardrails for customer-facing advice",
    "Plan Portfolio View MVP for bottom-up discovery",
  ],
};

export const timeline = {
  q1: {
    title: "Q1: Foundation and Strategy",
    items: [
      "Sustainability taxonomy finalized",
      "Clean service boundaries",
      "Strategy integration live",
      "Guardrails defined",
      "Data quality standards",
      "Provisional Library published",
    ],
  },
  q2: {
    title: "Q2: Portfolio View",
    items: [
      "Portfolio View MVP",
      "Opportunity relevance logic",
      "Self-service exploration",
      "Structured deliverables",
    ],
  },
  h2: {
    title: "H2: Scale and Intelligence",
    items: [
      "Full consultant workflows",
      "Assurance feedback loop",
      "AI recommendations",
      "NTBS offsetting integration",
      "External regulatory and science feeds",
    ],
  },
};

// Regional Journey Comparison
export const regionalJourneys = {
  intro:
    "There is no single sustainability journey. Each GSP region and segment enters, delivers, and monetizes differently. The platform must support flexible entry and exit points rather than force one path.",
  stages: [
    "Lead Intake",
    "Data Collection",
    "Inventory & Materiality",
    "Analysis & Guidance",
    "Recommendations",
    "Implementation",
    "Assurance & Monitoring",
  ],
  journeys: [
    {
      id: "europe",
      name: "Northern & Central Europe",
      tagline: "Knowledge-led inventory and decarbonization",
      revenue: "Strong growth pipeline (Syngenta, others)",
      sellingPoint: "Expertise on Scope 3, regenerative agriculture, and risk resilience",
      coverage: {
        "Lead Intake": { level: "core", note: "Mix of net-new and legacy EcoAct accounts" },
        "Data Collection": { level: "core", note: "Decentralized Scope 3 data; supplier engagement intensive" },
        "Inventory & Materiality": { level: "core", note: "Scope 1, 2, 3 inventory plus hotspot analysis" },
        "Analysis & Guidance": { level: "core", note: "Manual today; sustainability knowledge base in build" },
        "Recommendations": { level: "core", note: "Polished deliverable plus capacity building" },
        "Implementation": { level: "light", note: "Pilots (biochar, regen ag) supported, full execution often client-led" },
        "Assurance & Monitoring": { level: "light", note: "Scenario analysis and climate risk updates on a cycle" },
      },
    },
    {
      id: "uki",
      name: "UK & Ireland",
      tagline: "Multi-year decarbonization and climate risk partnerships",
      revenue: "Significant, Laing O'Rourke and similar accounts",
      sellingPoint: "Governance, CDP, TCFD, TNFD, SBTi end-to-end",
      coverage: {
        "Lead Intake": { level: "core", note: "Often starts with CDP, expands to multi-year" },
        "Data Collection": { level: "core", note: "Governance and data sharing setup heavy" },
        "Inventory & Materiality": { level: "core", note: "Sector-specific decarbonization pathways" },
        "Analysis & Guidance": { level: "core", note: "Climate scenario analysis across regions" },
        "Recommendations": { level: "core", note: "SBT validated targets and financial framing" },
        "Implementation": { level: "light", note: "Board engagement and capability building" },
        "Assurance & Monitoring": { level: "core", note: "Ongoing reporting, gap analyses, target tracking" },
      },
    },
    {
      id: "americas",
      name: "Americas",
      tagline: "Reporting, inventory, and multi-region regulatory",
      revenue: "Hertz, financial services, large industrials",
      sellingPoint: "Global muscle for regional regulations (Australia, California, etc.)",
      coverage: {
        "Lead Intake": { level: "core", note: "Long-standing accounts plus new regulatory triggers" },
        "Data Collection": { level: "core", note: "GHG inventory management plans, IMP documentation" },
        "Inventory & Materiality": { level: "core", note: "Multi-region inventories aligned to local rules" },
        "Analysis & Guidance": { level: "core", note: "Risk screening and climate tool deployment" },
        "Recommendations": { level: "light", note: "Embedded in disclosure deliverables" },
        "Implementation": { level: "light", note: "Strategic resilience planning" },
        "Assurance & Monitoring": { level: "core", note: "Third-party assured disclosures, ongoing reporting" },
      },
    },
    {
      id: "southern-europe",
      name: "Southern Europe",
      tagline: "Long-term strategic partnerships",
      revenue: "LVMH and similar flagship accounts",
      sellingPoint: "Full-spectrum: GHG, vendor software, climate risk, decarbonization, offsetting",
      coverage: {
        "Lead Intake": { level: "core", note: "Multi-year strategic engagements" },
        "Data Collection": { level: "core", note: "Tennaxia and other platform deployments" },
        "Inventory & Materiality": { level: "core", note: "Carbon footprint platform, energy audits" },
        "Analysis & Guidance": { level: "core", note: "Climate risk on 7,300+ sites, deep-dives" },
        "Recommendations": { level: "core", note: "Decarbonization and transition plan" },
        "Implementation": { level: "core", note: "Energy efficiency, EU Taxonomy, nature-based solutions" },
        "Assurance & Monitoring": { level: "core", note: "Biodiversity, water, insetting and offsetting strategies" },
      },
    },
  ],
  convergence: {
    title: "Where journeys converge",
    point: "Assurance & Monitoring",
    description:
      "All four regional journeys can meet on the assurance and monitoring layer. RA+ becomes the shared backend for client data, disclosure, and continuous improvement, regardless of how the customer first arrived.",
  },
  divergence: [
    {
      title: "Implementation",
      detail: "Southern Europe and UK&I deepen into implementation (efficiency, nature-based solutions). Americas and N&C Europe often stop at recommendations or hand-off.",
    },
    {
      title: "Deliverable",
      detail: "Europe sells the polished decarbonization deliverable. Americas sells assured disclosure. UK&I sells the validated SBT and pathway.",
    },
    {
      title: "Sector mix",
      detail: "Southern Europe leans luxury and industrials. UK&I leans construction and infrastructure. Americas leans financial services and global enterprise.",
    },
  ],
  designPrinciple:
    "Build a flexible journey where customers enter and exit at any step. Shared backend, region-conditional UX. Do not force one umbrella across LVMH, Syngenta, Hertz, and Laing O'Rourke.",
};

// Knowledge Engine: extracting GSP IP into a structured library
export const ecmIngestionEngine = {
  intro:
    "Over a decade of GSP IP sits in scattered SharePoints, consultant desktops, and disclosure decks across Schneider. The knowledge engine turns that latent expertise into a structured, queryable sustainability foundation that powers smart recommendations.",
  prototype: {
    title: "Deliverable Extraction Prototype",
    subtitle: "Built with the GSP team.",
    flow: [
      {
        step: "01",
        name: "Drop",
        description: "Consultant drops a past engagement deliverable (LVMH decarbonization deck, Syngenta inventory, Laing O'Rourke pathway) into the platform.",
      },
      {
        step: "02",
        name: "Extract",
        description: "The engine reads the deliverable and auto-extracts key fields per decarbonization measure: name, abatement potential, cost, payback, scope, and sector.",
      },
      {
        step: "03",
        name: "Review",
        description: "Original consultant confirms or edits the extracted data. Human-in-the-loop keeps quality high.",
      },
      {
        step: "04",
        name: "Ingest",
        description: "Validated measures land in the central knowledge base, tagged by client, sector, geography, and scope.",
      },
    ],
    accuracy: "~80% accuracy on first pass during initial testing.",
  },
  monteCarlo: {
    title: "Monte Carlo Top-5 Recommendations (to be considered for RA+)",
    subtitle:
      "Volume unlocks intelligence. Once we have thousands of historic engagement examples, we run probabilistic simulation to surface the right actions for the right client.",
    inputs: [
      "Client context: sector, geography, supply chain footprint, regulatory exposure",
      "Historic decarbonization performance distributions including abatement, cost, and payback ranges",
      "Available data quality signals from emissions, operational, and supply chain feeds",
      "Constraints: budget, capital cycle, regulatory deadlines, target ambition",
    ],
    output:
      "A ranked Top-5 decarbonization shortlist per client, with probability-weighted abatement, cost bands, and confidence intervals, not a pixel-perfect single number.",
    why: "A measure might range from 5% to 40% abatement depending on context. Monte Carlo embraces that uncertainty rather than hiding it, giving GSP teams a defensible starting point in seconds.",
  },
  enablers: [
    "RA+ ingest and transform pipelines feed inventory data, footprints, and supplier records straight into the sustainability knowledge base via the shared sustainability graph.",
    "SERA and product agents accelerate extraction, EF matching, and gap-filling, with end-to-end lineage on every output.",
    "Expert-in-the-loop validation plus the RA+ AI quality system (evaluation harness, feedback loops) keep the library clean as it scales across regions.",
  ],
  guardrails: [
    "Never replace the consultant. Recommendations are a starting point, not the deliverable.",
    "Probability bands, not false precision. Show ranges and confidence, not single decimals.",
    "Customer-specific context always wins over portfolio averages, especially for SBTi and assurance.",
  ],
};

// Strategic Context: deadlines, customer archetypes, regulatory tailwinds
export const efficiencyStrategicContext = {
  intro:
    "Three forces shape why this strategy matters now: the RA+ platform transition, proven GSP delivery strength (ranked #1 globally), and the need to convert trusted client sustainability data into guided action.",
  raClassicSunset: {
    title: "RA+ Platform Transition",
    badge: "Strategic Window",
    timeframe: "2026 - 2028",
    summary:
      "GSP capabilities and the broader sustainability advisory should evolve into RA+ as shared platform intelligence, not just a migrated set of reports.",
    implications: [
      {
        label: "GSP capability scale",
        detail: "Turn proven advisory and NTBS offsetting into RA+ services where they create platform leverage.",
      },
      {
        label: "Phased evolution",
        detail: "Start with continuity and sustainability guidance, then layer deeper automation and Sera-driven reasoning.",
      },
      {
        label: "Customer continuity",
        detail: "Protect existing accounts (LVMH, Syngenta, Hertz, Laing O'Rourke) while RA+ becomes the broader home for sustainability management.",
      },
      {
        label: "Clear governance",
        detail: "Align product, data, engineering, and GSP domain experts around the same transition choices.",
      },
    ],
  },
  customerArchetypes: {
    title: "Two Customer Archetypes",
    subtitle:
      "The GSP serves two very different buyers. The platform must respect both, not collapse them into one experience.",
    archetypes: [
      {
        name: "Traditional Advisory Customer",
        tagline: "One-off inventory or disclosure, polished deliverable",
        share: "Traditional advisory demand",
        wants: [
          "Quick footprint or CDP submission, no platform commitment",
          "Polished decarbonization deck",
          "Expert GSP know-how, not a tool",
          "In and out, with optional renewal next cycle",
        ],
        risk: "If we force them onto a platform, we lose the deal. Self-serve adoption is unrealistic.",
        fit: "Internal productivity tool only (to start). Consultants use the platform; the customer never sees it.",
      },
      {
        name: "Enterprise Strategic Account",
        tagline: "LVMH, Syngenta, Hertz and similar global accounts",
        share: "Highest growth, highest visibility",
        wants: [
          "Integrated, always-on platform across Maisons and sites",
          "Live dashboards, granular Scope 3 data, audit trail",
          "Self-serve exploration with GSP expert support on tap",
          "A reference story they can cite internally and externally",
        ],
        risk: "A deck-only deliverable underwhelms them. Without RA+, they will look at Watershed, Sweep, Persefoni, or build it themselves.",
        fit: "Full RA+ deployment with GSP advisory wrapped around the platform.",
      },
    ],
    tension:
      "The strategy must serve both realities: some customers still need an expert-led advisory deliverable, while strategic accounts increasingly expect an always-on sustainability platform.",
  },
  ghgTailwind: {
    title: "Regulatory and Net-Zero Tailwind",
    badge: "Market Pull",
    summary:
      "Customers increasingly expect emissions, risk, nature, and financial performance to be connected in one intelligent experience. High-quality client sustainability data becomes the foundation for that shift.",
    impacts: [
      {
        label: "Continuous data becomes table stakes",
        detail: "Annual inventories will not satisfy executive expectations for timely net-zero and CSRD-aligned decisions.",
      },
      {
        label: "GSP role strengthens",
        detail: "GSP becomes the trusted methodology owner behind reporting, action guidance, and assurance services.",
      },
      {
        label: "Consulting-to-action path",
        detail: "Strategy, design, execution, and continuous improvement can operate as one guided RA+ journey.",
      },
      {
        label: "Supply chain and nature unlock scale",
        detail: "Existing supplier and operational data sources reduce friction and extend the addressable base before new instrumentation is required.",
      },
    ],
    soWhat:
      "Build the RA+ sustainability spine and the GSP knowledge base connection so they natively serve emissions, risk, nature, and finance. The same data spine powers the full improvement cycle.",
  },
};

// Platform Shift: legacy advisory vs RA+ Sustainability
export const platformShift = {
  intro:
    "Today GSP advisory lives outside the platform: methodologies in Word, factors in Excel, deliverables in PowerPoint. RA+ re-platforms sustainability as a native, agent-ready capability. This is the opportunity to build a SaaS solution for sustainability services, not migrate documents.",
  classic: {
    title: "Legacy GSP Delivery",
    tagline: "Document-driven by design",
    points: [
      "Methodologies and factors live in SharePoints, Word, and Excel across regions",
      "Separate tools per service line (Tennaxia, Persefoni, in-house spreadsheets) that do not interoperate",
      "Separate disclosures with manual bridges between CDP, CSRD, TCFD, TNFD",
      "Corrected emissions data does not persist back into a unified platform",
      "Hundreds of integration sources, but client sustainability data stays siloed by engagement",
      "Field engagement work product never reaches the central knowledge layer",
    ],
  },
  raPlus: {
    title: "RA+ Sustainability",
    tagline: "Integrated by design",
    points: [
      "Sustainability spine inside RA+ as the agent-ready context layer for emissions, risk, nature, and supply chain data",
      "One unified data model across all products, with client sustainability data as a first-class citizen",
      "Emissions and risk data live in dashboards, disclosures, and pathways natively, no tool hop",
      "Client data blended with GSP methodology and NTBS offsetting that Sera can reason over",
      "Sera as the primary interface from day one across all engagement profiles",
      "Self-serve onboarding, no spreadsheets, no export and re-import loop",
      "Disclosure digitization via existing sustainability surfaces, fed by the spine",
    ],
  },
  thesis:
    "Every pain point in current GSP delivery stems from sustainability living as documents and disconnected vendor tools. RA+ eliminates that architecture by turning client sustainability data into the spine the whole advisory workflow runs on.",
  bureauAnchor: {
    title: "What the GSP Delivers Today",
    subtitle: "400+ climate experts, 7,500+ projects delivered, 426.54M tCO2 managed, 2,000+ carbon footprints, 400+ offsetting projects in 55+ countries, #1 globally ranked",
    lines: [
      {
        layer: "Foundation",
        name: "Advisory Services",
        detail: "GHG inventory, decarbonization, climate risk, nature and biodiversity, voluntary reporting, compliance, sustainable finance, vendor software advisory. The backbone of GSP revenue.",
      },
      {
        layer: "Accelerator",
        name: "Nature & Technology Based Solutions (NTBS)",
        detail: "25 experts financing and developing high-quality nature and tech-based projects. 300 projects analyzed per year, 20+ site audits annually under EcoScore. Forestry, blue carbon, and improved cookstoves.",
      },
    ],
    soWhat:
      "RA+ digitizes all three on a single sustainability spine. The data platform replaces manual inventory workflows. Sera automates analysis. Assurance becomes a platform capability. Reach expands from the GSP-served client base to the broader RA+ installed base, supporting self-serve, expert-supported, and fully-managed engagement profiles on the same data foundation.",
  },
};


// Personas (4 ranked roles) and design sequence
export const personas = {
  intro:
    "Four roles interact with the RA+ Sustainability capability. We design for all of them, but in a deliberate sequence: the Sustainability Lead's daily experience drives the primary UX.",
  designPrinciple:
    "Design the Sustainability Lead experience first. It is the highest-frequency, highest-emotional-stakes interaction. Both modes (continuous monitoring and disclosure investigation) are Sera-driven. Data Operations Analyst configuration tools are layered behind through progressive disclosure. CSO and Executive consume sustainability insights through existing RA+ reporting and dashboarding surfaces.",
  roles: [
    {
      name: "Sustainability / ESG Lead",
      rank: "Primary",
      context: "Daily operator, client-side, portfolio level",
      summary:
        "The person closest to the sustainability program. Checks RA+ regularly. Operates in two modes: continuous monitoring and disclosure investigation. Both modes are Sera-driven.",
      outcomes: [
        "Spot emissions drift and risk before it threatens targets",
        "Prove that decarbonization measures deliver expected abatement",
        "Trust that the numbers on screen are audit-ready",
        "Share a CSRD or CDP-ready report with leadership without help",
        "Understand why something happened, not just that it happened",
        "Find patterns worth acting on across Maisons and sites",
      ],
    },
    {
      name: "Data Operations Analyst",
      rank: "Secondary",
      context: "SE internal or client power-user, supplier and site data",
      summary:
        "Onboards new emission sources, fixes data gaps, manages hierarchies and supplier data. In legacy delivery this role absorbs enormous administrative overhead. In RA+ this role should shrink dramatically.",
      outcomes: [
        "Onboard new emission sources in minutes, not weeks",
        "Know where Scope 3 and operational data gaps exist and fix them fast",
        "Trust that client data flows into disclosures without manual bridges",
        "Manage hundreds of suppliers without touching spreadsheets",
      ],
    },
    {
      name: "Chief Sustainability Officer",
      rank: "Tertiary",
      context: "Client-side, executive accountable for net-zero commitments",
      summary:
        "Cares about disclosures, SBTi-aligned targets, and portfolio progress. Needs the numbers right and reports auditable for board and investors.",
      outcomes: [
        "Sustainability data feeds CSRD, ISSB, and CDP without manual aggregation",
        "Portfolio benchmarks include all sites and Maisons",
        "Audit trail proves data provenance for assurance",
        "One reporting surface for all data types and frameworks",
      ],
    },
    {
      name: "Executive / CFO",
      rank: "Inform",
      context: "Client-side, consumes outcomes and capital allocation only",
      summary:
        "Receives dashboards and summary reports. Never interacts with emissions data directly but makes investment decisions based on the insights it enables.",
      outcomes: [
        "See verified progress against SBTi-aligned targets",
        "Confidence that reported numbers are trustworthy for investors",
        "One dashboard covering the full portfolio and Scope 3",
        "Actionable insights and capital allocation guidance, not raw data",
      ],
    },
  ],
};

// Jobs to Be Done
export const jobsToBeDone = {
  intro:
    "The jobs users hire RA+ Sustainability to do. Not features, not screens, but outcomes. Operational covers the continuous rhythm of detecting, monitoring, tracking, and proving. Analytical covers investigation sessions: root cause, comparison, pattern discovery, insight packaging. Every one of these jobs assumes the RA+ sustainability spine as the underlying foundation, so emissions, supply chain, risk, and engagement IP show up in the same place. In both modes, Sera is the primary interface.",
  ecmInsight:
    "Decarbonization measure identification is not a separate job. It is what happens when jobs 3, 6, and 8 are done well with trusted client data and good AI. Customers do not ask for measure libraries. They ask Sera to find emission hotspots, explain anomalies, and show patterns. The output of those conversations, grounded in the sustainability spine, is a measure.",
  jobs: [
    { num: 1, type: "Operational", title: "Detect emissions drift", description: "When responsible for sustainability performance across sites and Maisons, know immediately if emissions or risk are diverging from target, so problems can be addressed before they threaten the year-end disclosure. Powered by continuous client data, not annual exports." },
    { num: 2, type: "Operational", title: "Monitor performance", description: "When managing day-to-day operations, see emissions and risk against expected baselines, so deviations are caught early. Baselines and live readings sit on the same spine." },
    { num: 3, type: "Operational", title: "Identify emission hotspots", description: "When reviewing a portfolio's footprint, pinpoint where emissions are concentrated unnecessarily, so reduction opportunities can be quantified and prioritized using detailed Scope 1, 2, 3 context." },
    { num: 4, type: "Operational", title: "Validate data quality", description: "When making decisions based on sustainability data, confirm activity and emissions records are complete and accurate, so action is taken with confidence and audit-ready records are maintained. RA+ makes quality status visible in-product, not in a separate spreadsheet." },
    { num: 5, type: "Operational", title: "Track against SBTi targets", description: "When managing net-zero commitments, track performance against validated targets continuously, so drift is corrected early and compliance can be proven against the same numbers used everywhere else." },
    { num: 6, type: "Analytical", title: "Diagnose root cause", description: "When detecting an anomaly or unexpected emissions pattern, understand the root cause quickly by letting Sera reason over client data plus supplier and engagement context, so the right corrective action is taken." },
    { num: 7, type: "Analytical", title: "Compare performance", description: "When evaluating a site or Maison's performance, compare it fairly against similar peers or time periods using a shared baseline, so real underperformance is distinguished from expected variation." },
    { num: 8, type: "Analytical", title: "Discover patterns", description: "When managing sustainability across a portfolio over time, surface slow drifts and structural patterns not visible cycle-to-cycle. The spine keeps the history queryable so structural improvements are identified." },
    { num: 9, type: "Analytical", title: "Drive action from insights", description: "When an insight is worth acting on, package it into a clear deliverable for the right audience, so decisions are driven from leadership, finance, or operations, backed by traceable client evidence." },
    { num: 10, type: "Analytical", title: "Manage action plans and follow-through", description: "When committing to a decarbonization improvement, track action items, site-level progress, and target attainment against measured outcomes, so follow-through is ensured and continuous improvement is provable." },
    { num: 11, type: "Analytical", title: "Prioritize across portfolio", description: "When responsible for multiple Maisons or sites, know which units need attention most urgently using portfolio-wide signals, so time is spent where it has the greatest abatement and risk impact." },
    { num: 12, type: "Operational", title: "Bring sustainability data into the workflow", description: "When working in RA+, expect emissions, risk, supplier, and engagement context in the same screens, with no tool hop, no spreadsheet export, and no re-stitching by hand." },
    { num: 13, type: "Analytical", title: "Reason over sustainability data with Sera", description: "When investigating a question, ask Sera in natural language and have it reason over the RA+ context layer, blending client data with GSP methodologies and NTBS offsetting options." },
  ],
};


// VOC Evidence: real GSP case studies
export const vocEvidence = {
  intro:
    "Four GSP customer engagements treated as Voice of Customer evidence. Each case validates the demand for embedded sustainability advisory, methodological rigor, and continuous platform-supported delivery.",
  signals: [
    { label: "Persona Validation", value: "High", detail: "4 clients across CSO, ESG Lead, Finance, Operations" },
    { label: "JTBD Validation", value: "High", detail: "Jobs 1, 3, 5, 6, 9, 10, 11 validated" },
    { label: "AI-First Demand", value: "High", detail: "Enterprise accounts mandating AI in every platform" },
    { label: "Multi-Service Pull", value: "High", detail: "All accounts pull GHG + risk + reporting + offsetting" },
  ],
  customers: [
    {
      name: "Syngenta",
      contact: "Tzutzuy Ramirez, Head of Climate & Nature",
      context: "Decentralized agriculture business, ~90% emissions in Scope 3",
      findings: [
        "Scope 3 data complexity across decentralized business required centralized data, hotspot analysis, and capacity building",
        "Significant farm-level emissions from residue decomposition led to a biochar feasibility program with the seeds business",
        "3 pilots advancing regenerative agriculture by reducing usage of conventional fertilizers",
        "Climate scenario analysis across global sites confirmed and updated risk picture, informing strategic resilience planning",
      ],
      quote: "Over 90% of Syngenta's emissions are in Scope 3. We're committed to reducing these emissions in the years ahead and value having a strong partner who has expertly pinpointed key emission sources and effective decarbonization levers.",
    },
    {
      name: "Laing O'Rourke",
      contact: "UK&I Advisory Team",
      context: "One of the UK's largest privately-owned construction and engineering companies, global operations",
      findings: [
        "Early-stage governance and maturing sustainability capability strengthened through CDP, TCFD, TNFD gap analyses",
        "High-emitting, complex construction sector with limited low-carbon technologies required regional climate scenario analysis",
        "Set near-term and net-zero SBTs with realistic decarbonisation pathways and financial impacts",
        "Built board understanding and engagement through clear commercial framing of climate insights",
      ],
      quote: "A trusted, multi-year consultancy partnership delivering robust climate governance, approved science-based targets and a practical decarbonisation pathway aligned to future climate priorities.",
    },
    {
      name: "Hertz",
      contact: "Page Motes, VP, Chief Compliance & Sustainability Officer",
      context: "Long-time customer (8+ years), multi-region regulatory exposure (Australia CASB261)",
      findings: [
        "Needed a region-specific climate risk assessment and emissions inventory for Australia to meet new national regulatory requirements",
        "First set of third-party assured climate-risk and emissions engagements prompted complex discussions on methodologies",
        "Tight collaboration across Americas reporting & risk teams and Australian teams to align methodologies and demonstrate SE alignment",
        "Built GSP organizational capacity for multi-region regulatory reporting",
      ],
      quote: "Thank you ALL for your diligence and partnership on this engagement. It was great to see some faces today and just wanted to express our gratitude for your expertise.",
    },
    {
      name: "LVMH",
      contact: "Arnaud Lajoinie, Climate & Circularity Director",
      context: "Strategic multi-year partnership, 20+ Maisons, €1.3M in 2025 revenues",
      findings: [
        "Group targets of -50% Scope 1&2 by 2026 and -48% Scope 3 by 2030 require coordinated Group-wide climate program",
        "Tennaxia platform deployment strengthened consistency and reliability of environmental reporting across Maisons",
        "Energy audits, climate risk on 7,300 sites, 6 deep-dive risk assessments across the value chain",
        "Expansion of opportunities at Group and Maison levels: energy management (incl. RA+), EU Taxonomy, nature-based solutions, biodiversity, water, insetting and offsetting",
      ],
      quote: "The deployment of the Tennaxia platform has significantly strengthened the consistency and reliability of our environmental reporting across Maisons. For the first time, we can collect, validate and consolidate ESG data through a unified, structured workflow.",
    },
  ],
};

// SE Corporate as the MVP blueprint
export const seCorporateBlueprint = {
  title: "SE Corporate: GSP Reference Customer",
  intro: "",
  scale: [
    { value: "Multi-scope", label: "Inventory coverage", detail: "Scope 1, 2, 3 emissions across global sites, supplier base, and product footprints" },
    { value: "Global", label: "Footprint", detail: "Operations across 100+ countries with sustainability reporting under multiple regulatory regimes" },
    { value: "Multi-framework", label: "Disclosure stack", detail: "CDP, CSRD, ISSB, TCFD, TNFD, SBTi aligned" },
    { value: "Live", label: "Decarbonization program", detail: "Active SBTi-aligned targets and transition plan in execution" },
  ],
  trainingSignal:
    "SE Corporate is uniquely positioned as the lead reference for RA+ Sustainability: an enterprise account with the same scale, regulatory exposure, and complexity as flagship GSP clients. Lessons learned land directly back into the platform.",
  phaseMap: [] as { phase: string; detail: string }[],
  conclusion: "",
};

// Legacy Pain Inventory
export const painInventory = {
  intro:
    "Legacy GSP delivery limitations that the platform shift eliminates. Every must-fix item stems from sustainability living outside the platform: documents, spreadsheets, and siloed vendor tools.",
  pains: [
    { id: "P1", severity: "Must fix", title: "Methodology lives in documents", detail: "GHG accounting, SBTi, TCFD, and TNFD methodologies sit in Word and SharePoint. Consultants rebuild context each engagement; users do not know which version is current." },
    { id: "P2", severity: "Must fix", title: "Factors and assumptions are inconsistent", detail: "Emission factors and assumptions vary by consultant and region. No single governed source. Disclosures across the same client may not reconcile." },
    { id: "P3", severity: "Must fix", title: "Multi-step bridge to disclosure", detail: "To get inventory data into CDP, CSRD, and TCFD outputs: extract from vendor tool, transform in Excel, validate, paste into disclosure template, re-validate. Repeated each cycle across hundreds of sites." },
    { id: "P4", severity: "Must fix", title: "Corrected data is not persisted", detail: "Corrections made during engagement only live in that engagement's deliverable. No audit trail for the platform. Corrected values do not flow back into the client's master record." },
    { id: "P5", severity: "Must fix", title: "Spreadsheet-driven supplier onboarding", detail: "Scope 3 supplier engagement requires generating Excel templates, emailing suppliers, collecting responses, validating, applying. Drives multi-month engagement timelines." },
    { id: "P6", severity: "Must fix", title: "Disconnected disclosure systems", detail: "CDP, CSRD, TCFD, and TNFD disclosures are produced from separate workflows. Cross-framework consistency is enforced manually, framework by framework." },
  ],
};

// Two product scope: RA+ Sustainability vs Asset Planning
export const productScope = {
  intro:
    "RA+ organizes sustainability capabilities into two separately-sold products within the Sustainability family. This playbook covers RA+ Sustainability. Asset Planning is a separate discovery.",
  products: [
    {
      name: "RA+ Sustainability",
      tag: "This Discovery",
      summary: "The daily-use product. Monitoring, analysis, alerting, data quality, supplier management, and disclosure-ready outputs.",
      capabilities: [
        "Continuous emissions and risk monitoring",
        "Anomaly detection and proactive alerting on emissions drift",
        "Inventory analysis (trend, hotspot, scope, sector comparison)",
        "Data quality: completeness, gap detection, correction, audit trails",
        "Source and supplier onboarding (self-serve)",
        "Unified data model integration with RA+ platform",
        "Methodology management and segmentation",
        "Action tracking and workflow support",
      ],
    },
    {
      name: "Asset Planning",
      tag: "Separate Discovery",
      summary: "The project-oriented product. Baseline modeling, transition plan execution, capital investment planning, and project portfolio tracking.",
      capabilities: [
        "Baseline modeling for SBTi-aligned pathways",
        "Transition plan execution and tracking",
        "Project tagging, abatement tracking, and outcome reporting",
        "Capital asset lifecycle and decarbonization planning",
        "Cost and abatement analysis",
        "Schneider Sustainability Impact tracking",
      ],
    },
  ],
  whyEEFirst: [
    "Foundation: RA+ Sustainability creates the data infrastructure that Asset Planning builds on.",
    "Frequency: RA+ Sustainability is a daily-use product, and daily-use products drive adoption.",
    "Pain severity: All 6 must-fix items from the legacy pain inventory are RA+ Sustainability problems.",
    "Dependency: Asset Planning consumes RA+ Sustainability's substrate. Reliable emissions data, baselines, a unified hierarchy.",
  ],
  boundary:
    "These products are sold separately, but they build on each other. The platform must ensure the boundary between them is a licensing boundary, not a technical one.",
};


export const architectureDecision = {
  intro:
    "Two viable paths to bring RA+ Sustainability live by Q4 2026. The choice shapes integration cost, time to value, and the long-term shape of the platform.",
  options: [
    {
      id: "plan-a",
      label: "Plan A",
      title: "Build native in RA+",
      summary:
        "Stand up sustainability guidance and client data signals as first-class RA+ services, consumed directly by Strategy and the Sustainability MVP.",
      pros: [
        "Cleanest long-term architecture and shared services across modules",
        "No bridge code to maintain or sunset later",
        "Best foundation for Sera as the unified interface",
      ],
      cons: [
        "Heavier upfront engineering investment",
        "Higher delivery risk for the Q4 2026 milestone",
      ],
    },
    {
      id: "plan-b",
      label: "Plan B",
      title: "Bridge from vendor stack",
      summary:
        "Expose existing Tennaxia and vendor software capabilities through a controlled bridge into RA+ to hit the Q4 2026 milestone, with a planned migration to native services later.",
      pros: [
        "Faster path to a usable RA+ Sustainability MVP",
        "Lower delivery risk for the committed timeline",
        "Keeps vendor software investment productive during the transition",
      ],
      cons: [
        "Bridge code becomes technical debt that must be retired",
        "Risk of carrying vendor data-model issues into RA+",
        "Sera experience may feel less coherent until native services land",
      ],
    },
  ],
  decisionCriteria: [
    "Confidence that native services can be delivered by Q4 2026",
    "Severity of vendor pain points that would leak into RA+",
    "SE Corporate readiness to use a Plan B experience in March 2027",
    "Engineering capacity available without slowing parallel advisory work",
  ],
  status: "Open decision flagged for the working group, no commitment made.",
};

export const maturityLadder = {
  intro:
    "Customer sustainability maturity progresses through four stages. RA+ Sustainability must meet customers where they are and pull them up the ladder over time.",
  stages: [
    {
      num: "01",
      label: "Accountability",
      description:
        "Customers know who owns sustainability, can see emissions by site, Maison, or business unit, and have an inventory baseline they trust.",
    },
    {
      num: "02",
      label: "Disclosure",
      description:
        "Sustainability data is structured cleanly to support CDP, CSRD, ISSB, TCFD, and TNFD disclosures with traceable methodologies.",
    },
    {
      num: "03",
      label: "Performance Management",
      description:
        "SBTi targets, baselines, and variances are tracked continuously. Anomalies and drift are surfaced before they become annual-report problems.",
    },
    {
      num: "04",
      label: "Transformation",
      description:
        "Customers act on prioritized decarbonization recommendations, embed sustainability in operating and capital models, and verify outcomes through assurance loops.",
    },
  ],
  note:
    "This ladder is a customer maturity lens, not a pricing or commercial-tiering model.",
};

export const seraKPIs = {
  intro:
    "Sera-specific signals confirm that the interface is producing real continuous value, not just dashboards.",
  kpis: [
    { label: "Weekly briefings consumed", description: "Sustainability Leads open the briefing as part of their routine" },
    { label: "Anomaly narration accuracy", description: "Sera explanations of emissions drift are confirmed as useful by Data Ops" },
    { label: "Target risk prognosis use", description: "CSOs use forward-looking SBTi target risk views in reviews" },
    { label: "Disclosure draft acceleration", description: "Sera-prepared CDP, CSRD, and TCFD drafts shorten the assurance cycle" },
    { label: "Action plan attainment", description: "Decarbonization action plans created in Sera reach committed completion rates" },
  ],
};

export const raPlusPlatformFoundation = {
  eyebrow: "RA+ Platform Foundation",
  title: "How GSP Plugs Into the RA+ Platform",
  intro:
    "Sustainability Transformation does not build a parallel stack. It plugs GSP IP into the same Unified, Proactive, and Adaptive RA+ foundation the rest of the suite runs on, so every engagement compounds platform intelligence.",
  pillars: [
    {
      id: "unified",
      title: "Unified",
      tagline: "One platform, one governed data spine",
      icon: "Layers",
      components: [
        "Shared sustainability graph and semantic models connecting emissions, operational, supply chain, and disclosure data",
        "Enterprise organization and entity model with delegated admin",
        "Ingest and transform services that standardize client data into governed models",
        "Connectors to RA classic, Zeigo, ZCP, ERPs, and vendor ESG platforms",
      ],
      gspBenefit:
        "GSP consultants and clients work off the same trusted client data. The spreadsheet stitching that slows engagements today goes away.",
    },
    {
      id: "proactive",
      title: "Proactive",
      tagline: "Decision-ready, defensible insights",
      icon: "LineChart",
      components: [
        "EF library with automated emission factor matching and governance",
        "End-to-end lineage so every metric is traceable to source",
        "Inventory, target, scenario, and initiative modeling with financial views",
        "Analytics, benchmarking, and anomaly detection with explanations",
      ],
      gspBenefit:
        "Advisory outputs are audit-defensible by construction. Recommendations are anchored in governed data, not one-off spreadsheets.",
    },
    {
      id: "adaptive",
      title: "Adaptive",
      tagline: "AI-native, configurable, agentic",
      icon: "Sparkles",
      components: [
        "SERA and product agents for onboarding, EF mapping, gap-filling, anomaly investigation, and disclosure drafting",
        "Agentic platform foundation with human-in-the-loop control",
        "Configurable reference data and EF services for new frameworks and methodologies",
        "AI quality system: evaluation harness, feedback loops, and traceability of AI outputs",
      ],
      gspBenefit:
        "GSP methodologies become living, agent-assisted workflows. The platform absorbs new regulations and frameworks through configuration, not custom builds.",
    },
  ],
  soWhat:
    "Every GSP capability lands on the same RA+ pillars. That is what turns advisory hours into recurring platform value instead of another tool to maintain.",
};
