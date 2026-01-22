import { motion } from "framer-motion";
import { HelpCircle, TrendingDown, Heart, Compass } from "lucide-react";

const problems = [
  {
    icon: HelpCircle,
    title: "Lack of Clarity",
    description: "Feeling lost about your life's true purpose and direction",
  },
  {
    icon: TrendingDown,
    title: "Career Confusion",
    description: "Struggling to find the right career path that fulfills you",
  },
  {
    icon: Heart,
    title: "Relationship Blocks",
    description: "Repeating patterns in relationships that hold you back",
  },
  {
    icon: Compass,
    title: "Missing Guidance",
    description: "Searching for answers that seem just out of reach",
  },
];

const ProblemSection = () => {
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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Do You Feel <span className="text-gradient-purple">Lost</span> in Life?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Many people struggle with these common challenges. The answers you seek may be hidden in your numbers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-cosmic rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-lavender" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
