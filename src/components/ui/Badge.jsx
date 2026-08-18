export default function Badge({ children }) {
  return (
    <div
      className="
        inline-block
        px-3
        py-1
        uppercase
        font-mono
        text-xs
        bg-slate-100
        text-primary
        border
        border-grid-line
        neo-shadow-sm
      "
    >
      {children}
    </div>
  );
}