import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Layers,
  Repeat,
  MousePointer,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    icon: DollarSign,
    title: "Walk into a CFO meeting with a number",
    description: "Open the climate conversation with a defensible Climate Value at Risk across enterprise value, revenue, OPEX and COGS, not a qualitative heatmap.",
  },
  {
    icon: Layers,
    title: "Combine climate, nature and transition in one waterfall",
    description: "Show physical, transition and nature drivers side by side per scenario, with NGFS and IPCC RCP references behind every assumption.",
  },
  {
    icon: TrendingUp,
    title: "Frame adaptation as capital allocation",
    description: "Move the conversation from awareness to action by sizing the gross versus net Value at Risk for each Schneider Electric adaptation lever.",
  },
  {
    icon: MousePointer,
    title: "Drill from portfolio into site and supplier",
    description: "Let clients explore exposure at country, sector, site and supply chain level on the same backbone, without commissioning a new study.",
  },
  {
    icon: Repeat,
    title: "Refresh scenarios on demand in RA+ Prism",
    description: "Update horizons, scenarios and adaptation profiles whenever a disclosure cycle, capital review or operational change requires it.",
  },
];

export const WhatIfSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="what-if"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              The Vision · Powered by RA+ Prism
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              What if you could, <span className="text-primary">tomorrow</span>...
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              RA+ Prism turns climate, nature and transition risk into a financial conversation and gives clients a living, in product view they share across finance, risk and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {scenario.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card border-primary/30 glow-border">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">That is RA+ Prism</span>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                Climate, nature and transition risk in financial terms, adaptation framed as investment in Schneider Electric solutions, and a living view of Climate Value at Risk inside RA+ Prism.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
