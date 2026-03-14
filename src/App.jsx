import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import DevicesPage from "./pages/Devices/DevicesPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import WelcomePage from "./pages/Welcome/WelcomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página de bienvenida */}
        <Route path="/" element={<WelcomePage />} />

        {/* Layout con Sidebar y Navbar */}
        <Route path="/" element={<MainLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;