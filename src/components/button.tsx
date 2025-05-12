import Link from "next/link"

interface ButtonProps {
    bookingLink?: string,
    buttonText?: string
}

export default function Button({ bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA', 
    buttonText = 'Book Now' }: ButtonProps) {
    return (
        <Link href={bookingLink}
            className="inline-block bg-teal-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-800 transition">
            {buttonText}
        </Link>
    )
}