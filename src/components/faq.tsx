'use client'
import { useState } from 'react'
import AnimatedElement from './animated-element'

interface FAQSectionProps {
    faqs: {
        question: string;
        answer: string[];
    }[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<null | number>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="max-w-3xl mx-auto ">
            <AnimatedElement>
                <div className="space-y-4 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                            <button onClick={() => toggle(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center">
                                <span className="text-lg font-medium text-teal-900">
                                    {faq.question}
                                </span>
                                <svg className={`w-5 h-5 text-teal-900 transform transition-transform \
                                        ${openIndex === index
                                        ?
                                        'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`faq-answer px-6 text-gray-700 space-y-2 
                            ${openIndex === index
                                    ?
                                    'open' : ''
                                }`} >
                                <ul className="list-none space-y-2">
                                    {faq.answer.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedElement>
        </section>
    )
}
