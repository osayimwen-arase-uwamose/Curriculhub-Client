import { useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import Button from "../../ui/Button.jsx";

export default function HeroActions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <Button
        variant="primary"
        icon={ArrowRight}
        onClick={() => navigate("/register")}
      >
        Get Started
      </Button>

      <Button variant="secondary">
        View Demo
      </Button>
    </div>
  );
}