import { Card, CardContent } from "@/components/ui/card";
import { Triangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facets = [
  { label: "Physical risk", tone: "From floods, heat, drought and storms" },
  { label: "Transition risk", tone: "From carbon pricing, demand and technology shifts" },
  { label: "Nature risk", tone: "From biodiversity loss and water stress" },
  { label: "Supply chain risk", tone: "From upstream exposure modelled via MRIO" },
];

export const PrismNameSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="prism-name"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
            Why the name
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            RA+ Prism: multi-faceted risk seen through one lens
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A prism takes one beam of light and reveals every colour inside it. RA+ Prism does the same with climate exposure: it takes the many facets of risk facing a business and refracts them through a single financial lens, the ClimVar methodology.
          </p>
        </div>

        <Card className="bg-card border-primary/20">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Prism className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">One lens, every facet</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {facets.map((f) => (
                <div
                  key={f.label}
                  className="rounded-lg border border-border/60 bg-background/50 p-4"
                >
                  <p className="text-sm font-semibold text-foreground mb-1">{f.label}</p>
                  <p className="text-xs text-muted-foreground">{f.tone}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic text-center">
              Each facet is quantified in the same financial unit: Climate Value at Risk.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
