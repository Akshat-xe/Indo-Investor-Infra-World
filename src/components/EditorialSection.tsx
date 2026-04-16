import { motion } from "framer-motion";
import editorialCityscape from "@/assets/editorial-cityscape.jpg";

const EditorialSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={editorialCityscape}
                alt="Premium township development"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
            {/* Annotation line */}
            <div className="absolute -bottom-6 -right-4 hidden lg:flex items-center gap-2">
              <div className="w-16 h-px bg-primary" />
              <span className="text-xs font-body text-muted-foreground uppercase tracking-widest">
                NCR Region
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[8rem] md:text-[10rem] font-heading font-extrabold leading-none text-foreground/[0.04] absolute -top-10 right-0 select-none pointer-events-none hidden lg:block">
              WHY
            </span>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-display text-[7vw] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 break-words w-full max-w-full">
              Invest With
              <br />
              <span className="text-gradient-gold">Confidence</span>
            </h2>

            <div className="space-y-5">
              {[
                { title: "Verified Properties", desc: "Every property is legally verified and documented" },
                { title: "High Appreciation", desc: "Locations selected for maximum growth potential" },
                { title: "Transparent Deals", desc: "No hidden charges, complete clarity at every step" },
                { title: "After-Sales Support", desc: "Dedicated team for post-purchase assistance" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
