import ErpCapabilitiesSection from "@/components/erp-page/erp-capabilities";
import FinalCtaSection from "@/components/erp-page/final-cta";
import FluidErpHero from "@/components/erp-page/fluid-erp"
import FunctionalPillarsSection from "@/components/erp-page/functional-pillar";
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer";

const Erp = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <FluidErpHero />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <FunctionalPillarsSection />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <ErpCapabilitiesSection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <FinalCtaSection />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default Erp;
