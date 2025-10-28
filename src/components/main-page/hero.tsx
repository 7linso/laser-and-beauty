import Image from "next/image"
import Button from "../button"
import AnimatedElement from "../animated-element"

interface HeroProps {
    backgroundImage: string
}

export default function Hero({ backgroundImage }: HeroProps) {
    return (
        <section className="relative h-[90vh] flex flex-col lg:flex-row text-white overflow-hidden">
            <div className="relative w-full lg:w-1/2 h-full">
                <Image
                    priority
                    fill
                    src={backgroundImage}
                    alt="Laser and Beauty"
                    draggable={false}
                    className="object-cover z-0"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                // placeholder="blur" // <-- add if you can
                />

                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-6 z-20
          lg:static lg:w-1/2 lg:items-center lg:justify-center lg:px-6 lg:py-12" >
                <AnimatedElement>
                    <div className=" text-center lg:text-left " >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Laser&Beauty by Olga
                        </h1>
                        <p className="text-xl md:text-2xl mb-6">
                            Laser Treatments · Skin Rejuvenation · Confidence
                        </p>
                        <Button buttonText="Book an Appointment" />
                    </div>
                </AnimatedElement>
            </div>
        </section>
    )
}
