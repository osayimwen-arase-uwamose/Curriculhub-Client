import stats from "../../../data/stats.js";
import StatCard from "./StatCard.jsx";

export default function Stats() {
  return (
    <section
      className="
        w-full
        bg-primary-container
        text-on-primary-container
        border-b
        border-grid-line
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          divide-y
          md:divide-y-0
          md:divide-x
          divide-on-primary-container/30
        "
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}