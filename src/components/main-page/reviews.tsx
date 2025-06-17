import AnimatedElement from "../animated-element"
import Card from "../card"
import ExpandableText from "../expandable-text"
import Link from "next/link"
import reviews from '@/data/reviews.json'

export default function Reviews(){
    return(
        <section className="py-20 p-8 bg-teal-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-semibold text-center text-teal-50 mb-12">
                    What Clients Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, i) => (
                        <AnimatedElement key={i}>
                            <Card >
                                <h1 className="text-teal-800 font-semibold">
                                    {review.author}
                                </h1>
                                <ExpandableText content={review.review} />
                                <Link href={review.link} className="text-sm text-gray-400 hover:underline mt-2">
                                    check out Google Maps
                                </Link>
                            </Card>
                        </AnimatedElement >
                    ))}
                </div>
            </div>
        </section >
    )
}