import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Privacy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 23, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              Medical Bill Helps ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when using our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly (such as when you contact us or submit a bill for analysis) and information collected automatically (such as cookies, device identifiers, and usage data). We may also receive information from third‑party services if you choose to link them.
            </p>

            <h2>How We Use Information</h2>
            <p>
              We use information to provide and improve our services, respond to inquiries, send communications, and for analytics and security purposes. We do not sell your personal information to third parties.
            </p>

            <h2>Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to personalize content, analyze site traffic, and provide advertising. We may use third‑party services such as Google Analytics and Google AdSense. These third parties may collect information about your online activities over time and across different websites when you use our services.
            </p>

            <h2>Advertising Partners</h2>
            <p>
              We may display third‑party advertisements on our site. Our advertising partners may use cookies and other tracking technologies to display ads tailored to your interests. If you are a resident of a jurisdiction with privacy rights, you may have choices about how these technologies are used.
            </p>

            <h2>Your Choices</h2>
            <p>
              You can opt out of certain tracking by adjusting your browser settings or using available opt‑out tools provided by third parties (for example Google’s ad settings). You can also contact us to request access, correction, or deletion of your personal information.
            </p>

            <h2>Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission or storage is 100% secure.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or requests about this policy, please contact us at <a href="mailto:support@medicalbillhelps.com">support@medicalbillhelps.com</a>.
            </p>

            <h2>Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised effective date.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
