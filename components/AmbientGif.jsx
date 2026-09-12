'use client';

export default function AmbientGif({ src, alt = '', className = '' }) {
    return (
        <div
            className={`
                relative
                isolate
                w-full
                overflow-hidden
                rounded-3xl
                ${className}
            `}
        >
            {/* Ambient GIF Background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[140%]
                        w-[140%]
                        -translate-x-1/2
                        -translate-y-1/2
                        scale-110
                        object-cover
                        blur-[55px]
                        opacity-70
                    "
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Soft vignette */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(
                            ellipse_at_center,
                            transparent_15%,
                            rgba(0,0,0,0.35)_65%,
                            rgba(0,0,0,0.8)_100%
                        )]
                    "
                />
            </div>

            {/* Main GIF */}
            <img
                src={src}
                alt={alt}
                className="
                    relative
                    z-10
                    block
                    h-auto
                    w-full
                    rounded-3xl
                    object-contain
                "
            />
        </div>
    );
}
