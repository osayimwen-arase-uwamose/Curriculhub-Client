import {
  ArrowRight,
  History,
  RefreshCw,
} from "lucide-react";

const HubCard = ({ 
  hub,
  onOpen,
}) => { 
  const isArchived = hub.status === "archived";
  
  return (
    <article className="hub-card">

      <div className="hub-card-header">

        {/* <div
          className={`
            hub-card-icon
            ${hub.iconBackground}
          `}
        >
          <hub.Icon
            size={20}
            className={hub.iconColor}
          />
        </div> */}

        <span
          className={
            isArchived
              ? "hub-status hub-status-archived"
              : "hub-status hub-status-active"
          }
        >
          {isArchived
            ? "Archived"
            : "Active"}
        </span>

      </div>

      <div className="hub-card-body">

        <h2 className="hub-card-title">
          {hub.title}
        </h2>

        <p className="hub-card-description">
          {hub.description}
        </p>

        <div className="hub-card-meta">

          <div>
            <RefreshCw size={14} />

            <span>
              Updated {hub.updatedAt}
            </span>
          </div>

        </div>

      </div>

      <div className="hub-card-footer">

        <button
          type="button"
          onClick={() =>
            onOpen(hub)
          }
          className={
            isArchived
              ? "hub-card-action hub-card-action-archived"
              : "hub-card-action"
          }
        >
          {isArchived
            ? "View Archive"
            : "Enter Hub"}

          {isArchived ? (
            <History size={16} />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>

      </div>

    </article>
  );
};

export default HubCard;
