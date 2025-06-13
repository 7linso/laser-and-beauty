import team from '@/data/team.json'
import Image from "next/image";
import Button from "@/components/button";
import Card from '@/components/card';
import ExpandableText from '@/components/expandable-text';
import AnimatedElement from '@/components/animated-element';

export default function AboutPage() {
    return (
        <>
            <div className="max-w-5xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-teal-900 mb-10">
                    About Laser&Beauty by Olga
                </h1>
                <AnimatedElement>
                    <Card>
                        <section className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                                    A Journey of Passion and Purpose
                                </h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    My name is Olga, and I&apos;m a certified esthetician
                                    with nearly 20 years of experience in the beauty
                                    industry. Born and raised in Ukraine, I owned
                                    a successful beauty salon and had the honor
                                    of mentoring many students who went on to thrive
                                    in their own careers.
                                    <br /><br />
                                    In 2019, I moved to Canada and brought my passion
                                    for skincare and aesthetics with me. Since
                                    then, I&apos;ve continued my journey in the beauty
                                    industry, eventually opening my own space where
                                    I provide high-quality, personalized treatments.
                                    I truly love what I do, and I find great joy
                                    in meeting new people and helping them feel
                                    confident and cared for through exceptional
                                    service.
                                </p>
                                <Button bookingLink="/services" buttonText="Explore Services" />
                            </div>
                            <div className="md:w-1/3 flex justify-center items-end">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/images/olga.jpg"
                                    alt="Olga portrait"
                                    className="rounded-lg shadow-lg w-full max-w-xs object-cover"
                                />
                            </div>
                        </section>
                    </Card>
                </AnimatedElement>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <AnimatedElement>
                    <Card>
                        <section className="flex flex-col md:flex-row gap-4">
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
                                <Button />
                            </div>
                            <div className="md:w-1/3 flex justify-center items-end">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/images/olga.jpg"
                                    alt="Olga portrait"
                                    className="rounded-lg shadow-lg w-full max-w-xs object-cover"
                                />
                            </div>
                        </section>
                    </Card>
                </AnimatedElement>
            </div >
            <section className="max-w-5xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-teal-900 mb-10">
                    Meet Our Team
                </h1>
                <div className="team-grid gap-8">
                    {team.map((t, index) => (
                        <AnimatedElement key={index}>
                            <Card >
                                <div className="flex flex-col items-center">
                                    <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4 relative">
                                        <Image
                                            fill
                                            src={t.image}
                                            alt={t.name}
                                        />
                                    </div>
                                    <h2 className="text-center text-xl font-semibold text-teal-800 mb-2">{t.name}</h2>
                                    <p className="text-center text-gray-400 text-sm leading-relaxed">{t.location}</p>
                                    <ExpandableText content={t.description} />
                                </div>
                            </Card>
                        </AnimatedElement>
                    ))}
                </div>
            </section>
        </>
    );

}