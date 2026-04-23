import ExpertiseAcrossErasSection from "@/components/legacy/expertise-era";
import LegacyCTASection from "@/components/legacy/legacy-cta";
import LegacyModernizationHero from "@/components/legacy/legacy-hero";
import ModernizationPathSection from "@/components/legacy/modernization";
import PrecisionAtScaleSection from "@/components/legacy/precision";
import Footer from "@/components/shared/footer";
import GsapReveal from "@/components/shared/gsap-reveal";

const LegacyModernization = () => {
  return (
    <>
      <GsapReveal variant="hero">
        <LegacyModernizationHero />
      </GsapReveal>
      <GsapReveal delay={0.05}>
        <PrecisionAtScaleSection />
      </GsapReveal>
      <GsapReveal delay={0.1}>
        <ModernizationPathSection />
      </GsapReveal>
      <GsapReveal delay={0.15}>
        <ExpertiseAcrossErasSection />
      </GsapReveal>
      <GsapReveal delay={0.2}>
        <LegacyCTASection />
      </GsapReveal>
      <Footer />
    </>
  );
};

export default LegacyModernization;
