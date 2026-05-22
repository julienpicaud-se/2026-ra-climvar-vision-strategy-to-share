import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const glossaryTerms = [
  {
    category: "Sustainability domain",
    terms: [
      { abbr: "GSP", full: "Global Sustainability Practice (Schneider Electric's sustainability advisory business)" },
      { abbr: "GHG Protocol", full: "Greenhouse Gas Protocol (corporate accounting and reporting standard)" },
      { abbr: "SBTi", full: "Science Based Targets initiative" },
      { abbr: "CSRD", full: "Corporate Sustainability Reporting Directive (EU)" },
      { abbr: "ISSB", full: "International Sustainability Standards Board" },
      { abbr: "CDP", full: "Carbon Disclosure Project" },
      { abbr: "TCFD", full: "Task Force on Climate-related Financial Disclosures" },
      { abbr: "TNFD", full: "Taskforce on Nature-related Financial Disclosures" },
      { abbr: "PCAF", full: "Partnership for Carbon Accounting Financials" },
      { abbr: "ISO 14064", full: "Standard for GHG inventories and verification" },
      { abbr: "ISSA 5000", full: "Sustainability assurance standard" },
      { abbr: "NTBS", full: "Nature-based and Technology-based Solutions (offsetting)" },
      { abbr: "tCO2", full: "Tonnes of carbon dioxide equivalent" },
      { abbr: "Scope 1 / 2 / 3", full: "Direct, energy-related, and value-chain emissions categories" },
    ],
  },
  {
    category: "RA+ platform & technology",
    terms: [
      { abbr: "RA+", full: "Resource Advisor Plus (Schneider Electric's sustainability platform)" },
      { abbr: "Sustainability graph", full: "Shared semantic data spine connecting entities, emissions, targets, and lineage" },
      { abbr: "EF library", full: "Emission Factor library with automated matching to activity data" },
      { abbr: "Lineage", full: "End-to-end traceability from source data through calculations to disclosures" },
      { abbr: "SERA", full: "RA+ agentic assistant guiding sustainability workflows" },
      { abbr: "Ingest & transform", full: "Governed pipelines for onboarding and normalizing client data" },
      { abbr: "AI quality system", full: "Evaluation harness and feedback loops governing agent outputs" },
      { abbr: "Zeigo / ZCP", full: "Schneider Electric sustainability tools connected to RA+" },
      { abbr: "Unified / Proactive / Adaptive", full: "The three RA+ platform pillars" },
    ],
  },
  {
    category: "Product / Delivery",
    terms: [
      { abbr: "VOC", full: "Voice of Customer" },
      { abbr: "JTBD", full: "Jobs To Be Done" },
      { abbr: "CSO", full: "Chief Sustainability Officer" },
      { abbr: "CoE", full: "Center of Excellence" },
      { abbr: "PoC", full: "Proof of Concept" },
      { abbr: "SLA", full: "Service Level Agreement" },
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
          placeholder="Search terms (e.g. SBTi, SERA, EF library)..."
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
