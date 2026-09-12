import { memo } from 'react';

const NEON_EFFECTS = [
    {
        id: 'teal-neon',
        className: `
            top-[-8rem]
            left-[-10rem]

            h-[24rem]
            w-[24rem]

            bg-teal-400/[0.12]
            dark:bg-teal-400/[0.16]

            blur-[90px]

            md:h-[32rem]
            md:w-[32rem]
            md:bg-teal-400/[0.14]
            md:blur-[110px]

            lg:h-[38rem]
            lg:w-[38rem]
            lg:bg-teal-400/[0.16]
            lg:blur-[130px]
        `,
    },

    {
        id: 'violet-neon',
        className: `
            top-[-6rem]
            right-[-10rem]

            h-[24rem]
            w-[24rem]

            bg-violet-500/[0.10]
            dark:bg-violet-500/[0.15]

            blur-[90px]

            md:h-[32rem]
            md:w-[32rem]
            md:bg-violet-500/[0.13]
            md:blur-[110px]

            lg:h-[38rem]
            lg:w-[38rem]
            lg:bg-violet-500/[0.16]
            lg:blur-[130px]
        `,
    },

    {
        id: 'sky-neon',
        className: `
            bottom-[-12rem]
            left-1/2
            -translate-x-1/2

            h-[26rem]
            w-[26rem]

            bg-sky-400/[0.09]
            dark:bg-sky-400/[0.13]

            blur-[100px]

            md:h-[34rem]
            md:w-[34rem]
            md:bg-sky-400/[0.12]
            md:blur-[120px]

            lg:h-[42rem]
            lg:w-[42rem]
            lg:bg-sky-400/[0.14]
            lg:blur-[140px]
        `,
    },
];

export const BackgroundEffects = memo(function BackgroundEffects() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                inset-0
                z-0
                overflow-hidden
                select-none
                transform-gpu
            "
        >
            {NEON_EFFECTS.map(({ id, className }) => (
                <div
                    key={id}
                    className={`
                        absolute
                        rounded-full
                        will-change-transform
                        ${className}
                    `}
                />
            ))}

            <div
                className="
                    absolute
                    inset-0

                    opacity-[0.025]
                    dark:opacity-[0.04]

                    bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)]

                    bg-[size:3.5rem_3.5rem]

                    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
                "
            />
        </div>
    );
});

export default BackgroundEffects;
