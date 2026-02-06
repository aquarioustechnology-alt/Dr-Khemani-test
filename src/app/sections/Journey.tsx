"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Stethoscope, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2003",
    title: "Medical Journey Begins",
    desc: "MBBS from Calcutta University",
    icon: GraduationCap,
  },
  {
    year: "2006",
    title: "Specialization",
    desc: "DGO in Obstetrics & Gynecology",
    icon: Award,
  },
  {
    year: "2008",
    title: "Advanced Training",
    desc: "DNB (OBGYN) - National Board",
    icon: Stethoscope,
  },
  {
    year: "2010",
    title: "Practice Established",
    desc: "Started private practice",
    icon: Stethoscope,
  },
  {
    year: "2015",
    title: "Surgical Excellence",
    desc: "Advanced laparoscopic training",
    icon: Award,
  },
  {
    year: "2025",
    title: "10,000+ Patients",
    desc: "Trusted by thousands",
    icon: Trophy,
  },
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden" style={{ background: '#fdfbfa' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a43971_1px,transparent_1px),linear-gradient(to_bottom,#a43971_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container-fluid relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#f5e6ef', color: '#a43971' }}>
            Our Journey
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-3 text-balance">
            Two Decades of <span className="text-gradient whitespace-nowrap">Excellence</span>
          </h2>
        </motion.div>

        {/* Compact Timeline - Zig Zag */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2" style={{ background: '#f5e6ef' }}>
            <motion.div
              style={{ height: lineHeight, background: 'linear-gradient(to bottom, #a43971, #9db5a0)' }}
              className="w-full"
            />
          </div>

          {/* Milestones - Compact Cards with Offset */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex items-start gap-4 ${isEven ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content Card - Right side offset 20% higher */}
                  <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div
                      className={`rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ${!isEven ? "md:-mt-8" : ""
                        }`}
                      style={{
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        borderColor: '#f5e6ef'
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #a43971, #8a2f5e)' }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold" style={{ color: '#a43971' }}>{milestone.year}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 shadow-md z-10 md:-translate-x-1/2 mt-6"
                    style={{ borderColor: '#a43971' }}
                  />

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
