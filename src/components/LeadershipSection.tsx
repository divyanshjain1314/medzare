'use client'
import { motion } from "framer-motion";
import { FadeInCard } from "./FadeInCard";
import { AnimatedText } from "./AnimatedText";
import Image from "next/image";
import sunil from "../assets/images/team/sunil-kumar.jpeg"
import saroj from "../assets/images/team/saroj-devi.jpeg"
import archana from "../assets/images/team/archana-devi.jpeg"

const leaders = [
    {
        name: "Sunil Kumar Jain",
        role: "Director & Co-Founder",
        din: "DIN: 11599520",
        imgUrl: sunil
    },
    {
        name: "Archana Devi",
        role: "Sub Director",
        din: "DIN: 11599518",
        imgUrl: archana
    },
    {
        name: "Saroj Devi",
        role: "Sub Director",
        din: "DIN: 11599519",
        imgUrl: saroj
    },
];

function MissingImagePlaceholder() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 rounded-full border border-yellow-500/10 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white/5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-2.75-9.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM7.25 14.5a.75.75 0 0 0 1.5 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5a.75.75 0 0 0 1.5 0 3 3 0 0 0-6 0Z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-white/20 text-xs font-mono">[ Portrait Unavailable ]</p>
        </div>
    );
}

export function LeadershipSection() {
    return (
        <section
            id="leadership"
            className="relative py-32 md:py-40 overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,9%) 50%, hsl(222,40%,12%) 100%)",
            }}
        >
            {/* subtle background details */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.05), transparent)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.01) 0%, transparent 65%)" }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <FadeInCard>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-yellow-500/40" />
                            <span className="text-yellow-500/70 text-xs tracking-[0.25em] uppercase font-sans">Our Team</span>
                            <div className="h-px w-12 bg-yellow-500/40" />
                        </div>
                    </FadeInCard>
                    <AnimatedText as="h2" className="font-serif text-5xl md:text-6xl font-extralight text-white mb-4 tracking-tight">
                        Meet The Leadership
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
                    {leaders.map((leader, index) => (
                        <FadeInCard key={leader.name} delay={0.2 * index}>
                            <motion.div
                                className="group relative rounded-3xl overflow-hidden border border-yellow-500/10 bg-white/1.5 shadow-xl hover:shadow-[0_0_80px_rgba(212,175,55,0.08)] hover:border-yellow-500/25 transition-all duration-500 h-full flex flex-col"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative h-68 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={leader.imgUrl}
                                        alt={leader.name}
                                        fill
                                        className="object-cover group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 border-[3px] border-yellow-500/5 group-hover:border-yellow-500/15 transition-all duration-500" />
                                </div>

                                <div className="p-8 text-center mt-auto">
                                    <h3 className="text-2xl font-serif text-white/95 font-medium mb-1 tracking-tight">{leader.name}</h3>
                                    <p className="text-yellow-500/80 text-base font-sans font-light tracking-wide mb-1.5">{leader.role}</p>
                                    <p className="text-white/40 text-xs font-mono tracking-wider">{leader.din}</p>
                                </div>
                            </motion.div>
                        </FadeInCard>
                    ))}
                </div>
            </div>
        </section>
    );
}