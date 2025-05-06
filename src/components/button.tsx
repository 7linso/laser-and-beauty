import Link from "next/link"

interface ButtonProps {
    bookingLink: string,
    buttonText?: string
}

export default function Button({ bookingLink, buttonText = 'Book Now' }: ButtonProps) {
    return (
        <Link href={bookingLink}
            className="inline-block bg-teal-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-800 transition">
            {buttonText}
        </Link>
    )
}