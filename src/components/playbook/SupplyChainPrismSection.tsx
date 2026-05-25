import { useEffect, useMemo, useRef, useState } from "react";
import { Network, AlertTriangle, Layers, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Animated illustration: Prism for Supply Chain at scale.
 * Concentric rings of suppliers → distribution → stores around a core asset,
 * with a propagating disruption that Prism detects and reroutes.
 */
export const SupplyChainPrismSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [phase, setPhase] = useState<"build" | "flow" | "disrupt" | "reroute">("build");

  useEffect(() => {
    if (!isVisible) return;
    const seq: Array<{ p: typeof phase; t: number }> = [
      { p: "build", t: 0 },
      { p: "flow", t: 2200 },
      { p: "disrupt", t: 5200 },
      { p: "reroute", t: 8200 },
    ];
    const timers = seq.map(({ p, t }) => setTimeout(() => setPhase(p), t));
    const loop = setInterval(() => {
      setPhase("build");
      setTimeout(() => setPhase("flow"), 2200);
      setTimeout(() => setPhase("disrupt"), 5200);
      setTimeout(() => setPhase("reroute"), 8200);
    }, 12000);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, [isVisible]);

  // Ring definitions (radius, count, label)
  const rings = useMemo(
    () => [
      { r: 70, n: 6, label: "Core assets" },
      { r: 130, n: 12, label: "Plants" },
      { r: 200, n: 24, label: "Distribution centers" },
      { r: 280, n: 48, label: "Rank-1 suppliers" },
      { r: 360, n: 96, label: "Rank-2 suppliers" },
    ],
    []
  );

  const nodes = useMemo(() => {
    const out: { x: number; y: number; ring: number; idx: number }[] = [];
    rings.forEach((ring, ri) => {
      for (let i = 0; i < ring.n; i++) {
        const a = (i / ring.n) * Math.PI * 2 - Math.PI / 2;
        out.push({
          x: 500 + Math.cos(a) * ring.r,
          y: 500 + Math.sin(a) * ring.r,
          ring: ri,
          idx: i,
        });
      }
    });
    return out;
  }, [rings]);

  // Pick a disruption node on rank-2 supplier ring
  const disruption = useMemo(() => {
    const ring = 4;
    const idx = 18;
    const a = (idx / rings[ring].n) * Math.PI * 2 - Math.PI / 2;
    return { x: 500 + Math.cos(a) * rings[ring].r, y: 500 + Math.sin(a) * rings[ring].r };
  }, [rings]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 section-fade relative overflow-hidden ${isVisible ? "visible" : ""}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
        }}
      />
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Prism at scale · Supply chain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            One model. Every tier.{" "}
            <span className="text-primary">Disruption seen before it lands.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Prism turns the extended supply chain into a single living graph. Core assets, plants,
            distribution centers, rank-1 and rank-2 suppliers are connected, scored on climate and
            nature exposure, and continuously re-evaluated as conditions change.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center max-w-7xl mx-auto">
          {/* Animated SVG illustration */}
          <div className="relative w-full aspect-square max-w-[640px] mx-auto">
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              <defs>
                <radialGradient id="ringFill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(134 60% 52%)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(134 60% 52%)" stopOpacity="0.04" />
                </radialGradient>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(134 60% 52%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(134 60% 52%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ring backgrounds */}
              {rings
                .slice()
                .reverse()
                .map((ring, i) => (
                  <circle
                    key={`bg-${i}`}
                    cx={500}
                    cy={500}
                    r={ring.r + 18}
                    fill="url(#ringFill)"
                    opacity={0.35 + i * 0.06}
                  />
                ))}

              {/* Ring guide circles */}
              {rings.map((ring, i) => (
                <circle
                  key={`g-${i}`}
                  cx={500}
                  cy={500}
                  r={ring.r}
                  fill="none"
                  stroke="hsl(134 60% 52% / 0.18)"
                  strokeWidth={1}
                />
              ))}

              {/* Flow arcs between rings (animate during flow / reroute) */}
              {phase !== "build" &&
                nodes
                  .filter((n) => n.ring < rings.length - 1 && n.idx % 2 === 0)
                  .map((n, k) => {
                    const inner = rings[n.ring];
                    const a = (n.idx / inner.n) * Math.PI * 2 - Math.PI / 2;
                    const x2 = 500 + Math.cos(a) * rings[n.ring + 1].r;
                    const y2 = 500 + Math.sin(a) * rings[n.ring + 1].r;
                    return (
                      <line
                        key={`f-${k}`}
                        x1={n.x}
                        y1={n.y}
                        x2={x2}
                        y2={y2}
                        stroke="hsl(134 60% 52% / 0.35)"
                        strokeWidth={0.8}
                        style={{
                          strokeDasharray: 6,
                          animation: `dashFlow 2.4s linear infinite`,
                          animationDelay: `${(k % 12) * 0.08}s`,
                        }}
                      />
                    );
                  })}

              {/* Disruption cascade lines */}
              {(phase === "disrupt" || phase === "reroute") && (
                <g>
                  {nodes
                    .filter((n) => n.ring >= 2 && n.ring <= 3)
                    .slice(0, 20)
                    .map((n, k) => (
                      <line
                        key={`d-${k}`}
                        x1={disruption.x}
                        y1={disruption.y}
                        x2={n.x}
                        y2={n.y}
                        stroke={phase === "reroute" ? "hsl(134 60% 52% / 0.55)" : "hsl(0 84% 60% / 0.7)"}
                        strokeWidth={1}
                        style={{
                          animation: `dashFlow 1.6s linear infinite`,
                          strokeDasharray: 4,
                        }}
                      />
                    ))}
                </g>
              )}

              {/* Nodes */}
              {nodes.map((n, k) => {
                const isDisruption =
                  (phase === "disrupt" || phase === "reroute") &&
                  Math.abs(n.x - disruption.x) < 2 &&
                  Math.abs(n.y - disruption.y) < 2;
                const sizes = [6, 5, 4.5, 3.5, 2.5];
                return (
                  <circle
                    key={`n-${k}`}
                    cx={n.x}
                    cy={n.y}
                    r={sizes[n.ring]}
                    fill={
                      isDisruption
                        ? "hsl(0 84% 60%)"
                        : n.ring === 0
                          ? "hsl(134 60% 60%)"
                          : "hsl(134 40% 70%)"
                    }
                    opacity={phase === "build" ? 0.4 + (4 - n.ring) * 0.12 : 0.9}
                    style={{
                      transition: "opacity 0.6s ease, fill 0.6s ease",
                      filter: isDisruption
                        ? "drop-shadow(0 0 6px hsl(0 84% 60%))"
                        : n.ring === 0
                          ? "drop-shadow(0 0 4px hsl(134 60% 52%))"
                          : undefined,
                    }}
                  />
                );
              })}

              {/* Core */}
              <circle cx={500} cy={500} r={32} fill="url(#coreGlow)" />
              <circle
                cx={500}
                cy={500}
                r={14}
                fill="hsl(134 60% 52%)"
                style={{ filter: "drop-shadow(0 0 10px hsl(134 60% 52%))" }}
              />
              <circle
                cx={500}
                cy={500}
                r={22}
                fill="none"
                stroke="hsl(134 60% 52% / 0.6)"
                strokeWidth={1.2}
                style={{ animation: "pulseRing 2.4s ease-out infinite" }}
              />

              {/* Caption */}
              <text
                x={500}
                y={970}
                textAnchor="middle"
                fontSize={26}
                fill={phase === "disrupt" ? "hsl(0 84% 70%)" : "hsl(0 0% 85%)"}
                style={{ transition: "fill 0.4s ease", fontFamily: "inherit" }}
              >
                {phase === "build" && "Mapping the extended network"}
                {phase === "flow" && "Plants  →  Distribution  →  Stores"}
                {phase === "disrupt" && "⚠  Rank-2 supplier shock  →  cascading risk"}
                {phase === "reroute" && "Prism reroutes  ·  exposure rebalanced"}
              </text>
            </svg>

            <style>{`
              @keyframes dashFlow {
                to { stroke-dashoffset: -24; }
              }
              @keyframes pulseRing {
                0% { transform-origin: 500px 500px; transform: scale(1); opacity: 0.7; }
                100% { transform-origin: 500px 500px; transform: scale(2.2); opacity: 0; }
              }
            `}</style>
          </div>

          {/* Value prop */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">A single graph of the whole chain</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prism unifies own sites, suppliers and logistics into one model. Climate, transition
                and nature drivers are scored at every node, with the same methodology from the
                boardroom view down to a single component.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/15 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold">Cascades caught early</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A drought at a rank-2 supplier, a flooded distribution centre, a heat wave on a
                logistics corridor. Prism propagates the shock through the network and shows where
                revenue, margin and service levels are exposed.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Adaptation as a capital decision</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diversify suppliers, harden a site, qualify an alternate route. Each option is
                quantified as avoided loss and resilience gained, so procurement, operations and
                finance act from the same evidence at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
