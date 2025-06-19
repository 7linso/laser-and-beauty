import Button from "../button"
import AnimatedElement from "../animated-element"
import Card from "../card"
import services from '@/data/services.json'
import Image from "next/image"

export default function Services() {
    return (
        <section className="py-20 p-8">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
                    Our Services
                </h2>
                <AnimatedElement >
                    <div className="grid md:grid-cols-3 gap-8">
                        {services
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 3)
                            .map((service, index) => (
                                <Card className="h-full" key={index}>
                                    <div className="flex flex-col h-full">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-48 object-cover rounded-t-lg mb-2"
                                        />
                                        <h2 className="text-xl px-2 font-semibold text-teal-800 ">
                                            {service.name}
                                        </h2>
                                        <p className="text-gray-700 p-2 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </AnimatedElement>
            </div>
            <div className="flex justify-center mt-10">
                <Button buttonText="Learn More" bookingLink="/services" />
            </div>
        </section>
    )
}