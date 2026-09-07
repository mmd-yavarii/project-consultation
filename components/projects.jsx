'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        number: '01',
        title: 'سامانه صرافی ارز دیجیتال',
        category: 'Fintech',
        description: 'طراحی رابط کاربری پیچیده معامله کریپتو همراه با نمودار زنده و پایداری بالا.',
        tags: ['Next.js', 'Tailwind', 'WebSocket'],
        imageSrc: 'https://cdn.dribbble.com/userupload/45017446/file/still-7ec654e6158c4a63475eef50e16e65e9.png',
    },
    {
        number: '02',
        title: 'پلتفرم آنلاین هوش مصنوعی',
        category: 'AI SaaS',
        description: 'سرویس تولید محتوای هوشمند با اتصال به مدل‌های زبان بزرگ و سرعت پاسخ‌دهی بالا.',
        tags: ['React', 'Node.js', 'OpenAI API'],
        imageSrc: 'https://cdn.dribbble.com/userupload/45017446/file/still-7ec654e6158c4a63475eef50e16e65e9.png',
    },
    {
        number: '03',
        title: 'داشبورد آنالیتیکس فروش',
        category: 'Dashboard',
        description: 'سیستم مانیتورینگ داده‌های تجاری و گزارش‌گیری پیشرفته لحظه‌ای.',
        tags: ['TypeScript', 'Recharts', 'Next.js'],
        imageSrc: 'https://cdn.dribbble.com/userupload/45017446/file/still-7ec654e6158c4a63475eef50e16e65e9.png',
    },
    {
        number: '04',
        title: 'اپلیکیشن مدیریت وظایف',
        category: 'Productivity',
        description: 'طراحی تجربه کاربری شبیه به Linear برای تیم‌های توسعه نرم‌افزار.',
        tags: ['PWA', 'Zustand', 'Tailwind'],
        imageSrc: 'https://cdn.dribbble.com/userupload/45017446/file/still-7ec654e6158c4a63475eef50e16e65e9.png',
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            dir="rtl"
            className="
                relative
                mx-auto
                w-full
                max-w-7xl
                overflow-hidden
                scroll-mt-20
                px-4
                py-20
                sm:px-6
                lg:px-8
                lg:py-32
            "
        >
            {/* Ambient Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/3
                    -z-10
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/[0.07]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    -z-10
                    h-80
                    w-80
                    rounded-full
                    bg-blue-600/[0.05]
                    blur-[120px]
                "
            />

            {/* Header */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
                className="
                    mx-auto
                    mb-10
                    max-w-xl
                    text-center
                    lg:mb-16
                "
            >
                {/* Badge */}

                <div
                    className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/[0.06]
                        px-3
                        py-1
                        text-[11px]
                        font-semibold
                        text-cyan-300
                        backdrop-blur-xl
                    "
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span
                            className="
                                absolute
                                inline-flex
                                h-full
                                w-full
                                animate-ping
                                rounded-full
                                bg-cyan-400
                                opacity-50
                            "
                        />

                        <span
                            className="
                                relative
                                inline-flex
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-cyan-400
                            "
                        />
                    </span>
                    نمونه‌کارهای برگزیده
                </div>

                {/* Heading */}

                <h2
                    className="
                        mt-3
                        text-xl
                        font-bold
                        leading-snug
                        tracking-tight
                        text-white
                        sm:text-2xl
                        lg:text-3xl
                    "
                >
                    پروژه‌هایی که{' '}
                    <span
                        className="
                            bg-gradient-to-r
                            from-cyan-400
                            to-blue-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        خلق کرده‌ام
                    </span>
                </h2>

                {/* Description */}

                <p
                    className="
                        mx-auto
                        mt-2.5
                        max-w-lg
                        text-xs
                        leading-6
                        text-slate-400
                        sm:text-sm
                    "
                >
                    مجموعه‌ای از پروژه‌های واقعی در زمینه توسعه وب، طراحی محصول و ساخت نرم‌افزارهای مدرن.
                </p>
            </motion.div>

            {/* Projects Grid */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                "
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.number}
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full"
                    >
                        <ProjectCard
                            number={project.number}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            tags={project.tags}
                            imageSrc={project.imageSrc}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
