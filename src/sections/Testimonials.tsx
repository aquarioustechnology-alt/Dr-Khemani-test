import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Simon Baranwal',
    rating: 5,
    text: "We had a great experience under her guidance, without any complication and hassle free. Doctor is really sweet and helpful in nature, help me with all my problems any time. She treats you just like a guardian.",
  },
  {
    name: 'Deepa Akansha Tripathy',
    rating: 5,
    text: "Dr. Vinita Khemani is an angel for us. For her we were blessed with our little princess on 09/05/21 (On mother's day I became a mother). I came to mam when my 3rd month was running with excessive vomiting and spitting.",
  },
  {
    name: 'Jayosree Saha',
    rating: 5,
    text: "I had a son on 10 September From Doctors Vinita khemani Mam. Mam is very good doctor and very carefully.. I'm very satisfied.. Behavior is very good nd she is very helpful Doctors.",
  },
  {
    name: 'Sharmila Sinha',
    rating: 5,
    text: "Had a great experience starting from Day 1. She took time to make me understand the do's and dont's. Answered all my queries in person and also over WhatsApp in case of urgency.",
  },
  {
    name: 'Shanta Ghatak',
    rating: 5,
    text: "She is not just a gynaecologist but a manifestation of the Almighty. She performed my hysterectomy a few days ago and freed me from my years old pain and discomfort. I am highly satisfied.",
  },
  {
    name: 'Khushboo Khemka',
    rating: 5,
    text: "Amazing doctor, very patient and friendly. Always available to clear any minor doubts and she carries a very pleasant and positive feeling. Everytime she came to meet me in the hospital post delivery, I already started feeling better.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
            Testimonials
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Hear In Their Own{' '}
            <span className="text-pink-500">Words</span>
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our patients have to say about their experience
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Desktop: Show 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${currentIndex}-${index}`} {...testimonial} />
            ))}
          </div>

          {/* Tablet/Mobile: Show 1 card with animation */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard {...testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-pink-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}

function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <Card className="p-6 lg:p-8 bg-white rounded-2xl shadow-lg h-full border-l-4 border-l-pink-400">
      <div className="flex flex-col h-full">
        <Quote className="w-10 h-10 text-pink-200 mb-4" />
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          "{text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
            <span className="text-white font-heading font-semibold">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-heading font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
