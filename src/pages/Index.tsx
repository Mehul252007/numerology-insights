import { useState } from "react";
import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
      {/* Star background */}
      <StarField />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection onOpenModal={openModal} />
        <ProblemSection />
        <BenefitsSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
        <FinalCTASection onOpenModal={openModal} />
        <Footer />
      </main>

      {/* Sticky mobile CTA */}
      <StickyMobileCTA onOpenModal={openModal} />

      {/* Lead capture modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
