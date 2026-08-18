import Badge from "../../ui/Badge.jsx";
import HeroActions from "./HeroActions.jsx";
import Heading from "../../ui/Heading.jsx";

export default function HeroContent() {
  return (
    <div className="flex-1 space-y-8">

      <Badge>
        For Academic Leaders
      </Badge>

      <Heading level={1}>
        The operating system
        <br />
        for class reps.
      </Heading>

      <p
        className="
          max-w-xl
          pl-4
          border-l-4
          border-primary
          text-lg
          text-on-surface-variant
          leading-relaxed
        "
      >
        Centralize submissions, broadcast updates,
        and manage your student cohort with military
        precision. A structured workspace designed
        for structured minds.
      </p>

      <HeroActions />

    </div>
  );
}