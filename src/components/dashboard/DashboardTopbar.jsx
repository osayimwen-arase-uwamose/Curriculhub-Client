import { 
  Bell,
  Search,
  Settings,
} from "lucide-react";

const DashboardTopbar = () => { 
  return (
    <header className="dashboard-topbar">

      <div className="dashboard-mobile-logo">
        CH
      </div>

      <div className="dashboard-search-wrapper">

        <Search
          size={20}
          className="dashboard-search-icon"
        />

        <input
          type="search"
          placeholder="Search hubs, resources..."
          className="dashboard-search"
        />

      </div>

      <div className="dashboard-topbar-actions">

        <button
          type="button"
          className="dashboard-icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="notification-badge">
            3
          </span>
        </button>

        <button
          type="button"
          className="dashboard-icon-button"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>

      </div>

    </header>
  );
};

export default DashboardTopbar;
