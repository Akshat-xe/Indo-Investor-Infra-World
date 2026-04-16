import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowUpRight, Users, TrendingUp, Heart } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  {
    title: "Senior Sales Manager",
    location: "Noida, U.P.",
    type: "Full-time",
    dept: "Sales",
  },
  {
    title: "Real Estate Advisor",
    location: "Noida / Remote",
    type: "Full-time",
    dept: "Advisory",
  },
  {
    title: "Channel Partner Manager",
    location: "Delhi NCR",
    type: "Full-time",
    dept: "Partnerships",
  },
  {
    title: "Digital Marketing Executive",
    location: "Noida, U.P.",
    type: "Full-time",
    dept: "Marketing",
  },
  {
    title: "Property Research Analyst",
    location: "Noida / Hybrid",
    type: "Full-time",
    dept: "Research",
  },
  {
    title: "Customer Relationship Executive",
    location: "Noida, U.P.",
    type: "Full-time",
    dept: "CRM",
  },
];

const perks = [
  { icon: TrendingUp, label: "High Growth Trajectory", desc: "Fast-track career path in India's booming realty sector." },
  { icon: Users, label: "Expert Mentorship", desc: "Work alongside seasoned industry veterans and learn every day." },
  { icon: Heart, label: "Great Culture", desc: "Performance-driven yet collaborative — we celebrate team wins." },
];

const CareersPage = () => {
  usePageSEO({
    title: "Careers at Indo Investor Infra World | Real Estate Jobs Noida",
    description: "Join India's fastest-growing real estate investment firm. Open roles in sales, advisory, channel partnerships, and marketing. Based in Sector-63, Noida. Apply today.",
    canonical: "/careers",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Careers — Indo Investor Infra World",
      "description": "Career opportunities at Indo Investor Infra World — real estate sales, advisory, and channel partner roles in Noida.",
      "url": "https://indoinvestorinfraworld.com/careers",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://indoinvestorinfraworld.com/" },
          { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://indoinvestorinfraworld.com/careers" }
        ]
      }
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-primary/5 border-b border-border/30">
          <div className="mx-auto max-w-5xl px-4 md:px-8 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">We're Hiring</span>
              </div>
              <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                Build Your<br />
                <span className="text-gradient-gold">Career</span>
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-base max-w-xl leading-relaxed">
                Join India's fastest-growing real estate investment firm and be part of a team that's redefining the way people invest in property.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 md:px-8 py-12 space-y-12">
          {/* Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-glass rounded-2xl p-5 border border-border/40 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-heading font-semibold text-foreground mb-1">{perk.label}</p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground mb-5">Open Positions</h2>
            <div className="space-y-3">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="bg-glass rounded-2xl px-5 py-4 border border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 card-hover-glow group"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-body">
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                        <div className="w-px h-3 bg-border" />
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-body">
                          <Clock className="w-3 h-3" />{job.type}
                        </span>
                        <div className="w-px h-3 bg-border" />
                        <span className="text-[11px] text-primary font-body">{job.dept}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@indoinvestorinfraworld.com?subject=Application for ${job.title}`}
                    className="flex items-center gap-1.5 text-xs font-body text-primary hover:opacity-80 transition-opacity flex-shrink-0"
                  >
                    Apply Now
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/15 text-center"
          >
            <p className="text-sm font-heading font-semibold text-foreground mb-1">
              Don't see the right fit?
            </p>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Send us your profile and we'll reach out when a suitable role opens up.
            </p>
            <a
              href="mailto:info@indoinvestorinfraworld.com?subject=Open Application — Indo Investor Infra World"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              Send Open Application
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
