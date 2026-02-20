"use client";

import { motion, useScroll, useTransform } from "framer-motion";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, HeartPulse } from "lucide-react";
import { calculateSurgeries, calculateDeliveries } from "@/lib/utils";

const FertilityIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className || "w-5 h-5"}`}>
    <Image
      src="/images/fertility-treatment-ico.svg"
      alt="Fertility Treatment"
      fill
      className="object-contain"
    />
  </div>
);

const LaparoscopyIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className || "w-5 h-5"}`}>
    <Image
      src="/images/laparoscopy-surgery-ico.svg"
      alt="Laparoscopic Surgery"
      fill
      className="object-contain"
    />
  </div>
);

const services = [
  {
    id: 1,
    icon: Baby,
    title: "Pregnancy Care",
    subtitle: "Complete prenatal to postnatal care",
    description: `Comprehensive prenatal care including regular checkups, ultrasound monitoring, nutrition counseling, and personalized birth planning. Dr. Khemani prioritizes normal delivery with over ${calculateDeliveries().toLocaleString()} successful deliveries.`,
    features: ["Prenatal Checkups", "Nutrition Guidance", "Delivery Planning", "Postnatal Care"],
    href: "/treatments/pregnancy-care",
    image: "/images/Pregnancy Care.png",
    color: "#f5e6ef",
    badgeText: "Maternity Care"
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "High-Risk Pregnancy",
    subtitle: "Specialized management for complex cases",
    description: "Expert management of high-risk pregnancies including gestational diabetes, preeclampsia, placenta previa, multiple pregnancies, and recurrent miscarriage with 24/7 monitoring protocols.",
    features: ["Risk Assessment", "Specialized Monitoring", "Emergency Protocols", "NICU Coordination"],
    href: "/treatments/high-risk-pregnancy",
    image: "/images/High-Risk Pregnancy.webp",
    color: "#f5e6ef",
    badgeText: "Priority Care"
  },
  {
    id: 3,
    icon: FertilityIcon,
    title: "Fertility Treatment",
    subtitle: "Evidence-based fertility solutions",
    description: "Comprehensive fertility evaluation and treatment including ovulation induction, IUI procedures, IVF coordination, and management of PCOS, endometriosis, and tubal factor infertility.",
    features: ["Fertility Testing", "Ovulation Induction", "IUI & IVF Coordination", "Hormonal Therapy"],
    href: "/treatments/fertility",
    image: "/images/Fertility Treatment.webp",
    color: "#f5e6ef",
    badgeText: "Fertility Specialist"
  },
  {
    id: 4,
    icon: LaparoscopyIcon,
    title: "Laparoscopic Surgery",
    subtitle: "Keyhole surgery with faster recovery",
    description: `${calculateSurgeries().toLocaleString()}+ advanced laparoscopic surgeries performed for fibroids, ovarian cysts, endometriosis, hysterectomy, and ectopic pregnancy – with same-day discharge and minimal scarring.`,
    features: ["Keyhole Surgery", "Fibroid Removal", "Cyst Treatment", "Quick Recovery"],
    href: "/treatments/laparoscopic-surgery",
    image: "/images/Laparoscopic Surgery.jpg",
    color: "#f5e6ef",
    badgeText: "Minimally Invasive"
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

            <Link href={service.href || "#contact"} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a43971] text-white text-sm font-semibold hover:bg-[#8a2f5e] hover:gap-3 transition-all shadow-lg hover:shadow-xl mt-4 w-fit">
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
    <>
      <section ref={container} className="relative mt-[10vh]">
        <div className="container-fluid mx-auto px-6 mb-20 text-center max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#d4a5c4] text-[#a43971] bg-[#f5e6ef]/50">
            Specialized Expertise
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Gynecology & Obstetric</span> <br /><span className="text-[#a43971]">Services in Kolkata</span>
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

      <div className="flex items-center justify-center relative z-10 py-8 bg-[#fffefe] -mt-32">
        <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 text-lg font-semibold hover:bg-[#C21975] hover:text-white hover:border-[#C21975] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1">
          Explore All Treatments
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}
