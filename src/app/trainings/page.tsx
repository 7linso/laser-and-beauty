import Link from "next/link";

export default function TrainingsPage() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'
    const videoSource = "https://www.youtube.com/embed/wVaVFqjKD20"

    return <>
        <div className="max-w-5xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold text-teal-900 mb-8 border-b-2 border-teal-700 pb-2 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.1)]">
                Get Certified & Launch Your Career!
            </h1>
            <div className="flex flex-col md:flex-row custom-two-column gap-6">
                <div className="flex-1 bg-white rounded-xl shadow-md p-5 hover:shadow-xl border-3 border-teal-700 transition-shadow duration-300">
                    <h2 className="text-xl font-semibold text-teal-800 mb-2">
                        Ready to begin a new chapter?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        This course is thoughtfully designed to give you the skills and confidence you need to launch your own sugaring business. Whether you're starting from scratch or looking to enhance your knowledge, you're in the right place!
                    </p>
                    <p className="text-gray-600 mb-6">
                        By the end of this training, you'll understand all the essentials of professional sugaring, including theory, technique, and client care.
                    </p>
                    <h2 className="text-xl font-semibold text-teal-800 mb-2">Day 1: Foundation & Fundamentals</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Introduction to sugaring & its benefits</li>
                        <li>Hair and skin anatomy</li>
                        <li>Hygiene protocols: sanitation & disinfection</li>
                        <li>Pre- and post-treatment care</li>
                        <li>Product knowledge & selection</li>
                        <li>Studio setup for success</li>
                        <li>How to conduct professional client consultations</li>
                    </ul>
                    <h2 className="text-xl font-semibold text-teal-800 mb-2">Day 2: Hands-On Practice & Mastery</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Live demonstrations: legs, bikini, underarms, face & Brazilian</li>
                        <li>Supervised hands-on practice for each treatment area</li>
                        <li>Troubleshooting common issues</li>
                        <li>Understanding paste types & heating techniques</li>
                    </ul>
                    <h2 className="text-xl font-semibold text-teal-800 mb-2">Prefer Waxing Instead?</h2>
                    <p className="text-gray-700 mb-4">
                        If sugaring isn't quite what you're looking for, we also offer a complete professional waxing course that covers everything you need to get started.
                    </p>
                    <Link href={bookingLink}
                        className="inline-block bg-teal-700 text-white font-medium py-2 px-4 rounded hover:bg-teal-800 transition">
                        Book Waxing Course
                    </Link>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-md p-5 hover:shadow-xl border-3 border-teal-700 transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-teal-800 mb-4 text-center">Watch the Course Preview</h3>
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={videoSource}
                            title="squat 100kg/225lbx10 with me🤩 #fitness #lowerbodyexercise"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    </>
}