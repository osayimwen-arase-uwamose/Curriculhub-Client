import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer
      className="
        flex
        items-center
        justify-between

        w-full

        px-6
        py-8

        border-t
        border-grid-line

        bg-surface

        neo-shadow
      "
    >
      <Logo />

      <span
        className="
          font-mono
          text-xs
          uppercase
          tracking-widest
          text-on-surface-variant
        "
      >
        © 2026 DAYONETECH
      </span>
    </footer>
  );
}