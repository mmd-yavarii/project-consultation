'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import DeveloperTerminal from './DeveloperTerminal';

/* =========================================================
   ANIMATION SYSTEM
========================================================= */

const spring = {
    type: 'spring',
    stiffness: 90,
    damping: 18,
    mass: 0.8,
};

const smooth = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
};

const expo = [0.16, 1, 0.3, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: smooth },
};

const revealContainer = {
    hidden: {},
    visible: {
        transition: { delayChildren: 0.3, staggerChildren: 0.12 },
    },
};

const revealLine = {
    hidden: { y: '110%' },
    visible: { y: '0%', transition: { duration: 0.9, ease: expo } },
};

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticLink({ href, className, children, strength = 0.35, disabled }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

    const handleMove = (e) => {
        if (disabled) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * strength);
        y.set((e.clientY - rect.top - rect.height / 2) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={disabled ? undefined : { x: sx, y: sy }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileHover={{ scale: disabled ? 1 : 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
        >
            <Link href={href} className={`group relative ${className}`}>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                {children}
            </Link>
        </motion.div>
    );
}

/* =========================================================
   TILT CARD
========================================================= */

function TiltCard({ className, children, dir, disabled }) {
    const ref = useRef(null);
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 120, damping: 14 });
    const sry = useSpring(ry, { stiffness: 120, damping: 14 });

    const handleMove = (e) => {
        if (disabled) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        ry.set(px * 8);
        rx.set(-py * 8);
    };

    const reset = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <motion.div
            ref={ref}
            dir={dir}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={disabled ? undefined : { rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
            whileHover={{ scale: disabled ? 1 : 1.015 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const commandText = '09036330147';
    const sectionRef = useRef(null);
    const rafRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(commandText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSpotlight = (e) => {
        if (reduceMotion || rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            const rect = sectionRef.current.getBoundingClientRect();
            const mx = ((e.clientX - rect.left) / rect.width) * 100;
            const my = ((e.clientY - rect.top) / rect.height) * 100;
            sectionRef.current.style.setProperty('--mx', `${mx}%`);
            sectionRef.current.style.setProperty('--my', `${my}%`);
            rafRef.current = null;
        });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleSpotlight}
            dir="rtl"
            style={{ '--mx': '50%', '--my': '20%' }}
            className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 text-right sm:px-6 lg:px-8 lg:py-24"
        >
            {/* BACKGROUND GRID */}
            <div
                className="
                    pointer-events-none absolute inset-0 -z-10 h-full w-full
                    bg-[radial-gradient(#1e293b_1px,transparent_1px)]
                    [background-size:24px_24px]
                    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
                    opacity-30
                "
            />

            {/* SPOTLIGHT */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden"
                style={{
                    background: 'radial-gradient(500px circle at var(--mx) var(--my), rgba(34,211,238,0.07), transparent 70%)',
                }}
            />

            {/* AMBIENT GLOW */}
            <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px] animate-glow-right motion-reduce:animate-none" />
            <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px] animate-glow-left motion-reduce:animate-none" />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                {/* CONTENT */}
                <div className="flex flex-col items-start lg:col-span-7">
                    {/* STATUS BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ...smooth, delay: 0.1 }}
                        whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2 } }}
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-slate-900/80 px-3.5 py-1 text-xs font-medium text-emerald-400"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-slow motion-reduce:animate-none" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        آماده پذیرش پروژه‌های جدید
                    </motion.div>

                    {/* MAIN TITLE */}
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={revealContainer}
                        className="mt-5 text-3xl font-extrabold leading-snug tracking-tight text-white sm:text-5xl lg:text-5xl"
                    >
                        <span className="block overflow-hidden">
                            <motion.span variants={revealLine} className="inline-block">
                                توسعه وب‌سایت‌های
                            </motion.span>
                        </span>

                        <span className="mt-1 block overflow-hidden">
                            <motion.span
                                variants={revealLine}
                                className="inline-block bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent"
                            >
                                مقیاس‌پذیر و فوق‌سریع
                            </motion.span>
                        </span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.75 }}
                        className="mt-4 max-w-xl text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7"
                    >
                        سلام، من <strong className="font-semibold text-white">محمد</strong> هستم؛ توسعه‌دهنده فرانت‌اند و فول‌استک. ایده‌های کسب‌وکار
                        شما را با معماری پاک و مدرن در Next.js به محصولات دیجیتال ارزش‌آفرین تبدیل می‌کنم.
                    </motion.p>

                    {/* COMMAND BAR */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ...smooth, delay: 0.9 }}
                        whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.12)', transition: { duration: 0.2 } }}
                        className="mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-xl border border-white/5 bg-slate-900/80 p-1.5 pl-3"
                    >
                        <div dir="ltr" className="flex items-center gap-2 overflow-hidden text-[11px] font-mono text-slate-300 sm:text-xs">
                            <span className="select-none text-cyan-400">$</span>
                            <span className="truncate">{commandText}</span>
                        </div>

                        <motion.button
                            onClick={copyToClipboard}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.94 }}
                            transition={spring}
                            className={`flex-shrink-0 rounded-lg border px-2.5 py-1 text-[11px] font-medium ${
                                copied
                                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                                    : 'border-white/10 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            <motion.span
                                key={copied ? 'copied' : 'copy'}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {copied ? 'کپی شد!' : 'کپی'}
                            </motion.span>
                        </motion.button>
                    </motion.div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smooth, delay: 1.05 }}
                        className="mt-7 flex flex-wrap items-center gap-3.5"
                    >
                        <MagneticLink
                            href="/contact"
                            disabled={reduceMotion}
                            className="inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:brightness-110 sm:text-sm"
                        >
                            <span className="relative">شروع یک پروژه</span>
                            <motion.span className="relative" initial={{ x: 0 }} whileHover={{ x: -4 }}>
                                →
                            </motion.span>
                        </MagneticLink>

                        <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={spring}>
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3 text-xs font-semibold text-slate-200 transition-colors duration-200 hover:border-white/20 hover:bg-slate-800/60 hover:text-white sm:text-sm"
                            >
                                <span>مشاهده نمونه‌کارها</span>
                                <motion.svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    whileHover={{ x: -5 }}
                                    transition={spring}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 5l-7 7m0 0l7 7m-7-7h18" />
                                </motion.svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* TERMINAL */}
                <motion.div
                    initial={{ opacity: 0, x: -45, scale: 0.94 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.45, ease: expo }}
                    className="w-full lg:col-span-5"
                >
                    <div className="animate-bob-slow motion-reduce:animate-none">
                        {/* gradient border wrapper */}
                        <div className="animate-border-flow motion-reduce:animate-none rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-500/10 to-cyan-500/40 p-[1px]">
                            <TiltCard disabled={reduceMotion} className="group relative rounded-2xl bg-slate-950/95 p-5 sm:p-6" dir="ltr">
                                <div className="pointer-events-none absolute inset-x-6 top-0 h-px overflow-hidden">
                                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-shimmer motion-reduce:animate-none" />
                                </div>

                                <DeveloperTerminal />
                            </TiltCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
