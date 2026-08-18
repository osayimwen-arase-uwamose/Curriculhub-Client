import { Terminal } from "lucide-react";

import Section from "../../layout/Section.jsx";

import Button from "../../ui/Button.jsx";

export default function CTASection() {
  return (
    <Section
      className="
        flex
        flex-col
        items-center

        text-center

        border-t
        border-border

        bg-surface-muted
      "
    >
      <h2
        className="
          mb-6

          font-display
          text-5xl
          font-bold
        "
      >
        Initialize your Hub.
      </h2>

      <p
        className="
          mb-8

          max-w-2xl

          text-lg

          leading-relaxed

          text-text-muted
        "
      >
        Join the network of structured student
        leaders. Deploy your first StudentHub
        instance in under 5 minutes.
      </p>

      <Button
        variant="dark"
        size="lg"
        icon={Terminal}
      >
        Deploy Now
      </Button>
    </Section>
  );
}