import ArchitecturalPillars from "@/components/cloud/architecture-pillar"
import AutomationFoundationSection from "@/components/cloud/automation-foundation"
import CloudCtaSection from "@/components/cloud/cloud-cta"
import CloudDevopsHero from "@/components/cloud/cloud-hero"
import GsapReveal from "@/components/shared/gsap-reveal";
import Footer from "@/components/shared/footer"

const CloudDevops = () => {
    return (
        <>
        <GsapReveal variant="hero">
          <CloudDevopsHero />
        </GsapReveal>
        <GsapReveal delay={0.05}>
          <ArchitecturalPillars />
        </GsapReveal>
        <GsapReveal delay={0.1}>
          <AutomationFoundationSection />
        </GsapReveal>
        <GsapReveal delay={0.15}>
          <CloudCtaSection />
        </GsapReveal>
        <Footer />
        </>
    )
}

export default CloudDevops
