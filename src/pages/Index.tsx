import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, Search, CheckCircle, ArrowRight, Shield, Clock, 
  Users, Star, ChevronLeft, ChevronRight, Upload, Code, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-medical.jpg";
import billAnalysisImage from "@/assets/bill-analysis.jpg";

const heroSlides = [
  {
    title: "Understand Your Medical Bills",
    subtitle: "AI-Powered Bill Analysis",
    description: "Upload your medical bill and get a detailed breakdown of charges, identify potential errors, and understand what you're paying for.",
  },
  {
    title: "Decode Medical Codes",
    subtitle: "CPT & ICD Code Decoder",
    description: "Enter any medical code and get instant, accurate explanations of procedures, diagnoses, and billing information.",
  },
  {
    title: "Expert Healthcare Guidance",
    subtitle: "Trusted Resources",
    description: "Access comprehensive articles and guides to navigate the complex world of medical billing and healthcare costs.",
  },
];

const features = [
  {
    icon: Upload,
    title: "Bill Analysis",
    description: "Upload your medical bills in PDF, Word, or image format for comprehensive AI-powered analysis.",
    link: "/bill-analyze",
  },
  {
    icon: Code,
    title: "Code Decoder",
    description: "Instantly decode CPT, ICD-10, and other medical codes to understand your healthcare charges.",
    link: "/decode",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn about medical billing practices, patient rights, and how to dispute incorrect charges.",
    link: "/articles",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your Bill",
    description: "Simply upload your medical bill in any format - PDF, Word document, or even a photo.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI analyzes every line item, codes, and charges on your bill.",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Receive a detailed report with explanations, potential errors, and cost-saving opportunities.",
  },
];

const stats = [
  { value: "50K+", label: "Bills Analyzed" },
  { value: "$2.5M", label: "Saved for Users" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "24/7", label: "Available" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content: "Medical Bill Helps found a $3,200 billing error on my hospital bill. The AI analysis was incredibly detailed and easy to understand.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "As someone managing healthcare for my employees, this tool has been invaluable. It's saved us thousands in billing disputes.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Advocate",
    content: "I recommend Medical Bill Helps to all my clients. The code decoder feature alone is worth its weight in gold.",
    rating: 5,
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
                {heroSlides[currentSlide].subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/bill-analyze">
                  Analyze Your Bill <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/decode">Decode Medical Codes</Link>
              </Button>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-background/20 hover:bg-background/30 text-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-primary" : "bg-background/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-background/20 hover:bg-background/30 text-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Help You Save
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools empowers you to understand, verify, and potentially reduce your medical bills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center text-primary font-medium">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Three Simple Steps to Understand Your Bill
              </h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={billAnalysisImage}
                alt="Bill analysis"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl glass shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-success flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">$847</div>
                    <div className="text-sm text-muted-foreground">Average Savings</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Shield, title: "Secure & Private", desc: "Your medical information is encrypted and never shared." },
              { icon: Clock, title: "Instant Results", desc: "Get detailed analysis within seconds of uploading." },
              { icon: Users, title: "Expert Support", desc: "Access to healthcare billing specialists when needed." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background/10 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-background/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-background/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl gradient-hero p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Understand Your Medical Bills?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Upload your bill today and get instant AI-powered analysis. Save time, money, and stress.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="glass" size="xl" asChild>
                  <Link to="/bill-analyze">
                    Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;