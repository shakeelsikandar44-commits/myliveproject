import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Info, CheckCircle, AlertTriangle, Loader2, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import decodeImage from "@/assets/decode-medical.jpg";

interface DecodeResult {
  code: string;
  type: "CPT" | "ICD-10" | "HCPCS" | "Other";
  description: string;
  category: string;
  details: string[];
  averageCost: string;
  relatedCodes: { code: string; description: string }[];
  warnings?: string[];
}

const commonCodes = [
  { code: "99213", label: "Office Visit" },
  { code: "99285", label: "ER Visit" },
  { code: "80053", label: "Blood Panel" },
  { code: "71046", label: "Chest X-Ray" },
  { code: "J1100", label: "Injection" },
  { code: "G0008", label: "Flu Shot" },
];

const Decode = () => {
  const [searchCode, setSearchCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DecodeResult | null>(null);
  const [error, setError] = useState("");

  const decodeCode = async (code: string) => {
    if (!code.trim()) {
      setError("Please enter a medical code");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock results based on input
    const mockResults: Record<string, DecodeResult> = {
      "99213": {
        code: "99213",
        type: "CPT",
        description: "Office or other outpatient visit for the evaluation and management of an established patient",
        category: "Evaluation and Management",
        details: [
          "Low to moderate complexity medical decision making",
          "Typically 20-29 minutes when performed on the same date of service",
          "Requires 2 of 3 key components: expanded problem focused history, expanded problem focused examination, low complexity medical decision making",
        ],
        averageCost: "$80 - $150",
        relatedCodes: [
          { code: "99212", description: "Office visit - straightforward decision making" },
          { code: "99214", description: "Office visit - moderate complexity" },
          { code: "99215", description: "Office visit - high complexity" },
        ],
      },
      "99285": {
        code: "99285",
        type: "CPT",
        description: "Emergency department visit for evaluation and management - highest severity",
        category: "Emergency Department Services",
        details: [
          "Highest level emergency department visit",
          "Requires high severity presenting problem(s)",
          "Poses an immediate significant threat to life or function",
          "Includes comprehensive history and examination",
        ],
        averageCost: "$500 - $2,500",
        relatedCodes: [
          { code: "99281", description: "ED visit - self-limited problem" },
          { code: "99283", description: "ED visit - moderate severity" },
          { code: "99284", description: "ED visit - high severity" },
        ],
        warnings: [
          "This is the highest level ER code - verify documentation supports this level",
          "Common target for insurance audits",
        ],
      },
      "80053": {
        code: "80053",
        type: "CPT",
        description: "Comprehensive metabolic panel - includes 14 different tests",
        category: "Laboratory/Pathology",
        details: [
          "Includes: Albumin, Bilirubin, Calcium, Carbon dioxide, Chloride, Creatinine, Glucose, Phosphatase alkaline, Potassium, Protein total, Sodium, Transferase alanine amino, Transferase aspartate amino, Urea nitrogen (BUN)",
          "Used for screening and monitoring of multiple organ systems",
          "Typically requires blood sample",
        ],
        averageCost: "$15 - $200",
        relatedCodes: [
          { code: "80048", description: "Basic metabolic panel (8 tests)" },
          { code: "80076", description: "Hepatic function panel" },
        ],
      },
    };

    const upperCode = code.toUpperCase().trim();
    if (mockResults[upperCode]) {
      setResult(mockResults[upperCode]);
    } else {
      setResult({
        code: upperCode,
        type: "Other",
        description: `Medical code "${upperCode}" - detailed information available in our database`,
        category: "Medical Procedure/Diagnosis",
        details: [
          "This code is used in medical billing and documentation",
          "Contact your healthcare provider for specific details about this charge",
          "Verify with your insurance company for coverage information",
        ],
        averageCost: "Varies by provider and location",
        relatedCodes: [],
      });
    }

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    decodeCode(searchCode);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={decodeImage}
            alt="Medical codes"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Medical Code Decoder
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Decode Any Medical Code
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Enter CPT, ICD-10, HCPCS, or any other medical code to get detailed explanations, average costs, and billing insights.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter medical code (e.g., 99213, J1100)"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={loading} className="h-14 px-8">
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Decode"
                  )}
                </Button>
              </div>
            </form>

            {error && (
              <p className="text-destructive mt-4">{error}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Codes */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground py-2">Try common codes:</span>
            {commonCodes.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setSearchCode(item.code);
                  decodeCode(item.code);
                }}
                className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm"
              >
                <span className="font-mono text-primary">{item.code}</span>
                <span className="text-muted-foreground ml-2">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Main Result Card */}
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-mono font-bold text-primary">{result.code}</span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {result.type}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground mb-2">
                        {result.description}
                      </h2>
                      <p className="text-muted-foreground">Category: {result.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">Average Cost</div>
                      <div className="text-2xl font-bold text-foreground">{result.averageCost}</div>
                    </div>
                  </div>

                  {/* Warnings */}
                  {result.warnings && result.warnings.length > 0 && (
                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Important Notes</h4>
                          <ul className="space-y-1">
                            {result.warnings.map((warning, index) => (
                              <li key={index} className="text-sm text-muted-foreground">
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Code Details
                    </h3>
                    <ul className="space-y-3">
                      {result.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Codes */}
                {result.relatedCodes.length > 0 && (
                  <div className="p-8 rounded-2xl bg-card border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Related Codes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {result.relatedCodes.map((related, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchCode(related.code);
                            decodeCode(related.code);
                          }}
                          className="p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-mono text-primary font-semibold">{related.code}</span>
                              <p className="text-sm text-muted-foreground mt-1">{related.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Empty State */}
            {!result && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Enter a Medical Code
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Type any CPT, ICD-10, or HCPCS code above to get detailed information about the procedure, diagnosis, or service.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Types of Medical Codes We Decode
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "CPT Codes",
                  description: "Current Procedural Terminology codes describe medical procedures and services",
                  example: "99213, 99285",
                },
                {
                  title: "ICD-10 Codes",
                  description: "International Classification of Diseases codes identify diagnoses and conditions",
                  example: "M54.5, J06.9",
                },
                {
                  title: "HCPCS Codes",
                  description: "Healthcare Common Procedure Coding System for supplies and non-physician services",
                  example: "J1100, G0008",
                },
              ].map((type, index) => (
                <div key={index} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Example: <span className="font-mono text-primary">{type.example}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Decode;