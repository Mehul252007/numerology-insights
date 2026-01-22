import { motion } from "framer-motion";
import { Sparkles, Briefcase, Users, Shield, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Life Path Number",
    description: "Discover your core personality, strengths, and life purpose encoded in your birth date",
    color: "from-cosmic-glow to-lavender",
  },
  {
    icon: Briefcase,
    title: "Career Insight",
    description: "Uncover the ideal career paths aligned with your natural talents and abilities",
    color: "from-gold to-gold-light",
  },
  {
    icon: Users,
    title: "Relationship Patterns",
    description: "Understand your compatibility and relationship dynamics for deeper connections",
    color: "from-lavender to-lavender-light",
  },
  {
    icon: Shield,
    title: "Blocks & Guidance",
    description: "Identify hidden obstacles and receive personalized guidance to overcome them",
    color: "from-primary to-cosmic-light",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-lavender text-sm font-medium mb-4">
            What's Included
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="text-gradient-gold">Free Report</span> Reveals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive analysis of your numerological profile, delivered straight to your inbox.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-cosmic rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-foreground flex items-center gap-2">
                    {benefit.title}
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
