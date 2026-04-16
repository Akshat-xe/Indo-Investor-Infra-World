import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logoPng from "@/assets/logo.png";

const socials = [
  { icon: FaFacebookF, href: "https://wa.me/919910464557", label: "Facebook" },
  { icon: FaInstagram, href: "https://wa.me/919910464557", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://wa.me/919910464557", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://wa.me/919910464557", label: "YouTube" },
];

const propertyLinks = [
  { label: "Residential", to: "/properties/residential" },
  { label: "Commercial", to: "/properties/commercial" },
  { label: "Office Space", to: "/properties/office-space" },
  { label: "Co-Working Space", to: "/properties/co-working-space" },
];

const Footer = () => {
  const navigate = useNavigate();

  // Navigate to a section on the home page from any page
  const goToSection = (hash: string) => {
    navigate(`/${hash}`);
  };

  const companyLinks = [
    { label: "Home", action: () => goToSection("") },
    { label: "About Us", action: () => goToSection("#about") },
    { label: "Videos", action: () => navigate("/videos") },
    { label: "All Properties", action: () => navigate("/#properties") },
    { label: "News & Insights", action: () => goToSection("#news") },
    { label: "Careers", action: () => navigate("/careers") },
    { label: "Contact Us", action: () => goToSection("#contact") },
  ];

  const usefulLinks = [
    { label: "Visit Our Office", action: () => goToSection("#contact") },
    { label: "Enquire Now", action: () => goToSection("#contact") },
    { label: "News & Media", action: () => goToSection("#news") },
    { label: "Terms & Conditions", action: () => navigate("/terms") },
    { label: "Privacy Policy", action: () => navigate("/privacy") },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* ── Dream Home CTA — premium floating banner ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-body uppercase tracking-[0.3em] text-primary-foreground/60 mb-2">
                Start Your Journey
              </p>
              <h3 className="font-heading font-bold text-primary-foreground text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                Looking for a<br className="hidden sm:block" /> dream home?
              </h3>
              <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md">
                Our experts help you find the right property — residential, commercial, or investment-grade — across NCR, Dholera, and Jewar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => goToSection("#properties")}
                className="flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Properties
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919910464557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-primary-foreground/25 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-secondary pt-12 sm:pt-14 pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10 sm:mb-12">

            {/* Brand Column */}
            <div className="lg:col-span-1 sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={logoPng} alt="Indo Investor Infra World" className="w-9 h-9 rounded-lg object-contain" />
                <div>
                  <span className="font-heading font-bold text-foreground text-sm block leading-tight">Indo Investor</span>
                  <span className="font-heading font-bold text-muted-foreground text-[10px] block leading-tight">Infra World</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-body leading-relaxed mb-5 max-w-xs">
                A trusted real estate investment firm specialising in RERA-verified, high-return properties across NCR and beyond.
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="https://maps.google.com/maps?q=H-169+Sector+63+Noida+UP+201301+India&t=k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground font-body leading-relaxed hover:text-foreground transition-colors"
                  >
                    H-169, 1st Floor, Office No. F-04<br />Sector-63, Noida, U.P. 201301
                  </a>
                </div>
                <a
                  href="https://wa.me/919910464557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  +91 99104 64557
                </a>
                <a
                  href="mailto:info@indoinvestorinfraworld.com"
                  className="flex items-center gap-2.5 text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  info@indoinvestorinfraworld.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <s.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-foreground text-sm mb-4">Company</h4>
              <div className="flex flex-col gap-2">
                {companyLinks.map((l) => (
                  <button
                    key={l.label}
                    onClick={l.action}
                    className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors text-left"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Properties */}
            <div>
              <h4 className="font-heading font-bold text-foreground text-sm mb-4">Properties</h4>
              <div className="flex flex-col gap-2">
                {propertyLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-heading font-bold text-foreground text-sm mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {usefulLinks.map((l) => (
                  <button
                    key={l.label}
                    onClick={l.action}
                    className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors text-left"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-bold text-foreground text-sm mb-3">Newsletter</h4>
              <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">
                Subscribe to get weekly property updates and market insights.
              </p>
              <form
                className="space-y-2.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/919910464557?text=Hi, I'd like to subscribe to your property updates.", "_blank");
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-muted rounded-lg px-3 py-2 text-xs font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-muted rounded-lg px-3 py-2 text-xs font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-2 text-xs font-body font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] sm:text-xs text-muted-foreground font-body text-center sm:text-left">
              © 2025 Indo Investor Infra World. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="text-[10px] text-muted-foreground font-body hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-[10px] text-muted-foreground font-body hover:text-foreground transition-colors">
                Privacy
              </Link>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-body">
                Developed & Designed by <span className="text-primary font-medium">Akshat Kumar</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
