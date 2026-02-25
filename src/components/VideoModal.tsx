"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = "/videos/review1.mp4" }: VideoModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#C21975] transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
