import Footer from "@/components/shared/footer"
import BackendFrontendSection from "@/components/technology/backend"
import CloudMobileSection from "@/components/technology/cloud-mobile"
import DataManagementSection from "@/components/technology/data-management"
import HeroTech from "@/components/technology/hero-tech"
import AiMachineLearningSection from "@/components/technology/ml-section"
import TechnologyCtaSection from "@/components/technology/technology-cta"

const Technologies = () => {
    return (
        <>
        <HeroTech />
        <AiMachineLearningSection />
        <BackendFrontendSection />
        <CloudMobileSection />
        <DataManagementSection />
        <TechnologyCtaSection />
        <Footer />
        </>
    )
}

export default Technologies