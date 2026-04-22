import FinalCtaBanner from "@/components/apps/app-cta";
import LifecycleSection from "@/components/apps/lifecycle";
import MobileEcosystemsHero from "@/components/apps/mobile-hero";
import EngineeredVersatilitySection from "@/components/apps/versality";
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer";

const MobileApps = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <MobileEcosystemsHero />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <EngineeredVersatilitySection />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <LifecycleSection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <FinalCtaBanner />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default MobileApps;
