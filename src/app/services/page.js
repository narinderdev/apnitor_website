import CTAService from "@/components/service-page/cta-service"
import DeliveryProcess from "@/components/service-page/Delivery"
import EngagementModels from "@/components/service-page/engagement-models"
import HeroServices from "@/components/service-page/hero-services"
import ServiceCard from "@/components/service-page/service-card"
import FullSpectrumEngineering from "@/components/service-page/spectrum"
import TechnologyStack from "@/components/service-page/technology-stack"
import Footer from "@/components/shared/footer"


const Services = () => {
    return (
        <>
        <HeroServices />
        <ServiceCard />
        <FullSpectrumEngineering />
        <DeliveryProcess />
        <TechnologyStack />
        <EngagementModels />
        <CTAService />
        <Footer />
        </>
    )
}

export default Services