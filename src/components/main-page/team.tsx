import team from '@/data/team.json'
import AnimatedElement from '../animated-element'
import Card from '../card'
import Image from 'next/image'
import ExpandableText from '../expandable-text'

export default function Team() {
    return (
        <section className="py-20 p-8">
            <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
                Meet Our Team
            </h2>
            <div className="team-grid gap-8 justify-center justify-items-center">
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
    )
}