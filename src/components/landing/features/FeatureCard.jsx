import Card from "../../ui/Card.jsx";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Card
      className="
        group
        flex
        flex-col
        p-6
        transition-colors
        duration-200
        hover:bg-surface-container-low
      "
    >
      <div
        className="
          w-12
          h-12
          mb-6
          flex
          items-center
          justify-center

          border
          border-on-background

          bg-secondary-container

          neo-shadow-sm

          transition-colors
          duration-200

          group-hover:bg-primary-container
          group-hover:text-on-primary-container
        "
      >
        <Icon size={22} />
      </div>

      <h3
        className="
          mb-3
          font-display
          text-xl
          font-bold
          text-on-background
        "
      >
        {title}
      </h3>

      <p
        className="
          flex-grow
          leading-relaxed
          text-on-surface-variant
        "
      >
        {description}
      </p>
    </Card>
  );
}