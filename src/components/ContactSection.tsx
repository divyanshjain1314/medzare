'use client'
import { motion } from "framer-motion";
import { FadeInCard } from "./FadeInCard";
import { AnimatedText } from "./AnimatedText";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "hsl(222,47%,7%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
          }}
        />
        {/* Floating orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeInCard>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-500/40" />
              <span className="text-yellow-500/70 text-xs tracking-[0.25em] uppercase font-sans">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-yellow-500/40" />
            </div>
          </FadeInCard>

          <AnimatedText
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-5 max-w-3xl mx-auto"
            delay={0.1}
          >
            Let's Build a Healthier{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Future Together
            </span>
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-white/45 text-lg font-sans font-light max-w-xl mx-auto"
            delay={0.2}
          >
            Reach out to us for partnerships, queries, or collaborations.
            We're always open to meaningful conversations.
          </AnimatedText>
        </div>

        {/* Contact Card */}
        <FadeInCard delay={0.25}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative rounded-3xl overflow-hidden border border-yellow-500/12"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.04) 0%, rgba(255,255,255,0.015) 50%, rgba(212,175,55,0.03) 100%)",
                backdropFilter: "blur(20px)",
              }}
              whileHover={{
                borderColor: "rgba(212,175,55,0.22)",
                boxShadow: "0 0 60px rgba(212,175,55,0.08), 0 0 120px rgba(212,175,55,0.04)",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Inner shimmer effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 50%, rgba(212,175,55,0.04) 100%)",
                }}
              />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left: Contact Info */}
                <div
                  className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-yellow-500/10"
                >
                  <h3 className="font-serif text-2xl text-white/90 font-medium mb-8">
                    Contact Details
                  </h3>

                  <div className="space-y-7">
                    {/* Address */}
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "rgba(212,175,55,0.08)",
                          border: "1px solid rgba(212,175,55,0.15)",
                        }}
                      >
                        <svg className="w-4 h-4 text-yellow-500/70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-yellow-500/60 text-xs tracking-[0.15em] uppercase mb-1 font-sans">
                          Registered Office
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                          H-30 Plot 6 & 7, 3rd Floor<br />
                          Gulshan Park, Vijay Chowk<br />
                          Laxmi Nagar, East Delhi<br />
                          India — 110092
                        </p>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(212,175,55,0.08)",
                          border: "1px solid rgba(212,175,55,0.15)",
                        }}
                      >
                        <svg className="w-4 h-4 text-yellow-500/70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-yellow-500/60 text-xs tracking-[0.15em] uppercase mb-1 font-sans">
                          Phone
                        </div>
                        <a
                          href="tel:+918435369211"
                          className="underline-reveal text-white/60 text-sm hover:text-yellow-400/80 transition-colors duration-300"
                        >
                          +91-8435369211
                        </a>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(212,175,55,0.08)",
                          border: "1px solid rgba(212,175,55,0.15)",
                        }}
                      >
                        <svg className="w-4 h-4 text-yellow-500/70" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-yellow-500/60 text-xs tracking-[0.15em] uppercase mb-1 font-sans">
                          Email
                        </div>
                        <a
                          href="mailto:shirshpalak20@gmail.com"
                          className="underline-reveal text-white/60 text-sm hover:text-yellow-400/80 transition-colors duration-300 break-all"
                        >
                          shirshpalak20@gmail.com
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right: Leadership & CTA */}
                <div className="p-10 md:p-12 flex flex-col">
                  <h3 className="font-serif text-2xl text-white/90 font-medium mb-8">
                    Leadership
                  </h3>

                  <div className="space-y-5 mb-auto">
                    {[
                      { name: "Sunil Kumar Jain", role: "Director & Co-Founder", din: "DIN: 11599520" },
                      { name: "Archana Devi", role: "Sub Director", din: "DIN: 11599518" },
                      { name: "Saroj Devi", role: "Sub Director", din: "DIN: 11599519" },
                    ].map((person) => (
                      <motion.div
                        key={person.name}
                        className="flex items-center gap-4 p-4 rounded-xl border border-white/5"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                        whileHover={{
                          borderColor: "rgba(212,175,55,0.2)",
                          background: "rgba(212,175,55,0.04)",
                          x: 4,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-yellow-500/70 text-sm font-serif font-semibold flex-shrink-0"
                          style={{
                            background: "rgba(212,175,55,0.1)",
                            border: "1px solid rgba(212,175,55,0.2)",
                          }}
                        >
                          {person.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white/80 text-sm font-medium font-serif">
                            {person.name}
                          </div>
                          <div className="text-white/35 text-xs font-sans mt-0.5">
                            {person.role}
                          </div>
                          <div className="text-white/20 text-[10px] font-mono mt-0.5">
                            {person.din}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <motion.a
                      href="mailto:shirshpalak20@gmail.com"
                      className="magnetic-btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-sm tracking-wide text-yellow-900"
                      style={{
                        background: "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,75%) 100%)",
                        boxShadow: "0 4px 20px rgba(212,175,55,0.25), 0 2px 8px rgba(0,0,0,0.3)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 6px 30px rgba(212,175,55,0.35), 0 4px 15px rgba(0,0,0,0.35)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                      </svg>
                      Send Us a Message
                    </motion.a>

                    <motion.a
                      href="tel:+918435369211"
                      className="magnetic-btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-sm tracking-wide text-white/70 hover:text-white mt-3 border border-white/8 hover:border-yellow-500/25 transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      whileHover={{
                        scale: 1.02,
                        background: "rgba(212,175,55,0.05)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                      </svg>
                      Call Us
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeInCard>
      </div>
    </section>
  );
}
