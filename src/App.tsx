import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const BillAnalyze = lazy(() => import("./pages/BillAnalyze"));
const Decode = lazy(() => import("./pages/Decode"));
const Articles = lazy(() => import("./pages/Articles"));
const Article = lazy(() => import("./pages/Article"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Basics = lazy(() => import("./pages/categories/Basics"));
const BillingTips = lazy(() => import("./pages/categories/BillingTips"));
const CostSavings = lazy(() => import("./pages/categories/CostSavings"));
const Insurance = lazy(() => import("./pages/categories/Insurance"));
const PatientRights = lazy(() => import("./pages/categories/PatientRights"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bill-analyze" element={<BillAnalyze />} />
            <Route path="/upload" element={<Navigate to="/bill-analyze" replace />} />
            <Route path="/decode" element={<Decode />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories/basics" element={<Basics />} />
            <Route path="/categories/billing-tips" element={<BillingTips />} />
            <Route path="/categories/cost-savings" element={<CostSavings />} />
            <Route path="/categories/insurance" element={<Insurance />} />
            <Route path="/categories/patient-rights" element={<PatientRights />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;