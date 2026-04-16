import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
  {
    id: "KZE5oDtBz0A",
    title: "Understanding Real Estate Sector",
    category: "Market Basics",
  },
  {
    id: "_-4FA_b7xGs",
    title: "All About Real Estate Investment",
    category: "Investment Guide",
  },
  {
    id: "7VODVfTlPWU",
    title: "Deep Dive Into Real Estate Investing & Sector Analysis",
    category: "Sector Analysis",
  },
  {
    id: "utSvq5v7uHo",
    title: "Dr. Hiranandani — The King of Real Estate Business Worth ₹12,000 Crores",
    category: "Industry Leader",
  },
  {
    id: "JzIARrtixyI",
    title: "Gurgaon Real Estate 2025",
    category: "Market Insights",
  },
];

const VideoPage = () => {
  usePageSEO({
    title: "Real Estate Investment Videos & Market Insights | Indo Investor Infra World",
    description: "Watch expert real estate videos on Dholera Smart City, Jewar Airport Zone, RERA compliance, and NCR investment trends. Curated market insights from India's top real estate analysts.",
    canonical: "/videos",
    schema: {
      "@context": "https://schema.org",
      "@type": "VideoGallery",
      "name": "Real Estate Investment Video Library — Indo Investor Infra World",
      "description": "Curated real estate investment videos covering NCR, Dholera, Jewar, co-working trends, and market analysis.",
      "url": "https://indoinvestorinfraworld.com/videos",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://indoinvestorinfraworld.com/" },
          { "@type": "ListItem", "position": 2, "name": "Videos", "item": "https://indoinvestorinfraworld.com/videos" }
        ]
      }
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-primary/5 border-b border-border/30">
          <div className="mx-auto max-w-6xl px-4 md:px-8 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">Media</span>
              </div>
              <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                Videos &<br />
                <span className="text-gradient-gold">Insights</span>
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-base max-w-xl leading-relaxed">
                Expert real estate market analysis, investment guides, and industry insights curated for smart investors.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((video, i) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/40 card-hover-glow cursor-pointer block"
              >
                {/* YouTube Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-secondary/40">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-0.5">
                    <span className="text-[9px] font-body text-white/90 uppercase tracking-wider">{video.category}</span>
                  </div>

                  {/* YouTube icon top-right */}
                  <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-heading font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-body">Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/15 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <p className="text-sm font-heading font-semibold text-foreground mb-1">
              Want a personalised property walkthrough?
            </p>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Our team arranges free site visit videos for all our listings — book yours today.
            </p>
            <a
              href="https://wa.me/919910464557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              Request a Site Tour Video
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
