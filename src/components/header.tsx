'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <nav className="bg-teal-900 text-gray-200 hover:text-white shadow-md sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-15">
                    <div className="text-xl font-bold text-black ">
                        <Link href="/">Laser&Beauty by Olga</Link>
                    </div>
                    <div className="custom-collapse:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="custom-toggle focus:outline-none"
                        >
                            ☰
                        </button>
                    </div><div className={`custom-collapse items-center space-x-6 font-medium ${isOpen ? 'block' : 'hidden'} md:flex`}>
                        <Link href="/about" className=" transition">About</Link>
                        <Link href="/locations" className=" transition">Locations</Link>
                        <Link href="/services" className=" transition">Services</Link>
                        <Link href="/trainings" className=" transition">Trainings</Link>
                        <Link href={bookingLink}
                            className="hover:text-white transition border border-gray-400 rounded px-4 py-2 text-sm hover:bg-teal-900">
                            Book Now
                        </Link>
                    </div>
                </div>{isOpen && (
                    <div className="custom-menu flex flex-col space-y-2 py-4 font-medium md:hidden">
                        <Link href="/about" className=" transition">About</Link>
                        <Link href="/locations" className=" transition">Locations</Link>
                        <Link href="/services" className=" transition">Services</Link>
                        <Link href="/trainings" className=" transition">Trainings</Link>
                        <Link href="/contact" className=" transition">Contact</Link>
                        <Link href={bookingLink}
                            className="inline-flex flex-shrink-0 justify-center items-center transition border border-gray-400 rounded px-4 py-2 text-sm hover:bg-teal-600">
                            Book Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}


