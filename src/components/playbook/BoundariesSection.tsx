import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  Wrench,
  Boxes,
  Eye,
  Database,
  ShieldCheck,
  Users,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const outOfScopeItems = [
  {
    icon: FileCheck,
    title: "Audit Sign Off",
    description: "Statutory assurance of climate related financial figures stays with accredited auditors, not with the RA+ Prism methodology or platform.",
  },
  {
    icon: Wrench,
    title: "Regulatory Interpretation",
    description: "Binding legal interpretation of CSRD, IFRS S2, TCFD, TNFD or local disclosure law remains with the client's counsel.",
  },
  {
    icon: Boxes,
    title: "Pricing and Discounting",
    description: "RA+ Prism advisory commercials and RA+ Prism pricing live outside this space. The focus here is methodology, value and product scope.",
  },
];

const guardrailCategories = [
  {
    icon: Eye,
    title: "Transparency and Scope",
    points: [
      "Show Climate Value at Risk as ranges with explicit scenarios, time horizons and confidence levels",
      "Surface the drivers, geographies and assets included or excluded in each run",
      "Label every output as decision support, not as a regulatory or commercial commitment",
    ],
  },
  {
    icon: Database,
    title: "Methodology and Data",
    points: [
      "Anchor every scenario on public references (NGFS, IPCC RCP) and document any departure",
      "Apply minimum data checks before producing a Value at Risk number",
      "Expose data gaps transparently rather than hiding them behind a single number",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Auditability and Trust",
    points: [
      "Keep full audit trails of drivers, assumptions and inputs used in each run",
      "Link to recognised standards without offering legal interpretation",
      "No auto publish of figures into audited disclosures without expert review",
    ],
  },
  {
    icon: Users,
    title: "User Experience and Escalation",
    points: [
      "Offer a clear path from any RA+ Prism output to a RA+ Prism expert engagement",
      "Allow finance, risk and sustainability users to annotate, snooze or reject suggestions",
      "Lead every flow with finance framing, with sustainability narrative layered on top",
    ],
  },
];

export const BoundariesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="boundaries"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <span id="out-of-scope" className="block -mt-24 pt-24" aria-hidden />
      <span id="guardrails" className="block -mt-24 pt-24" aria-hidden />

      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            RA+ Prism Boundaries and Operating Rules
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Where RA+ Prism Stops, How It Operates
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            The boundary list keeps RA+ Prism scope honest. The operating rules keep every Climate Value at Risk output produced by RA+ Prism advisory and RA+ Prism trustworthy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider block">Boundary List</span>
                <h3 className="text-xl font-bold text-foreground">Out of Scope</h3>
              </div>
            </div>
            <div className="space-y-4">
              {outOfScopeItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card key={i} className="bg-card border-orange-500/20 hover:border-orange-500/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block">Operating Rules</span>
                <h3 className="text-xl font-bold text-foreground">Guardrails</h3>
              </div>
            </div>
            <div className="space-y-4">
              {guardrailCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <Card key={i} className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{cat.title}</h4>
                          <ul className="space-y-1.5">
                            {cat.points.map((p, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
