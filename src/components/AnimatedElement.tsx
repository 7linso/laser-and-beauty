'use client'
import { motion } from 'framer-motion'
import React from "react"
import { usePathname } from 'next/navigation'

type AnimatedElementProps = {
    children: React.ReactNode
    variant?: 'left' | 'right'
}

export default function AnimatedElement({ children, variant = 'left' }: AnimatedElementProps) {
    const pathname = usePathname()
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }
    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <motion.div
            key={pathname + variant}
            variants={variant === 'right' ? slideInRight : slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{once: true}}
        >
            {children}
        </motion.div>
    )
}
