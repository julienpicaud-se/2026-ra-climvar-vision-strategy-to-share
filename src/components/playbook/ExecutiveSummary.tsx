import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Activity,
  AlertTriangle,
  Compass,
  Wrench,
  TrendingUp,
  Rocket,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

type Tone = "primary" | "destructive" | "secondary" | "muted";

type Section = {
  num: string;
  id: string;
  label: string;
  title: string;
  icon: React.ElementType;
  tone: Tone;
  body: string;
  kpis?: { value: string; label: string }[];
};

const toneStyles: Record<Tone, { card: string; icon: string; text: string; glow: string }> = {
  primary: {
    card: "border-primary/45 bg-primary/5",
    icon: "bg-primary/15 text-primary",
    text: "text-primary",
    glow: "shadow-[0_0_38px_hsl(var(--primary)/0.12)]",
  },
  destructive: {
    card: "border-destructive/35 bg-destructive/5",
    icon: "bg-destructive/15 text-destructive",
    text: "text-destructive",
    glow: "shadow-[0_0_30px_hsl(var(--destructive)/0.08)]",
  },
  secondary: {
    card: "border-secondary/40 bg-secondary/10",
    icon: "bg-secondary/25 text-primary",
    text: "text-primary",
    glow: "shadow-[0_0_34px_hsl(var(--secondary)/0.14)]",
  },
  muted: {
    card: "border-border/70 bg-card",
    icon: "bg-muted text-muted-foreground",
    text: "text-foreground",
    glow: "",
  },
};

const sections: Section[] = [
  {
    num: "01",
    id: "whats-happening",
    label: "What is Happening",
    title:
      "Climate and nature risk has become a board level financial question",
    icon: Activity,
    tone: "muted",
    body:
      "CFOs, investors, regulators and operational leaders all need a single, defensible answer to one question: how much enterprise value, revenue, OPEX and COGS is exposed to physical, transition and nature risks, and how much of that exposure can be reduced. Today that answer lives in scattered consulting decks, qualitative heatmaps and one off models. ClimVar exists to make it quantified, comparable and actionable.",
  },
  {
    num: "02",
    id: "true-problem",
    label: "The Core Problem",
    title: "Risk is described qualitatively, decisions need it in financial terms",
    icon: AlertTriangle,
    tone: "destructive",
    body:
      "Most climate and nature risk work stops at exposure heatmaps and narrative scenarios. Finance, risk and capital allocation teams cannot use that output to test impairment, prioritise CAPEX or compare adaptation choices. Without a financial common denominator, climate risk stays in the sustainability silo and never reaches the decisions where it would matter most.",
  },
  {
    num: "03",
    id: "north-star",
    label: "Our North Star",
    title: "Climate Value at Risk as the integrated, financial view of climate and nature risk",
    icon: Compass,
    tone: "primary",
    body:
      "ClimVar uses a published Discounted Cash Flow methodology to express physical, transition and nature risks as one Climate Value at Risk number per scenario, broken down by driver, geography and asset. Finance becomes the entry door for the climate conversation, and sustainability follows once the financial case is on the table.",
  },
  {
    num: "04",
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Advisory first, then a living capability in RA+ Prism",
    icon: Wrench,
    tone: "muted",
    body:
      "Clients start with a ClimVar advisory engagement that sizes their Climate Value at Risk across business as usual, net zero and worst case scenarios. From there, RA+ Prism productises the model so the same view is refreshable on demand, drillable from portfolio to site, and reusable across disclosure, capital and transition planning cycles.",
  },
  {
    num: "05",
    id: "economic-impact",
    label: "Economic Impact",
    title: "Three value pillars: Quantify, Adapt, Automate",
    icon: TrendingUp,
    tone: "secondary",
    body:
      "Quantify turns climate and nature exposure into a financial number CFOs and boards can act on. Adapt connects that number to concrete Schneider Electric solutions and sizes the net Value at Risk after intervention. Automate lifts the model out of decks and into RA+ Prism so every refresh is faster, cheaper and more useful than the last.",
    kpis: [
      { value: "One number", label: "Financial framing" },
      { value: "Gross to net", label: "Adaptation impact" },
      { value: "Living", label: "RA+ Prism refresh" },
    ],
  },
  {
    num: "06",
    id: "strategic-upside",
    label: "Strategic Upside",
    title: "A blue ocean position on integrated risk, carbon and monitoring to finance",
    icon: Rocket,
    tone: "muted",
    body:
      "No competitor combines climate, nature and transition risk with carbon performance and operational monitoring, all expressed in financial terms, the way ClimVar does. The methodology is published and defensible, internal use cases on Schneider Electric sites prove the model at scale, and RA+ Prism gives clients a recurring product wrapper that pulls through the wider RA+ portfolio.",
  },
];

const risks: { risk: string; mitigation: string }[] = [
  {
    risk: "Clients perceive ClimVar as another qualitative climate study",
    mitigation:
      "Lead every conversation with the financial framing and a worked Climate Value at Risk waterfall, then bring in the sustainability narrative only once finance is on the table.",
  },
  {
    risk: "Advisory delivery is hard to industrialise inside RA+",
    mitigation:
      "Sequence the build so the ClimVar advisory model and RA+ Prism share one published methodology, one data backbone and one set of scenarios, so every engagement seeds the platform.",
  },
];

const SummaryCard = ({ section }: { section: Section }) => {
  const Icon = section.icon;
  const styles = toneStyles[section.tone];

  return (
    <article
      id={section.id}
      className={`scroll-mt-28 rounded-lg border p-6 sm:p-8 transition-colors ${styles.card} ${styles.glow}`}
    >
      <div className="grid gap-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={`text-lg font-semibold leading-tight ${styles.text}`}>
              {section.label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {section.num}
            </span>
          </div>
          <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
            {section.title}
          </h3>
          <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {section.body}
          </p>

          {section.kpis && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {section.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-md border border-border/60 bg-background/35 px-4 py-3"
                >
                  <div className="text-2xl font-semibold leading-none text-primary">
                    {kpi.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 text-center sm:mb-16">
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              Briefing / ClimVar Executive Narrative
            </div>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Executive Summary
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              How ClimVar advisory and RA+ Prism turn climate, nature and transition risk into a financial conversation Schneider Electric can win.
            </p>
          </header>

          <div className="space-y-8 sm:space-y-9">
            {sections.map((section) => (
              <SummaryCard key={section.id} section={section} />
            ))}

            <article
              id="exec-risks"
              className="scroll-mt-28 rounded-lg border border-border/70 bg-card p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    07
                  </div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Risks and Mitigations
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-sm text-muted-foreground">
                Two cross cutting risks live here. Operating rules are detailed in{" "}
                <a href="#guardrails" className="text-primary underline-offset-4 hover:underline">Guardrails</a>{" "}
                and boundaries in{" "}
                <a href="#out-of-scope" className="text-primary underline-offset-4 hover:underline">Out of Scope</a>.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {risks.map((item) => (
                  <div
                    key={item.risk}
                    className="rounded-lg border border-border/60 bg-background/35 p-5"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <h4 className="text-sm font-semibold leading-snug text-foreground">
                        {item.risk}
                      </h4>
                    </div>
                    <div className="flex items-start gap-3 pl-7">
                      <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
