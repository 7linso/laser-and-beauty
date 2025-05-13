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
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          fill
          priority
          src={backgroundImage}
          alt="Laser and Beauty"
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="z-20 text-center px-6">
          <AnimatedElement>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Laser&Beauty by Olga
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Laser Treatments · Skin Rejuvenation · Confidence
            </p>
            <Button buttonText="Book an Appointment" />
          </AnimatedElement>
        </div>
      </section>

      <section className="py-20 bg-teal-50 p-8">
        <AnimatedElement>
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((service, index) => (
                  <Card key={index}>
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
                      <div className="mt-auto pt-4">
                        <Button />
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

          </div>
          <div className="flex justify-center mt-10">
            <Button buttonText="Learn More" bookingLink="/services" />
          </div>
        </AnimatedElement>
      </section>

      <section className="py-20 p-8">
        <AnimatedElement>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
              What Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, i) => (
                <Card key={i}>
                  <ExpandableText content={review.review} author={review.author} />
                  <Link href={review.link} className="text-sm text-gray-400">
                      see on Google Maps
                    </Link>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedElement >
      </section>

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
