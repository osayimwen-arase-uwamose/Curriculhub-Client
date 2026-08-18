export default function PageContainer({ children }) {
  return (
    <main
      className="
        relative
        z-10

        mx-auto
        my-12

        w-full
        max-w-[1280px]

        border
        border-border

        bg-background/90

        shadow-neo

        bg-grid
      "
    >
      {children}
    </main>
  );
}