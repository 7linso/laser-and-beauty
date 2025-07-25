import Link from "next/link"
import locations from '@/data/locations.json'
import Image from "next/image"
import Button from "@/components/button"
import Card from "@/components/card"
import AnimatedElement from "@/components/animated-element"

export default function LocationsPage() {
    return (
        <>
            <div className="max-w-5xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-teal-900 mb-10">
                    Our Locations
                </h1>
                {locations.map((location, index) => (
                    <section key={index} className="flex mb-5 flex-col md:flex-row custom-two-column gap-6">
                        <AnimatedElement>
                            <Card className='p-4'>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="md:w-2/3 flex flex-col">
                                        <Link href={location.linkGoogleMaps}>
                                            <h2 className="text-2xl font-semibold text-teal-800 hover:text-teal-600 underline underline-offset-4 decoration-teal-800">
                                                <span className="material-symbols-outlined">
                                                    location_on
                                                </span>
                                                {location.location}
                                            </h2>
                                            <span className="text-sm text-gray-500">{location.address}</span>
                                        </Link>
                                        <p className="text-gray-700 leading-relaxed">
                                            {location.description}
                                        </p>
                                        <Link href={location.linkGoogleMapsReviews} className="text-sm text-gray-400 hover:underline mt-2">
                                            Check Out Reviews Here
                                        </Link>
                                        <div className="mt-auto pt-5">
                                            <Button bookingLink={location.linkBooking} buttonText="Explore Services Here" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 w-full">
                                        <div className="relative w-full h-48 md:h-full rounded-t-lg overflow-hidden shadow-lg">
                                            <Image
                                                sizes="100vw"
                                                src={location.image}
                                                alt={location.address}
                                                className="object-cover"
                                                fill
                                            />
                                        </div>
                                    </div>

                                </div>
                            </Card>
                        </AnimatedElement>
                    </section>
                ))
                }
            </div >
        </>
    )
}