'use client'
import { useRef, useState, useEffect } from 'react'

interface FAQItemProps {
    question: string
    answer: string[]
    isOpen: boolean
    onToggle: () => void
}

export default function FAQInstance({ question, answer, isOpen, onToggle }: FAQItemProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState('0px')

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(`${contentRef.current.scrollHeight}px`)
        } else {
            setHeight('0px')
        }
    }, [isOpen])

    return (
        <div className="border border-teal-900 rounded-lg">
            <button onClick={onToggle}
                className="w-full text-left px-6 py-4 flex justify-between items-center">
                <span className="text-lg font-medium text-teal-900">{question}</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    className={`w-5 h-5 text-teal-900 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div ref={contentRef}
                style={{
                    maxHeight: height,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, padding-bottom 0.4s ease',
                    paddingBottom: isOpen ? '1rem' : '0',
                }}
                className="px-6 text-gray-700" >
                <ul className="space-y-2 py-2">
                    {answer.map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
