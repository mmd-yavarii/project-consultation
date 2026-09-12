'use client';

import { useEffect, useRef, useState } from 'react';

export default function AmbientVideo({ src, poster, className = '', autoPlay = true, loop = true, muted = true, controls = true }) {
    const mainVideoRef = useRef(null);
    const backgroundVideoRef = useRef(null);

    const [isReady, setIsReady] = useState(false);

    // Keep background video synchronized with main video
    useEffect(() => {
        const main = mainVideoRef.current;
        const background = backgroundVideoRef.current;

        if (!main || !background) return;

        const syncTime = () => {
            if (Math.abs(main.currentTime - background.currentTime) > 0.15) {
                background.currentTime = main.currentTime;
            }
        };

        const handlePlay = () => {
            background.play().catch(() => {});
        };

        const handlePause = () => {
            background.pause();
        };

        const handleSeeking = () => {
            background.currentTime = main.currentTime;
        };

        const handleRateChange = () => {
            background.playbackRate = main.playbackRate;
        };

        main.addEventListener('timeupdate', syncTime);
        main.addEventListener('play', handlePlay);
        main.addEventListener('pause', handlePause);
        main.addEventListener('seeking', handleSeeking);
        main.addEventListener('ratechange', handleRateChange);

        return () => {
            main.removeEventListener('timeupdate', syncTime);
            main.removeEventListener('play', handlePlay);
            main.removeEventListener('pause', handlePause);
            main.removeEventListener('seeking', handleSeeking);
            main.removeEventListener('ratechange', handleRateChange);
        };
    }, []);

    const handleLoaded = () => {
        const main = mainVideoRef.current;
        const background = backgroundVideoRef.current;

        if (!main || !background) return;

        background.currentTime = main.currentTime;

        if (autoPlay) {
            background.play().catch(() => {});
        }

        setIsReady(true);
    };

    return (
        <div className={`relative isolate w-full overflow-hidden rounded-3xl ${className}`}>
            {/* Ambient background */}
            <div className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
                <video
                    ref={backgroundVideoRef}
                    src={src}
                    poster={poster}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="
            absolute
            left-1/2
            top-1/2
            h-[120%]
            w-[120%]
            -translate-x-1/2
            -translate-y-1/2
            scale-110
            object-cover
            blur-[55px]
            opacity-70
          "
                />

                {/* Darken the ambient video */}
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

            {/* Main video */}
            <video
                ref={mainVideoRef}
                src={src}
                poster={poster}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
                playsInline
                preload="auto"
                onLoadedData={handleLoaded}
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
