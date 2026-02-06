"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Clock, Users, CheckCircle2, GraduationCap, Building2 } from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { doctorInfo } from "@/lib/data";

const credentials = [
  { icon: GraduationCap, text: "MBBS from Calcutta University" },
  { icon: Award, text: "DGO - Obstetrics & Gynecology" },
  { icon: BookOpen, text: "DNB (OBGYN) - Diplomate of National Board" },
];

const hospitals = [
  "Healing Touch, Bangur Avenue",
  "Apollo Clinic, New Town",
  "Charnock Hospital, Tegharia",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-medical-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-medical-100/30 blur-3xl" />
      
      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <FadeInWhenVisible direction="left">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden bg-gradient-to-br from-medical-100 to-warm-100 aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-white/50 backdrop-blur flex items-center justify-center">
                      <Award className="w-20 h-20 text-medical-600" />
                    </div>
                    <p className="text-medical-900 font-display text-2xl mb-2">Dr. Vinita Khemani</p>
                    <p className="text-medical-700">Consultation Photo</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-8 top-1/4 glass p-6 rounded-3xl shadow-xl max-w-[200px]"
              >
                <div className="text-4xl font-display font-bold text-medical-700 mb-1">
                  <AnimatedCounter value={21} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Years of Clinical Excellence</div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 glass px-6 py-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10,000+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Right - Content */}
          <div>
            <FadeInWhenVisible>
              <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
                About Doctor
              </span>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Dr. {doctorInfo.name}
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {doctorInfo.description}
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <blockquote className="border-l-4 border-medical-400 pl-6 py-2 mb-8 bg-medical-50/50 rounded-r-xl">
                <p className="text-medical-800 italic font-medium">
                  &ldquo;{doctorInfo.philosophy}&rdquo;
                </p>
              </blockquote>
            </FadeInWhenVisible>

            {/* Credentials */}
            <FadeInWhenVisible delay={0.4}>
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-medical-600" />
                  Qualifications
                </h3>
                <div className="grid gap-3">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <cred.icon className="w-5 h-5 text-medical-500" />
                      <span>{cred.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Hospitals */}
            <FadeInWhenVisible delay={0.5}>
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-medical-600" />
                  Associated With
                </h3>
                <div className="grid gap-2">
                  {hospitals.map((hospital, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-medical-500" />
                      <span>{hospital}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* CTA */}
            <FadeInWhenVisible delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-medical-600 text-white rounded-full font-semibold hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
                >
                  <Clock className="w-5 h-5" />
                  Book Consultation
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
