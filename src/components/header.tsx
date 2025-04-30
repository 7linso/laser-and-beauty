'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-15">
                    <div className="text-xl font-bold text-black hover:text-teal-900">
                        <Link href="/">Laser&Beauty by Olga</Link>
                    </div>
                    <div className="custom-collapse:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="custom-toggle text-gray-700 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div><div className={`custom-collapse items-center space-x-6 text-gray-700 font-medium ${isOpen ? 'block' : 'hidden'} md:flex`}>
                        <Link href="/about" className="hover:text-teal-900 transition">About</Link>
                        <Link href="/locations" className="hover:text-teal-900 transition">Locations</Link>
                        <Link href="/services" className="hover:text-teal-900 transition">Services</Link>
                        <Link href="/trainings" className="hover:text-teal-900 transition">Trainings</Link>
                        <Link href="/contact" className="hover:text-teal-900 transition">Contact</Link>
                        <Link href="/" className="hover:text-white transition border border-gray-400 rounded px-4 py-2 text-sm text-gray-800 hover:bg-teal-900">
                            Book Now
                        </Link>
                    </div>
                </div>{isOpen && (
                    <div className="custom-menu flex flex-col space-y-2 py-4 text-gray-700 font-medium md:hidden">
                        <Link href="/about" className="hover:text-teal-900 transition">About</Link>
                        <Link href="/locations" className="hover:text-teal-900 transition">Locations</Link>
                        <Link href="/services" className="hover:text-teal-900 transition">Services</Link>
                        <Link href="/trainings" className="hover:text-teal-900 transition">Trainings</Link>
                        <Link href="/contact" className="hover:text-teal-900 transition">Contact</Link>
                        <Link href="/" className="inline-flex flex-shrink-0 justify-center items-center hover:text-white transition border border-gray-400 rounded px-4 py-2 text-sm text-gray-800 hover:bg-teal-900">
                            Book Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}


