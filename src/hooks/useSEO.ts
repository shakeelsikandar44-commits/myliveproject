import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/about" — omit for homepage
}

/**
 * Sets the document title, meta description, and canonical URL for a page.
 * Runs on mount and whenever the title/description change.
 */
export function useSEO({ title, description, canonicalPath = "" }: SEOOptions) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://medicalbillhelps.com${canonicalPath}`);
  }, [title, description, canonicalPath]);
}
