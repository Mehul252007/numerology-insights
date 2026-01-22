import { motion } from "framer-motion";

const zodiacSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓"
];

const ZodiacWheel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[450px] lg:h-[450px]"
    >
      {/* Outer rotating ring */}
      <div className="absolute inset-0 animate-rotate-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Outer circle */}
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="hsl(270 40% 30%)"
            strokeWidth="1"
            strokeDasharray="8 4"
          />
          {/* Inner decorative circles */}
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="hsl(270 40% 25%)"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="130"
            fill="none"
            stroke="hsl(270 40% 25%)"
            strokeWidth="0.5"
          />
          {/* Sacred geometry - hexagram */}
          <polygon
            points="200,70 260,170 260,260 200,330 140,260 140,170"
            fill="none"
            stroke="hsl(270 50% 35%)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Zodiac symbols */}
      <div className="absolute inset-0">
        {zodiacSymbols.map((symbol, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const radius = 42;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="absolute text-lavender text-lg sm:text-xl lg:text-2xl"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-radial from-cosmic-glow/30 via-primary/20 to-transparent animate-pulse-glow" />
      </div>

      {/* Decorative dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const radius = 48;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        return (
          <div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 bg-lavender/40 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default ZodiacWheel;
