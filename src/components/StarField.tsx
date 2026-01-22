import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  delay: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 80; i++) {
        const sizes: ("small" | "medium" | "large")[] = ["small", "small", "small", "medium", "medium", "large"];
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: sizes[Math.floor(Math.random() * sizes.length)],
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "star-small";
      case "medium":
        return "star-medium";
      case "large":
        return "star-large";
      default:
        return "star-small";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${getSizeClass(star.size)}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
