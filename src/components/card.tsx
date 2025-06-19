import React from "react";

type CardProps = {
    children: React.ReactNode
    className?: string
};

export default function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`flex-1 bg-white rounded-2xl shadow-lg transition hover:shadow-2xl ${className}`}>
            {children}
        </div>
    );
}
