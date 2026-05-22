import { Leaf, TrendingDown, ShieldCheck, ArrowRight, Activity, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const signals = [
  {
    icon: TrendingDown,
    quote: "Our footprint keeps growing and we cannot tell which sites or suppliers are worst",
    response: "Portfolio-wide decarbonization screening grounded in RA+ client emissions data, surfacing the highest-impact sites, suppliers, and measures first.",
  },
  {
    icon: Leaf,
    quote: "We have to hit our SBTi targets and need credible decarbonization moves",
    response: "Calibrated decarbonization recommendations tied to assurance-ready methodology, feeding CSRD, ISSB, and CDP disclosures from one source.",
  },
  {
    icon: ShieldCheck,
    quote: "We do not trust the numbers in our last sustainability report",
    response: "Transparent assumptions, governed emission factors, and audit trails grounded in GSP methodology that make every figure traceable for assurance.",
  },
  {
    icon: Activity,
    quote: "Our Scope 3 data sits in spreadsheets and never reaches the people making decisions",
    response: "RA+ unifies emissions, supplier, and operational data into the same workflow Sustainability Leads and Sera already use.",
  },
  {
    icon: Database,
    quote: "We want to run our own analyses, not wait for a consultant every time",
    response: "Self-serve, expert-supported, and fully-managed profiles on one sustainability-powered platform, so clients can self-serve, co-pilot, or stay fully serviced as they mature.",
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
            How Customer Pain Translates Into Engagement
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Five recurring signals from customers, five integrated responses from GSP and RA+.
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
