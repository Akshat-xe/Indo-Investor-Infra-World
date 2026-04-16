import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, BarChart3, Bell, FileText } from "lucide-react";
import { useState } from "react";

const benefits = [
  { icon: TrendingUp, text: "Weekly market analysis & growth reports" },
  { icon: Bell, text: "Early access to new project launches" },
  { icon: BarChart3, text: "Price trends across NCR, Jewar & Dholera" },
  { icon: FileText, text: "Curated investment recommendations" },
];

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.open(
      `https://wa.me/919910464557?text=Hi, I'd like to subscribe to your investment insights newsletter. My email: ${encodeURIComponent(email)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-glass rounded-3xl p-6 sm:p-8 md:p-14 overflow-hidden border border-border/40"
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gold-glow/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-[10px] sm:text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                  Stay Updated
                </span>
              </div>

              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
                Get Exclusive
                <br />
                <span className="text-gradient-gold">Investment Insights</span>
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground font-body max-w-md mb-6 leading-relaxed">
                Subscribe for curated property picks, market reports, and early access to new launches across NCR and beyond.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <b.icon className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-body leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-background dark:bg-secondary/60 border-2 border-border/60 dark:border-border/40 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm font-body rounded-full px-5 py-3 outline-none transition-all duration-200 shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-body text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity flex-shrink-0 shadow-glow-primary"
                >
                  {submitted ? "Sent! ✓" : (
                    <><span>Subscribe</span><ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>

              <p className="text-[10px] sm:text-[11px] text-muted-foreground/60 font-body text-center sm:text-left px-1">
                Join 12,000+ investors · No spam · Unsubscribe anytime
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
