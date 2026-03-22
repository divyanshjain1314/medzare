'use client'
import { motion } from "framer-motion";
import { FadeInCard, StaggerContainer, StaggerItem } from "./FadeInCard";
import { AnimatedText } from "./AnimatedText";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.955 11.955 0 0 0 3 10c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.572-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.286Z" />
      </svg>
    ),
    title: "Quality Assurance",
    desc: "Every product meets rigorous pharmaceutical standards with precision and care.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-7.8-.5 2.1 2.1" />
      </svg>
    ),
    title: "Scientific Innovation",
    desc: "Cutting-edge research and development to bring the best healthcare solutions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Patient-First",
    desc: "Driven by compassion — the health and well-being of every patient guides us.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "hsl(222,47%,8%)" }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-0 w-1/2 h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(212,175,55,0.03) 0%, transparent 60%)",
          }}
        />
        {/* Horizontal accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <FadeInCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-500/40" />
            <span className="text-yellow-500/70 text-xs tracking-[0.25em] uppercase font-sans">
              Who We Are
            </span>
          </div>
        </FadeInCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column — Text */}
          <div>
            <AnimatedText
              as="h2"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
              delay={0.1}
            >
              A Heritage of Trust, A Future of{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Excellence
              </span>
            </AnimatedText>

            <AnimatedText
              as="p"
              className="text-white/50 text-lg font-sans font-light leading-relaxed mb-6"
              delay={0.2}
            >
              Medzare Pharma Private Limited is a newly incorporated pharmaceutical
              company registered in New Delhi, India, with a clear mission: to make quality
              healthcare accessible, reliable, and innovative.
            </AnimatedText>

            <AnimatedText
              as="p"
              className="text-white/40 text-base font-sans leading-relaxed mb-10"
              delay={0.3}
            >
              Founded under the visionary leadership of{" "}
              <span className="text-yellow-500/70 font-medium">Sunil Kumar Jain</span> and{" "}
              <span className="text-yellow-500/70 font-medium">Archana Devi</span>, we are
              committed to contributing meaningfully to India's pharmaceutical landscape with
              integrity, precision, and compassion.
            </AnimatedText>

            {/* Company info tags */}
            <FadeInCard delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {[
                  "CIN: U46497DL2026PTC464403",
                  "PAN: AAUCM6526E",
                  "TAN: DELMS4364C",
                  "Incorp. 11 Mar 2026",
                  "ROC Delhi 1",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs text-white/40 border border-white/8 font-mono"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeInCard>
          </div>

          {/* Right Column — Pillars */}
          <StaggerContainer staggerDelay={0.12}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <motion.div
                  className="group flex gap-5 p-6 rounded-2xl border border-white/5 mb-4 cursor-default"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                  whileHover={{
                    borderColor: "rgba(212,175,55,0.25)",
                    background: "rgba(212,175,55,0.04)",
                    x: 4,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-yellow-500/70 group-hover:text-yellow-400 transition-colors duration-300"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.15)",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white/90 font-medium mb-1.5 group-hover:text-white transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
