"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Normal Delivery Priority",
  "Painless Labor Options",
  "Holistic Antenatal Care",
  "Adolescent Health Guidance",
  "Menopause Solutions",
  "Post-Surgery Rehabilitation",
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl rotate-3 scale-105 opacity-20 bg-white" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2025-12-22 at 12.26.51 PM.jpeg"
                  alt="Dr. Vinita conducting health seminar"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold" style={{ color: '#a43971' }}>500+</p>
                <p className="text-sm text-gray-600">Surgeries Performed</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
              Why Patients Trust Us
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Delivering Excellence in
              <span className="block" style={{ color: '#d4a5c4' }}>Women&apos;s Healthcare</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              With over two decades of dedicated service, Dr. Vinita Khemani has earned the trust
              of thousands of patients through compassionate care and clinical excellence.
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
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
