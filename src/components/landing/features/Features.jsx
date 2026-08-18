import Section from "../../layout/Section.jsx";

import FeatureCard from "./FeatureCard.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import features from "../../../data/features.js";

export default function Features() {
  return (
    <Section
      className="
        bg-surface
      "
    >
      <div className="flex justify-center">

      <SectionHeading
          className="
              mb-16
              border-b-2
              border-text
              inline-block
              pb-4
          "
      >
          Core Infrastructure
      </SectionHeading>

      </div>

      <div
        className="
          grid

          grid-cols-1

          md:grid-cols-2

          xl:grid-cols-3

          gap-8
        "
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
}