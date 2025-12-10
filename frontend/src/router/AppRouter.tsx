import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { PromotionsPage } from "../pages/Promotions/PromotionsPage";
import { SimulatorPage } from "../pages/Simulator/SimulatorPage";
import { MetricsPage } from "../pages/Metrics/MetricsPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/simulator" element={<SimulatorPage />} />
          <Route path="/metrics" element={<MetricsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
