import Container from "./Container.jsx";

export default function Section({
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section
      className={`
        py-24

        ${className}
      `}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}