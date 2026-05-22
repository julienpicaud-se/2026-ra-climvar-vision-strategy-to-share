import { Card, CardContent } from "@/components/ui/card";
import { raPlusPlatformFoundation } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, LineChart, Sparkles, Check, ArrowRight, Network } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  LineChart,
  Sparkles,
};

export const RAPlusPlatformFoundationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { eyebrow, title, intro, pillars, soWhat } = raPlusPlatformFoundation;

  return (
    <section
      id="raplus-platform-foundation"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-background section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Network className="w-4 h-4" />
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Layers;
            return (
              <Card key={pillar.id} className="bg-card border-border/60 flex flex-col">
                <CardContent className="p-6 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                      <p className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Platform components
                    </h4>
                    <ul className="space-y-2">
                      {pillar.components.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1 flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      What GSP gets
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.gspBenefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-5 text-center">
            <p className="text-sm sm:text-base text-foreground italic">{soWhat}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
