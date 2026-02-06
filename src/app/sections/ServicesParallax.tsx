"use client";

import { motion, useScroll, useTransform } from "framer-motion";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, HeartPulse, Sparkles, Scan } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Baby,
    title: "Pregnancy Care",
    subtitle: "From conception to delivery",
    description: "Comprehensive prenatal care including regular checkups, ultrasound monitoring, nutrition counseling, and personalized birth planning for a healthy pregnancy journey.",
    features: ["Prenatal Checkups", "Nutrition Guidance", "Delivery Planning", "Postnatal Care"],
    image: "/images/WhatsApp Image 2025-12-22 at 12.22.01 PM.jpeg",
    color: "#f5e6ef",
    badgeText: "Motherhood Journey"
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "High-Risk Pregnancy",
    subtitle: "Expert care for complex cases",
    description: "Specialized management of high-risk pregnancies including gestational diabetes, hypertension, multiple pregnancies, and cases with previous complications.",
    features: ["Risk Assessment", "Specialized Monitoring", "Emergency Protocols", "NICU Coordination"],
    image: "/images/WhatsApp Image 2026-01-14 at 12.55.29 PM.jpeg",
    color: "#e8d5e0",
    badgeText: "Priority Care"
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Fertility Treatment",
    subtitle: "Making dreams come true",
    description: "Comprehensive fertility solutions including ovulation induction, IUI procedures, IVF coordination, and treatment for PCOS and endometriosis-related infertility.",
    features: ["Fertility Testing", "Ovulation Induction", "IUI & IVF Coordination", "Hormonal Therapy"],
    image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM.jpeg",
    color: "#d4a5c4",
    badgeText: "Miracle Maker"
  },
  {
    id: 4,
    icon: Scan,
    title: "Laparoscopic Surgery",
    subtitle: "Minimally invasive precision",
    description: "Advanced keyhole surgeries for fibroids, ovarian cysts, endometriosis, hysterectomy, and ectopic pregnancy with faster recovery and minimal scarring.",
    features: ["Keyhole Surgery", "Fibroid Removal", "Cyst Treatment", "Quick Recovery"],
    image: "/images/WhatsApp Image 2025-12-22 at 12.26.51 PM.jpeg",
    color: "#c97ba3",
    badgeText: "Precision Care"
  },
];

const Card = ({ service, index, range, targetScale, ctaText }: { service: any, index: any, range: any, targetScale: any, ctaText: any }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="flex flex-col relative -top-[25vh] h-[500px] w-full max-w-[1200px] rounded-[3rem] p-12 origin-top border border-gray-200 shadow-2xl overflow-hidden bg-white"
      >
        <div className="grid lg:grid-cols-2 gap-12 h-full items-center">

          {/* Content */}
          <div className="flex flex-col justify-center h-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: service.color }}>
                <service.icon className="w-5 h-5 text-[#a43971]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#a43971]">{service.badgeText}</span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-xl text-[#a43971] font-medium mb-6">{service.subtitle}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

            <Link href="/book-appointment" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a43971] text-white text-sm font-semibold hover:bg-[#8a2f5e] hover:gap-3 transition-all shadow-lg hover:shadow-xl mt-4 w-fit">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-full w-full rounded-[2rem] overflow-hidden order-1 lg:order-2">
            <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
              <Image
                fill
                src={service.image}
                alt={service.title}
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export function ServicesParallax() {
  const container = useRef(null);
  useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} className="relative mt-[10vh]">
      <div className="container-fluid mx-auto px-6 mb-20 text-center max-w-3xl">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#a43971] bg-[#f5e6ef]/50">
          Our Expertise
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Comprehensive Care for Every <br /><span className="text-[#a43971]">Stage of Womanhood</span>
        </h2>
      </div>

      {services.map((service, index) => {
        const targetScale = 1 - ((services.length - index) * 0.05);

        let ctaText = "Book Appointment";
        if (service.id === 1) ctaText = "Plan Pregnancy";
        if (service.id === 2) ctaText = "Consult Now";
        if (service.id === 3) ctaText = "Infertility Check";
        if (service.id === 4) ctaText = "Surgical Opinion";

        return <Card key={service.id} service={service} index={index} range={[index * 0.25, 1]} targetScale={targetScale} ctaText={ctaText} />;
      })}
    </section>
  );
}
