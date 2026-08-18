import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public application pages */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Authentication */}
      <Route element={<PublicRoute />}>
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Route>

      {/* Protected application */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            <div className="p-10">
              Dashboard placeholder
            </div>
          }
        />

        {/* Future protected routes */}
        {/* /courses */}
        {/* /profile */}
        {/* /notifications */}
      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
};

export default AppRoutes;
