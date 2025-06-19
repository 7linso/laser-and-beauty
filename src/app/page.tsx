import Button from "@/components/button";
import AnimatedElement from "@/components/animated-element";
import Hero from "@/components/main-page/hero";
import About from "@/components/main-page/about";
import Services from "@/components/main-page/services";
import Offers from "@/components/main-page/offers";
import Reviews from "@/components/main-page/reviews";
import Team from "@/components/main-page/team";
import FAQSection from "@/components/faq";
import faqs from '../data/faq-main.json'


export default function HomePage() {
  const backgroundImage = 'https://res.cloudinary.com/dnxrobolb/image/upload/v1747143698/photo_2025-05-13_08-34-51_gzp2wt.jpg'

  return (
    <>
      <Hero backgroundImage={backgroundImage} />
      <About />
      <Services />
      <Offers />
      <Team />
      <Reviews />
      <div className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-teal-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <FAQSection faqs={faqs} />
      </div>


      <section className="py-20 bg-teal-900 text-center">
        <AnimatedElement>
          <h2 className="text-4xl font-semibold text-teal-50 mb-6">
            Ready to Shine?
          </h2>
          <p className="text-teal-50 mb-4 p-4">
            Book your consultation today and discover your glow.
          </p>
          <Button buttonText="Get Started" />
        </AnimatedElement>
      </section>
    </>
  );
}
