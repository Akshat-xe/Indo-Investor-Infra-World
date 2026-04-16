import { useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, MapPin, Shield, TrendingUp, Search } from "lucide-react";
import { getPropertiesByCategory, categories, type Property } from "@/data/properties";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categorySlugMap: Record<string, Property["category"]> = {
  residential: "Residential",
  commercial: "Commercial",
  "office-space": "Office Space",
  "co-working-space": "Co-Working Space",
};

const categoryTitles: Record<string, string> = {
  residential: "Residential Properties — Premium Plots & Townships | Indo Investor Infra World",
  commercial: "Commercial Properties — Offices & Co-Working Spaces Noida | Indo Investor Infra World",
  "office-space": "Office Spaces Noida — Bhutani Alphathum & Cyberthum | Indo Investor Infra World",
  "co-working-space": "Co-Working Spaces Noida — Assured Returns from ₹6.26L | Indo Investor Infra World",
};
const categoryDescriptions: Record<string, string> = {
  residential: "Explore government-approved residential plots in Dholera Smart City. RERA-verified townships with clear titles, immediate registry, and 20–35% YoY appreciation. Starting from ₹8,999 per sq. yard.",
  commercial: "Discover premium commercial properties in Noida's top business corridors — Bhutani Alphathum (Sector 90) and Cyberthum (Sector 140A). Ready to move, metro connected, high ROI.",
  "office-space": "Premium office spaces in Noida Expressway — Bhutani Alphathum from ₹14,990/sq.ft and Cyberthum from ₹6,000/sq.ft. Ready to move, RERA verified, excellent connectivity.",
  "co-working-space": "Invest in co-working pods with ~12% p.a. assured rental returns. Bhutani Alphathum and Cyberthum MyPods starting from ₹6.26 Lakh in Noida Expressway.",
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const category = categorySlugMap[categorySlug || ""];
  const properties = category ? getPropertiesByCategory(category) : [];
  const categoryMeta = categories.find((c) => c.key === category);

  usePageSEO({
    title: categoryTitles[categorySlug || ""] || "Properties | Indo Investor Infra World",
    description: categoryDescriptions[categorySlug || ""] || "Browse RERA-verified properties by Indo Investor Infra World.",
    canonical: `/properties/${categorySlug}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": categoryMeta?.title || "Properties",
      "description": categoryDescriptions[categorySlug || ""],
      "url": `https://indoinvestorinfraworld.com/properties/${categorySlug}`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://indoinvestorinfraworld.com/" },
          { "@type": "ListItem", "position": 2, "name": categoryMeta?.title || "Properties", "item": `https://indoinvestorinfraworld.com/properties/${categorySlug}` }
        ]
      }
    },
  });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = filteredProperties.length;

  const paginate = useCallback(
    (dir: number) => {
      if (total === 0) return;
      setDirection(dir);
      setCurrent((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  if (!category || !categoryMeta) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <Navbar />
        <h1 className="text-2xl font-heading font-bold text-foreground">Category Not Found</h1>
        <button onClick={() => navigate("/")} className="text-primary font-body text-sm hover:underline">
          ← Back to Home
        </button>
        <Footer />
      </div>
    );
  }

  const project = filteredProperties[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                {categoryMeta.title} Properties
              </span>
            </div>
            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">
              {categoryMeta.title}
              <br />
              <span className="text-gradient-gold">{categoryMeta.subtitle}</span>
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-xl">{categoryMeta.desc}</p>
          </motion.div>

          {/* Search & Count */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search property by name..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrent(0); }}
                className="w-full bg-card border border-border/50 rounded-xl pl-10 pr-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <span className="text-xs text-muted-foreground font-body">
              Showing {total} of {properties.length} properties
            </span>
          </motion.div>

          {total === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">No properties found matching your search.</p>
            </div>
          ) : (
            <>
              {/* Carousel */}
              <div className="relative mb-6">
                {/* Nav Controls */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground font-body">
                    {current + 1} / {total}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => paginate(-1)}
                      className="w-10 h-10 rounded-full bg-glass flex items-center justify-center hover:bg-secondary transition-colors"
                      aria-label="Previous property"
                    >
                      <ArrowLeft className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={() => paginate(1)}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                      aria-label="Next property"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  {project && (
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Link
                        to={`/property/${project.slug}`}
                        className="group block"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
                          {/* Main Image */}
                          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px] md:h-[400px] shadow-luxury">
                            <img
                              src={project.image}
                              alt={project.name}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 photo-overlay-bottom" />
                            {/* Tags */}
                            <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-body px-2.5 py-1 rounded-full font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                                {project.name}
                              </h3>
                              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 font-body">
                                <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                                {project.location}
                              </div>
                            </div>
                          </div>

                          {/* Info Panel */}
                          <div className="lg:col-span-5 flex flex-col gap-3">
                            <div className="bg-card rounded-2xl p-5 sm:p-6 flex-1 border border-border/50">
                              <span className="text-[10px] sm:text-xs font-body uppercase tracking-widest text-primary mb-2 block">
                                {project.config}
                              </span>
                              <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-4">
                                {project.description.slice(0, 180)}...
                              </p>
                              <div className="flex items-center justify-between">
                                <p className="text-lg sm:text-xl font-heading font-bold text-gradient-gold">
                                  {project.price.length > 30 ? project.price.split("|")[0] : project.price}
                                </p>
                                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-card rounded-xl p-4 border border-border/50">
                                <Shield className="w-4 h-4 text-primary mb-1.5" />
                                <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">Status</p>
                                <p className="text-xs sm:text-sm font-heading font-semibold text-foreground">{project.status}</p>
                              </div>
                              <div className="bg-card rounded-xl p-4 border border-border/50">
                                <TrendingUp className="w-4 h-4 text-primary mb-1.5" />
                                <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">Reviews</p>
                                <p className="text-xs sm:text-sm font-heading font-semibold text-foreground">{project.reviews} Reviews</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress dots */}
                <div className="flex justify-center gap-1.5 mt-6">
                  {filteredProperties.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1);
                        setCurrent(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to property ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* All Properties Grid — always shown */}
              {total >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-12"
                >
                  <h2 className="text-lg font-heading font-bold text-foreground mb-6">
                    All {categoryMeta.title} Properties
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProperties.map((prop, i) => (
                      <Link
                        key={prop.id}
                        to={`/property/${prop.slug}`}
                        className="group"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover-glow"
                        >
                          <div className="relative h-[200px] overflow-hidden">
                            <img
                              src={prop.image}
                              alt={prop.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 photo-overlay-soft" />
                            <div className="absolute top-3 left-3 flex gap-1.5">
                              {prop.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="bg-primary text-primary-foreground text-[10px] font-body px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-sm font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {prop.name}
                            </h3>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground font-body mb-2">
                              <MapPin className="w-3 h-3 text-primary" />
                              {prop.location}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-heading font-semibold text-gradient-gold">
                                {prop.price.length > 25 ? prop.price.split("|")[0].trim() : prop.price}
                              </span>
                              <span className="text-[10px] text-muted-foreground font-body">{prop.status}</span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
