"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { calculateExperience } from "@/lib/utils";

const trustItems = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    desc: `${calculateExperience()}+ years of specialized experience in women's healthcare`,
    bgColor: "#f5e6ef",
    iconBg: "#a43971",
    borderColor: "#d4a5c4",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Emergency consultations available round the clock",
    bgColor: "#f0e8f3",
    iconBg: "#b85a8a",
    borderColor: "#d4a5c4",
  },
  {
    icon: Stethoscope,
    title: "Advanced Care",
    desc: "Latest medical technology & laparoscopic techniques",
    bgColor: "#f5eef3",
    iconBg: "#c97ba3",
    borderColor: "#d4a5c4",
  },
  {
    icon: HeartPulse,
    title: "Patient First",
    desc: "Personalized treatment plans for every patient",
    bgColor: "#f8f0f5",
    iconBg: "#a43971",
    borderColor: "#d4a5c4",
  },
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfbfa"></path>
        </svg>
      </div>

      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#f5e6ef', color: '#a43971' }}>
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We combine medical excellence with compassionate care for the best patient experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="trust-card group cursor-pointer"
              style={{
                backgroundColor: item.bgColor,
                border: `1px solid ${item.borderColor}`,
              }}
            >
              <div
                className="trust-icon-wrapper text-white shadow-lg mb-4"
                style={{ backgroundColor: item.iconBg }}
              >
                <item.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>

              <div className="flex items-center gap-2" style={{ color: '#a43971' }}>
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/about" className="btn-secondary">
            Know More About Doctor
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
