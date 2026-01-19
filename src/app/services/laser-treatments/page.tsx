import AnimatedElement from "@/components/animated-element";
import Card from "@/components/card";
import FAQSection from "@/components/faq-section";
import faqs from "../../../data/faq.json";

export default function LaserTreatmentsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-teal-900 mb-10">
        Laser Skin Rejuvenation Treatments
      </h1>
      <section>
        <h2 className="text-2xl font-bold text-teal-900">
          Diode Skin Rejuvenation
        </h2>
        <p>
          Diode skin rejuvenation is a gentle laser treatment that helps improve
          skin firmness, texture, and overall quality.The diode laser sends
          controlled heat deep into the skin, without damaging the surface. This
          heat “wakes up” your skin and tells it to produce new collagen — the
          protein that keeps skin firm and smooth.
        </p>
        <ul>
          What you&apos;ll notice
          <li>Smoother skin texture</li>
          <li>Firmer, tighter skin</li>
          <li>Reduced fine lines</li>
          <li>Smaller-looking pores</li>
          <li>Healthier skin glow over time</li>
        </ul>
      </section>

      <section className="pt-6">
        <h1 className="text-4xl font-bold text-teal-900 mb-10 ">
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
      </section>
      <section className="pt-6">
        <h1 className="text-4xl font-bold text-teal-900 mb-10">
          Frequently Asked Questions
        </h1>
        <FAQSection faqs={faqs} />
      </section>
    </div>
  );
}
