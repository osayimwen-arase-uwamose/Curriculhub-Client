import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import DashboardHeader from "./DashboardHeader";
import HubGrid from "./HubGrid";

import useHubs from "../../hooks/useHubs.js"

export default function DashboardShell() {
  const [view, setView] =
    useState("grid");

  const navigate = useNavigate();

  const {
    hubs,
    loading,
    error,
    refetch,
  } = useHubs();

  const handleOpenHub = (hub) => {
    console.log(
      "Open hub:",
      hub
    );
  };

  const handleCreateHub = () => {
    navigate("/dashboard/create-hub");
  };

  return (
    <div className="dashboard-shell">

      <DashboardSidebar />

      <main className="dashboard-main">

        <DashboardTopbar />

        <div className="dashboard-content">

          <div className="dashboard-container">

            <DashboardHeader
              view={view}
              onViewChange={setView}
            />

            <HubGrid
              hubs={hubs}
              loading={loading}
              error={error}
              onRetry={refetch}
              onOpenHub={handleOpenHub}
              onCreateHub={handleCreateHub}
              view={view}
            />

          </div>

        </div>

      </main>

    </div>
  );
}