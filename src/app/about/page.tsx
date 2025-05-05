import Link from "next/link";

export default function AboutPage() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-4">
                <h1 className="text-3xl font-bold text-teal-900 mb-8 border-b-2 border-teal-700 pb-2 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.1)]">
                    About Laser&Beauty by Olga
                </h1>
                <div className="flex mb-5 flex-col md:flex-row custom-two-column gap-6">
                    <div className="flex-1 bg-white rounded-xl shadow-md p-5 hover:shadow-xl border-3 border-teal-700 transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-2/3">
                                <h2 className="text-xl font-semibold text-teal-800 mb-2">
                                    A Journey of Passion and Purpose
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    My name is Olga, and I’m a certified esthetician
                                    with nearly 20 years of experience in the beauty
                                    industry. Born and raised in Ukraine, I owned
                                    a successful beauty salon and had the honor
                                    of mentoring many students who went on to thrive
                                    in their own careers.
                                    <br /><br />
                                    In 2019, I moved to Canada and brought my passion
                                    for skincare and aesthetics with me. Since
                                    then, I’ve continued my journey in the beauty
                                    industry, eventually opening my own space where
                                    I provide high-quality, personalized treatments.
                                    I truly love what I do, and I find great joy
                                    in meeting new people and helping them feel
                                    confident and cared for through exceptional
                                    service.
                                </p>
                                <Link href="/services"
                                    className="inline-block bg-teal-700 text-white font-medium py-2 px-4 rounded hover:bg-teal-800 transition">
                                    Explore Services
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
                <div className="flex flex-col md:flex-row custom-two-column gap-6">
                    <div className="flex-1 bg-white rounded-xl shadow-md p-5 hover:shadow-xl border-3 border-teal-700 transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-2/3">
                                <h2 className="text-xl font-semibold text-teal-800 mb-2">
                                    What Drives Me
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    I love my job and truly enjoy meeting new people.
                                    Providing high-quality, personalized services
                                    is not just my work—it’s my calling. Every
                                    client I meet is treated with care,
                                    professionalism, and the commitment to help
                                    them look and feel their best.
                                </p>
                                <h2 className="text-xl font-semibold text-teal-800 mb-2">
                                    Building a Beauty Community
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Today, I offer advanced treatments and professional
                                    training courses for those who want to build
                                    their own path in the beauty industry. Whether
                                    you’re here for a relaxing treatment or to
                                    kick-start your esthetics career, I’m here
                                    to guide and support you every step of the way.
                                </p>
                                <Link href={bookingLink}
                                    className="inline-block bg-teal-700 text-white font-medium py-2 px-4 rounded hover:bg-teal-800 transition">
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
    );

}