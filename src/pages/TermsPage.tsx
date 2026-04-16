import { motion } from "framer-motion";
import { Shield, AlertTriangle, FileText, Lock, Phone, Scale, Globe, RefreshCw } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the website, mobile application, or services of Indo Investor Infra World ('Company', 'we', 'us', 'our'), you agree to be bound by these Terms and Conditions ('Terms') in their entirety.",
      "These Terms constitute a legally binding agreement between you ('User', 'you', 'your') and Indo Investor Infra World. If you do not agree to these Terms, you must immediately discontinue use of our platform and services.",
      "We reserve the right to modify these Terms at any time. Continued use of our services following any modification constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "2. Investment Disclaimer",
    content: [
      "Real estate investments involve inherent risks. Past performance, appreciation data, and projected returns presented on this platform are for informational purposes only and do not constitute a guarantee of future results.",
      "All investment decisions should be made after careful consideration of your financial situation, risk tolerance, and investment objectives. We strongly recommend consulting with a qualified financial advisor or legal counsel before making any investment.",
      "The appreciation percentages (e.g., '15–40% YoY') referenced on this platform are based on historical market data and expert analysis. Actual returns may vary significantly based on market conditions, regulatory changes, and other factors beyond our control.",
      "Indo Investor Infra World does not guarantee any specific rate of return, rental income, or capital appreciation on any property listed on our platform.",
    ],
  },
  {
    icon: Shield,
    title: "3. Property Listings & Information",
    content: [
      "All property listings on our platform are presented in good faith based on information provided by developers, project teams, and market research. We make reasonable efforts to ensure accuracy but cannot guarantee that all details are current, complete, or free from error.",
      "Project images, renders, floor plans, and specifications are indicative and may differ from the final delivered product. Any specifications provided by developers are subject to change without prior notice.",
      "RERA registration details, approvals, and legal status of properties are sourced from developers and public records. Users are advised to independently verify all legal and regulatory information before making any purchase decision.",
      "Pricing, availability, and promotional offers are subject to change without notice. Final pricing shall be confirmed at the time of booking as per the developer's current price list and agreement.",
    ],
  },
  {
    icon: Lock,
    title: "4. Privacy & Data Protection",
    content: [
      "Indo Investor Infra World is committed to protecting your personal information. Data collected through our platform (name, contact details, preferences) is used solely for providing real estate services, responding to enquiries, and improving user experience.",
      "We do not sell, rent, or share your personal data with third parties for marketing purposes without your explicit consent. Data may be shared with developers, channel partners, and service providers solely to facilitate your property enquiry or purchase.",
      "By submitting your contact information on our platform, you consent to receive property-related communications via call, SMS, email, or WhatsApp. You may opt out of communications at any time by contacting us at info@indoinvestorinfraworld.com.",
      "We implement industry-standard security measures to protect your data. However, no online transmission is 100% secure and we cannot guarantee absolute security of transmitted data.",
    ],
  },
  {
    icon: Scale,
    title: "5. RERA Compliance & Legal Framework",
    content: [
      "Indo Investor Infra World operates in compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA) and all applicable state-level real estate regulations.",
      "We only list properties that are registered with the relevant state RERA authority or are in the process of registration as required by law. RERA registration numbers are provided on individual property detail pages where applicable.",
      "All disputes arising from property transactions shall be governed by applicable RERA regulations and the jurisdiction of the competent authority/court in Uttar Pradesh or the state where the property is located.",
      "Users are encouraged to verify RERA registration and project details independently on the official state RERA websites (e.g., up-rera.in for Uttar Pradesh, rera.gujrat.gov.in for Gujarat).",
    ],
  },
  {
    icon: Globe,
    title: "6. User Obligations & Conduct",
    content: [
      "You agree to use our platform only for lawful purposes related to real estate enquiry, research, and investment. Any misuse, fraud, or misrepresentation on our platform is strictly prohibited.",
      "You agree not to engage in activities that may harm our platform, servers, or reputation including unauthorized data scraping, impersonation, or submission of false information.",
      "The content on this platform (property descriptions, images, articles, market data) is the intellectual property of Indo Investor Infra World or its licensors. Reproduction or distribution without written permission is prohibited.",
      "You are solely responsible for the accuracy of information you provide during property enquiry or booking. Any misinformation may result in cancellation of the booking without refund of booking amount.",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Cancellation & Refund Policy",
    content: [
      "Booking amounts and token deposits are generally non-refundable unless specified otherwise in the developer's agreement or applicable law. Please review the developer's specific cancellation policy before making any payment.",
      "In case of project cancellation by the developer, refunds shall be governed by RERA regulations and the specific terms of the allotment agreement entered into with the developer.",
      "Service fees, if any, charged by Indo Investor Infra World for facilitation services are non-refundable once services have been rendered.",
      "For any refund-related queries, please contact our team at info@indoinvestorinfraworld.com with your booking reference number.",
    ],
  },
  {
    icon: Phone,
    title: "8. Contact & Grievance Redressal",
    content: [
      "For any queries, complaints, or grievance related to our services, please contact:",
      "Indo Investor Infra World | H-169, 1st Floor, Office No. F-04 | Sector-63, Noida, U.P. 201301",
      "Email: info@indoinvestorinfraworld.com | Phone: +91 99104 64557",
      "We aim to respond to all grievances within 5 working days. Unresolved complaints may be escalated to the relevant state RERA authority or consumer forum as appropriate.",
    ],
  },
];

const TermsPage = () => {
  usePageSEO({
    title: "Terms & Conditions | Indo Investor Infra World",
    description: "Terms and Conditions governing use of Indo Investor Infra World's platform and real estate investment services. Includes investment disclaimer, liability, and user obligations.",
    canonical: "/terms",
    noIndex: false,
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-primary/5 border-b border-border/30">
          <div className="mx-auto max-w-4xl px-4 md:px-8 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">Legal</span>
              </div>
              <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                Terms &<br />
                <span className="text-gradient-gold">Conditions</span>
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-base max-w-xl leading-relaxed">
                Please read these Terms and Conditions carefully before using Indo Investor Infra World's
                platform and services. These terms govern your use of our website and real estate services.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <span className="text-xs font-body text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-full">
                  Last updated: April 2025
                </span>
                <span className="text-xs font-body text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-full">
                  Version 2.1
                </span>
                <span className="text-xs font-body text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                  RERA Compliant
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 md:px-8 py-12">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="bg-glass rounded-2xl p-6 md:p-8 border border-border/40"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h2 className="text-base sm:text-lg font-heading font-bold text-foreground">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-sm text-muted-foreground font-body leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/15 text-center"
          >
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm font-heading font-semibold text-foreground mb-2">
              Questions about these Terms?
            </p>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Our legal team is happy to clarify any aspect of these Terms and Conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@indoinvestorinfraworld.com"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
              >
                Email Our Legal Team
              </a>
              <a
                href="https://wa.me/919910464557"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-glass border border-border/40 text-foreground px-6 py-2.5 rounded-full text-sm font-body hover:border-primary/30 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
