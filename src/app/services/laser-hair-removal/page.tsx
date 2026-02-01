import CancelationFAQ from "@/components/CancelationFAQ";
import Hero from "@/components/Hero";
import { SplendorXLaserHairRemovalData } from "@/data/services/SplendorXLaserHairRem";
import { IPLHairRemovalData } from "@/data/services/IPLHairRem";
import { DiodeLaserHairRemovalData } from "@/data/services/DiodeHairRem";
import ServicesPageTemplate from "@/components/ServicesPageTemplate";
import Pricelist from "@/components/Pricelist";
import { LASER_PRICE_TABS } from "@/data/prices/LaserHairRemPrices";

export default function LaserHairRemovalPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1769656828/image_2026-01-28_212027027_ldvqyo.png";

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

      <Pricelist tabs={LASER_PRICE_TABS} />

      

      <CancelationFAQ />
    </>
  );
}
