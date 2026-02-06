"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function ParallaxCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[600px] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/WhatsApp Image 2026-01-14 at 12.55.29 PM (1).jpeg"
          alt="Clinic"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(164,57,113,0.9), rgba(138,47,94,0.85), rgba(107,35,73,0.9))' }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                Begin Your Journey Today
              </span>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Health Deserves the <span style={{ color: '#d4a5c4' }}>Best Care</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                Take the first step towards better health. Book a consultation with
                Dr. Vinita Khemani and experience personalized, compassionate care.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  style={{ color: '#a43971' }}
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919903588155"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
