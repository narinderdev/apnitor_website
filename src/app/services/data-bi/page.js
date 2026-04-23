import CoreArchitectureSection from "@/components/data/core-architecture";
import DataCTASection from "@/components/data/data-cta";
import DataBISection from "@/components/data/databi-section";
import PrecisionMandateSection from "@/components/data/precision-madate";
import Footer from "@/components/shared/footer";
import GsapReveal from "@/components/shared/gsap-reveal";

const DataBi = () => {
  return (
    <>
      <GsapReveal variant="hero">
        <DataBISection />
      </GsapReveal>
      <GsapReveal delay={0.05}>
        <CoreArchitectureSection />
      </GsapReveal>
      <GsapReveal delay={0.1}>
        <PrecisionMandateSection />
      </GsapReveal>
      <GsapReveal delay={0.15}>
        <DataCTASection />
      </GsapReveal>
      <Footer />
    </>
  );
};

export default DataBi;
