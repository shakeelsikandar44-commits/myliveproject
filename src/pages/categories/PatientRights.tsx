import Layout from "@/components/Layout";

const PatientRights = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Patient Rights: Know Your Choices & Protections</h1>

          <p className="text-muted-foreground mb-6">
            Patients’ rights give you tools to protect safety, privacy, and decision-making authority in healthcare settings. This practical guide explains how to assert those rights, document concerns, and use legal protections—without getting lost in legalese.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Right to informed consent and shared decision-making</h2>
          <p className="mb-4 text-muted-foreground">
            You have the right to understandable information about proposed treatments, alternatives, risks, and expected outcomes. Shared decision-making means clinicians discuss options with you and respect your values and preferences. Ask for written summaries, and request time to discuss with family or a trusted advisor before deciding on major interventions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Access to and correction of medical records</h2>
          <p className="mb-4 text-muted-foreground">
            Under HIPAA and related state laws, you can request copies of your medical records and ask for corrections to errors. When requesting records, specify the date range and whether you want notes, imaging, or lab results. If you find inaccuracies, request an amendment and document your communication.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Right to privacy and limits on disclosure</h2>
          <p className="mb-4 text-muted-foreground">
            Providers must protect your health information. You can ask to restrict disclosures for certain situations and to receive communications by a preferred method (for example, a private mailing address). If privacy is breached, report it promptly to the provider and, if needed, to state privacy or regulatory authorities.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Refusing treatment and advance directives</h2>
          <p className="mb-4 text-muted-foreground">
            You may refuse any treatment and choose alternative care if available. Advance directives (living wills and durable power of attorney for healthcare) let you specify your preferences and designate decision-makers if you cannot speak for yourself. Keep copies in your records and share them with family and your healthcare team.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Reporting safety concerns and filing complaints</h2>
          <p className="mb-6 text-muted-foreground">
            If you experience unsafe care, report the event to the provider’s patient relations office and, when appropriate, file a complaint with state health departments or licensing boards. Keep a detailed timeline of events, names of staff involved, and copies of any relevant documents—these records make investigations and corrective actions more effective.
          </p>

          <p className="text-muted-foreground">Being informed about your rights helps you advocate for safer care and ensures your voice is heard when decisions are being made. Keep records, ask for clarity in writing, and reach out to patient advocacy resources if you need assistance.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Next steps and resources</h2>
          <p className="text-muted-foreground">
            Consider preparing an advance directive if you haven’t already and keep it with your records. If you encounter safety or privacy issues, document them carefully and report promptly to the facility and state boards. Look for local patient‑advocacy groups that can help with formal complaints or complex cases.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PatientRights;