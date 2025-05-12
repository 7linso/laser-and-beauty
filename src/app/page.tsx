import Button from "@/components/button";
import Card from "@/components/card";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <img
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
            {["Laser Hair Removal", "Facials & Skin Care", "Anti-Aging Treatments"].map((service, i) => (
              <Card key={i}>
                <div className="h-56 bg-gray-200">
                  <img
                    src={`/images/service${i + 1}.jpg`}
                    alt={service}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Professional care tailored to your skin and beauty needs.
                  </p>
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
              <div key={i} className="bg-teal-50 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic mb-4">"{r.review}"</p>
                <p className="text-teal-800 font-semibold">– {r.name}</p>
              </div>
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
