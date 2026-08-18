export default function IconButton({
  icon: Icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        p-2
        border
        border-transparent
        hover:border-grid-line
        hover:bg-surface-container-low
        transition-all
        duration-75
      "
    >
      <Icon
        size={22}
        className="text-on-surface-variant"
      />
    </button>
  );
}