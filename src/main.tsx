import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

// Prerendered pages already have real markup inside #root — hydrate onto it.
// Pages that somehow have no prerendered markup (shouldn't happen once every
// route is prerendered, but safe as a fallback) fall back to a plain render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}