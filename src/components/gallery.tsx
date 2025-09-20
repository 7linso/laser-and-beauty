'use client'

import React, { useEffect, useRef, useState } from "react";

type GalleryProps = {
    images: { src: string; alt?: string; }[];
    intervalMs?: number;          // default 4000
    pauseOnHover?: boolean;       // default true
    showArrows?: boolean;         // default true
    showDots?: boolean;           // default true
    className?: string;
    aspectRatio?: string;         // e.g. "16 / 9" or "4 / 3"
};

export default function Gallery({
    images,
    intervalMs = 4000,
    pauseOnHover = true,
    showArrows = true,
    showDots = true,
    className = "",
    aspectRatio = "4 / 4",
}: GalleryProps) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);
    const hoveringRef = useRef(false);
    const touchStartX = useRef<number | null>(null);
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const goTo = (i: number) => setIndex((i + images.length) % images.length);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
        if (prefersReducedMotion || images.length <= 1) return;
        if (hoveringRef.current) return;

        timerRef.current = window.setTimeout(next, intervalMs);
        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
        };
    }, [index, intervalMs, images.length, prefersReducedMotion]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index]);

    const onMouseEnter = () => {
        if (!pauseOnHover) return;
        hoveringRef.current = true;
        if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    const onMouseLeave = () => {
        hoveringRef.current = false;
        setIndex((i) => i);
    };

    const onTouchStart: React.TouchEventHandler = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd: React.TouchEventHandler = (e) => {
        if (touchStartX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        const threshold = 40; // px
        if (delta > threshold) prev();
        if (delta < -threshold) next();
        touchStartX.current = null;
    };

    return (
        <div
            className={`relative select-none ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
            aria-label="Image gallery"
        >
            {/* viewport with fixed aspect ratio */}
            <div
                className="overflow-hidden w-full rounded-2xl bg-black/5"
                style={{ aspectRatio }}
            >
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((img, i) => {
                        return (
                            <div key={i} className="min-w-full h-full">
                                <img
                                    src={img.src}
                                    alt={img.alt ?? `Slide ${i + 1}`}
                                    className="h-full w-full object-cover block"
                                    loading={i === 0 ? "eager" : "lazy"}
                                    draggable={false}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {showArrows && images.length > 1 && (
                <>
                    <button
                        aria-label="Previous slide"
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-2 backdrop-blur-sm hover:bg-black/70"
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Next slide"
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-2 backdrop-blur-sm hover:bg-black/70"
                    >
                        ›
                    </button>
                </>
            )}

            {showDots && images.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "bg-white/60 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
