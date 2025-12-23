import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

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
  id: 1,
  title: "Understanding Your Medical Bill: A Complete Beginner's Guide",
  excerpt: "Medical bills can be confusing, but understanding them doesn’t have to be difficult. In this guide, we break down each section of a typical medical bill, explaining procedure codes, insurance adjustments, and common charges in plain language. By the end, you’ll feel confident reading your own medical statements and spotting potential errors or overcharges.",
  category: "basics",
  readTime: "8 min read",
  date: "Dec 15, 2024",
  featured: true,
}
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
