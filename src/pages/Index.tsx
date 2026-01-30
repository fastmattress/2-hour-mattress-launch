import Hero from "@/components/Hero";
import DeliverySection from "@/components/DeliverySection";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <DeliverySection />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
