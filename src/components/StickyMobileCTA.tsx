import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenModal: () => void;
}

const StickyMobileCTA = ({ onOpenModal }: StickyMobileCTAProps) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring" }}
      className="sticky-cta"
    >
      <Button
        onClick={onOpenModal}
        size="lg"
        className="w-full py-6 text-base font-semibold bg-button-gradient hover:opacity-90 shadow-lg"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Get My Free Report
      </Button>
    </motion.div>
  );
};

export default StickyMobileCTA;
