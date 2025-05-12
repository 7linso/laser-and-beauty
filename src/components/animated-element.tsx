'use client'
import { motion } from 'framer-motion'

import React from "react";

type AnimatedElementProps = {
    children: React.ReactNode;
    variant?: string
};

export default function AnimatedElement({ children, variant }: AnimatedElementProps) {
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (<>
        <motion.div
            variants={(variant === 'left') ? slideInRight : slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    </>)
}