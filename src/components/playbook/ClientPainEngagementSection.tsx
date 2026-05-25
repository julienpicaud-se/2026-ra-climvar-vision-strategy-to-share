import { Leaf, TrendingDown, ShieldCheck, ArrowRight, Activity, Database, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const signals = [
  {
    icon: DollarSign,
    quote: "Our board wants climate risk in the same language as every other risk",
    response: "RA+ Prism expresses physical, transition and nature exposure as a single Climate Value at Risk, broken down by driver and scenario, in enterprise value, revenue, OPEX and COGS terms.",
  },
  {
    icon: TrendingDown,
    quote: "We cannot tell which sites or suppliers actually drive our exposure",
    response: "Geographic and asset level deep dives on the same DCF backbone, including supply chain business interruption and carbon cost propagation.",
  },
  {
    icon: Leaf,
    quote: "We need to size adaptation choices, not just describe them",
    response: "Gross to net Value at Risk view with adaptation cost and benefit, plugged directly into Schneider Electric energy, efficiency and resilience offers.",
  },
  {
    icon: ShieldCheck,
    quote: "Our last climate study is a year old and already out of date",
    response: "RA+ Prism turns the methodology into a continuously refreshable product so scenarios, time horizons and adaptation profiles can be updated on demand.",
  },
  {
    icon: Activity,
    quote: "Finance, risk and sustainability each have a different climate number",
    response: "One published methodology, one set of scenarios and one Value at Risk view shared across CFO, CRO, CSO and operational teams.",
  },
  {
    icon: Database,
    quote: "We want to connect climate risk to disclosures and capital planning",
    response: "RA+ Prism outputs feed directly into CSRD, TCFD and TNFD reporting, impairment tests and capital allocation reviews, with traceable assumptions.",
  },
];

export const ClientPainEngagementSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="client-pain-engagement"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Client Questions Turn Into RA+ Prism Engagements
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Six recurring questions from CFOs, CROs, CSOs and operational leaders. Six concrete answers from RA+ Prism advisory and RA+ Prism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.quote}
                className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="italic text-sm text-foreground mb-4 leading-relaxed">
                  "{s.quote}"
                </p>
                <div className="border-t border-border/50 pt-4 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.response}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
