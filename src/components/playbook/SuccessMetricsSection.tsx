import { Card, CardContent } from "@/components/ui/card";
import {
  Timer,
  TrendingUp,
  Repeat,
  Layers,
  DollarSign,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const successMetrics = [
  {
    icon: Layers,
    metric: "Coverage of risk drivers",
    description: "Number of physical, transition and nature drivers covered in one integrated Climate Value at Risk waterfall.",
    indicator: "Methodology breadth",
    signal: "Drivers live in production",
  },
  {
    icon: TrendingUp,
    metric: "Adaptation pull through",
    description: "Schneider Electric energy, efficiency, PPA, supply chain and resilience offers attached to a ClimVar adaptation case.",
    indicator: "Cross sell",
    signal: "Attach rate per engagement",
  },
  {
    icon: Timer,
    metric: "Time to first Value at Risk",
    description: "Days from kick off to a first defensible Climate Value at Risk waterfall the client can take to a CFO or board.",
    indicator: "Advisory velocity",
    signal: "Days per engagement",
  },
  {
    icon: Repeat,
    metric: "RA+ ClimVar refresh cadence",
    description: "How often clients refresh scenarios, horizons or adaptation profiles inside RA+ ClimVar after the first engagement.",
    indicator: "Living capability",
    signal: "Refreshes per client per year",
  },
  {
    icon: DollarSign,
    metric: "Recurring RA+ ClimVar revenue",
    description: "Share of ClimVar revenue that comes from recurring RA+ ClimVar subscriptions rather than one off advisory work.",
    indicator: "Business impact",
    signal: "% recurring vs project",
  },
];

export const SuccessMetricsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="success-metrics"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Quantitative KPIs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Success Looks Like
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Five measurable indicators that translate the Quantify, Adapt and Automate pillars into trackable signals. Each KPI defines what we measure, not a committed target.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-6 lg:gap-8 items-stretch">
            <Card className="border-primary/30 bg-primary/5 overflow-hidden">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                    The signal is simple: integrated risk, adaptation pull through, and a living view that gets reused.
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Success shows up in how broadly ClimVar covers risk drivers, how often Schneider Electric solutions attach to the adaptation case, and how frequently clients come back into RA+ ClimVar between engagements.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/50 pt-6">
                  {[
                    ["01", "Quantify"],
                    ["02", "Adapt"],
                    ["03", "Automate"],
                  ].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-xl font-bold text-primary">{num}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {successMetrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className={`bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                        {item.indicator}
                      </span>
                      <h3 className="font-bold text-xl text-foreground mb-2">
                        {item.metric}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="rounded-md border border-border/50 bg-muted/30 px-3 py-2">
                        <span className="text-xs text-foreground font-medium">{item.signal}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="mt-8 glass-card border-primary/30 glow-border">
            <CardContent className="p-5 sm:p-6 text-center">
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                These metrics map directly onto the three ClimVar pillars: 
                <span className="text-primary font-semibold"> Quantify</span>, 
                <span className="text-primary font-semibold"> Adapt</span>, and 
                <span className="text-primary font-semibold"> Automate</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
