import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/about" — omit for homepage
  ogType?: string; // defaults to "website"
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const JSON_LD_ID = "page-json-ld";

/**
 * Sets the document title, meta description, canonical URL, Open Graph /
 * Twitter tags, and (optionally) page-specific JSON-LD structured data.
 * Runs on mount and whenever the passed-in values change.
 */
export function useSEO({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  jsonLd,
}: SEOOptions) {
  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", `https://medicalbillhelps.com${canonicalPath}`);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://medicalbillhelps.com${canonicalPath}`);

    const existingScript = document.getElementById(JSON_LD_ID);
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(JSON_LD_ID)?.remove();
    };
  }, [title, description, canonicalPath, ogType, jsonLd]);
}
