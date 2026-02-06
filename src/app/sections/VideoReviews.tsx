"use client";

import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const videos = [
    {
        id: 1,
        thumbnail: "/images/1656409765121.webp",
        title: "Safe Delivery Journey",
        patient: "Mrs. Priya Sharma",
        type: "Normal Delivery",
        duration: "2:45",
        videoUrl: "/videos/review1.mp4"
    },
    {
        id: 2,
        thumbnail: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
        title: "Overcoming Infertility",
        patient: "Mrs. Anjali Gupta",
        type: "IVF Success",
        duration: "3:20",
        videoUrl: "/videos/review1.mp4"
    },
    {
        id: 3,
        thumbnail: "/images/WhatsApp Image 2025-12-22 at 12.26.52 PM.jpeg",
        title: "Complex Fibroid Surgery",
        patient: "Mrs. Meera Reddy",
        type: "Laparoscopy",
        duration: "1:55",
        videoUrl: "/videos/review1.mp4"
    }
];

export function VideoReviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (isVideoOpen) return; // Stop sliding when video is open
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % videos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isVideoOpen]);

    const nextVideo = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const scrollToTestimonials = () => {
        document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#fff5f9] to-[#fff0f5] relative overflow-hidden">
            <style jsx global>{`
                .video-list-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .video-list-scrollbar::-webkit-scrollbar-track {
                    background: rgba(194, 25, 117, 0.05);
                    border-radius: 4px;
                }
                .video-list-scrollbar::-webkit-scrollbar-thumb {
                    background: #C21975;
                    border-radius: 4px;
                }
                .video-list-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a43971;
                }
            `}</style>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#C21975]/5 to-transparent opacity-30" />
            <div className="absolute -right-20 top-20 w-96 h-96 bg-[#C21975] rounded-full mix-blend-multiply filter blur-[120px] opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-2 rounded-full border border-[#C21975]/30 bg-[#C21975]/10 text-[#C21975] text-sm font-medium mb-6">
                            Patient Stories
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight animate-text-gradient">
                            Real Stories of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C21975] to-[#b85a8a]">Hope & Healing</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevVideo}
                            className="w-12 h-12 rounded-full border border-[#C21975]/20 bg-white flex items-center justify-center text-[#C21975] hover:bg-[#C21975] hover:text-white transition-all shadow-md"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextVideo}
                            className="w-12 h-12 rounded-full border border-[#C21975]/20 bg-white flex items-center justify-center text-[#C21975] hover:bg-[#C21975] hover:text-white transition-all shadow-md"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Main Video Area */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Active Video Player */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="aspect-video bg-white rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 group relative"
                            >
                                {/* Thumbnail */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={videos[activeIndex].thumbnail}
                                        alt={videos[activeIndex].title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Play Button Center */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:scale-110 hover:bg-[#C21975] hover:border-[#C21975] transition-all duration-300 shadow-xl"
                                    >
                                        <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                                    </button>
                                </div>

                                {/* Video Info Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white">
                                    <div className="flex items-start justify-between">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 rounded-full bg-[#C21975] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                                                    {videos[activeIndex].type}
                                                </span>
                                                <span className="text-sm font-medium text-white/90 flex items-center gap-1">
                                                    <Play className="w-3 h-3" /> {videos[activeIndex].duration}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-display font-bold mb-2 text-white">{videos[activeIndex].title}</h3>
                                            <p className="text-white/90 text-lg">{videos[activeIndex].patient}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Playlist Side */}
                    <div className="lg:col-span-4 flex flex-col h-[500px] gap-4">
                        <div className="flex-1 overflow-y-auto pr-2 video-list-scrollbar space-y-4">
                            {videos.map((video, idx) => (
                                <div
                                    key={video.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`p-4 rounded-2xl cursor-pointer transition-all border ${activeIndex === idx
                                        ? 'bg-white border-[#C21975] shadow-md'
                                        : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm'
                                        }`}
                                >
                                    <div className="flex gap-4">
                                        <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                            <Image
                                                src={video.thumbnail}
                                                alt={video.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                                <Play className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className={`font-semibold mb-1 ${activeIndex === idx ? 'text-[#C21975]' : 'text-gray-900'}`}>
                                                {video.title}
                                            </h4>
                                            <p className="text-sm text-gray-500">{video.patient}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#C21975] to-[#8a2f5e] text-center shadow-xl shrink-0">
                            <Image
                                width={48}
                                height={48}
                                src="/images/logo-icon.png"
                                alt="Healing Touch Clinic"
                                className="mx-auto mb-4 object-contain brightness-0 invert opacity-80"
                            />
                            <p className="text-sm font-medium italic text-white/90 mb-4">
                                &quot;Dr. Vinita&apos;s expertise gave us the miracle we had been waiting for. Forever grateful.&quot;
                            </p>
                            <button
                                onClick={scrollToTestimonials}
                                className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 text-white hover:text-white/80"
                            >
                                Read More Stories
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                            onClick={() => setIsVideoOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#C21975] transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <video
                                src={videos[activeIndex].videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
