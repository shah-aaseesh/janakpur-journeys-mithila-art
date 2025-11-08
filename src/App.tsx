
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Lazy load service detail pages for better performance
const JanakpurDarshanDetail = lazy(() => import("./pages/JanakpurDarshanDetail"));
const CityToursDetail = lazy(() => import("./pages/CityToursDetail"));
const HeritageWalksDetail = lazy(() => import("./pages/HeritageWalksDetail"));
const MithilaCulturalToursDetail = lazy(() => import("./pages/MithilaCulturalToursDetail"));
const NatureTreksDetail = lazy(() => import("./pages/NatureTreksDetail"));
const CustomExperiencesDetail = lazy(() => import("./pages/CustomExperiencesDetail"));
const HireGuide = lazy(() => import("./pages/HireGuide"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services/janakpur-darshan" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <JanakpurDarshanDetail />
              </Suspense>
            } />
            <Route path="/services/city-tours" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <CityToursDetail />
              </Suspense>
            } />
            <Route path="/services/heritage-walks" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <HeritageWalksDetail />
              </Suspense>
            } />
            <Route path="/services/mithila-cultural-tours" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <MithilaCulturalToursDetail />
              </Suspense>
            } />
            <Route path="/services/nature-treks" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <NatureTreksDetail />
              </Suspense>
            } />
            <Route path="/services/custom-experiences" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <CustomExperiencesDetail />
              </Suspense>
            } />
            <Route path="/hire-guide" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <HireGuide />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
