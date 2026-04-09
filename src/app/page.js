import ClientsSection from "@/components/home-tab/clients-section";
import CTASection from "@/components/home-tab/cta-section";
import FaqSection from "@/components/home-tab/faq-section";
import HeroHome from "@/components/home-tab/hero-home";
import Industries from "@/components/home-tab/industries";
import SoftwareServices from "@/components/home-tab/software-services";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <HeroHome />
      <SoftwareServices />
      <Industries />
      <ClientsSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </>
  );
}