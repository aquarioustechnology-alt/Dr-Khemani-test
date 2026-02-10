"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";

const instagramPosts = [
  { id: 1, image: "/images/Pregnancy Care.png", likes: 245 },
  { id: 2, image: "/images/Laparoscopic Surgery.jpg", likes: 189 },
  { id: 3, image: "/images/High-Risk Pregnancy.webp", likes: 312 },
  { id: 4, image: "/images/Fertility Treatment.webp", likes: 278 },
  { id: 5, image: "/images/WhatsApp Image 2026-01-14 at 12.55.30 PM (1).jpeg", likes: 421 },
  { id: 6, image: "/images/WhatsApp Image 2025-12-22 at 12.26.52 PM.jpeg", likes: 156 },
];

export function InstagramFeed() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(to bottom, #ffffff, #f5e6ef)' }}>
      <div className="container-fluid">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: 'linear-gradient(to right, #f5e6ef, #e8d5e0)', color: '#a43971' }}>
            <Instagram className="w-4 h-4" />
            @drvinitakhemani
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Follow <span className="text-gradient">@drvinitakhemani</span>
          </h2>
          <p className="text-gray-600">
            Women&apos;s health tips, pregnancy guidance, patient success stories, and clinic updates.
          </p>
        </motion.div>

        {/* Instagram Grid with Stagger */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/drvinitakhemani"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4">
                <Instagram className="w-8 h-8 text-white mb-2" />
                <span className="text-white text-sm font-medium">{post.likes} likes</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/drvinitakhemani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:shadow-xl hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(to right, #a43971, #c97ba3, #d4a5c4)' }}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
