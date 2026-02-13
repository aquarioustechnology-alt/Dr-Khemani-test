"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: VideoModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] bg-black p-0 border-none overflow-hidden aspect-video">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white z-50 hover:scale-110 transition-transform"
                >
                    <X className="w-6 h-6" />
                </button>
                <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </DialogContent>
        </Dialog>
    );
}
