// Runs after `vite build` (client) and `vite build --ssr` (server entry).
// For every known route, renders the app to an HTML string and writes it
// as a static index.html under dist/<route>/, with the correct <title>,
// meta description, and canonical link swapped in. This is what lets
// crawlers (and anything that doesn't execute JS) see real page content
// and correct metadata immediately, instead of an empty <div id="root">.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const SSR_ENTRY = path.resolve("dist-ssr/entry-server.js");

const STATIC_ROUTES = [
  { path: "/", title: "Medical Bill Help — Free AI Bill Checker & CPT/ICD-10 Code Decoder", description: "Check your medical bill for errors free with AI. Upload any bill or EOB, decode CPT and ICD-10 codes instantly, and find overcharges — no signup required." },
  { path: "/bill-analyze", title: "Free Medical Bill Checker — Upload & Find Billing Errors with AI", description: "Upload your medical bill (PDF or photo) and let AI check every charge for errors, duplicates, and overcharges in seconds. Free, no signup, no account needed." },
  { path: "/decode", title: "Medical Code Decoder | CPT, ICD-10 & HCPCS Lookup", description: "Instantly decode CPT, ICD-10, and HCPCS codes from your medical bill to understand exactly what procedures and charges mean." },
  { path: "/articles", title: "Medical Billing Articles & Guides | Medical Bill Help", description: "Read guides on medical billing practices, patient rights, insurance claims, and how to spot and dispute incorrect charges on your medical bill." },
  { path: "/about", title: "About Us | Medical Bill Help", description: "Learn how Medical Bill Help uses AI to help patients understand their medical bills, spot billing errors, and advocate for fair healthcare pricing." },
  { path: "/contact", title: "Contact Us | Medical Bill Help", description: "Have a question about a medical bill or need help getting started? Reach out to the Medical Bill Help team here." },
  { path: "/privacy", title: "Privacy Policy | Medical Bill Help", description: "Read our privacy policy to understand how Medical Bill Help collects, uses, and protects your personal and medical billing information." },
  { path: "/terms", title: "Terms of Service | Medical Bill Help", description: "Review the terms of service for using Medical Bill Help's AI-powered medical bill analysis and code decoding tools." },
  { path: "/categories/basics", title: "Medical Billing Basics: How to Read Your Bill & Reports | Medical Bill Help", description: "Learn the foundations of medical billing: how to read a bill and EOB, what CPT/ICD-10 codes mean, and practical steps to spot errors and lower your costs." },
  { path: "/categories/billing-tips", title: "Medical Billing Tips: Save Money & Avoid Common Pitfalls | Medical Bill Help", description: "Practical medical billing tips to help you avoid common pitfalls, catch overcharges, and save money on your healthcare bills." },
  { path: "/categories/cost-savings", title: "Cost Savings: Smart Ways to Lower Your Medical Expenses | Medical Bill Help", description: "Discover smart, actionable ways to lower your medical expenses, negotiate bills, and find financial assistance programs." },
  { path: "/categories/insurance", title: "Health Insurance Guide: Choose, Use & Maximize Your Coverage | Medical Bill Help", description: "A plain-English guide to choosing health insurance, understanding your coverage, and maximizing your benefits to lower out-of-pocket costs." },
  { path: "/categories/patient-rights", title: "Patient Rights: Know Your Choices & Protections | Medical Bill Help", description: "Know your rights as a patient when disputing a medical bill, requesting an itemized statement, and protecting yourself from balance billing." },
];

async function main() {
  if (!existsSync(SSR_ENTRY)) {
    console.error(`[prerender] SSR bundle not found at ${SSR_ENTRY}. Did the SSR build step run?`);
    process.exit(1);
  }

  const { render, articles } = await import(SSR_ENTRY);

  const template = readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

  const routes = [...STATIC_ROUTES];
  for (const [id, article] of Object.entries(articles)) {
    routes.push({
      path: `/articles/${id}`,
      title: `${article.title} | Medical Bill Help`,
      description: article.metaDescription,
    });
  }

  let count = 0;
  for (const route of routes) {
    let html;
    try {
      html = render(route.path);
    } catch (err) {
      console.error(`[prerender] Failed to render ${route.path}:`, err);
      continue;
    }

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Swap in the route-specific <title>
    page = page.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`);

    // Swap in the route-specific meta description (and matching OG/Twitter tags)
    page = replaceMetaContent(page, "name", "description", route.description);
    page = replaceMetaContent(page, "property", "og:title", route.title);
    page = replaceMetaContent(page, "property", "og:description", route.description);
    page = replaceMetaContent(page, "name", "twitter:title", route.title);
    page = replaceMetaContent(page, "name", "twitter:description", route.description);

    const canonicalUrl = `https://medicalbillhelps.com${route.path === "/" ? "/" : route.path}`;
    if (page.includes('rel="canonical"')) {
      page = page.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    } else {
      page = page.replace("</head>", `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
    }

    const outDir = route.path === "/" ? DIST_DIR : path.join(DIST_DIR, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, "index.html"), page);
    count++;
  }

  console.log(`[prerender] Wrote ${count} static HTML page(s).`);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function replaceMetaContent(html, attr, key, value) {
  const escaped = escapeHtml(value).replace(/"/g, "&quot;");
  const regex = new RegExp(`(<meta ${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" content=")[^"]*(")`);
  if (regex.test(html)) {
    return html.replace(regex, `$1${escaped}$2`);
  }
  return html.replace("</head>", `  <meta ${attr}="${key}" content="${escaped}" />\n  </head>`);
}

main();
