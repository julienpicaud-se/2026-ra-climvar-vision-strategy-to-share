import { Users, Bot, Zap, Database, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Users,
    title: "Climate Risk Experts",
    tagline: "METHODOLOGY, JUDGMENT, CFO LANGUAGE",
    description:
      "Senior climate, nature and financial risk specialists who own the advisory engagement, calibrate scenarios, and translate Value at Risk results into board ready narratives for finance, risk and sustainability leaders.",
  },
  {
    icon: Bot,
    title: "Modelling and Scenario Engine",
    tagline: "DCF METHODOLOGY AT THE CORE",
    description:
      "A published Discounted Cash Flow engine that turns physical, transition and nature drivers into Value at Risk waterfalls across business as usual, net zero and worst case scenarios, anchored on NGFS and IPCC RCP references.",
  },
  {
    icon: Zap,
    title: "Adaptation Connector",
    tagline: "FROM EXPOSURE TO SE OFFERS",
    description:
      "Direct hook from quantified risk drivers to Schneider Electric solutions across energy, efficiency, PPA, supply chain and resilience, sizing the net Value at Risk after each adaptation lever.",
  },
  {
    icon: Database,
    title: "RA+ Prism Backbone",
    tagline: "LIVING RISK VIEW INSIDE THE PLATFORM",
    description:
      "RA+ Prism industrialises the model so clients refresh scenarios, drill from portfolio to site, and reuse the same financial and operational inputs across disclosure, capital and transition planning cycles.",
  },
];

const principles = [
  "Lead with finance: every conversation starts with the financial framing, sustainability follows once Value at Risk is on the table",
  "One backbone: Advisory and RA+ Prism share one published methodology, one set of scenarios and one data spine",
  "Quantify, Adapt, Automate: every engagement maps to all three pillars and seeds the platform for the next refresh",
  "Auditable by default: public scenarios, transparent assumptions and traceable inputs so every output survives finance and audit scrutiny",
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
            Advisory And Software Capability
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            RA+ Prism is not a one off study and it is not a pure software product. It is a published methodology delivered first as expert advisory and then industrialised as RA+ Prism inside the platform.
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
