'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <nav className="bg-teal-900 text-gray-200 hover:text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-white">
                        <Link href="/">Laser&Beauty by Olga</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 font-medium">
                        <Link href="/about" className="transition hover:text-white">About</Link>
                        <Link href="/locations" className="transition hover:text-white">Locations</Link>
                        <Link href="/services" className="transition hover:text-white">Services</Link>
                        <Link href="/trainings" className="transition hover:text-white">Trainings</Link>
                        <Link href={bookingLink}
                            className="hover:text-white transition border border-gray-400 rounded px-4 py-2 text-sm hover:bg-teal-800">
                            Book Now
                        </Link>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-2 py-4 font-medium">
                        <Link href="/about" className="transition hover:text-white">About</Link>
                        <Link href="/locations" className="transition hover:text-white">Locations</Link>
                        <Link href="/services" className="transition hover:text-white">Services</Link>
                        <Link href="/trainings" className="transition hover:text-white">Trainings</Link>
                        <Link href="/contact" className="transition hover:text-white">Contact</Link>
                        <Link href={bookingLink}
                            className="inline-flex justify-center items-center transition border border-gray-400 rounded px-4 py-2 text-sm hover:bg-teal-700">
                            Book Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}


