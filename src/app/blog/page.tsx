"use client";

import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";

import { blogPosts } from "@/lib/blogData";

const categories = ["All", "Fertility", "Pregnancy", "PCOS", "Gynecology", "Family Planning"];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(p => p.category === selectedCategory);

    const featuredPosts = filteredPosts.filter(p => p.featured);
    const allRegularPosts = filteredPosts.filter(p => !p.featured);
    
    const [visibleCount, setVisibleCount] = useState(12);
    const regularPosts = allRegularPosts.slice(0, visibleCount);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + 12, allRegularPosts.length));
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [allRegularPosts.length]);

    return (
        <main className="relative bg-gray-50/50">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="container-fluid mx-auto max-w-[1400px]">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C21975]/20 bg-[#fff5f9] text-[#C21975] text-sm font-semibold mb-6 tracking-wide uppercase">
                                Expert Insights
                            </span>
                            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Latest Updates in <span className="text-[#C21975]">Women&apos;s Health</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Explore our collection of articles on pregnancy, fertility, and gynecological health, written by Dr. Vinita Khemani.
                            </p>
                        </motion.div>
                    </div>

                    {/* Featured Posts Grid - Modern Masonry Style */}
                    {featuredPosts.length > 0 && (
                        <div className="grid lg:grid-cols-2 gap-8 mb-20">
                            {featuredPosts.map((post, i) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                >
                                    <Link href={`/blog/${post.slug}`} className="block h-full">
                                        <div className="aspect-[16/9] w-full relative overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur text-sm font-bold text-[#C21975] shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 lg:p-10">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-[#C21975] transition-colors leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-[#C21975] font-bold tracking-wide group-hover:gap-3 transition-all">
                                                Read Full Article <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* Simple Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setVisibleCount(12);
                                }}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-[#C21975] text-white shadow-lg shadow-[#C21975]/25'
                                    : 'bg-white text-gray-600 hover:bg-[#fff5f9] hover:text-[#C21975] border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Regular Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {regularPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-[#C21975]">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C21975] transition-colors leading-snug line-clamp-2 mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                                                    <User className="w-4 h-4 text-gray-500" />
                                                </div>
                                                <span className="text-xs font-semibold text-gray-600">Dr. Vinita Khemani</span>
                                            </div>
                                            <span className="w-8 h-8 rounded-full bg-[#fff5f9] flex items-center justify-center text-[#C21975] group-hover:bg-[#C21975] group-hover:text-white transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Infinite Scroll Loader */}
                    {visibleCount < allRegularPosts.length && (
                        <div ref={loaderRef} className="py-12 flex justify-center">
                            <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-[#C21975] animate-spin"></div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-20 px-6">
                <div className="container-fluid mx-auto max-w-[1400px]">
                    <div className="rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden isolation-auto" style={{ background: 'linear-gradient(135deg, #730940 0%, #C21975 100%)' }}>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Stay Updated with Women&apos;s Health</h2>
                        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">Get the latest insights, tips, and medical advice from Dr. Vinita Khemani directly to your inbox.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto relative z-10">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-pink-200 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm"
                            />
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#C21975] font-bold hover:bg-pink-50 transition-colors shadow-xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
