"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar, Clock, ArrowLeft, ArrowUpRight, Tag
} from "lucide-react";

export default function BlogArticlePage() {
    return (
        <main className="relative">
            <Navigation />

            {/* Article Header */}
            <section className="bg-white px-2 pt-24 pb-8 md:pt-28 md:px-4 lg:pt-32 lg:px-6">
                <div className="mx-auto w-[95%] px-4 md:px-0">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[#C21975] font-semibold mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <span className="inline-block px-3 py-1 rounded-full bg-[#f5e6ef] text-[#C21975] text-sm font-bold mb-4">Pregnancy</span>
                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                10 Essential Tips for a Healthy Pregnancy Journey
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> January 15, 2026</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
                                <span className="flex items-center gap-2">By Dr. Vinita Khemani</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="bg-white pb-12">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                        <Image src="/images/Pregnancy Care.png" alt="Healthy pregnancy tips" fill className="object-cover" priority />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-[#C21975] pl-6 italic">
                            Pregnancy is one of the most transformative experiences in a woman&apos;s life. With the right care and guidance, every mother can have a healthy, comfortable pregnancy journey. Here are Dr. Vinita Khemani&apos;s top 10 evidence-based tips.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Start Prenatal Vitamins Early</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Begin taking folic acid (400-800 mcg daily) ideally before conception and throughout the first trimester. Folic acid significantly reduces the risk of neural tube defects. Your gynecologist will prescribe a comprehensive prenatal vitamin that includes iron, calcium, DHA, and vitamin D.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Schedule Regular Prenatal Checkups</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Regular prenatal visits are crucial for monitoring your health and your baby&apos;s development. Typical schedule: monthly visits until week 28, bi-weekly until week 36, then weekly until delivery. High-risk pregnancies may require more frequent monitoring.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Eat a Balanced, Nutrient-Rich Diet</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Focus on whole grains, lean proteins, fruits, vegetables, and dairy. Include iron-rich foods (spinach, lentils, jaggery), calcium sources (milk, paneer, ragi), and omega-3 fatty acids (walnuts, fish oil). Avoid raw fish, unpasteurized dairy, and excessive caffeine.
                        </p>

                        <div className="p-8 rounded-[2rem] bg-[#f5e6ef] my-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Dr. Khemani&apos;s Tip</h3>
                            <p className="text-gray-700 leading-relaxed">
                                &ldquo;I always tell my patients: eat for nutrition, not for two. Quality matters more than quantity. A well-balanced diet with adequate hydration (8-10 glasses of water daily) is the foundation of a healthy pregnancy.&rdquo;
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Stay Active with Safe Exercise</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Moderate exercise during pregnancy is safe and beneficial. Walking, swimming, prenatal yoga, and light stretching improve circulation, reduce back pain, help with sleep, and prepare the body for labor. Aim for 30 minutes of activity most days.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Get Adequate Rest & Sleep</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Sleep 7-9 hours nightly. Sleep on your left side during the third trimester to improve blood flow to the baby. Use pregnancy pillows for comfort, and don&apos;t hesitate to take short naps during the day if needed.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Manage Stress & Mental Health</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Pregnancy hormones can affect mood. Practice relaxation techniques like deep breathing, meditation, or prenatal yoga. Communicate openly with your partner and healthcare provider about any anxiety or mood changes.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Attend All Recommended Scans</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Key scans include: dating scan (6-8 weeks), NT scan (11-13 weeks), anomaly scan (18-20 weeks), and growth scan (32-34 weeks). These help monitor your baby&apos;s development and catch any concerns early.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Know the Warning Signs</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Seek immediate medical attention for: severe headaches, blurred vision, sudden swelling of face/hands, decreased fetal movement, vaginal bleeding, persistent abdominal pain, or high fever. Early intervention is key.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Prepare for Delivery</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Discuss your delivery preferences (normal vs. painless) with your doctor during the third trimester. Pack your hospital bag by week 36. Attend birthing preparation classes and know the signs of labor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Plan Your Postnatal Care</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Postnatal care is just as important. Plan for breastfeeding support, postpartum checkups (at 2 and 6 weeks), vaccinations for the baby, and mental health monitoring. Don&apos;t hesitate to seek help if you feel overwhelmed.
                        </p>
                    </div>

                    {/* Author Box */}
                    <div className="mt-16 p-8 rounded-[2rem] bg-[#f5e6ef] flex flex-col sm:flex-row gap-6 items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
                            <Image src="/images/2023-02-08.jpg" alt="Dr. Vinita Khemani" width={96} height={96} className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-lg">Dr. Vinita Khemani</p>
                            <p className="text-sm text-[#C21975] font-semibold mb-2">MBBS, MS (Obs & Gyn) | 21+ Years Experience</p>
                            <p className="text-sm text-gray-600">Leading gynecologist and obstetrician in Kolkata with 10,000+ patients and 2,348+ successful deliveries.</p>
                        </div>
                    </div>

                    {/* Share & Tags */}
                    <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-gray-400" />
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Pregnancy</span>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Health Tips</span>
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Prenatal Care</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts CTA */}
            <section className="py-20 bg-[#F5F5F5]">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "High-Risk Pregnancy: What to Expect", slug: "high-risk-pregnancy-what-to-expect", image: "/images/High-Risk Pregnancy.webp", category: "Pregnancy" },
                            { title: "Understanding PCOS: Complete Guide", slug: "understanding-pcos-complete-guide", image: "/images/2023-02-08.webp", category: "PCOS" },
                            { title: "When to See a Fertility Specialist", slug: "when-to-see-fertility-specialist", image: "/images/Fertility Treatment.webp", category: "Fertility" },
                        ].map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`} className="group block rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500">
                                <div className="relative h-[180px] overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4"><span className="px-3 py-1 rounded-full bg-[#C21975] text-white text-xs font-bold">{post.category}</span></div>
                                </div>
                                <div className="p-6"><h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C21975] transition-colors">{post.title}</h3></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container-fluid mx-auto max-w-[1400px] px-6">
                    <div className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Have Questions About Your Pregnancy?</h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">Consult Dr. Vinita Khemani for personalized advice and expert prenatal care.</p>
                        <Link href="/contact" className="group inline-flex items-center justify-center gap-3 pr-2 pl-8 py-1 rounded-full bg-white text-[#C21975] font-semibold text-lg hover:scale-105 transition-transform shadow-xl">
                            Book Consultation <span className="w-12 h-12 rounded-full bg-[#C21975] text-white flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight className="w-6 h-6" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", "headline": "10 Essential Tips for a Healthy Pregnancy Journey", "author": { "@type": "Person", "name": "Dr. Vinita Khemani" }, "datePublished": "2026-01-15", "description": "Evidence-based pregnancy tips from Dr. Vinita Khemani" }) }} />
            <Footer />
        </main>
    );
}
