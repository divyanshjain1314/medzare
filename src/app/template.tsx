"use client";

import { motion, Variants } from "framer-motion";

const pageTransition: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            {children}
        </motion.div>
    );
}