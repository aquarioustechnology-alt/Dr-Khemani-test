"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { useEffect } from "react";

interface FormStatusDialogProps {
    isOpen: boolean;
    onClose: () => void;
    status: "success" | "error";
    title?: string;
    message?: string;
}

export function FormStatusDialog({
    isOpen,
    onClose,
    status,
    title,
    message,
}: FormStatusDialogProps) {
    const isSuccess = status === "success";

    // Auto-close after 5 seconds on success
    useEffect(() => {
        if (isOpen && isSuccess) {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isSuccess, onClose]);

    const defaultTitle = isSuccess
        ? "Request Submitted!"
        : "Something Went Wrong";

    const defaultMessage = isSuccess
        ? "Thank you! Our team will reach out to you within 30 minutes during working hours."
        : "We couldn't submit your request right now. Please try again or call us directly at +91 99035 88155.";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Animated Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isSuccess
                                    ? "bg-green-50 text-green-500"
                                    : "bg-red-50 text-red-500"
                                }`}
                        >
                            {isSuccess ? (
                                <CheckCircle2 className="w-10 h-10" />
                            ) : (
                                <XCircle className="w-10 h-10" />
                            )}
                        </motion.div>

                        {/* Title */}
                        <h3
                            className={`text-2xl font-bold font-display mb-3 ${isSuccess ? "text-gray-900" : "text-red-600"
                                }`}
                        >
                            {title || defaultTitle}
                        </h3>

                        {/* Message */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {message || defaultMessage}
                        </p>

                        {/* Action Button */}
                        <button
                            onClick={onClose}
                            className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all active:scale-[0.98] ${isSuccess
                                    ? "bg-[#C21975] hover:bg-[#a01560] text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                        >
                            {isSuccess ? "Done" : "Try Again"}
                        </button>

                        {/* Phone fallback on error */}
                        {!isSuccess && (
                            <p className="mt-4 text-xs text-gray-500">
                                Or call us directly:{" "}
                                <a
                                    href="tel:+919903588155"
                                    className="text-[#C21975] font-semibold hover:underline"
                                >
                                    +91 99035 88155
                                </a>
                            </p>
                        )}

                        {/* Auto-close indicator on success */}
                        {isSuccess && (
                            <motion.div
                                initial={{ scaleX: 1 }}
                                animate={{ scaleX: 0 }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="absolute bottom-0 left-0 right-0 h-1 bg-[#C21975] rounded-b-3xl origin-left"
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
