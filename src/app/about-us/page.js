import BriefFacts from "@/components/about/brief-facts"
import HeroAbout from "@/components/about/hero-about"
import Vision from "@/components/about/vision"
import WhyUs from "@/components/about/why-us"
import ClientsSection from "@/components/home-tab/clients-section"
import Footer from "@/components/shared/footer"

const AboutUs = () => {
    return (
        <>
        <HeroAbout />
        <BriefFacts />
        <Vision />
        <WhyUs />
        <ClientsSection />
        <Footer />
        </>
    )
}

export default AboutUs