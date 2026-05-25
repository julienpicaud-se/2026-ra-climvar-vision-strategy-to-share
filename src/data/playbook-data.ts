// RA+ Prism · Financial Risk Quantification Playbook Data
// Advisory services + RA+ Prism technology

export const strategicPillars = [
  {
    id: "quantify",
    title: "Quantify",
    tagline: "Climate and nature risk in financial terms",
    promise: "We translate physical, transition and nature risks into a single, forward-looking Climate Value at Risk that boards, CFOs and investors can act on.",
    description: "RA+ Prism uses a published Discounted Cash Flow methodology to express climate and nature risks as a measurable impact on enterprise value, revenue, OPEX and COGS. Finance becomes the entry door for the sustainability conversation, not the other way around.",
    whatLivesHere: [
      "Climate Value at Risk waterfall across physical, transition and nature drivers",
      "Revenue, OPEX and COGS impacts modelled out to 2050",
      "Scenario coverage from business as usual to net zero and worst case",
      "Auditable, transparent assumptions grounded in public scenarios (NGFS, IPCC RCP)",
      "Variable granularity from country and sector to site and supply chain",
    ],
    successMetrics: [
      "Climate and nature risks expressed as a single financial number per scenario",
      "Decisions framed in CFO language, not qualitative heatmaps",
      "Faster path from risk exposure to risk valuation",
      "Defensible inputs for impairment tests, capital allocation and disclosures",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "adapt",
    title: "Adapt",
    tagline: "Turn risk reduction into investment options",
    promise: "We unlock concrete adaptation choices by quantifying how much risk each Schneider Electric solution removes across operations and supply chain.",
    description: "Once risk is in financial terms, adaptation can be appraised on the same footing as any other capital investment. RA+ Prism moves the conversation from awareness to action by sizing the gross Value at Risk, the adaptation cost, and the net Value at Risk after Schneider Electric measures are deployed.",
    whatLivesHere: [
      "Gross vs net Value at Risk view including adaptation costs and benefits",
      "Direct hook from quantified risk to PPA, efficiency, supply chain and resilience offers",
      "Site, country and supplier deep dives to target the right interventions",
      "Climate and nature opportunity surfacing alongside risk drivers",
      "Quantified abatement of risk per adaptation lever",
    ],
    successMetrics: [
      "Adaptation choices tied to a measurable Value at Risk reduction",
      "Higher pull through to Schneider Electric energy, efficiency and supply chain offers",
      "Resilience CAPEX justified with financial evidence",
      "Sharper prioritisation of the most material sites and suppliers",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "continuous",
    title: "Automate",
    tagline: "From one off analysis to a living risk view in RA+ Prism",
    promise: "After the first RA+ Prism advisory analysis, RA+ Prism turns the model into a continuously updated, in product capability that follows clients across their portfolio.",
    description: "RA+ Prism takes the methodology out of decks and into the platform. Clients monitor their Climate Value at Risk over time, refresh assumptions, drill from portfolio to site, and reuse the same trusted spine for disclosures, transition planning and capital reviews.",
    whatLivesHere: [
      "RA+ product that quantifies Value at Risk before and after adaptation",
      "Geographic and asset level deep dives on the same data backbone",
      "Refreshable scenarios, time horizons and adaptation profiles",
      "Reusable financial and operational inputs across engagements",
      "Bridge from RA+ Prism advisory to the wider Sustainability and Energy products of RA+",
    ],
    successMetrics: [
      "Recurring use of RA+ Prism by sustainability, risk and finance teams",
      "Lower marginal cost of every additional Climate Value at Risk refresh",
      "Cross sell into Carbon Performance, Supply Chain, Climate Risk and Energy products",
      "Stickier multi year engagements anchored on a living risk model",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];

export const objectives = [
  {
    id: "O1",
    title: "Establish RA+ Prism as the integrated financial view of climate and nature risk",
    linkedPillar: "quantify",
    customerOutcome: "Clients see one defensible Climate Value at Risk that combines physical, transition and nature drivers.",
    businessValue: "A clear, published methodology that positions Schneider Electric as the reference for financial quantification of climate risk.",
    keyResults: [
      { id: "KR1", title: "Six risk drivers covered in production (4 physical, 2 transition)", metric: "Live", roiMetric: "Coverage breadth" },
      { id: "KR2", title: "Nature risk product wired into the same waterfall", metric: "In progress", roiMetric: "Integration depth" },
      { id: "KR3", title: "Scenarios anchored on public references (NGFS, IPCC RCP)", metric: "100%", roiMetric: "Auditability" },
    ],
  },
  {
    id: "O2",
    title: "Activate RA+ Prism as an upsell engine for Schneider Electric offers",
    linkedPillar: "adapt",
    customerOutcome: "Clients move from risk awareness to a ranked set of adaptation investments tied to a measurable Value at Risk reduction.",
    businessValue: "Higher attach rate of efficiency, PPA, supply chain and resilience offers, justified in financial terms.",
    keyResults: [
      { id: "KR4", title: "Gross vs net Value at Risk view operational", metric: "Live", roiMetric: "Adaptation framing" },
      { id: "KR5", title: "Adaptation library connected to SE offer catalogue", metric: "Q3 2026", roiMetric: "Cross sell hit rate" },
      { id: "KR6", title: "Site and supply chain deep dive paths productised", metric: "Q4 2026", roiMetric: "Engagement depth" },
    ],
  },
  {
    id: "O3",
    title: "Industrialise RA+ Prism inside RA+ as a recurring product",
    linkedPillar: "continuous",
    customerOutcome: "Clients refresh their Climate Value at Risk on demand in RA+ Prism, drill from portfolio to site, and reuse the same spine for disclosures.",
    businessValue: "Recurring RA+ revenue and a defensible position in the financial risk quantification space.",
    keyResults: [
      { id: "KR7", title: "RA+ Prism MVP available to advisory clients", metric: "2026", roiMetric: "Active accounts" },
      { id: "KR8", title: "Self serve scenario and adaptation editing", metric: "Enabled", roiMetric: "Refresh frequency" },
      { id: "KR9", title: "Linkage with Carbon Performance, Climate Risk and Supply Chain products", metric: "Complete", roiMetric: "Product reuse" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "Lock the published RA+ Prism methodology", pillar: "quantify", outcome: "Reference DCF approach maintained and versioned", objective: "O1", kr: "KR1" },
    { title: "Cover the six core risk drivers in production", pillar: "quantify", outcome: "4 physical and 2 transition risks live with auditable assumptions", objective: "O1", kr: "KR1" },
    { title: "Anchor scenarios on public references", pillar: "quantify", outcome: "NGFS for transition, IPCC RCP for physical", objective: "O1", kr: "KR3" },
    { title: "Ship gross vs net Value at Risk", pillar: "adapt", outcome: "Adaptation cost and benefit visible in the waterfall", objective: "O2", kr: "KR4" },
    { title: "Set up the first assessment offer", pillar: "quantify", outcome: "Country and sector level quick start with minimal inputs", objective: "O1", kr: "KR1" },
    { title: "Run lighthouse use case on data centres", pillar: "adapt", outcome: "Joint work with the Schneider Electric Research Institute", objective: "O2", kr: "KR4" },
  ],
  next: [
    { title: "Add the nature risk product", pillar: "quantify", outcome: "Renewable natural capital loss in the same waterfall", objective: "O1", kr: "KR2" },
    { title: "Connect the adaptation library to SE offers", pillar: "adapt", outcome: "PPA, efficiency, supply chain and resilience tied to Value at Risk reduction", objective: "O2", kr: "KR5" },
    { title: "Launch RA+ Prism MVP", pillar: "continuous", outcome: "Continuous Value at Risk monitoring in product", objective: "O3", kr: "KR7" },
    { title: "Productise the site level deep dive", pillar: "adapt", outcome: "Geo and asset level Value at Risk with adaptation profiles", objective: "O2", kr: "KR6" },
    { title: "Self serve scenario editing", pillar: "continuous", outcome: "Clients adjust scenarios, horizons and assumptions in RA+", objective: "O3", kr: "KR8" },
    { title: "Plug supply chain inputs at rank one supplier level", pillar: "quantify", outcome: "Refined supply chain business interruption and carbon cost", objective: "O1", kr: "KR1" },
  ],
  later: [
    { title: "Extend transition risks beyond carbon and customer shift", pillar: "quantify", outcome: "Energy prices, reputational, litigation, investor and technology risks", objective: "O1", kr: "KR1" },
    { title: "Adaptation profile editor", pillar: "adapt", outcome: "CAPEX, OPEX and risk reduction profile per intervention", objective: "O2", kr: "KR5" },
    { title: "Cross product reuse with Carbon Performance and Climate Risk", pillar: "continuous", outcome: "One client spine across RA+ Prism and adjacent RA+ products", objective: "O3", kr: "KR9" },
    { title: "Portfolio level investor reporting view", pillar: "continuous", outcome: "Multi entity Value at Risk consolidation for asset owners", objective: "O3", kr: "KR9" },
    { title: "Internal Schneider Electric deployment on SE sites", pillar: "continuous", outcome: "Replace legacy risk tools with RA+ Prism across SE estate", objective: "O3", kr: "KR9" },
    { title: "Continuous outcome tracking", pillar: "adapt", outcome: "Realised vs modelled risk reduction after adaptation", objective: "O2", kr: "KR6" },
  ],
};

export const domainInitiatives = [
  {
    domain: "First Assessment",
    initiatives: [
      "Country and sector level Value at Risk with minimal inputs",
      "Confidence bands tied to data availability",
      "Quick scenario comparison across business as usual, net zero and worst case",
      "Materiality screening of physical, transition and nature drivers",
      "One page financial summary for CFO and risk leadership",
      "Clear path to deeper site or supply chain deep dive",
    ],
  },
  {
    domain: "Site Deep Dive",
    initiatives: [
      "Geo localised site level Value at Risk",
      "Asset value, COGS and OPEX ratios refined per site",
      "Heat productivity, cooling, business interruption and damages modelled per location",
      "Sensitivity to scenario and time horizon choices",
      "Adaptation profiles applied at the site level",
      "Inputs reusable across engagements and refreshes",
    ],
  },
  {
    domain: "Supply Chain Analysis",
    initiatives: [
      "Supply chain business interruption and carbon cost propagation",
      "Multi regional input output modelling without supplier data collection",
      "Optional refinement with rank one supplier geo and purchases",
      "Country and sector hotspots in the supply base",
      "Adaptation levers focused on supplier diversification and decarbonisation",
      "Quantified link to Schneider Electric supply chain programmes",
    ],
  },
  {
    domain: "Adaptation & Investment Case",
    initiatives: [
      "Gross vs net Value at Risk after adaptation",
      "Adaptation cost and risk reduction tied to specific SE offers",
      "CAPEX, OPEX and risk reduction profile per intervention",
      "Prioritisation by Value at Risk removed per euro invested",
      "Linkage to PPA, efficiency, supply chain and resilience programmes",
      "Defensible inputs for capital allocation and impairment tests",
    ],
  },
  {
    domain: "Client Experience",
    initiatives: [
      "Climate Value at Risk waterfall as the central output",
      "Time series view of discounted cash flow with and without climate",
      "Cross scenario comparison of risks and adaptation",
      "Simplified income statement under each scenario",
      "Custom risk profile input for client specific drivers",
      "Self serve refresh of assumptions and scenarios in RA+ Prism",
    ],
  },
  {
    domain: "Trust & Auditability",
    initiatives: [
      "Published methodology referenced on SSRN",
      "Reviewed and discussed with Amundi, Institut Louis Bachelier, PIK, Scientific Portfolio",
      "Public reference scenarios (NGFS for transition, IPCC RCP for physical)",
      "Transparent assumption registry per client and scenario",
      "Intra scenario uncertainty surfaced explicitly",
      "Reproducible Value at Risk for audit and assurance contexts",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Financial Framing",
    description: "Climate and nature risks translated into a single Value at Risk number that finance and boards can act on",
    metrics: ["Value at Risk per scenario", "Revenue, OPEX and COGS impact", "Time to first financial view"],
    icon: "TrendingDown",
  },
  {
    lever: "Adaptation Upsell",
    description: "Each adaptation lever is linked to a measurable Value at Risk reduction, unlocking SE offer pull",
    metrics: ["Value at Risk removed per euro invested", "Attach rate of SE offers", "Net vs gross Value at Risk delta"],
    icon: "TrendingUp",
  },
  {
    lever: "Recurring Platform Use",
    description: "RA+ Prism turns the analysis into a living capability refreshed across portfolio and time",
    metrics: ["Active RA+ Prism accounts", "Refresh frequency", "Cross product reuse"],
    icon: "DollarSign",
  },
  {
    lever: "Client Maturity Progression",
    description: "Clients move from country sector first assessment to site and supply chain deep dives",
    metrics: ["Granularity uplift over time", "Engagement length", "Repeat engagements"],
    icon: "Users",
  },
];

export const aiScorecard = [
  { metric: "Risk Driver Coverage", target: "6+", description: "Physical, transition and nature risks in one waterfall" },
  { metric: "Scenario Library", target: "Public", description: "NGFS for transition, IPCC RCP for physical, anchored and auditable" },
  { metric: "RA+ Prism MVP", target: "2026", description: "Continuous Value at Risk monitoring in product" },
  { metric: "Adaptation Coverage", target: "Live", description: "Gross vs net Value at Risk with adaptation cost and benefit" },
];

export const startStopMatrix = {
  framing: {
    theme: "Risk Framing",
    stop: "Qualitative heatmaps and exposure scores that boards cannot act on",
    start: "Climate Value at Risk expressed in euros, dollars and share of enterprise value",
  },
  scope: {
    theme: "Risk Scope",
    stop: "Treating physical, transition and nature risks as separate silos",
    start: "One integrated financial waterfall across all three risk families",
  },
  data: {
    theme: "Data Strategy",
    stop: "Waiting for perfect supplier and site data before quantifying anything",
    start: "Start with country sector defaults, refine with site and supplier data over time",
  },
  scenarios: {
    theme: "Scenarios",
    stop: "Bespoke in house scenarios that auditors cannot reconcile",
    start: "Public reference scenarios (NGFS, IPCC RCP) with transparent intra scenario uncertainty",
  },
  delivery: {
    theme: "Delivery Mode",
    stop: "Static PowerPoint deliverables refreshed once a year",
    start: "Living RA+ Prism model refreshed continuously across the portfolio",
  },
  adaptation: {
    theme: "Adaptation",
    stop: "Adaptation discussed in narrative form, disconnected from financial value",
    start: "Adaptation sized as gross vs net Value at Risk and tied to specific SE offers",
  },
  upsell: {
    theme: "Cross Sell",
    stop: "Sustainability and energy offers sold independently of risk quantification",
    start: "Adaptation choices anchor PPA, efficiency, supply chain and resilience programmes",
  },
  finance: {
    theme: "Finance Entry",
    stop: "Leading every conversation with the sustainability prism",
    start: "Leading with finance, then layering the sustainability narrative once Value at Risk is on the table",
  },
};

export const northStarMetrics = [
  { metric: "One number", target: "Value at Risk", description: "A single financial figure that integrates physical, transition and nature risks" },
  { metric: "Adaptation lift", target: "30 to 40%", description: "Typical Value at Risk reduction range observed when SE adaptation solutions are deployed" },
  { metric: "Recurring use", target: "RA+ Prism", description: "Continuous, in product refresh across portfolio and time" },
];

export const valuePillars = [
  {
    title: "Quantify",
    icon: "Zap",
    description: "Climate and nature risk translated into a single Value at Risk in financial terms",
  },
  {
    title: "Adapt",
    icon: "TrendingUp",
    description: "Adaptation framed as investment options with measurable Value at Risk reduction",
  },
  {
    title: "Automate",
    icon: "DollarSign",
    description: "Living risk view inside RA+ Prism refreshed across the portfolio",
  },
  {
    title: "Scale",
    icon: "Rocket",
    description: "Published methodology, public scenarios, and integration across RA+ products",
  },
];

export const strategicContext = {
  summary: "Today risk analyses are highly fragmented across physical, transition and nature lenses. Access to integrated financial data is limited, and material risk prioritisation stays largely qualitative. Clients see exposure, not enterprise value impact.",
  northStarTitle: "RA+ Prism as the integrated financial view of climate and nature risk",
  northStar: "RA+ Prism quantifies the combined impact of climate and nature risks on asset value through a published Discounted Cash Flow methodology. RA+ Prism embeds that capability in the platform, so risk quantification becomes a living capability that powers adaptation choices, cross sell into Schneider Electric offers, and continuous improvement.",
};

export const supportingScorecard = [
  { metric: "Risk Coverage", definition: "Physical, transition and nature risks integrated in one waterfall" },
  { metric: "Methodology Status", definition: "Published on SSRN, reviewed by leading industry and academic experts" },
  { metric: "Scenario Anchoring", definition: "Public references (NGFS for transition, IPCC RCP for physical)" },
  { metric: "Granularity Levels", definition: "Country sector first assessment, site deep dive, supply chain analysis" },
  { metric: "Adaptation View", definition: "Gross vs net Value at Risk with adaptation cost and benefit" },
];

export const roiScorecard = [
  { metric: "Value at Risk Surfaced", definition: "Share of enterprise value at risk under each scenario", target: "Quantified" },
  { metric: "Adaptation Reduction", definition: "Value at Risk removed by Schneider Electric adaptation measures", target: "30 to 40%" },
  { metric: "Refresh Cadence", definition: "Frequency of Value at Risk refresh inside RA+ Prism", target: "On demand" },
  { metric: "Upsell Attach", definition: "Schneider Electric offers tied to a RA+ Prism adaptation lever", target: "Increasing" },
];

export const executiveTakeaway = {
  summary: "RA+ Prism turns climate and nature risk into a financial conversation. It combines a published Discounted Cash Flow methodology, an integrated view across physical, transition and nature drivers, and an adaptation engine that links Schneider Electric offers to a measurable Value at Risk reduction.",
  conclusion: "Advisory delivers the first analysis. RA+ Prism industrialises it as a living capability inside the platform, so risk quantification, adaptation choices and continuous improvement run on one trusted spine.",
};

export const appendixPillars = [
  {
    pillar: "Quantify",
    focus: [
      "Maintain a published, auditable Discounted Cash Flow methodology",
      "Cover physical, transition and nature risks in one integrated waterfall",
      "Anchor scenarios on public references (NGFS, IPCC RCP)",
      "Provide variable granularity from country sector to site and supply chain",
    ],
    outcomes: [
      "A single Climate Value at Risk number per scenario",
      "Revenue, OPEX and COGS impact paths to 2050",
      "Transparent intra scenario uncertainty",
      "Defensible inputs for impairment, capital allocation and disclosures",
    ],
    themes: [
      "Integrated risk waterfall",
      "Published methodology",
      "Public reference scenarios",
      "Variable granularity analysis",
    ],
    valueProof: [
      "Value at Risk per scenario",
      "Time to first financial view",
      "Auditability of inputs and assumptions",
    ],
  },
  {
    pillar: "Adapt",
    focus: [
      "Link each adaptation lever to a Value at Risk reduction",
      "Tie RA+ Prism adaptation to the Schneider Electric offer catalogue",
      "Make adaptation cost and benefit visible in the same view",
      "Prioritise interventions by Value at Risk removed per euro invested",
    ],
    outcomes: [
      "Gross vs net Value at Risk view",
      "Adaptation choices framed as investment options",
      "Higher attach rate of SE energy, efficiency and supply chain offers",
      "Resilience CAPEX justified in financial terms",
    ],
    themes: [
      "Adaptation library",
      "Gross vs net Value at Risk",
      "SE offer linkage",
      "Capital prioritisation",
    ],
    valueProof: [
      "Value at Risk removed per euro invested",
      "Attach rate of SE offers tied to adaptation",
      "Share of clients moving from first assessment to deep dive",
    ],
  },
  {
    pillar: "Automate",
    focus: [
      "Productise RA+ Prism inside RA+ as RA+ Prism",
      "Enable continuous refresh across portfolio and time",
      "Reuse the same client spine across adjacent RA+ products",
      "Bring self serve scenario and adaptation editing to clients",
    ],
    outcomes: [
      "Recurring use of RA+ Prism by sustainability, risk and finance teams",
      "Lower marginal cost per Value at Risk refresh",
      "Stickier multi year engagements anchored on a living model",
      "Cross sell into Carbon Performance, Climate Risk and Supply Chain products",
    ],
    themes: [
      "RA+ Prism MVP",
      "Continuous monitoring",
      "Self serve scenarios",
      "Cross product reuse",
    ],
    valueProof: [
      "Active RA+ Prism accounts",
      "Refresh frequency per account",
      "Product reuse rate",
    ],
  },
];

export const roadmapSummary = {
  investmentPriorities: [
    { number: 1, text: "Lock and publish the RA+ Prism methodology with full coverage of physical, transition and (next) nature risks" },
    { number: 2, text: "Industrialise the adaptation engine that links Value at Risk reduction to Schneider Electric offers" },
    { number: 3, text: "Ship RA+ Prism as the continuous, in product version of the same methodology" },
  ],
  pillars: [
    {
      id: "quantify",
      name: "Pillar 1: Quantify",
      tagline: "Climate and nature risk in financial terms",
      icon: "Layers",
      focus: [
        "Integrated risk waterfall across physical, transition and nature",
        "Published Discounted Cash Flow methodology",
        "Public reference scenarios anchoring",
      ],
      outcomes: [
        "Single Value at Risk number per scenario",
        "Revenue, OPEX and COGS impact paths to 2050",
        "Transparent intra scenario uncertainty",
      ],
      themes: [
        "Integrated waterfall",
        "Published methodology",
        "Reference scenarios",
        "Variable granularity",
      ],
      valueProof: [
        "Value at Risk per scenario",
        "Time to first financial view",
        "Auditability of assumptions",
      ],
    },
    {
      id: "adapt",
      name: "Pillar 2: Adapt",
      tagline: "Investment options sized in financial terms",
      icon: "TrendingUp",
      focus: [
        "Adaptation cost and benefit visible in the waterfall",
        "Linkage with the Schneider Electric offer catalogue",
        "Prioritisation by Value at Risk removed",
      ],
      outcomes: [
        "Gross vs net Value at Risk view",
        "Higher attach rate of SE offers",
        "Resilience CAPEX justified financially",
      ],
      themes: [
        "Adaptation library",
        "Net vs gross VaR",
        "SE offer linkage",
        "Capital prioritisation",
      ],
      valueProof: [
        "VaR removed per euro invested",
        "Attach rate uplift",
        "Deep dive conversion",
      ],
    },
    {
      id: "continuous",
      name: "Pillar 3: Automate",
      tagline: "Living risk view in RA+ Prism",
      icon: "Sparkles",
      focus: [
        "Continuous Value at Risk monitoring in RA+",
        "Self serve scenario and adaptation editing",
        "Cross product reuse across RA+ Sustainability and Energy",
      ],
      outcomes: [
        "Recurring use of RA+ Prism",
        "Lower marginal refresh cost",
        "Stickier multi year engagements",
      ],
      themes: [
        "RA+ Prism MVP",
        "Continuous monitoring",
        "Self serve",
        "Product reuse",
      ],
      valueProof: [
        "Active accounts",
        "Refresh cadence",
        "Product reuse",
      ],
    },
  ],
};

export const keyChallenges = [
  {
    id: "fragmented-risk",
    title: "Fragmented Risk Analyses",
    issues: [
      "Physical, transition and nature risks are studied in separate silos",
      "Boards see partial pictures that do not aggregate into one number",
      "Cross risk trade offs are invisible to decision makers",
    ],
  },
  {
    id: "no-financial-view",
    title: "Limited Financial Quantification",
    issues: [
      "Access to comprehensive financial data tied to risk is limited",
      "Risk materiality stays largely qualitative",
      "CFOs cannot use exposure scores to prioritise capital",
    ],
  },
  {
    id: "static-deliverables",
    title: "Static Deliverables",
    issues: [
      "Risk analyses live in PowerPoint and are refreshed once a year",
      "No path from a delivered analysis to continuous monitoring",
      "Adaptation discussions are disconnected from the underlying model",
    ],
  },
  {
    id: "no-adaptation-link",
    title: "Adaptation Without Numbers",
    issues: [
      "Adaptation is debated qualitatively, without a financial price tag",
      "No linkage between adaptation and a measurable Value at Risk reduction",
      "Schneider Electric offers compete on features instead of risk removed",
    ],
  },
];

export const whyNowColumns = [
  {
    id: "pressure",
    title: "Pressure",
    color: "amber",
    items: [
      "Single climate events already wipe billions of enterprise value (Porsche, Deutsche Bahn, Duke Energy)",
      "Sustainable finance regulations push for forward looking, financial risk views",
      "CFOs need quantified climate inputs for impairment tests and capital allocation",
      "Investors expect integrated physical, transition and nature risk in financial terms",
      "AI growth and data centre build out raise the stakes for siting and resilience choices",
    ],
  },
  {
    id: "confusion",
    title: "Confusion",
    color: "orange",
    items: [
      "Risk analyses remain fragmented across physical, transition and nature lenses",
      "Existing tools stop at qualitative exposure scoring",
      "No comparable benchmark on integrated risk plus carbon plus monitoring to finance",
    ],
  },
  {
    id: "structure",
    title: "Structure",
    color: "emerald",
    items: [
      "Published Discounted Cash Flow methodology grounded in corporate finance",
      "Public reference scenarios (NGFS for transition, IPCC RCP for physical)",
      "Variable granularity model from country sector to site and supply chain",
      "Adaptation framed as investment options with measurable risk reduction",
    ],
  },
  {
    id: "value",
    title: "Value",
    color: "blue",
    items: [
      "Finance becomes the entry door for the sustainability conversation",
      "Adaptation gets a price tag, unlocking SE offer pull",
      "Site and supply chain deep dives unlock targeted interventions",
      "RA+ Prism makes risk quantification a recurring product, not a one off",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    color: "violet",
    items: [
      "One methodology that adapts to any sector, any geography",
      "Reusable client spine across adjacent RA+ products",
      "Internal Schneider Electric use case (data centres, SE sites) demonstrating scale",
      "No competitor on par on risk plus carbon plus monitoring to finance",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    color: "green",
    items: [
      "Better informed capital allocation and impairment decisions",
      "30 to 40% Value at Risk reduction observed with SE adaptation solutions",
      "Stronger pull on PPA, efficiency, supply chain and resilience programmes",
      "Stickier, recurring RA+ Prism revenue",
      "Schneider Electric positioned as the reference for financial climate risk quantification",
    ],
  },
];

export const capabilityMatrix = {
  phases: [
    "Methodology Foundation",
    "First Advisory Analyses",
    "NOW (Adaptation Engine)",
    "NEXT (RA+ Prism MVP)",
    "LATER (Cross product reuse)",
  ],
  capabilities: [
    {
      id: 1,
      opportunity: "Integrated risk waterfall (physical, transition, nature)",
      statuses: [
        { status: "done", note: "Six risk drivers covered, nature in progress" },
        { status: "done", note: "Validated on data centre lighthouse and pilots" },
        { status: "done", note: "Required for adaptation framing" },
        { status: "done", note: "Core of the RA+ Prism MVP" },
        { status: "done", note: "Shared across products" },
      ],
    },
    {
      id: 2,
      opportunity: "Public reference scenarios (NGFS, IPCC RCP)",
      statuses: [
        { status: "done", note: "Anchored from day one" },
        { status: "done", note: "Used across all advisory analyses" },
        { status: "done", note: "Carried into adaptation runs" },
        { status: "done", note: "Editable per client in RA+ Prism" },
        { status: "done", note: "Reusable across products" },
      ],
    },
    {
      id: 3,
      opportunity: "Variable granularity analysis (country, site, supply chain)",
      statuses: [
        { status: "done", note: "Country sector defaults in place" },
        { status: "done", note: "Site deep dives demonstrated" },
        { status: "partial", note: "Supply chain deep dive next" },
        { status: "done", note: "Three granularity levels supported in product" },
        { status: "done", note: "Reused for portfolio reporting" },
      ],
    },
    {
      id: 4,
      opportunity: "Gross vs net Value at Risk with adaptation",
      statuses: [
        { status: "partial", note: "Framework defined" },
        { status: "done", note: "Demonstrated on lighthouse use cases" },
        { status: "done", note: "Main delivery in NOW" },
        { status: "done", note: "Editable adaptation profiles in RA+ Prism" },
        { status: "done", note: "Linked to SE offer catalogue" },
      ],
    },
    {
      id: 5,
      opportunity: "Custom client risk profile input",
      statuses: [
        { status: "partial", note: "Identified as a key need" },
        { status: "partial", note: "Manual handling so far" },
        { status: "partial", note: "Light support in current tool" },
        { status: "done", note: "First class capability in RA+ Prism" },
        { status: "done", note: "Reused across refreshes" },
      ],
    },
    {
      id: 6,
      opportunity: "Time series view of discounted cash flow",
      statuses: [
        { status: "done", note: "Built into methodology" },
        { status: "done", note: "Used in client deliverables" },
        { status: "done", note: "Available in advisory tool" },
        { status: "done", note: "In product visualisation in RA+ Prism" },
        { status: "done", note: "Shared across products" },
      ],
    },
    {
      id: 7,
      opportunity: "Supply chain business interruption and carbon cost",
      statuses: [
        { status: "done", note: "Country sector benchmarks live" },
        { status: "done", note: "Demonstrated on data centre lighthouse" },
        { status: "partial", note: "Rank one supplier inputs in design" },
        { status: "partial", note: "Productised in RA+ Prism next" },
        { status: "done", note: "Reused with Supply Chain product" },
      ],
    },
    {
      id: 8,
      opportunity: "Cross scenario comparison (BAU, Net Zero, Worst Case)",
      statuses: [
        { status: "done", note: "Three scenarios productised" },
        { status: "done", note: "Standard output of advisory analyses" },
        { status: "done", note: "Default comparison view" },
        { status: "done", note: "Editable in RA+ Prism" },
        { status: "done", note: "Reused across products" },
      ],
    },
    {
      id: 9,
      opportunity: "Simplified income statement under each scenario",
      statuses: [
        { status: "done", note: "In methodology" },
        { status: "done", note: "Delivered in current analyses" },
        { status: "done", note: "Used in adaptation discussions" },
        { status: "done", note: "Available in RA+ Prism" },
        { status: "done", note: "Reused for finance teams" },
      ],
    },
    {
      id: 10,
      opportunity: "Adaptation library linked to SE offers",
      statuses: [
        { status: "not-done", note: "" },
        { status: "partial", note: "Demonstrated case by case" },
        { status: "partial", note: "Catalogue under construction" },
        { status: "done", note: "Productised in RA+ Prism" },
        { status: "done", note: "Reused across sales motions" },
      ],
    },
    {
      id: 11,
      opportunity: "Continuous refresh and monitoring",
      statuses: [
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Core of RA+ Prism MVP" },
        { status: "done", note: "Shared backbone for adjacent products" },
      ],
    },
  ],
};

export const quarterlyRoadmap = [
  {
    quarter: "Q2 2026",
    theme: "Methodology, Coverage and First Adaptation View",
    color: "amber",
    deliverables: [
      "Maintain six risk drivers in production (4 physical, 2 transition) with auditable assumptions",
      "Lock public reference scenarios (NGFS for transition, IPCC RCP for physical)",
      "Ship the gross vs net Value at Risk view with adaptation cost and benefit",
      "Run the data centre lighthouse use case with the Schneider Electric Research Institute",
      "Set up the standard first assessment offer at country and sector level",
    ],
    teamImpact: [
      "Advisory teams deliver a single financial view across physical and transition risks",
      "Adaptation conversations move from narrative to financial",
      "A reference internal use case (data centres) anchors external positioning",
    ],
  },
  {
    quarter: "Q3 2026",
    theme: "Adaptation Engine and Supply Chain",
    color: "emerald",
    deliverables: [
      "Connect the adaptation library to the Schneider Electric offer catalogue",
      "Add the nature risk product to the integrated waterfall",
      "Productise the site level deep dive with reusable inputs",
      "Pilot rank one supplier inputs for refined supply chain risk",
      "Prepare the RA+ Prism MVP scope and design",
    ],
    teamImpact: [
      "Every adaptation lever ties to a quantified Value at Risk reduction",
      "Cross sell into PPA, efficiency, supply chain and resilience programmes accelerates",
      "Engineering and product align on a concrete RA+ Prism backlog",
    ],
  },
  {
    quarter: "Q4 2026",
    theme: "RA+ Prism MVP Launch",
    color: "blue",
    deliverables: [
      "Launch the RA+ Prism MVP with continuous Value at Risk monitoring",
      "Enable self serve scenario and adaptation editing",
      "Surface time series, waterfall, cross scenario and income statement views in product",
      "Allow custom client risk profile inputs",
      "Capture early account feedback for the hardening release",
    ],
    teamImpact: [
      "Clients refresh their Value at Risk in product, not in slides",
      "Sustainability, risk and finance teams use the same number",
      "Recurring engagement model takes shape around RA+ Prism",
    ],
  },
  {
    quarter: "Q1 2027",
    theme: "Hardening, Internal Use and Cross Product Reuse",
    color: "violet",
    deliverables: [
      "Pilot RA+ Prism on Schneider Electric internal sites (extend Macon pilot)",
      "Refine adaptation profiles and SE offer linkage based on usage",
      "Connect RA+ Prism spine with Carbon Performance, Climate Risk and Supply Chain products",
      "Expand transition risk coverage beyond carbon and customer shift",
      "Stand up the portfolio level investor reporting view",
    ],
    teamImpact: [
      "Internal Schneider Electric deployment validates the platform at scale",
      "Reuse across products lowers the marginal cost per engagement",
      "Asset owners get a portfolio level Value at Risk view",
    ],
  },
];

export const dataNeeded = [
  { name: "Entity Revenue", description: "Revenue at base year for each entity in scope" },
  { name: "Entity Country", description: "Primary country of operation for each entity" },
  { name: "Entity Sector", description: "Sector of activity from the 45 high level sectors covered" },
  { name: "Site Latitude / Longitude", description: "Geo localisation for every site included in the analysis" },
  { name: "Site Asset Value", description: "Asset value per site for damage and insurance modelling" },
  { name: "Scenarios", description: "Selection across business as usual, net zero and worst case" },
  { name: "Time Horizon", description: "Forecast horizon, typically 25 years to 2050" },
  { name: "Custom Risk Profile (optional)", description: "Client specific risk drivers to plug into the waterfall" },
];

export const optionalClientContext = [
  { name: "Entity Financials", description: "Asset value, growth rate, WACC, terminal growth rate, tax rate, NWC, CAPEX, depreciation" },
  { name: "Site Ratios", description: "COGS to revenue, OPEX to revenue, salary to COGS, outdoor salary to salary, electricity to COGS, cooling to electricity" },
  { name: "Site Purchases", description: "Total purchases and individual purchase to purchase ratios" },
  { name: "Insurance Premium", description: "Existing insurance premium per site to refine OPEX modelling" },
  { name: "Emissions", description: "Scope 1 and Scope 2 estimations for carbon cost refinement" },
  { name: "Supplier Data", description: "Rank one supplier geo localisation and purchases for supply chain refinement" },
];

export const existingTools = [
  { name: "RA+ Prism Advisory Tool", description: "The current advisory delivery tool implementing the published methodology", limitation: "Used in engagement mode, not yet available to clients in a self serve continuous experience" },
  { name: "ECLR (physical climate risk)", description: "Schneider Electric tool for physical climate risk used on 100+ SE sites", limitation: "Powerful exposure analysis, but stops short of financial quantification on its own" },
  { name: "Legacy Sustainable Finance Models", description: "Internal financial models supporting impairment and disclosure work", limitation: "Not integrated with risk drivers in a single waterfall" },
  { name: "Third Party Risk Vendors", description: "Risilience and similar vendors used in parts of the SE estate today", limitation: "Limited integrated view of risk plus carbon plus monitoring to finance" },
];

export const idmCapabilities = {
  tagline:
    "RA+ Prism combines a published Discounted Cash Flow methodology, public reference scenarios, and a reusable client spine. RA+ Prism industrialises it inside the platform so risk quantification becomes a living capability across the portfolio.",
  positioning: {
    title: "Climate Value at Risk Backbone",
    subtitle: "From risk awareness to risk valuation, then to adaptation.",
    modes: [
      {
        label: "Step Zero",
        role: "Frame the financial stakes",
        description:
          "RA+ Prism turns climate and nature risks into a single Value at Risk number, surfacing the share of enterprise value that is exposed.",
        outcome: "A credible financial trigger for the adaptation conversation.",
      },
      {
        label: "Step Last",
        role: "Track adaptation outcomes",
        description:
          "Once adaptation measures are deployed, RA+ Prism tracks the realised vs modelled Value at Risk reduction over time.",
        outcome: "Continuous proof of resilience investment value.",
      },
    ],
    principle:
      "The RA+ Prism opportunity is not a new dashboard. It is turning a published methodology into a reusable, in product capability that powers finance and adaptation decisions.",
  },
  bmsBypass: {
    title: "Adoption Bypass: No Supplier Data Collection Required",
    subtitle:
      "The biggest blocker for many clients is the cost and lead time of collecting supplier and site data. RA+ Prism removes that barrier with country sector defaults powered by multi regional input output modelling.",
    benefits: [
      {
        label: "No supplier data collection required",
        detail: "Country sector benchmarks deliver a meaningful first assessment without a supplier survey.",
      },
      {
        label: "Faster time to first value",
        detail: "A first financial view in days, not quarters.",
      },
      {
        label: "Wider addressable base",
        detail: "Unlocks clients who would not start a full supply chain data programme up front.",
      },
      {
        label: "Progressive refinement",
        detail: "The same model accepts more granular site and supplier data when the client is ready.",
      },
    ],
    fallback:
      "Where richer data exists, RA+ Prism refines its estimates at the site and supplier level. Data collection becomes an upgrade, not a prerequisite.",
  },
  stats: [
    { value: "6", label: "Risk drivers covered", detail: "4 physical + 2 transition, nature in progress" },
    { value: "25 yr", label: "Forecast horizon", detail: "Net present value typically computed to 2050" },
    { value: "2B+", label: "Calculations", detail: "Behind the country and sector level insights" },
    { value: "30 to 40%", label: "VaR reduction", detail: "Typical adaptation lift seen with SE solutions" },
    { value: "100+", label: "SE sites", detail: "Already covered by physical risk tooling (ECLR)" },
    { value: "Public", label: "Reference scenarios", detail: "NGFS for transition, IPCC RCP for physical" },
  ],
  categories: [
    {
      name: "Risk Quantification",
      capabilities: [
        "Integrated waterfall across physical, transition and nature risks",
        "Discounted Cash Flow valuation with and without climate change",
        "Revenue, OPEX and COGS impact modelling",
        "Time series view across the forecast horizon",
        "Cross scenario comparison (BAU, Net Zero, Worst Case)",
        "Custom client risk profile input",
      ],
    },
    {
      name: "Granularity and Inputs",
      capabilities: [
        "Country sector first assessment with minimal inputs",
        "Site level deep dive with geo localised assets",
        "Supply chain analysis with multi regional input output modelling",
        "Optional refinement with site ratios and supplier data",
        "Reusable inputs across engagements and refreshes",
        "Explicit intra scenario uncertainty",
      ],
    },
    {
      name: "Adaptation and Outcomes",
      capabilities: [
        "Gross vs net Value at Risk with adaptation cost and benefit",
        "Adaptation library linked to Schneider Electric offers",
        "Prioritisation by Value at Risk removed per euro invested",
        "Realised vs modelled risk reduction tracking",
        "Portfolio level Value at Risk consolidation",
        "Connection with disclosures and capital reviews",
      ],
    },
  ],
};

export const competitiveLandscape = [
  {
    name: "Specialist Climate Risk Vendors",
    scope: "Global",
    description: "Physical climate risk platforms focused on exposure scoring and hazard mapping",
    threat: "Strong on physical hazard data, weaker on integrated financial quantification",
  },
  {
    name: "Sustainable Finance Modellers",
    scope: "Global",
    description: "Sustainable finance research and modelling specialists",
    threat: "Strong on transition risk modelling, partial on physical and nature integration",
  },
  {
    name: "Risilience and Peers",
    scope: "Global",
    description: "Integrated risk and resilience platforms used by large enterprises",
    threat: "Strong on integrated risk views, less specialised on Discounted Cash Flow valuation of risk",
  },
  {
    name: "Carbon Accounting Platforms",
    scope: "Global",
    description: "Carbon and ESG platforms expanding into climate risk products",
    threat: "Strong on emissions, weaker on physical and nature risk valuation",
  },
  {
    name: "Big Four Advisory",
    scope: "Global",
    description: "Bespoke climate risk advisory and scenario analysis",
    threat: "Strong on bespoke delivery, limited industrialisation and no productised continuous monitoring",
  },
];

export const marketTrends = [
  "Sustainable finance regulations push for forward looking, financial views of climate risk",
  "Investors demand integrated physical, transition and nature risk in financial terms",
  "CFOs need climate quantification as an input to impairment tests and capital allocation",
  "Single events (floods, hurricanes, supply chain disruptions) wipe billions of enterprise value",
  "AI and data centre build out raise the stakes for siting and resilience choices",
  "Adaptation conversations shift from narrative to measurable risk reduction",
  "Nature, biodiversity and water risk emerge as the next quantification frontier",
];

export const serviceModelComparison = [
  {
    model: "Advisory Mode",
    fullName: "SE Advisory Services RA+ Prism",
    description: "An engagement led delivery where SE experts run the analysis, train the client, scope priorities, and deliver the first Climate Value at Risk view.",
    typicalOutcomes: ["First financial view of climate and nature risk", "Aligned scope and scenarios with client priorities", "Quantified adaptation choices tied to SE offers"],
    dataNeeds: ["Entity revenue, country and sector", "Site geo localisation and asset value", "Optional financial ratios and emissions"],
    verificationLevel: "Published methodology referenced on SSRN and reviewed with Amundi, Institut Louis Bachelier, PIK and Scientific Portfolio.",
  },
  {
    model: "RA+ Prism",
    fullName: "RA+ Prism embedded in RA+",
    description: "A subscription product that turns the same methodology into a continuously refreshable capability inside RA+, with self serve scenarios, adaptation editing and portfolio drill down.",
    typicalOutcomes: ["Continuous Value at Risk monitoring", "Self serve scenario and adaptation editing", "Reuse of the same spine across Sustainability and Energy products"],
    dataNeeds: ["Same mandatory inputs as advisory", "Optional richer financial and operational data over time", "Custom risk profile inputs for client specific drivers"],
    verificationLevel: "Same published methodology, exposed in product with transparent assumption registry and intra scenario uncertainty.",
  },
];

export const intelligenceFlywheel = {
  title: "Risk to Adaptation Flywheel",
  subtitle: "How RA+ Prism advisory and RA+ Prism combine to turn risk awareness into continuous adaptation value",
  veeExplainer: {
    title: "Intra Scenario Uncertainty",
    description:
      "Intra scenario uncertainty is the honest expression of how much variability sits inside a given scenario, given the data we have. It is surfaced explicitly rather than hidden behind false precision.",
    usedWhen: [
      "Inputs are coarse (country sector level) instead of site or supplier level",
      "Custom risk drivers are added beyond the standard waterfall",
      "Multiple scenarios are compared side by side",
    ],
    outcome:
      "Decision makers see the central Value at Risk number and the realistic envelope around it, so adaptation choices are made with eyes open.",
  },
  stages: [
    { name: "Inputs", description: "Entity, site and optional financial data anchor the analysis", icon: "Database" },
    { name: "Scenarios", description: "Public reference scenarios for physical, transition and nature risks", icon: "Brain" },
    { name: "Quantification", description: "DCF valuation with and without climate change across drivers", icon: "Settings" },
    { name: "Adaptation", description: "Gross vs net VaR with adaptation cost and benefit per lever", icon: "Eye" },
    { name: "Decisions", description: "Capital allocation, impairment, SE offer choices and disclosures", icon: "FileText" },
    { name: "Refresh", description: "Continuous update inside RA+ Prism as inputs and choices evolve", icon: "Zap" },
  ],
  keyInsight: "The advantage is not another exposure dashboard. It is a published methodology turned into a continuous, in product capability that links risk, finance and adaptation on one spine.",
  differentiators: [
    { label: "Integrated risk waterfall", status: "Baseline" },
    { label: "Published methodology", status: "Essential" },
    { label: "Adaptation linked to SE offers", status: "Advantage" },
    { label: "Continuous monitoring in RA+ Prism", status: "Differentiator" },
  ],
};

export const marketConstraints = [
  "Methodology must remain auditable and reproducible for finance and assurance contexts",
  "Public reference scenarios should be used rather than bespoke in house ones",
  "Intra scenario uncertainty must be surfaced, not hidden behind false precision",
  "Adaptation framing must stay decision oriented, not prescriptive",
  "Out of scope: regulatory commitments, prescriptive investment advice, and pricing or discounting decisions",
];

export const executiveNarrative = {
  whatsHappening: "RA+ Prism is Schneider Electric's dedicated financial risk quantification offering, combining advisory services and a technology product (RA+ Prism) that turns climate and nature risks into a single Value at Risk view.",
  trueProblem: "Risk analyses today are fragmented across physical, transition and nature lenses. Material risk prioritisation is largely qualitative, and adaptation choices are debated without a financial price tag.",
  northStarTitle: "RA+ Prism as the integrated financial view of climate and nature risk",
  northStar: "RA+ Prism quantifies the combined impact of climate and nature risks on asset value through a published Discounted Cash Flow methodology. RA+ Prism embeds that capability in the platform, so risk quantification, adaptation choices and continuous improvement run on one trusted spine.",
  pragmaticWay: "We deliver the first analysis through advisory, then industrialise it through RA+ Prism. We start with country sector defaults, refine with site and supplier data over time, and tie adaptation to Schneider Electric offers.",
  economicImpact: [
    "A single Climate Value at Risk number per scenario",
    "30 to 40% Value at Risk reduction observed with SE adaptation solutions",
    "Stronger cross sell into PPA, efficiency, supply chain and resilience programmes",
    "Recurring use and revenue through RA+ Prism",
  ],
  strategicUpside: "RA+ Prism positions Schneider Electric in a blue ocean: no competitor on par on integrated risk plus carbon plus monitoring to finance. Internal use cases (data centres, SE sites) demonstrate scale.",
  risks: [
    { risk: "False precision", mitigation: "Surface intra scenario uncertainty explicitly and use public reference scenarios" },
    { risk: "Scope creep into regulatory commitments", mitigation: "Keep RA+ Prism focused on quantification and adaptation framing, not commitments" },
    { risk: "Adoption barriers from data collection", mitigation: "Country sector defaults remove the data collection blocker; refinement is optional" },
    { risk: "Disconnect from SE offers", mitigation: "Tie every adaptation lever to a specific Schneider Electric offer and a measurable VaR reduction" },
  ],
  needsNow: [
    "Maintain the published methodology and reference scenarios",
    "Ship the adaptation engine and SE offer linkage",
    "Launch the RA+ Prism MVP",
    "Anchor on internal lighthouse use cases (data centres, SE sites)",
  ],
};

export const timeline = {
  q1: {
    title: "Q1: Methodology and Coverage",
    items: [
      "Six risk drivers in production",
      "Nature risk product in progress",
      "Public reference scenarios anchored",
      "Gross vs net Value at Risk live",
      "First assessment offer at country and sector level",
      "Data centre lighthouse use case",
    ],
  },
  q2: {
    title: "Q2: Adaptation Engine",
    items: [
      "Adaptation library tied to SE offers",
      "Site level deep dive productised",
      "Supply chain analysis refinement",
      "Custom risk profile inputs",
    ],
  },
  h2: {
    title: "H2: RA+ Prism and Cross Product Reuse",
    items: [
      "RA+ Prism MVP live",
      "Self serve scenarios and adaptation editing",
      "Internal Schneider Electric deployment",
      "Cross product reuse with Carbon Performance, Climate Risk and Supply Chain",
      "Portfolio level investor reporting view",
    ],
  },
};

export const regionalJourneys = {
  intro:
    "Clients enter RA+ Prism from different angles. Some start from a CFO impairment question, others from a sustainability disclosure cycle, others from a resilience or capital allocation review. RA+ Prism supports all entries on the same backbone.",
  stages: [
    "Scoping",
    "Inputs",
    "First Assessment",
    "Deep Dive",
    "Adaptation Sizing",
    "RA+ Prism Activation",
    "Refresh & Monitoring",
  ],
  journeys: [
    {
      id: "cfo-entry",
      name: "CFO Entry",
      tagline: "Finance led, impairment and capital allocation",
      revenue: "Large enterprises with active impairment and capital review cycles",
      sellingPoint: "One Value at Risk number that feeds finance processes directly",
      coverage: {
        "Scoping": { level: "core", note: "Finance led scope, CFO and risk leadership in the room" },
        "Inputs": { level: "core", note: "Entity financials and site asset values are usually available" },
        "First Assessment": { level: "core", note: "Quick country sector view to frame stakes" },
        "Deep Dive": { level: "core", note: "Site level deep dive for material exposures" },
        "Adaptation Sizing": { level: "core", note: "Gross vs net VaR for capital review" },
        "RA+ Prism Activation": { level: "light", note: "Activated once the first analysis is signed off" },
        "Refresh & Monitoring": { level: "core", note: "Continuous refresh tied to financial reporting cycles" },
      },
    },
    {
      id: "sustainability-entry",
      name: "Sustainability Entry",
      tagline: "ESG and disclosure led, integrating risk into reporting",
      revenue: "Clients with active CSRD, TCFD and TNFD programmes",
      sellingPoint: "Financial framing that strengthens sustainability disclosures",
      coverage: {
        "Scoping": { level: "core", note: "CSO and sustainability team scoping" },
        "Inputs": { level: "core", note: "Site list and sectoral exposure usually available" },
        "First Assessment": { level: "core", note: "Country sector view used to brief leadership" },
        "Deep Dive": { level: "light", note: "Selective deep dives on flagship sites" },
        "Adaptation Sizing": { level: "core", note: "Linked to existing transition plan" },
        "RA+ Prism Activation": { level: "core", note: "RA+ Prism reused across disclosure cycles" },
        "Refresh & Monitoring": { level: "core", note: "Aligned with annual reporting" },
      },
    },
    {
      id: "resilience-entry",
      name: "Resilience Entry",
      tagline: "Operations and risk led, asset and supply chain focus",
      revenue: "Industrials, energy intensive and supply chain heavy clients",
      sellingPoint: "Sized adaptation tied to PPA, efficiency, supply chain and resilience offers",
      coverage: {
        "Scoping": { level: "core", note: "Operations, risk and resilience teams" },
        "Inputs": { level: "core", note: "Site geo data and operational ratios available" },
        "First Assessment": { level: "core", note: "Country sector framing complements site work" },
        "Deep Dive": { level: "core", note: "Heavy site and supply chain focus" },
        "Adaptation Sizing": { level: "core", note: "Tight link to SE offer catalogue" },
        "RA+ Prism Activation": { level: "core", note: "Continuous monitoring across the portfolio" },
        "Refresh & Monitoring": { level: "core", note: "Tied to capital and operational reviews" },
      },
    },
    {
      id: "ai-data-center",
      name: "Data Centre / AI Infrastructure",
      tagline: "Lighthouse use case with the Schneider Electric Research Institute",
      revenue: "Hyperscalers, colocation and AI infrastructure operators",
      sellingPoint: "Quantified Value at Risk on the installed base and forward AI growth scenarios",
      coverage: {
        "Scoping": { level: "core", note: "Joint scoping with the Schneider Electric Research Institute" },
        "Inputs": { level: "core", note: "8,500+ data centres in the installed base" },
        "First Assessment": { level: "core", note: "Value at Risk surfaced as 38.8% of NPV at one trillion installed base" },
        "Deep Dive": { level: "core", note: "Supply chain and direct operations split out" },
        "Adaptation Sizing": { level: "core", note: "30 to 40% VaR reduction achievable through SE solutions" },
        "RA+ Prism Activation": { level: "light", note: "Sequenced after methodology socialisation" },
        "Refresh & Monitoring": { level: "light", note: "Aligned with AI growth scenario refresh" },
      },
    },
  ],
  convergence: {
    title: "Where journeys converge",
    point: "Adaptation Sizing",
    description:
      "All entry paths meet on the gross vs net Value at Risk view. That is where adaptation choices get sized and Schneider Electric offers get pulled into the conversation.",
  },
  divergence: [
    {
      title: "Entry sponsor",
      detail: "Finance, sustainability, operations or research lead the first conversation depending on the client.",
    },
    {
      title: "Granularity",
      detail: "Some clients start at country sector level; others have asset and supply chain data ready from day one.",
    },
    {
      title: "Refresh cadence",
      detail: "Refresh cycles align with financial reporting, sustainability disclosures, or capital and operational reviews.",
    },
  ],
  designPrinciple:
    "Build one RA+ Prism backbone with flexible entry and exit points. Same methodology, same scenarios, same waterfall, served to CFOs, CSOs, COOs and infrastructure operators in their own language.",
};

export const ecmIngestionEngine = {
  intro:
    "RA+ Prism is built on a published Discounted Cash Flow methodology. The engine ingests client inputs, blends them with public reference scenarios and Schneider Electric methodological IP, and produces an integrated Climate Value at Risk waterfall.",
  prototype: {
    title: "RA+ Prism Calculation Engine",
    subtitle: "How a Value at Risk is produced end to end.",
    flow: [
      {
        step: "01",
        name: "Inputs",
        description: "Client inputs (entity revenue, country, sector, site latitude, longitude, asset value) feed the engine. Optional financial and operational data refines the analysis.",
      },
      {
        step: "02",
        name: "Scenarios",
        description: "Public reference scenarios are applied: NGFS for transition risks, IPCC RCP for physical risks. Three scenarios run by default: business as usual, net zero, worst case.",
      },
      {
        step: "03",
        name: "Quantification",
        description: "The engine computes a discounted cash flow valuation with and without climate change. Six risk drivers feed the waterfall (4 physical, 2 transition), with nature risk in progress.",
      },
      {
        step: "04",
        name: "Outputs",
        description: "Climate Value at Risk waterfall, revenue, OPEX and COGS impact, time series, cross scenario comparison, simplified income statement, and adaptation views.",
      },
    ],
    accuracy: "Over 2 billion calculations sit behind country and sector level insights.",
  },
  monteCarlo: {
    title: "Adaptation Sizing",
    subtitle:
      "Once risks are quantified, the engine sizes adaptation options as gross vs net Value at Risk, linking each lever to a measurable risk reduction.",
    inputs: [
      "Gross Value at Risk per driver",
      "Adaptation cost and effectiveness per lever",
      "Linkage with Schneider Electric offer catalogue",
      "Client specific constraints (CAPEX envelope, deadlines, ambition)",
    ],
    output:
      "A ranked set of adaptation options sized by Value at Risk removed per euro invested, with a clear bridge from gross to net Value at Risk.",
    why: "Adaptation framed in financial terms turns climate risk from awareness to decision making. It also gives Schneider Electric offers a measurable risk reduction story to anchor on.",
  },
  enablers: [
    "Published methodology referenced on SSRN (ClimVaR: Discounted Cash Flow approach on climate risks)",
    "Public reference scenarios (NGFS, IPCC RCP) anchoring all runs",
    "Multi regional input output modelling for supply chain risks without supplier data collection",
    "Reusable client spine across engagements and refreshes",
  ],
  guardrails: [
    "Always surface intra scenario uncertainty rather than hide it behind false precision",
    "Stay within quantification and adaptation framing; do not issue regulatory commitments or prescriptive investment advice",
    "Custom client risk profiles complement the standard waterfall; they do not replace it",
  ],
};

export const efficiencyStrategicContext = {
  intro:
    "Three forces make RA+ Prism strategic now: client demand for finance led climate conversations, lack of integrated alternatives in the market, and an internal lighthouse opportunity (data centres, SE sites) that demonstrates scale.",
  raClassicSunset: {
    title: "Finance as the Entry Door",
    badge: "Market Window",
    timeframe: "2026 - 2028",
    summary:
      "Initial conversations with clients and investors no longer start with the sustainability prism. They start with finance: proof of value, capital allocation, impairment, resilience. Sustainability follows once the financial case is on the table.",
    implications: [
      {
        label: "Lead with finance",
        detail: "RA+ Prism puts a single Value at Risk number on the table from day one.",
      },
      {
        label: "Phased evolution",
        detail: "Start with advisory analyses, then industrialise through RA+ Prism.",
      },
      {
        label: "Cross sell unlock",
        detail: "Adaptation sized in financial terms pulls PPA, efficiency, supply chain and resilience offers.",
      },
      {
        label: "Clear governance",
        detail: "Published methodology, public scenarios, transparent assumptions.",
      },
    ],
  },
  customerArchetypes: {
    title: "Two Buyer Archetypes",
    subtitle:
      "RA+ Prism serves both finance led and sustainability led buyers. The platform must respect both, not collapse them into one experience.",
    archetypes: [
      {
        name: "Finance Led Buyer",
        tagline: "CFO, financial planner, risk leadership",
        share: "Highest leverage on capital allocation and impairment",
        wants: [
          "A single Value at Risk number tied to enterprise value",
          "Defensible inputs for impairment tests and capital reviews",
          "Adaptation options framed as investment choices",
          "Continuous refresh aligned with reporting cycles",
        ],
        risk: "If we lead with sustainability narrative, we lose the conversation. The entry must be financial.",
        fit: "RA+ Prism advisory anchors the first conversation; RA+ Prism industrialises the refresh.",
      },
      {
        name: "Sustainability Led Buyer",
        tagline: "CSO, head of climate and nature, head of disclosures",
        share: "Strongest natural fit with the wider Schneider Electric sustainability portfolio",
        wants: [
          "Integrated physical, transition and nature view",
          "Strong methodology that strengthens disclosures",
          "Linkage with transition plans and SE solutions",
          "A path into broader RA+ Sustainability products",
        ],
        risk: "A purely qualitative deliverable underwhelms boards. Without financial framing, action stalls.",
        fit: "Full RA+ Prism deployment, integrated with adjacent sustainability products.",
      },
    ],
    tension:
      "The two archetypes must converge on the same adaptation conversation. RA+ Prism's job is to bring them together around one Value at Risk view.",
  },
  ghgTailwind: {
    title: "Lighthouse Use Cases",
    badge: "Internal Proof",
    summary:
      "Schneider Electric's own infrastructure provides lighthouse use cases. The data centre installed base study (joint work with the Schneider Electric Research Institute) shows 38.8% of Value at Risk on a one trillion NPV installed base, with 30 to 40% achievable VaR reduction through SE solutions.",
    impacts: [
      {
        label: "Data centre lighthouse",
        detail: "Quantified VaR on installed base, prospective AI growth scenarios, and adaptation lift.",
      },
      {
        label: "SE estate pilots",
        detail: "ECLR on 100+ SE sites, RA+ Prism pilot on Macon (Power Systems) site, follow up on broader SE sites.",
      },
      {
        label: "Internal scale up",
        detail: "RA+ Prism positioned to replace legacy risk tools across the Schneider Electric estate.",
      },
      {
        label: "External credibility",
        detail: "Methodology published on SSRN, reviewed with Amundi, Institut Louis Bachelier, PIK, Scientific Portfolio.",
      },
    ],
    soWhat:
      "Internal lighthouses ground external positioning. They demonstrate scale, validate the methodology, and feed a continuous improvement loop.",
  },
};

export const platformShift = {
  intro:
    "Today climate risk analyses live in PowerPoint, run on bespoke models, and are refreshed once a year. RA+ Prism re platform that work as a published methodology plus a continuous, in product capability that finance, risk and sustainability teams share.",
  classic: {
    title: "Legacy Risk Delivery",
    tagline: "Decks, models and yearly refresh",
    points: [
      "Risk analyses fragmented across physical, transition and nature lenses",
      "Bespoke scenarios that auditors struggle to reconcile",
      "Outputs locked in slides and one off models",
      "No path from a delivered analysis to continuous monitoring",
      "Adaptation discussed in narrative form, with no financial price tag",
      "Each refresh rebuilds context from scratch",
    ],
  },
  raPlus: {
    title: "RA+ Prism",
    tagline: "Methodology + product, integrated by design",
    points: [
      "Integrated Climate Value at Risk waterfall across physical, transition and nature",
      "Published Discounted Cash Flow methodology with public reference scenarios",
      "Gross vs net Value at Risk with adaptation cost and benefit",
      "Reusable client spine across engagements and refreshes",
      "RA+ Prism productises the analysis as a living capability",
      "Same backbone reused across adjacent Sustainability and Energy products",
    ],
  },
  thesis:
    "Every limitation in current risk delivery stems from analyses living as one off models and slides. RA+ Prism turn the same methodology into a continuous, in product capability.",
  bureauAnchor: {
    title: "What RA+ Prism Delivers Today",
    subtitle: "Published methodology, six risk drivers in production, variable granularity, adaptation framing, and a clear path to RA+ Prism.",
    lines: [
      {
        layer: "Foundation",
        name: "RA+ Prism Advisory",
        detail: "Engagement led delivery using the published methodology. First Climate Value at Risk view, scoped scenarios, and quantified adaptation tied to Schneider Electric offers.",
      },
      {
        layer: "Accelerator",
        name: "RA+ Prism",
        detail: "In product product of RA+ that turns the analysis into a continuous capability. Refreshable scenarios, self serve adaptation editing, drill from portfolio to site.",
      },
    ],
    soWhat:
      "Advisory and RA+ Prism work as one. Advisory delivers the first analysis; RA+ Prism industrialises it; both share the same methodology, scenarios and spine.",
  },
};

export const personas = {
  intro:
    "Four roles interact with RA+ Prism. We design for all of them, with a deliberate sequence: the CFO conversation leads, but the Sustainability Lead and Risk Officer drive day to day use, and the CEO consumes outcomes.",
  designPrinciple:
    "Lead with finance to open the conversation. Build the daily experience for Sustainability Leads and Risk Officers who refresh the model. Surface CEO and board ready views from the same backbone.",
  roles: [
    {
      name: "CFO / Financial planner",
      rank: "Primary",
      context: "Entry point, finance led conversation, capital and impairment owner",
      summary:
        "The person who needs a defensible Climate Value at Risk number tied to enterprise value. Owns impairment, capital allocation and the financial framing of climate.",
      outcomes: [
        "A single Value at Risk number per scenario",
        "Defensible inputs for impairment tests",
        "Adaptation sized as investment options",
        "Clear linkage with capital review cycles",
      ],
    },
    {
      name: "Sustainability / Climate Lead",
      rank: "Primary",
      context: "Daily operator, owns the integrated climate and nature risk narrative",
      summary:
        "Runs the refresh cycles, manages scenarios, and connects RA+ Prism with transition plans and disclosures. Primary user of RA+ Prism in continuous mode.",
      outcomes: [
        "Integrated physical, transition and nature view",
        "Continuous refresh aligned with disclosure cycles",
        "Linkage with transition plans and adaptation programmes",
        "Strong methodology to defend in front of assurance providers",
      ],
    },
    {
      name: "Risk Officer / Resilience Lead",
      rank: "Secondary",
      context: "Operations and risk side, asset and supply chain focus",
      summary:
        "Uses RA+ Prism to size resilience choices at site and supply chain level, and to prioritise adaptation across the portfolio.",
      outcomes: [
        "Site level Value at Risk for material exposures",
        "Supply chain risk insight without a full supplier survey",
        "Adaptation prioritisation by Value at Risk removed",
        "Clear linkage with Schneider Electric resilience offers",
      ],
    },
    {
      name: "CEO / Board",
      rank: "Inform",
      context: "Consumes summary views, takes capital and strategic decisions",
      summary:
        "Sees the headline Value at Risk and adaptation envelope. Never edits the model but makes the major decisions it informs.",
      outcomes: [
        "A clear, financial framing of climate and nature risk",
        "Confidence in the methodology and the inputs",
        "A short list of adaptation choices with financial impact",
        "A defensible story for investors and stakeholders",
      ],
    },
  ],
};

export const jobsToBeDone = {
  intro:
    "The jobs users hire RA+ Prism to do. Not features, not screens, but outcomes. RA+ Prism advisory delivers the first analysis; RA+ Prism turns it into a continuous capability that finance, sustainability and risk teams share.",
  ecmInsight:
    "Adaptation is not a separate job. It is what happens when jobs 1, 4 and 6 are done well: once the financial stakes are framed, once intervention options are sized in the same terms, once Schneider Electric offers are linked to a measurable Value at Risk reduction.",
  jobs: [
    { num: 1, type: "Operational", title: "Frame the financial stakes of climate risk", description: "When climate or nature exposure shows up in board or investor conversations, produce a defensible Value at Risk number that anchors the discussion in financial terms." },
    { num: 2, type: "Operational", title: "Integrate physical, transition and nature risks", description: "When multiple risk lenses exist in parallel, bring them into one waterfall so trade offs and aggregate exposure become visible." },
    { num: 3, type: "Operational", title: "Anchor scenarios on public references", description: "When auditors or investors challenge assumptions, point to NGFS, IPCC RCP and other public references rather than bespoke models." },
    { num: 4, type: "Operational", title: "Size adaptation as gross vs net Value at Risk", description: "When adaptation is debated, quantify how much risk each lever removes and at what cost, framed in financial terms." },
    { num: 5, type: "Operational", title: "Refresh the analysis on demand", description: "When inputs, scenarios or adaptation choices evolve, refresh the Value at Risk view inside RA+ Prism rather than rebuilding from scratch." },
    { num: 6, type: "Analytical", title: "Link adaptation to Schneider Electric offers", description: "When prioritising capital, tie each adaptation lever to a specific Schneider Electric offer (PPA, efficiency, supply chain, resilience) and a measurable VaR reduction." },
    { num: 7, type: "Analytical", title: "Drill from portfolio to site", description: "When a material exposure surfaces, drill from country sector view to site level deep dive without leaving the platform." },
    { num: 8, type: "Analytical", title: "Quantify supply chain exposure", description: "When supply chain risk needs framing, use multi regional input output modelling to size business interruption and carbon cost propagation without a full supplier survey." },
    { num: 9, type: "Analytical", title: "Compare scenarios side by side", description: "When stakeholders need to understand range, compare business as usual, net zero and worst case in the same view, with intra scenario uncertainty surfaced." },
    { num: 10, type: "Analytical", title: "Plug custom client risk drivers", description: "When a client specific risk matters, input a custom risk profile into the waterfall so it shows up in all downstream views." },
    { num: 11, type: "Analytical", title: "Feed disclosures and impairment work", description: "When CSRD, TCFD, TNFD or impairment cycles run, feed RA+ Prism outputs into those processes with traceable assumptions." },
    { num: 12, type: "Operational", title: "Share one number across finance, risk and sustainability", description: "When different teams talk about climate risk, make sure they reference the same Value at Risk view from the same backbone." },
    { num: 13, type: "Analytical", title: "Track adaptation outcomes over time", description: "When adaptation measures are deployed, track realised vs modelled Value at Risk reduction so the investment case is provable." },
  ],
};

export const vocEvidence = {
  intro:
    "Voice of customer evidence drawn from RA+ Prism engagements and internal lighthouse work. Each example validates the demand for integrated financial risk quantification and adaptation framing.",
  signals: [
    { label: "Finance Entry Validation", value: "High", detail: "Clients want the financial framing first, sustainability narrative second" },
    { label: "Integrated Risk Demand", value: "High", detail: "Boards ask for physical, transition and nature in one view" },
    { label: "Adaptation Sizing", value: "High", detail: "Adaptation is expected to be sized in financial terms, not qualitative" },
    { label: "Continuous Refresh", value: "Growing", detail: "Yearly refresh no longer enough; clients ask for an in product capability" },
  ],
  customers: [
    {
      name: "Hyperscaler / AI Infrastructure Lighthouse",
      contact: "Joint work with the Schneider Electric Research Institute",
      context: "Installed base of more than 8,500 data centres worldwide, with prospective AI growth scenarios",
      findings: [
        "38.8% Value at Risk on a one trillion NPV installed base",
        "98 to 99% of business interruption value at risk comes from supply chain, not direct operations",
        "Drivers differ by geography: business interruption dominates in the US, carbon cost in Europe",
        "Adaptation through Schneider Electric solutions can reduce 30 to 40% of Value at Risk",
      ],
      quote: "The fundamental research question was how physical and transition climate hazards can be translated into a facility level enterprise value loss so adaptation capital can be managed and scaled.",
    },
    {
      name: "Industrial Client (Macon Pilot)",
      contact: "Power Systems pilot site",
      context: "First RA+ Prism pilot on a Schneider Electric internal industrial site",
      findings: [
        "Site level quantification of physical risk drivers",
        "Carbon cost modelling tied to direct emissions",
        "Adaptation options sized in financial terms",
        "Path to broader deployment across the SE estate",
      ],
      quote: "Internal pilots ground the methodology and validate it before broader external scale up.",
    },
    {
      name: "CFO / Financial planner Conversations",
      contact: "Multiple enterprise accounts",
      context: "Conversations with CFOs and financial planners on impairment and capital allocation",
      findings: [
        "Strong demand for a single Value at Risk number tied to enterprise value",
        "Weighted average across scenarios needed to test goodwill against climate change",
        "Clear request for parameterised pricing and customer shift assumptions",
        "Adaptation options framed as investment choices rather than narrative",
      ],
      quote: "Clients expect finance as the entry door. Once the financial aspect is convincing, the sustainability talk can work.",
    },
    {
      name: "Sustainability Finance Reviewers",
      contact: "Amundi, Institut Louis Bachelier, PIK, Scientific Portfolio",
      context: "Review and discussion of the published methodology",
      findings: [
        "RA+ Prism puts climate as a first class citizen in the financial world",
        "Transparency and auditability of inputs are key strengths",
        "Discounted Cash Flow framing resonates with sustainable finance practice",
        "Integration of physical, transition and nature in one view is differentiated",
      ],
      quote: "RA+ Prism is a real differentiator: it integrates climate into financial modelling in a transparent and auditable way, helping clients take better informed decisions.",
    },
  ],
};

export const seCorporateBlueprint = {
  title: "Schneider Electric as Internal Lighthouse",
  intro: "",
  scale: [
    { value: "100+", label: "SE sites covered by ECLR", detail: "Physical climate risk tool already deployed across the Schneider Electric estate" },
    { value: "Macon", label: "First RA+ Prism pilot", detail: "Power Systems site pilot, anchor for broader internal deployment" },
    { value: "Data centres", label: "Lighthouse use case", detail: "Joint work with the Schneider Electric Research Institute on the global installed base" },
    { value: "2027", label: "RA+ for SE", detail: "Positioned to replace legacy risk tooling across the SE estate" },
  ],
  trainingSignal:
    "Internal Schneider Electric use cases are the lighthouse for RA+ Prism: they demonstrate scale, validate the methodology, and feed a continuous improvement loop that benefits every external client engagement.",
  phaseMap: [] as { phase: string; detail: string }[],
  conclusion: "",
};

export const painInventory = {
  intro:
    "Legacy risk delivery limitations that RA+ Prism eliminate. Every must fix item stems from analyses living as one off models and slides instead of as a published methodology and a continuous, in product capability.",
  pains: [
    { id: "P1", severity: "Must fix", title: "Risk analyses are fragmented", detail: "Physical, transition and nature risks are studied in separate silos. Boards see partial pictures that do not aggregate into one number." },
    { id: "P2", severity: "Must fix", title: "Quantification stays qualitative", detail: "Material risk prioritisation stays largely qualitative. CFOs cannot use exposure scores as inputs to capital allocation or impairment." },
    { id: "P3", severity: "Must fix", title: "Adaptation has no price tag", detail: "Adaptation is discussed in narrative form, disconnected from any financial measure of risk reduction." },
    { id: "P4", severity: "Must fix", title: "Deliverables are static", detail: "Analyses live in PowerPoint and are refreshed once a year. No path from a delivered analysis to a continuous, in product view." },
    { id: "P5", severity: "Must fix", title: "Data collection blocks adoption", detail: "Site and supplier data collection drag scope and timelines. Clients delay analyses while waiting for perfect data." },
    { id: "P6", severity: "Must fix", title: "No integrated view of risk plus carbon", detail: "Existing tools cover one or two pieces, not the integrated risk plus carbon plus monitoring to finance picture." },
  ],
};

export const productScope = {
  intro:
    "RA+ Prism is delivered through two complementary modes within the Sustainability family of Schneider Electric. This playbook covers both: the advisory engagement model and the RA+ Prism in product product.",
  products: [
    {
      name: "RA+ Prism Advisory",
      tag: "Engagement Mode",
      summary: "SE Advisory Services delivery of the published Discounted Cash Flow methodology. First Climate Value at Risk view, scoped scenarios, and adaptation sized in financial terms.",
      capabilities: [
        "Training and upskilling of client teams on climate, nature and financial concepts",
        "Scoping aligned with business priorities (scenarios, horizons, granularity)",
        "Integrated Value at Risk waterfall across physical, transition and nature risks",
        "Gross vs net Value at Risk with adaptation cost and benefit",
        "Connection with the Schneider Electric offer catalogue",
        "Foundation for a continuous RA+ Prism deployment",
      ],
    },
    {
      name: "RA+ Prism",
      tag: "Product Mode",
      summary: "RA+ product that turns the analysis into a continuously refreshable capability. Self serve scenarios, adaptation editing, drill from portfolio to site.",
      capabilities: [
        "Continuous Value at Risk monitoring across the portfolio",
        "Self serve scenario and adaptation editing",
        "Custom client risk profile inputs",
        "Time series, waterfall, cross scenario and income statement views",
        "Geographic and asset level deep dives",
        "Cross product reuse with Carbon Performance, Climate Risk and Supply Chain",
      ],
    },
  ],
  whyEEFirst: [
    "Advisory creates the methodology trust and the first concrete value view",
    "RA+ Prism industrialises the same methodology as a continuous, in product capability",
    "The two modes share the same backbone, scenarios and outputs",
    "Together they cover the full client journey from first assessment to continuous monitoring",
  ],
  boundary:
    "Advisory and RA+ Prism are sold and consumed differently, but they run on one shared methodology. The boundary is a delivery mode boundary, not a methodology boundary.",
};

export const architectureDecision = {
  intro:
    "Two paths to bring RA+ Prism live by Q4 2026. The choice shapes integration cost, time to value, and the long term shape of the platform.",
  options: [
    {
      id: "plan-a",
      label: "Plan A",
      title: "Native RA+ Prism product",
      summary:
        "Stand up RA+ Prism quantification, adaptation and monitoring as first class RA+ services consumed by the new product and shared with adjacent ones.",
      pros: [
        "Cleanest long term architecture and shared services across products",
        "Best foundation for cross product reuse with Carbon Performance, Climate Risk and Supply Chain",
        "Single client spine across RA+ Prism and the wider RA+ suite",
      ],
      cons: [
        "Heavier upfront engineering investment",
        "Higher delivery risk for the Q4 2026 milestone",
      ],
    },
    {
      id: "plan-b",
      label: "Plan B",
      title: "Bridge from advisory tool",
      summary:
        "Expose the existing RA+ Prism advisory tool through a controlled bridge into RA+ to hit the Q4 2026 milestone, with a planned migration to native services later.",
      pros: [
        "Faster path to a usable RA+ Prism MVP",
        "Lower delivery risk for the committed timeline",
        "Keeps advisory tool investment productive during the transition",
      ],
      cons: [
        "Bridge code becomes technical debt that must be retired",
        "Risk of carrying advisory tool data model shortcuts into RA+",
        "Cross product reuse may feel less coherent until native services land",
      ],
    },
  ],
  decisionCriteria: [
    "Confidence that native services can be delivered by Q4 2026",
    "Severity of advisory tool gaps that would leak into RA+",
    "Readiness of internal lighthouses (data centres, SE sites) to absorb a Plan B experience",
    "Engineering capacity available without slowing advisory delivery",
  ],
  status: "Open decision flagged for the working group, no commitment made.",
};

export const maturityLadder = {
  intro:
    "Client maturity on integrated financial risk quantification progresses through four stages. RA+ Prism meets clients where they are and pulls them up the ladder over time.",
  stages: [
    {
      num: "01",
      label: "Awareness",
      description:
        "Clients recognise climate and nature risk as a topic but rely on qualitative heatmaps and exposure scores. No integrated financial view.",
    },
    {
      num: "02",
      label: "First Quantification",
      description:
        "Clients run a first RA+ Prism assessment, typically at country sector level. Climate Value at Risk shows up as a single number per scenario.",
    },
    {
      num: "03",
      label: "Deep Dive and Adaptation",
      description:
        "Clients refine the analysis at site and supply chain level, and size adaptation as gross vs net Value at Risk tied to Schneider Electric offers.",
    },
    {
      num: "04",
      label: "Continuous Operation",
      description:
        "Clients run RA+ Prism continuously, refresh scenarios and adaptation choices on demand, and feed outputs into disclosures, capital reviews and operational planning.",
    },
  ],
  note:
    "This ladder is a client maturity lens, not a pricing or commercial tiering model.",
};

export const seraKPIs = {
  intro:
    "RA+ Prism specific signals confirm that the in product experience produces real continuous value, not just dashboards.",
  kpis: [
    { label: "Active RA+ Prism accounts", description: "Clients with an active in product Value at Risk view" },
    { label: "Refresh frequency", description: "Number of Value at Risk refreshes per account over the period" },
    { label: "Adaptation profiles edited", description: "Self serve adaptation editing actually used, not just available" },
    { label: "Granularity uplift", description: "Share of accounts moving from country sector to site or supply chain level" },
    { label: "Cross product reuse", description: "Use of the same client spine across RA+ Prism and adjacent RA+ products" },
  ],
};

export const raPlusPlatformFoundation = {
  eyebrow: "RA+ Platform Foundation",
  title: "How RA+ Prism Plugs Into RA+",
  intro:
    "RA+ Prism does not build a parallel stack. It plugs the published RA+ Prism methodology into the same Unified, Proactive and Adaptive RA+ foundation that powers the rest of the suite, so every analysis compounds platform intelligence.",
  pillars: [
    {
      id: "unified",
      title: "Unified",
      tagline: "One platform, one client spine",
      icon: "Layers",
      components: [
        "Shared client entity and site model across RA+ Prism and adjacent products",
        "Ingest and transform services that standardise client financial and operational inputs",
        "Scenario library anchored on public references (NGFS, IPCC RCP)",
        "Connectors to Carbon Performance, Climate Risk and Supply Chain products",
      ],
      gspBenefit:
        "Advisory consultants and clients work off the same trusted client spine. The model stitching that slows engagements today goes away.",
    },
    {
      id: "proactive",
      title: "Proactive",
      tagline: "Decision ready, defensible Value at Risk",
      icon: "LineChart",
      components: [
        "Integrated risk waterfall across physical, transition and nature drivers",
        "Discounted Cash Flow valuation with and without climate change",
        "Gross vs net Value at Risk view with adaptation cost and benefit",
        "Cross scenario comparison with intra scenario uncertainty",
      ],
      gspBenefit:
        "Outputs are auditable by construction. Decisions are anchored in a published methodology, not bespoke spreadsheets.",
    },
    {
      id: "adaptive",
      title: "Adaptive",
      tagline: "Refreshable, editable, agent ready",
      icon: "Sparkles",
      components: [
        "Self serve scenario and adaptation editing",
        "Custom client risk profile inputs",
        "Configurable adaptation library tied to the Schneider Electric offer catalogue",
        "Agentic assistance for input validation, gap filling and explanation",
      ],
      gspBenefit:
        "Clients refresh their own Value at Risk and adaptation choices in product. Advisory teams focus on judgment and calibration.",
    },
  ],
  soWhat:
    "Every RA+ Prism capability lands on the same RA+ pillars. That is what turns advisory hours into recurring platform value, not another tool to maintain.",
};
