"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Normal Delivery Priority",
  "Painless Labor & Epidural Options",
  "Trimester-Wise Pregnancy Monitoring",
  "PCOS & Menstrual Disorder Treatment",
  "Menopause & HRT Management",
  "Post-Operative Recovery Support",
];

export function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #a43971 0%, #8a2f5e 50%, #6b2349 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl" style={{ y: imageY, background: 'rgba(184,90,138,0.3)' }} />
      <motion.div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ y: imageY, background: 'rgba(201,123,163,0.2)' }} />

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <motion.div
              className="relative h-full w-full cursor-pointer group perspective-1000"
              whileHover="hover"
              initial="initial"
              animate="animate"
            >
              {/* Animated Background Layer */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] bg-[#f5e6ef] z-0"
                variants={{
                  initial: { rotate: 3, scale: 1.05 },
                  hover: { rotate: -3, scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                variants={{
                  initial: { scale: 1, rotate: 0 },
                  hover: { scale: 1.02, rotate: 1, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                <Image
                  src="/images/1663147659234.webp"
                  alt="Dr. Vinita conducting health seminar"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 p-6 rounded-3xl backdrop-blur-md bg-[#1a103c]/20 border border-white/20 shadow-xl z-20"
                variants={{
                  initial: { y: 0, scale: 1 },
                  hover: { y: -5, scale: 1.05, rotate: -1, transition: { duration: 0.4, delay: 0.1 } }
                }}
              >
                <p className="text-3xl font-bold text-white">2,348+</p>
                <p className="text-sm text-white/90 font-medium">Successful Deliveries</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
              Why Patients Trust Her
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Why 10,000+ Patients Choose
              <span className="block" style={{ color: '#d4a5c4' }}>Dr. Vinita Khemani</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              A highly experienced Obstetrician & Gynaecology Specialist, Dr. Khemani practices at 6 leading hospitals across Kolkata. She is known for her normal-delivery-first approach, with a 4.9★ patient satisfaction score.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/services" className="btn-white inline-flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
