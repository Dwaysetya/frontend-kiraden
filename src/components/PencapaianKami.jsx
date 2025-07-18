import { useState, useEffect, useRef, useCallback } from "react";
import { statsData } from "../utils/Constanta";

const Pencapaian = () => {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const animateCounters = useCallback(() => {
    const start = performance.now();
    const duration = 2000;

    const initialValues = statsData.map(() => 0);
    const targetValues = statsData.map((stat) => stat.number);

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);

      const newValues = targetValues.map((target, i) =>
        Math.floor(initialValues[i] + (target - initialValues[i]) * progress)
      );

      setCounters(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [statsData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, animateCounters]);

  return (
    <div
      ref={containerRef}
      className="w-full py-16 bg-gradient-to-br from-mystical-dark via-secondary to-mystical-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white font-bold text-foreground mb-4">
            Pencapaian Kami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className="relative p-8 h-[250px] bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{ borderColor: "#FFD700" }}
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                {stat.icon && (
                  <div className="text-6xl mb-4 filter drop-shadow-lg">
                    {stat.icon}
                  </div>
                )}

                {/* Counter */}
                <div className="text-4xl text-[#FFD700] md:text-5xl font-bold text-primary mb-2">
                  {counters[index].toLocaleString()}
                  {stat.suffix && (
                    <span className="text-primary text-[#FFD700]">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-foreground/80 text-[#FFD700] text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pencapaian;
