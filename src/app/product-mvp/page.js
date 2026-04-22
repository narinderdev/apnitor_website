import AudienceSplitSection from "@/components/mvp/audience-split";
import CtaBannerSection from "@/components/mvp/cta-banner";
import HeroVelocitySection from "@/components/mvp/hero-velocity";
import MvpFrameworkSection from "@/components/mvp/mvp-framework";
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer";

const ProductMvp = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <HeroVelocitySection />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <MvpFrameworkSection />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <AudienceSplitSection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <CtaBannerSection />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default ProductMvp;
