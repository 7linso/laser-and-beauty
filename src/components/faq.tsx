'use client'
import { useRef, useState, useEffect } from 'react'
import AnimatedElement from './animated-element'

interface FAQSectionProps {
    faqs: {
        question: string
        answer: string[]
    }[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<null | number>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="mx-auto">
            <AnimatedElement>
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
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
                            <div key={index} className="border border-teal-900 rounded-lg">
                                <button onClick={() => toggle(index)}
                                    className="w-full text-left px-6 py-4 flex justify-between items-center">
                                    <span className="text-lg font-medium text-teal-900">
                                        {faq.question}
                                    </span>
                                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                        className={`w-5 h-5 text-teal-900 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
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
                                        {faq.answer.map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </AnimatedElement>
        </section>
    )
}
