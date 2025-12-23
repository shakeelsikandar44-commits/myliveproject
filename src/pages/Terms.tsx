import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Medical Bill Helps website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services following any changes constitutes acceptance of those changes.`,
    },
    {
      title: "2. Description of Services",
      content: `Medical Bill Helps provides AI-powered medical bill analysis, medical code decoding, and educational resources related to medical billing and healthcare costs. Our services are designed to help users understand their medical bills and identify potential errors or overcharges.

Our services are for informational purposes only and do not constitute medical, legal, or financial advice. We recommend consulting with qualified healthcare providers, legal professionals, or financial advisors for specific guidance regarding your individual situation.`,
    },
    {
      title: "3. User Responsibilities",
      content: `As a user of our services, you agree to:

• Provide accurate and complete information when using our services
• Use our services only for lawful purposes and in accordance with these terms
• Not upload any content that is harmful, offensive, or violates any applicable laws
• Maintain the confidentiality of any account credentials
• Not attempt to interfere with or disrupt our services or servers
• Not use automated systems or software to extract data from our website

You are solely responsible for all activities that occur under your account and for maintaining the confidentiality of your account information.`,
    },
    {
      title: "4. Privacy and Data Protection",
      content: `We are committed to protecting your privacy and personal information. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.

By using our services, you consent to the collection and use of your information as described in our Privacy Policy. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services.`,
    },
    {
      title: "5. Intellectual Property Rights",
      content: `All content on the Medical Bill Helps website, including but not limited to text, graphics, logos, images, software, and the compilation thereof, is the property of Medical Bill Helps or its content suppliers and is protected by United States and international copyright laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.

You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.`,
    },
    {
      title: "6. Disclaimer of Warranties",
      content: `OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

We do not warrant that our services will be uninterrupted, timely, secure, or error-free. We do not warrant that the results obtained from the use of our services will be accurate or reliable.

The analysis and information provided through our services are based on the data you provide and publicly available information. We cannot guarantee the accuracy, completeness, or timeliness of any information provided.`,
    },
    {
      title: "7. Limitation of Liability",
      content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, MEDICAL BILL HELPS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

• Your access to or use of or inability to access or use our services
• Any conduct or content of any third party on our services
• Any content obtained from our services
• Unauthorized access, use, or alteration of your transmissions or content

In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for accessing our services during the twelve (12) months preceding the claim.`,
    },
    {
      title: "8. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless Medical Bill Helps, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, or demands, liabilities, and settlements, including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your violation of these Terms of Service or your use of our services.`,
    },
    {
      title: "9. Governing Law and Jurisdiction",
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.

Any dispute arising out of or relating to these terms or our services shall be subject to the exclusive jurisdiction of the state and federal courts located in the United States, and you hereby consent to the personal jurisdiction of such courts.`,
    },
    {
      title: "10. Changes to Terms",
      content: `We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.`,
    },
    {
      title: "11. Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us at:

Medical Bill Helps
Email: support@medicalbillhelps.com
Phone: (551) 307-0657

We will respond to your inquiry as soon as reasonably possible.`,
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 22, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              <div className="p-8 rounded-2xl bg-card border border-border mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Medical Bill Helps. These Terms of Service ("Terms") govern your use of our website, products, and services. Please read these terms carefully before using our services. By using Medical Bill Helps, you agree to be bound by these Terms.
                </p>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 rounded-2xl bg-card border border-border"
                  >
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;