import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MenuCards from "./components/MenuCards";
import Benefits from "./components/Benefits";
import TargetAudience from "./components/TargetAudience";
import DeliveryArea from "./components/DeliveryArea";
import Pricing from "./components/Pricing";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <MenuCards />
        <Benefits />
        <TargetAudience />
        <DeliveryArea />
        <Pricing />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
