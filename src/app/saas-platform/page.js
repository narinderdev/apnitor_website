import ArchitecturalIntegrity from "@/components/saas/architectural-integrity";
import FluidAdvantageSection from "@/components/saas/fluid-advantage";
import SaasPlatformsHero from "@/components/saas/saas-hero"
import ScaleVisionCta from "@/components/saas/scale-vision";
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer";

const Saas = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <SaasPlatformsHero />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <ArchitecturalIntegrity />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <FluidAdvantageSection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <ScaleVisionCta />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default Saas;
