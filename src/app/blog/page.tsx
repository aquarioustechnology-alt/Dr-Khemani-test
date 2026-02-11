"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
    {
        id: "1",
        slug: "a-quick-guide-on-pcos-and-how-to-beat-it-without-fear",
        title: "A Quick Guide on PCOS and How to Beat It without Fear",
        excerpt: "The impact of PCOS extends to various symptoms that can significantly affect a woman's quality of life. In this blog post, we will provide a comprehensive overview of PCOS, exploring its causes and treatments.",
        category: "PCOS",
        readTime: "5 min read",
        date: "Apr 13, 2023",
        image: "/images/blog/pcos-treatment.jpg",
        featured: true,
    },
    {
        id: "2",
        slug: "the-importance-of-family-planning-understanding-contraception",
        title: "The Importance of Family Planning: Understanding Contraception",
        excerpt: "Navigating married life can be challenging, and making decisions about family planning is no exception. Choosing the right contraceptive method is an essential part of every couple's life.",
        category: "Family Planning",
        readTime: "4 min read",
        date: "Apr 5, 2023",
        image: "/images/blog/family-planning.jpg",
        featured: true,
    },
    {
        id: "3",
        slug: "holistic-approaches-to-fertility-management",
        title: "Holistic Approaches to Fertility Management",
        excerpt: "Lack of Fertility can be a worrying and challenging experience for couples trying to conceive. However, adopting a holistic approach to fertility management can provide hope and empower individuals.",
        category: "Fertility",
        readTime: "6 min read",
        date: "Mar 29, 2023",
        image: "/images/blog/infertility-management.jpg",
        featured: false,
    },
    {
        id: "4",
        slug: "understanding-fertility-management",
        title: "Understanding Fertility Management",
        excerpt: "Fertility issues can be a difficult and emotional journey for many couples, but understanding the available options can offer hope and support. In this blog, we will provide an overview of the various treatments.",
        category: "Fertility",
        readTime: "5 min read",
        date: "Mar 22, 2023",
        image: "/images/blog/understanding-fertility.jpg",
        featured: false,
    },
    {
        id: "5",
        slug: "mid-cycle-spotting-should-you-be-worried",
        title: "Mid-Cycle Spotting: Should You be Worried?",
        excerpt: "Mid-cycle spotting, also known as breakthrough bleeding, can be a common occurrence for many women. However, it can also be a source of concern and anxiety for those who experience it.",
        category: "Gynecology",
        readTime: "3 min read",
        date: "Mar 15, 2023",
        image: "/images/blog/mid-cycle-spotting.jpg",
        featured: false,
    },
    {
        id: "6",
        slug: "what-is-vaginal-infection-all-you-should-know",
        title: "What is Vaginal Infection? All You Should Know",
        excerpt: "Vaginal infections are common. Although they can be uncomfortable and unpleasant, most vaginal infections are not serious and can be easily treated. Learn about symptoms and prevention.",
        category: "Gynecology",
        readTime: "4 min read",
        date: "Mar 9, 2023",
        image: "/images/blog/vaginal-infection.jpg",
        featured: false,
    },
    {
        id: "7",
        slug: "how-does-egg-freezing-work",
        title: "How Does Egg Freezing Work?",
        excerpt: "Egg freezing, also known as oocyte cryopreservation, is a fertility preservation technique that involves extracting a woman's eggs and freezing them at a very low temperature (-196°C) for later use.",
        category: "Fertility",
        readTime: "6 min read",
        date: "Feb 28, 2023",
        image: "/images/blog/egg-freezing.jpg",
        featured: false,
    },
    {
        id: "8",
        slug: "pregnancy-and-sleep-how-to-sleep-well-when-expecting",
        title: "Pregnancy and Sleep: How to Sleep Well When Expecting",
        excerpt: "During pregnancy, sleep can be disrupted by several factors. These may include physical discomfort, hormonal changes, and stress. Learn tips for better sleep during pregnancy.",
        category: "Pregnancy",
        readTime: "5 min read",
        date: "Feb 5, 2023",
        image: "/images/blog/pregnancy-sleep.jpg",
        featured: false,
    },
    {
        id: "9",
        slug: "the-psychological-impact-of-fertility-challenges-in-women",
        title: "The Psychological Impact of Fertility Challenges in Women",
        excerpt: "Fertility issues can profoundly affect a woman’s mental and emotional well-being, triggering a range of complex emotions. Understanding this impact is crucial for holistic care.",
        category: "Fertility",
        readTime: "7 min read",
        date: "Jan 27, 2023",
        image: "/images/blog/fertility-psychology.jpg",
        featured: false,
    },
    {
        id: "10",
        slug: "7-common-fertility-questions-couples-who-cant-conceive-ask",
        title: "7 Common Fertility Questions Couples Ask",
        excerpt: "There are many potential reasons why couples may have difficulty conceiving. Here are answers to common questions couples ask when facing fertility challenges.",
        category: "Fertility",
        readTime: "5 min read",
        date: "Jan 7, 2023",
        image: "/images/blog/fertility-questions.jpg",
        featured: false,
    },
    {
        id: "11",
        slug: "maternity-leave-in-india-what-every-working-women-should-know",
        title: "Maternity Leave in India: What Every Working Woman Should Know",
        excerpt: "India has come a long way regarding maternity leave policy. While the Maternity Benefit Act still has gaps, recent reforms have improved rights for working mothers.",
        category: "General",
        readTime: "5 min read",
        date: "Dec 30, 2022",
        image: "/images/blog/maternity-leave.jpg",
        featured: false,
    },
    {
        id: "12",
        slug: "9-tips-to-avoid-infections-during-pregnancy",
        title: "9 Tips to Avoid Infections During Pregnancy",
        excerpt: "Infections during pregnancy can comply complications. Learn essential hygiene and lifestyle tips to keep yourself and your baby safe from infections.",
        category: "Pregnancy",
        readTime: "4 min read",
        date: "Dec 24, 2022",
        image: "/images/blog/pregnancy-infections.jpg",
        featured: false,
    }
];

const categories = ["All", "Fertility", "Pregnancy", "PCOS", "Gynecology", "Family Planning"];

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(p => p.featured);
    const regularPosts = blogPosts.filter(p => !p.featured);

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
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">
                        {featuredPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
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
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-[#C21975] transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#C21975] font-bold tracking-wide hover:gap-3 transition-all">
                                        Read Full Article <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Simple Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${i === 0
                                    ? 'bg-[#C21975] text-white shadow-lg shadow-[#C21975]/25'
                                    : 'bg-white text-gray-600 hover:bg-[#fff5f9] hover:text-[#C21975] border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Regular Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                            >
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
                                    <Link href={`/blog/${post.slug}`} className="mb-3 block">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C21975] transition-colors leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>
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
                            </motion.article>
                        ))}
                    </div>
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
