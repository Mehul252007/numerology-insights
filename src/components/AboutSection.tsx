import { motion } from "framer-motion";
import { Star, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="card-cosmic rounded-3xl p-8 lg:p-12">
                <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-cosmic-light/10 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-radial from-cosmic-glow/20 to-transparent" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                      <Star className="w-12 h-12 text-background" fill="currentColor" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Master Numerologist
                    </h3>
                    <p className="text-lavender">15+ Years Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 lg:top-8 lg:-right-8"
              >
                <div className="card-cosmic rounded-xl p-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <p className="font-semibold text-foreground">Certified</p>
                    <p className="text-sm text-muted-foreground">Expert</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8"
              >
                <div className="card-cosmic rounded-xl p-4 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-lavender" />
                  <div>
                    <p className="font-semibold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">Readings</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-lavender text-sm font-medium mb-4">
              Meet Your Guide
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Guided by <span className="text-gradient-gold">Ancient Wisdom</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              With over 15 years of dedicated study in numerology, sacred geometry, and metaphysical sciences, 
              our expert has helped thousands of individuals discover their true path.
            </p>
            <p className="text-muted-foreground mb-8">
              Combining ancient Pythagorean wisdom with modern insights, each reading is crafted 
              to provide you with actionable guidance for your unique journey. Your numbers tell 
              a story—let us help you read it.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-gold" fill="currentColor" />
                <span>Personalized Insights</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-gold" fill="currentColor" />
                <span>Accurate Readings</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-gold" fill="currentColor" />
                <span>Life-Changing Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
