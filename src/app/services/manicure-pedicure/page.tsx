import Hero from "@/components/Hero";
import ServicesPageTemplateSmall from "@/components/ServicesPageTemplateSmall";
import { ManicureData } from "@/data/services/Manicure";
import { PedicureData } from "@/data/services/Pedicure";
import CancelationFAQ from "@/components/CancelationFAQ";

export default function ManiPediPage() {
  const backgroundImage =
    "https://res.cloudinary.com/dqvthdtuu/image/upload/v1758354235/IMG_3329_ers6k4.jpg";

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="Nails Care"
        subtitle={["Manicure", "Pedicure", "Professional Nail Care"]}
      />

      <ServicesPageTemplateSmall
        title={ManicureData.title}
        desc1={ManicureData.desc1}
        desc2={ManicureData.desc2}
        benefits={ManicureData.benefits}
      />

      <ServicesPageTemplateSmall
        title={PedicureData.title}
        desc1={PedicureData.desc1}
        desc2={PedicureData.desc2}
        benefits={PedicureData.benefits}
      />

      <CancelationFAQ />
    </>
  );
}
