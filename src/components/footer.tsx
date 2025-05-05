import Link from "next/link";

export default function Footer() {
    return <>
        <footer className="bg-teal-900 text-gray-200 py-6 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Laser&Beauty by Olga</p>
                </div>
                <div className="flex space-x-4">
                    <Link href="mailto:info@laserandbeauty.com" className="hover:text-teal-100 transition text-sm">olga.rogozjanskaja@gmail.com</Link>
                    <Link href="tel: +1 431-336-3315" className="hover:text-teal-100 transition">+1 431-336-3315</Link>
                </div>
            </div>
        </footer>
    </>
}
