"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Award, Users, Phone, Clock } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50" />
      
      {/* Animated Background Shapes */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-rose-200/40 to-transparent rounded-full blur-3xl"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <motion.div style={{ opacity, scale }} className="relative z-10">
        <div className="container-fluid pt-28 pb-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-lg shadow-rose-500/10 mb-8 border border-rose-100"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5 from 10,000+ Patients</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="font-display fluid-hero font-bold text-gray-900 mb-6">
                Expert Care for
                <span className="block text-gradient">Women&apos;s Health</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Dr. Vinita Khemani brings over <span className="font-semibold text-rose-600">21 years</span> of expertise in gynecology. 
                From pregnancy care to complex surgeries, experience compassionate, personalized healthcare.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/book-appointment" className="btn-primary">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+919903588155" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Stats with better styling */}
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                <div className="counter-box">
                  <Award className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                  <div className="counter-number">21+</div>
                  <p className="text-xs text-gray-500 font-medium mt-1">Years Experience</p>
                </div>
                <div className="counter-box">
                  <Users className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                  <div className="counter-number">10K+</div>
                  <p className="text-xs text-gray-500 font-medium mt-1">Happy Patients</p>
                </div>
                <div className="counter-box">
                  <Clock className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                  <div className="counter-number">24/7</div>
                  <p className="text-xs text-gray-500 font-medium mt-1">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative">
                {/* Animated decorative elements */}
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full blur-2xl opacity-60" />
                <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full blur-2xl opacity-60" />

                {/* Main Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-purple-500 rounded-[2.5rem] rotate-3 scale-105 opacity-20" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-500/20 border-4 border-white">
                    <Image
                      src="/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg"
                      alt="Dr. Vinita Khemani"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Badge - Experience */}
                  <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                    className="absolute -left-6 top-1/4 glass px-5 py-4 rounded-2xl shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">21+ Years</p>
                        <p className="text-xs text-gray-500">Experience</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge - Patients */}
                  <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                    className="absolute -right-6 bottom-1/3 glass px-5 py-4 rounded-2xl shadow-xl animate-float-reverse">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">10,000+</p>
                        <p className="text-xs text-gray-500">Patients</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
