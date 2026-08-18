export default function SectionHeading({
  children,
  className = "",
}) {
  return (
    <h2
      className={`
        font-display
        text-4xl
        md:text-5xl
        font-bold

        ${className}
      `}
    >
      {children}
    </h2>
  );
}