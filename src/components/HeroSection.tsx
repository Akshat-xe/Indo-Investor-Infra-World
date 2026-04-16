import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allProperties, categories } from "@/data/properties";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const categorySlugMap: Record<string, string> = {
  Residential: "residential",
  Commercial: "commercial",
  "Office Space": "office-space",
  "Co-Working Space": "co-working-space",
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Start at a random index, then cycle every 5s
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.floor(Math.random() * heroImages.length)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    const catMatch = categories.find(
      (c) =>
        c.key.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q))
    );
    if (catMatch) {
      navigate(`/properties/${categorySlugMap[catMatch.key]}`);
      return;
    }

    const propMatch = allProperties.find(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.slug.includes(q) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
    );
    if (propMatch) {
      navigate(`/property/${propMatch.slug}`);
      return;
    }

    navigate("/#properties");
  };

  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient grain-overlay overflow-hidden flex flex-col">
      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] sm:text-[18vw] font-heading font-extrabold uppercase text-foreground/[0.03] leading-none whitespace-nowrap">
          LUXURY
        </span>
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow behind building */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-glow/10 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 md:px-8 pt-24 md:pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
              Redefining Realty
            </span>
          </div>

          <h1 className="text-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1]">
            Experience
            <br />
            <span className="text-gradient-gold">Luxury</span>
            <br />
            Living
          </h1>

          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-body max-w-md leading-relaxed">
            Discover premium properties across Noida, Greater Noida, Jewar & Dholera.
            Turn your dreams into assets with India's most trusted real estate investment firm.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
            className="flex items-center bg-glass rounded-full pl-4 sm:pl-5 pr-2 py-2 max-w-lg mt-2"
          >
            <Search className="w-4 h-4 text-muted-foreground mr-2 sm:mr-3 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find Project, Builder or Location"
              className="flex-1 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none min-w-0"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground rounded-full p-2.5 hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick stats */}
          <div className="flex items-center gap-3 xs:gap-6 sm:gap-8 mt-3 flex-wrap">
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-foreground">25,500+</p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground font-body">Happy Customers</p>
            </div>
            <div className="w-px h-6 xs:h-8 sm:h-10 bg-border" />
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-foreground">750+</p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground font-body">Channel Partners</p>
            </div>
            <div className="w-px h-6 xs:h-8 sm:h-10 bg-border hidden xs:block" />
            <div className="hidden xs:block">
              <p className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-foreground">500+</p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground font-body">Professionals</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Rotating building */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px]">
            {/* Architectural annotation lines */}
            <div className="absolute -left-12 top-1/4 hidden lg:flex items-center gap-2">
              <span className="text-[10px] font-body text-muted-foreground/60 uppercase tracking-widest">Elevation A</span>
              <div className="w-8 h-px bg-muted-foreground/20" />
            </div>
            <div className="absolute -right-8 top-1/3 hidden lg:flex items-center gap-2">
              <div className="w-6 h-px bg-primary/40" />
              <span className="text-[10px] font-body text-primary/60 uppercase tracking-widest">Glass Curtain</span>
            </div>
            <div className="absolute -right-6 bottom-1/3 hidden lg:flex items-center gap-2">
              <div className="w-6 h-px bg-muted-foreground/20" />
              <span className="text-[10px] font-body text-muted-foreground/60 uppercase tracking-widest">Concrete Core</span>
            </div>

            {/* Crossfade image carousel */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[580px] animate-float" style={{ animationDuration: '8s' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={heroImages[activeIndex]}
                  alt="Premium architectural building"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                />
              </AnimatePresence>
            </div>

            {/* Dot indicator */}
            <div className="flex justify-center gap-1.5 mt-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 h-1.5 bg-primary"
                      : "w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Building ${i + 1}`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-4 bg-glass rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3"
            >
              <p className="text-[10px] sm:text-xs text-muted-foreground font-body">Prime Locations</p>
              <p className="text-xs sm:text-sm font-heading font-bold text-foreground">Noida · Jewar · Dholera</p>
            </motion.div>

            {/* Top-right floating spec badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute top-6 sm:top-8 -right-1 sm:-right-2 bg-glass rounded-xl px-3 sm:px-4 py-2 hidden sm:block"
            >
              <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">Starting</p>
              <p className="text-sm font-heading font-bold text-primary">₹45 Lac*</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
      >
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-muted-foreground/60">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
