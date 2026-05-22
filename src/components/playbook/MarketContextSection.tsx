import { Zap, TrendingUp, Layers, Sparkles, Leaf, ShieldCheck, Database, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forces = [
  {
    icon: TrendingUp,
    title: "Regulatory Acceleration",
    body: "CSRD, ISSB, EU Taxonomy, and SEC climate rules turn voluntary reporting into mandatory, audit-grade disclosure with tight deadlines.",
  },
  {
    icon: Leaf,
    title: "Net-Zero Commitments",
    body: "SBTi-validated targets are now table stakes. Boards expect credible transition plans backed by measurable abatement, not pledges.",
  },
  {
    icon: Layers,
    title: "Scope 3 Complexity",
    body: "Up to 90% of corporate footprints sit in supply chains and product use. Customers need scalable supplier engagement and activity-based data.",
  },
  {
    icon: Sparkles,
    title: "AI & Self-Service Expectations",
    body: "Sustainability Leads expect guided, in-product recommendations and natural-language analysis, not static reports delivered weeks after the cycle closes.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance & Trust",
    body: "Limited and reasonable assurance (ISAE 3000, ISSA 5000) raise the bar on methodology transparency, audit trails, and data lineage.",
  },
  {
    icon: Activity,
    title: "Nature & Climate Risk",
    body: "TNFD, physical risk, and transition risk disclosures require new data sources, scenario analysis, and biodiversity context alongside emissions.",
  },
  {
    icon: Zap,
    title: "Decarbonization Investment",
    body: "Customers are deploying capital into renewables, electrification, and NTBS offsetting and need prioritized, abatement-ranked guidance.",
  },
  {
    icon: Database,
    title: "Sustainability Data Everywhere",
    body: "Emissions, supplier, operational, and financial data sit in fragmented systems. Customers expect a unified, agent-ready foundation Sera can reason over.",
  },
];


export const MarketContextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="market-context"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
            Market Context
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Forces Shaping Customer Needs
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Customers face the most demanding sustainability landscape in a generation. These pressures define where GSP and RA+ must deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forces.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-border/50 bg-muted/20 p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
