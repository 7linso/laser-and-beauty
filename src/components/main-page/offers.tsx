import AnimatedElement from "../animated-element"
import Button from "../button"

export default function Offers() {
    return (
        <section className="py-20 bg-teal-900 text-center">
            <AnimatedElement>
                <h2 className="text-4xl font-semibold text-teal-50 mb-6">
                    Our Special Offers
                </h2>
                <p className="text-teal-50 p-2">
                    First visit Laser session 25% OFF
                </p>
                <p className="text-teal-50 p-2">
                    Get your 25% discount if you buy Laser session for 3 any areas of your body
                </p>
                <p className="text-teal-50 mb-4 p-2">
                    Friend referral Laser session 25% OFF
                </p>
                <Button buttonText="Book" />
            </AnimatedElement>
        </section>
    )
}