"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Loader2 } from "lucide-react";
import { ImageHoverEffect } from "@/components/ImageHoverEffect";
import { useState, useEffect } from "react";

interface InstagramPost {
  id: string;
  permalink: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes?: {
    medium?: {
      mediaUrl: string;
    }
  };
  caption?: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await fetch("https://feeds.behold.so/LLNlMNGTgh4NYnOB8OBj");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram feed");
        }
        const data = await response.json();
        // Get the first 6 posts
        if (data && data.posts) {
          setPosts(data.posts.slice(0, 6));
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching Instagram feed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

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
            @dr_vinita_khemani
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Follow <span style={{ color: '#a43971' }}>@dr_vinita_khemani</span>
          </h2>
          <p className="text-gray-600">
            Women&apos;s health tips, pregnancy guidance, patient success stories, and clinic updates.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#a43971]" />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center text-red-500 py-8">
            Unable to load Instagram feed at this time.
          </div>
        )}

        {/* Instagram Grid with Stagger */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {posts.map((post, index) => {
              // Priority: sizes.medium.mediaUrl (if available), then thumbnailUrl (for videos), then mediaUrl
              const imageUrl = post.sizes?.medium?.mediaUrl || post.thumbnailUrl || post.mediaUrl;

              return (
                <motion.a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg block"
                >
                  <ImageHoverEffect
                    src={imageUrl}
                    alt={`Instagram post ${post.id}`}
                    variant="elastic"
                    className="w-full h-full object-cover"
                    overlayContent={
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4">
                        <Instagram className="w-8 h-8 text-white mb-2" />
                      </div>
                    }
                  />
                </motion.a>
              );
            })}
          </div>
        )}

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/dr_vinita_khemani"
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
