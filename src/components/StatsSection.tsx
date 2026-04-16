import { motion } from "framer-motion";

const stats = [
  { number: "25,500+", label: "Happy Customers" },
  { number: "45M", label: "Sq.Ft. Area Sold" },
  { number: "500+", label: "Skilled Professionals" },
  { number: "750+", label: "Channel Associates" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-section-light overflow-hidden">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[14vw] font-heading font-extrabold uppercase text-background/[0.04] leading-none">
          TRUST
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-[10vw] xs:text-4xl sm:text-5xl text-accent-foreground break-words w-full max-w-full">
            Built on <span className="text-gold-glow">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`text-center py-6 ${
                i < stats.length - 1 ? "md:border-r md:border-background/10" : ""
              }`}
            >
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground">
                {stat.number}
              </p>
              <p className="text-sm text-accent-foreground/50 font-body mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
