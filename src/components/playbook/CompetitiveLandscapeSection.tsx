import { Building2, Check, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const players = [
  {
    name: "ERM",
    scope: "GLOBAL",
    note: "Largest pure-play sustainability consultancy with deep climate and transition advisory, but no proprietary platform that turns engagement IP into a continuous client data layer.",
  },
  {
    name: "Accenture / Deloitte Sustainability",
    scope: "GLOBAL",
    note: "Strong transformation reach and regulatory advisory, yet decarbonization methodology lives in decks and partner tools rather than a productized platform.",
  },
  {
    name: "Watershed",
    scope: "GLOBAL",
    note: "Modern carbon accounting and disclosure software with strong Scope 3, but limited assurance-grade methodology IP and no advisory bench at GSP scale.",
  },
  {
    name: "Persefoni",
    scope: "GLOBAL",
    note: "Climate management platform built for finance and disclosure workflows. Thin on operational decarbonization guidance and supplier engagement depth.",
  },
  {
    name: "Sweep / Salesforce Net Zero Cloud",
    scope: "GLOBAL",
    note: "Suite-aligned carbon and ESG modules. Good reporting workflow coverage, but limited methodology depth and no integrated advisory practice.",
  },
  {
    name: "EcoVadis / CDP",
    scope: "GLOBAL",
    note: "Trusted supplier rating and disclosure networks. They sit alongside our offer rather than competing with embedded sustainability advisory inside RA+.",
  },
];

const whyWeWin = [
  "GSP advisory plus RA+ platform, not a slideware-only consultancy or a reporting-only software product",
  "#1-ranked sustainability practice (400+ experts, 7,500+ projects, 426.54M tCO2 managed, 2,000+ carbon footprints) feeding the platform with real engagement IP",
  "Covers 3 of 8 SE Advisory Services families end-to-end: Sustainable Business Transformation, Sustainable Supply Chain, Risk Management & Resilience",
  "Client emissions and operational data blended with GSP methodology as a trusted context layer pure software players cannot reach",
  "Decades of advisory IP reactivated as structured, reusable decarbonization intelligence inside the product",
  "Sera as a unified guided interface reasoning over RA+ sustainability data across CSOs, Sustainability Leads, Data Ops, and Procurement",
  "Three engagement profiles (self-serve, expert-supported, fully-managed) on a single sustainability-powered platform, opening segments competitors cannot serve",
  "Assurance-ready methodologies (GHG Protocol, SBTi, CSRD, ISSB) governed centrally instead of rebuilt per engagement",
  "NTBS offsetting (400+ projects, 55+ countries, 200+ local partners) pulled into the same workflow, closing the loop from disclosure to action",
];

const accreditations = [
  { name: "CDP Accredited Provider Gold", detail: "15 consecutive years" },
  { name: "SBTi Expert Advisory Group", detail: "Active member" },
  { name: "ICROA", detail: "Founding member" },
  { name: "MSCI ESG Ratings AAA", detail: "Schneider Electric" },
  { name: "PCAF Accredited Partner", detail: "2025" },
  { name: "GRESB Premier Partner", detail: "Real Estate & Infrastructure" },
  { name: "Gold Standard", detail: "Strategic partner for the Global Goals" },
  { name: "Dow Jones Sustainability Indices", detail: "13 consecutive years" },
  { name: "Ethisphere World's Most Ethical", detail: "14 consecutive years" },
  { name: "TIME World's Most Sustainable", detail: "2025" },
];


export const CompetitiveLandscapeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="competitive-landscape"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
            Competitive Landscape
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Serious Players, Differentiated Position
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Credible competitors exist across sustainability advisory, carbon accounting software, and suite-aligned ESG plays. Our differentiator is the world's #1-ranked GSP practice paired with RA+ as a living sustainability data and recommendation engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {players.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border/50 bg-muted/20 p-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-muted/60 border border-border/50 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">{p.name}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.scope}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Why We Win</h3>
          <p className="italic text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
            Not just a consultancy. Not just a reporting tool. A governed GSP capability inside RA+ that compounds value with every engagement, every disclosure cycle, and every client.
          </p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
            {whyWeWin.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">External Validation & Accreditations</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-5 max-w-3xl">
            Independent recognition that underwrites the credibility GSP brings to every RA+ engagement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {accreditations.map((a) => (
              <div key={a.name} className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-muted/20 p-3">
                <Check className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{a.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
