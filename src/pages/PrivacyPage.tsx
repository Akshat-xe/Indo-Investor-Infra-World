import { motion } from "framer-motion";
import { Shield, Eye, Database, Share2, Lock, Settings, Phone, RefreshCw } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content: [
      "When you visit our website or interact with our services, we may collect personally identifiable information such as your name, email address, phone number, and location preference — only when voluntarily submitted through enquiry forms, WhatsApp, or call.",
      "We also automatically collect non-personal information including browser type, IP address, pages visited, and time spent on site, solely for analytics and improving user experience. This data is aggregated and never linked to individual identities.",
      "Cookies and similar tracking technologies may be used to remember your preferences and improve your browsing experience. You may disable cookies through your browser settings; however, some features of our website may not function properly as a result.",
    ],
  },
  {
    icon: Database,
    title: "2. How We Use Your Information",
    content: [
      "Your personal information is used exclusively for the following purposes: responding to property enquiries, scheduling site visits, sending relevant property updates, and improving the quality of our services.",
      "We may use your contact details to send property recommendations, market updates, project launches, and promotional content related to Indo Investor Infra World's offerings. All such communications are relevant to your expressed investment interest.",
      "We analyse aggregated usage data to improve website performance, identify popular properties, and refine the user journey. This analysis never involves personally identifiable information.",
    ],
  },
  {
    icon: Share2,
    title: "3. Information Sharing & Disclosure",
    content: [
      "Indo Investor Infra World does not sell, trade, or rent your personal information to any third parties for their independent marketing or commercial use. Your data remains under our control at all times.",
      "We may share your information with trusted third parties including property developers, channel partners, and verified real estate agents — solely to fulfil your enquiry or facilitate a property transaction. These parties are bound by confidentiality agreements.",
      "We may disclose information where required by law, regulatory authorities, or in response to legal proceedings. In such cases, we will notify you to the extent permitted by law before making any disclosure.",
    ],
  },
  {
    icon: Lock,
    title: "4. Data Security",
    content: [
      "We implement industry-standard technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our systems are regularly reviewed for vulnerabilities.",
      "All data submitted through our website forms is transmitted using standard encryption protocols. Access to personal data within our organisation is restricted to personnel who require it to fulfil legitimate business purposes.",
      "While we take reasonable precautions to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of data transmitted electronically, and you do so at your own risk.",
    ],
  },
  {
    icon: Settings,
    title: "5. Cookies & Tracking",
    content: [
      "Our website uses cookies — small text files stored on your device — to enhance functionality, analyse traffic, and personalise your experience. Cookies help us understand how visitors use our site, which pages are most viewed, and how we can improve navigation.",
      "We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). You can control cookies via your browser settings. Disabling cookies may affect certain features of our website.",
      "We do not use cookies to store sensitive personal information such as financial data or passwords. Any tracking employed is solely for improving the website experience and understanding user behaviour at an aggregated level.",
    ],
  },
  {
    icon: RefreshCw,
    title: "6. Your Rights & Choices",
    content: [
      "You have the right to access, correct, or request deletion of your personal data held by us at any time. To exercise these rights, please contact us at info@indoinvestorinfraworld.com with your full name and the nature of your request.",
      "You may opt out of marketing communications at any time by replying 'STOP' to any SMS, clicking unsubscribe on emails, or contacting our team directly. This will not affect our ability to send you service-related communications regarding active enquiries.",
      "If you believe your privacy rights have been violated, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction, or contact our grievance officer directly for resolution within 30 working days.",
    ],
  },
  {
    icon: Phone,
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites including property developer portals, RERA authority websites, Google Maps, and social media platforms. These links are provided for convenience and informational purposes only.",
      "Indo Investor Infra World has no control over the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policy of every website you visit before providing any personal information.",
      "The inclusion of any external link does not imply endorsement or responsibility for the content, opinions, or privacy practices of the linked website.",
    ],
  },
  {
    icon: Shield,
    title: "8. Updates to This Policy",
    content: [
      "Indo Investor Infra World reserves the right to update this Privacy Policy periodically to reflect changes in our data practices, legal obligations, or business operations. The updated policy will be published on this page with a revised effective date.",
      "We encourage you to review this Privacy Policy regularly. Your continued use of our website following any changes constitutes your acceptance of the revised Privacy Policy. Material changes will be communicated via email or a prominent notice on our website.",
      "This Privacy Policy was last updated in April 2025 and applies to all personal information collected through our website and related digital platforms operated by Indo Investor Infra World.",
    ],
  },
];

const PrivacyPage = () => {
  usePageSEO({
    title: "Privacy Policy | Indo Investor Infra World",
    description: "Read Indo Investor Infra World's privacy policy — how we collect, use, and protect your personal data in compliance with applicable Indian data protection laws.",
    canonical: "/privacy",
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
                Privacy<br />
                <span className="text-gradient-gold">Policy</span>
              </h1>
              <p className="text-muted-foreground font-body text-sm sm:text-base max-w-xl leading-relaxed">
                Your privacy matters to us. This policy explains how Indo Investor Infra World collects,
                uses, and protects your personal information when you use our platform and services.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <span className="text-xs font-body text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-full">
                  Last updated: April 2025
                </span>
                <span className="text-xs font-body text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                  GDPR Aligned
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
              Questions about your privacy?
            </p>
            <p className="text-xs text-muted-foreground font-body mb-4">
              Contact our data protection officer for any privacy-related concerns or data requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@indoinvestorinfraworld.com"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
              >
                Email Privacy Team
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

export default PrivacyPage;
