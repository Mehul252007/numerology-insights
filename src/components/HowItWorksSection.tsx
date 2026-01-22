import { motion } from "framer-motion";
import { PenLine, Cpu, Mail } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenLine,
    title: "Enter Your Details",
    description: "Provide your name, date of birth, and email address",
  },
  {
    number: "02",
    icon: Cpu,
    title: "We Calculate Your Numbers",
    description: "Our expert system analyzes your unique numerological profile",
  },
  {
    number: "03",
    icon: Mail,
    title: "Receive Your Report",
    description: "Get your personalized report delivered to your inbox",
  },
];

const HowItWorksSection = () => {
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
            Simple Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            3 Easy <span className="text-gradient-purple">Steps</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="card-cosmic rounded-2xl p-8 text-center relative z-10">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cosmic-light p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-lavender" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
