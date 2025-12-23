import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";

const articles: Record<string, any> = {
  "1": {
    id: 1,
    title: "Understanding Your Medical Bill: A Complete Beginner's Guide",
    date: "Dec 15, 2024",
    readTime: "9 min read",
    author: {
      name: "Myliveproject Medical Editorial Team",
      bio: "U.S.-based medical writers; content reviewed against peer-reviewed literature and clinical guidelines.",
    },
    metaDescription: "A step-by-step guide to help you read and understand every section of your medical bill, identify common charges, and take action to correct errors.",
    html: `
      <p>Medical bills can feel like a foreign language: truncated codes, mysterious charges, and unfamiliar line items. This guide walks you through each part of a typical bill and gives you practical steps to verify charges and reduce your financial burden.</p>

      <h2>Start with the basics</h2>
      <p>Every bill should include personal information (name, account number), service dates, and a clear description of services provided. Look for an itemized statement—this breaks down what was billed by procedure and facility.</p>

      <h2>Common sections explained</h2>
      <p><strong>Procedure codes (CPT/HCPCS):</strong> These numerical codes identify services performed. They match what providers submit to insurers. You can look up CPT meanings online if a code is unclear.</p>
      <p><strong>Diagnosis codes (ICD-10):</strong> These indicate the reason for care and can affect coverage decisions.</p>
      <p><strong>Allowed amount & adjustments:</strong> Insurers often apply negotiated rates and adjustments—your responsibility should be the remaining balance after insurance payment.</p>

      <h2>Spotting errors</h2>
      <p>Common issues include duplicate charges, services you didn't receive, incorrect insurance application, or billing for a more complex procedure than was performed. Cross-check dates, codes, and provider names against your records.</p>

      <h2>What to do if you find a mistake</h2>
      <p>Contact the provider’s billing office first—ask for an itemized bill and an explanation of the charges. If unresolved, file an insurance appeal and consider seeking help from a patient advocate or your state's consumer protection office.</p>

      <h2>Keeping records</h2>
      <p>Save all bills, EOBs, and correspondence. Note dates you called, the person you spoke to, and important outcomes—documentation strengthens disputes.</p>

      <h2>When to get help</h2>
      <p>If the amount is large, repeated attempts fail, or you suspect fraud, consult a medical billing advocate or attorney. Many nonprofit groups offer assistance for those with low incomes.</p>

      <p>Understanding your bill empowers you to take control of healthcare costs—start by asking questions and requesting documentation.</p>
    `,
  },

  "2": {
    id: 2,
    title: "10 Common Medical Billing Errors and How to Spot Them",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    author: {
      name: "Myliveproject Medical Editorial Team",
    },
    metaDescription: "Learn the ten most frequent medical billing errors—duplicate charges, wrong provider, miscoding—and how to spot and fix them.",
    html: `
      <p>Billing errors happen more often than most patients realize. Catching mistakes early can save hundreds—even thousands—of dollars. Below are the top 10 errors and what to do about them.</p>

      <h2>1. Duplicate charges</h2>
      <p>Sometimes the same procedure is billed twice by mistake. Compare dates and codes; if duplicates appear, request correction.</p>

      <h2>2. Incorrect patient or insurance info</h2>
      <p>Mismatched insurance can lead to denied claims or unexpected bills. Verify your insurer and member ID on the bill.</p>

      <h2>3. Upcoding</h2>
      <p>A service may be billed at a higher code than performed. If the description doesn't match your care, ask for clarification and an itemized bill.</p>

      <h2>4. Services not provided</h2>
      <p>Billing for services you didn’t receive is a clear error—ask for an explanation and remove the charge if confirmed.</p>

      <h2>5. Unbundling charges</h2>
      <p>Some facilities bill separate fees for items that should be bundled at a single price. Compare to the contracted or expected rate.</p>

      <h2>6. Incorrect billing provider</h2>
      <p>Billing under a different provider or facility can change your financial responsibility. Match provider names to your experience.</p>

      <h2>7. Missing preauthorization</h2>
      <p>For certain treatments, prior authorization is required. If a claim is denied for lack of authorization, request an appeal or retroactive approval where appropriate.</p>

      <h2>8. Failures in applying insurance adjustments</h2>
      <p>Insurance negotiated adjustments reduce balances; ensure they are applied correctly on your bill.</p>

      <h2>9. Balance billing & surprise bills</h2>
      <p>If an out-of-network provider billed you unexpectedly, review recent care and consider disputing if regulations protect you (e.g., federal surprise billing laws).</p>

      <h2>10. Simple math errors</h2>
      <p>Yes—sometimes the addition is wrong. Double-check totals and subtotals.</p>

      <h2>Next steps</h2>
      <p>Keep calm, gather documents (EOBs, itemized bills), and contact the billing office first. If you need help, patient advocacy groups or state agencies can assist.</p>
    `,
  },

  "3": {
    id: 3,
    title: "Your Rights When Disputing a Medical Bill",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    author: { name: "Myliveproject Health Editorial Lead" },
    metaDescription: "Know your rights when challenging a medical bill, how to file disputes, and protections like surprise billing rules and state consumer laws.",
    html: `
      <p>You have rights when disputing medical bills. Understanding the process and legal protections can help you successfully resolve disputes and minimize financial harm.</p>

      <h2>Basic consumer protections</h2>
      <p>Many states offer dispute resolution for surprise bills or billing errors. Additionally, federal protections limit surprise billing in many situations—check whether your care falls under these rules.</p>

      <h2>Steps to dispute a bill</h2>
      <ol>
        <li>Request an itemized bill and EOB from your insurer.</li>
        <li>Review line items for discrepancies with your records.</li>
        <li>Contact the provider billing office and ask for corrections in writing.</li>
        <li>If unresolved, file a formal appeal with your insurer.</li>
      </ol>

      <h2>Documentation and timelines</h2>
      <p>Keep written records and note dates you called. Pay attention to appeal deadlines which can vary by insurer and state.</p>

      <h2>Getting help</h2>
      <p>If the dispute is complex or large, consult a patient advocate or legal aid. Many nonprofit organizations provide support for low-income patients.</p>
    `,
  },

  "4": {
    id: 4,
    title: "How to Negotiate Your Hospital Bill Down by 50% or More",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    author: { name: "Jordan Reynolds, Senior Health Writer" },
    metaDescription: "Proven negotiation strategies and scripts for lowering hospital bills, including timing, documentation, and common concessions hospitals offer.",
    html: `
      <p>Hospital bills can often be negotiated—sometimes dramatically. The key is preparation, persistence, and knowing the options hospitals commonly offer.</p>

      <h2>Before you call</h2>
      <p>Gather the itemized bill, EOB, and any relevant insurance communications. Identify charges you think are wrong or unusually high.</p>

      <h2>Negotiation strategies</h2>
      <p><strong>Ask for financial assistance:</strong> Many hospitals offer charity care or sliding scale discounts based on income.</p>
      <p><strong>Offer a lump-sum payment:</strong> Hospitals may accept reduced amounts for immediate payment.</p>
      <p><strong>Request an interest-free payment plan:</strong> If you can't pay upfront, negotiate a reasonable plan without penalties.</p>

      <h2>Scripts that work</h2>
      <p>Be polite but firm: "I reviewed this bill and I believe there are charges that need correction. Can you review the itemized bill and explain these line items?" Follow up with: "Given my financial situation, are there discounts or charity care options available?"</p>

      <h2>When to escalate</h2>
      <p>If the billing office cannot help, ask to speak to a supervisor, a hospital financial counselor, or a patient advocate within the hospital system.</p>
    `,
  },

  "5": {
    id: 5,
    title: "Understanding Your Explanation of Benefits (EOB)",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "An easy guide to reading your insurer's Explanation of Benefits, what each section means, and how to verify payments and patient responsibility.",
    html: `
      <p>An Explanation of Benefits (EOB) is a statement from your insurer—not a bill—that shows how your claim was processed. It explains the submitted charge, what the insurer paid, and what you may owe.</p>

      <h2>Key parts of an EOB</h2>
      <p><strong>Provider charge:</strong> The amount billed by the provider.</p>
      <p><strong>Allowed amount:</strong> The negotiated rate your insurer recognizes.</p>
      <p><strong>Insurance payment:</strong> What your insurer paid to the provider.</p>
      <p><strong>Patient responsibility:</strong> Copay, coinsurance, or deductible amounts you may owe.</p>

      <h2>Using your EOB</h2>
      <p>Compare the EOB to the provider’s bill. If they don’t match, request clarification. EOBs are important evidence when disputing charges.</p>
    `,
  },

  "6": {
    id: 6,
    title: "CPT Codes Explained: What You Need to Know",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    author: { name: "Myliveproject Health Editorial Lead" },
    metaDescription: "A practical explanation of CPT codes, how they determine billing, and how to check them for accuracy.",
    html: `
      <p>CPT (Current Procedural Terminology) codes describe medical services and procedures. They are central to billing because they determine how providers are reimbursed.</p>

      <h2>How CPT codes affect your bill</h2>
      <p>Different CPT codes have different values and can change the total charge. Ensure the codes on your bill match the care you received.</p>

      <h2>Where to look them up</h2>
      <p>You can search CPT codes online or ask your provider for the code definitions. If a code seems inconsistent with your visit, ask for clarification.</p>
    `,
  },

  "7": {
    id: 7,
    title: "How to Request an Itemized Medical Bill",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "Step-by-step instructions for requesting an itemized bill, including templates and timelines to expect from providers.",
    html: `
      <p>Itemized bills give you the breakdown of every charge. They are essential when checking for errors and preparing disputes.</p>

      <h2>How to request one</h2>
      <p>Call the provider’s billing office and ask for an itemized bill. Request that they send it via email or postal mail and keep a record of your request.</p>

      <h2>What to check</h2>
      <p>Verify dates of service, procedure codes, and unit counts. Note any charges that seem unfamiliar and ask for clarifying documentation.</p>
    `,
  },

  "8": {
    id: 8,
    title: "Balance Billing: What It Is and How to Protect Yourself",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "Understand balance billing, federal protections against surprise bills, and steps to dispute out-of-network charges.",
    html: `
      <p>Balance billing occurs when a provider bills you for the difference between their charge and what the insurer paid. Surprise billing, especially after emergency or out-of-network care, has received regulatory attention and protections.</p>

      <h2>Your rights</h2>
      <p>Federal and state laws may protect you from surprise billing depending on the scenario. Review your situation and consult consumer protection resources if you receive a surprise bill.</p>

      <h2>Disputing balance bills</h2>
      <p>Ask for detailed explanation, file appeals with your insurer, and request mediation through state programs where available.</p>
    `,
  },

  "9": {
    id: 9,
    title: "Financial Assistance Programs: A Complete Guide",
    date: "Nov 25, 2024",
    readTime: "9 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "Discover hospital charity care, payment plans, and other options for managing medical debt and accessing financial assistance.",
    html: `
      <p>Many hospitals and health systems offer financial assistance programs for patients who cannot afford their bills. Understanding eligibility and how to apply can significantly reduce patient liability.</p>

      <h2>Types of assistance</h2>
      <p>Charity care, sliding fee scales, hardship discounts, and extended payment plans are common offerings. Nonprofit hospitals must disclose charity care policies and how to apply.</p>

      <h2>How to apply</h2>
      <p>Contact the hospital's financial counseling office, request an application, and provide income documentation. Keep copies of submissions and follow up persistently.</p>
    `,
  },

  "10": {
    id: 10,
    title: "How to Read Your Lab & Health Test Results — A Doctor’s Plain‑English Guide",
    date: "Dec 23, 2025",
    readTime: "12 min read",
    author: {
      name: "Myliveproject Medical Editorial Team",
      bio: "U.S.-based medical writers; content reviewed against peer-reviewed literature and clinical guidelines.",
    },
    metaDescription:
      "Learn how to read common lab tests (CBC, CMP, lipids, A1C), what normal ranges mean, when to call a doctor, and practical next steps—doctor‑reviewed.",
    html: `
      <h2>Why understanding lab results matters</h2>
      <p>Lab tests provide objective data that help clinicians diagnose and monitor conditions. Patients who learn to read their results can better participate in care and make informed decisions.</p>

      <h2>What a lab report usually shows</h2>
      <p>Look for patient info, collection time, test name, result, units, and the lab’s reference range. Flags such as H (high) or L (low) highlight values outside the lab’s normal range.</p>

      <h2>Common tests explained</h2>
      <p><strong>CBC:</strong> Hemoglobin, hematocrit, WBC, platelets—useful for detecting anemia, infection, or clotting problems.</p>
      <p><strong>CMP:</strong> Glucose, electrolytes, kidney and liver function tests to assess metabolic and organ health.</p>
      <p><strong>Lipid panel:</strong> Total cholesterol, LDL, HDL, triglycerides—used to evaluate cardiovascular risk.</p>

      <h2>Interpreting results</h2>
      <ol>
        <li>Use the lab’s reference range (methods vary by lab).</li>
        <li>Look for trends—multiple tests over time matter more than single measurements.</li>
        <li>Consider context—fasting status, medications, or acute illness.</li>
      </ol>

      <h2>When to contact a clinician</h2>
      <p>Seek immediate care for severe symptoms. For marked abnormalities, contact your clinician promptly; for mild abnormalities, schedule follow-up to confirm and manage.</p>

      <h2>Practical next steps</h2>
      <p>Save and organize your reports, track changes, ask for clarification, and take lifestyle steps when appropriate (diet, exercise, medication adherence).</p>
    `,
  },

  "11": {
    id: 11,
    title: "Common Lab Tests Explained: CBC, CMP, Lipids, A1C",
    date: "Dec 23, 2025",
    readTime: "9 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "A comprehensive reference explaining the most commonly ordered lab tests, what each measures, and when to seek follow-up.",
    html: `
      <p>This reference explains common lab tests you’re likely to encounter and what they typically mean. Use it to interpret results and prepare informed questions for your clinician.</p>

      <h2>Complete Blood Count (CBC)</h2>
      <p>The CBC measures components of blood: hemoglobin (oxygen-carrying protein), hematocrit (percentage of red cells), white blood cells (immunity), and platelets (clotting). Abnormalities suggest anemia, infection, or bleeding disorders and often require follow-up tests to determine cause.</p>

      <h2>Comprehensive Metabolic Panel (CMP)</h2>
      <p>The CMP includes glucose, electrolytes, and kidney and liver function tests. Changes can indicate metabolic problems, dehydration, kidney disease, or liver injury; repeat measurements and correlation with symptoms are commonly required.</p>

      <h2>Lipid Panel</h2>
      <p>Cholesterol and triglyceride levels are used to assess cardiovascular risk. Management often includes lifestyle changes and, when indicated, medications like statins.</p>

      <h2>Hemoglobin A1C</h2>
      <p>A1C reflects average blood glucose over several months; it’s used for diabetes screening and monitoring. Results are categorized into normal, prediabetes, and diabetes ranges.</p>

      <h2>When to talk to your doctor</h2>
      <p>If tests are out of range and persistent, ask your clinician whether additional testing, lifestyle changes, or treatment is needed.</p>
    `,
  },

  "12": {
    id: 12,
    title: "7 Practical Steps to Use Your Lab Results to Improve Health",
    date: "Dec 23, 2025",
    readTime: "8 min read",
    author: { name: "Myliveproject Medical Editorial Team" },
    metaDescription: "Actionable steps to take after getting lab results so you can use them to guide healthier choices and better medical care.",
    html: `
      <p>Lab results are most useful when they lead to clear actions. These seven steps help you turn data into better health decisions.</p>

      <h2>1. Save and organize your reports</h2>
      <p>Keep digital copies with dates and test types so you can track trends and share them with clinicians.</p>

      <h2>2. Track changes over time</h2>
      <p>Single values can be misleading; compare tests taken over months to look for meaningful trends.</p>

      <h2>3. Confirm testing conditions</h2>
      <p>Note whether tests required fasting or medication adjustments—these factors affect results.</p>

      <h2>4. Ask targeted questions</h2>
      <p>Ask your clinician: "What caused this result? Should we repeat the test?" and request a clear follow-up plan.</p>

      <h2>5. Prioritize lifestyle steps</h2>
      <p>Where appropriate, dietary changes, physical activity, and sleep improvements can improve many lab values.</p>

      <h2>6. Adhere to medications as prescribed</h2>
      <p>Medication adherence is essential—missing doses can change lab markers and lead to unnecessary changes in therapy.</p>

      <h2>7. Use specialist referrals when necessary</h2>
      <p>If results suggest organ-specific issues, ask for referral to a specialist (e.g., endocrinologist, hepatologist).</p>

      <p>With a clear plan, lab results can be a powerful tool for prevention and treatment—use them to guide informed, measurable health goals.</p>
    `,
  }
};

const Article = () => {
  const { id } = useParams();
  const article = id ? articles[id] : undefined;

  // Allow choosing author variant via query param: ?author=A|B|C
  const search = new URLSearchParams(window.location.search);
  const authorVariant = (search.get("author") || "A").toUpperCase();

  const authorVariants: Record<string, any> = {
    A: {
      "@type": "Organization",
      name: "Myliveproject Medical Editorial Team",
      sameAs: "https://example.com/about",
    },
    B: {
      "@type": "Person",
      name: "Myliveproject Health Editorial Lead",
      sameAs: "https://example.com/about",
    },
    C: {
      "@type": "Person",
      name: "Jordan Reynolds, Senior Health Writer",
      sameAs: "https://example.com/author/jordan-reynolds",
    },
  };

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Myliveproject`;

      // Set meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", article.metaDescription);

      // Inject JSON-LD for Article schema (basic)
      const ld = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.date,
        author: authorVariants[authorVariant] || authorVariants.A,
        publisher: {
          "@type": "Organization",
          name: "Myliveproject",
        },
      };

      let script = document.getElementById("article-jsonld") as HTMLScriptElement | null;
      if (!script) {
        const s = document.createElement("script");
        s.id = "article-jsonld";
        s.type = "application/ld+json";
        document.head.appendChild(s);
        script = s;
      }
      script.textContent = JSON.stringify(ld);
    }

    // Cleanup on unmount: optional — leave meta and title as-is
  }, [article, authorVariant]);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find the requested article.</p>
          <Link to="/articles" className="text-primary font-medium">Back to articles</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16 max-w-3xl prose prose-lg">
        <div className="mb-6 text-sm text-muted-foreground">{article.date} • {article.readTime}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{article.title}</h1>
        <div className="mb-8 text-sm text-muted-foreground">
          <strong>{article.author?.name ?? 'Myliveproject Medical Editorial Team'}</strong>
          {article.author?.bio ? ` — ${article.author.bio}` : null}
        </div>

        {/* Render article HTML content */}
        <div dangerouslySetInnerHTML={{ __html: article.html }} />

        {/* Special visuals for lab article */}
        {article.id === 10 && (
          <div className="my-6">
            <img src={`${import.meta.env.BASE_URL}images/normal-ranges.svg`} alt="Common lab test normal ranges" className="w-full rounded-lg shadow-sm" width={1000} height={420} loading="lazy" />
            <p className="text-xs text-muted-foreground mt-2">Figure: Common lab test reference ranges — use your lab’s reported ranges as authoritative.</p>
            <div className="mt-2">
              <a href={`${import.meta.env.BASE_URL}checklist.html`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-muted/10 hover:bg-muted/20">Open printable checklist</a>
            </div>
          </div>
        )}

        <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
          <p className="mb-2">Sources include CDC, NIH, PubMed, LabTestsOnline and selected works by Dr. Atul Gawande, Dr. Siddhartha Mukherjee, Dr. Eric Topol, Dr. Sanjay Gupta, Dr. Abraham Verghese, Dr. Paul Offit, Dr. Jerome Groopman, Dr. Peter Attia, Dr. Danielle Ofri, and Dr. Lisa Sanders.</p>
          <p className="mb-2">Medical disclaimer: This article is informational and not medical advice. If you are experiencing an emergency, call 911.</p>
        </div>
      </article>
    </Layout>
  );
};

export default Article;
