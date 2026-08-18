import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="
        px-2
        py-1
        border
        border-transparent
        hover:border-grid-line
        hover:bg-surface-container-low
        transition-all
        duration-75
        active:translate-x-[2px]
        active:translate-y-[2px]
        active:shadow-none
      "
    >
      <span className="font-display text-2xl font-bold text-primary">
          CURRICULHUB
      </span>
    </Link>
  );
}