import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon, ChevronDown, ArrowUpRight } from "lucide-react";
import logoPng from "@/assets/logo.png";
import { useTheme } from "next-themes";
import { Link, useNavigate, useLocation } from "react-router-dom";

const propertyCategories = [
  { label: "Residential", slug: "residential", desc: "Plots & Townships" },
  { label: "Commercial", slug: "commercial", desc: "Offices, Co-Working & Retail" },
  { label: "Office Space", slug: "office-space", desc: "Premium Office & Retail" },
  { label: "Co-Working Space", slug: "co-working-space", desc: "Flexible Workspaces" },
];

// All nav items — anchors navigate to home page sections (work cross-page)
const navLinks = [
  { label: "Home", to: "/", type: "anchor" },
  { label: "About Us", to: "/#about", type: "anchor" },
  { label: "Videos", to: "/videos", type: "route" },
  { label: "Properties", to: "", type: "dropdown" },
  { label: "Careers", to: "/careers", type: "route" },
  { label: "Contact Us", to: "/#contact", type: "anchor" },
];

/* ── Theme Toggle ── */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-full flex items-center justify-center bg-secondary/40 dark:bg-secondary/60 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -120, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 120, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {isDark
            ? <Sun className="w-[17px] h-[17px] text-amber-400 group-hover:text-amber-300 transition-colors" />
            : <Moon className="w-[17px] h-[17px] text-primary group-hover:text-primary/80 transition-colors" />
          }
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

/* ── Properties Dropdown ── */
const PropertiesDropdown = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
    >
      <div className="flex justify-center mb-[-1px]">
        <div className="w-3 h-3 bg-background/98 dark:bg-card border-l border-t border-border/40 rotate-45 translate-y-[7px]" />
      </div>
      <div className="bg-background/98 dark:bg-card backdrop-blur-2xl rounded-2xl border border-border/40 shadow-luxury overflow-hidden min-w-[230px]">
        <div className="p-2">
          {propertyCategories.map((cat, i) => (
            <motion.button
              key={cat.slug}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.16 }}
              onClick={() => { navigate(`/properties/${cat.slug}`); onClose(); }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/8 dark:hover:bg-secondary/70 transition-colors group/item text-left"
            >
              <div>
                <p className="text-sm font-body font-medium text-foreground group-hover/item:text-primary transition-colors">{cat.label}</p>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">{cat.desc}</p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
            </motion.button>
          ))}
        </div>
        <div className="border-t border-border/20 px-3 py-2">
          <button
            onClick={() => { navigate("/#properties"); onClose(); }}
            className="w-full text-center text-xs font-body text-primary hover:opacity-80 transition-opacity py-1"
          >
            Browse All Collections →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Navbar ── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isPropertiesSection = location.pathname.startsWith("/properties");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname, location.hash]);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 120);
  };

  // Determine active state per link
  const isActive = (link: typeof navLinks[0]) => {
    if (link.type === "route") return location.pathname === link.to;
    if (link.type === "dropdown") return isPropertiesSection;
    if (link.type === "anchor") {
      if (link.to === "/") return isHome && !location.hash;
      const hash = link.to.split("#")[1];
      return isHome && location.hash === `#${hash}`;
    }
    return false;
  };

  const activeCls = "text-foreground bg-secondary/70 dark:bg-secondary/80";
  const idleCls = "text-muted-foreground hover:text-foreground hover:bg-secondary/40 dark:hover:bg-secondary/30";

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-3 pt-2 sm:pt-3 lg:px-5 lg:pt-3.5"
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${scrolled
            ? "bg-background/95 dark:bg-background/92 backdrop-blur-3xl shadow-luxury border-border/50"
            : "bg-background/80 dark:bg-card/60 backdrop-blur-2xl border-border/35"
            } border`}
        >
          <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center"
              >
                <img src={logoPng} alt="Indo Investor Infra World Logo" className="w-9 h-9 object-contain" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-[13px] text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                  Indo Investor
                </span>
                <span className="font-body text-[9px] text-muted-foreground uppercase tracking-[0.2em] leading-tight">
                  Infra World
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5 rounded-full px-1 py-1 flex-shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link);
                const cls = `${active ? activeCls : idleCls} transition-all duration-200`;

                if (link.type === "dropdown") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-1.5 text-sm font-body font-medium rounded-full ${cls}`}
                      >
                        {link.label}
                        <motion.span animate={{ rotate: showDropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {showDropdown && (
                          <PropertiesDropdown onClose={() => setShowDropdown(false)} />
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.div key={link.label} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={link.to}
                      className={`block px-4 py-1.5 text-sm font-body font-medium rounded-full ${cls}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <motion.a
                href="https://wa.me/919910464557"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow-primary"
              >
                <Phone className="w-3.5 h-3.5" />
                Book a Visit
              </motion.a>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground bg-secondary/40 border border-border/40 active:scale-90 transition-all"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            <div className="relative z-10 flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto">
              {/* Nav Links */}
              <div className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, i) => {
                  const itemCls = "flex items-center justify-between text-2xl font-heading font-bold text-foreground dark:text-white hover:text-primary active:text-primary transition-colors py-3 border-b border-border/20";
                  const motionBase = {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { delay: 0.05 * i, duration: 0.25 },
                  };

                  if (link.type === "dropdown") {
                    return (
                      <motion.div key={link.label} {...motionBase}>
                        <button
                          className={itemCls + " w-full text-left"}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          {link.label}
                          <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
                        </button>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={link.label} {...motionBase}>
                      <Link to={link.to} onClick={() => setIsOpen(false)} className={itemCls}>
                        {link.label}
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Property Categories on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="mb-8"
              >
                <p className="text-[10px] font-body uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Property Categories
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {propertyCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/properties/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="bg-secondary/50 rounded-xl px-4 py-3 active:bg-primary/10 transition-colors"
                    >
                      <p className="text-sm font-body font-semibold text-foreground">{cat.label}</p>
                      <p className="text-[11px] text-muted-foreground">{cat.desc}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.a
                href="https://wa.me/919910464557"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-body text-base font-semibold shadow-glow-primary active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Book a Visit — +91 99104 64557
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
