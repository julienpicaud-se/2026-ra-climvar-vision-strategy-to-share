import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const glossaryTerms = [
  {
    category: "ClimVar core concepts",
    terms: [
      { abbr: "ClimVar", full: "Climate Value at Risk: financial quantification of climate, transition and nature risk on enterprise value, revenue, OPEX and COGS" },
      { abbr: "RA+ ClimVar", full: "The in product RA+ product that turns the ClimVar methodology into a continuously refreshable capability" },
      { abbr: "DCF", full: "Discounted Cash Flow, the financial modelling backbone of the ClimVar methodology" },
      { abbr: "Gross VaR", full: "Climate Value at Risk before any adaptation measure is applied" },
      { abbr: "Net VaR", full: "Climate Value at Risk after Schneider Electric adaptation measures are deployed" },
      { abbr: "Waterfall", full: "View that decomposes total Value at Risk across drivers, geographies, assets or scenarios" },
    ],
  },
  {
    category: "Risk drivers and scenarios",
    terms: [
      { abbr: "Physical risk", full: "Risk from acute and chronic climate hazards such as floods, heat, drought, storms" },
      { abbr: "Transition risk", full: "Risk from the shift to a low carbon economy: carbon pricing, demand shift, technology, litigation, reputation" },
      { abbr: "Nature risk", full: "Risk from biodiversity loss, water stress and ecosystem dependencies" },
      { abbr: "NGFS", full: "Network for Greening the Financial System, source of reference climate scenarios" },
      { abbr: "IPCC RCP", full: "IPCC Representative Concentration Pathways, reference physical climate scenarios" },
      { abbr: "Business as usual", full: "Scenario where current policies and behaviours continue largely unchanged" },
      { abbr: "Net zero", full: "Scenario aligned with limiting warming to 1.5C by mid century" },
      { abbr: "Worst case", full: "High warming scenario used to size tail exposure" },
    ],
  },
  {
    category: "Disclosure and finance",
    terms: [
      { abbr: "CSRD", full: "Corporate Sustainability Reporting Directive (EU)" },
      { abbr: "IFRS S2", full: "ISSB climate related disclosures standard" },
      { abbr: "TCFD", full: "Task Force on Climate related Financial Disclosures" },
      { abbr: "TNFD", full: "Taskforce on Nature related Financial Disclosures" },
      { abbr: "Impairment", full: "Financial test for write down of asset value, increasingly informed by climate risk" },
      { abbr: "Capital allocation", full: "Decision on where to deploy capital, including resilience and adaptation CAPEX" },
    ],
  },
  {
    category: "Roles and platform",
    terms: [
      { abbr: "RA+", full: "Schneider Electric's integrated platform that hosts ClimVar and adjacent Sustainability and Energy products" },
      { abbr: "RA+ ClimVar", full: "The in product capability that turns ClimVar advisory analyses into a continuously refreshable risk view" },
      { abbr: "ClimVar Advisory", full: "Engagement led delivery of the published ClimVar methodology by SE Advisory Services" },
      { abbr: "CFO", full: "Chief Financial Officer" },
      { abbr: "Financial planner", full: "Finance lead responsible for impairment, capital allocation and forward financial planning" },
      { abbr: "CRO", full: "Chief Risk Officer" },
      { abbr: "CSO", full: "Chief Sustainability Officer" },
      { abbr: "VOC", full: "Voice of Customer" },
      { abbr: "JTBD", full: "Jobs To Be Done" },
    ],
  },
  {
    category: "Financial and modelling",
    terms: [
      { abbr: "VaR", full: "Value at Risk, the financial measure ClimVar produces per scenario, driver and asset" },
      { abbr: "NPV", full: "Net Present Value, the discounted sum of future cash flows used as the ClimVar valuation anchor" },
      { abbr: "OPEX", full: "Operating Expenses, one of the impact lines ClimVar projects under each scenario" },
      { abbr: "COGS", full: "Cost of Goods Sold, modelled in ClimVar to capture supply chain and input cost exposure" },
      { abbr: "CAPEX", full: "Capital Expenditure, the envelope used to size adaptation investment choices in ClimVar" },
      { abbr: "MRIO", full: "Multi Regional Input Output modelling, used in ClimVar for supply chain risk without supplier data collection" },
      { abbr: "ECLR", full: "Schneider Electric internal physical climate risk tool deployed across 100+ SE sites" },
      { abbr: "SSRN", full: "Social Science Research Network, where the ClimVar Discounted Cash Flow methodology is published" },
    ],
  },
];

export const GlossarySection = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms
      .map((group) => ({
        ...group,
        terms: group.terms.filter(
          (t) =>
            t.abbr.toLowerCase().includes(q) ||
            t.full.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.terms.length > 0);
  }, [query]);

  const totalMatches = filtered.reduce((sum, g) => sum + g.terms.length, 0);

  return (
    <section id="glossary" className="px-4 sm:px-6 py-6">
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms (e.g. ClimVar, NGFS, TCFD)..."
          className="pl-9"
          aria-label="Search glossary"
        />
      </div>

      {totalMatches === 0 ? (
        <p className="text-sm text-muted-foreground italic">
          No terms match "{query}".
        </p>
      ) : (
        <div className="space-y-8">
          {filtered.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {group.terms.map((term) => (
                  <div key={term.abbr} className="flex gap-2 text-sm">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      {term.abbr}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{term.full}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
