import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Entrepreneur",
    quote: "The accuracy of my reading was incredible. It helped me understand why I kept facing the same obstacles and gave me clarity on my true calling.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Creative Director",
    quote: "I was skeptical at first, but the insights about my career path were spot on. Made a major life decision based on this reading.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Life Coach",
    quote: "This report revealed patterns I never noticed before. The relationship insights alone were worth it. Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            Real Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Others <span className="text-gradient-purple">Discovered</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-cosmic rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cosmic-light flex items-center justify-center text-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
