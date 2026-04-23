import CaseStudiesHero from "@/components/case-studies/case-hero";
import EnterpriseSystemsSection from "@/components/case-studies/enterprise-system";
import MarketplacesSaasSection from "@/components/case-studies/marketplaces";
import MobileSpecializedSection from "@/components/case-studies/mobile-specialised";
import AndMuchMoreSection from "@/components/case-studies/much-more";
import Footer from "@/components/shared/footer";
import GsapReveal from "@/components/shared/gsap-reveal";

const Portfolio = () => {
  return (
    <>
      <GsapReveal variant="hero">
        <CaseStudiesHero />
      </GsapReveal>
      <GsapReveal delay={0.05}>
        <EnterpriseSystemsSection />
      </GsapReveal>
      <GsapReveal delay={0.1}>
        <MarketplacesSaasSection />
      </GsapReveal>
      <GsapReveal delay={0.15}>
        <MobileSpecializedSection />
      </GsapReveal>
      <GsapReveal delay={0.2}>
        <AndMuchMoreSection />
      </GsapReveal>
        <Footer />
    </>
  );
};

export default Portfolio;
