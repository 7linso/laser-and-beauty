import AnimatedElement from "@/components/AnimatedElement";
import Card from "@/components/Card";
import FAQSection from "@/components/FaqSection";
import faqs from "../../../data/faq.json";
import Hero from "@/components/Hero";
import { SplendorXLaserHairRemovalData } from "@/data/services/SplendorXLaserHairRem";
import { IPLHairRemovalData } from "@/data/services/IPLHairRem";
import { DiodeLaserHairRemovalData } from "@/data/services/DiodeHairRem";
import ServicesPageTemplate from "@/components/ServicesPageTemplate";

export default function LaserHairRemovalPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205431/photo_2025-05-13_08-34-51_gzp2wt_va6dap.jpg";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Laser Hair Removal"
        subtitle={["Splendor X with BLEND X", "Diode", "IPL"]}
      />

      <ServicesPageTemplate
        title={SplendorXLaserHairRemovalData.title}
        desc1={SplendorXLaserHairRemovalData.desc1}
        desc2={SplendorXLaserHairRemovalData.desc2}
        desc3={SplendorXLaserHairRemovalData.desc3}
        benefits={SplendorXLaserHairRemovalData.benefits}
        steps={SplendorXLaserHairRemovalData.steps}
        reasons={SplendorXLaserHairRemovalData.reasons}
      />

      <ServicesPageTemplate
        title={IPLHairRemovalData.title}
        desc1={IPLHairRemovalData.desc1}
        desc2={IPLHairRemovalData.desc2}
        desc3={IPLHairRemovalData.desc3}
        benefits={IPLHairRemovalData.benefits}
        steps={IPLHairRemovalData.steps}
        reasons={IPLHairRemovalData.reasons}
      />

      <ServicesPageTemplate
        title={DiodeLaserHairRemovalData.title}
        desc1={DiodeLaserHairRemovalData.desc1}
        desc2={DiodeLaserHairRemovalData.desc2}
        desc3={DiodeLaserHairRemovalData.desc3}
        benefits={DiodeLaserHairRemovalData.benefits}
        steps={DiodeLaserHairRemovalData.steps}
        reasons={DiodeLaserHairRemovalData.reasons}
      />

      <section className="px-4 py-16 bg-teal-900">
        <div className="max-w-5xl mx-auto ">
          <h1 className="text-4xl font-bold text-teal-50 mb-10 ">
            Important Note!
          </h1>
          <AnimatedElement>
            <Card className="p-4">
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                Cancellation Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                24-hour notice is required for all cancellations to aviod a late
                cancellation or no-show fee.
                <br />
                <br />
                We provide clients with a 10-minute grace period, however if you
                are later than 10 minutes your appointment may need to be
                rescheduled and you will be required to pay a late cancellation
                fee.
                <br />
                <br />
                Late Cancellation Fee: 50% of service booked.
                <br />
                Less than 24-hour Cancellation Fee: 50% of service booked.
                <br />
                No-show Fee: 100% of service booked.
                <br />
                <br />
                Please contact the salon if you have any questions.
              </p>
            </Card>
          </AnimatedElement>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-teal-900 mb-10">
            Frequently Asked Questions
          </h1>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
