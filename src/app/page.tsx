import Button from "@/components/button";
import AnimatedElement from "@/components/animated-element";
import Hero from "@/components/main-page/hero";
import About from "@/components/main-page/about";
import Services from "@/components/main-page/services";
import Offers from "@/components/main-page/offers";
import Reviews from "@/components/main-page/reviews";
import Team from "@/components/main-page/team";

export default function HomePage() {
  const backgroundImage = 'https://res.cloudinary.com/dnxrobolb/image/upload/v1747143698/photo_2025-05-13_08-34-51_gzp2wt.jpg'

  return (
    <>
      <Hero backgroundImage={backgroundImage} />
      <About />
      <Services />
      <Offers />
      <Team/>
      <Reviews />

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
