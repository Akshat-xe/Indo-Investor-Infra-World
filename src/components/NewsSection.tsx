import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, TrendingUp, Bookmark } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Smart Cities",
    badge: "Hot",
    title: "Dholera Smart City Breaks Ground on New Industrial Zone — Investment Activity Surges",
    excerpt:
      "Construction on Dholera SIR's Phase II industrial zone has accelerated, attracting institutional investors and early retail buyers. Government-backed infrastructure spending crosses ₹1 lakh crore mark, making it India's most ambitious urban development project.",
    readTime: "3 min",
    date: "Apr 2025",
    accent: "text-amber-500",
    bg: "from-amber-500/8",
  },
  {
    id: 2,
    category: "Airport Corridor",
    badge: "Trending",
    title: "Noida International Airport Enters Final Construction Phase — Realty Values Up 3x",
    excerpt:
      "As Asia's largest upcoming airport nears completion in Jewar, real estate values in the surrounding 30-km radius have tripled from 2021 levels. Experts predict further 40% appreciation once operations begin — early investors are already reaping massive gains.",
    readTime: "4 min",
    date: "Mar 2025",
    accent: "text-sky-500",
    bg: "from-sky-500/8",
  },
  {
    id: 3,
    category: "Commercial Trends",
    badge: "Analysis",
    title: "Co-Working Spaces See 3x Demand Surge — Small Investors Find New Entry Points from ₹6L",
    excerpt:
      "The post-pandemic shift toward flexible workspaces has created a surge in co-working investments. With lease-guaranteed pods now available from ₹6 Lakh and assured returns of ~12% per annum, co-working has emerged as 2025's most accessible investment category.",
    readTime: "5 min",
    date: "Mar 2025",
    accent: "text-emerald-500",
    bg: "from-emerald-500/8",
  },
  {
    id: 4,
    category: "Regulatory",
    badge: "Update",
    title: "RERA Compliance Crosses 92% Across Delhi-NCR — Buyer Confidence at All-Time High",
    excerpt:
      "India's real estate regulatory authority reports record-high compliance in the NCR region, with over 92% of new launches now fully RERA registered. This shift toward regulatory accountability has directly boosted investor confidence, with registrations up 38% year-on-year.",
    readTime: "3 min",
    date: "Feb 2025",
    accent: "text-violet-500",
    bg: "from-violet-500/8",
  },
  {
    id: 5,
    category: "Market Report",
    badge: "Must Read",
    title: "Expressway Corridors Emerge as NCR's Fastest-Appreciating Real Estate Belt in 2025",
    excerpt:
      "Noida–Greater Noida Expressway micro-markets have delivered 15–22% YoY appreciation, outperforming traditional residential zones. Analysts attribute this to infrastructure upgrades, metro expansion, and the airport effect — making expressway plots the decade's best-performing asset class.",
    readTime: "6 min",
    date: "Jan 2025",
    accent: "text-rose-500",
    bg: "from-rose-500/8",
  },
];

const AUTOPLAY_MS = 5000;

const NewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % articles.length);
  const prev = () => setCurrent((c) => (c - 1 + articles.length) % articles.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, current]);

  const article = articles[current];

  return (
    <section id="news" className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">
                News & Insights
              </span>
            </div>
            <h2 className="text-display text-[10vw] xs:text-4xl sm:text-5xl text-foreground break-words w-full max-w-full">
              Market <span className="text-gradient-gold">Pulse</span>
            </h2>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-body text-muted-foreground">
              {current + 1} / {articles.length}
            </span>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-glass border border-border/40 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all active:scale-90"
              aria-label="Previous article"
            >
              <ArrowLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity active:scale-90"
              aria-label="Next article"
            >
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Featured Article Slider */}
        <div
          className="mb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative bg-glass rounded-2xl overflow-hidden border border-border/40 p-6 md:p-10 bg-gradient-to-br ${article.bg} to-transparent card-hover-glow`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Left: content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`text-[10px] font-body font-bold uppercase tracking-[0.2em] ${article.accent} bg-current/[0.12] border border-current/25 px-2.5 py-1 rounded-full`}>
                      {article.badge}
                    </span>
                    <span className="text-xs font-body text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground font-body">
                      <Clock className="w-3 h-3" />
                      {article.readTime} read
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <span className="text-xs text-muted-foreground font-body">{article.date}</span>
                    <div className="w-px h-3 bg-border" />
                    <button className="flex items-center gap-1.5 text-xs font-body text-primary hover:opacity-80 transition-opacity">
                      <Bookmark className="w-3 h-3" />
                      Save Article
                    </button>
                  </div>
                </div>

                {/* Right: stat bubble */}
                <div className="lg:w-[200px] shrink-0">
                  <div className="bg-glass rounded-2xl p-5 text-center border border-border/30">
                    <TrendingUp className={`w-8 h-8 ${article.accent} mx-auto mb-2`} />
                    <p className="text-xs text-muted-foreground font-body mb-1">Market Impact</p>
                    <p className="text-2xl font-heading font-bold text-foreground">
                      {current === 0 ? "₹1L Cr" : current === 1 ? "3x" : current === 2 ? "12% p.a." : current === 3 ? "+38%" : "22% YoY"}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-body mt-1">
                      {current === 0 ? "Govt. Investment" : current === 1 ? "Value Growth" : current === 2 ? "Assured Returns" : current === 3 ? "Registration Rise" : "Appreciation"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              {!paused && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/30">
                  <motion.div
                    className={`h-full bg-primary/60`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    key={current}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pills */}
        <div className="flex justify-center gap-2">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Article ${i + 1}`}
            />
          ))}
        </div>

        {/* Compact Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-8">
          {articles.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setCurrent(i)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                i === current
                  ? "border-primary/40 bg-primary/8"
                  : "border-border/30 bg-glass hover:border-border/60"
              }`}
            >
              <span className={`text-[9px] font-body uppercase tracking-wider ${i === current ? "text-primary" : "text-muted-foreground"}`}>
                {a.category}
              </span>
              <p className={`text-xs font-heading font-semibold mt-1 leading-tight line-clamp-2 ${i === current ? "text-foreground" : "text-muted-foreground"}`}>
                {a.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
