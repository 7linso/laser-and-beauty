import Button from "@/components/button";
import Card from "@/components/card";
import services from '@/data/services.json'
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <Image
          width={1000}
          height={1000}
          src="/images/laser-hero.jpg"
          alt="Laser and Beauty"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-teal-900 bg-opacity-60 z-10"></div>
        <div className="z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Laser&Beauty by Olga</h1>
          <p className="text-xl md:text-2xl mb-6">
            Laser Treatments · Skin Rejuvenation · Confidence
          </p>
          <Button buttonText="Book an Appointment" />
        </div>
      </section>

      <section className="py-20 bg-teal-50 p-8">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">Our Services</h2>
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
      </section>

      <section className="py-20 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-teal-900 mb-12">
            What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Emma R.",
                review: "Absolutely amazing results! My skin has never felt better.",
              },
              {
                name: "Sophia L.",
                review: "Professional service with a personal touch. Highly recommend!",
              },
              {
                name: "Ava M.",
                review: "Clean studio, friendly staff, and noticeable improvements after just one session.",
              },
            ].map((r, i) => (
              <Card key={i}>
                <p className="text-gray-700 italic mb-4">&quot;{r.review}&quot;</p>
                <p className="text-teal-800 font-semibold">– {r.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-100 text-center">
        <h2 className="text-4xl font-semibold text-teal-900 mb-6">Ready to Shine?</h2>
        <p className="text-gray-700 mb-4 p-4">Book your consultation today and discover your glow.</p>
        <Button buttonText="Get Started" />
      </section>
    </>

  );
}
