import Button from "@/components/button";
import Card from "@/components/card";
import services from '@/data/services.json'
import Image from "next/image";
import AnimatedElement from "@/components/animated-element";
import reviews from '@/data/reviews.json'
import Link from "next/link";
import ExpandableText from "@/components/expandable-text";

export default function HomePage() {
  const backgroundImage = 'https://res.cloudinary.com/dnxrobolb/image/upload/v1747143698/photo_2025-05-13_08-34-51_gzp2wt.jpg'
  // const backgroundImage = 'https://res.cloudinary.com/dnxrobolb/image/upload/v1747143698/photo_2025-05-13_08-34-43_shdzsx.jpg'

  return (
    <>
      <section className="relative h-[90vh] flex flex-col lg:flex-row text-white overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-full">
          <Image
            fill
            priority
            src={backgroundImage}
            alt="Laser and Beauty"
            className="object-cover z-0"
          />
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
                <Button buttonText="Book an Appointment" />
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
              <Button buttonText="Book an Appointment" />
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="w-full bg-teal-900 py-20 px-6 sm:px-10">
        <div className="mx-auto w-full max-w-full lg:max-w-[60%] text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-teal-50 mb-8 md:mb-12">
            Our Mission
          </h2>
          <AnimatedElement>
            <p className="text-teal-50 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
              Welcome! I&apos;m Olga, a certified esthetician with nearly
              20 years of experience in skincare and beauty. From my roots
              in Ukraine to my new home in Canada, my mission has always
              been the same: helping people look and feel their best.
              Today, I lead a team of dedicated professionals across
              several locations in Winnipeg, offering expert care and
              personalized treatments in a welcoming environment.
            </p>
            <p className="text-teal-50 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
              At Laser&Beauty, I offer advanced, personalized treatments in
              a warm, professional setting—where confidence and care go
              hand in hand.
            </p>
            <p className="text-teal-50 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
              Whether you&apos;re here for a glow-up or ready to start your
              career in beauty, I&apos;m here to guide you every step of the way.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-20 p-8">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((service, index) => (
                <AnimatedElement key={index}>
                  <Card className="h-full">
                    <div className="flex flex-col h-full">
                      <Image
                        width={100}
                        height={100}
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                        {service.name}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      {/* <div className="mt-auto pt-4">
                        <Button />
                      </div> */}
                    </div>
                  </Card>
                </AnimatedElement>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button buttonText="Learn More" bookingLink="/services" />
        </div>
      </section>

      <section className="py-20 bg-teal-900 text-center">
        <AnimatedElement>
          <h2 className="text-4xl font-semibold text-teal-50 mb-6">
            Our Special Offers
          </h2>
          <p className="text-teal-50 p-2">
            First visit Laser session 25% OFF
          </p>
          <p className="text-teal-50 p-2">
            Get your 25% Discount if you buy Laser session for any 3 areas of your body
          </p>
          <p className="text-teal-50 mb-4 p-2">
            Friend Referral Laser session 25% OFF
          </p>
          <Button buttonText="Book" />
        </AnimatedElement>
      </section>

      <section className="py-20 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
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

      <section className="py-20 bg-teal-100 text-center">
        <AnimatedElement>
          <h2 className="text-4xl font-semibold text-teal-900 mb-6">
            Ready to Shine?
          </h2>
          <p className="text-gray-700 mb-4 p-4">
            Book your consultation today and discover your glow.
          </p>
          <Button buttonText="Get Started" />
        </AnimatedElement>
      </section>
    </>
  );
}
