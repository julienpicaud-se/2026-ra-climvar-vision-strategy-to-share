import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, LineChart, Sparkles, Check, Clock, AlertCircle } from "lucide-react";

type Status = "urgent" | "strategic" | "exploration";

const phases = [
  {
    id: "quantify",
    phase: "Phase 1",
    title: "Quantify",
    tagline: "Published DCF methodology, integrated risk view",
    icon: Layers,
    status: "urgent" as Status,
    statusLabel: "In production",
    timing: "Live, expanding driver coverage",
    summary:
      "Establish ClimVar advisory as the integrated financial view of climate and nature risk, combining physical, transition and nature drivers into one Climate Value at Risk waterfall.",
    bullets: [
      "Six risk drivers live: four physical, two transition",
      "Nature risk wired into the same waterfall",
      "Scenarios anchored on NGFS and IPCC RCP for full auditability",
      "Variable granularity from country and sector to site and supplier",
    ],
    dependencies: "Foundation for the adaptation and platform phases. Every engagement seeds the model and the platform.",
  },
  {
    id: "adapt",
    phase: "Phase 2",
    title: "Adapt",
    tagline: "Risk reduction as investment options",
    icon: LineChart,
    status: "strategic" as Status,
    statusLabel: "Scaling",
    timing: "Sequenced with offer integration",
    summary:
      "Turn quantified risk into a ranked set of adaptation choices tied to Schneider Electric solutions, sizing the gross versus net Value at Risk after each lever.",
    bullets: [
      "Gross to net Value at Risk view operational",
      "Adaptation library connected to the Schneider Electric offer catalogue",
      "Site and supply chain deep dive paths productised",
      "Climate and nature opportunities surfaced alongside risk drivers",
    ],
    dependencies: "Builds on the Phase 1 methodology. Co evolves with offer integration across energy, efficiency, PPA and resilience.",
  },
  {
    id: "automate",
    phase: "Phase 3",
    title: "Automate",
    tagline: "Living capability inside RA+ ClimVar",
    icon: Sparkles,
    status: "exploration" as Status,
    statusLabel: "Industrialising",
    timing: "Rolling out into RA+",
    summary:
      "Take the methodology out of decks and into RA+ ClimVar so clients refresh scenarios, drill from portfolio to site, and reuse the same backbone across cycles.",
    bullets: [
      "RA+ ClimVar product quantifies Value at Risk before and after adaptation",
      "Refreshable scenarios, time horizons and adaptation profiles",
      "Reusable financial and operational inputs across engagements",
      "Bridge into Carbon Performance, Supply Chain, Climate Risk and Energy products of RA+",
    ],
    dependencies: "Depends on Quantify and Adapt being stable. Unlocks recurring revenue and lower marginal cost per refresh.",
  },
];

const statusStyles: Record<Status, string> = {
  urgent: "bg-primary/15 text-primary border-primary/30",
  strategic: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  exploration: "bg-muted text-muted-foreground border-border",
};

const statusIcons: Record<Status, typeof Clock> = {
  urgent: Clock,
  strategic: Check,
  exploration: AlertCircle,
};

export const PhasingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="phasing"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/50 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Sequencing · Axis: over time
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Phasing: Quantify, Adapt, Automate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A clear order of operations for ClimVar. Quantify first as advisory, then Adapt connects risk to Schneider Electric offers, then Automate turns the model into a living capability in RA+ ClimVar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((p) => {
            const Icon = p.icon;
            const StatusIcon = statusIcons[p.status];
            return (
              <div
                key={p.id}
                className="flex flex-col bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${statusStyles[p.status]}`}>
                    <StatusIcon className="w-3 h-3" />
                    {p.statusLabel}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {p.phase}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-primary font-medium mb-4">{p.tagline}</p>

                <div className="bg-muted/50 rounded-lg border-l-2 border-primary pl-4 pr-4 py-3 mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Timing</p>
                  <p className="text-sm text-foreground">{p.timing}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.summary}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Why this, why now</h4>
                  <ul className="space-y-3">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 my-2" />

                <div className="mt-auto pt-4">
                  <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mb-2">
                    Sequencing logic
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.dependencies}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
