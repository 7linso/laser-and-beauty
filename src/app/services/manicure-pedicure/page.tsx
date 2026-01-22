import AnimatedElement from "@/components/AnimatedElement";
import Card from "@/components/Card";
import FAQSection from "@/components/FaqSection";
import faqs from "../../../data/faq.json";
import Hero from "@/components/Hero";
import ServicesPageTemplateSmall from "@/components/ServicesPageTemplateSmall";
import { BrowLaminationgData } from "@/data/services/BorwLamination";
import { LashLiftingData } from "@/data/services/LashLifting";

export default function ManiPediPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205431/photo_2025-05-13_08-34-51_gzp2wt_va6dap.jpg";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Lashes & Brows"
        subtitle={["Lamination", "Lifting"]}
      />

      <ServicesPageTemplateSmall
        title={BrowLaminationgData.title}
        desc1={BrowLaminationgData.desc1}
        desc2={BrowLaminationgData.desc2}
        benefits={BrowLaminationgData.benefits}
      />

      <ServicesPageTemplateSmall
        title={LashLiftingData.title}
        desc1={LashLiftingData.desc1}
        desc2={LashLiftingData.desc2}
        benefits={LashLiftingData.benefits}
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
