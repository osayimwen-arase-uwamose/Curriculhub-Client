import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

import LandingPage from "../pages/LandingPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import CreateHubPage from "../pages/CreateHubPage.jsx";

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
          {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <DashboardPage />
          }
        />

        <Route 
          path="/dashboard/create-hub"
          element={<CreateHubPage />}
        />


          {/* HUB ROUTES */}
        {/* <Route 
          path="/hubs/:hubId"
          element={}
        /> */}

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
