"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { instagramPosts } from "@/lib/data";

export function InstagramFeed() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <FadeInWhenVisible>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4">
                <Instagram className="w-4 h-4 inline mr-2" />
                Follow Us
              </span>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                @dr_vinita_khemani
              </h2>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-gray-600">
                Stay updated with health tips, patient stories, and clinic updates
              </p>
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible delay={0.3}>
            <a
              href="https://instagram.com/dr_vinita_khemani"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </FadeInWhenVisible>
        </div>

        {/* Instagram Grid - Mosaic Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <FadeInWhenVisible key={post.id} delay={index * 0.05}>
              <motion.a
                href="https://instagram.com/dr_vinita_khemani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`group relative block overflow-hidden rounded-2xl aspect-square ${
                  index === 0 || index === 3 ? "md:row-span-2 aspect-[9/16] md:aspect-auto" : ""
                }`}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-100 to-warm-100 flex items-center justify-center">
                  <span className="text-medical-400 text-sm">IG Post {post.id}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>

                {/* Caption (visible on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </motion.a>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
