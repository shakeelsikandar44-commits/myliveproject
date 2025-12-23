# AdSense & Policy Readiness Checklist

This checklist summarizes the site items required by Google AdSense and steps to improve the chances of approval.

## Required items (verify before applying)
- [x] **Privacy Policy page** — present at `/privacy` and linked in the footer.
- [x] **Contact page** — present with a working contact form, email, and phone number (`/contact`).
- [x] **About / Team page** — present and provides site purpose and ownership (`/about`).
- [x] **Clear author byline & editorial/medical review language** on medical articles.
- [x] **Medical disclaimer** on clinical content: "This article is informational and not medical advice." included.
- [x] **Original, substantive content**: flagship article ≥1,800 words plus supporting posts.
- [x] **No disallowed content** (e.g., copyrighted content without permission, hate, sexual content).
- [x] **Site navigation & sitemap** — visible links to important pages (footer links present).
- [x] **ads.txt** (create if/when you have a publisher ID) — add to `public/ads.txt` before enabling AdSense.

## Recommended improvements
- Mobile-friendly and fast page load (compress images; use lazy loading where possible).
- Avoid placing too many ads above the fold; follow AdSense placement policies.
- Add `robots.txt` and `sitemap.xml` if you plan to get indexed quickly by Google.
- Add structured data (JSON-LD) for Article pages (done; author variants available).
- Add a visible editorial review statement (e.g., "Reviewed against peer-reviewed literature") for medical content.

## Pre-application checklist (final steps)
1. Proofread the flagship article and ensure all references link to authoritative sources (CDC, NIH, PubMed).
2. Add image assets and make sure they are optimized (SVGs added to `/public/images`).
3. Create `public/ads.txt` if you have an AdSense publisher ID:
   ```
   google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
   ```
   (Replace `pub-...` with your publisher ID.)
4. Ensure the site is live under a real domain (AdSense may require a real domain and ownership verification).
5. Check site performance (Lighthouse) and fix any major issues.
6. Apply for AdSense and submit the site; expect manual review. Be ready to respond to policy questions.

## Notes
- Approval is at Google's discretion. Following the checklist improves chances but does not guarantee approval.
- Maintain accurate author and contact information; Google may verify this during review.

---
*Prepared by Myliveproject Medical Editorial Team — Dec 23, 2025*