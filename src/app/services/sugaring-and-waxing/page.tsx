import CancelationFAQ from "@/components/CancelationFAQ";
import Hero from "@/components/Hero";
import ServicesPageTemplate from "@/components/ServicesPageTemplate";
import { WaxingData } from "@/data/services/Waxing";
import { SugaringData } from "@/data/services/Sugaring";

export default function WaxPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205429/photo_2025-05-14_08-53-21_t6vkbp_ajrvtf.jpg";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Waxing & Sugaring"
        subtitle={["Hair Removal", "Smooth", "Soft"]}
      />

      <ServicesPageTemplate
        title={WaxingData.title}
        desc1={WaxingData.desc1}
        desc2={WaxingData.desc2}
        desc3={WaxingData.desc3}
        benefits={WaxingData.benefits}
        steps={WaxingData.steps}
        reasons={WaxingData.reasons}
      />

      <ServicesPageTemplate
        title={SugaringData.title}
        desc1={SugaringData.desc1}
        desc2={SugaringData.desc2}
        desc3={SugaringData.desc3}
        benefits={SugaringData.benefits}
        steps={SugaringData.steps}
        reasons={SugaringData.reasons}
      />

      <CancelationFAQ />
    </>
  );
}
