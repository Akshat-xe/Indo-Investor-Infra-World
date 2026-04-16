import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, FileCheck, HeartHandshake } from "lucide-react";
import officeFront from "@/assets/office-front.png";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every property is legally verified, RERA registered, and thoroughly documented before we recommend it.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation",
    desc: "Locations are handpicked for maximum growth potential — 15–40% YoY appreciation across our portfolio.",
  },
  {
    icon: FileCheck,
    title: "Transparent Deals",
    desc: "No hidden charges, no surprises. Complete clarity at every step from booking to registration.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    desc: "Our dedicated team stays with you post-purchase for maintenance, rental management, and resale.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
            Invest With
            <br />
            <span className="text-gradient-gold">Confidence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Office photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px] order-2 lg:order-1"
          >
            {/* Primary photo — front with logo */}
            <div className="relative rounded-3xl overflow-hidden shadow-luxury z-10 h-full w-full group">
              <img
                src={officeFront}
                alt="Indo Investor Infra World Office — Sector 63, Noida"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Soft gradient just for text readability at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-[10px] font-body uppercase tracking-[0.2em] mb-4 shadow-glow-primary">Our Headquarters</span>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 leading-tight">Indo Investor<br />Infra World</p>
                <p className="text-sm text-white/80 font-body">H-169, Sector 63, Noida</p>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="absolute -top-4 sm:top-8 -right-4 sm:-right-8 bg-glass border border-primary/30 rounded-2xl px-6 py-5 shadow-glow-primary z-20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-foreground leading-none mb-1">25K+</p>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 4 reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i + 0.15, duration: 0.5 }}
                className="bg-glass rounded-2xl p-3.5 sm:p-5 flex flex-col gap-2 sm:gap-3 hover:border-primary/30 card-hover-glow transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <r.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xs sm:text-base leading-tight">
                  {r.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-muted-foreground font-body leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
