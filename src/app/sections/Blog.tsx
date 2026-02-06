"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Understanding High-Risk Pregnancy: Causes & Care",
        excerpt: "Pregnancy is a beautiful journey, but for some, it comes with added complexities. Learn about risk factors and specialized care.",
        image: "/images/1656409765121.webp",
        date: "Feb 12, 2024",
        author: "Dr. Vinita Khemani",
        readTime: "5 min read",
        category: "Pregnancy"
    },
    {
        id: 2,
        title: "PCOS Management: Lifestyle Changes That Help",
        excerpt: "Polycystic Ovary Syndrome affects many women. Discover actionable lifestyle shifts and dietary habits to manage symptoms effectively.",
        image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg",
        date: "Feb 08, 2024",
        author: "Dr. Vinita Khemani",
        readTime: "4 min read",
        category: "Women's Health"
    },
    {
        id: 3,
        title: "Minimally Invasive Surgery: Benefits of Laparoscopy",
        excerpt: "Why choose laparoscopic surgery? Explore the benefits including faster recovery, less pain, and minimal scarring.",
        image: "/images/WhatsApp Image 2025-12-22 at 12.26.52 PM.jpeg",
        date: "Jan 28, 2024",
        author: "Dr. Vinita Khemani",
        readTime: "6 min read",
        category: "Surgery"
    }
];

export function Blog() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-fluid mx-auto max-w-[1400px] px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-2 rounded-full border border-[#C21975]/30 bg-[#fff5f9] text-[#C21975] text-sm font-medium mb-6">
                            Health Insights
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight animate-text-gradient">
                            Latest from the <br />
                            <span className="text-gray-900">Health Blog</span>
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center gap-2 group text-[#C21975] font-semibold"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#C21975]/20 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-[#C21975] uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.date}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-[#C21975] transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#fff5f9] flex items-center justify-center">
                                            <User className="w-4 h-4 text-[#C21975]" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-900">{post.author}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#C21975] group-hover:border-[#C21975] group-hover:text-white transition-all"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C21975] text-white font-semibold text-sm w-full"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
