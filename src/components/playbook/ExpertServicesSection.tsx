import { UserCog, Sparkles, ShieldCheck, MessageSquare, Lightbulb, AlertTriangle, Presentation, Bot, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const archetypes = [
  {
    icon: HeartHandshake,
    title: "Advisory First Client",
    tagline: "EXPERT LED, METHODOLOGY GROUNDED",
    description:
      "Wants a senior RA+ Prism team in the room to size their first Climate Value at Risk, calibrate scenarios with the CFO and risk team, and frame adaptation as a capital allocation question. The methodology travels with the engagement.",
    bullets: [
      "Bespoke scoping with finance, risk and sustainability stakeholders",
      "Hands on calibration of physical, transition and nature drivers",
      "Board ready Value at Risk waterfall and adaptation narrative",
    ],
  },
  {
    icon: Bot,
    title: "RA+ Prism Client",
    tagline: "RA+ PRISM, REFRESHED ON DEMAND",
    description:
      "Has been through a first RA+ Prism engagement and now wants the model inside RA+ Prism so finance, risk and sustainability can refresh scenarios, drill from portfolio to site, and reuse the same backbone across cycles.",
    bullets: [
      "Self service refresh of scenarios, horizons and adaptation profiles",
      "Geographic and asset level deep dives on demand",
      "Reusable inputs across disclosure, capital and transition planning",
    ],
  },
];

const judgementPillars = [
  {
    icon: ShieldCheck,
    title: "Methodology validation",
    description:
      "Experts confirm that scenario choices, scope boundaries and DCF assumptions hold up to finance, risk and audit scrutiny before a Climate Value at Risk number leaves the room.",
  },
  {
    icon: Lightbulb,
    title: "Driver interpretation",
    description:
      "Translates physical, transition and nature drivers into a narrative the CFO, CRO and CSO can act on, with clear sensitivities and uncertainty ranges.",
  },
  {
    icon: AlertTriangle,
    title: "Adaptation framing",
    description:
      "Sizes the gross versus net Value at Risk for each Schneider Electric lever and surfaces the trade offs between resilience, abatement and capital cost.",
  },
  {
    icon: Presentation,
    title: "Board grade communication",
    description:
      "Packages results into capital narratives, impairment briefs and disclosure inputs that move decisions across finance, risk, sustainability and operations.",
  },
];

const tiers = [
  {
    name: "Advisory",
    audience: "First time Climate Value at Risk",
    cadence: "Project based",
    human: "Senior RA+ Prism team owns scoping, calibration and exec communication",
    platform: "Bespoke modelling shared back via the advisory deliverable",
  },
  {
    name: "Hybrid",
    audience: "Recurring refresh, expert assist",
    cadence: "Quarterly or disclosure aligned",
    human: "Expert validates scenarios and adaptation framing at each refresh",
    platform: "Shared RA+ Prism workspace with annotated Value at Risk outputs",
  },
  {
    name: "RA+ Prism",
    audience: "RA+ Prism client",
    cadence: "On demand",
    human: "Expert services available a la carte for new scenarios or deep dives",
    platform: "Full RA+ Prism autonomy on portfolio, country, site and supplier views",
  },
];

export const ExpertServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="expert-services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Advisory Plus Platform
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Advisory on the RA+ Prism Backbone
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A typical client journey starts with Advisory. Experts scope the first Climate Value at Risk with finance, risk and sustainability, calibrate physical, transition and nature drivers, and frame the adaptation case as a capital decision the board can act on. Prism then industrialises that same model inside RA+, so the client refreshes scenarios, drills from portfolio to site and reuses the methodology across cycles without losing continuity. Advisory stays available on demand for new scenarios, deep dives or board moments. Software and services together turn a one off engagement into a living capability, with a continuous path from insight to action.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 mb-12">
          {archetypes.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{a.title}</h3>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {a.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {a.description}
                </p>
                <ul className="space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <UserCog className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Where RA+ Prism Experts Make the Difference</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {judgementPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-card rounded-xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-card rounded-xl border border-border/50 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Engagement Tiers on One RA+ Prism Backbone</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="border-b border-border/50 text-left">
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Tier</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Best for</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Cadence</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Human role</th>
                  <th className="py-3 text-xs uppercase tracking-wider text-primary font-semibold">Platform</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.name} className="border-b border-border/30 last:border-0 align-top">
                    <td className="py-3 pr-4 font-bold text-foreground">{t.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{t.audience}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{t.cadence}</td>
                    <td className="py-3 pr-4 text-foreground">{t.human}</td>
                    <td className="py-3 text-foreground">{t.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-5">
            One methodology, one backbone. Clients move from advisory to RA+ Prism without losing scenarios, assumptions or model continuity.
          </p>
        </div>
      </div>
    </section>
  );
};
