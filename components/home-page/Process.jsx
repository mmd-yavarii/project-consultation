'use client';

import { useState } from 'react';
import { ScanSearch, PenTool, Terminal, ServerCog, Gauge, CloudUpload } from 'lucide-react';

/* ---------------------------------------------
   Process Steps
--------------------------------------------- */

const steps = [
    {
        number: '01',
        title: 'ایده و تحلیل',
        description: 'بررسی هدف پروژه، نیازهای کسب‌وکار، کاربران و قابلیت‌های اصلی برای ساخت یک نقشه راه دقیق و قابل اجرا.',
        icon: ScanSearch,
    },
    {
        number: '02',
        title: 'طراحی UI/UX',
        description: 'طراحی رابط کاربری مدرن و تجربه کاربری روان با تمرکز بر سادگی، دسترسی، زیبایی و ریسپانسیو بودن.',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'توسعه فرانت‌اند',
        description: 'تبدیل طراحی به یک رابط سریع و تعاملی با کامپوننت‌های قابل استفاده مجدد و ساختار کد تمیز.',
        icon: Terminal,
    },
    {
        number: '04',
        title: 'توسعه بک‌اند',
        description: 'پیاده‌سازی منطق کسب‌وکار، API، احراز هویت، دیتابیس و زیرساخت مورد نیاز برای محصول.',
        icon: ServerCog,
    },
    {
        number: '05',
        title: 'تست و بهینه‌سازی',
        description: 'بررسی سرعت، امنیت، عملکرد، ریسپانسیو بودن و رفع خطاها برای رسیدن به محصولی پایدار.',
        icon: Gauge,
    },
    {
        number: '06',
        title: 'استقرار و پشتیبانی',
        description: 'انتقال پروژه به محیط Production، تنظیم سرور، مانیتورینگ و پشتیبانی برای عملکرد پایدار.',
        icon: CloudUpload,
    },
];

/* ---------------------------------------------
   Spotlight Card
--------------------------------------------- */

function SpotlightCard({ children, className = '' }) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                group/card
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-slate-900/40
                p-5
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:bg-slate-900/55

                lg:p-6

                ${className}
            `}
        >
            {/* Mouse Spotlight */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -inset-px
                    transition-opacity
                    duration-300
                "
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `
                        radial-gradient(
                            400px circle at
                            ${mousePosition.x}px
                            ${mousePosition.y}px,
                            rgba(34, 211, 238, 0.10),
                            transparent 45%
                        )
                    `,
                }}
            />

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
                    duration-300
                    group-hover/card:opacity-100
                "
            />

            {/* Content */}

            <div className="relative z-10">{children}</div>
        </div>
    );
}

/* ---------------------------------------------
   Step Marker
--------------------------------------------- */

function StepMarker({ step }) {
    const Icon = step.icon;

    return (
        <div className="relative z-20 shrink-0">
            <div
                className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-slate-950/95
                    shadow-[0_0_25px_rgba(34,211,238,0.06)]
                    backdrop-blur-xl

                    transition-all
                    duration-300

                    group-hover:border-cyan-400/35
                    group-hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]
                    group-hover:scale-105

                    lg:h-20
                    lg:w-20
                "
            >
                {/* Inner Ring */}

                <div
                    className="
                        absolute
                        inset-1.5
                        rounded-full
                        border
                        border-cyan-400/[0.08]
                        transition-colors
                        duration-300
                        group-hover:border-cyan-400/25
                    "
                />

                {/* Decorative Dot */}

                <span
                    className="
                        absolute
                        right-2.5
                        top-2.5
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400/60
                        transition-all
                        duration-300
                        group-hover:bg-cyan-300
                        group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]
                    "
                />

                {/* Icon */}

                <Icon
                    strokeWidth={1.5}
                    className="
                        relative
                        h-5
                        w-5
                        text-cyan-400/80
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                        lg:h-6
                        lg:w-6
                    "
                />

                {/* Number */}

                <span
                    className="
                        absolute
                        -bottom-2
                        left-1/2
                        -translate-x-1/2
                        rounded-full
                        border
                        border-cyan-400/15
                        bg-slate-950
                        px-2
                        py-0.5
                        text-[9px]
                        font-semibold
                        tracking-[0.15em]
                        text-cyan-400
                        shadow-[0_0_10px_rgba(34,211,238,0.05)]
                    "
                >
                    {step.number}
                </span>
            </div>
        </div>
    );
}

/* ---------------------------------------------
   Process
--------------------------------------------- */

export default function Process() {
    return (
        <section
            id="process"
            dir="rtl"
            className="
                relative
                mx-auto
                w-full
                max-w-7xl
                overflow-hidden
                px-4
                py-20
                sm:px-6
                lg:px-8
                lg:py-32
            "
        >
            {/* ---------------------------------
                Ambient Background
            --------------------------------- */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/4
                    -z-10
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/[0.06]
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-10
                    right-10
                    -z-10
                    h-72
                    w-72
                    rounded-full
                    bg-blue-600/[0.05]
                    blur-[120px]
                "
            />

            {/* ---------------------------------
                Header
            --------------------------------- */}

            <div
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
                    <span
                        className="
                            relative
                            flex
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-cyan-400
                        "
                    />
                    فرایند استاندارد توسعه
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
                    از اولین ایده تا{' '}
                    <span
                        className="
                            bg-gradient-to-r
                            from-cyan-400
                            to-blue-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        محصول نهایی
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
                    یک مسیر شفاف و مهندسی‌شده برای تبدیل ایده به محصولی سریع، مقیاس‌پذیر و قابل اعتماد.
                </p>
            </div>

            {/* ---------------------------------
                Timeline
            --------------------------------- */}

            <div className="relative">
                {/* Desktop Timeline */}

                <div
                    className="
                        absolute
                        left-[5%]
                        right-[5%]
                        top-10
                        hidden
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/20
                        to-transparent
                        lg:block
                    "
                />

                {/* Timeline Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-[8%]
                        right-[8%]
                        top-10
                        hidden
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/10
                        to-transparent
                        blur-sm
                        lg:block
                    "
                />

                {/* Mobile Timeline */}

                <div
                    className="
                        absolute
                        bottom-10
                        right-[27px]
                        top-8
                        w-px
                        bg-gradient-to-b
                        from-cyan-400/30
                        via-cyan-400/10
                        to-transparent
                        lg:hidden
                    "
                />

                {/* Steps */}

                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-6
                        lg:gap-4
                    "
                >
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
                                group
                                relative
                                flex
                                items-start
                                gap-4
                                lg:flex-col
                                lg:items-center
                                lg:gap-0
                            "
                        >
                            {/* Marker */}

                            <StepMarker step={step} />

                            {/* Content */}

                            <SpotlightCard
                                className="
                                    flex-1
                                    lg:mt-8
                                    lg:min-h-[220px]
                                    lg:p-5
                                "
                            >
                                {/* Step Label */}

                                <div
                                    className="
                                        mb-3
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <span
                                        className="
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-[0.18em]
                                            text-cyan-400/50
                                        "
                                    >
                                        STEP {step.number}
                                    </span>

                                    <span
                                        className="
                                            h-px
                                            w-7
                                            bg-cyan-400/15
                                        "
                                    />
                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        text-base
                                        font-bold
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-cyan-300
                                        lg:text-[15px]
                                    "
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-6
                                        text-slate-400
                                        lg:text-[13px]
                                        lg:leading-6
                                    "
                                >
                                    {step.description}
                                </p>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
