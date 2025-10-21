import AnimatedElement from "../animated-element"
import Button from "../button"

export default function Offers() {
    return (
        <section className="py-20 text-center">
            <AnimatedElement>
                <h2 className="text-4xl font-semibold mb-6 text-teal-900">
                    Our Special Offers
                </h2>
                <p className="p-2 font-semibold text-teal-900">
                    First visit Laser session 25% OFF or FREE underarms
                </p>
                <p className="p-2 font-semibold text-teal-900">
                    Get your 25% discount if you buy Laser session for 3 any areas of your body
                </p>
                <p className="mb-4 font-semibold p-2 text-teal-900">
                    Friend referral Laser session 25% OFF
                </p>
                <Button buttonText="Book" />
            </AnimatedElement>
        </section>
    )
}