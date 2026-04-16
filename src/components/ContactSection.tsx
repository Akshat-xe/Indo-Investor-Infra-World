import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "info@indoinvestorinfraworld.com";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-section-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-gold-glow" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-accent-foreground/50">
                Get In Touch
              </span>
            </div>

            <h2 className="text-display text-[10vw] xs:text-4xl sm:text-5xl text-accent-foreground mb-8 break-words w-full max-w-full">
              Let's Build Your
              <br />
              <span className="text-gold-glow">Future</span>
            </h2>

            <div className="space-y-5">
              {/* Phone → WhatsApp */}
              <a
                href="https://wa.me/919910464557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/5 flex items-center justify-center group-hover:bg-gold-glow/10 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-glow" />
                </div>
                <div>
                  <p className="text-xs text-accent-foreground/50 font-body">WhatsApp / Call</p>
                  <p className="font-body text-accent-foreground font-medium group-hover:text-gold-glow transition-colors">
                    +91 99104 64557
                  </p>
                </div>
              </a>

              {/* Email with copy button */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-glow" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-accent-foreground/50 font-body">Email</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-body text-accent-foreground font-medium text-sm hover:text-gold-glow transition-colors truncate"
                    >
                      {EMAIL}
                    </a>
                    <button
                      onClick={copyEmail}
                      title="Copy email address"
                      className={`flex items-center gap-1 text-[10px] font-body px-2 py-0.5 rounded-full border transition-all flex-shrink-0 ${
                        copied
                          ? "bg-green-500/15 border-green-500/40 text-green-500"
                          : "bg-accent-foreground/5 border-accent-foreground/15 text-accent-foreground/50 hover:border-gold-glow/40 hover:text-gold-glow"
                      }`}
                    >
                      {copied ? (
                        <><Check className="w-2.5 h-2.5" /> Copied!</>
                      ) : (
                        <><Copy className="w-2.5 h-2.5" /> Copy</>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Office — opens map */}
              <a
                href="https://maps.google.com/maps?q=H-169+Sector+63+Noida+UP+201301+India&t=k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/5 flex items-center justify-center group-hover:bg-gold-glow/10 transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-glow" />
                </div>
                <div>
                  <p className="text-xs text-accent-foreground/50 font-body">Office — tap to open map</p>
                  <p className="font-body text-accent-foreground font-medium text-sm group-hover:text-gold-glow transition-colors">
                    H-169, 1st Floor, Office No. F-04
                    <br />
                    Sector-63, Noida, U.P. 201301
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-accent-foreground rounded-2xl p-8 shadow-luxury">
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-muted-foreground font-body mb-6">
                Our experts will reach out within 24 hours.
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const parts = [
                    `Hi, I'm ${formData.name}.`,
                    formData.type ? `I'd like to enquire about ${formData.type}.` : "I'd like to enquire about your properties.",
                    formData.phone ? `My phone: ${formData.phone}.` : "",
                    formData.email ? `My email: ${formData.email}.` : "",
                  ].filter(Boolean).join(" ");
                  window.open(`https://wa.me/919910464557?text=${encodeURIComponent(parts)}`, "_blank");
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-4 py-3 text-sm font-body text-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow appearance-none"
                >
                  <option value="" disabled>I am interested in...</option>
                  <option value="Residential Property">Residential Property</option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Co-Working Space">Co-Working Space</option>
                  <option value="Investment Advice">Investment Advice</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-xl px-6 py-3 font-body font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
