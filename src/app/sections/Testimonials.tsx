"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jayosree Saha",
    role: "New Mother",
    text: "Dr. Vinita Khemani is an angel for us. For her we were blessed with our little princess. I came when my 3rd month was running with excessive vomiting. Her care throughout was remarkable.",
    rating: 5,
    initial: "J",
    image: "/images/1656409765121.webp",
  },
  {
    id: 2,
    name: "Sharmila Sinha",
    role: "Patient",
    text: "Had a great experience from Day 1. She took time to explain everything. Answered all queries over WhatsApp in emergencies. Never felt uncomfortable for a moment.",
    rating: 5,
    initial: "S",
    image: "/images/2023-02-08.webp",
  },
  {
    id: 3,
    name: "Shanta Ghatak",
    role: "Patient",
    text: "She is not just a gynaecologist but a manifestation of the Almighty. She performed my hysterectomy and freed me from years of pain. Highly satisfied with treatment.",
    rating: 5,
    initial: "S",
    image: "/images/2023-04-06.webp",
  },
  {
    id: 4,
    name: "Khushboo Khemka",
    role: "New Mother",
    text: "Amazing doctor, very patient and friendly. Always available to clear doubts. Carries a very positive feeling. Every hospital visit post-delivery was reassuring.",
    rating: 5,
    initial: "K",
    image: "/images/2023-04-23.webp",
  },
  {
    id: 5,
    name: "Soma Saha",
    role: "Patient",
    text: "I started seeing Ma'am for period problems and later for fertility. Just delivered 2 weeks back. Changed two doctors before but nobody understood the issue like her.",
    rating: 5,
    initial: "S",
    image: "/images/unnamed (1).webp",
  },
  {
    id: 6,
    name: "Simon Baranwal",
    role: "Visitor",
    text: "Great experience under her guidance, without any complications. Doctor is sweet and helpful, treats you like a guardian. Very thankful for the care provided.",
    rating: 5,
    initial: "S",
    image: "/images/unnamed (2).webp",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const current = testimonials[currentIndex];

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #f5e6ef)' }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2" style={{ background: 'rgba(164,57,113,0.05)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2" style={{ background: 'rgba(157,181,160,0.05)' }} />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#f5e6ef', color: '#a43971' }}>
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold animate-text-gradient mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Verified Patient </span> <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Read first-hand accounts from patients treated by Dr. Vinita Khemani – rated 4.5★ on Google with 413+ verified reviews.
          </p>
        </motion.div>

        {/* 3D Stack Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">

            {/* Active Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full z-20"
              >
                <div className="bg-white rounded-[2.5rem] p-0 shadow-2xl border border-primary/10 overflow-hidden grid md:grid-cols-2 h-auto md:h-[500px]">

                  {/* Left Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <div className="mb-8">
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#f5e6ef] text-[#C21975] mb-6 border border-[#d4a5c4]">
                        # Success Story
                      </span>

                      <div className="relative">
                        {/* Large Inverted Comma Icon */}
                        <div className="text-[#f5e6ef] absolute -top-8 -left-4 font-serif text-9xl leading-none opacity-50 select-none">
                          &ldquo;
                        </div>
                        <p className="relative text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                          {current.text}
                          <span className="text-[#C21975] ml-1">”</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C21975] to-[#8a2f5e] flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {current.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{current.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{current.role}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <div className="flex">
                            {[...Array(current.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-64 md:h-full bg-gray-100 overflow-hidden order-first md:order-last">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Floating Badge on Image */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {[0, 1, 2].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                <Image src={testimonials[i % testimonials.length].image} alt="user" fill className="object-cover" />
                              </div>
                            ))}
                          </div>
                          <p className="text-xs font-semibold text-gray-700">413+ Google Reviews</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#C21975] flex items-center justify-center text-white">
                          <Quote className="w-4 h-4 fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8" : "w-2"
                    }`}
                  style={{
                    background: index === currentIndex ? '#a43971' : '#d4a5c4'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/stories" className="btn-secondary">
            Read All Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
