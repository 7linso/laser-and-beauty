import AnimatedElement from "../animated-element"

export default function About() {
    return (
        <>
            <section className="w-full bg-teal-900 py-20 px-6 sm:px-10">
                <div className="mx-auto w-full max-w-full lg:max-w-[60%] text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-teal-50 mb-8 md:mb-12">
                        A Journey of Passion and Purpose
                    </h2>
                    <AnimatedElement>
                        <p className="text-teal-50 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                            Welcome! I&apos;m Olga, a certified esthetician
                            with nearly 20 years of experience in the beauty
                            industry. Originally from Ukraine, I built
                            a successful salon and mentored aspiring
                            professionals before bringing my passion for
                            skincare to Canada in 2019. Since then,
                            I&apos;ve created a warm, professional space in
                            Winnipeg where I offer advanced, personalized
                            treatments that help clients feel confident
                            and cared for.
                        </p>
                        <p className="text-teal-50 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                            At Laser&Beauty, I&apos;m proud to lead a
                            dedicated team and provide both high-quality
                            services and professional training courses.
                            Whether you&apos;re here for a glow-up or looking
                            to start your journey in esthetics, I&apos;m
                            here to support and guide you every step of
                            the way.
                        </p>
                    </AnimatedElement>
                </div>
            </section>
        </>
    )
}