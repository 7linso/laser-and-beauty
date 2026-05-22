import CancelationFAQ from "@/components/CancelationFAQ";
import Hero from "@/components/Hero";
import { IPLSkinRejData } from "@/data/services/IPLSkinRej";
import { DiodeSkinRejData } from "@/data/services/DiodeSkinRej";
import ServicesPageTemplate from "@/components/ServicesPageTemplate";

export default function LaserTreatmentsPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758205431/ipl-treatment_ybt3tb_eldkmj.webp";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Laser Treatments"
        subtitle={["Skin Rejuvenation", "Diode", "IPL"]}
      />

      <ServicesPageTemplate
        title={IPLSkinRejData.title}
        desc1={IPLSkinRejData.desc1}
        desc2={IPLSkinRejData.desc2}
        desc3={IPLSkinRejData.desc3}
        benefits={IPLSkinRejData.benefits}
        steps={IPLSkinRejData.steps}
        reasons={IPLSkinRejData.reasons}
        prep={IPLSkinRejData.prep}
      />

      <ServicesPageTemplate
        title={DiodeSkinRejData.title}
        desc1={DiodeSkinRejData.desc1}
        desc2={DiodeSkinRejData.desc2}
        desc3={DiodeSkinRejData.desc3}
        benefits={DiodeSkinRejData.benefits}
        steps={DiodeSkinRejData.steps}
        reasons={DiodeSkinRejData.reasons}
        prep={DiodeSkinRejData.prep}
      />

      <CancelationFAQ />
    </>
  );
}
