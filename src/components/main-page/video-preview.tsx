import AnimatedElement from "../animated-element"
import VideoPlayer from "../video-player"

interface VideoProps {
    backgroundVideo: string
}

export default function VideoPreview({ backgroundVideo }: VideoProps) {
    return (
        <section className="relative h-[90vh] flex flex-col lg:flex-row text-white overflow-hidden">
            <div className="relative w-full lg:w-1/2 h-full">
                <VideoPlayer link={backgroundVideo} className="h-full w-full object-cover object-bottom md:object-[center_70%]"/>

                <div className="absolute inset-0 bg-black/50 z-10" />

                <div className="absolute inset-0 flex items-center justify-center px-6 z-20 lg:hidden">
                    <AnimatedElement>
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                Laser&Beauty by Olga
                            </h1>
                            <p className="text-xl md:text-2xl mb-6">
                                Laser Treatments · Skin Rejuvenation · Confidence
                            </p>
                        </div>
                    </AnimatedElement>
                </div>
            </div>

            <div className="hidden lg:flex w-1/2 items-center justify-center px-6 py-12 z-20">
                <AnimatedElement>
                    <div className="text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Laser&Beauty by Olga
                        </h1>
                        <p className="text-xl md:text-2xl mb-6">
                            Laser Treatments · Skin Rejuvenation · Confidence
                        </p>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    )
}