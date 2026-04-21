import ArchitecturalPillars from "@/components/cloud/architecture-pillar"
import AutomationFoundationSection from "@/components/cloud/automation-foundation"
import CloudCtaSection from "@/components/cloud/cloud-cta"
import CloudDevopsHero from "@/components/cloud/cloud-hero"
import Footer from "@/components/shared/footer"

const CloudDevops = () => {
    return (
        <>
        <CloudDevopsHero />
        <ArchitecturalPillars />
        <AutomationFoundationSection />
        <CloudCtaSection />
        <Footer />
        </>
    )
}

export default CloudDevops