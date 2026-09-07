'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const commandText = 'npx create-next-app@latest my-project';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(commandText);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section
            dir="rtl"
            className="
                relative
                mx-auto
                w-full
                max-w-7xl
                overflow-hidden
                px-4
                py-16
                text-right
                sm:px-6
                lg:px-8
                lg:py-24
            "
        >
            {/* =========================
                BACKGROUND GRID
            ========================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    h-full
                    w-full
                    bg-[radial-gradient(#1e293b_1px,transparent_1px)]
                    [background-size:24px_24px]
                    opacity-30
                    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
                "
            />

            {/* =========================
                AMBIENT GLOWS
            ========================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    top-0
                    -z-10
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-20
                    bottom-0
                    -z-10
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-blue-600/10
                    blur-[150px]
                "
            />

            {/* =========================
                MAIN GRID
            ========================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    items-center
                    gap-12
                    lg:grid-cols-12
                    lg:gap-8
                "
            >
                {/* ==================================================
                    RIGHT COLUMN — CONTENT
                ================================================== */}

                <div
                    className="
                        flex
                        flex-col
                        items-start
                        lg:col-span-7
                    "
                >
                    {/* =========================
                        STATUS BADGE
                    ========================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                            ease: 'easeOut',
                        }}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-500/20
                            bg-slate-900/60
                            px-3.5
                            py-1
                            text-xs
                            font-medium
                            text-emerald-400
                            backdrop-blur-md
                        "
                    >
                        <span className="relative flex h-2 w-2">
                            <span
                                className="
                                    absolute
                                    inline-flex
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-emerald-400
                                    opacity-75
                                "
                            />

                            <span
                                className="
                                    relative
                                    inline-flex
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-emerald-500
                                "
                            />
                        </span>
                        آماده پذیرش پروژه‌های جدید
                    </motion.div>

                    {/* =========================
                        MAIN TITLE
                    ========================== */}

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},

                            visible: {
                                transition: {
                                    delayChildren: 0.12,
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className="
                            mt-5
                            text-3xl
                            font-extrabold
                            leading-snug
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-5xl
                        "
                    >
                        <motion.span variants={itemVariants} className="inline-block">
                            توسعه وب‌سایت‌های
                        </motion.span>

                        <br />

                        <motion.span
                            variants={itemVariants}
                            className="
                                relative
                                mt-1
                                inline-block
                                bg-gradient-to-r
                                from-cyan-400
                                via-teal-300
                                to-blue-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            مقیاس‌پذیر و فوق‌سریع
                        </motion.span>
                    </motion.h1>

                    {/* =========================
                        DESCRIPTION
                    ========================== */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.35,
                            ease: 'easeOut',
                        }}
                        className="
                            mt-4
                            max-w-xl
                            text-xs
                            leading-6
                            text-slate-400
                            sm:text-sm
                            sm:leading-7
                        "
                    >
                        سلام، من <strong className="font-semibold text-white">محمد</strong> هستم؛ توسعه‌دهنده فرانت‌اند و فول‌استک. ایده‌های کسب‌وکار
                        شما را با معماری پاک و مدرن در Next.js به محصولات دیجیتال ارزش‌آفرین تبدیل می‌کنم.
                    </motion.p>

                    {/* =========================
                        COMMAND BAR
                    ========================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.55,
                            ease: 'easeOut',
                        }}
                        className="
                            mt-6
                            flex
                            w-full
                            max-w-md
                            items-center
                            justify-between
                            gap-2
                            rounded-xl
                            border
                            border-white/5
                            bg-slate-900/50
                            p-1.5
                            pl-3
                            backdrop-blur-md
                            transition-colors
                            duration-200
                            hover:border-white/10
                        "
                    >
                        <div
                            dir="ltr"
                            className="
                                flex
                                items-center
                                gap-2
                                overflow-hidden
                                text-[11px]
                                font-mono
                                text-slate-300
                                sm:text-xs
                            "
                        >
                            <span className="select-none text-cyan-400">$</span>

                            <span className="truncate">{commandText}</span>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className={`
                                flex-shrink-0
                                rounded-lg
                                border
                                px-2.5
                                py-1
                                text-[11px]
                                font-medium
                                transition-colors
                                duration-150
                                ${
                                    copied
                                        ? `
                                            border-emerald-500/30
                                            bg-emerald-500/10
                                            text-emerald-400
                                        `
                                        : `
                                            border-white/10
                                            bg-slate-800/60
                                            text-slate-300
                                            hover:bg-slate-800
                                            hover:text-white
                                        `
                                }
                            `}
                        >
                            {copied ? 'کپی شد!' : 'کپی'}
                        </button>
                    </motion.div>

                    {/* =========================
                        CTA BUTTONS
                    ========================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.75,
                            ease: 'easeOut',
                        }}
                        className="
                            mt-7
                            flex
                            flex-wrap
                            items-center
                            gap-3.5
                        "
                    >
                        {/* Projects */}

                        <a
                            href="#projects"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-cyan-400
                                to-cyan-500
                                px-6
                                py-3
                                text-xs
                                font-bold
                                text-slate-950
                                shadow-[0_0_20px_rgba(34,211,238,0.2)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                                hover:brightness-110
                                active:scale-[0.98]
                                sm:text-sm
                            "
                        >
                            <span>مشاهده نمونه‌کارها</span>

                            <svg
                                className="
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-150
                                    group-hover:-translate-x-1
                                "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 5l-7 7m0 0l7 7m-7-7h18" />
                            </svg>
                        </a>

                        {/* Contact */}

                        <Link
                            href="/contact"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-white/10
                                bg-slate-900/40
                                px-6
                                py-3
                                text-xs
                                font-semibold
                                text-slate-200
                                backdrop-blur-xl
                                transition-all
                                duration-150
                                hover:-translate-y-0.5
                                hover:border-white/20
                                hover:bg-slate-800/60
                                hover:text-white
                                sm:text-sm
                            "
                        >
                            شروع یک پروژه
                        </Link>
                    </motion.div>
                </div>

                {/* ==================================================
                    LEFT COLUMN — TERMINAL
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.25,
                        ease: 'easeOut',
                    }}
                    className="
                        w-full
                        lg:col-span-5
                    "
                >
                    <div
                        dir="ltr"
                        className="
                            group
                            relative
                            rounded-2xl
                            border
                            border-white/10
                            bg-slate-900/40
                            p-5
                            backdrop-blur-xl
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:border-cyan-500/20
                            sm:p-6
                        "
                    >
                        {/* Top Highlight */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-6
                                top-0
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-cyan-400/30
                                to-transparent
                                opacity-0
                                transition-opacity
                                duration-200
                                group-hover:opacity-100
                            "
                        />

                        {/* Terminal Header */}

                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                justify-between
                                border-b
                                border-white/5
                                pb-3.5
                            "
                        >
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />

                                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />

                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                            </div>

                            <span className="text-[11px] font-mono text-slate-500">developer-profile.ts</span>
                        </div>

                        {/* Terminal Code */}

                        <div
                            className="
                                space-y-1.5
                                font-mono
                                text-xs
                                leading-relaxed
                                text-slate-300
                                sm:text-[13px]
                            "
                        >
                            <div>
                                <span className="text-purple-400">const</span> <span className="text-amber-200">developer</span> = {'{'}
                            </div>

                            <div className="pl-4">
                                <span className="text-cyan-400">name</span>: <span className="text-emerald-300">'Mohammad'</span>,
                            </div>

                            <div className="pl-4">
                                <span className="text-cyan-400">role</span>: <span className="text-emerald-300">'Fullstack Developer'</span>,
                            </div>

                            <div className="pl-4">
                                <span className="text-cyan-400">techStack</span>: [<span className="text-amber-300">'Next.js'</span>,{' '}
                                <span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TypeScript'</span>
                                ],
                            </div>

                            <div className="pl-4">
                                <span className="text-cyan-400">codeQuality</span>: <span className="text-emerald-300">'Clean & Scalable'</span>,
                            </div>

                            <div className="pl-4">
                                <span className="text-cyan-400">status</span>: <span className="text-sky-400">'Available for Hire'</span>
                            </div>

                            <div>{'};'}</div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    pt-3
                                    text-[11px]
                                    text-slate-500
                                "
                            >
                                <span>// Ready to build your product</span>

                                <span
                                    className="
                                        inline-block
                                        h-3.5
                                        w-1.5
                                        animate-pulse
                                        bg-cyan-400
                                    "
                                />
                            </div>
                        </div>

                        {/* Tech Badges */}

                        <div
                            dir="rtl"
                            className="
                                mt-5
                                flex
                                flex-wrap
                                gap-1.5
                                border-t
                                border-white/5
                                pt-4
                                text-right
                            "
                        >
                            <span
                                className="
                                    rounded-md
                                    border
                                    border-white/5
                                    bg-slate-800/60
                                    px-2.5
                                    py-0.5
                                    text-[11px]
                                    font-medium
                                    text-slate-300
                                "
                            >
                                Next.js 14+
                            </span>

                            <span
                                className="
                                    rounded-md
                                    border
                                    border-white/5
                                    bg-slate-800/60
                                    px-2.5
                                    py-0.5
                                    text-[11px]
                                    font-medium
                                    text-slate-300
                                "
                            >
                                TypeScript
                            </span>

                            <span
                                className="
                                    rounded-md
                                    border
                                    border-white/5
                                    bg-slate-800/60
                                    px-2.5
                                    py-0.5
                                    text-[11px]
                                    font-medium
                                    text-slate-300
                                "
                            >
                                TailwindCSS
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
