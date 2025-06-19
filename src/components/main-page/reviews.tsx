import AnimatedElement from "../animated-element"
import Card from "../card"
import ExpandableText from "../expandable-text"
import Link from "next/link"
import reviews from '@/data/reviews.json'

export default function Reviews() {
    return (
        <section className="py-20 p-8 bg-teal-900">
            <h2 className="text-4xl font-semibold text-center text-teal-50 mb-12">
                What Clients Say
            </h2>
            <div className="overflow-x-auto pb-4 scrollbar-styled">
                <AnimatedElement>
                    <div className="flex gap-6 w-max px-1 items-start">
                        {reviews.map((review, i) => (
                            <Card key={i}
                                className="w-80 min-w-[20rem] flex-shrink-0 flex flex-col p-2">
                                <div className="flex flex-col flex-grow justify-between h-full">
                                    <div>
                                        <h1 className="text-teal-800 font-semibold mb-2">
                                            {review.author}
                                        </h1>
                                        <ExpandableText content={review.review} />
                                    </div>
                                    <Link href={review.link}
                                        className="text-sm text-gray-400 hover:underline mt-4" >
                                        check out Google Maps
                                    </Link>
                                </div>
                            </Card>
                        ))}

                    </div>
                </AnimatedElement>
            </div>
            <p className="text-sm text-gray-400 pl-1 md:hidden animate-pulse">
                Swipe to scroll →
            </p>
        </section>
    )
}