import Layout from "@/components/Layout";

const Insurance = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Insurance: How to Choose, Use & Maximize Your Coverage</h1>

          <p className="text-muted-foreground mb-6">
            Insurance policies are full of terms and thresholds that can cause confusion and unexpected bills. This comprehensive guide helps you choose the right plan, use benefits efficiently, understand appeals, and take advantage of tax-advantaged tools like HSAs. The more you know, the better you can control costs and access needed care.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Know the difference between plan types</h2>
          <p className="mb-4 text-muted-foreground">
            HMO (Health Maintenance Organization) plans typically require care to be delivered by in-network providers and often require referrals for specialists. PPO (Preferred Provider Organization) plans offer more flexibility to see out-of-network providers at higher costs. EPO (Exclusive Provider Organization) is similar to a PPO but usually without out-of-network coverage. HDHPs (High-Deductible Health Plans) pair with HSAs and can lower premiums but increase upfront cost risk.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Evaluate cost holistically</h2>
          <p className="mb-4 text-muted-foreground">
            Don’t judge a plan by premium alone—compare deductibles, copays, coinsurance, out-of-pocket maximums, and drug formularies. For people with recurring care or chronic conditions, higher premiums with lower out-of-pocket costs may be cheaper over the year. Create a simple spreadsheet with expected visits, medications, and tests to estimate total annual cost for each plan option.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Understand prior authorization and medical necessity</h2>
          <p className="mb-4 text-muted-foreground">
            Prior authorization is often required for expensive imaging or specialty medications and means the insurer reviews whether the service is medically necessary. If an authorization is denied, the insurer must provide a reason; you can appeal with supporting clinical documentation from your provider.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Appeals, documentation, and timelines</h2>
          <p className="mb-4 text-muted-foreground">
            If a claim is denied, file an internal appeal through the insurer first and follow their timeline exactly. Keep copies of clinical notes, lab results, and any letters that support medical necessity. If you lose the internal appeal, an external review or state-level complaint may be available depending on your state laws and plan type.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Make the most of HSAs & FSAs</h2>
          <p className="mb-4 text-muted-foreground">
            HSAs (paired with qualifying HDHPs) allow tax-free contributions and withdrawals for eligible healthcare expenses and can act as a long-term savings tool. FSAs provide pre-tax contributions for eligible expenses but are often use-it-or-lose-it each year—understand your employer’s rules and contribution limits.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Enroll strategically and keep records</h2>
          <p className="mb-6 text-muted-foreground">
            Use open enrollment to reassess your plan each year and watch for qualifying life events that permit mid-year changes. Keep copies of enrollment confirmations, prior authorizations, and any written correspondence with payers. Clear records simplify appeals and prevent coverage gaps.
          </p>

          <p className="text-muted-foreground">Understanding your insurance plan and using it strategically reduces surprises and ensures your care is covered when you need it. If a situation becomes complex, a benefits coordinator or patient advocate can help translate policy language into actionable steps.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Resources & next steps</h2>
          <p className="text-muted-foreground">
            Keep a binder with your plan documents, a list of in-network providers, and any preauthorization confirmations. Review your drug formulary before filling prescriptions and consult pharmacist or clinician alternatives to lower costs. If you face repeated denials, document clinical necessity and consider filing a complaint with your state insurance regulator while pursuing internal appeals.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;