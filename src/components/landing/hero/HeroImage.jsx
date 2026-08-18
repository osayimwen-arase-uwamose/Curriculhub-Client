import dashboardPreview from "../../../assets/images/dashboard-preview.webp";

export default function HeroImage() {
  return (
    <div
      className="
        flex-1
        h-[400px]
        w-full
        p-4
        flex
        items-center
        justify-center
        border
        border-grid-line
        bg-surface-container-low
        neo-shadow
      "
    >
      <img
        src={dashboardPreview}
        alt="StudentHub Dashboard"
        className="
          w-full
          h-full
          object-cover
          border
          border-grid-line
        "
      />
    </div>
  );
}