import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

// Direct (non-lazy) imports — required for synchronous renderToString.
import Index from "./pages/Index";
import BillAnalyze from "./pages/BillAnalyze";
import Decode from "./pages/Decode";
import Articles from "./pages/Articles";
import Article, { articles } from "./pages/Article";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Basics from "./pages/categories/Basics";
import BillingTips from "./pages/categories/BillingTips";
import CostSavings from "./pages/categories/CostSavings";
import Insurance from "./pages/categories/Insurance";
import PatientRights from "./pages/categories/PatientRights";

export { articles };

export function render(url: string): string {
  // A fresh QueryClient per render call keeps prerender passes isolated
  // from each other (no shared/stale cache between routes).
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
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
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
