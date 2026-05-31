import { useState } from "react";
import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { PlatformShiftSection } from "@/components/playbook/PlatformShiftSection";
import { ProductScopeSection } from "@/components/playbook/ProductScopeSection";
import { PersonasSection } from "@/components/playbook/PersonasSection";
import { JobsToBeDoneSection } from "@/components/playbook/JobsToBeDoneSection";
import { VOCEvidenceSection } from "@/components/playbook/VOCEvidenceSection";
import { SECorporateBlueprintSection } from "@/components/playbook/SECorporateBlueprintSection";
import { PainInventorySection } from "@/components/playbook/PainInventorySection";
import { KeyChallengesSection } from "@/components/playbook/KeyChallengesSection";
import { StrategicPillars } from "@/components/playbook/StrategicPillars";
import { ExistingToolsSection } from "@/components/playbook/ExistingToolsSection";
import { RAPlusPlatformFoundationSection } from "@/components/playbook/RAPlusPlatformFoundationSection";
import { PrismNameSection } from "@/components/playbook/PrismNameSection";

import { ECMIngestionEngineSection } from "@/components/playbook/ECMIngestionEngineSection";
import { StrategicContextSection } from "@/components/playbook/StrategicContextSection";
import { WhatIfSection } from "@/components/playbook/WhatIfSection";
import { BoundariesSection } from "@/components/playbook/BoundariesSection";
import { SuccessMetricsSection } from "@/components/playbook/SuccessMetricsSection";
import { JumpToTop } from "@/components/playbook/JumpToTop";
import { ECMCapabilityMapping } from "@/components/playbook/ECMCapabilityMapping";

import { MaturityLadderSection } from "@/components/playbook/MaturityLadderSection";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { GlossarySection } from "@/components/playbook/GlossarySection";
import { PhasingSection } from "@/components/playbook/PhasingSection";

import { OperatingModelSection } from "@/components/playbook/OperatingModelSection";
import { DataRequirementsSection } from "@/components/playbook/DataRequirementsSection";
import { StartStopMatrix } from "@/components/playbook/StartStopMatrix";
import { KeyObjectivesSection } from "@/components/playbook/KeyObjectivesSection";
import { KeyChallengesGridSection } from "@/components/playbook/KeyChallengesGridSection";
import { StrategicContextHighlight } from "@/components/playbook/StrategicContextHighlight";
import { MarketContextSection } from "@/components/playbook/MarketContextSection";
import { ClientPainEngagementSection } from "@/components/playbook/ClientPainEngagementSection";
import { ExpertServicesSection } from "@/components/playbook/ExpertServicesSection";
import { SupplyChainPrismSection } from "@/components/playbook/SupplyChainPrismSection";

import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
import { PresentationMode } from "@/components/playbook/PresentationMode";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const Index = () => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Navigation onPresentationMode={() => setIsPresentationMode(true)} />
      <PresentationMode
        isActive={isPresentationMode}
        onClose={() => setIsPresentationMode(false)}
      />
      <HeroSection />
      <ExecutiveSummary />
      <PrismNameSection />
      <StrategicContextHighlight />
      <MarketContextSection />
      {/* Problem */}
      <KeyChallengesGridSection />
      <ClientPainEngagementSection />
      {/* Vision */}
      <WhatIfSection />
      {/* Why */}
      <PlatformShiftSection />
      <KeyChallengesSection />
      {/* Who */}
      <PersonasSection />
      <JobsToBeDoneSection />
      {/* Response */}
      <StrategicPillars />
      <KeyObjectivesSection />
      {/* How – RA+ Prism Foundation cluster */}
      <ExistingToolsSection />
      <RAPlusPlatformFoundationSection />
      <ECMCapabilityMapping />
      
      
      <OperatingModelSection />
      <ExpertServicesSection />
      {/* Delivery */}
      <PhasingSection />
      <MaturityLadderSection />
      {/* Guardrails */}
      <SuccessMetricsSection />
      <StartStopMatrix />
      {/* Prism at scale illustration */}
      <SupplyChainPrismSection />
      {/* Close */}
      <ExecutiveTakeaway />
      {/* Appendix (reference, last) */}
      <AppendixSection />
      <JumpToTop />
    </div>
  );
};

export default Index;
