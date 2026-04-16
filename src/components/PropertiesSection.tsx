import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, getPropertiesByCategory } from "@/data/properties";
import gvEntrance from "@/assets/gv-entrance.png";
import alphathumReal4 from "@/assets/alphathum-hero.jpg";
import cyberthumHero from "@/assets/properties/cyberthum-office/img-1.webp";

const categoryImages: Record<string, string> = {
  Residential: gvEntrance,
  Commercial: alphathumReal4,
  "Office Space": cyberthumHero,
  "Co-Working Space": alphathumReal4,
};

const categorySlugMap: Record<string, string> = {
  Residential: "residential",
  Commercial: "commercial",
  "Office Space": "office-space",
  "Co-Working Space": "co-working-space",
};

const PropertiesSection = () => {
  const [residential, commercial, officeSpace, coWorkingSpace] = categories;

  return (
    <section id="properties" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                Properties
              </span>
            </div>
            <h2 className="text-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
              Curated
              <br />
              <span className="text-gradient-gold">Collections</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 min-h-[400px] md:min-h-[520px]">
          {/* Residential — large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer card-hover-glow h-full"
          >
            <Link to={`/properties/${categorySlugMap[residential.key]}`} className="block h-full">
              <div className="relative rounded-2xl overflow-hidden h-full shadow-card min-h-[400px]">
                <img
                  src={categoryImages[residential.key]}
                  alt={residential.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 photo-overlay-bottom" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground text-xs font-body px-3 py-1 rounded-full font-medium shadow-sm">
                    Featured
                  </span>
                  <span className="bg-black/55 text-white text-xs font-body px-3 py-1 rounded-full backdrop-blur-sm">
                    {getPropertiesByCategory(residential.key).length} Project{getPropertiesByCategory(residential.key).length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {residential.title}
                  </h3>
                  <p className="text-sm text-white/70 font-body mb-2">{residential.subtitle}</p>
                  <p className="text-sm text-white/50 font-body mb-5 max-w-sm line-clamp-2 md:line-clamp-none">{residential.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50 font-body">{residential.location}</span>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-primary">
                      <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="flex flex-col gap-5 h-full">
            {[commercial, officeSpace, coWorkingSpace].map((category, index) => {
              const labels = ["Premium Business Spaces", "Corporate & Startup", "Jewar Region"];
              const locations = ["NCR • Noida", "Sector 63, Noida", "Jewar • Dholera"];
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="group cursor-pointer card-hover-glow flex-1"
                >
                  <Link to={`/properties/${categorySlugMap[category.key]}`} className="block h-full">
                    <div className="relative rounded-2xl overflow-hidden h-full min-h-[140px] shadow-card bg-card/10">
                      <img
                        src={categoryImages[category.key]}
                        alt={category.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                      
                      <div className="absolute inset-y-0 left-0 p-5 md:p-6 flex flex-col justify-center max-w-[70%]">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                            {category.title}
                          </h3>
                          <span className="bg-primary/20 text-primary text-[10px] md:text-xs font-body w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20 shrink-0">
                            {getPropertiesByCategory(category.key).length}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-white/70 font-body mb-1">{labels[index] || category.subtitle}</p>
                        <p className="text-[10px] md:text-xs text-white/40 font-body">{locations[index] || category.location}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
