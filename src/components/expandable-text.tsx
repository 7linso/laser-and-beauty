'use client'
import { useState } from "react"

interface ExpandableTextProps {
    content: string
}

export default function ExpandableText({ content }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false)
    const displayedText = expanded || !(content.length > 100) ? content : content.slice(0, 100) + '...'

    return (
        <div className="text-gray-800">
            <p>{displayedText}</p>
            {content.length > 100 && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-teal-600 hover:underline mt-2"
                >
                    {expanded ? 'Show less' : 'Read more'}
                </button>
            )}
        </div>
    );
}