import PptxGenJS from "pptxgenjs";
import {
  strategicPillars,
  intelligenceFlywheel,
  platformShift,
  personas,
  jobsToBeDone,
  vocEvidence,
  seCorporateBlueprint,
  painInventory,
  maturityLadder,
  seraKPIs,
  whyNowColumns,
  existingTools,
  idmCapabilities,
  ecmIngestionEngine,
  regionalJourneys,
  efficiencyStrategicContext,
} from "@/data/playbook-data";

const executiveSummarySlides = [
  {
    title: "RA+ Prism is the published methodology, RA+ Prism is the product",
    body: "RA+ Prism Advisory delivers a defensible Climate Value at Risk using a published Discounted Cash Flow methodology that integrates physical, transition and nature risks. RA+ Prism industrialises the same methodology as a continuous, in product capability.",
  },
  {
    title: "Finance is the entry door for the climate conversation",
    body: "CFOs and financial planners want a single Value at Risk number tied to enterprise value, impairment and capital allocation. RA+ Prism leads with finance, then layers the sustainability narrative once the financial case is on the table.",
  },
  {
    title: "Adaptation is sized as gross vs net Value at Risk",
    body: "Each Schneider Electric offer (PPA, efficiency, resilience, supply chain) is tied to a measurable VaR reduction. Boards see adaptation as investment choices with a clear cost and benefit, not as narrative.",
  },
];

const BRAND_GREEN = "3DCD58";
const DARK_BG = "1A1A1A";
const CARD_BG = "262626";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "A1A1AA";
const ORANGE = "F97316";

const COL_HEX: Record<string, string> = {
  amber: "F59E0B",
  orange: "F97316",
  emerald: "10B981",
  blue: "3B82F6",
  violet: "8B5CF6",
  green: "22C55E",
};

export const exportToPptx = async () => {
  const pptx = new PptxGenJS();

  pptx.author = "Schneider Electric";
  pptx.title = "RA+ Prism Playbook · Financial Risk Quantification";
  pptx.subject = "RA+ Prism Playbook · Financial Risk Quantification";
  pptx.company = "Schneider Electric";

  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: DARK_BG },
  });

  const newSlide = () => pptx.addSlide({ masterName: "MASTER_SLIDE" });

  const addTitle = (
    slide: PptxGenJS.Slide,
    eyebrow: string,
    title: string,
    intro?: string,
  ) => {
    slide.addText(eyebrow, { x: 0.5, y: 0.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_WHITE });
    if (intro) {
      slide.addText(intro, { x: 0.5, y: 1.15, w: 9, h: 0.7, fontSize: 10, color: TEXT_MUTED, fit: "shrink" });
    }
  };

  const addSectionDivider = (eyebrow: string, title: string) => {
    const s = newSlide();
    s.addText(eyebrow, { x: 0.5, y: 2.6, w: 9, h: 0.4, fontSize: 14, bold: true, color: BRAND_GREEN, align: "center" });
    s.addText(title, { x: 0.5, y: 3.0, w: 9, h: 0.8, fontSize: 36, bold: true, color: TEXT_WHITE, align: "center" });
  };

  // ===== Slide builders =====

  const buildTitle = () => {
    const s = newSlide();
    s.addText("RA+ Prism", { x: 0.5, y: 1.8, w: 9, h: 0.8, fontSize: 18, color: BRAND_GREEN, align: "center" });
    s.addText("Climate Value at Risk", { x: 0.5, y: 2.5, w: 9, h: 0.8, fontSize: 40, bold: true, color: BRAND_GREEN, align: "center" });
    s.addText("Advisory + RA+ Prism", { x: 0.5, y: 3.2, w: 9, h: 0.8, fontSize: 40, bold: true, color: TEXT_WHITE, align: "center" });
    s.addText("Internal Only and Confidential", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, color: TEXT_MUTED, align: "center" });
  };

  const buildExecutiveSummary = () => {
    const s = newSlide();
    s.addText("Executive Summary", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 28, bold: true, color: TEXT_WHITE });
    executiveSummarySlides.forEach((item, i) => {
      const yPos = 1 + i * 1.45;
      s.addText(item.title, { x: 0.5, y: yPos, w: 9, h: 0.35, fontSize: 13, bold: true, color: BRAND_GREEN });
      s.addText(item.body, { x: 0.5, y: yPos + 0.42, w: 9, h: 0.95, fontSize: 9.5, color: i === 1 ? TEXT_WHITE : TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildStrategicContext = () => {
    const s = newSlide();
    addTitle(s, "STRATEGIC CONTEXT", "Forces That Make Now the Window", efficiencyStrategicContext.intro);
    const sunset = efficiencyStrategicContext.raClassicSunset;
    s.addShape("rect" as PptxGenJS.ShapeType, {
      x: 0.5, y: 2.0, w: 9, h: 1.4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    s.addText(sunset.badge, { x: 0.7, y: 2.1, w: 2.5, h: 0.25, fontSize: 8, bold: true, color: BRAND_GREEN });
    s.addText(sunset.title, { x: 0.7, y: 2.35, w: 6, h: 0.35, fontSize: 14, bold: true, color: TEXT_WHITE });
    s.addText(sunset.timeframe, { x: 7, y: 2.35, w: 2.3, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN, align: "right" });
    s.addText(sunset.summary, { x: 0.7, y: 2.75, w: 8.6, h: 0.6, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    s.addText(idmCapabilities.positioning.principle, { x: 0.5, y: 3.7, w: 9, h: 1.2, fontSize: 10, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildKeyChallenges = () => {
    const s = newSlide();
    addTitle(s, "KEY CHALLENGES", "Why Now for RA+ Prism");
    whyNowColumns.forEach((col, i) => {
      const xPos = 0.3 + (i % 3) * 3.2;
      const yPos = 1.85 + Math.floor(i / 3) * 1.95;
      const accent = COL_HEX[col.color] || BRAND_GREEN;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 3.1, h: 1.85,
        fill: { color: CARD_BG }, line: { color: accent, width: 1 },
      });
      s.addText(col.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.3, fontSize: 11, bold: true, color: accent });
      col.items.slice(0, 4).forEach((it, idx) => {
        s.addText(`• ${it}`, { x: xPos + 0.15, y: yPos + 0.42 + idx * 0.34, w: 2.85, h: 0.32, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
      });
    });
  };

  const buildWhatIf = () => {
    const whatIfScenarios = [
      { title: "Defensible Value at Risk in days", description: "Walk into a CFO meeting with a Climate Value at Risk number anchored on NGFS and IPCC scenarios, not on a bespoke model." },
      { title: "One waterfall, three lenses", description: "Show physical, transition and nature risks aggregated into a single integrated Value at Risk view." },
      { title: "Adaptation with a price tag", description: "Size each adaptation lever as gross vs net VaR and tie it to a specific Schneider Electric offer." },
      { title: "Continuous refresh, not yearly", description: "Refresh the analysis on demand inside RA+ Prism instead of rebuilding the model from scratch." },
      { title: "Drill from portfolio to site", description: "Move from country sector view to site level deep dive without leaving the platform." },
      { title: "Supply chain risk without a survey", description: "Use multi regional input output modelling to size supply chain exposure without a full supplier campaign." },
    ];
    const s = newSlide();
    addTitle(s, "WHAT IF TOMORROW", "Aspirations RA+ Prism Unlocks");
    whatIfScenarios.forEach((sc, i) => {
      const xPos = 0.3 + (i % 3) * 3.2;
      const yPos = 1.95 + Math.floor(i / 3) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 3.1, h: 1.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(sc.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.5, fontSize: 10, bold: true, color: BRAND_GREEN, fit: "shrink" });
      s.addText(sc.description, { x: xPos + 0.15, y: yPos + 0.6, w: 2.85, h: 0.75, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildPlatformShift = () => {
    const s = newSlide();
    addTitle(s, "PLATFORM SHIFT", "Methodology + Product, Integrated by Design", platformShift.intro);
    [platformShift.classic, platformShift.raPlus].forEach((col, i) => {
      const xPos = 0.5 + i * 4.6;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 2, w: 4.4, h: 3.2,
        fill: { color: CARD_BG }, line: { color: i === 0 ? "EF4444" : BRAND_GREEN, width: 1 },
      });
      s.addText(col.title, { x: xPos + 0.2, y: 2.15, w: 4, h: 0.35, fontSize: 13, bold: true, color: i === 0 ? "EF4444" : BRAND_GREEN });
      s.addText(col.tagline, { x: xPos + 0.2, y: 2.5, w: 4, h: 0.25, fontSize: 9, italic: true, color: TEXT_MUTED });
      col.points.forEach((p, idx) => {
        s.addText(`• ${p}`, { x: xPos + 0.2, y: 2.85 + idx * 0.4, w: 4, h: 0.38, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
      });
    });
    s.addText(platformShift.thesis, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildPersonas = () => {
    const s = newSlide();
    addTitle(s, "PERSONAS", "Four Roles, One Design Sequence", personas.intro);
    personas.roles.forEach((r, i) => {
      const xPos = 0.5 + (i % 2) * 4.6;
      const yPos = 1.95 + Math.floor(i / 2) * 1.75;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.4, h: 1.6,
        fill: { color: CARD_BG }, line: { color: i === 0 ? BRAND_GREEN : "555555", width: 1 },
      });
      s.addText(r.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
      s.addText(r.rank, { x: xPos + 3.3, y: yPos + 0.1, w: 1, h: 0.25, fontSize: 7, bold: true, color: BRAND_GREEN, align: "right" });
      s.addText(r.context, { x: xPos + 0.15, y: yPos + 0.4, w: 4.1, h: 0.22, fontSize: 7, italic: true, color: TEXT_MUTED });
      s.addText(r.summary, { x: xPos + 0.15, y: yPos + 0.65, w: 4.1, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(personas.designPrinciple, { x: 0.5, y: 5.5, w: 9, h: 0.3, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  };

  const buildJTBD = () => {
    const s = newSlide();
    addTitle(s, "JOBS TO BE DONE", "What Clients Use RA+ Prism to Do", jobsToBeDone.intro);
    jobsToBeDone.jobs.slice(0, 11).forEach((j, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 0.55;
      const typeColor = j.type === "Operational" ? "10B981" : "3B82F6";
      s.addText(`${j.num}`, { x: xPos, y: yPos, w: 0.35, h: 0.45, fontSize: 11, bold: true, color: BRAND_GREEN });
      s.addText(j.title, { x: xPos + 0.4, y: yPos, w: 3.2, h: 0.25, fontSize: 9, bold: true, color: TEXT_WHITE });
      s.addText(j.type, { x: xPos + 3.6, y: yPos, w: 1, h: 0.22, fontSize: 6, bold: true, color: typeColor, align: "right" });
      s.addText(j.description, { x: xPos + 0.4, y: yPos + 0.25, w: 4.1, h: 0.28, fontSize: 6, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(`Where adaptation fits. ${jobsToBeDone.ecmInsight}`, { x: 0.5, y: 5.4, w: 9, h: 0.4, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  };

  const buildStrategicPillars = () => {
    const s = newSlide();
    s.addText("QUALITATIVE OUTCOMES", { x: 0.5, y: 0.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    s.addText("Strategic Pillars", { x: 0.5, y: 0.6, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_WHITE });
    strategicPillars.forEach((pillar, i) => {
      const xPos = 0.5 + i * 3.2;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1, w: 3, h: 4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(pillar.title, { x: xPos + 0.2, y: 1.2, w: 2.6, h: 0.4, fontSize: 16, bold: true, color: BRAND_GREEN });
      s.addText(pillar.tagline, { x: xPos + 0.2, y: 1.7, w: 2.6, h: 0.3, fontSize: 10, color: TEXT_MUTED });
      s.addText(pillar.promise, { x: xPos + 0.2, y: 2.2, w: 2.6, h: 2.5, fontSize: 9, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildTechnologyLandscape = () => {
    const s = newSlide();
    addTitle(s, "TECHNOLOGY LANDSCAPE", "From Bespoke Models to a Shared Backbone", "Existing tools that anchor today's climate risk work, with RA+ Prism evolving them into a continuous, in product capability.");
    existingTools.forEach((t, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.6, h: 1.45,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(t.name, { x: xPos + 0.15, y: yPos + 0.1, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(t.description, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.55, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
      s.addText(`Limitation: ${t.limitation}`, { x: xPos + 0.15, y: yPos + 1.0, w: 4.3, h: 0.4, fontSize: 7, italic: true, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(idmCapabilities.tagline, { x: 0.5, y: 5.3, w: 9, h: 0.4, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildCapabilityMapping = () => {
    const s = newSlide();
    addTitle(s, "CAPABILITY MAPPING", "RA+ Prism across the Client Journey", "How RA+ Prism Advisory and RA+ Prism plug into each stage of the journey, from first conversation to continuous monitoring.");
    const journeyStages = [
      { name: "Discovery", note: "CFO led framing of climate exposure on enterprise value" },
      { name: "Scoping", note: "Pick scenarios, horizons, asset granularity and risk drivers" },
      { name: "Data Foundation", note: "Reuse public references and Schneider Electric internal data, avoid heavy supplier surveys" },
      { name: "Modelling", note: "Integrated Value at Risk waterfall across physical, transition and nature" },
      { name: "Adaptation Sizing", note: "Quantify gross vs net VaR, tie levers to Schneider Electric offers" },
      { name: "RA+ Prism Activation", note: "Industrialise the analysis as a continuously refreshable capability" },
      { name: "Continuous Monitoring", note: "Refresh, drill, compare scenarios and feed disclosure cycles" },
    ];
    journeyStages.forEach((stage, i) => {
      const yPos = 1.85 + i * 0.5;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: 0.5, y: yPos, w: 9, h: 0.45,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(`${i + 1}. ${stage.name}`, { x: 0.7, y: yPos + 0.08, w: 2.5, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(stage.note, { x: 3.3, y: yPos + 0.08, w: 6.0, h: 0.3, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildRegionalJourneys = () => {
    const s = newSlide();
    addTitle(s, "REGIONAL JOURNEYS", "No Single Path. Shared Backend.", regionalJourneys.intro);
    regionalJourneys.journeys.forEach((j, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.7;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.6, h: 1.55,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(j.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(j.revenue, { x: xPos + 3.35, y: yPos + 0.1, w: 1.2, h: 0.25, fontSize: 6.5, bold: true, color: TEXT_WHITE, align: "right" });
      s.addText(j.tagline, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
      s.addText(`Selling point: ${j.sellingPoint}`, { x: xPos + 0.15, y: yPos + 0.65, w: 4.3, h: 0.4, fontSize: 7.5, color: TEXT_WHITE, fit: "shrink" });
      s.addText(`Convergence: ${regionalJourneys.convergence.point}`, { x: xPos + 0.15, y: yPos + 1.1, w: 4.3, h: 0.35, fontSize: 7, italic: true, color: BRAND_GREEN, fit: "shrink" });
    });
    s.addText(regionalJourneys.designPrinciple, { x: 0.5, y: 5.4, w: 9, h: 0.35, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildExpertServices = () => {
    // Slide 1: Two client archetypes
    const s1 = newSlide();
    addTitle(
      s1,
      "HUMAN IN THE LOOP",
      "Advisory Layer on the RA+ Prism Spine",
      "Methodology and product are one. Experts deliver the first analysis and judgment; RA+ Prism industrialises it.",
    );
    const archetypes = [
      {
        title: "Self-Serve Climate Team",
        tagline: "FULL AUTONOMY ON RA+ PRISM",
        body: "Sustainability, risk and finance teams operate RA+ Prism themselves. They refresh scenarios, edit adaptation levers and drill into sites without waiting for a human in the loop.",
      },
      {
        title: "Guided Decision Client",
        tagline: "ADVISORY IN THE ROOM",
        body: "Wants a trusted Schneider Electric advisor for the first analysis and for high stakes calls. RA+ Prism runs the work; the advisor validates the methodology and frames the financial story for the board.",
      },
    ];
    archetypes.forEach((a, i) => {
      const xPos = 0.5 + i * 4.6;
      s1.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 4.45, h: 3.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s1.addText(a.title, { x: xPos + 0.2, y: 2.05, w: 4.05, h: 0.4, fontSize: 16, bold: true, color: TEXT_WHITE });
      s1.addText(a.tagline, { x: xPos + 0.2, y: 2.5, w: 4.05, h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      s1.addText(a.body, { x: xPos + 0.2, y: 2.85, w: 4.05, h: 2.4, fontSize: 10, color: TEXT_WHITE, fit: "shrink" });
    });

    // Slide 2: Judgment layer + engagement tiers
    const s2 = newSlide();
    addTitle(
      s2,
      "JUDGMENT LAYER",
      "Where RA+ Prism Advisors Add Value",
      "Advisors are the judgment layer on top of the published methodology and RA+ Prism.",
    );
    const pillars = [
      { t: "Methodology framing", d: "Translate the Discounted Cash Flow methodology into the client's industry, geography and risk profile." },
      { t: "Scenario design", d: "Anchor scenarios on NGFS and IPCC RCP references, layer in client specific risk drivers." },
      { t: "Adaptation sizing", d: "Frame each adaptation lever as a financial choice with gross vs net VaR and a clear Schneider Electric offer." },
      { t: "Exec communication", d: "Package RA+ Prism outputs into CFO and board ready impairment, capital and disclosure narratives." },
    ];
    pillars.forEach((p, i) => {
      const xPos = 0.5 + i * 2.3;
      s2.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.2, h: 1.6,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s2.addText(p.t, { x: xPos + 0.12, y: 2.02, w: 2.0, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
      s2.addText(p.d, { x: xPos + 0.12, y: 2.35, w: 2.0, h: 1.15, fontSize: 7.5, color: TEXT_WHITE, fit: "shrink" });
    });

    const tiers = [
      ["Advisory", "First Climate Value at Risk", "Engagement", "Advisor led", "RA+ Prism methodology + scoped scenarios"],
      ["Assisted", "Refresh and disclosure cycles", "Async + reviews", "Advisor validates outputs", "Shared RA+ Prism workspace, annotated readouts"],
      ["Self-Serve", "Continuous monitoring", "Always on", "Client team operates the model", "Full RA+ Prism with on demand advisor access"],
    ];
    const tableY = 3.75;
    const headers = ["Tier", "Best for", "Cadence", "Human role", "Platform / RA+ Prism"];
    const colWidths = [1.1, 1.7, 1.3, 2.3, 2.8];
    let xCursor = 0.5;
    headers.forEach((h, i) => {
      s2.addText(h, { x: xCursor, y: tableY, w: colWidths[i], h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      xCursor += colWidths[i];
    });
    tiers.forEach((row, ri) => {
      xCursor = 0.5;
      row.forEach((cell, ci) => {
        s2.addText(cell, {
          x: xCursor, y: tableY + 0.35 + ri * 0.42, w: colWidths[ci], h: 0.4,
          fontSize: 8, color: ci === 0 ? TEXT_WHITE : TEXT_MUTED, bold: ci === 0, fit: "shrink",
        });
        xCursor += colWidths[ci];
      });
    });
    s2.addText("One methodology, one RA+ Prism spine. Clients move between tiers without losing context or model continuity.", {
      x: 0.5, y: 5.4, w: 9, h: 0.3, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink",
    });
  };

  const buildPhasing = () => {
    const phases = [
      { phase: "Phase 1", title: "RA+ Prism Advisory at Scale", tagline: "Methodology in market", timing: "2025 to 2026", summary: "Deliver Climate Value at Risk engagements with the published methodology. Anchor scenarios on NGFS and IPCC, integrate physical, transition and nature, and tie adaptation to Schneider Electric offers." },
      { phase: "Phase 2", title: "RA+ Prism MVP", tagline: "Product mode launch", timing: "2026", summary: "Industrialise the methodology as an RA+ product: refreshable scenarios, self serve adaptation editing, drill from portfolio to site, and time series views." },
      { phase: "Phase 3", title: "Cross Product Spine", tagline: "Continuous capability", timing: "2027+", summary: "Reuse the RA+ Prism backbone across RA+ Sustainability and Energy products. Position RA+ Prism as the replacement for legacy risk tooling across the Schneider Electric estate." },
    ];
    const s = newSlide();
    addTitle(s, "PHASING", "What Ships, in What Order, Why", "From the published methodology in market today to a continuous, cross product capability inside RA+.");
    phases.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.95, h: 3.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(p.phase, { x: xPos + 0.15, y: 2.05, w: 2.65, h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      s.addText(p.title, { x: xPos + 0.15, y: 2.35, w: 2.65, h: 0.4, fontSize: 14, bold: true, color: TEXT_WHITE });
      s.addText(p.tagline, { x: xPos + 0.15, y: 2.75, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
      s.addText(p.timing, { x: xPos + 0.15, y: 3.0, w: 2.65, h: 0.25, fontSize: 7.5, color: BRAND_GREEN });
      s.addText(p.summary, { x: xPos + 0.15, y: 3.3, w: 2.65, h: 1.95, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildIdmVision = () => {
    const useCases = [
      { title: "Integrated Risk Quantification", body: "Express physical, transition and nature exposure as a single Climate Value at Risk on enterprise value, revenue, OPEX and COGS." },
      { title: "Adaptation Sizing", body: "Move from a narrative adaptation plan to a sized portfolio of levers with gross vs net VaR and clear linkage to Schneider Electric offers." },
      { title: "Continuous Monitoring", body: "Refresh scenarios, drill from portfolio to site, compare business as usual, net zero and worst case, and feed disclosures." },
    ];
    const profiles = [
      { title: "Give Me", subtitle: "Self serve", body: "Internal climate, risk and finance teams operate RA+ Prism themselves and refresh on their own cadence." },
      { title: "Help Me", subtitle: "Hybrid", body: "Client team runs RA+ Prism with Schneider Electric advisors stepping in for scenario design, refreshes and board readouts." },
      { title: "Do It For Me", subtitle: "Full advisory", body: "Schneider Electric runs the analysis end to end with the published methodology and delivers refresh cycles as a service." },
    ];
    const s = newSlide();
    addTitle(s, "RA+ PRISM VISION", "Embedded, Defensible, Continuous", "Client autonomy axis: from full self serve to fully delivered. RA+ Prism supports all three on the same methodology.");
    useCases.forEach((u, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 2.95, h: 1.5, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(u.title, { x: xPos + 0.15, y: 2.05, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(u.body, { x: xPos + 0.15, y: 2.4, w: 2.65, h: 1.0, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
    });
    profiles.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 3.6, w: 2.95, h: 1.7, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(p.title, { x: xPos + 0.15, y: 3.7, w: 2.65, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
      s.addText(p.subtitle, { x: xPos + 0.15, y: 4.0, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: BRAND_GREEN });
      s.addText(p.body, { x: xPos + 0.15, y: 4.25, w: 2.65, h: 1.0, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildSuccessMetrics = () => {
    const s = newSlide();
    addTitle(s, "QUANTITATIVE KPIS", "Success Looks Like", "Measurable signals that translate the strategic pillars into trackable indicators. Each KPI defines what we measure, not a committed target.");
    const quantKPIs = [
      { label: "First Climate VaR", signal: "Weeks from kickoff to delivery" },
      { label: "Scenario Refresh Cycle", signal: "Days per refresh in RA+ Prism" },
      { label: "Adaptation Coverage", signal: "% VaR addressed by sized levers" },
      { label: "Cross Product Reuse", signal: "RA+ Prism clients consuming adjacent products" },
      { label: "RA+ Prism Recurring Use", signal: "Active client teams (90d)" },
    ];
    quantKPIs.forEach((k, i) => {
      const xPos = 0.5 + i * 1.85;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 1.75, h: 1.0,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(k.label, { x: xPos + 0.1, y: 2.0, w: 1.55, h: 0.45, fontSize: 9, bold: true, color: TEXT_WHITE, fit: "shrink" });
      s.addText(k.signal, { x: xPos + 0.1, y: 2.45, w: 1.55, h: 0.45, fontSize: 7.5, color: BRAND_GREEN, fit: "shrink" });
    });
    s.addText("RA+ Prism Adoption Signals", { x: 0.5, y: 3.15, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    s.addText(seraKPIs.intro, { x: 0.5, y: 3.45, w: 9, h: 0.35, fontSize: 8, italic: true, color: TEXT_MUTED, fit: "shrink" });
    seraKPIs.kpis.forEach((k, i) => {
      const xPos = 0.5 + (i % 3) * 3.05;
      const yPos = 3.85 + Math.floor(i / 3) * 0.85;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 2.85, h: 0.75,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(k.label, { x: xPos + 0.1, y: yPos + 0.05, w: 2.65, h: 0.25, fontSize: 8, bold: true, color: TEXT_WHITE, fit: "shrink" });
      s.addText(k.description, { x: xPos + 0.1, y: yPos + 0.3, w: 2.65, h: 0.42, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildStartStop = () => {
    const s = newSlide();
    addTitle(s, "START / STOP", "Where RA+ Prism Stops, How It Operates", "The boundary list keeps RA+ Prism scope honest. The operating rules keep every Climate Value at Risk output trustworthy.");
    const outOfScope = [
      { title: "ROI Charts", detail: "RA+ Prism is not a savings calculator. We frame Value at Risk and adaptation cost vs benefit, not headline ROI charts." },
      { title: "Pricing and Discounting", detail: "Commercial terms and discounting policies live outside this playbook." },
      { title: "Regulatory Commitments", detail: "RA+ Prism informs CSRD, TCFD, TNFD and impairment work; it does not replace regulatory sign off." },
    ];
    const guardrails = [
      { title: "Methodology Transparency", detail: "Published Discounted Cash Flow methodology with public reference scenarios, traceable assumptions and audit trails." },
      { title: "Finance First Framing", detail: "Lead with Value at Risk on enterprise value, then layer the sustainability narrative once the financial case is set." },
      { title: "Integrated Risk", detail: "Physical, transition and nature in one waterfall. No siloed analyses, no partial pictures." },
      { title: "Adaptation Sizing", detail: "Every lever framed as gross vs net VaR with an explicit Schneider Electric offer linkage." },
    ];
    s.addText("Stop", { x: 0.5, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: ORANGE });
    outOfScope.forEach((item, i) => {
      const yPos = 2.3 + i * 1.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: 0.5, y: yPos, w: 4.4, h: 0.95, fill: { color: CARD_BG }, line: { color: ORANGE, width: 1 } });
      s.addText(item.title, { x: 0.65, y: yPos + 0.1, w: 4.1, h: 0.3, fontSize: 10, bold: true, color: TEXT_WHITE });
      s.addText(item.detail, { x: 0.65, y: yPos + 0.4, w: 4.1, h: 0.5, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText("Start", { x: 5.1, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    guardrails.forEach((item, i) => {
      const yPos = 2.3 + i * 0.78;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: 5.1, y: yPos, w: 4.4, h: 0.7, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(item.title, { x: 5.25, y: yPos + 0.05, w: 4.1, h: 0.25, fontSize: 9, bold: true, color: BRAND_GREEN });
      s.addText(item.detail, { x: 5.25, y: yPos + 0.3, w: 4.1, h: 0.38, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildExecutiveTakeaway = () => {
    const s = newSlide();
    addTitle(s, "EXECUTIVE TAKEAWAY", "Why This, Why Now");
    s.addText(
      "RA+ Prism turns climate and nature risk into a defensible financial number. Advisory delivers the first analysis, RA+ Prism industrialises it, and adaptation becomes a sized, prioritised portfolio of Schneider Electric offers.",
      { x: 0.5, y: 2.0, w: 9, h: 2.5, fontSize: 16, color: TEXT_WHITE, align: "center", fit: "shrink" },
    );
  };

  // ===== Appendix builders =====

  const buildKnowledgeEngine = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · KNOWLEDGE ENGINE", ecmIngestionEngine.prototype.title, ecmIngestionEngine.intro);
    ecmIngestionEngine.prototype.flow.forEach((step, i) => {
      const xPos = 0.5 + i * 2.25;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.05, h: 1.7,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(step.step, { x: xPos + 0.15, y: 2.05, w: 1.8, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(step.name, { x: xPos + 0.15, y: 2.35, w: 1.8, h: 0.3, fontSize: 12, bold: true, color: TEXT_WHITE });
      s.addText(step.description, { x: xPos + 0.15, y: 2.7, w: 1.8, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(ecmIngestionEngine.prototype.accuracy, { x: 0.5, y: 3.85, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center" });
    s.addText(ecmIngestionEngine.monteCarlo.title, { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
    s.addText(ecmIngestionEngine.monteCarlo.output, { x: 0.5, y: 4.6, w: 9, h: 0.5, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    s.addText(ecmIngestionEngine.monteCarlo.why, { x: 0.5, y: 5.15, w: 9, h: 0.5, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildMaturityLadder = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · MATURITY LADDER", "Meet Customers Where They Are", maturityLadder.intro);
    maturityLadder.stages.forEach((stage, i) => {
      const xPos = 0.5 + i * 2.35;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 2.0, w: 2.15, h: 2.5,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(stage.num, { x: xPos + 0.15, y: 2.1, w: 1.85, h: 0.5, fontSize: 24, bold: true, color: BRAND_GREEN });
      s.addText(stage.label, { x: xPos + 0.15, y: 2.7, w: 1.85, h: 0.35, fontSize: 12, bold: true, color: TEXT_WHITE });
      s.addText(stage.description, { x: xPos + 0.15, y: 3.1, w: 1.85, h: 1.3, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(maturityLadder.note, { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_MUTED });
  };

  const buildVocEvidence = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · VOC EVIDENCE", "What Customers Told Us", vocEvidence.intro);
    vocEvidence.customers.forEach((c, i) => {
      const xPos = 0.3 + i * 3.15;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 3, h: 3.6, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(c.name, { x: xPos + 0.15, y: 2.05, w: 2.7, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(c.contact, { x: xPos + 0.15, y: 2.35, w: 2.7, h: 0.3, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
      s.addText(c.context, { x: xPos + 0.15, y: 2.6, w: 2.7, h: 0.22, fontSize: 6.5, italic: true, color: TEXT_MUTED });
      c.findings.slice(0, 4).forEach((f, idx) => {
        s.addText(`• ${f}`, { x: xPos + 0.15, y: 2.85 + idx * 0.42, w: 2.7, h: 0.4, fontSize: 6, color: TEXT_WHITE, fit: "shrink" });
      });
      s.addText(`"${c.quote}"`, { x: xPos + 0.15, y: 4.6, w: 2.7, h: 0.85, fontSize: 6.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
    });
  };

  const buildSECorporateBlueprint = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · RA CLASSIC IDM CLIENT", seCorporateBlueprint.title, seCorporateBlueprint.intro);
    seCorporateBlueprint.scale.forEach((sc, i) => {
      const xPos = 0.5 + i * 2.25;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 2.05, h: 1.05, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(sc.value, { x: xPos + 0.1, y: 2.05, w: 1.85, h: 0.35, fontSize: 16, bold: true, color: BRAND_GREEN, align: "center" });
      s.addText(sc.label, { x: xPos + 0.1, y: 2.42, w: 1.85, h: 0.22, fontSize: 7, bold: true, color: TEXT_WHITE, align: "center" });
      s.addText(sc.detail, { x: xPos + 0.1, y: 2.65, w: 1.85, h: 0.32, fontSize: 5.5, color: TEXT_MUTED, align: "center", fit: "shrink" });
    });
    s.addText(seCorporateBlueprint.trainingSignal, { x: 0.5, y: 3.15, w: 9, h: 0.4, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    seCorporateBlueprint.phaseMap.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 3.7, w: 2.95, h: 1.5, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(p.phase, { x: xPos + 0.15, y: 3.8, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(p.detail, { x: xPos + 0.15, y: 4.1, w: 2.65, h: 1.0, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(seCorporateBlueprint.conclusion, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildPainInventory = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · PAIN INVENTORY", "What RA+ Prism Eliminates", painInventory.intro);
    painInventory.pains.forEach((p, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.2;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 4.6, h: 1.1, fill: { color: CARD_BG }, line: { color: "EF4444", width: 1 } });
      s.addText(p.id, { x: xPos + 0.15, y: yPos + 0.1, w: 0.5, h: 0.25, fontSize: 9, bold: true, color: "EF4444" });
      s.addText(p.severity, { x: xPos + 0.7, y: yPos + 0.1, w: 1.5, h: 0.22, fontSize: 6, bold: true, color: "EF4444" });
      s.addText(p.title, { x: xPos + 0.15, y: yPos + 0.35, w: 4.3, h: 0.28, fontSize: 9, bold: true, color: TEXT_WHITE });
      s.addText(p.detail, { x: xPos + 0.15, y: yPos + 0.62, w: 4.3, h: 0.45, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildFlywheel = () => {
    const s = newSlide();
    s.addText("Appendix · Strategy-to-Improvement Flywheel", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 22, bold: true, color: TEXT_WHITE });
    s.addText(intelligenceFlywheel.subtitle, { x: 0.5, y: 0.95, w: 9, h: 0.35, fontSize: 11, color: TEXT_MUTED });
    intelligenceFlywheel.stages.forEach((stage, i) => {
      const xPos = 0.5 + (i % 3) * 3.05;
      const yPos = 1.65 + Math.floor(i / 3) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 2.75, h: 1.15, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(stage.name, { x: xPos + 0.15, y: yPos + 0.15, w: 2.45, h: 0.25, fontSize: 11, bold: true, color: BRAND_GREEN });
      s.addText(stage.description, { x: xPos + 0.15, y: yPos + 0.48, w: 2.45, h: 0.55, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(intelligenceFlywheel.keyInsight, { x: 0.5, y: 5.05, w: 9, h: 0.35, fontSize: 8.5, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildThankYou = () => {
    const s = newSlide();
    s.addText("Thank You", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 44, bold: true, color: TEXT_WHITE, align: "center" });
    s.addText("RA+ Prism · Climate Value at Risk", { x: 0.5, y: 3.2, w: 9, h: 0.5, fontSize: 18, color: BRAND_GREEN, align: "center" });
    s.addText("Internal Only and Confidential", { x: 0.5, y: 4, w: 9, h: 0.5, fontSize: 12, color: TEXT_MUTED, align: "center" });
  };

  // ===== Render in new flow order (mirrors Index.tsx + Navigation) =====

  buildTitle();
  buildExecutiveSummary();

  // Problem
  buildStrategicContext();
  buildKeyChallenges();

  // Vision
  buildWhatIf();
  buildPlatformShift();

  // Audience
  buildPersonas();
  buildJTBD();

  // Response
  buildStrategicPillars();

  // How
  buildTechnologyLandscape();
  buildCapabilityMapping();
  buildRegionalJourneys();
  buildExpertServices();

  // Delivery
  buildPhasing();
  buildIdmVision();
  buildSuccessMetrics();
  buildStartStop();
  buildExecutiveTakeaway();

  // Appendix
  addSectionDivider("APPENDIX", "Reference Materials");
  buildKnowledgeEngine();
  buildMaturityLadder();
  buildVocEvidence();
  buildSECorporateBlueprint();
  buildPainInventory();
  buildFlywheel();

  buildThankYou();

  await pptx.writeFile({ fileName: "RA-Plus-Prism-Playbook.pptx" });
};
