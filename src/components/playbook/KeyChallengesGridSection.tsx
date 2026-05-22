import { Database, ScanText, Clock, Users, FileText, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const challenges = [
  {
    icon: FileText,
    color: "rose",
    title: "Risk Trapped in Qualitative Heatmaps",
    points: [
      "Most climate risk outputs stop at colour coded exposure maps that CFOs and boards cannot act on",
      "Physical, transition and nature drivers are reported in different units and rarely combined",
      "Finance, risk and sustainability teams each rebuild their own view from scratch",
    ],
  },
  {
    icon: Clock,
    color: "amber",
    title: "One Off Models, Yearly Cadence",
    points: [
      "Climate Value at Risk analyses live in bespoke spreadsheets and slide decks refreshed once a year",
      "Scenarios, time horizons and adaptation assumptions cannot be updated on demand",
      "Capital, impairment and disclosure cycles all run faster than the risk model can keep up with",
    ],
  },
  {
    icon: ScanText,
    color: "orange",
    title: "Adaptation Has No Financial Lens",
    points: [
      "Adaptation choices are pitched on resilience narratives, not on Value at Risk reduction",
      "There is no shared way to compare a PPA, an efficiency upgrade and a supply chain change on the same financial footing",
      "Boards approve mitigation budgets without seeing the net Value at Risk after intervention",
    ],
  },
  {
    icon: Users,
    color: "violet",
    title: "Climate Speaks the Wrong Language",
    points: [
      "Conversations led by the sustainability prism lose finance, risk and capital allocation teams",
      "Disclosure narratives and capital narratives are produced separately, with no shared backbone",
      "Investors cannot tell which assets, sites or suppliers are actually driving exposure",
    ],
  },
  {
    icon: Database,
    color: "sky",
    title: "Supply Chain and Nature Stay Out of Scope",
    points: [
      "Supply chain business interruption and carbon cost propagation rarely make it into the risk view",
      "Nature risk lives in a separate workstream from climate risk, despite shared drivers",
      "Site, supplier and ecosystem data never reach the same model that scores enterprise exposure",
    ],
  },
  {
    icon: Layers,
    color: "emerald",
    title: "No Living, In Product Risk View",
    points: [
      "Each refresh means rebuilding scenarios, re-running models and re-formatting decks",
      "Clients cannot drill from a portfolio number into a country, site or supplier without a new engagement",
      "The cost of every additional Climate Value at Risk view is high enough to discourage iteration",
    ],
  },
];

const colorStyles: Record<string, { border: string; bg: string; iconBg: string; iconText: string }> = {
  rose: {
    border: "border-rose-500/30",
    bg: "bg-gradient-to-br from-rose-500/10 to-rose-500/5",
    iconBg: "bg-rose-500/15",
    iconText: "text-rose-400",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-gradient-to-br from-amber-500/10 to-amber-500/5",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-400",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-gradient-to-br from-orange-500/10 to-orange-500/5",
    iconBg: "bg-orange-500/15",
    iconText: "text-orange-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-gradient-to-br from-violet-500/10 to-violet-500/5",
    iconBg: "bg-violet-500/15",
    iconText: "text-violet-400",
  },
  sky: {
    border: "border-sky-500/30",
    bg: "bg-gradient-to-br from-sky-500/10 to-sky-500/5",
    iconBg: "bg-sky-500/15",
    iconText: "text-sky-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5",
    iconBg: "bg-emerald-500/15",
    iconText: "text-emerald-400",
  },
};

const kpis = [
  { value: "1 number", label: "Climate Value at Risk that combines physical, transition and nature drivers", color: "text-rose-400" },
  { value: "Yearly", label: "Typical refresh cadence of existing bespoke risk models", color: "text-amber-400" },
  { value: "Gross → Net", label: "Adaptation framing missing from most climate risk outputs today", color: "text-sky-400" },
  { value: "1 backbone", label: "Shared DCF methodology across advisory and RA+ ClimVar", color: "text-orange-400" },
];

export const KeyChallengesGridSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="key-challenges-grid"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Key Challenges
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Climate, nature and transition risk are growing in materiality, but the outputs available today do not speak the language of finance and cannot be refreshed on the cadence boards now expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
          {challenges.map((c) => {
            const Icon = c.icon;
            const s = colorStyles[c.color];
            return (
              <div
                key={c.title}
                className={`rounded-xl border ${s.border} ${s.bg} p-6`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${s.iconText}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground pt-2">{c.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <div className={`w-1.5 h-1.5 rounded-full ${s.iconText} bg-current mt-2 shrink-0`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl bg-muted/30 border border-border/50 p-5 text-center"
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${k.color}`}>{k.value}</div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
