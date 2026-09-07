export default function BackgroundEffects() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                fixed inset-0
                -z-10
                overflow-hidden
            "
        >
            {/* Cyan glow */}
            <div
                className="
                    absolute
                    -left-32
                    -top-32
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-cyan-400/[0.08]
                    blur-[100px]
                "
            />

            {/* Purple glow */}
            <div
                className="
                    absolute
                    -right-32
                    -top-32
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-purple-500/[0.08]
                    blur-[100px]
                "
            />

            {/* Pink bottom glow */}
            <div
                className="
                    absolute
                    -bottom-40
                    left-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-pink-500/[0.05]
                    blur-[100px]
                "
            />

            {/* Grid */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.035]
                    [background-image:linear-gradient(rgba(0,229,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,1)_1px,transparent_1px)]
                    [background-size:48px_48px]
                    [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
                "
            />
        </div>
    );
}
