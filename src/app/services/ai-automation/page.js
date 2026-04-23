import AiFirstHero from "@/components/ai-spectrum/ai-hero";
import AutomationStackSection from "@/components/ai-spectrum/automation-stack";
import PhilosophySection from "@/components/ai-spectrum/philosophy-section";
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer";

const AiAutomation = () => {
  return (
    <>
      <GsapReveal variant="hero">
        <AiFirstHero />
      </GsapReveal>
      <GsapReveal delay={0.05}>
        <AutomationStackSection />
      </GsapReveal>
      <GsapReveal delay={0.1}>
        <PhilosophySection />
      </GsapReveal>
      <Footer />
    </>
  );
};

export default AiAutomation;
