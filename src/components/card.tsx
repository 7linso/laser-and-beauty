import React from "react";

type CardProps = {
    children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-2xl">
            {children}
        </div>
    );
}
