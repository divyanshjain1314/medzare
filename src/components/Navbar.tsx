'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Excellence", href: "#excellence" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-strong gold-glow py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${(mobileOpen && scrolled) ? 'pb-3.5' : mobileOpen ? "pb-5" : ''}`}>
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full border border-yellow-500/40 flex items-center justify-center gold-glow">
                <Image
                  className='w-8 h-8'
                  src='/applogo.svg'
                  alt='applogo'
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div>
              <div
                className="font-serif font-semibold text-sm leading-tight"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MEDZARE
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-sans">
                PHARMA
              </div>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="underline-reveal text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ color: "hsl(45,80%,72%)" }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex magnetic-btn items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-yellow-500/40 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/60 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.3)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 100%)",
            }}
          >
            <span>Get in Touch</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden glass-strong border-t border-yellow-500/10"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-white/70 hover:text-yellow-400 text-base font-medium transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-yellow-500/40 text-yellow-400 text-center"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
