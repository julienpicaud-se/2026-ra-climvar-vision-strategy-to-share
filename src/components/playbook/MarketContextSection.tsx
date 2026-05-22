import { TrendingUp, Layers, Sparkles, Leaf, ShieldCheck, Database, Activity, DollarSign, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forces = [
  {
    icon: DollarSign,
    title: "Finance Demands a Number",
    body: "CFOs, treasurers and investors expect climate exposure in the same language as any other risk: enterprise value, revenue, OPEX and COGS, not qualitative heatmaps.",
  },
  {
    icon: TrendingUp,
    title: "Disclosure Tightens",
    body: "CSRD, IFRS S2, TCFD and TNFD push climate and nature risk into audited financial statements, raising the bar on methodology, transparency and traceability.",
  },
  {
    icon: Globe,
    title: "Physical Risk Materialises",
    body: "Floods, heat, drought and storms are already hitting assets, supply chains and continuity. Clients need site and supplier level views, not country averages.",
  },
  {
    icon: Activity,
    title: "Transition Exposure Grows",
    body: "Carbon pricing, demand shifts, technology change, litigation and reputational risk all move enterprise value. They have to be modelled together, not in silos.",
  },
  {
    icon: Leaf,
    title: "Nature Joins the Agenda",
    body: "Biodiversity, water and ecosystem dependencies are moving from voluntary to mandatory. ClimVar wires nature risk into the same Value at Risk waterfall as climate.",
  },
  {
    icon: ShieldCheck,
    title: "Auditability is Non Negotiable",
    body: "Boards and auditors want public references, traceable assumptions and reproducible scenarios. NGFS and IPCC RCP scenarios anchor every ClimVar run.",
  },
  {
    icon: Sparkles,
    title: "Adaptation Becomes Capital Allocation",
    body: "Once risk is in financial terms, adaptation choices compete with any other CAPEX. Clients need a gross to net Value at Risk view to prioritise.",
  },
  {
    icon: Database,
    title: "From Decks to Living Models",
    body: "One off PowerPoint risk studies no longer fit a yearly disclosure and quarterly capital cadence. Clients want a continuously refreshable view in product.",
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
            Forces Pulling Climate Risk Into Finance
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Eight converging forces are turning climate, nature and transition risk into a financial conversation. These are the pressures ClimVar is built to meet.
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
