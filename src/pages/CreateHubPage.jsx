import { useNavigate } from "react-router-dom";

import DashboardHeader from "../components/dashboard/DashboardHeader.jsx";
import CreateHubForm from "../components/dashboard/create-hub/CreateHubForm.jsx";

const CreateHubPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-content">
      <div className="dashboard-container">
        <DashboardHeader
          breadcrumb="Create New Hub"
          title="Create New Hub"
          subtitle="Initialize a new academic environment."
        />

        <CreateHubForm
          onCancel={() => navigate("/dashboard")}
        />
      </div>
    </div>
  );
};

export default CreateHubPage;