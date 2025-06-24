'use client'
import { useState } from 'react'
import AnimatedElement from './animated-element'
import FAQInstance from './faq-instance'

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
        <section className="max-w-7xl mx-auto">
            <AnimatedElement>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQInstance
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => toggle(index)}
                        />
                    ))}
                </div>
            </AnimatedElement>
        </section>
    )
}
