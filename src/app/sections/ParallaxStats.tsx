"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Users, Award, Heart, Baby } from "lucide-react";
import { Counter } from "@/components/Counter";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Happy Patients" },
  { icon: Award, value: 21, suffix: "+", label: "Years Experience" },
  { icon: Heart, value: 500, suffix: "+", label: "Surgeries" },
  { icon: Baby, value: 2000, suffix: "+", label: "Deliveries" },
];

export function ParallaxStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative py-24 bg-[#730940]">
      {/* Animated Lines - Modified for dark bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C21975] via-[#a43971] to-[#C21975]" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white/5"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 h-full flex items-center">
        <div className="container-fluid">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-[#C21975]/5 group-hover:bg-[#C21975] group-hover:border-[#C21975] transition-colors duration-300"
                >
                  <stat.icon className="w-9 h-9 text-[#C21975] group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                </motion.div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-medium text-gray-400 uppercase tracking-wide text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
