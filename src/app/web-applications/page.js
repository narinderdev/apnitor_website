import Footer from "@/components/shared/footer";
import ConnectivitySection from "@/components/web/connectivity";
import EngineeringPhilosophySection from "@/components/web/engineering";
import FluidWebHero from "@/components/web/fluid-web"
import GsapReveal from "@/components/shared/gsap-reveal";
import WebCtaSection from "@/components/web/web-cta";

const Web = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <FluidWebHero />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <EngineeringPhilosophySection />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <ConnectivitySection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <WebCtaSection />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default Web;
