
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Books from "./pages/Books";
import About from "./pages/About";
import Diseases from "./pages/Diseases";
import DiseaseCategory from "./pages/diseases/DiseaseCategory";
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
          <Route path="/articles" element={<Articles />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/diseases/:category" element={<DiseaseCategory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
