import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ZodiacWheel from "./ZodiacWheel";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-white font-medium text-sm">100% Free Personalized Report</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
              <span>Unlock the</span>
              <br />
              <span className="text-gradient-purple">Hidden Power</span>
              <br />
              <span>of Your Numbers</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white mb-4">
              Get Your FREE Personalized Numerology Report
            </p>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Discover your life path, hidden strengths, and cosmic guidance based on your name and date of birth.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onOpenModal}
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-button-gradient hover:opacity-90 border border-primary/50 shadow-lg hover:shadow-primary/30 transition-all duration-300 animate-pulse-glow"
              >
                Get My Free Numerology Report
              </Button>
            </motion.div>

            <p className="mt-4 text-sm text-muted-foreground">
              ✨ Join 50,000+ people who discovered their true potential
            </p>
          </motion.div>

          {/* Right content - Zodiac Wheel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end z-10"
          >
            <ZodiacWheel />
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
