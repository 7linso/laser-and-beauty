import Link from "next/link";

export default function Footer() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return <>
        <footer className="bg-teal-900 text-gray-200 pt-5 sm:pt-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="team-grid gap-8">
                    <div>
                        <p className="text-sm font-semibold mb-3">Navigation</p>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-teal-100 transition text-sm">About</Link></li>
                            <li><Link href="/locations" className="hover:text-teal-100 transition text-sm">Locations</Link></li>
                            <li><Link href="/services" className="hover:text-teal-100 transition text-sm">Services</Link></li>
                            <li><Link href="/trainings" className="hover:text-teal-100 transition text-sm">Trainings</Link></li>
                            <li><Link href={bookingLink} className="hover:text-teal-100 transition text-sm">Book</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold mb-3">Follow Us</p>
                        <ul className="space-y-2">
                            <li><Link href="https://www.instagram.com/laser_byolga_wpg?igsh=Mmc5MjY1MHo0cjJl" className="hover:text-teal-100 transition text-sm">Instagram</Link></li>
                            <li><Link href="https://www.facebook.com/share/16Czft5XRS/?mibextid=LQQJ4d" className="hover:text-teal-100 transition text-sm">Facebook</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold mb-3">&copy; {new Date().getFullYear()} Laser&Beauty by Olga</p>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@laserandbeauty.com" className="hover:text-teal-100 transition text-sm">olga.rogozjanskaja@gmail.com</a></li>
                            <li><a href="tel:+1-431-336-3315" className="hover:text-teal-100 transition text-sm">+1 431-336-3315</a></li>
                            <li><a href="mailto:sfarmysf@gmail.com" className="hover:text-teal-100 transition text-sm">Contact Dev</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
