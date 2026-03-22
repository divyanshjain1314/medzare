import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  stagger?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: (custom: { delay?: number; duration?: number }) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom?.delay ?? 0,
      duration: custom?.duration ?? 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  as: Tag = "div",
  stagger = false,
}: AnimatedTextProps) {
  if (stagger && typeof children === "string") {
    const words = children.split(" ");
    return (
      <motion.div
        className={`overflow-hidden ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Tag className="flex flex-wrap gap-x-[0.25em]">
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span className="inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </Tag>
      </motion.div>
    );
  }

  return (
    <motion.div
      custom={{ delay, duration }}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}

export function HeroText({
  children,
  className = "",
  style,
}: {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = children.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={style}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            custom={i}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
