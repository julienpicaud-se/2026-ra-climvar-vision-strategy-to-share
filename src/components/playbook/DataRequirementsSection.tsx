import { Card, CardContent } from "@/components/ui/card";
import { dataNeeded, optionalClientContext } from "@/data/playbook-data";
import {
  Layers,
  FileText,
  Building2,
  Sliders,
  Target,
  TrendingUp,
  BarChart3,
  Scale,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  "Entity Financials": Sliders,
  "Site and Asset Footprint": Building2,
  "Sector and Geography": Layers,
  "Emissions": BarChart3,
  "Scenarios": TrendingUp,
  "Supply Chain": Building2,
};

export const DataRequirementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="data-requirements"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Data Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Data Required for ClimVar
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            The core data objects needed to produce a defensible Climate Value at Risk waterfall, plus optional client context that sharpens the view and unlocks deeper site, supplier and adaptation analysis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Required Data Objects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dataNeeded.map((item, index) => {
                const Icon = iconMap[item.name] || FileText;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border-2 border-amber-400 flex items-center justify-center text-xs text-amber-400">+</span>
              Optional Client Context (High Value)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              {optionalClientContext.map((item, index) => {
                const Icon = iconMap[item.name] || Building2;
                return (
                  <Card
                    key={index}
                    className="bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold gradient-text mb-4">
                With This Data Foundation
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Produce a defensible Climate Value at Risk per scenario</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Decompose exposure by driver, geography and asset</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Model revenue, OPEX and COGS impacts out to 2050</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Size adaptation cases as gross to net Value at Risk</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Feed CSRD, IFRS S2, TCFD and TNFD outputs from one source</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Refresh scenarios and adaptation profiles in RA+ Prism</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
