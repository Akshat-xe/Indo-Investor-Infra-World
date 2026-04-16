import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Property Investor",
    location: "Delhi",
    text: "Indo Investor guided me through my first commercial property purchase in Noida. Their transparency and professionalism gave me complete confidence. My investment has appreciated 40% in just 2 years.",
    rating: 5,
  },
  {
    name: "Priya Malhotra",
    role: "Homeowner",
    location: "Gurgaon",
    text: "We were looking for a family villa near Noida. The team not only found us the perfect home but handled everything from legal verification to registration. Truly end-to-end support.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Channel Partner",
    location: "Mumbai",
    text: "As a channel partner, working with Indo Investor has been exceptional. Their verified project portfolio and transparent commission structure make them the best in the NCR market.",
    rating: 5,
  },
  {
    name: "Sunita Verma",
    role: "NRI Investor",
    location: "Dubai",
    text: "Being an NRI, I was concerned about investing in Indian real estate remotely. Indo Investor made the entire process seamless — from virtual site visits to complete documentation via video calls.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-section-light overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12vw] font-heading font-extrabold uppercase text-background/[0.04] leading-none">
          VOICES
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-glow" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-accent-foreground/50">
              Testimonials
            </span>
            <div className="w-8 h-px bg-gold-glow" />
          </div>
          <h2 className="text-display text-[10vw] xs:text-4xl sm:text-5xl text-accent-foreground break-words w-full max-w-full">
            What Our <span className="text-gold-glow">Clients</span> Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-accent-foreground rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:shadow-luxury transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-foreground/[0.04]" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-primary">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
