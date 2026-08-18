export default function StatCard({
  value,
  label,
}) {
  return (
    <div className="text-center flex-1">

      <h3
        className="
          font-display
          text-4xl
          font-bold
          text-on-primary-container
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          uppercase
          tracking-widest
          text-xs
          font-mono
          text-on-primary-container/80
        "
      >
        {label}
      </p>

    </div>
  );
}