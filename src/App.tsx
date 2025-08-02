
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CityToursDetail from "./pages/CityToursDetail";
import HeritageWalksDetail from "./pages/HeritageWalksDetail";
import MithilaCulturalToursDetail from "./pages/MithilaCulturalToursDetail";
import NatureTreksDetail from "./pages/NatureTreksDetail";
import CustomExperiencesDetail from "./pages/CustomExperiencesDetail";
import JanakpurDarshanDetail from "./pages/JanakpurDarshanDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/janakpur-darshan" element={<JanakpurDarshanDetail />} />
          <Route path="/services/city-tours" element={<CityToursDetail />} />
          <Route path="/services/heritage-walks" element={<HeritageWalksDetail />} />
          <Route path="/services/mithila-cultural-tours" element={<MithilaCulturalToursDetail />} />
          <Route path="/services/nature-treks" element={<NatureTreksDetail />} />
          <Route path="/services/custom-experiences" element={<CustomExperiencesDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
