import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import HoverPreview from "@/components/HoverPreview";

const categories = [
  { id: "all", label: "All Articles" },
  { id: "basics", label: "Basics" },
  { id: "billing", label: "Billing Tips" },
  { id: "insurance", label: "Insurance" },
  { id: "rights", label: "Patient Rights" },
  { id: "savings", label: "Cost Savings" },
];

const articles = [
  {
    id: 10,
    title: "How to Read Your Lab & Health Test Results — A Doctor’s Plain‑English Guide",
    excerpt: "A doctor‑reviewed guide that explains common lab tests (CBC, CMP, lipids, A1C), how to interpret reference ranges, and practical next steps.",
    category: "basics",
    readTime: "12 min read",
    date: "Dec 23, 2025",
    featured: true,
  },
  {
    id: 11,
    title: "Common Lab Tests Explained: CBC, CMP, Lipids, A1C",
    excerpt: "A quick reference for the most commonly ordered lab tests and what their values usually mean.",
    category: "basics",
    readTime: "8 min read",
    date: "Dec 23, 2025",
    featured: false,
  },
  {
    id: 12,
    title: "7 Practical Steps to Use Your Lab Results to Improve Health",
    excerpt: "Actionable steps you can take after getting your lab results to improve outcomes and track progress.",
    category: "savings",
    readTime: "7 min read",
    date: "Dec 23, 2025",
    featured: false,
  },
  {
    id: 1,
    title: "Understanding Your Medical Bill: A Complete Beginner's Guide",
    excerpt: "Learn how to read and understand every section of your medical bill, from procedure codes to insurance adjustments.",
    category: "basics",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "10 Common Medical Billing Errors and How to Spot Them",
    excerpt: "Discover the most frequent billing mistakes that can cost you hundreds or thousands of dollars.",
    category: "billing",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    featured: true,
  },
  {
    id: 3,
    title: "Your Rights When Disputing a Medical Bill",
    excerpt: "Know your legal rights when challenging incorrect or unfair medical charges.",
    category: "rights",
    readTime: "5 min read",
    date: "Dec 10, 2024",
    featured: false,
  },
  {
    id: 4,
    title: "How to Negotiate Your Hospital Bill Down by 50% or More",
    excerpt: "Proven strategies and scripts for successfully negotiating lower medical bills.",
    category: "savings",
    readTime: "10 min read",
    date: "Dec 8, 2024",
    featured: true,
  },
  {
    id: 5,
    title: "Understanding Your Explanation of Benefits (EOB)",
    excerpt: "Learn what every section of your EOB means and how to use it to verify your bills.",
    category: "insurance",
    readTime: "7 min read",
    date: "Dec 5, 2024",
    featured: false,
  },
  {
    id: 6,
    title: "CPT Codes Explained: What You Need to Know",
    excerpt: "A comprehensive guide to understanding CPT codes on your medical bills.",
    category: "basics",
    readTime: "6 min read",
    date: "Dec 3, 2024",
    featured: false,
  },
  {
    id: 7,
    title: "How to Request an Itemized Medical Bill",
    excerpt: "Step-by-step instructions for getting a detailed breakdown of your charges.",
    category: "billing",
    readTime: "4 min read",
    date: "Dec 1, 2024",
    featured: false,
  },
  {
    id: 8,
    title: "Balance Billing: What It Is and How to Protect Yourself",
    excerpt: "Understanding surprise billing and the laws that protect you from unfair charges.",
    category: "rights",
    readTime: "8 min read",
    date: "Nov 28, 2024",
    featured: false,
  },
  {
    id: 9,
    title: "Financial Assistance Programs: A Complete Guide",
    excerpt: "Discover hospital charity care, payment plans, and other options for managing medical debt.",
    category: "savings",
    readTime: "9 min read",
    date: "Nov 25, 2024",
    featured: false,
  },
];

const previews: Record<number, string> = {
  10: `
    <h4>How to Read Your Lab & Health Test Results — Preview</h4>
    <p>Lab tests are powerful tools—but they are most useful when you read them with context and a clear next-step plan. This preview summarizes how to interpret common panels (CBC, CMP, lipid profiles, A1C), how to evaluate reference ranges and trends, and what practical questions to ask your clinician so results lead to useful outcomes.</p>
    <p><strong>1) Understand what you’re looking at.</strong> Each test line shows a value and a reference range (low–high). Different labs use slightly different ranges, so compare values against the range shown on your report—not a generic online table. Note whether the result is flagged (often with an H or L). A single flagged value may be transient; repeated or progressive changes typically warrant more attention.</p>
    <p><strong>2) Look for trends, not single measurements.</strong> One mildly abnormal value often means nothing by itself. A rise in creatinine over several tests, an increasing A1C trend, or progressively lower hemoglobin are patterns that suggest an underlying change that should be investigated. If your portal allows, view historical values in chart form to visualize these trends before your medical visit.</p>
    <p><strong>3) Common panels and what to watch for.</strong> The CBC (Complete Blood Count) looks at red and white blood cells and platelets—watch for steady changes in hemoglobin or platelet counts. The CMP (Comprehensive Metabolic Panel) tells you about electrolytes, kidney function (creatinine, eGFR), and liver enzymes (ALT/AST); abnormal electrolytes can reflect dehydration or medication effects. Lipid panels (LDL, HDL, triglycerides) are assessed in the context of cardiovascular risk; providers treat risk, not a single number. A1C summarizes average blood glucose over months and is used in diabetes management—small changes over time are often more meaningful than an isolated reading.</p>
    <p><strong>4) Consider medications and timing.</strong> Many medications affect lab values (statins, diuretics, anticoagulants, steroids). Fasting status, recent illness, and sample timing can also change results. When asking a clinician, be sure to tell them about recent medications or a recent illness so they can interpret the numbers appropriately.</p>
    <p><strong>5) Practical next steps and questions to ask your clinician.</strong> If a value is abnormal, ask whether it should be repeated and when, whether additional tests are needed, and whether lifestyle changes or medication adjustments are worth considering. Example questions: “Is this abnormality clinically significant for me?” “Should we repeat this test, and when?” “Could this result be caused by a medication or temporary condition?” Write answers down or request a brief patient-facing note for your records.</p>
    <p><strong>6) Use trends for measurable goals.</strong> If the clinician recommends lifestyle change (diet, exercise, smoking cessation), ask for concrete targets and a plan for follow-up testing. Tracking progress with the same lab method and same lab facility reduces variability and makes trends more reliable.</p>
    <p><strong>7) When to seek urgent care.</strong> Most abnormal lab values are not emergencies, but certain changes—very low platelets, critical electrolytes, severely elevated liver enzymes, or markedly abnormal kidney function—warrant urgent evaluation. If a clinician flags an abnormality as urgent, follow their instructions immediately.</p>
    <p>In summary: focus on reference ranges from your lab, look for trends rather than reacting to one number, account for medications and timing, and ask clear, actionable follow-up questions. These steps turn test results into useful, manageable information that guides safer, more effective care.</p>
    <h5>Quick patient checklist</h5>
    <ul>
      <li>Save lab reports in one folder and track dates.</li>
      <li>Ask the clinic to chart values and provide trend visuals if available.</li>
      <li>Note any medications or diet changes before testing.</li>
      <li>Request a repeat test when results are unexpected or borderline.</li>
      <li>Bring results to your next clinician visit and ask for written next steps.</li>
    </ul>
    <p>If you want a second opinion on what the tests mean for your overall care plan, ask your clinician to summarize the results in writing or provide a referral. Many patients find that a short written summary or a copy of the clinician’s note makes appeals, insurance discussions, and follow-up visits much easier and helps other clinicians reviewing your case quickly understand the context.</p>
    <p><strong>Leveraging patient portals and data exports</strong>: Many patient portals let you view historical lab results and export them as PDF or CSV. Exporting your results makes it simple to share trends with a specialist, attach evidence for an insurance appeal, or track progress over time. When exporting, include the lab name and units to avoid confusion from varying reference ranges.</p>
    <p><strong>Practical examples:</strong> If your A1C moves from 6.2 to 6.8 over six months, chart it and ask whether medication adjustments or lifestyle interventions should be considered now rather than waiting for more dramatic change. If your creatinine rises slightly but the eGFR remains stable, your provider may recommend hydration and repeat labs in a few weeks—document that plan so you have a clear timeline for re-evaluation.</p>
    <p><strong>Sample follow-up email to your clinician:</strong> "Thank you for reviewing my labs. I noticed a change in [test] over the last X months. Could we schedule a brief follow-up to discuss whether a repeat test or additional evaluation is needed, and could you include a short note for my records?" This helps clinicians respond quickly and creates written documentation for future use.</p>
    <p><strong>Final takeaway:</strong> Treat lab results as part of a continuous conversation—track trends, ask practical questions, and get brief written next steps so results move from data into a plan you can follow.</p>
  `,
  1: `
    <h4>Understanding Your Medical Bill — Preview</h4>
    <p>Medical billing statements contain many moving parts: itemized charges (CPT codes), insurer adjustments, prior payments, and the final patient responsibility. This preview walks through a practical audit you can perform in about 20 minutes, how to document discrepancies effectively, and how to escalate to appeals or negotiation when necessary.</p>
    <p><strong>Step 1: Gather documents.</strong> Collect the provider’s statement, each insurer Explanation of Benefits (EOB), and any relevant appointment notes, lab results, or pre-authorization numbers. Put everything in one folder and label each file with a clear name and the claim or account number.</p>
    <p><strong>Step 2: Line-by-line comparison.</strong> Request an itemized bill if you only have a summary. For each line item, note the CPT code, the date, the amount billed, and whether the EOB shows it as paid, adjusted, or denied. Detect duplicates, odd quantities, or charges for services you did not receive. If a service is listed under a clinician you don’t recognize (e.g., an anesthesiologist, radiologist, or lab vendor), confirm whether those charges are expected—some ancillary providers bill separately and may surprise patients.</p>
    <p><strong>Step 3: Make a clear dispute list.</strong> Create a concise list such as: "Line 3: CPT 99213 billed twice on 6/14—please confirm and remove duplicate charge" or "Line 7: Inpatient facility fee listed for an outpatient procedure—please clarify billing code and expected facility fees." This clarity makes it easier for billing staff to respond and correct mistakes.</p>
    <p><strong>Step 4: Contact billing with a script and document everything.</strong> Use a short script: "I reviewed my itemized bill (account #XXXXX). I need an explanation for line X (CPT/amount), and I'd like this corrected if it’s an error. Can you confirm when this will be fixed and provide a reference number?" Record the date, time, and the representative’s name. If the office agrees to a correction, request written confirmation by email.</p>
    <p><strong>Step 5: Appeal insurer denials with supporting clinical documentation.</strong> If the insurer denies coverage, file an appeal and include clinical notes, test results, and a concise explanation of medical necessity. Track appeal deadlines carefully—most insurers have strict timeframes for filing appeals. If internal appeals are denied, research whether an external independent review is available through your state; this process often succeeds when medical necessity is well-documented.</p>
    <p><strong>Step 6: Negotiate and explore assistance.</strong> If the balance remains, negotiate a discount or an interest-free payment plan. Ask about charity care or hardship programs, especially for hospital charges. Many providers will consider a reasonable lump-sum settlement—if you can pay immediately, offer a calculated amount and get the agreement in writing.</p>
    <h5>Sample templates</h5>
    <p><em>Dispute email:</em> "I’m writing regarding account #XXXX. Please review line item [x] (CPT/description) which I believe was billed in error. Attached are my records and the EOB showing this claim was adjusted differently. Please confirm receipt and the expected resolution timeline."</p>
    <p><em>Negotiation script:</em> "I’m asking whether there is a prompt-pay discount or charity discount for this balance; I can pay $X today to settle this account if a discount is available."</p>
    <p>Follow-up and written documentation dramatically increase the likelihood of corrections and reduce the time spent re-raising the same issues. If the matter escalates, state consumer protection offices and nonprofit billing advocates can intervene on your behalf and help mediate complex disputes.</p>
    <h5>Appeal checklist</h5>
    <ul>
      <li>Copy of the itemized bill (PDF)</li>
      <li>Insurer EOB with claim adjudication details</li>
      <li>Relevant clinical notes, lab results, and imaging reports</li>
      <li>Letter from your treating clinician explaining medical necessity (if applicable)</li>
      <li>Clear statement summarizing the reason for the appeal and the requested outcome</li>
    </ul>
    <p>Use this checklist when filing an appeal to present a complete case. If internal appeals are unsuccessful, search for external review options through your state or insurer; external reviewers often reverse denials when medical necessity is well documented.</p>
    <p><strong>Other escalation tips:</strong> If you detect systemic errors across multiple claims (e.g., a recurring misapplied CPT or facility fee), document several representative examples and include them when filing a complaint with the insurer and the state insurance regulator. Systemic errors often prompt audits and broader corrections, which can fix multiple accounts at once.</p>
  `,
  2: `
    <h4>10 Common Medical Billing Errors — Preview</h4>
    <p>Many billing errors are simple clerical mistakes, while others stem from coding or contracting issues that are harder to spot. This preview lists ten common errors, with examples, how to detect them quickly, and the steps to correct them.</p>
    <ol>
      <li><strong>Duplicate charges:</strong> Two identical CPT codes billed for the same date. Detect: identical code + date + amount. Fix: request removal of the duplicate and a corrected statement.</li>
      <li><strong>Wrong patient identifiers:</strong> Charges assigned to another person with a similar name or matching DOB. Detect: verify account name, DOB, and last four of SSN. Fix: ask billing to correct identifiers and reissue an accurate statement.</li>
      <li><strong>Unbundled services:</strong> Multiple line items billed separately for a service that should be bundled, increasing total cost. Detect: common with labs and procedures. Fix: ask provider to apply correct bundled code and re-bill.</li>
      <li><strong>Incorrect CPT codes:</strong> A wrong procedure code can change coverage or increase patient liability. Detect: compare CPT codes on the bill to the clinic's procedure notes. Fix: request correction and reprocessing with correct codes.</li>
      <li><strong>Out-of-network assignment errors:</strong> Services that were in-network are incorrectly billed as out-of-network. Detect: check provider NPI and in-network status. Fix: clarify in-network status with both provider and insurer and request rebilling if incorrect.</li>
      <li><strong>Facility fees applied inappropriately:</strong> A hospital facility fee for what was an outpatient clinic visit can greatly increase costs. Detect: line item description indicating facility charge. Fix: dispute the fee and ask for an itemized explanation of facility components.</li>
      <li><strong>Missing insurer payments:</strong> The insurer processed and paid, but the provider did not post payments. Detect: compare EOB payments with provider payments column. Fix: provide EOB copies and request reconciliation.</li>
      <li><strong>Preauthorization not recorded:</strong> If preauthorization was obtained but not applied, the claim may be denied. Detect: check for prior auth numbers on claim and EOB. Fix: provide prior auth documentation and request reprocessing.</li>
      <li><strong>Modifier errors:</strong> Missing or incorrect modifiers change reimbursement rules (for example, separate visits vs. bundled services). Detect: compare medical records to billed modifiers. Fix: request billing correction with appropriate modifier.</li>
      <li><strong>Clerical data entry errors:</strong> Typos in dates, codes, or amounts are surprisingly common. Detect: verify each field and ask for correction if inconsistent.</li>
    </ol>
    <p><strong>How to correct errors:</strong> Request an itemized bill, list identified errors in a clear, numbered format, and send it by email or certified mail. Follow with phone calls using a simple script that references the emailed list. Ask for expected resolution timelines and get written confirmations. If corrections are not made, file an appeal with the insurer and, if needed, contact state consumer protection agencies or nonprofit billing advocates for mediation.</p>
    <p>Being systematic and documenting every interaction turns many of these errors into quick wins — and reduces the chance that mistakes will be repeated in the future.</p>
    <h5>Example timeline and escalation steps</h5>
    <p>Day 1: Gather documents and send a concise email to billing listing numbered errors. Attach the relevant EOB(s) and request confirmation.</p>
    <p>Day 3–7: If no response, call the billing office and reference your email. Ask for a confirmation number and the name of the person handling the correction.</p>
    <p>Day 7–14: If the provider promises correction but nothing changes on the statement, escalate to the provider’s billing supervisor or patient financial services manager. Be ready to provide copies of records and insist on a written timeline.</p>
    <p>If the provider refuses to correct clear errors, file a complaint with your state insurance commissioner or consumer protection office. Many states have online complaint forms and will mediate successfully in cases with clear documentation. Nonprofit medical billing advocates can also take statements and negotiate on your behalf—this often saves time and improves outcomes for complex disputes.</p>
    <p>Taking these organized steps and using formal complaint channels when necessary elevates your case and increases the probability of a favorable resolution.</p>
    <h5>Real-world example</h5>
    <p>One patient noticed duplicate CPT codes for the same clinic visit and a facility fee that didn’t match the type of visit. They emailed the billing office with a numbered list and the insurer’s EOB, and within two weeks the provider corrected the duplicate and removed the improper facility fee—reducing the balance by over 40% without an appeal to the insurer. Organized documentation and a clear request drove a fast resolution.</p>
    <p>If the provider does not fix clear clerical mistakes, escalate to the state insurance department or contact nonprofit advocates who will review your documents and often negotiate on your behalf for a reasonable fee or on contingency.</p>
  `,
  4: `
    <h4>Negotiating Your Hospital Bill — Preview</h4>
    <p>Negotiation is often effective, especially for self-pay or partially covered balances. This extended preview outlines the steps that typically result in meaningful reductions, how to calculate reasonable settlement offers, scripts to use on calls, and when to escalate to financial counselors or advocates.</p>
    <p><strong>Step 1: Get the full picture.</strong> Request a fully itemized bill and the insurer’s EOBs. Compare them line-by-line to check for errors and to understand which charges are negotiable—facility fees, balance-billed out-of-network amounts, and self-pay balances are typical targets for negotiation.</p>
    <p><strong>Step 2: Confirm your ability to pay and preferred terms.</strong> If you can pay a lump sum, you have stronger negotiating power. Many hospitals offer a prompt-pay discount for immediate payment—sometimes 25–50% off the billed amount. If you cannot pay at once, ask about an interest-free payment plan with a clear end date and predictable monthly payments.</p>
    <p><strong>Step 3: Make a reasonable first offer.</strong> A practical method is to ask for a prompt-pay discount (start by asking for 40–50% if the account is self-pay) or propose a settlement of 20–40% off the billed balance as a starting point, depending on the provider’s initial flexibility and whether the account is already with a collections agency. If negotiating a payment plan, propose monthly payments that you can comfortably maintain and ask whether they will freeze interest or stop collections activities while payments are made.</p>
    <p><strong>Step 4: Use the right language and escalate if needed.</strong> Use calm, direct scripts: "I can pay $X today to settle the account—can you approve a prompt-pay reduction?" or "I can afford $Y/month—can we set up an interest-free plan and freeze collections while I pay?" If frontline staff cannot approve a discount, ask to speak with a financial counselor or supervisor. Many problems are resolved at the supervisor level.</p>
    <p><strong>Step 5: Seek charity care and hardship programs if eligible.</strong> Hospitals often have charity care policies for low-income patients. Ask for the application and supporting documentation required; approval can lead to major reductions or complete forgiveness of the balance. Keep in mind that charity care eligibility is based on income and household size, and applications can take time—apply promptly and request temporary relief on your account while you are being evaluated.</p>
    <p><strong>Step 6: Get agreements in writing.</strong> If you reach a settlement or a payment plan, request written confirmation that clearly states the settled amount, payment schedule, and that the balance will be considered paid when terms are met. For settlements, confirm that the account will be marked as "paid in full" or "settled" and that there will be no further collection activity or reporting to credit bureaus once the agreement is completed.</p>
    <h5>Example negotiation math</h5>
    <p>If the bill is $5,000 and you can pay $2,000 today, offer $2,000 as a settlement and explain why it’s a one-time immediate payment. If the hospital counters with $3,500, ask whether a slightly higher payment (e.g., $2,250) would be accepted—and try to get the final agreement in writing immediately.</p>
    <p>If you can’t pay in full, propose a monthly plan: e.g., $150/month for 24 months toward a $3,600 balance—ask to freeze interest and reporting while payments are current. Many hospitals will accept this if you can show a history of keeping up with agreed payments.</p>
    <p><strong>When to involve an advocate or counsel:</strong> If negotiations stall or amounts are large, consider a certified medical billing advocate, who may work on contingency or charge a flat fee. Legal counsel is appropriate when you suspect fraud or when the provider is unresponsive and the balance threatens your credit severely.</p>
    <p>Clear documentation, a calm negotiation style, and an understanding of the provider’s financial assistance programs typically lead to successful outcomes. Don’t accept the first number on a bill—many patients reduce their balances significantly by asking for discounts and confirming agreements in writing.</p>
    <h5>Collections, credit reporting, and dealing with agencies</h5>
    <p>If an account goes to collections, ask the provider if they will remove the account from collections while you pursue charity care or a payment plan. If you negotiate directly with a collection agency, get a written settlement letter that states the payment will satisfy the debt and that the agency will update the credit bureaus accordingly. If the creditor reports incorrectly after payment, file a dispute with the credit bureaus with proof of settlement.</p>
    <h5>Sample settlement letter</h5>
    <p>"This letter confirms our agreement to settle account #XXXXX for $X to be paid by [date]. Upon receipt of payment, you will update all records to show the balance as "paid in full" and will not pursue further collection or report a negative status to credit bureaus." Send and request written confirmation before making payment.</p>
    <p>When negotiations involve large sums or become contentious, a certified billing advocate or attorney may provide leverage and structured negotiation experience that improves outcomes and reduces stress.</p>
    <p><strong>Dealing with collectors:</strong> If a balance has been sent to collections, ask the original provider if they will pull the account back while a settlement or charity application is pending. If negotiating with a collection agency, get a written settlement letter before you pay. Confirm that they will update credit reporting agencies once payment is made and keep proof of payment in your records.</p>
    <p><strong>Final advice:</strong> Be persistent but calm. Build small wins using documentation and targeted requests, and escalate to supervisors or outside advocates when needed. Properly executed, negotiation and documentation reduce the chance of long-term financial harm and often produce significant discounting or reasonable payment terms.</p>
  `
};

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Knowledge Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Medical Billing Articles & Guides
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert insights and practical guides to help you navigate the complex world of medical billing and healthcare costs.
            </p>

            {/* Expanded intro for All Articles (long-form) */}
            {activeCategory === "all" && !searchQuery && (
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  The Knowledge Center is designed to be a practical, patient-centered resource for understanding the financial, administrative, and practical issues that surround medical care. Rather than lofty policy or jargon, these articles focus on the concrete steps you can take today—how to read a lab report and what trends mean, how to audit and dispute a medical charge, how to understand your insurance benefits, and how to identify programs that reduce drug or hospital costs. Each article is written so you can act on its recommendations immediately: request an itemized bill, file an appeal with supporting records, or ask a provider for a patient-friendly explanation.
                </p>
                <p>
                  We structure content around common, verifiable actions: check the patient name and dates on every bill; compare the insurer’s EOB with the provider’s statement; request an itemized bill if one is not provided; and track trends in lab values rather than overreacting to a single test. The goal is to give you both the knowledge to catch errors and the scripts and next steps to fix them efficiently.
                </p>
                <p>
                  Articles are grouped by category—Basics, Billing Tips, Insurance, Patient Rights, Cost Savings—so you can go directly to the topic you need. Within each topic we include checklists, sample scripts to use with billing offices or insurers, and explanations of commonly used codes and phrases so you’re asking the right questions and collecting the right documents. When a topic calls for clinical guidance rather than billing help, we recommend asking for an expedited clinician review and documenting clinical notes for any appeals.
                </p>
                <p>
                  We emphasize verification and documentation. Keeping a single folder (digital or paper) with itemized bills, EOBs, clinical notes, and a simple timeline of phone calls makes disputes faster and far more likely to succeed. For complex or high-dollar situations, nonprofit patient advocacy organizations, certified billing advocates, and state complaints offices can provide extra leverage.
                </p>
                <p>
                  For readers seeking long-term savings, our Cost Savings and Billing Tips categories explore tactics like comparison shopping for elective care, using generics, evaluating insurance plans for total annual costs (not just monthly premiums), and negotiating both single balances and payment plans. These strategies are complementary—small improvements in multiple areas add up to sizable savings over time.
                </p>
                <p>
                  Above all, be persistent and methodical. Most billing errors aren't fraudulent—they are paperwork or coding mistakes—so a clear, well-documented request will often resolve the issue. When an insurer denies a claim for medical necessity, gather the supporting clinical notes and ask your provider for a written statement explaining why the service was necessary; this documentation is the most effective path to a successful appeal.
                </p>
                <p>
                  Use the search tool and category filters to find relevant articles quickly, and consider subscribing to our newsletter for monthly updates and new actionable templates. If you need personalized help, the site links to resources for advocates and charities that assist people facing unaffordable medical bills.
                </p>
                <p>
                  We also provide templates—scripts you can use on phone calls and emails to billing offices, appeals templates for insurers, and checklists to bring to appointments. These pragmatic tools are intended to reduce the friction of demanding correct billing, getting prior authorization, and documenting appeals. Many users report that a single clear email with linked supporting documents resolves issues faster than repeated phone calls.
                </p>
                <p>
                  You should also understand the limits of this resource: we provide evidence‑based, citation‑backed guidance and practical scripts, but we do not provide personalized medical diagnoses or legal advice. For clinical questions about test results or treatment decisions, contact your treating clinician. For high-dollar disputes or suspected fraud, consider legal counsel or certified medical billing advocates.
                </p>
                <p>
                  Finally, our editorial process emphasizes transparency and sources. Where applicable, articles cite clinical guidelines, peer‑reviewed data, and reputable health agencies. We include author and reviewer information in article metadata so you can see who reviewed or contributed to content. These steps help ensure the guidance is accurate, up‑to‑date, and trustworthy.
                </p>
                <h3>Quick checklist you can use now:</h3>
                <ul>
                  <li>Save all bills and EOBs to a dedicated folder.</li>
                  <li>Request an itemized bill for any unexplained charges.</li>
                  <li>Compare EOBs and bills line-by-line and record discrepancies.</li>
                  <li>Call the billing office with specific line-item questions and document names and dates.</li>
                  <li>File insurer appeals with clear supporting clinical documentation when necessary.</li>
                </ul>
                <p>
                  Reading through these resources and using the checklist will make disputes far more efficient and increase the likelihood of favorable outcomes. If you’d like, try one small action from the checklist this week—request an itemized bill or copy an EOB into your records—and watch how it simplifies a future conversation with a provider or insurer.
                </p>
                <h3>Editorial standards & trust</h3>
                <p>
                  Our editorial standards prioritize evidence, clarity, and transparency. Where clinical or technical claims are made, we cite reputable sources (guidelines, peer-reviewed literature, and official health agencies) and explicitly note when content is reviewed by clinical experts. We do not replace clinician judgment — instead, we provide the background, scripts, and checklists that help patients have productive, documented conversations with their clinicians and insurers. If you notice any content that appears out of date or needs correction, please use the contact link to request a review—this site maintains an audit trail for updates and reviewer notes so you can see when a piece was updated and by whom.
                </p>
              </div>
            )}

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "gradient-hero text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "all" && !searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <HoverPreview title={article.title} content={previews[article.id]}>
                    <Link to={`/articles/${article.id}`}>
                      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Read article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </HoverPreview>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {activeCategory === "all" ? "All Articles" : categories.find((c) => c.id === activeCategory)?.label}
            <span className="text-muted-foreground font-normal ml-2">({filteredArticles.length})</span>
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link to={`/articles/${article.id}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {article.readTime}
                          </span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl gradient-hero">
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Get the latest articles and billing tips delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="glass">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
