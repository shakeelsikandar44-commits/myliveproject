import { motion } from "framer-motion";
import { Target, Heart, Users, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "We believe everyone deserves to understand their medical bills without confusion or hidden complexities.",
    },
    {
      icon: Heart,
      title: "Patient Advocacy",
      description: "We're on your side, helping you identify errors and fight for fair healthcare pricing.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Our tools are designed to be easy to use, making medical billing knowledge accessible to everyone.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for accuracy and reliability in every analysis and recommendation we provide.",
    },
  ];

  const milestones = [
    { year: "2020", event: "Medical Bill Helps founded with a mission to demystify medical billing" },
    { year: "2021", event: "Launched AI-powered bill analysis technology" },
    { year: "2022", event: "Helped 10,000+ users understand their medical bills" },
    { year: "2023", event: "Introduced comprehensive medical code decoder" },
    { year: "2024", event: "Saved users over $2.5 million in identified billing errors" },
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
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Patients Through Knowledge
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe that understanding your medical bills shouldn't require a medical degree. Our mission is to make healthcare costs transparent and manageable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Medical Bill Helps was founded on a simple belief: patients deserve to understand what they're paying for. In a healthcare system often criticized for its complexity and lack of transparency, we provide the tools and knowledge needed to navigate medical billing with confidence.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered platform analyzes medical bills, decodes complex procedure codes, and identifies potential errors that could be costing you money. We've helped thousands of patients save money and gain peace of mind by understanding their healthcare expenses.
              </p>
              <div className="space-y-3">
                {[
                  "AI-powered bill analysis for instant insights",
                  "Comprehensive medical code database",
                  "Educational resources for patient empowerment",
                  "Expert support when you need it most",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl gradient-hero p-12 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-7xl font-bold mb-4">50K+</div>
                  <div className="text-xl opacity-90">Bills Analyzed</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass shadow-lg">
                <div className="text-3xl font-bold text-foreground">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Saved for Users</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and how we serve our users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to a platform helping thousands of patients.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-8 pb-8 last:pb-0"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Built by Patients, for Patients</h2>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Our team has personally experienced the frustration of confusing medical bills. We've seen the errors, felt the stress, and navigated the complex appeals process. That's why we built Medical Bill Helps — to give you the tools we wish we had when we needed them most.
            </p>
            <p className="text-lg text-background/80 leading-relaxed">
              Whether you're dealing with your first hospital bill or you've been fighting insurance denials for years, we're here to help. Our platform combines cutting-edge AI technology with deep expertise in medical billing to give you the clarity and confidence you deserve.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;