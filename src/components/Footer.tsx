import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-display text-xl font-bold mb-4 text-gradient-purple">
            Numerology Insights
          </p>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Discover the ancient wisdom hidden in your numbers. 
            Your journey to self-discovery starts here.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Numerology Insights. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
