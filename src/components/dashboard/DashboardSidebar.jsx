import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth.js";

import Button from "../ui/Button.jsx";

import { 
  Archive,
  Bell,
  CircleHelp,
  Globe,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  Users,
} from "lucide-react";

const DashboardNavItem = ({ 
  to,
  icon: Icon,
  label,
  active = false,
}) => { 
  return (
    <Link
      to={to}
      className={
        active
          ? "dashboard-nav-item dashboard-nav-item-active"
          : "dashboard-nav-item"
      }
    >
      <Icon size={20} />

      <span>
        {label}
      </span>
    </Link>
  );
}

const DashboardSidebar = () => { 
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="dashboard-sidebar">

      <div className="dashboard-sidebar-header">

        <Link
          to="/dashboard"
          className="dashboard-logo"
          aria-label="CurriculHub dashboard"
        >
          CH
        </Link>

        <Button
          type="button"
          variant="primary"
          size="sm"
          icon={Plus}
          className="w-full"
        >
          Create New Hub
        </Button>

      </div>

      <nav className="dashboard-sidebar-nav">

        <DashboardNavItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
          active
        />

        <DashboardNavItem
          to="/activity"
          icon={Globe}
          label="Global Activity"
        />

        <DashboardNavItem
          to="/announcements"
          icon={Bell}
          label="Announcements"
        />

        <DashboardNavItem
          to="/communities"
          icon={Users}
          label="Joined Communities"
        />

        <DashboardNavItem
          to="/archive"
          icon={Archive}
          label="Personal Archive"
        />

        <DashboardNavItem
          to="/profile"
          icon={Settings}
          label="Profile Settings"
        />

      </nav>

      <div className="dashboard-sidebar-section">

        <button
          type="button"
          onClick={handleLogout}
          className="dashboard-logout"
          size="sm"
        >
          <LogOut size={18} />

          <span>
            Log Out
          </span>
        </button>

      </div>

      <div className="dashboard-sidebar-section">

        <Link
          to="/help"
          className="dashboard-help"
        >
          <CircleHelp size={18} />

          <span>
            Help Support
          </span>
        </Link>

      </div>

    </aside>
  );
};

export default DashboardSidebar;
