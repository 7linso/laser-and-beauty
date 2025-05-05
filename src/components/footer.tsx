import Link from "next/link";

export default function Footer() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return <>
        <footer className="bg-teal-900 text-gray-200 pt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col md:items-start mb-4">
                    <p className="text-sm font-semibold mb-3">Navigation</p>
                    <ul className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:flex-col">
                        <li>
                            <Link href="/about" className="hover:text-teal-100 transition text-sm">About</Link>
                        </li>
                        <li>
                            <Link href="/locations" className="hover:text-teal-100 transition text-sm">Locations</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-teal-100 transition text-sm">Services</Link>
                        </li>
                        <li>
                            <Link href="/trainings" className="hover:text-teal-100 transition text-sm">Trainings</Link>
                        </li>
                        <li>
                            <Link href={bookingLink} className="hover:text-teal-100 transition text-sm">Book</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col md:items-start mb-4">
                    <p className="text-sm font-semibold mb-3">Follow Us</p>
                    <ul className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:flex-col">
                        <li>
                            <Link href="#" className="hover:text-teal-100 transition text-sm">Instagram</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-teal-100 transition text-sm">TikTok</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-teal-100 transition text-sm">Facebook</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col md:items-start mb-4">
                    <p className="text-sm font-semibold mb-3">&copy; {new Date().getFullYear()} Laser&Beauty by Olga</p>
                    <ul className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:flex-col">
                        <li>
                            <Link href="mailto:info@laserandbeauty.com" className="hover:text-teal-100 transition text-sm">olga.rogozjanskaja@gmail.com</Link>
                        </li>
                        <li>
                            <Link href="tel:+1-431-336-3315" className="hover:text-teal-100 transition text-sm">+1 431-336-3315</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
}
