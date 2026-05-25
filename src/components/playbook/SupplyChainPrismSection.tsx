import { useEffect, useMemo, useState } from "react";
import { Network, AlertTriangle, Layers, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Prism at scale, illustrated on a supply chain example.
 * Nested green discs (Rank-2 suppliers → Rank-1 → Distribution centers → Plants → Stores → Core),
 * with inward arrow flows that turn red when a disruption cascades, then re-route.
 */
type Phase = "build" | "flow1" | "flow2" | "disrupt" | "reroute";

const PHASES: { p: Phase; label: string; danger?: boolean }[] = [
  { p: "build", label: "Mapping the extended network" },
  { p: "flow1", label: "Rank-2 Suppliers  →  Rank-1 Suppliers" },
  { p: "flow2", label: "Distribution Centers  →  Stores" },
  { p: "disrupt", label: "⚠  Distribution Center disruption (D7)  →  cascades to stores", danger: true },
  { p: "reroute", label: "Prism reroutes  ·  exposure rebalanced" },
];

export const SupplyChainPrismSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [phaseIdx, setPhaseIdx] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => {
      setPhaseIdx((i) => (i + 1) % PHASES.length);
    }, 2600);
    return () => clearInterval(id);
  }, [isVisible]);

  const phase = PHASES[phaseIdx].p;
  const caption = PHASES[phaseIdx];

  // Ring radii (outermost first, like the reference)
  const rings = useMemo(
    () => [
      { r: 440, n: 140, dot: 2.5, fill: "hsl(134 45% 88%)" }, // outer halo
      { r: 380, n: 110, dot: 2.5, fill: "hsl(134 50% 80%)" }, // Rank-2 Suppliers
      { r: 315, n: 80, dot: 2.8, fill: "hsl(134 52% 72%)" }, // Rank-1 Suppliers
      { r: 245, n: 48, dot: 3.2, fill: "hsl(134 55% 64%)" }, // Distribution Centers
      { r: 175, n: 28, dot: 4, fill: "hsl(134 58% 56%)" }, // Plants
      { r: 105, n: 16, dot: 5, fill: "hsl(134 62% 48%)" }, // Stores
    ],
    []
  );

  // Build per-ring dot positions with small color variance
  const dots = useMemo(() => {
    const out: { x: number; y: number; ring: number; idx: number; tint: string }[] = [];
    rings.forEach((ring, ri) => {
      for (let i = 0; i < ring.n; i++) {
        const a = (i / ring.n) * Math.PI * 2 - Math.PI / 2;
        const tints = [
          "hsl(134 55% 35%)",
          "hsl(210 45% 45%)",
          "hsl(30 55% 45%)",
          "hsl(0 0% 25%)",
          "hsl(134 55% 30%)",
        ];
        out.push({
          x: 500 + Math.cos(a) * ring.r,
          y: 500 + Math.sin(a) * ring.r,
          ring: ri,
          idx: i,
          tint: tints[(i * 7 + ri) % tints.length],
        });
      }
    });
    return out;
  }, [rings]);

  // Highlighted hub nodes on each "structural" ring (rings 2..5)
  const hubs = useMemo(() => {
    const out: { x: number; y: number; ring: number; idx: number }[] = [];
    [2, 3, 4, 5].forEach((ri) => {
      const ring = rings[ri];
      const count = ri === 5 ? 6 : ri === 4 ? 7 : 8;
      for (let k = 0; k < count; k++) {
        const i = Math.round((k * ring.n) / count);
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

  // Disruption node on Distribution Centers (ring 3)
  const disruption = useMemo(() => {
    const ring = rings[3];
    const i = 6;
    const a = (i / ring.n) * Math.PI * 2 - Math.PI / 2;
    return { x: 500 + Math.cos(a) * ring.r, y: 500 + Math.sin(a) * ring.r };
  }, [rings]);

  // Flow segments by phase: pair adjacent rings, draw arrows from outer hub → inner hub
  const flowSegments = useMemo(() => {
    const pairs: Record<Phase, [number, number] | null> = {
      build: null,
      flow1: [2, 3], // Rank-1 suppliers → Distribution centers (visually outer→inner)
      flow2: [3, 5], // Distribution centers → Stores
      disrupt: null,
      reroute: [3, 5],
    };
    return pairs;
  }, []);

  const renderFlow = (outer: number, inner: number, color: string, key: string) => {
    const outerHubs = hubs.filter((h) => h.ring === outer);
    const innerHubs = hubs.filter((h) => h.ring === inner);
    const lines: JSX.Element[] = [];
    outerHubs.forEach((o, oi) => {
      // fan from each outer hub to ~3 inner hubs
      for (let k = -1; k <= 1; k++) {
        const t = innerHubs[(oi + k + innerHubs.length) % innerHubs.length];
        lines.push(
          <line
            key={`${key}-${oi}-${k}`}
            x1={o.x}
            y1={o.y}
            x2={t.x}
            y2={t.y}
            stroke={color}
            strokeWidth={1.1}
            strokeDasharray="5 5"
            markerEnd={`url(#arr-${color === "hsl(0 84% 60%)" ? "red" : "green"})`}
            style={{ animation: `dashFlow 1.6s linear infinite` }}
            opacity={0.85}
          />
        );
      }
    });
    return lines;
  };

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
            <span className="text-sm font-medium text-primary">
              Prism at scale · Example: Supply chain
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            One model. Every tier.{" "}
            <span className="text-primary">Disruption seen before it lands.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            An example of how Prism turns an extended network into a single living graph. Rank-2 and
            rank-1 suppliers, distribution centers, plants and stores are connected, scored on
            climate and nature exposure, and continuously re-evaluated as conditions change.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center max-w-7xl mx-auto">
          <div className="relative w-full aspect-square max-w-[720px] mx-auto">
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              <defs>
                <marker
                  id="arr-green"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(134 60% 45%)" />
                </marker>
                <marker
                  id="arr-red"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(0 84% 60%)" />
                </marker>
              </defs>

              {/* Concentric filled discs (outer → inner so inner sits on top) */}
              {rings.map((ring, ri) => (
                <circle
                  key={`disc-${ri}`}
                  cx={500}
                  cy={500}
                  r={ring.r}
                  fill={ring.fill}
                  stroke="hsl(0 0% 100% / 0.85)"
                  strokeWidth={2}
                />
              ))}

              {/* Tiny dots distributed on each ring */}
              {dots.map((d, k) => (
                <circle
                  key={`d-${k}`}
                  cx={d.x}
                  cy={d.y}
                  r={rings[d.ring].dot}
                  fill={d.tint}
                  opacity={phase === "build" ? 0.55 : 0.85}
                  style={{ transition: "opacity 0.6s ease" }}
                />
              ))}

              {/* Hub nodes (slightly larger ringed nodes) */}
              {hubs.map((h, k) => {
                const isDisrupted =
                  (phase === "disrupt" || phase === "reroute") &&
                  Math.abs(h.x - disruption.x) < 1 &&
                  Math.abs(h.y - disruption.y) < 1;
                return (
                  <circle
                    key={`h-${k}`}
                    cx={h.x}
                    cy={h.y}
                    r={6}
                    fill={isDisrupted ? "hsl(0 84% 60%)" : "hsl(0 0% 98%)"}
                    stroke={isDisrupted ? "hsl(0 84% 50%)" : "hsl(210 35% 45%)"}
                    strokeWidth={1.6}
                    style={{
                      filter: isDisrupted
                        ? "drop-shadow(0 0 8px hsl(0 84% 60%))"
                        : undefined,
                      transition: "fill 0.4s ease",
                    }}
                  />
                );
              })}

              {/* Flow lines */}
              {flowSegments[phase] &&
                renderFlow(
                  flowSegments[phase]![0],
                  flowSegments[phase]![1],
                  phase === "reroute" ? "hsl(134 60% 45%)" : "hsl(134 60% 45%)",
                  phase
                )}

              {/* Disruption cascade: from disrupted DC inward through plants to stores */}
              {phase === "disrupt" && (
                <g>
                  {hubs
                    .filter((h) => h.ring === 4 || h.ring === 5)
                    .map((t, k) => (
                      <line
                        key={`dc-${k}`}
                        x1={disruption.x}
                        y1={disruption.y}
                        x2={t.x}
                        y2={t.y}
                        stroke="hsl(0 84% 60%)"
                        strokeWidth={1.3}
                        strokeDasharray="5 5"
                        markerEnd="url(#arr-red)"
                        style={{ animation: `dashFlow 1.2s linear infinite` }}
                        opacity={0.9}
                      />
                    ))}
                  {/* pulsing alert ring */}
                  <circle
                    cx={disruption.x}
                    cy={disruption.y}
                    r={10}
                    fill="none"
                    stroke="hsl(0 84% 60%)"
                    strokeWidth={2}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      animation: "pulseAlert 1.4s ease-out infinite",
                    }}
                  />
                </g>
              )}

              {/* Core */}
              <circle cx={500} cy={500} r={36} fill="hsl(0 0% 8%)" />
              <circle
                cx={500}
                cy={500}
                r={36}
                fill="none"
                stroke="hsl(0 0% 100% / 0.9)"
                strokeWidth={2.5}
              />
              <circle
                cx={500}
                cy={500}
                r={46}
                fill="none"
                stroke="hsl(134 60% 52% / 0.5)"
                strokeWidth={1.5}
                style={{ animation: "pulseRing 2.6s ease-out infinite" }}
              />

              {/* Caption */}
              <text
                x={500}
                y={985}
                textAnchor="middle"
                fontSize={30}
                fontWeight={500}
                fill={caption.danger ? "hsl(0 84% 65%)" : "hsl(0 0% 92%)"}
                style={{ transition: "fill 0.4s ease", fontFamily: "inherit" }}
              >
                {caption.label}
              </text>
            </svg>

            <style>{`
              @keyframes dashFlow { to { stroke-dashoffset: -20; } }
              @keyframes pulseRing {
                0% { transform-origin: 500px 500px; transform: scale(1); opacity: 0.7; }
                100% { transform-origin: 500px 500px; transform: scale(2); opacity: 0; }
              }
              @keyframes pulseAlert {
                0% { transform: scale(1); opacity: 0.9; }
                100% { transform: scale(2.4); opacity: 0; }
              }
            `}</style>
          </div>

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
