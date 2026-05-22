import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ExecutiveTakeaway = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="takeaway"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-24 section-fade relative overflow-hidden ${isVisible ? "visible" : ""}`}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
        }}
      />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 sm:mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Executive Takeaway</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-foreground">
            Climate risk in{" "}
            <span className="text-primary">financial terms</span>, adaptation as an investment, and a living view in RA+ ClimVar.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12">
            ClimVar advisory delivers the first Climate Value at Risk analysis and sizes the adaptation case in Schneider Electric solutions. RA+ ClimVar turns that work into a continuous, in product capability finance, risk and sustainability teams share, refresh and reuse.
          </p>

          <Button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-border/30">
        <div className="container px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 ClimVar • Financial Risk Quantification • Internal Only and Confidential
          </p>
        </div>
      </div>
    </section>
  );
};
