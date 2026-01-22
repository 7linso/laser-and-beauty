import Button from "@/components/Button";
import AnimatedElement from "@/components/AnimatedElement";
import Hero from "@/components/Hero";
import About from "@/components/main-page/About";
// import Services from "@/components/main-page/Services";
import Offers from "@/components/main-page/Offers";
import Reviews from "@/components/main-page/Reviews";
import Team from "@/components/main-page/Team";
import FAQSection from "@/components/FaqSection";
import faqs from "../data/faq-main.json";
import VideoPreview from "@/components/main-page/VideoPreview";
// import Promo from "@/components/main-page/promo";

export default function HomePage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205431/photo_2025-05-13_08-34-51_gzp2wt_va6dap.jpg";

  const backgroundVideo =
    "https://res.cloudinary.com/dqvthdtuu/video/upload/v1760449661/IMG_3544_sn22g3.mov";
  return (
    <>
      {/* <Promo /> */}
      <Hero
        backgroundImage={backgroundImage}
        title="Laser&Beauty by Olga"
        subtitle={["Laser Treatments", "Skin Rejuvenation", "Confidence"]}
        showBook
      />
      <About />
      <Offers />

      <VideoPreview
        backgroundVideo={backgroundVideo}
        text="New! Splendor X with BLEND X technology, it combines Alexandrite and Nd:YAG wavelengths for the best results on all skin types."
        points={["Fast", "Effective", "Safe"]}
      />

      <Team />
      {/* <Services /> */}

      <VideoPreview
        backgroundVideo={backgroundVideo}
        text="We're dedicated to providing each client with the highest
                quality service and an exceptional experience"
        points={["Comfort", "Confidence", "Satisfaction"]}
      />

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
