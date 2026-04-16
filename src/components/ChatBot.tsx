import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { allProperties } from "@/data/properties";

interface MsgLink { label: string; href: string; external: boolean; }
interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  links?: MsgLink[];
  showQuestions?: boolean;
}

const COMPANY = {
  name: "Indo Investor Infra World",
  phone: "+91 99104 64557",
  whatsapp: "https://wa.me/919910464557",
  email: "info@indoinvestorinfraworld.com",
  address: "H-169, 1st Floor, Office No. F-04, Sector-63, Noida",
};

// ── Precise Word Matcher to prevent false positives (like "which" matching "hi") ──
function HAS(text: string, keywords: string[]): boolean {
  const t = text.toLowerCase();
  return keywords.some((k) => {
    const term = k.toLowerCase();
    // For phrases, a simple includes is usually fine
    if (term.includes(" ")) {
      return t.includes(term);
    }
    // For single words, use regex word boundaries
    return new RegExp(`\\b${term}\\b`, "i").test(t);
  });
}

// ── Strict Property Matcher ──
function findProperty(input: string) {
  const t = input.toLowerCase();
  // Define strict unique identifiers for properties to prevent generic word matches
  const propertyIdentifiers: Record<string, string[]> = {
    "green-vista-residential-township-dholera": ["green vista", "vista township"],
    "skyline-towers-sector-150-noida": ["skyline", "skyline tower"],
    "emerald-luxury-villas-greater-noida-west": ["emerald", "emerald villa", "emerald luxury"],
    "smart-city-residences-noida-extension": ["smart city", "smart city residence"],
    "bhutani-alphathum-commercial-office-space": ["alphathum", "bhutani alphathum"],
    "bhutani-cyberthum-co-working-mypod": ["cyberthum", "mypody", "my pod", "mypod"]
  };

  return allProperties.find((p) => {
    const keys = propertyIdentifiers[p.slug];
    if (keys && keys.some((k) => t.includes(k))) return true;
    // Fallback exactly to name if the name is specifically typed
    if (p.name.toLowerCase() === t.trim()) return true;
    return false;
  });
}

// ── Response engine ──
function respond(input: string): { text: string; links?: MsgLink[]; showQuestions?: boolean } {
  const t = input.toLowerCase().trim();

  /* 0. Greetings */
  if (HAS(t, ["hi", "hello", "hey", "hii", "helo", "hai", "namaste", "good morning", "good evening", "howdy", "sup"])) {
    return {
      text: `Hello! 👋 Welcome to **${COMPANY.name}**.\n\nI'm your personal property guide. Pick a question below or type anything — I'm here to help!`,
      showQuestions: true,
    };
  }

  /* 1. Farewell */
  if (HAS(t, ["bye", "goodbye", "thank you", "thanks", "ok bye", "see you", "thx", "thankyou"])) {
    return {
      text: "Thank you for visiting! 🙏\n\nFeel free to reach out anytime — our experts are always happy to assist you find your perfect investment.",
      links: [{ label: "WhatsApp Us", href: COMPANY.whatsapp, external: true }],
    };
  }

  /* 2. Important & Specific Topics (Checked First) */
  if (HAS(t, ["rera", "legal", "approved", "verified", "registered", "title", "clear", "safe", "genuine"])) {
    return {
      text: "✅ **Legal Assurance:**\n\n• All properties RERA registered\n• Clear title, no disputes\n• No hidden charges policy\n• Immediate registry on plots\n• Full documentation support\n• Compliant with all state regulations",
      links: [{ label: "Browse Verified Properties", href: "/#properties", external: false }],
    };
  }

  if (HAS(t, ["payment", "emi", "plan", "installment", "installments", "down payment", "booking amount", "loan", "finance", "bank"])) {
    return {
      text: "💳 **Payment & Finance Options:**\n\n• Flexible EMI plans on all properties\n• Bank loan assistance available\n• Booking starts at as low as 10%\n• No hidden charges, transparent pricing\n• Co-Working Pods: from ₹6.26L one-time\n\nContact us for a custom payment plan!",
      links: [
        { label: "Get Custom Plan", href: COMPANY.whatsapp, external: true },
      ],
    };
  }

  if (HAS(t, ["contact", "call", "phone", "number", "email", "whatsapp", "reach", "talk", "speak", "enquire", "enquiry", "help", "expert"])) {
    return {
      text: `📞 **Get in Touch:**\n\n☎️ ${COMPANY.phone}\n📧 ${COMPANY.email}\n📍 ${COMPANY.address}\n\nAvailable Mon–Sat, 9AM–7PM IST.`,
      links: [
        { label: "WhatsApp Now", href: COMPANY.whatsapp, external: true },
        { label: "Send Email", href: `mailto:${COMPANY.email}`, external: true },
      ],
    };
  }

  if (HAS(t, ["book", "visit", "appointment", "schedule", "site visit", "tour", "meet"])) {
    return {
      text: `📅 **Book a Site Visit:**\n\nWe arrange free site visits to all our properties — Mon to Sat, 9AM–7PM.\n\n📞 ${COMPANY.phone}\n📍 ${COMPANY.address}\n\nClick WhatsApp below and we'll arrange everything!`,
      links: [
        { label: "Book via WhatsApp", href: COMPANY.whatsapp, external: true },
        { label: "Call Directly", href: `tel:${COMPANY.phone}`, external: true },
      ],
    };
  }

  if (HAS(t, ["why choose", "why indo", "why you", "why should", "what makes", "different", "trust", "best company", "why this"])) {
    return {
      text: `🏆 **Why Choose ${COMPANY.name}?**\n\n✅ 25,500+ Happy Customers\n✅ 750+ Verified Channel Partners\n✅ 100% RERA Compliant Portfolio\n✅ Zero Hidden Charges Policy\n✅ End-to-end Support — Booking to Registry\n✅ 500+ Real Estate Professionals\n\nWe don't just sell properties — we build wealth!`,
      links: [{ label: "About Us", href: "/#about", external: false }],
    };
  }

  if (HAS(t, ["about company", "who are you", "indo investor", "your company", "tell me about", "story"])) {
    return {
      text: `🏢 **About ${COMPANY.name}:**\n\n👥 25,500+ Happy Customers\n🤝 750+ Channel Partners\n👔 500+ Professionals\n📍 Sector-63, Noida HQ\n\nSpecialising in RERA-verified, high-return properties across NCR, Gujarat & beyond — with full transparency and zero hidden costs.`,
      links: [{ label: "Learn More", href: "/#about", external: false }],
    };
  }

  /* 3. Property Specific Check */
  const prop = findProperty(t);
  if (prop) {
    if (HAS(t, ["price", "cost", "how much", "rate", "starting", "budget", "worth"])) {
      return {
        text: `💰 **${prop.name}** Pricing:\n\n• ${prop.price}\n${prop.priceNote ? `• ${prop.priceNote}` : ""}\n• Status: ${prop.status}\n• Config: ${prop.config}\n\nWant to know more or book a visit?`,
        links: [
          { label: "Full Details", href: `/property/${prop.slug}`, external: false },
          { label: "WhatsApp Enquiry", href: COMPANY.whatsapp, external: true },
        ],
      };
    }
    if (HAS(t, ["amenity", "amenities", "facility", "facilty", "pool", "gym", "parking", "security", "club", "feature"])) {
      return {
        text: `🏢 **${prop.name}** — Key Amenities:\n\n${prop.amenities.slice(0, 7).map((a) => `• ${a}`).join("\n")}${prop.amenities.length > 7 ? `\n• +${prop.amenities.length - 7} more...` : ""}`,
        links: [{ label: "View All Details", href: `/property/${prop.slug}`, external: false }],
      };
    }
    if (HAS(t, ["location", "where", "address", "connectivity", "metro", "airport", "near", "distance"])) {
      return {
        text: `📍 **${prop.name}** Location:\n\n${prop.locationDetail}\n\n${prop.connectivity.slice(0, 4).map((c) => `• ${c}`).join("\n")}`,
        links: [{ label: "View Property", href: `/property/${prop.slug}`, external: false }],
      };
    }
    if (HAS(t, ["invest", "return", "roi", "profit", "appreciation", "why", "benefit", "advantage"])) {
      return {
        text: `📈 **Why invest in ${prop.name}?**\n\n${prop.whyInvest.slice(0, 4).map((w) => `✅ ${w}`).join("\n")}\n\nStatus: ${prop.status} | Rating: ⭐ ${prop.reviews}`,
        links: [
          { label: "View Full Details", href: `/property/${prop.slug}`, external: false },
          { label: "Talk to Expert", href: COMPANY.whatsapp, external: true },
        ],
      };
    }
    return {
      text: `🏢 **${prop.name}**\n\n📍 ${prop.location}\n💰 ${prop.price}\n✅ ${prop.status}\n🏗️ ${prop.config}\n⭐ ${prop.reviews} Reviews\n\n${prop.description.slice(0, 120)}...`,
      links: [
        { label: "Full Details", href: `/property/${prop.slug}`, external: false },
        { label: "Enquire on WhatsApp", href: COMPANY.whatsapp, external: true },
      ],
    };
  }

  /* 4. Broad Investment & Location Queries */
  if (HAS(t, ["invest", "return", "roi", "profit", "appreciation", "growth", "yield", "income", "rental", "assured", "passive", "best", "highest"])) {
    return {
      text: "📊 **Investment Returns at Indo Investor:**\n\n💼 Co-Working Pods — ~12% p.a. assured\n🏘️ Dholera Plots — 20–35% YoY\n✈️ Jewar Zone — 25–40% YoY (best!)\n🏙️ Noida Commercial — 12–18% YoY\n\nAll RERA verified with legal clarity!",
      links: [
        { label: "Best ROI: Co-Working", href: "/properties/co-working-space", external: false },
        { label: "Speak to an Expert", href: COMPANY.whatsapp, external: true },
      ],
    };
  }

  if (HAS(t, ["dholera"])) {
    return {
      text: "🌆 **Dholera Smart City** — Gujarat's Future Hub\n\nIndia's first greenfield smart city, backed by ₹1 lakh crore government investment. Our Green Vista Township offers govt-approved plots from ₹8,999/sq.yd.\n\n📈 20–35% YoY appreciation | Clear title | Immediate registry",
      links: [{ label: "Green Vista Township", href: "/property/green-vista-residential-township-dholera", external: false }],
    };
  }
  if (HAS(t, ["jewar", "airport"])) {
    return {
      text: "✈️ **Jewar International Airport Zone**\n\nAsia's largest upcoming airport is transforming this corridor. Values have tripled since 2021 — early investors are seeing 3–5x returns.\n\n📈 25–40% YoY — India's highest appreciation zone.",
      links: [{ label: "WhatsApp for Details", href: COMPANY.whatsapp, external: true }],
    };
  }
  if (HAS(t, ["greater noida", "gnw", "greater noida west"])) {
    return {
      text: "📍 **Greater Noida** — Affordable Luxury Belt\n\n15–22% YoY appreciation. Our Emerald Luxury Villas offer ready-to-move villas at ₹85L–₹1.8Cr in Greater Noida West.",
      links: [{ label: "Emerald Luxury Villas", href: "/property/emerald-luxury-villas-greater-noida-west", external: false }],
    };
  }
  if (HAS(t, ["noida"]) && !HAS(t, ["greater"])) {
    return {
      text: "📍 **Noida** — NCR's Tech & Business Capital\n\n12–18% YoY appreciation. We have Bhutani Alphathum (Sec 90) and Cyberthum (Sec 140A) — premium commercial landmarks with metro access.\n\n✈️ Near Jewar International Airport.",
      links: [{ label: "Properties in Noida", href: "/properties/commercial", external: false }],
    };
  }
  if (HAS(t, ["location", "locations covered", "where"])) {
    return {
      text: "📍 **Locations We Cover:**\n\nOur premium real estate portfolio currently covers:\n• Noida (Sector 90, 140A, 150)\n• Greater Noida West\n• Jewar International Airport Zone\n• Dholera Smart City, Gujarat\n\nLooking for something specific?",
      links: [{ label: "Browse All Locations", href: "/#properties", external: false }],
    };
  }

  /* 5. Generic Price Check (must be after property-specific check) */
  if (HAS(t, ["price", "cost", "how much", "budget", "starting", "minimum", "rate", "affordable", "cheap", "range", "expensive", "cheapest"])) {
    return {
      text: "💰 **Property Price Range:**\n\n🏢 Co-Working Pods — From ₹6.26 Lakhs\n🏘️ Residential Plots — ₹8,999/sq.yd\n🏠 Apartments — ₹45 Lac onwards\n🖥️ Office Spaces — ₹12L–₹1Cr+\n🏪 Commercial — ₹14,990/sq.ft.\n\nSomething for every budget!",
      links: [
        { label: "Browse All", href: "/#properties", external: false },
        { label: "Get Custom Quote", href: COMPANY.whatsapp, external: true },
      ],
    };
  }

  /* 6. General Categories (Must be late to not intercept specific tasks) */
  if (HAS(t, ["co-working", "coworking", "pod", "co working", "flexible office", "shared office", "cowork"])) {
    return {
      text: "💼 **Co-Working Spaces**:\n\n• Bhutani Alphathum — ₹12L–₹14L | 28 reviews\n• Cyberthum MyPods — ₹6.26L–₹7.25L | ~12% p.a. returns\n\nBoth in Noida — assured rental returns with lease guarantee!",
      links: [{ label: "Explore Co-Working", href: "/properties/co-working-space", external: false }],
    };
  }
  if (HAS(t, ["commercial", "shop", "showroom", "retail", "mall"])) {
    return {
      text: "🏪 **Commercial Spaces**:\n\nPremium properties in Noida's top business hubs — Bhutani Alphathum (Sec 90) and Cyberthum (Sec 140A). Strong rental yields, metro connected, ready-to-move options.",
      links: [{ label: "Explore Commercial", href: "/properties/commercial", external: false }],
    };
  }
  if (HAS(t, ["office", "corporate", "startup", "workspace", "work space"])) {
    return {
      text: "🖥️ **Office Spaces**:\n\n• Bhutani Alphathum Office — ₹14,990/sq.ft. | Ready to Move\n• Bhutani Cyberthum Office — ₹6,000–₹8,250/sq.ft.\n\nBoth on Noida Expressway with direct metro connectivity.",
      links: [{ label: "Explore Office Spaces", href: "/properties/office-space", external: false }],
    };
  }
  // Residential is broad, so put it last in categories
  if (HAS(t, ["residential", "villa", "apartment", "flat", "house", "home", "plot", "township", "appartment"])) {
    return {
      text: "🏠 **Residential Properties** (4 Projects):\n\n• Green Vista Township — Dholera SIR, Gujarat\n• Skyline Towers — Sector 150, Noida\n• Emerald Luxury Villas — Greater Noida West\n• Smart City Residences — Noida Extension\n\nAll RERA approved with clear titles!",
      links: [{ label: "Explore Residential", href: "/#properties", external: false }],
    };
  }

  /* 7. Catch-All Portfolio Question */
  if (HAS(t, ["property", "properties", "options", "show me", "what do you have", "catalogue", "portfolio"])) {
    return {
      text: "🏢 **Our Property Portfolio:**\n\n🏠 Residential — Plots, Villas, Apartments\n🏪 Commercial — Shops, Showrooms\n🖥️ Office Space — Corporate & Startup\n💼 Co-Working — Flexible Pods\n\nAll across Noida, Greater Noida, Dholera & Jewar.",
      links: [
        { label: "Browse All", href: "/#properties", external: false },
        { label: "Talk to Expert", href: COMPANY.whatsapp, external: true },
      ],
    };
  }

  /* Fallback — graceful redirect */
  return {
    text: "I appreciate your question! 😊\n\nI'm trained to assist with Indo Investor's properties, pricing, locations, and investment queries. For anything else, our expert team is happy to help personally:",
    links: [
      { label: "WhatsApp Our Team", href: COMPANY.whatsapp, external: true },
      { label: "Send an Email", href: `mailto:${COMPANY.email}`, external: true },
    ],
  };
}

/* ── Format **bold** markdown ── */
function formatText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} className="block">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </span>
    );
  });
}

/* ── 10 Guided Quick Questions ── */
const QUICK_QUESTIONS = [
  { icon: "🏢", label: "What properties are available?", query: "What properties do you have?" },
  { icon: "💰", label: "Starting investment price?", query: "What is the starting price?" },
  { icon: "📈", label: "Expected ROI / returns?", query: "What investment returns can I expect?" },
  { icon: "📅", label: "How to book a site visit?", query: "How to book a site visit?" },
  { icon: "✅", label: "RERA & legal status?", query: "Are all properties RERA approved and legally verified?" },
  { icon: "💼", label: "Co-working space options?", query: "Tell me about co-working spaces" },
  { icon: "📍", label: "Locations covered?", query: "Which locations do you cover?" },
  { icon: "🏆", label: "Why choose Indo Investor?", query: "Why should I choose Indo Investor?" },
  { icon: "💳", label: "Payment plans & EMI?", query: "Tell me about payment plans and EMI options" },
  { icon: "📞", label: "Talk to an expert", query: "I want to contact your team" },
];

/* ══════════════════════════════════════════════════════════
   CHATBOT COMPONENT
══════════════════════════════════════════════════════════ */
const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: `👋 Hello! I'm your **Indo Investor** property guide.\n\nAsk me anything or pick a question below to get started instantly:`,
      showQuestions: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show "Chat with us" label after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 3000);
    const t2 = setTimeout(() => setShowLabel(false), 8000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim() || typing) return;

    const userMsg: Message = { id: Date.now() + "u", role: "user", text: text.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const { text: botText, links, showQuestions } = respond(text);
      const botMsg: Message = { id: Date.now() + "b", role: "bot", text: botText, links, showQuestions };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 600 + Math.random() * 500);
  };

  const QuestionsGrid = () => (
    <div className="mt-3 grid grid-cols-2 gap-1.5">
      {QUICK_QUESTIONS.map((q) => (
        <button
          key={q.query}
          onClick={() => send(q.query)}
          className="text-left px-3 py-2.5 rounded-xl border border-border/50 bg-background/60 dark:bg-secondary/30 hover:border-primary/50 hover:bg-primary/8 transition-all group"
        >
          <span className="text-base leading-none block mb-1">{q.icon}</span>
          <span className="text-[10px] font-body text-muted-foreground group-hover:text-foreground transition-colors leading-tight block">
            {q.label}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="w-[340px] sm:w-[390px] flex flex-col rounded-2xl overflow-hidden shadow-luxury border border-border/30"
            style={{ height: "min(580px, 85vh)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/25">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-primary" />
                </div>
                <div>
                  <p className="text-sm font-heading font-bold text-primary-foreground leading-tight">Indo Investor AI</p>
                  <p className="text-[10px] text-primary-foreground/65 font-body">Property Guide · Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-background/95 dark:bg-card/95 backdrop-blur-md">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${msg.role === "bot"
                    ? "bg-primary/15 border border-primary/25"
                    : "bg-secondary"
                    }`}>
                    {msg.role === "bot"
                      ? <Bot className="w-3.5 h-3.5 text-primary" />
                      : <User className="w-3.5 h-3.5 text-muted-foreground" />
                    }
                  </div>

                  <div className={`max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-xs font-body leading-relaxed ${msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary/60 dark:bg-secondary/40 text-foreground rounded-tl-sm"
                      }`}>
                      {msg.role === "bot" ? formatText(msg.text) : msg.text}
                    </div>

                    {/* Quick question grid after bot message */}
                    {msg.role === "bot" && msg.showQuestions && (
                      <QuestionsGrid />
                    )}

                    {/* Action links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-0.5">
                        {msg.links.map((link, i) =>
                          link.external ? (
                            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-body font-semibold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 px-2.5 py-1 rounded-full transition-colors"
                            >
                              {link.label} <ArrowUpRight className="w-2.5 h-2.5" />
                            </a>
                          ) : (
                            <Link key={i} to={link.href} onClick={() => setOpen(false)}
                              className="inline-flex items-center gap-1 text-[10px] font-body font-semibold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 px-2.5 py-1 rounded-full transition-colors"
                            >
                              {link.label} <ArrowUpRight className="w-2.5 h-2.5" />
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-secondary/60 dark:bg-secondary/40 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 bg-background/95 dark:bg-card/95 backdrop-blur-md border-t border-border/25 shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2 bg-secondary/40 dark:bg-secondary/30 rounded-full px-4 py-2 border border-border/30 focus-within:border-primary/40 transition-colors"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about properties, prices, ROI..."
                  className="flex-1 bg-transparent text-xs font-body text-foreground placeholder:text-muted-foreground/55 outline-none min-w-0"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:opacity-90 disabled:opacity-35 transition-opacity flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
              </form>
              <p className="text-center text-[9px] text-muted-foreground/40 font-body mt-1.5">
                Type <span className="text-primary/50">"hi"</span> to restart · Urgent?{" "}
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors">
                  WhatsApp us
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Button ── */}
      <div className="relative flex items-center gap-3">
        {/* "Chat with us" tooltip */}
        <AnimatePresence>
          {showLabel && !open && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="bg-background dark:bg-card border border-border/50 shadow-luxury rounded-2xl px-3.5 py-2 pointer-events-none"
            >
              <p className="text-xs font-body font-semibold text-foreground whitespace-nowrap">Chat with us</p>
              <p className="text-[9px] text-muted-foreground font-body">AI property assistant</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => { setOpen(true); setShowLabel(false); }}
              className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow-primary"
              aria-label="Open chat assistant"
            >
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
              <motion.span
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </motion.span>
            </motion.button>
          ) : (
            <motion.button
              key="close"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen(false)}
              className="w-12 h-12 rounded-full bg-secondary border border-border/40 flex items-center justify-center shadow-lg"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-foreground" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatBot;
