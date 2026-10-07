import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EnquiryCallout } from "@/components/EnquiryCallout";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ProjectTypes } from "@/components/ProjectTypes";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCatalog />
        <WhyChooseUs />
        <About />
        <ProjectTypes />
        <EnquiryCallout />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}