import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OnboardingSteps from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import LenderDashboard from "./pages/LenderDashboard";
import CooperativeDashboard from "./pages/CooperativeDashboard";
import PortalSelection from "./pages/PortalSelection";
import LoanApplication from "./pages/LoanApplication";
import MakePayment from "./pages/MakePayment";
import UpdateFarmData from "./pages/UpdateFarmData";
import EditProfile from "./pages/EditProfile";
import BanksAgribusiness from "./pages/BanksAgribusiness";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<OnboardingSteps />} />
          <Route path="/portals" element={<PortalSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lender" element={<LenderDashboard />} />
          <Route path="/cooperative" element={<CooperativeDashboard />} />
          <Route path="/loan-application" element={<LoanApplication />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/update-farm-data" element={<UpdateFarmData />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/banks-agribusiness" element={<BanksAgribusiness />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
