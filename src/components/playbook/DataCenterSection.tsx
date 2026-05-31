import { Card, CardContent } from "@/components/ui/card";
import { Server, Zap, TrendingDown, Globe2, ShieldCheck, LineChart, Network, AlertTriangle, Building2, Wind } from "lucide-react";

const headlineStats = [
  { value: "$388B", label: "Unpriced climate ClimVaR", detail: "Conservative lower bound on installed base" },
  { value: "38.3%", label: "of $1,012B Enterprise Value", detail: "Climate risk hidden inside today's data center EV" },
  { value: "8,572", label: "Facilities · 90.8 GW · 120 countries", detail: "Installed base mapped, plus 4,633 prospective AI-era sites" },
  { value: "30 to 39%", label: "ClimVaR cut via proactive adaptation", detail: "Every modeled lever is NPV positive on the MAC curve" },
];

const aiVsLegacy = [
  {
    label: "Legacy installed base",
    physical: "28%",
    carbon: "55%",
    other: "17%",
    note: "Carbon and transition costs dominate. Risk profile is policy and price driven.",
  },
  {
    label: "AI-tier prospective sites",
    physical: "94%",
    carbon: "6%",
    other: "0%",
    note: "Hazard amplification of 2.6 times per GW. Physical risk flips to the dominant driver.",
  },
];

const channels = [
  {
    icon: Wind,
    title: "Hazard exposure at the site",
    body: "Heat, water stress, flood and storm hit cooling, uptime and capex schedules. SE on-site power, cooling and resilience offers map directly to this channel.",
  },
  {
    icon: Network,
    title: "Upstream supply-chain interruption",
    body: "Over 90% of business-interruption risk sits upstream through Leontief propagation. Prism's supply-chain graph surfaces tier-2 fragility before it cascades.",
  },
  {
    icon: Zap,
    title: "Grid and power continuity",
    body: "Climate-driven grid stress reshapes PPA economics and on-site generation choices. SE energy, microgrid and PPA advisory plug in here.",
  },
  {
    icon: TrendingDown,
    title: "Transition and carbon cost",
    body: "Carbon pricing, electrification mandates and demand shifts remain material on the legacy base. SE efficiency, decarbonisation and electrification offers address this channel.",
  },
];

const macActions = [
  "On-site cooling redesign",
  "Water re-use and dry cooling",
  "Hardened grid connection",
  "Microgrid + storage",
  "On-site PPA",
  "Energy efficiency retrofit",
  "Supplier diversification",
  "Tier-2 mapping and monitoring",
  "Site relocation screening",
  "Adaptive capex sequencing",
];

export const DataCenterSection = () => {
  return (
    <div className="space-y-8 px-4 py-6">
      {/* Intro */}
      <div className="max-w-3xl">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
          <Server className="w-4 h-4" />
          Sector deep dive · Data Centers
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
          The Repricing of Compute
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The first full ClimVaR application on a sector. Built from 8,572 installed facilities and 4,633
          prospective AI-era sites, the analysis prices climate risk into enterprise value and shows that
          adaptation is consistently NPV-positive. Source: Paccou and Epelbaum, April 2026.
        </p>
      </div>

      {/* Headline stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {headlineStats.map((s) => (
          <Card key={s.label} className="bg-card border-border/60">
            <CardContent className="p-5">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-foreground mb-2">{s.label}</div>
              <p className="text-xs text-muted-foreground leading-snug">{s.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI vs Legacy */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-primary" />
          <h4 className="text-base font-bold text-foreground">The AI tier flips the risk profile</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {aiVsLegacy.map((row) => (
            <Card key={row.label} className="bg-card border-border/60">
              <CardContent className="p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{row.label}</div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div>
                    <div className="text-xl font-bold text-primary">{row.physical}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Physical</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{row.carbon}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Carbon</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground/70">{row.other}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Other</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{row.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Geography note */}
      <Card className="bg-muted/30 border-border/50">
        <CardContent className="p-5 flex items-start gap-3">
          <Globe2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Geography drives channel mix more than magnitude</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The total ClimVaR envelope is remarkably stable across regions. What changes is which channel
              dominates: physical hazard in APAC and the US South, transition cost in EU and Northeast US,
              upstream interruption in markets with concentrated tier-2 suppliers.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 4 channels SE addresses */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-4 h-4 text-primary" />
          <h4 className="text-base font-bold text-foreground">SE's portfolio maps onto all four risk channels</h4>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="bg-card border-border/60">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-foreground mb-1">{c.title}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* MAC curve */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <LineChart className="w-4 h-4 text-primary" />
            <h4 className="text-base font-bold text-foreground">
              Marginal abatement: 10 actions, all below $1 break-even
            </h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Every modeled adaptation lever protects roughly $150B of EV and sits below the $1.00 break-even
            line on the MAC curve. Adaptation here is not a cost; it is the cheapest defended dollar of
            enterprise value in the sector.
          </p>
          <div className="flex flex-wrap gap-2">
            {macActions.map((a) => (
              <span
                key={a}
                className="text-[11px] px-2.5 py-1 rounded-full bg-background/60 border border-primary/30 text-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Closing */}
      <Card className="border-border/60 bg-card">
        <CardContent className="p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed italic">
            Data centers are the proof point. One ClimVaR run reprices the asset base, flips the AI-tier
            risk story, and converts every SE offer into a quantified EV defense. The same engine generalises
            to any capital-intensive sector.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
