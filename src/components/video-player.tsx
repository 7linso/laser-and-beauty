'use client'

import { useState, useEffect, useRef } from "react";

interface VideoPlayerProps {
    link: string;
    className?: string
}

const VideoPlayer = ({ link, className }: VideoPlayerProps) => {
    const [isVisible, setVisible] = useState(false)
    const ref = useRef<HTMLVideoElement | null>(null)

    const poster =
        'https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205431/photo_2025-05-13_08-34-51_gzp2wt_va6dap.jpg'

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <video
            ref={ref}
            autoPlay={isVisible}
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            className={className}
        >
            {isVisible && <source src={link} type="video/mp4" />}
        </video>
    );
};

export default VideoPlayer;
