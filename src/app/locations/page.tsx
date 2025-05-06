import Link from "next/link"
import locations from '@/data/locations.json'
import Image from "next/image"

export default function LocationsPage() {
    const bookingLink = 'https://laserbeauty-room-by-olga-rogozianska-101578.square.site/?fbclid=PAAaZES5tl2oNVz1WO5lwQ-Z8cOr4vxGlBirtF5a7a3iN9AI1DBkg_kqZmBVA'

    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold text-teal-900 mb-10 border-b-4 border-teal-700 inline-block pb-3">
                    Check Out Our Locations
                </h1>
                {locations.map((location, index) => (
                    <div key={index} className="flex mb-5 flex-col md:flex-row custom-two-column gap-6">
                        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-teal-300 p-6 transition hover:shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-2/3">
                                    <Link href={location.linkGoogleMaps}>
                                        <h2 className="text-2xl font-semibold text-teal-800">
                                            <span className="material-symbols-outlined">
                                                location_on
                                            </span>
                                            {location.location}
                                        </h2>
                                        <span className="text-sm text-gray-500">{location.address}</span>
                                    </Link>
                                    <p className="text-gray-700 my-4 leading-relaxed">
                                        {location.description}
                                    </p>
                                    <Link href={location.linkBooking}
                                        className="inline-block bg-teal-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-800 transition">
                                        Explore Services Here
                                    </Link>
                                </div>
                                <div className="md:w-1/3 flex justify-center items-end">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={location.image}
                                        alt={location.address}
                                        className="rounded-lg shadow-lg w-full max-w-xs object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}