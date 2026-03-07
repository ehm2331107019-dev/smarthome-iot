import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import DevicesPage from "./pages/Devices/DevicesPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import WelcomePage from "./pages/Welcome/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<WelcomePage />} />

        <Route path="/" element={<MainLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="settings" element={<SettingsPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;