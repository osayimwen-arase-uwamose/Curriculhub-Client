import {
  Grid2X2,
  List,
} from "lucide-react";

const DashboardHeader = ({ 
  view,
  onViewChange,
  title = "My Hubs",
  subtitle = "Active Deployments &amp; Environments",
  breadcrumb = "",
}) => { 
  return (
    <div className="dashboard-page-header">

      <div>

        <div className="dashboard-breadcrumb">
          <span>
            USERNAME DASHBOARD
          </span>

          <span>
            /
          </span>

          <span className="text-on-background">
            {title}
          </span>
        </div>

        <h1 className="dashboard-page-title">
          {title}
        </h1>

        <p className="dashboard-page-subtitle">
          {subtitle}
        </p>

      </div>


      <div className="dashboard-view-toggle">

        <button
          type="button"
          onClick={() =>
            onViewChange("grid")
          }
          className={
            view === "grid"
              ? "dashboard-view-button dashboard-view-button-active"
              : "dashboard-view-button"
          }
          aria-label="Grid view"
        >
          <Grid2X2 size={20} />
        </button>

        <button
          type="button"
          onClick={() =>
            onViewChange("list")
          }
          className={
            view === "list"
              ? "dashboard-view-button dashboard-view-button-active"
              : "dashboard-view-button"
          }
          aria-label="List view"
        >
          <List size={20} />
        </button>

      </div>

    </div>
  );
};

export default DashboardHeader;
