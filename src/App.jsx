import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "sonner";

import { AuthProvider } from "./contexts/AuthContext.jsx";

import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster
          position="top-right"
          richColors
        />
        
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};
