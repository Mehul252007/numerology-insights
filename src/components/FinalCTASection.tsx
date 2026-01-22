import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-cosmic rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-gold mb-6">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="text-gradient-gold">Destiny</span> Awaits
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Don't wait another day to discover the secrets hidden in your numbers. 
            Your personalized numerology report is just a click away.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              onClick={onOpenModal}
              size="lg"
              className="px-10 py-7 text-lg font-semibold bg-gradient-to-r from-gold to-gold-light text-background hover:opacity-90 shadow-lg transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Claim Your Free Report Now
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-muted-foreground">
            🔒 100% Free • No Credit Card Required • Instant Delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
