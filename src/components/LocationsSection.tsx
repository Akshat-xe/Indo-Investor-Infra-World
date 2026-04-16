import { motion } from "framer-motion";
import { MapPin, TrendingUp, Satellite } from "lucide-react";
import { Link } from "react-router-dom";
import alphathumHero from "@/assets/alphathum-hero.jpg";
import propertyCommercial from "@/assets/property-commercial.jpg";
import propertyPlots from "@/assets/property-plots.jpg";
import greenVistaHero from "@/assets/green-vista-hero.jpg";

const locations = [
  {
    name: "Noida",
    highlight: "NCR's Tech & Business Hub",
    appreciation: "12–18% YoY",
    projects: "120+",
    desc: "Home to IT parks, metro connectivity, world-class infrastructure, and premium co-working hubs. Sectors 90, 140A, and 62–63 drive commercial demand.",
    tags: ["Metro Connected", "IT Hub", "Airport Link"],
    image: alphathumHero,
    mapLink: "https://maps.google.com/maps?q=Noida+Uttar+Pradesh+India&t=k",
    propertyLink: "/properties/commercial",
    propertyLabel: "View Properties",
  },
  {
    name: "Greater Noida",
    highlight: "Affordable Luxury Belt",
    appreciation: "15–22% YoY",
    projects: "85+",
    desc: "Rapidly developing with expressway connectivity, sports university, and Formula 1 circuit. Greater Noida West offers excellent value with high growth trajectory.",
    tags: ["Expressway", "Budget Luxury", "Sports City"],
    image: propertyCommercial,
    mapLink: "https://maps.google.com/maps?q=Greater+Noida+Uttar+Pradesh+India&t=k",
    propertyLink: "/properties/commercial",
    propertyLabel: "View Properties",
  },
  {
    name: "Jewar",
    highlight: "India's Emerging Goldmine",
    appreciation: "25–40% YoY",
    projects: "45+",
    desc: "Home to Noida International Airport — Asia's largest. Investments here have shown 3–5x returns in 3 years. Early investors are already seeing massive gains.",
    tags: ["Airport Zone", "Highest Growth", "Land Deals"],
    image: propertyPlots,
    mapLink: "https://maps.google.com/maps?q=Jewar+International+Airport+Uttar+Pradesh&t=k",
    propertyLink: null,
    propertyLabel: "Explore Zone",
  },
  {
    name: "Dholera",
    highlight: "Gujarat's Smart City",
    appreciation: "20–35% YoY",
    projects: "30+",
    desc: "India's first greenfield smart city under DMIC Corridor. Government-backed infrastructure worth ₹1 lakh crore. Perfect for long-term wealth creation with plotted developments.",
    tags: ["Smart City", "DMIC Corridor", "Govt. Approved"],
    image: greenVistaHero,
    mapLink: "https://maps.google.com/maps?q=Dholera+Smart+City+Gujarat+India&t=k",
    propertyLink: "/property/green-vista-residential-township-dholera",
    propertyLabel: "View Project",
  },
];

const LocationsSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
              Investment Zones
            </span>
          </div>
          <h2 className="text-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
            Prime Growth
            <br />
            <span className="text-gradient-gold">Locations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden h-full shadow-card card-hover-glow">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark overlay — visible in both themes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/50 to-black/10" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col min-h-[280px] sm:min-h-[300px]">
                  {/* Top row: location name + satellite button */}
                  <div className="flex items-start justify-between mb-auto">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">{loc.name}</h3>
                      </div>
                      <p className="text-xs font-body text-primary/90 font-medium">{loc.highlight}</p>
                    </div>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-body text-white/80 hover:text-white transition-all duration-200 group/map active:scale-95"
                      title="View satellite map"
                    >
                      <Satellite className="w-3 h-3" />
                      Satellite
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/70 font-body leading-relaxed mt-4 mb-4">
                    {loc.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {loc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body uppercase tracking-wider text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm font-heading font-bold text-white">{loc.appreciation}</span>
                      </div>
                      <div className="w-px h-4 bg-white/20" />
                      <div>
                        <span className="text-sm font-heading font-bold text-white">{loc.projects}</span>
                        <span className="text-[11px] text-white/50 font-body ml-1">projects</span>
                      </div>
                    </div>
                    {loc.propertyLink ? (
                      <Link
                        to={loc.propertyLink}
                        className="text-[11px] font-body font-semibold text-primary bg-primary/15 hover:bg-primary/25 border border-primary/30 px-3.5 py-1.5 rounded-full transition-all duration-200 active:scale-95"
                      >
                        {loc.propertyLabel} →
                      </Link>
                    ) : (
                      <a
                        href={loc.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-body font-semibold text-primary bg-primary/15 hover:bg-primary/25 border border-primary/30 px-3.5 py-1.5 rounded-full transition-all duration-200 active:scale-95"
                      >
                        {loc.propertyLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
