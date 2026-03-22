'use client'
import { motion } from "framer-motion";
import { HeroText } from "./AnimatedText";

function FloatingOrb({
  size,
  x,
  y,
  delay,
  duration,
  opacity = 0.15,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, rgba(212,175,55,${opacity}) 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        scale: [1, 1.08, 0.95, 1.05, 1],
        opacity: [opacity, opacity * 1.4, opacity * 0.7, opacity * 1.2, opacity],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GeometricLine({
  x1, y1, x2, y2, delay
}: {
  x1: string; y1: string; x2: string; y2: string; delay: number;
}) {
  return (
    <motion.svg
      className="absolute pointer-events-none"
      style={{ left: x1, top: y1, width: 300, height: 300 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 2 }}
    >
      <motion.line
        x1="0" y1="0" x2={x2} y2={y2}
        stroke="rgba(212,175,55,0.12)"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: delay + 0.5, duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,9%) 50%, hsl(222,40%,12%) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large ambient orbs */}
        <FloatingOrb size={600} x="-10%" y="-20%" delay={0} duration={10} opacity={0.08} />
        <FloatingOrb size={500} x="60%" y="10%" delay={2} duration={12} opacity={0.07} />
        <FloatingOrb size={400} x="20%" y="50%" delay={1} duration={9} opacity={0.05} />
        <FloatingOrb size={300} x="70%" y="60%" delay={3} duration={11} opacity={0.06} />

        {/* Small bright orbs */}
        <FloatingOrb size={80} x="15%" y="25%" delay={0.5} duration={7} opacity={0.4} />
        <FloatingOrb size={60} x="75%" y="30%" delay={1.5} duration={8} opacity={0.35} />
        <FloatingOrb size={50} x="45%" y="70%" delay={2.5} duration={6} opacity={0.3} />
        <FloatingOrb size={40} x="85%" y="70%" delay={0.8} duration={9} opacity={0.25} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial gradient center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,175,55,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Decorative top line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/25 mb-8"
          style={{
            background: "rgba(212,175,55,0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase font-sans font-medium">
            Est. 2026 · New Delhi, India
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="mb-6 overflow-hidden">
          <HeroText className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white">
            Advancing Health
          </HeroText>
        </div>
        <div className="mb-6 overflow-hidden">
          <HeroText
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 40%, hsl(35,70%,60%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } as React.CSSProperties}
          >
            Through Science
          </HeroText>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-sans font-light leading-relaxed mb-10"
        >
          Medzare Pharma Private Limited — committed to delivering premium quality
          pharmaceutical solutions with the highest standards of integrity and innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => {
              document.querySelector("#excellence")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic-btn px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-yellow-900"
            style={{
              background:
                "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,75%) 100%)",
              boxShadow: "0 0 30px rgba(212,175,55,0.25), 0 4px 20px rgba(0,0,0,0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(212,175,55,0.4), 0 6px 30px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Discover Our Excellence
          </motion.button>

          <motion.button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic-btn px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white/80 border border-white/15 hover:border-yellow-500/30 hover:text-yellow-300/90 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
            }}
            whileHover={{
              scale: 1.05,
              background: "rgba(212,175,55,0.07)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-yellow-500/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Decorative floating molecules / shapes */}
      <motion.div
        className="absolute left-[8%] top-[30%] pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="rgba(212,175,55,0.12)" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="18" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="4" fill="rgba(212,175,55,0.2)" />
          <line x1="30" y1="2" x2="30" y2="12" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" />
          <line x1="30" y1="48" x2="30" y2="58" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" />
          <line x1="2" y1="30" x2="12" y2="30" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" />
          <line x1="48" y1="30" x2="58" y2="30" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[25%] pointer-events-none"
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M25 2L48 14V36L25 48L2 36V14L25 2Z"
            stroke="rgba(212,175,55,0.12)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M25 12L38 19V31L25 38L12 31V19L25 12Z"
            stroke="rgba(212,175,55,0.08)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[12%] bottom-[30%] pointer-events-none"
        animate={{ y: [0, 15, -5, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect
            x="4" y="4" width="32" height="32"
            stroke="rgba(212,175,55,0.1)" strokeWidth="0.5"
            fill="none" rx="4"
            transform="rotate(45 20 20)"
          />
        </svg>
      </motion.div>
    </section>
  );
}
