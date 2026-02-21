"use client";

/**
 * Reusable Framer Motion animation primitives for Persike portal.
 */

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

// ── Shared variants ───────────────────────────────────────────────────────────

export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFastVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ── Prop types ────────────────────────────────────────────────────────────────

interface AnimProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// ── Scroll-triggered primitives ───────────────────────────────────────────────

/** Fades up from below on scroll. Use for section headings & paragraphs. */
export function FadeUp({ children, className, delay = 0, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Simple opacity fade on scroll. */
export function FadeIn({ children, className, delay = 0, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Scale + fade on scroll. Use for featured cards. */
export function ScaleIn({ children, className, delay = 0, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Slides in from left on scroll. */
export function SlideLeft({ children, className, delay = 0, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Slides in from right on scroll. */
export function SlideRight({ children, className, delay = 0, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Stagger container — children animate in sequence. */
export function Stagger({
    children,
    className,
    fast = false,
    ...props
}: AnimProps & { fast?: boolean }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fast ? staggerFastVariants : staggerContainerVariants}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Use inside <Stagger> for each child item. */
export function StaggerItem({ children, className, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            variants={fadeUpVariants}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// ── Interactive wrappers ──────────────────────────────────────────────────────

/** Hover lift + press spring — use for cards. */
export function AnimCard({ children, className, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ y: -6, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
            whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 500, damping: 30 } }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Hover scale + press tap — use for buttons. */
export function AnimButton({ children, className, ...props }: AnimProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
            whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 500, damping: 30 } }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

/** Perpetual float animation — use for decorative elements. */
export function FloatDiv({ children, className, delaySeconds = 0, ...props }: Omit<AnimProps, "delay"> & { delaySeconds?: number }) {
    return (
        <motion.div
            className={className}
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delaySeconds,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
