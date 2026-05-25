import { Card, CardContent } from "@/components/ui/card";
import {
  existingTools,
  marketConstraints,
  competitiveLandscape,
  marketTrends,
  serviceModelComparison,
} from "@/data/playbook-data";
import {
  Download,
  Calculator,
  Settings,
  Monitor,
  BarChart3,
  AlertTriangle,
  XCircle,
  Database,
  TrendingUp,
  Shield,
  ArrowRight,
  Target,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  "RA+ Prism Methodology": Download,
  "Vendor Software Stack": Calculator,
  "Existing Carbon and ESG Tools": Settings,
  "DIH Digital Assets": Monitor,
  "Variance Check Agent": BarChart3,
};

export const ExistingToolsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="existing-tools"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Current State & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Risk Quantification Landscape
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Where we are today, what the market demands, and how RA+ Prism advisory IP becomes a living capability inside RA+ Prism.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Existing Sustainability Tools & Assets
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {existingTools.map((tool, index) => {
                const Icon = iconMap[tool.name] || Settings;
                return (
                  <Card key={index} className="bg-card border-border/50 hover:border-border transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">{tool.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{tool.description}</p>
                          <div className="flex items-start gap-1.5 text-xs text-orange-400">
                            <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>{tool.limitation}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" />
              Competitive Landscape
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Sustainability advisory, carbon accounting software, and suite-aligned ESG platforms are investing in AI workflows and acquisitions to deepen their action layer.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {competitiveLandscape.map((comp, i) => (
                <Card key={i} className="bg-card border-border/50">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{comp.name}</h4>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{comp.scope}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{comp.description}</p>
                    <div className="flex items-start gap-1.5 text-xs text-orange-400">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{comp.threat}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Market Trends & Signals
            </h3>
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {marketTrends.map((trend, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{trend}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {serviceModelComparison.map((model) => (
                <Card key={model.model} className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{model.fullName}</div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{model.model}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Typical outcomes</h5>
                        <ul className="space-y-2">
                          {model.typicalOutcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Data needs</h5>
                        <ul className="space-y-2">
                          {model.dataNeeds.map((need) => (
                            <li key={need} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Database className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <h5 className="text-sm font-semibold text-foreground mb-1">Verification level</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{model.verificationLevel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              Known Market & Industry Constraints
            </h3>
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {marketConstraints.map((constraint, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{constraint}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
