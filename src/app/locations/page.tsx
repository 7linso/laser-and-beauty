import Link from "next/link"

export default function LocationsPage() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold text-teal-900 mb-10 border-b-4 border-teal-700 inline-block pb-3">
                    Check Out Our Locations
                </h1>
                <div className="flex flex-col md:flex-row custom-two-column gap-6">
                    <div className="flex-1 bg-white rounded-2xl shadow-lg border border-teal-300 p-6 transition hover:shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                                    What Drives Me
                                </h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    I love my job and truly enjoy meeting new people.
                                    Providing high-quality, personalized services
                                    is not just my work—it&apos;s my calling. Every
                                    client I meet is treated with care,
                                    professionalism, and the commitment to help
                                    them look and feel their best.
                                </p>
                                <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                                    Building a Beauty Community
                                </h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Today, I offer advanced treatments and professional
                                    training courses for those who want to build
                                    their own path in the beauty industry. Whether
                                    you&apos;re here for a relaxing treatment or to
                                    kick-start your esthetics career, I&apos;m here
                                    to guide and support you every step of the way.
                                </p>
                                <Link href={bookingLink}
                                    className="inline-block bg-teal-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-800 transition">
                                    Book Now
                                </Link>
                            </div>
                            <div className="md:w-1/3 flex justify-center items-end">
                                <img
                                    src="/images/olga.jpg"
                                    alt="Olga portrait"
                                    className="rounded-lg shadow-lg w-full max-w-xs object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}