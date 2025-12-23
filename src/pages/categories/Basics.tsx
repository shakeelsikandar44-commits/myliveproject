import Layout from "@/components/Layout";

const Basics = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Basics: Understand Medical Billing & Reports</h1>
          <p className="text-muted-foreground mb-6">
            Medical billing and related paperwork can be intimidating, but with the right approach you can decode nearly any statement, spot errors, and take action that lowers your costs. This expanded guide explains the foundational concepts—how to read a bill and an EOB, what common codes mean, why insurer adjustments appear, and practical steps you can take immediately to protect yourself.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">What to look for on a bill</h2>
          <p className="mb-4 text-muted-foreground">
            A typical medical bill includes your name, patient account number, dates of service, the facility or clinician billed, itemized services (usually listed with CPT procedure codes), diagnosis codes (ICD-10), the amount billed, any insurer adjustments, and the remaining patient responsibility. When the bill first arrives, confirm identity details, dates, and that the provider listed is the one who saw you. Small mismatches often signal clerical errors that are simple to correct.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Common terminology explained (plain English)</h2>
          <p className="mb-4 text-muted-foreground">
            CPT (Current Procedure Terminology) codes identify the exact service or procedure. ICD-10 codes indicate why the service was provided. The “allowed amount” is the price your insurer has negotiated with the provider. An EOB (Explanation of Benefits) from your insurer shows how a claim was processed—importantly, an EOB is not a bill but a reconciliation that you should compare with the provider’s statement to confirm consistency.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Why insurer adjustments show up</h2>
          <p className="mb-4 text-muted-foreground">
            Insurer adjustments reflect the portion that a provider agreed to write off because of contracts with insurers, network discounts, or bundling of services. Sometimes adjustments hide coding errors or duplicate entries; other times they are expected. Look closely at how the billed amount, insurer adjustment, and patient responsibility arrive at the final balance.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">How insurance affects what you pay</h2>
          <p className="mb-4 text-muted-foreground">
            Your out-of-pocket costs are driven by whether a service is in-network, your deductible status, and how coinsurance or copay rules apply. For example, diagnostic tests may be billed separately from a clinic visit and apply to different benefits. If you have a high-deductible plan, most non-preventive services apply to the deductible and you may pay more out of pocket until the deductible is met.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Practical steps when you get a bill</h2>
          <ol className="list-decimal ml-6 mb-6 text-muted-foreground">
            <li>Save the itemized bill and any EOBs from your insurer. These are essential for disputes and appeals.</li>
            <li>Compare dates, CPT/ICD codes, and provider names against your own appointment records and the clinician notes if available.</li>
            <li>Flag duplicate charges, unclear descriptions, or services you did not receive, and request an itemized explanation in writing.</li>
            <li>Contact the provider billing office and ask them to explain each line item. Keep notes of who you speak with and what they say.</li>
            <li>If a discrepancy remains, file an appeal with the insurer and attach supporting documentation. Many denials are reversed on appeal if you submit the right paperwork.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Simple verification checklist</h2>
          <ul className="list-disc ml-6 mb-6 text-muted-foreground">
            <li>Is the patient name correct?</li>
            <li>Are the dates of service correct and do they match the EOB?</li>
            <li>Are any CPT codes unfamiliar or duplicated?</li>
            <li>Do you recognize the provider(s) billed (including ancillary clinicians like anesthesiologists)?</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">When to escalate</h2>
          <p className="mb-6 text-muted-foreground">
            If billing staff cannot provide a satisfactory explanation, ask to speak with a financial counselor or a supervisor. For insurer denials, use the formal appeals process and request an external review when available. If you feel overwhelmed, nonprofit patient advocacy groups and state consumer protection offices can assist with complex disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Final note: organization and persistence pay off</h2>
          <p className="mb-6 text-muted-foreground">
            Many billing issues are fixable with careful documentation and polite persistence. Create a simple folder for bills and EOBs, timestamp calls, retain written responses, and follow up promptly. Over time these habits reduce errors and save money—and give you confidence when dealing with complex healthcare paperwork.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Further resources & next steps</h2>
          <p className="text-muted-foreground">
            Once you've verified a bill and taken the initial steps, consider these next steps: (1) If you have recurring or complex medical bills, create a spreadsheet to track claims and appeals so nothing falls through the cracks; (2) Sign up for your provider's patient portal to capture lab trends and appointment notes; (3) Keep a list of insurance phone numbers, claim IDs, and appeal deadlines near your records; and (4) When in doubt, ask your provider for a written explanation of medical necessity that you can attach to an appeal. These ongoing practices reduce the time spent on disputes and improve your ability to negotiate better outcomes.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Basics;