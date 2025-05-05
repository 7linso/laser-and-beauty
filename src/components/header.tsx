'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <nav className="bg-teal-900 backdrop-blur-lg text-gray-100 shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-semibold text-white flex items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dnxrobolb/image/upload/v1746469470/favicon_vfsqba.ico"
                                alt="icon"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                        <Link href="/" className="hover:text-teal-300 transition">Laser&Beauty by Olga</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl focus:outline-none transition duration-200"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 font-medium">
                        <Link href="/about" className="hover:text-teal-300 transition duration-200">About</Link>
                        <Link href="/locations" className="hover:text-teal-300 transition duration-200">Locations</Link>
                        <Link href="/services" className="hover:text-teal-300 transition duration-200">Services</Link>
                        <Link href="/trainings" className="hover:text-teal-300 transition duration-200">Trainings</Link>
                        <Link
                            href={bookingLink}
                            className="bg-gradient-to-r from-teal-600 to-teal-400 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-teal-700 hover:to-teal-500 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-center flex flex-col space-y-4 py-4 font-medium transition-all">
                        <Link href="/about" className="hover:text-teal-300 transition duration-200">About</Link>
                        <Link href="/locations" className="hover:text-teal-300 transition duration-200">Locations</Link>
                        <Link href="/services" className="hover:text-teal-300 transition duration-200">Services</Link>
                        <Link href="/trainings" className="hover:text-teal-300 transition duration-200">Trainings</Link>
                        <Link
                            href={bookingLink}
                            className="bg-gradient-to-r from-teal-600 to-teal-400 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-teal-700 hover:to-teal-500 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}


