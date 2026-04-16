import { motion } from "framer-motion";
import { Shield, MapPin, Users, CheckCircle, TrendingUp, Handshake, Award, Building2 } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "Complete honesty and transparency in every transaction. No hidden charges, no surprises." },
  { icon: MapPin, title: "Prime Locations", desc: "Strategic high-appreciation zones in Noida, Jewar, Dholera & across NCR." },
  { icon: Users, title: "Customer First", desc: "Your financial security and satisfaction are the core of everything we do." },
  { icon: CheckCircle, title: "100% Verified", desc: "Every property is legally verified, RERA registered, and thoroughly documented." },
];

const highlights = [
  { icon: TrendingUp, label: "Growth-Driven", value: "15-25% avg. returns" },
  { icon: Handshake, label: "End-to-End Support", value: "From search to keys" },
  { icon: Award, label: "Award Winning", value: "Trusted since inception" },
  { icon: Building2, label: "Premium Projects", value: "100+ verified listings" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Top: Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 className="text-display text-[10vw] xs:text-4xl sm:text-5xl md:text-6xl text-foreground mb-5 break-words w-full max-w-full">
              Turning Dreams
              <br />
              Into <span className="text-gradient-gold">Assets</span>
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-4 max-w-lg text-sm sm:text-base">
              Founded to make real estate investment simple, transparent, and rewarding — we don't just sell properties, we build lasting wealth through carefully curated opportunities across NCR, Jewar, and Dholera.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed max-w-lg text-sm sm:text-base">
              <span className="text-foreground font-medium">25,500+ happy customers</span>,{" "}
              <span className="text-foreground font-medium">750+ channel partners</span>, and{" "}
              <span className="text-foreground font-medium">500+ professionals</span> — all working to bring you verified projects, honest advice, and end-to-end support.
            </p>
          </motion.div>

          {/* Right: Values Grid — always 2 columns, even on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className="bg-glass rounded-2xl p-4 sm:p-5 flex flex-col gap-2.5 hover:border-primary/30 card-hover-glow transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xs sm:text-sm leading-tight">{v.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="bg-glass rounded-xl p-3.5 sm:p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <h.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-body">{h.label}</p>
                <p className="text-xs sm:text-sm font-heading font-semibold text-foreground leading-tight">{h.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
