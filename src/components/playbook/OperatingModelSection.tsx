import { Users, Bot, Zap, Database, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Users,
    title: "Sustainability Experts",
    tagline: "JUDGMENT, METHODOLOGY, CLIENT RELATIONSHIPS",
    description:
      "Senior sustainability consultants, climate scientists, and assurance specialists who own the recommendation and the customer conversation, working from RA+ client emissions and methodology context.",
  },
  {
    icon: Bot,
    title: "Agentic AI Assistants",
    tagline: "CO-PILOTS THAT COMPRESS ADVISORY HOURS INTO MINUTES",
    description:
      "Purpose-built agents (Sera and peers) that reason over the RA+ sustainability spine plus legacy GSP IP, draft inventories, stack abatement measures, and explain assumptions so experts focus on calibration and trade-offs.",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    tagline: "PARAMETRIC SUSTAINABILITY AT SCALE",
    description:
      "Templated GHG calculations, supplier outreach, disclosure drafting, and assurance scaffolding generated automatically from RA+ emissions, supplier, and operational data, with always-on detection between formal disclosure cycles.",
  },
  {
    icon: Database,
    title: "RA+ Sustainability Spine",
    tagline: "AGENT-READY CLIENT DATA + GSP IP, NATIVE TO RA+",
    description:
      "A unified sustainability foundation inside RA+ that resolves client identity, ingests emissions, supplier, and operational data, blends in GSP methodology and advisory IP, and exposes one enriched context layer to experts and agents, no module hop.",
  },
];

const principles = [
  "Software absorbs the repeatable work; sustainability experts own the judgment calls",
  "Every service line shares the same RA+ spine, client emissions, supplier context, and GSP IP in one place, no swivel-chair handoffs",
  "Agents are accountable to humans; humans are accountable to clients; sustainability data is accountable to both",
  "Automation targets 90%+ of recurring inventory and disclosure touches over the horizon, powered by always-on RA+ discovery",
];

export const OperatingModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="operating-model"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Operating Model
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Experts Supported by Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            We are not a software vendor and we are not a pure consultancy. We are experts supported by software, humans on point for judgment, software on point for scale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex items-start gap-5 bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {p.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-10 bg-card rounded-xl border border-border/50 p-6 sm:p-8">
          <h3 className="font-semibold text-foreground mb-6">Operating Principles</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {principles.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
