'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
    number,
    title = 'داشبورد مدیریت',
    description = 'یک داشبورد مدیریتی برای مدیریت اطلاعات، کاربران و فرایندهای کسب‌وکار.',
    tags = ['React', 'Next.js', 'REST API'],
    imageSrc = 'https://cdn.dribbble.com/userupload/45017446/file/still-7ec654e6158c4a63475eef50e16e65e9.png',
    projectLink = '#',
    githubLink = '#',
}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <article
            dir="rtl"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
                group
                relative
                h-full
                w-full
                max-w-md
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-slate-900/40
                p-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-cyan-500/30
                hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]
                sm:p-5
            "
        >
            {/* Spotlight Interactive Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(
                        400px circle at ${mousePosition.x}px ${mousePosition.y}px,
                        rgba(34, 211, 238, 0.12),
                        transparent 40%
                    )`,
                }}
            />

            {/* Project Image */}
            <div
                className="
                    relative
                    h-52
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-950/50
                    sm:h-56
                "
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="
                        object-cover
                        opacity-90
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:opacity-100
                    "
                />

                {/* Gradient Overlay */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/80
                        via-transparent
                        to-transparent
                    "
                />
            </div>

            {/* Card Information */}
            <div className="px-1 pt-5">
                {/* Title */}
                <h3
                    className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                        sm:text-2xl
                    "
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-2.5
                        text-xs
                        leading-6
                        text-slate-400
                        sm:text-sm
                    "
                >
                    {description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
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
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Footer */}
                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-4
                    "
                >
                    {/* View Project */}
                    <Link
                        href={projectLink}
                        className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            text-cyan-400
                            transition-colors
                            duration-200
                            hover:text-cyan-300
                            sm:text-sm
                        "
                    >
                        <span>مشاهده پروژه</span>

                        <svg
                            className="
                                h-4
                                w-4
                                transition-transform
                                duration-200
                                group-hover/link:-translate-x-1
                            "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 5l-7 7m0 0l7 7m-7-7h18" />
                        </svg>
                    </Link>

                    {/* GitHub */}
                    <Link
                        href={githubLink}
                        aria-label="مشاهده مخزن گیت‌هاب"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/10
                            bg-slate-800/50
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-slate-300
                            backdrop-blur-md
                            transition-all
                            duration-200
                            hover:border-cyan-500/30
                            hover:bg-slate-800
                            hover:text-white
                        "
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.455-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                        </svg>

                        <span>گیت‌هاب</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
