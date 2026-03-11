import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BlogCTA } from "@/components/BlogCTA";

import { blogPosts } from "@/lib/blogData";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Dr. Vinita Khemani`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Dr. Vinita Khemani"],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="relative bg-white">
            <Navigation />

            {/* Hero / Header */}
            <div className="relative pt-32 pb-32 lg:pb-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf8fa 0%, #fff 100%)' }}>
                {/* Premium Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container-fluid mx-auto max-w-[1000px] px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C21975] mb-8 transition-colors text-sm font-semibold">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-[#f5e6ef] text-[#C21975] text-xs font-bold uppercase tracking-wider border border-[#d4a5c4]/50 shadow-sm">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-[#C21975]" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-[#C21975]" /> {post.readTime}
                            </span>
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.15] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-t border-gray-200/60 pt-6">
                        <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                            <Image src="/images/dr-vinita-khemani.jpeg" alt="Dr. Vinita Khemani" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">Dr. Vinita Khemani</p>
                            <p className="text-sm text-gray-500 font-medium">Senior Gynecologist & Obstetrician</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container-fluid mx-auto max-w-[1000px] px-6 -mt-24 lg:-mt-32 mb-6 md:mb-12 relative z-20">
                <div className="h-[300px] md:h-[400px] lg:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>

            {/* Content Body */}
            <article className="container-fluid mx-auto max-w-[800px] px-6 pb-16 lg:pb-20 pt-4 md:pt-8">
                <div
                    className="
                        max-w-none text-gray-700 leading-relaxed text-lg
                        [&_p]:mb-6 
                        [&_h2]:font-display [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-12
                        [&_h3]:font-display [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-10
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3
                        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3
                        [&_li]:text-gray-700
                        [&_a]:text-[#C21975] [&_a]:underline [&_a]:underline-offset-2
                        [&_strong]:font-bold [&_strong]:text-gray-900
                    "
                    dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                />

                {/* Styled CTA Box */}
                <BlogCTA />
            </article>

            <Footer />
        </main>
    );
}
