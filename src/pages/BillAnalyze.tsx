import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Upload, FileText, Image, File, X, Download, CheckCircle, 
  AlertCircle, Loader2, FileImage, FileType
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import billAnalysisImage from "@/assets/bill-analysis.jpg";

interface AnalysisResult {
  summary: string;
  totalAmount: string;
  lineItems: {
    code: string;
    description: string;
    amount: string;
    status: "verified" | "potential-error" | "review";
  }[];
  recommendations: string[];
  potentialSavings: string;
}

const BillAnalyze = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp", 
      "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (validTypes.includes(file.type) || file.type.startsWith("image/")) {
      setFile(file);
      setResult(null);
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes("pdf")) return FileText;
    if (type.startsWith("image/")) return FileImage;
    return FileType;
  };

  const analyzeFile = async () => {
    if (!file) return;

    setAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const mockResult: AnalysisResult = {
      summary: "This medical bill from General Hospital includes charges for an emergency room visit on 12/15/2024. The bill contains standard ER visit charges, lab work, and imaging services.",
      totalAmount: "$4,287.50",
      lineItems: [
        { code: "99285", description: "Emergency Room Visit - Level 5", amount: "$1,850.00", status: "verified" },
        { code: "36415", description: "Blood Draw/Venipuncture", amount: "$45.00", status: "verified" },
        { code: "80053", description: "Comprehensive Metabolic Panel", amount: "$187.50", status: "verified" },
        { code: "71046", description: "Chest X-Ray, 2 Views", amount: "$425.00", status: "potential-error" },
        { code: "85025", description: "Complete Blood Count (CBC)", amount: "$95.00", status: "verified" },
        { code: "99999", description: "Facility Fee - ER", amount: "$1,685.00", status: "review" },
      ],
      recommendations: [
        "The chest X-ray charge (CPT 71046) appears higher than average. Consider requesting an itemized breakdown.",
        "Verify if the facility fee includes any duplicate charges.",
        "Check if your insurance has processed this bill correctly - you may be eligible for in-network rates.",
        "Consider negotiating a payment plan if the out-of-pocket amount is burdensome.",
      ],
      potentialSavings: "$320 - $580",
    };

    setResult(mockResult);
    setAnalyzing(false);
  };

  const clearFile = () => {
    setFile(null);
    setResult(null);
  };

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
              AI-Powered Analysis
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Analyze Your Medical Bill
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your medical bill in PDF, Word, or image format. Our AI will analyze every charge, decode medical codes, and identify potential errors or overcharges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!file ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "border-border hover:border-primary/50 hover:bg-muted/30"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Drop your bill here
                </h3>
                <p className="text-muted-foreground mb-6">
                  or click to browse files
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { icon: FileText, label: "PDF" },
                    { icon: File, label: "Word" },
                    { icon: Image, label: "Image" },
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm"
                    >
                      <type.icon className="w-4 h-4" />
                      {type.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* File Preview */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        {(() => {
                          const Icon = getFileIcon(file.type);
                          return <Icon className="w-7 h-7 text-primary" />;
                        })()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{file.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={clearFile}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Analyze Button */}
                {!result && (
                  <div className="text-center">
                    <Button
                      variant="hero"
                      size="xl"
                      onClick={analyzeFile}
                      disabled={analyzing}
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Analyze Bill
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Analysis Result */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Summary Card */}
                    <div className="p-8 rounded-2xl bg-card border border-border">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">Analysis Complete</h3>
                          <p className="text-muted-foreground">{result.summary}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-foreground">{result.totalAmount}</div>
                          <div className="text-sm text-muted-foreground">Total Billed</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-success" />
                          <div>
                            <span className="font-semibold text-foreground">Potential Savings: </span>
                            <span className="text-success font-bold">{result.potentialSavings}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Line Items */}
                    <div className="p-8 rounded-2xl bg-card border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-6">Line Item Analysis</h3>
                      <div className="space-y-4">
                        {result.lineItems.map((item, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-xl border ${
                              item.status === "verified"
                                ? "bg-muted/30 border-border"
                                : item.status === "potential-error"
                                ? "bg-destructive/5 border-destructive/20"
                                : "bg-accent/5 border-accent/20"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  item.status === "verified"
                                    ? "bg-success/10"
                                    : item.status === "potential-error"
                                    ? "bg-destructive/10"
                                    : "bg-accent/10"
                                }`}>
                                  {item.status === "verified" ? (
                                    <CheckCircle className="w-5 h-5 text-success" />
                                  ) : (
                                    <AlertCircle className={`w-5 h-5 ${
                                      item.status === "potential-error" ? "text-destructive" : "text-accent"
                                    }`} />
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm text-primary bg-primary/10 px-2 py-0.5 rounded">
                                      {item.code}
                                    </span>
                                    <span className="font-medium text-foreground">{item.description}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {item.status === "verified" && "Charge appears accurate"}
                                    {item.status === "potential-error" && "May be overcharged - review recommended"}
                                    {item.status === "review" && "Requires further review"}
                                  </div>
                                </div>
                              </div>
                              <div className="text-lg font-semibold text-foreground">{item.amount}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="p-8 rounded-2xl bg-card border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-6">Recommendations</h3>
                      <ul className="space-y-4">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                            </div>
                            <span className="text-muted-foreground">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button variant="hero" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        Download Report
                      </Button>
                      <Button variant="outline" size="lg" onClick={clearFile}>
                        Analyze Another Bill
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Analyze
              </h2>
              <ul className="space-y-4">
                {[
                  "CPT codes for procedures and services",
                  "ICD-10 diagnosis codes",
                  "Facility and professional fees",
                  "Insurance adjustments and payments",
                  "Duplicate or unbundled charges",
                  "Balance billing compliance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={billAnalysisImage}
                alt="Bill analysis process"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BillAnalyze;