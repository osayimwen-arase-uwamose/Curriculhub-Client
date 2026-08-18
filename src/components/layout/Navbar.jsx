import { useNavigate } from "react-router-dom";

import { Bell, Settings } from "lucide-react";

import Logo from "./Logo.jsx";
import Button from "../ui/Button.jsx";
import IconButton from "../ui/IconButton.jsx";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        w-full
        px-gutter
        py-2
        border-b
        border-grid-line
        bg-background
        shadow-neo
      "
    >
      {/* Left Side */}

      <div className="flex items-center gap-8">

        <Logo />

        {/* Future Navigation */}

        <nav className="hidden lg:flex items-center gap-6">

          {/*

          Later:

          <NavLink to="/">Home</NavLink>

          <NavLink to="/pricing">Pricing</NavLink>

          */}

        </nav>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        <IconButton icon={Bell} />

        <IconButton icon={Settings} />

        <Button
          variant="login"
          size="sm"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>

      </div>

    </header>
  );
}