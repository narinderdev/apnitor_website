import ErpCapabilitiesSection from "@/components/erp-page/erp-capabilities";
import FinalCtaSection from "@/components/erp-page/final-cta";
import FluidErpHero from "@/components/erp-page/fluid-erp"
import FunctionalPillarsSection from "@/components/erp-page/functional-pillar";
import Footer from "@/components/shared/footer";

const Erp = () => {
    return (
        <>
        <FluidErpHero />
        <FunctionalPillarsSection />
        <ErpCapabilitiesSection />
        <FinalCtaSection />
        <Footer />
        </>
    )
}

export default Erp;