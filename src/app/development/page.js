import Footer from "@/components/shared/footer";
import EfficiencyBuiltSection from "@/components/speedupdevelopment/efficiency-build";
import HeroRoadmap from "@/components/speedupdevelopment/hero-roadmap"
import ImpactSpectrumSection from "@/components/speedupdevelopment/impact-spectrum";
import RapidBuildCtaSection from "@/components/speedupdevelopment/rapid-build";
import VibeProcessSection from "@/components/speedupdevelopment/vibe-process";
import WhySpeedMattersSection from "@/components/speedupdevelopment/why-speed";

const SpeedUpDevelopment = () => {
    return (
        <>
        <HeroRoadmap />
        <VibeProcessSection />
        <ImpactSpectrumSection />
        <WhySpeedMattersSection />
        <EfficiencyBuiltSection />
        <RapidBuildCtaSection />
        <Footer />
        </>
    )
}

export default SpeedUpDevelopment;