import Section from "../../layout/Section.jsx";

import HeroContent from "./HeroContent.jsx";
import HeroImage from "./HeroImage.jsx";

export default function Hero() {
  return (
   <Section
    className="
        bg-surface
        border-b
        border-border
    "

    containerClassName="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-12
    "
    >
      <HeroContent />

      <HeroImage />
    </Section>
  );
}