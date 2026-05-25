import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Shield, TrendingUp, Trophy, Building2 } from "lucide-react";

const competitors = [
  {
    name: "Risilience",
    scope: "Climate risk platform",
    note: "Strong on climate scenario modelling for finance but limited integration with carbon performance and operational monitoring on a single Schneider Electric backbone.",
  },
  {
    name: "S&P / Sustainalytics / MSCI",
    scope: "Ratings and data",
    note: "Trusted data and ratings sources, but no productised gross-to-net Value at Risk framing tied to concrete adaptation levers.",
  },
  {
    name: "Big 4 (Deloitte, EY, PwC, KPMG)",
    scope: "Advisory",
    note: "Deep climate and disclosure advisory benches, yet risk methodology stays inside decks rather than a refreshable in product capability.",
  },
  {
    name: "Carbon accounting platforms",
    scope: "Disclosure software",
    note: "Strong on emissions and disclosure automation, weak on financial quantification of physical and nature risk.",
  },
  {
    name: "Internal SE risk models",
    scope: "Bespoke",
    note: "Site by site internal exposure models exist but are not productised, not refreshable on demand, and not anchored on a published methodology.",
  },
];

const differentiators = [
  "Published Discounted Cash Flow methodology that turns climate, transition and nature risk into one Climate Value at Risk per scenario",
  "Gross to net Value at Risk view that prices Schneider Electric adaptation levers in financial terms",
  "Variable granularity from country and sector down to site, asset and supplier",
  "Living in product capability through RA+ Prism instead of a one off study refreshed yearly",
  "Bridge into the wider RA+ portfolio across Carbon Performance, Supply Chain, Climate Risk and Energy",
  "Internal Schneider Electric use cases on data centres and SE sites validate the model at scale",
];

const trustSignals = [
  { name: "Published methodology", detail: "DCF backbone, public references" },
  { name: "NGFS / IPCC RCP", detail: "Anchored on recognised scenarios" },
  { name: "Internal proof at SE", detail: "Validated on Schneider Electric sites" },
  { name: "Blue ocean position", detail: "No competitor on integrated risk plus carbon to finance" },
];

export const CompetitiveLandscapeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="competitive-landscape"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Climate risk advisory, carbon accounting software and platform-only players each cover part of the picture. None combine integrated risk, carbon performance and operational monitoring with a financial Value at Risk view the way RA+ Prism does.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {competitors.map((c) => (
              <Card key={c.name} className="bg-card border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h4 className="font-semibold text-foreground text-sm">{c.name}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full whitespace-nowrap">{c.scope}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/30 mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Why RA+ Prism Wins
              </h3>
              <ul className="space-y-2">
                {differentiators.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground italic mt-4 pt-4 border-t border-border/40">
                Not a slide deck study. Not a generic ratings feed. A published methodology delivered as advisory and industrialised as RA+ Prism.
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Trust Signals
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {trustSignals.map((t) => (
                <Card key={t.name} className="bg-card border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold text-foreground text-xs">{t.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">
              Independent anchors that underwrite the credibility of every RA+ Prism engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
