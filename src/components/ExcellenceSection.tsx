'use client'
import { motion } from "framer-motion";
import { FadeInCard, StaggerContainer, StaggerItem } from "./FadeInCard";
import { AnimatedText } from "./AnimatedText";

const excellenceCards = [
  {
    number: "01",
    title: "Pharmaceutical Distribution",
    description:
      "Efficient and reliable pharmaceutical distribution network ensuring medicines reach those who need them most, on time and in optimal condition.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Regulatory Compliance",
    description:
      "Strict adherence to all pharmaceutical regulations and standards set by India's health authorities, ensuring every product is safe and certified.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.955 11.955 0 0 0 3 10c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.572-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.286Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ethical Business Practices",
    description:
      "Transparency and integrity at the core of everything we do — from sourcing and supply chain to partnerships and customer relationships.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-12.5 0-.751 3.742A48.301 48.301 0 0 1 5.5 8.25M6.25 4.97l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L6.25 4.97Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Healthcare Innovation",
    description:
      "Continuously exploring new frontiers in pharmaceutical sciences to improve formulations, enhance bioavailability, and expand our product portfolio.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Pan-India Reach",
    description:
      "Building a network that spans across India, enabling seamless access to essential medicines and pharmaceutical products for all demographics.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Trusted Partnerships",
    description:
      "Cultivating long-term relationships with healthcare providers, hospitals, and distributors based on mutual trust, quality, and shared values.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Compliance" },
  { value: "∞", label: "Commitment" },
];

export function ExcellenceSection() {
  return (
    <section
      id="excellence"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(222,47%,8%) 0%, hsl(222,40%,10%) 50%, hsl(222,47%,8%) 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(212,175,55,0.8) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <FadeInCard>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-500/40" />
              <span className="text-yellow-500/70 text-xs tracking-[0.25em] uppercase font-sans">
                Our Excellence
              </span>
              <div className="h-px w-12 bg-yellow-500/40" />
            </div>
          </FadeInCard>

          <AnimatedText
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 max-w-3xl mx-auto"
            delay={0.1}
          >
            The Pillars of Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pharmaceutical Promise
            </span>
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-white/45 text-lg font-sans font-light max-w-2xl mx-auto"
            delay={0.2}
          >
            We are built on six core commitments that guide every decision,
            every product, and every relationship.
          </AnimatedText>
        </div>

        {/* Stats bar */}
        <FadeInCard delay={0.2} className="mb-20">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-0 rounded-2xl overflow-hidden border border-yellow-500/10 max-w-2xl mx-auto"
            style={{ background: "rgba(212,175,55,0.03)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 flex flex-col items-center py-8 px-8 w-full ${
                  i < stats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-yellow-500/10"
                    : ""
                }`}
              >
                <span
                  className="font-serif text-4xl font-semibold mb-1"
                  style={{
                    background: "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-white/35 text-xs tracking-[0.2em] uppercase font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInCard>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {excellenceCards.map((card) => (
            <StaggerItem key={card.number}>
              <motion.div
                className="group relative p-7 rounded-2xl border border-white/6 h-full cursor-default"
                style={{ background: "rgba(255,255,255,0.02)" }}
                whileHover={{
                  borderColor: "rgba(212,175,55,0.22)",
                  background: "rgba(212,175,55,0.035)",
                  y: -4,
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                {/* Number */}
                <div className="text-[10px] text-yellow-500/30 font-mono tracking-[0.2em] mb-5">
                  {card.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-yellow-500/60 group-hover:text-yellow-400 transition-colors duration-300"
                  style={{
                    background: "rgba(212,175,55,0.07)",
                    border: "1px solid rgba(212,175,55,0.12)",
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="font-serif text-xl text-white/85 font-medium mb-3 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-sans">
                  {card.description}
                </p>

                {/* Bottom gold accent line (reveals on hover) */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
                    scaleX: 0,
                    transformOrigin: "center",
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
