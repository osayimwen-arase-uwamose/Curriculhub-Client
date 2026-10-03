import HubCard from "./HubCard.jsx";
import CreateHubCard from "./CreateHubCard.jsx";

function HubGridLoading() {
  return (
    <div className="hub-grid">
      {[1, 2, 3, 4].map(
        (item) => (
          <div
            key={item}
            className="hub-card animate-pulse"
          >
            <div className="p-5">
              <div className="h-10 w-10 bg-surface-container" />
            </div>

            <div className="p-5">
              <div className="mb-3 h-6 w-3/4 bg-surface-container" />

              <div className="h-4 w-full bg-surface-container" />

              <div className="mt-2 h-4 w-2/3 bg-surface-container" />
            </div>
          </div>
        )
      )}
    </div>
  );
}


function HubGridError({
  onRetry,
}) {
  return (
    <div className="card p-8 text-center">

      <h2 className="heading-sm">
        Unable to load your hubs
      </h2>

      <p className="body-md mt-2 text-text-muted">
        Something went wrong while
        retrieving your hubs.
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="neo-button mt-6 bg-primary px-6 py-3 text-white"
      >
        Try Again
      </button>

    </div>
  );
}


function HubGridEmpty({
  onCreateHub,
}) {
  return (
    <div className="card p-12 text-center">

      <h2 className="heading-sm">
        No Hubs Yet
      </h2>

      <p className="body-md mx-auto mt-2 max-w-md text-text-muted">
        You haven't created or joined
        any hubs yet.
      </p>

      <button
        type="button"
        onClick={onCreateHub}
        className="neo-button mt-6 bg-primary px-6 py-3 text-white"
      >
        Create Your First Hub
      </button>

    </div>
  );
}


const HubGrid = ({
  hubs,
  loading,
  error,
  onRetry,
  onOpenHub,
  onCreateHub,
  view,
}) => {
  if (loading) {
    return (
      <HubGridLoading />
    );
  }

  if (error) {
    return (
      <HubGridError
        onRetry={onRetry}
      />
    );
  }

  if (!hubs.length) {
    return (
      <HubGridEmpty
        onCreateHub={onCreateHub}
      />
    );
  }

  return (
    <div
      className={
        view === "list"
          ? "hub-grid hub-grid-list"
          : "hub-grid"
      }
    >

      {hubs.map((hub) => (
        <HubCard
          key={hub.id}
          hub={hub}
          onOpen={onOpenHub}
        />
      ))}

      <CreateHubCard
        onClick={onCreateHub}
      />

    </div>
  );
}

export default HubGrid;