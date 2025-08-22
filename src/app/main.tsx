import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "@/pages/login/page.tsx";
import RegisterPage from "@/pages/register/page.tsx";
import DashboardPage from "@/pages/Dashboard/page.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dasboard" element={<DashboardPage />} />
      {/* Add other routes as needed */}
    </Routes>
    
   
  </BrowserRouter>
);
