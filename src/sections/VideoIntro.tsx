import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

export function VideoIntro() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Compassionate Care, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                                Advanced Expertise
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Watch to learn more about Dr. Vinita Khemani's approach to women's
                            health and patient care. We believe in empowering women through
                            knowledge and personalized treatment plans.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">👩‍⚕️</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-gray-900 text-lg">Personalized Approach</h3>
                                    <p className="text-gray-500 text-sm">Every patient receives a tailored care plan.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🏥</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-gray-900 text-lg">Modern Facilities</h3>
                                    <p className="text-gray-500 text-sm">State-of-the-art clinics and equipment.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-gray-900 group">
                            {!isPlaying ? (
                                <>
                                    <img
                                        src="/images/gallery-1142174745.jpg" // Using one of the uploaded images as thumbnail
                                        alt="Dr. Khemani Video Thumbnail"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={() => setIsPlaying(true)}
                                            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                                                <Play className="w-6 h-6 text-pink-600 ml-1" fill="currentColor" />
                                            </div>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <iframe
                                    src="https://www.youtube.com/embed/wEXNzq5zcw8?autoplay=1&rel=0"
                                    title="Dr. Vinita Khemani Introduction"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-200/40 to-blue-200/40 blur-3xl rounded-full pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
