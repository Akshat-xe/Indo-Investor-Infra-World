import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Star, Check, ChevronDown, ChevronUp, Phone, Building2, Shield, Ruler, Tag, Users } from "lucide-react";
import { allProperties } from "@/data/properties";
import { useState } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PropertyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = allProperties.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageSEO({
    title: property
      ? `${property.name} — ${property.location} | Indo Investor Infra World`
      : "Property Not Found | Indo Investor Infra World",
    description: property
      ? `${property.description.slice(0, 155)}…`
      : "This property could not be found. Browse our full portfolio of RERA-verified properties.",
    canonical: property ? `/property/${property.slug}` : undefined,
    noIndex: !property,
    schema: property
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": property.name,
          "description": property.description,
          "image": property.gallery[0],
          "brand": { "@type": "Brand", "name": property.developer },
          "offers": {
            "@type": "Offer",
            "price": property.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@id": "https://indoinvestorinfraworld.com/#organization" }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://indoinvestorinfraworld.com/" },
              { "@type": "ListItem", "position": 2, "name": property.category, "item": `https://indoinvestorinfraworld.com/properties/${property.category.toLowerCase().replace(/ /g, "-")}` },
              { "@type": "ListItem", "position": 3, "name": property.name, "item": `https://indoinvestorinfraworld.com/property/${property.slug}` }
            ]
          }
        }
      : undefined,
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-heading font-bold text-foreground">Property Not Found</h1>
        <button onClick={() => navigate("/")} className="text-primary font-body text-sm hover:underline">
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </motion.button>

          {/* Hero Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[380px] md:h-[480px] shadow-luxury mb-3">
              <img
                src={property.gallery[activeImage]}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 photo-overlay-soft" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {property.tags.map((tag) => (
                  <span key={tag} className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-body px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {property.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Location */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  {property.locationDetail}
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xl sm:text-2xl font-heading font-bold text-gradient-gold">{property.price}</span>
                  {property.priceNote && (
                    <span className="text-xs text-muted-foreground font-body">{property.priceNote}</span>
                  )}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {[
                  { icon: Shield, label: "Status", value: property.status },
                  { icon: Ruler, label: "Size", value: property.size },
                  { icon: Building2, label: "Config", value: property.config },
                  { icon: Users, label: "Reviews", value: `${property.reviews} Reviews` },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-3 sm:p-4 border border-border/50">
                    <stat.icon className="w-4 h-4 text-primary mb-1.5" />
                    <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xs font-heading font-semibold text-foreground mt-0.5 leading-tight">{stat.value}</p>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-3">About This Project</h2>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{property.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-4">Key Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground/80 font-body">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Connectivity */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-4">Location & Connectivity</h2>
                <div className="space-y-2">
                  {property.connectivity.map((c) => (
                    <div key={c} className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground/80 font-body">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-4">
                  Amenities <span className="text-muted-foreground text-sm font-normal">({property.amenities.length})</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2.5">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-xs font-body text-foreground/80">{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-4">Client Reviews</h2>
                <div className="space-y-4">
                  {property.clientReviews.map((review) => (
                    <div key={review.name} className="border-b border-border/30 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs font-heading font-bold text-primary">{review.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-heading font-semibold text-foreground">{review.name}</p>
                          <div className="flex gap-0.5">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground font-body pl-10">{review.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50"
              >
                <h2 className="text-lg font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {property.faqs.map((faq, i) => (
                    <div key={i} className="border border-border/30 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="text-xs sm:text-sm font-body font-medium text-foreground pr-4">{faq.question}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4">
                          <p className="text-xs text-muted-foreground font-body leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* CTA Card */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 sticky top-24"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{property.price}</h3>
                {property.priceNote && (
                  <p className="text-xs text-muted-foreground font-body mb-4">{property.priceNote}</p>
                )}

                <a
                  href="tel:+919910464557"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3 font-body text-sm font-medium hover:opacity-90 transition-opacity mb-3"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919910464557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-glass text-foreground rounded-full py-3 font-body text-sm hover:bg-secondary transition-colors"
                >
                  WhatsApp Enquiry
                </a>

                {/* Payment Plan */}
                <div className="mt-6">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-3">Payment Plan</h4>
                  <div className="space-y-2">
                    {property.paymentPlan.map((step, i) => (
                      <div key={i} className="flex items-center justify-between text-xs font-body">
                        <span className="text-muted-foreground">{step.stage}</span>
                        <span className="text-foreground font-medium">{step.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-body uppercase tracking-wider text-muted-foreground">Developer</span>
                  </div>
                  <p className="text-sm font-heading font-semibold text-foreground">{property.developer}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{property.developerDesc}</p>
                </div>

                {/* Why Invest */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-3">Why Invest?</h4>
                  <div className="space-y-2">
                    {property.whyInvest.map((reason) => (
                      <div key={reason} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80 font-body">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
