"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type HoverVariant = "tilt" | "reveal" | "kenburns" | "elastic" | "glow";

interface ImageHoverEffectProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  variant: HoverVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  overlayContent?: React.ReactNode;
  children?: React.ReactNode;
}

export function ImageHoverEffect({
  src,
  alt,
  fill = true,
  width,
  height,
  variant,
  className = "",
  imageClassName = "",
  priority = false,
  overlayContent,
  children,
}: ImageHoverEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (variant !== "tilt") return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      setTiltStyle({ rotateX, rotateY });
    },
    [variant]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // --- TILT VARIANT ---
  if (variant === "tilt") {
    return (
      <div
        ref={containerRef}
        className={`img-hover-tilt-container ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          perspective: "800px",
        }}
      >
        <motion.div
          className="img-hover-tilt-inner"
          animate={{
            rotateX: tiltStyle.rotateX,
            rotateY: tiltStyle.rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
            {fill ? (
              <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isHovered ? "scale-110" : "scale-100"
                } ${imageClassName}`}
                priority={priority}
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`object-cover transition-transform duration-700 w-full h-full ${
                  isHovered ? "scale-110" : "scale-100"
                } ${imageClassName}`}
                priority={priority}
              />
            )}
            {/* Shimmer sweep overlay */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="img-hover-shimmer-sweep" />
            </div>
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            {overlayContent && (
              <div
                className={`absolute inset-0 flex items-end p-6 transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {overlayContent}
              </div>
            )}
          </div>
          {children}
        </motion.div>
      </div>
    );
  }

  // --- REVEAL VARIANT ---
  if (variant === "reveal") {
    return (
      <div
        ref={containerRef}
        className={`img-hover-reveal-container group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full overflow-hidden">
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover object-center transition-all duration-700 ease-out ${
                isHovered ? "scale-105 brightness-105" : "scale-100"
              } ${imageClassName}`}
              priority={priority}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`object-cover object-center transition-all duration-700 ease-out w-full h-full ${
                isHovered ? "scale-105 brightness-105" : "scale-100"
              } ${imageClassName}`}
              priority={priority}
            />
          )}
          {/* Diagonal curtain */}
          <div
            className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHovered
                ? "translate-x-full translate-y-full opacity-0"
                : "translate-x-0 translate-y-0 opacity-100"
            }`}
            style={{
              background:
                "linear-gradient(135deg, rgba(194,25,117,0.15) 0%, rgba(164,57,113,0.08) 50%, transparent 100%)",
            }}
          />
          {/* Rising line accent */}
          <div
            className={`absolute bottom-0 left-0 w-full h-[3px] transition-all duration-500 delay-100 ${
              isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            } origin-left`}
            style={{
              background:
                "linear-gradient(90deg, #C21975 0%, transparent 100%)",
            }}
          />
          {overlayContent}
        </div>
        {children}
      </div>
    );
  }

  // --- KEN BURNS VARIANT ---
  if (variant === "kenburns") {
    return (
      <div
        ref={containerRef}
        className={`img-hover-kenburns-container group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full overflow-hidden">
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover transition-all duration-[1200ms] ease-out ${
                isHovered
                  ? "scale-110 -translate-x-1 -translate-y-1"
                  : "scale-100 translate-x-0 translate-y-0 img-hover-kenburns-drift"
              } ${imageClassName}`}
              priority={priority}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`object-cover transition-all duration-[1200ms] ease-out w-full h-full ${
                isHovered
                  ? "scale-110 -translate-x-1 -translate-y-1"
                  : "scale-100 translate-x-0 translate-y-0 img-hover-kenburns-drift"
              } ${imageClassName}`}
              priority={priority}
            />
          )}
          {/* Frosted overlay on hover */}
          <div
            className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
              isHovered
                ? "bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100"
                : "opacity-0"
            }`}
          />
          {overlayContent}
        </div>
        {children}
      </div>
    );
  }

  // --- ELASTIC VARIANT ---
  if (variant === "elastic") {
    return (
      <motion.div
        ref={containerRef}
        className={`img-hover-elastic-container group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.06,
          rotate: 1.5,
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
      >
        {/* Gradient border glow */}
        <div
          className={`absolute -inset-[3px] rounded-2xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #C21975, #d4a5c4, #a43971, #f5e6ef)",
            backgroundSize: "300% 300%",
            animation: isHovered ? "gradient-border-spin 3s linear infinite" : "none",
          }}
        />
        <div className="relative w-full h-full overflow-hidden rounded-2xl z-10 bg-white">
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              } ${imageClassName}`}
              priority={priority}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={`object-cover transition-transform duration-500 w-full h-full ${
                isHovered ? "scale-110" : "scale-100"
              } ${imageClassName}`}
              priority={priority}
            />
          )}
          {overlayContent && (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {overlayContent}
            </div>
          )}
        </div>
        {children}
      </motion.div>
    );
  }

  // --- GLOW VARIANT ---
  if (variant === "glow") {
    return (
      <div
        ref={containerRef}
        className={`img-hover-glow-container group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative" }}
      >
        {/* Glow ring behind */}
        <div
          className={`absolute -inset-4 rounded-[3rem] transition-all duration-700 ${
            isHovered
              ? "opacity-70 scale-105 blur-xl"
              : "opacity-0 scale-100 blur-lg"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(194,25,117,0.4) 0%, rgba(164,57,113,0.1) 60%, transparent 80%)",
          }}
        />
        <div className="relative z-10 w-full h-full">
          {children || (
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
              {fill ? (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  } ${imageClassName}`}
                  priority={priority}
                />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className={`object-cover transition-transform duration-700 w-full h-full ${
                    isHovered ? "scale-110" : "scale-100"
                  } ${imageClassName}`}
                  priority={priority}
                />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
              {overlayContent}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
