import { Plus } from "lucide-react";

const CreateHubCard = ({ 
  onClick,
}) => { 
  return (
    <button
      type="button"
      onClick={onClick}
      className="create-hub-card"
    >
      <div className="create-hub-icon">
        <Plus size={32} />
      </div>

      <h2 className="create-hub-title">
        Deploy New Hub
      </h2>

      <p className="create-hub-subtitle">
        Initialize Environment
      </p>
    </button>
  );
};

export default CreateHubCard;
