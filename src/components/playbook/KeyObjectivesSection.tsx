import { useState } from "react";
import { Target, ChevronDown, Layers, LineChart, Sparkles, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const keyObjectives = [
  {
    id: "O1",
    tag: "Quantify",
    tagIcon: Layers,
    title: "Establish ClimVar as the integrated financial view of climate and nature risk",
    description:
      "Combine physical, transition and nature drivers into a single Climate Value at Risk per scenario, anchored on a published DCF methodology and public scenario references.",
    keyResults: [
      "Six risk drivers in production: four physical, two transition, with nature wired into the same waterfall",
      "Scenarios anchored on NGFS and IPCC RCP references for full auditability",
      "Variable granularity from country and sector down to site and supplier level",
    ],
  },
  {
    id: "O2",
    tag: "Adapt",
    tagIcon: LineChart,
    title: "Turn risk reduction into investment options tied to Schneider Electric offers",
    description:
      "Move clients from awareness to action by sizing gross versus net Value at Risk after Schneider Electric adaptation measures across energy, efficiency, supply chain and resilience.",
    keyResults: [
      "Gross to net Value at Risk view operational across the main adaptation levers",
      "Adaptation library connected to the Schneider Electric offer catalogue",
      "Site and supply chain deep dive paths productised for the highest impact interventions",
    ],
  },
  {
    id: "O3",
    tag: "Automate",
    tagIcon: Sparkles,
    title: "Industrialise ClimVar inside RA+ as a recurring product",
    description:
      "Take the methodology out of decks and into RA+ Prism so clients refresh scenarios on demand, drill from portfolio to site, and reuse the same backbone across disclosure, capital and transition planning cycles.",
    keyResults: [
      "RA+ Prism product live with refreshable scenarios, horizons and adaptation profiles",
      "Lower marginal cost on every additional Climate Value at Risk refresh",
      "Cross sell into Carbon Performance, Supply Chain, Climate Risk and Energy products",
    ],
  },
  {
    id: "O4",
    tag: "Finance Entry",
    tagIcon: DollarSign,
    title: "Make finance the entry door for the climate conversation",
    description:
      "Position ClimVar so every first conversation starts with the financial framing and sustainability follows. The buyer set spans CFO, CRO, CSO and operational leaders on the same Value at Risk backbone.",
    keyResults: [
      "First meetings led by Climate Value at Risk framing, not qualitative heatmaps",
      "Shared one number view used by finance, risk and sustainability teams",
      "ClimVar outputs reused in impairment, capital allocation and disclosure work",
    ],
  },
];

export const KeyObjectivesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section
      id="key-objectives"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Goals and Key Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Key Objectives
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Four objectives that operationalise the Quantify, Adapt and Automate pillars across ClimVar advisory and RA+ Prism.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {keyObjectives.map((obj) => {
            const TagIcon = obj.tagIcon;
            const isOpen = openItems.includes(obj.id);
            return (
              <Collapsible key={obj.id} open={isOpen} onOpenChange={() => toggle(obj.id)}>
                <div className="rounded-xl bg-muted/30 border border-border/50 overflow-hidden">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-5 sm:p-6 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-primary font-semibold text-sm">{obj.id}</span>
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/30 text-xs"
                            >
                              <TagIcon className="w-3 h-3 mr-1" />
                              {obj.tag}
                            </Badge>
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">
                            {obj.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-5 sm:px-6 pb-6 space-y-4 border-t border-border/30 pt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {obj.description}
                      </p>
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          Key Results
                        </h4>
                        <ul className="space-y-2">
                          {obj.keyResults.map((kr, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 bg-muted/40 rounded-lg border border-border/30 p-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <p className="text-sm text-foreground leading-relaxed">{kr}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};
