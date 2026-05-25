import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  PenTool,
  FileText,
  Truck,
  Monitor,
  Users,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const journeyStages = [
  {
    id: "discovery",
    stage: "A",
    title: "Discovery and Qualification",
    icon: Search,
    primaryUsers: "Account teams with ClimVar advisory support",
    capabilities: [
      "Finance led discovery from minimal client inputs (sector, geography, revenue, asset value)",
      "Quick applicability checks for physical, transition and nature drivers",
      "Reference benchmarks from comparable industries and regions to anchor first conversations",
    ],
    value: "Earlier finance led entry into the climate risk conversation",
    kpis: ["Finance led meetings booked", "Time to first ROM Value at Risk", "Conversion to scoping"],
  },
  {
    id: "scoping",
    stage: "B",
    title: "Scoping and Methodology Alignment",
    icon: PenTool,
    primaryUsers: "ClimVar experts with CFO, CRO and CSO sponsors",
    capabilities: [
      "Driver selection across physical, transition and nature risk",
      "Scenario selection anchored on NGFS and IPCC RCP references",
      "Time horizons, granularity and adaptation scope agreed up front",
      "Data inputs and assumptions catalogued for audit",
    ],
    value: "Shared methodology and scope before any number is produced",
    kpis: ["Scoping cycle time", "Stakeholder alignment score", "Methodology sign off"],
  },
  {
    id: "modelling",
    stage: "C",
    title: "Modelling and Value at Risk Production",
    icon: FileText,
    primaryUsers: "ClimVar modelling team with finance and risk reviewers",
    capabilities: [
      "DCF based Climate Value at Risk waterfall per scenario",
      "Revenue, OPEX and COGS impacts modelled out to 2050",
      "Geographic and asset level deep dives where data supports it",
      "Traceable assumptions and uncertainty ranges per driver",
    ],
    value: "A defensible, board ready Climate Value at Risk view",
    kpis: ["Drivers covered", "Scenarios produced", "Review cycles to sign off"],
  },
  {
    id: "adaptation",
    stage: "D",
    title: "Adaptation Framing and SE Offer Hook",
    icon: Truck,
    primaryUsers: "ClimVar advisory plus Schneider Electric offer teams",
    capabilities: [
      "Gross versus net Value at Risk view per adaptation lever",
      "Direct hook from drivers to Schneider Electric energy, efficiency, PPA, supply chain and resilience offers",
      "Quantified abatement of risk per intervention",
      "Prioritisation across sites, suppliers and capital horizons",
    ],
    value: "Adaptation choices ranked on Value at Risk reduction, not narrative",
    kpis: ["SE offer attach rate", "Net Value at Risk reduction", "Adaptation cases delivered"],
  },
  {
    id: "platform",
    stage: "E",
    title: "RA+ ClimVar Activation",
    icon: Monitor,
    primaryUsers: "Finance, risk and sustainability teams on the client side",
    capabilities: [
      "Refreshable scenarios, time horizons and adaptation profiles in product",
      "Portfolio to site drill on the same backbone",
      "Reusable inputs across disclosure, capital and transition planning",
      "Bridge into Carbon Performance, Supply Chain, Climate Risk and Energy products of RA+",
    ],
    value: "From a one off advisory analysis to a living, in product capability",
    kpis: ["Active RA+ ClimVar clients", "Refreshes per client per year", "Cross product attach"],
    foundation: "Quantify and Adapt phases must be stable before RA+ ClimVar takes over the refresh cadence.",
  },
];

export const ECMCapabilityMapping = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="ecm-mapping"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Capability Framework
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            ClimVar Capability Mapping
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Mapping ClimVar capabilities across discovery, scoping, modelling, adaptation framing and RA+ ClimVar activation, so every engagement seeds the platform and every refresh reuses the backbone.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-between mb-12 px-8">
          {journeyStages.map((stage, index) => (
            <div key={stage.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {stage.stage}
                </div>
                <span className="text-xs text-muted-foreground mt-2 text-center max-w-[100px]">
                  {stage.title.split(" and ")[0]}
                </span>
              </div>
              {index < journeyStages.length - 1 && (
                <div className="w-16 xl:w-24 h-0.5 bg-gradient-to-r from-primary to-primary/30 mx-2" />
              )}
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {journeyStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <AccordionItem
                key={stage.id}
                value={stage.id}
                className="glass-card border border-border/50 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {stage.stage}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{stage.title}</h3>
                      <p className="text-sm text-muted-foreground">{stage.primaryUsers}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        ClimVar Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {stage.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Value Delivered
                        </h4>
                        <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg border border-primary/10">
                          {stage.value}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Key Performance Indicators
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.kpis.map((kpi, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border/50"
                            >
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>

                      {stage.foundation && (
                        <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50">
                          <p className="text-xs text-muted-foreground italic">
                            <strong className="text-foreground">Dependency:</strong> {stage.foundation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">End to End ClimVar Journey</h3>
                <p className="text-sm text-muted-foreground">
                  Every stage feeds the next. Discovery frames the financial conversation, scoping locks the methodology, modelling produces the Value at Risk view, adaptation hooks it to Schneider Electric offers, and RA+ ClimVar keeps the model alive across cycles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
