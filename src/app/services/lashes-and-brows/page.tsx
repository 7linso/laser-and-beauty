import CancelationFAQ from "@/components/CancelationFAQ";
import Hero from "@/components/Hero";
import ServicesPageTemplateSmall from "@/components/ServicesPageTemplateSmall";
import { BrowLaminationgData } from "@/data/services/BrowLamination";
import { LashLiftingData } from "@/data/services/LashLifting";

export default function LashesAndBrowsPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758354466/IMG_3694_wmagis.jpg";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Lashes & Brows"
        subtitle={["Lamination", "Lifting", "Naturally Defined"]}
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
      <CancelationFAQ />
    </>
  );
}
