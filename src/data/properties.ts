// Green Vista — real property photos
import gvEntrance from "@/assets/gv-entrance.png";
import gvHighwayView from "@/assets/gv-highway-view.png";
import gvAmenitiesAerial from "@/assets/gv-amenities-aerial.png";
import gvPoolTennis from "@/assets/gv-pool-tennis.png";
import gvInteriorGarden from "@/assets/gv-interior-garden.png";
import gvGardenPlayground from "@/assets/gv-garden-playground.png";
import gvPlotsLayout from "@/assets/gv-plots-layout.png";
import gvTownshipTopdown from "@/assets/gv-township-topdown.png";
import gvClubhouseAerial from "@/assets/gv-clubhouse-aerial.png";
import gvMasterPlan from "@/assets/gv-master-plan.png";

// Bhutani Alphathum — Co-working
import alphathumCW1 from "@/assets/properties/alphathum-coworking/img-1.webp";
import alphathumCW2 from "@/assets/properties/alphathum-coworking/img-2.webp";
import alphathumCW3 from "@/assets/properties/alphathum-coworking/img-3.webp";
import alphathumCW4 from "@/assets/properties/alphathum-coworking/img-4.webp";

// Bhutani Alphathum — Office Space
import alphathumOff1 from "@/assets/properties/alphathum-office/img-1.webp";
import alphathumOff2 from "@/assets/properties/alphathum-office/img-2.webp";
import alphathumOff3 from "@/assets/properties/alphathum-office/img-3.webp";
import alphathumOff4 from "@/assets/properties/alphathum-office/img-4.webp";

// Cyberthum — Co-working Pods
import cyberthumPods1 from "@/assets/properties/cyberthum-pods/img-1.webp";
import cyberthumPods2 from "@/assets/properties/cyberthum-pods/img-2.webp";
import cyberthumPods3 from "@/assets/properties/cyberthum-pods/img-3.webp";
import cyberthumPods4 from "@/assets/properties/cyberthum-pods/img-4.webp";
import cyberthumPods5 from "@/assets/properties/cyberthum-pods/img-5.webp";

// Cyberthum — Office Space
import cyberthumOff1 from "@/assets/properties/cyberthum-office/img-1.webp";
import cyberthumOff2 from "@/assets/properties/cyberthum-office/img-2.webp";
import cyberthumOff3 from "@/assets/properties/cyberthum-office/img-3.webp";
import cyberthumOff4 from "@/assets/properties/cyberthum-office/img-4.webp";
import cyberthumOff5 from "@/assets/properties/cyberthum-office/img-5.webp";
import cyberthumOff6 from "@/assets/properties/cyberthum-office/img-6.webp";

export interface PaymentStep {
  stage: string;
  detail: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "Office Space" | "Co-Working Space";
  tags: string[];
  image: string;
  gallery: string[];
  location: string;
  locationDetail: string;
  price: string;
  priceNote?: string;
  status: string;
  size: string;
  config: string;
  availability: string;
  reviews: number;
  description: string;
  highlights: string[];
  connectivity: string[];
  whyInvest: string[];
  paymentPlan: PaymentStep[];
  amenities: string[];
  developer: string;
  developerDesc: string;
  clientReviews: Review[];
  faqs: FAQ[];
}

export const allProperties: Property[] = [

  // ─── RESIDENTIAL ───────────────────────────────────────────────────────────
  {
    id: "green-vista",
    slug: "green-vista-residential-township-dholera",
    name: "Green Vista Residential Township",
    category: "Residential",
    tags: ["Premium Township", "Govt. Approved", "Exclusive"],
    image: gvEntrance,
    gallery: [
      gvEntrance,
      gvHighwayView,
      gvAmenitiesAerial,
      gvPoolTennis,
      gvInteriorGarden,
      gvGardenPlayground,
      gvPlotsLayout,
      gvTownshipTopdown,
      gvClubhouseAerial,
      gvMasterPlan,
    ],
    location: "Dholera SIR, Gujarat",
    locationDetail: "Bilkul Dholera SIR ke Boundaries par (TP-2 & TP-3)",
    price: "₹8,999 per sq. yards onwards",
    priceNote: "Registration starts at ₹21,000",
    status: "Government Approved",
    size: "6 Acres · 207 Plots · Min 91 Sq. Yards",
    config: "Residential Plots – Up to 130 Sq. Yards",
    availability: "For Sale",
    reviews: 21,
    description:
      "A premium residential township in Dholera SIR — India's first greenfield smart city. Government-approved plots with clear titles, wide internal roads, planned infrastructure, and exceptional long-term appreciation potential. Targeted at both investors and end-users seeking security, transparency, and modern living.",
    highlights: [
      "Government Approved with Clear Title",
      "50% Payment par Plot Registry",
      "Easy & Flexible EMI Payment Plan",
      "207 Well-Planned Plots on 6 Acres",
      "Township-Approved Layout",
      "Immediate Registry & Mutation",
      "Wide Internal Roads & Planned Development",
      "Low-Investment, High-Return Opportunity",
    ],
    connectivity: [
      "Situated on Ahmedabad–Bhavnagar (Kotda) Highway",
      "~500 meters from Diamond Circle",
      "Bhavnagar Airport ~35 km away",
      "Upcoming Dholera International Airport ~35 km",
      "Bird Sanctuary within 8–9 km",
    ],
    whyInvest: [
      "Government-backed smart city ecosystem",
      "Clear title & township-approved layout",
      "Immediate registry and mutation",
      "Wide internal roads & planned infrastructure",
      "Low entry price with high appreciation potential",
    ],
    paymentPlan: [
      { stage: "At Registration", detail: "₹21,000" },
      { stage: "Within 30 Days", detail: "Remaining Amount" },
      { stage: "Corner Plot PLC", detail: "10% Premium" },
      { stage: "Garden Facing PLC", detail: "5% Premium" },
    ],
    amenities: [
      "40 ft Wide Main Road", "Jogging Track", "Cricket Ground", "Swimming Pool",
      "Table Tennis", "Senior Citizens Area", "Children Playground", "Pool Table",
      "Badminton Court", "24Hr Water Supply", "Temple", "Parking", "24x7 Security", "Club House",
    ],
    developer: "Indo Investor Infra World",
    developerDesc:
      "An emerging real estate developer focused on plotted developments, smart investment projects across Gujarat, legal transparency, strategic locations, and long-term value creation for investors.",
    clientReviews: [
      { name: "Amit Patel", text: "Excellent project with clear documentation. The team was very transparent about everything.", rating: 5 },
      { name: "Kunal Mehta", text: "Great investment opportunity in Dholera. The location and government backing give strong confidence.", rating: 5 },
      { name: "Sneha Joshi", text: "Professional team, smooth registration process. Very happy with my plot purchase.", rating: 4 },
    ],
    faqs: [
      { question: "Where is Green Vista Residential Township located?", answer: "Located in Dholera SIR, Gujarat — on the boundaries of TP-2 & TP-3, situated on the Ahmedabad–Bhavnagar Highway." },
      { question: "What type of property is available?", answer: "Residential plots up to 130 sq. yards with minimum plot size of 91 sq. yards." },
      { question: "Is the project legally approved?", answer: "Yes, it is fully government approved with clear title, township-approved layout, and immediate registry & mutation." },
      { question: "What is the starting price?", answer: "Starting from ₹8,999 per sq. yards with registration beginning at just ₹21,000." },
      { question: "Why should I invest here?", answer: "Dholera SIR is India's first greenfield smart city with massive government investment, upcoming international airport, and exceptional growth potential." },
      { question: "Is this suitable for long-term investment?", answer: "Absolutely. With government infrastructure projects, smart city development, and strategic location, long-term appreciation is very strong." },
    ],
  },

  // ─── COMMERCIAL ────────────────────────────────────────────────────────────

  {
    id: "alphathum-flagship",
    slug: "bhutani-alphathum-coworking-office",
    name: "Bhutani Alphathum",
    category: "Commercial",
    tags: ["Ready to Move", "Co-Working", "Flagship"],
    image: alphathumCW2,
    gallery: [alphathumCW1, alphathumCW2, alphathumCW3, alphathumCW4],
    location: "Sector 90, Noida",
    locationDetail: "Sector 90, Noida — IT/ITES Hub, Near Noida Expressway",
    price: "₹12 Lacs – ₹14 Lacs*",
    priceNote: "₹8,955 – ₹13,000 per sq. ft. | Rent: ₹36,000/mo or ₹8,285/week",
    status: "Ready to Move",
    size: "25 Acres",
    config: "Co-working & Serviced Office Spaces",
    availability: "For Sale",
    reviews: 28,
    description:
      "Bhutani Alphathum in Sector 90, Noida, is a flagship commercial project designed to redefine the future of co-working and serviced office spaces in India. Spread across 25 acres, Alphathum is best known for its futuristic architecture, Asia's largest rooftop infinity pool, and unmatched connectivity to Noida, Greater Noida, Delhi, and the upcoming Jewar Airport. Strategically located in Noida's IT/ITES hub, the project attracts leading multinational companies, startups, and entrepreneurs, creating a thriving business ecosystem with guaranteed high rental demand.\n\nThe project offers intelligently designed co-working spaces, cutting-edge amenities, and sustainable green building practices. With premium business lounges, high-speed elevators, 24x7 security, and vibrant social spaces like cafeterias and sky gardens, Alphathum goes beyond being just a workplace — it's a landmark for networking, innovation, and long-term investment growth. For investors, it provides assured returns and capital appreciation, making it one of the most rewarding commercial opportunities in NCR.",
    highlights: [
      "Flagship 25-Acre Commercial Development",
      "Asia's Largest Rooftop Infinity Pool",
      "Futuristic Architecture by Award-Winning Designers",
      "Co-working & Serviced Office Suites",
      "Strong Assured Returns & Capital Appreciation",
      "Premium Business Lounges & Sky Gardens",
      "Ready to Move — Immediate Possession",
      "Price from ₹12 Lacs — Rent from ₹36,000/mo",
    ],
    connectivity: [
      "Sector 90, Noida — Prime IT/ITES Corridor",
      "Excellent metro connectivity via Sector 91 Metro",
      "Direct access to Noida Expressway",
      "Connectivity to Delhi, Greater Noida & Jewar Airport",
      "15 mins from Connaught Place, Delhi",
    ],
    whyInvest: [
      "Asia's largest rooftop infinity pool — unmatched USP",
      "Flagship 25-acre integrated commercial campus",
      "Strong rental demand from MNCs and startups",
      "Assured returns with lease guarantee options",
      "Premium business ecosystem for networking & growth",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "50% of Total Value" },
      { stage: "On Completion", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "Asia's Largest Infinity Pool", "Business Lounges", "Sky Gardens",
      "High-Speed Elevators", "24x7 Security", "Power Backup",
      "Cafeteria & Food Court", "Green Building Design", "Ample Parking",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is a trusted name in Indian real estate, renowned for delivering landmark commercial projects like Cyberthum, Alphathum, and City Center. With a strong focus on futuristic design, sustainability, and investor-friendly offerings, the developer has consistently introduced concepts that have transformed Noida's skyline. Their projects are not only architectural marvels but also high-return assets that ensure long-term value for investors.",
    clientReviews: [
      { name: "Ravi Sharma", text: "Alphathum is a brilliant investment choice! I bought a co-working unit here last year and the rental demand has been excellent. The location and connectivity make it one of the best commercial hubs in Noida.", rating: 5 },
      { name: "Neha Verma", text: "The design and facilities at Alphathum are world-class. I especially love the concept of the rooftop infinity pool and modern business lounges. It feels premium and futuristic. Slightly premium pricing, but totally worth it.", rating: 5 },
      { name: "Amit Kapoor", text: "Bhutani projects are always reliable, and Alphathum has exceeded my expectations. Great appreciation potential along with assured returns. Highly recommended for investors looking for steady growth.", rating: 4 },
    ],
    faqs: [
      { question: "What types of spaces are available at Alphathum?", answer: "Co-working spaces, serviced offices, and dedicated office suites from 100–150 sq. ft. per unit." },
      { question: "What is the price range?", answer: "₹8,955 – ₹13,000 per sq. ft. for purchase. Rental options from ₹36,000/month or ₹8,285/week." },
      { question: "Is there assured rental income?", answer: "Yes — lease guarantee and assured return schemes are available. Contact our team for current details." },
      { question: "How is the connectivity of Alphathum?", answer: "Excellent — Sector 90 Noida with Noida Expressway access, metro connectivity, and proximity to Delhi, Greater Noida & Jewar Airport." },
      { question: "What makes Alphathum unique?", answer: "Asia's largest rooftop infinity pool, futuristic architecture, and a premium 25-acre business ecosystem make it a landmark destination." },
      { question: "Who is the developer?", answer: "Bhutani Infra — known for landmark projects like Cyberthum, Alphathum, and City Center across NCR." },
    ],
  },

  {
    id: "cyberthum-pods",
    slug: "bhutani-cyberthum-coworking-pods",
    name: "Bhutani Cyberthum — Co-working Pods",
    category: "Commercial",
    tags: ["Ready to Move", "MyPod", "~12% Returns"],
    image: cyberthumPods5,
    gallery: [cyberthumPods1, cyberthumPods2, cyberthumPods3, cyberthumPods4, cyberthumPods5],
    location: "Sector 140A, Noida",
    locationDetail: "Sector 140A, Noida — Noida Expressway",
    price: "₹6.26 Lakh – ₹7.25 Lakh*",
    priceNote: "₹55/sq.ft. lease guarantee · ~12% per annum assured returns",
    status: "Ready to Move",
    size: "100 – 500 sq. ft. Pods",
    config: "Co-working Pod (MyPod)",
    availability: "For Sale",
    reviews: 22,
    description:
      "Bhutani Cyberthum MyPod, located in Sector 140A Noida, introduces a new-age concept of co-working pods designed for startups, entrepreneurs, and freelancers. These compact, fully-furnished pods offer affordable yet premium office solutions in one of NCR's most advanced commercial hubs. With assured returns of ~12% per annum, a lease guarantee of ₹55 per sq. ft., and flexible unit sizes starting from just 100 sq. ft., Cyberthum MyPod makes it easier than ever for investors to enter the commercial real estate market with minimal risk.\n\nMore than just a workplace, Cyberthum offers a world-class ecosystem with smart infrastructure, high-speed internet, business lounges, and recreational spaces. Its strategic location along the Noida Expressway ensures seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar Airport, making it an ideal address for growing businesses. Whether you're looking for consistent rental income or long-term capital appreciation, Bhutani Cyberthum MyPod represents a futuristic, high-value investment opportunity.",
    highlights: [
      "New-Age Co-working Pod Concept (MyPod)",
      "Fully Furnished Compact Pods — Zero Setup Cost",
      "~12% Per Annum Assured Returns",
      "₹55/sq.ft. Lease Guarantee After Possession",
      "Low-Entry Investment from ₹6.26 Lakh",
      "Flexible Pod Sizes: 100–500 sq. ft.",
      "Noida Expressway — High Demand Corridor",
      "Strong Rental Income Potential",
    ],
    connectivity: [
      "Sector 140A, Noida — on Noida Expressway",
      "Direct connectivity to Delhi & Greater Noida",
      "Near upcoming Jewar International Airport",
      "Close to major IT parks and business hubs",
    ],
    whyInvest: [
      "Assured returns ~12% per annum",
      "Lease guarantee of ₹55/sq.ft. after possession",
      "Lowest entry point — from just ₹6.26 Lakh",
      "Fully furnished, zero setup cost",
      "Growing co-working demand in Noida Expressway corridor",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "50% of Total Value" },
      { stage: "During Construction", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "Business Lounges", "High-Speed Internet", "24x7 Security",
      "Power Backup", "Cafeteria", "Ample Parking", "Green Building Design",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is among the most trusted names in commercial real estate, with a proven track record of delivering iconic projects like Alphathum, Cyberthum, and City Center. Known for its futuristic designs, sustainable developments, and investor-centric offerings, Bhutani Infra has established itself as a leader in creating high-value assets that combine innovation with long-term returns.",
    clientReviews: [
      { name: "Rajesh Kumar", text: "Investing in MyPod was the right decision! The lease guarantee and assured returns make it one of the safest and most rewarding commercial investments in NCR.", rating: 5 },
      { name: "Priya Mehta", text: "The affordability is a big plus. It's perfect for small businesses and startups looking to establish themselves in a premium location without huge overhead costs.", rating: 5 },
      { name: "Kunal Bhatia", text: "Cyberthum's infrastructure is world-class. I've already started leasing my pod and the rental demand is strong. Bhutani Infra really knows how to deliver value.", rating: 4 },
    ],
    faqs: [
      { question: "What is the price range of Cyberthum MyPods?", answer: "₹6.26 Lakh – ₹7.25 Lakh for co-working pods of 100–500 sq. ft." },
      { question: "Is there an assured return plan?", answer: "Yes, approximately 12% per annum assured returns on investment." },
      { question: "What is the lease guarantee after possession?", answer: "₹55 per sq. ft. per month lease guarantee after possession." },
      { question: "What sizes of pods are available?", answer: "Compact pods from 100 to 500 sq. ft. — fully furnished and ready to move." },
      { question: "How is the location advantage?", answer: "On Noida Expressway with seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar International Airport." },
      { question: "Who is the developer?", answer: "Bhutani Infra — known for Alphathum, Cyberthum, and City Center across Delhi NCR." },
    ],
  },

  {
    id: "cyberthum-office",
    slug: "bhutani-cyberthum-office-space",
    name: "Bhutani Cyberthum — Office Space",
    category: "Commercial",
    tags: ["Ready to Move", "Twin Towers", "RERA Approved"],
    image: cyberthumOff6,
    gallery: [cyberthumOff1, cyberthumOff2, cyberthumOff3, cyberthumOff4, cyberthumOff5, cyberthumOff6],
    location: "Sector 140A, Noida",
    locationDetail: "Sector 140A, Noida — Noida Expressway",
    price: "₹6,000 – ₹8,250 per sq. ft.",
    priceNote: "Units from ₹12 L – ₹22 L onwards",
    status: "Ready to Move / Under Construction",
    size: "200 – 750 sq. ft.",
    config: "Office Spaces (Bare Shell & Ready to Move)",
    availability: "For Sale",
    reviews: 24,
    description:
      "Bhutani Cyberthum in Sector 140A, Noida is a landmark commercial project offering state-of-the-art office spaces. Spread across an extensive area with iconic twin towers, Cyberthum represents the next generation of business hubs. With flexible configurations from 200 sq. ft. to 750 sq. ft., the project offers both bare-shell and ready-to-move options to cater to startups, growing companies, and large enterprises alike. Pricing begins at just ₹6,000 per sq. ft., making it an attractive opportunity for both end-users and investors.\n\nThe project doesn't just provide workspaces — it creates an ecosystem. With high-speed elevators, modern design, green building features, ample parking, and world-class recreational facilities, Cyberthum is designed to offer a superior work-life balance. Its prime location on the Noida Expressway ensures excellent connectivity to Delhi, Greater Noida, and the upcoming Jewar Airport, making it one of NCR's most desirable business destinations with high rental demand and long-term capital appreciation potential.",
    highlights: [
      "Iconic Twin Tower Design — Noida Expressway Landmark",
      "Flexible Office Sizes: 200–750 sq. ft.",
      "Bare-Shell & Ready-to-Move Options",
      "Entry Price from ₹12 Lakh",
      "RERA Approved & Fully Compliant",
      "High Rental Demand — Growing Commercial Corridor",
      "Long-Term Capital Appreciation",
      "Connectivity to Jewar Airport & Delhi NCR",
    ],
    connectivity: [
      "Located directly on Noida Expressway — Sector 140A",
      "Seamless connectivity to Delhi & Greater Noida",
      "Near upcoming Jewar International Airport",
      "Well-connected to major IT parks and corporate hubs",
    ],
    whyInvest: [
      "Iconic twin tower landmark — high business credibility",
      "Competitive pricing from ₹6,000/sq.ft.",
      "High rental demand in the Noida Expressway corridor",
      "Jewar Airport proximity drives long-term value",
      "Flexible ticket sizes for all investor categories",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "10% of Total Value" },
      { stage: "Within 30 Days", detail: "40%" },
      { stage: "On Structure Completion", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "High-Speed Elevators", "24x7 Security", "Power Backup",
      "Ample Parking", "Cafeteria & Food Courts", "Green Building Design",
      "Business Lounges", "Recreational Spaces",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is one of the most reputed developers in Delhi NCR, known for creating benchmark commercial destinations like Alphathum, Cyberthum, and Grandthum. With a commitment to innovation, timely delivery, and investor-friendly projects, Bhutani Infra has built a strong reputation among both corporate occupiers and investors seeking high returns.",
    clientReviews: [
      { name: "Rohit Mehra", text: "Prime location and excellent metro connectivity make it a perfect choice for offices. The twin tower identity adds instant credibility to my business.", rating: 5 },
      { name: "Neha Verma", text: "Loved the modern glass facade and design. Slight delay in possession, but absolutely worth it for the price and location.", rating: 5 },
      { name: "Arjun Malhotra", text: "A futuristic project with great ROI potential. The flexible office sizes are perfect for a growing startup like mine.", rating: 4 },
      { name: "Sakshi Taneja", text: "Good mix of office spaces and amenities. The cafeteria and business lounges add real value to the daily work experience.", rating: 5 },
    ],
    faqs: [
      { question: "What is the starting price of office spaces?", answer: "Office spaces start from ₹6,000 per sq. ft., with complete units from ₹12 Lakh onwards." },
      { question: "Is the project ready to move?", answer: "Partially — some towers are ready to move, while others are under construction with near-term possession." },
      { question: "What sizes are available?", answer: "Flexible office sizes from 200 to 750 sq. ft. in both bare-shell and fit-out options." },
      { question: "Is the project RERA approved?", answer: "Yes, fully RERA registered and compliant with all regulatory requirements." },
      { question: "What is the rental potential of Cyberthum offices?", answer: "High rental demand due to Noida Expressway location, proximity to IT parks, and Jewar Airport connectivity." },
      { question: "How is the connectivity?", answer: "Direct access to Noida Expressway with seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar International Airport." },
    ],
  },

  // ─── OFFICE SPACES ─────────────────────────────────────────────────────────

  {
    id: "alphathum-office-retail",
    slug: "bhutani-alphathum-office-retail",
    name: "Bhutani Alphathum - Office & Retail",
    category: "Office Space",
    tags: ["Ready to Move", "Office & Retail", "Infinity Pool"],
    image: alphathumOff3,
    gallery: [alphathumOff1, alphathumOff2, alphathumOff3, alphathumOff4],
    location: "Sector 90, Noida",
    locationDetail: "Sector 90, Noida — IT/ITES Hub, Near Noida Expressway",
    price: "₹14,990 per sq. ft. (Office) | ₹24,000 – ₹35,000 per sq. ft. (Retail)",
    priceNote: "Resale: ₹12,500 – ₹14,000 per sq. ft. | Price: ₹25 L – ₹1 Cr onwards",
    status: "Ready to Move",
    size: "200 – 2,000 sq. ft.",
    config: "Office Spaces & Retail Shops",
    availability: "For Sale",
    reviews: 15,
    description:
      "Bhutani Alphathum, located in Sector 90, Noida, is a landmark commercial project offering world-class office spaces and retail shops. Known for its iconic infinity rooftop pool, Alphathum has become a hub for businesses seeking premium office infrastructure.\n\nThe project offers ready-to-move office spaces starting at ₹14,990 per sq. ft. (all-inclusive), with resale options available at more competitive rates of ₹12,500–₹14,000 per sq. ft. With retail shops priced between ₹24,000–₹35,000 per sq. ft., Alphathum provides a mix of office and retail opportunities. Its strategic location, excellent metro connectivity, and futuristic design make it one of the most sought-after investments in Noida's commercial real estate market.",
    highlights: [
      "Iconic Infinity Rooftop Pool — Asia's Largest",
      "Premium Office Spaces: 200–2,000 sq. ft.",
      "Retail Shops: ₹24,000 – ₹35,000 per sq. ft.",
      "Ready to Move — Immediate Possession",
      "Resale Options at Competitive Rates",
      "IT/ITES Hub Location — High Rental Demand",
      "Futuristic Design & World-Class Infrastructure",
      "Excellent Metro Connectivity via Sector 91",
    ],
    connectivity: [
      "Sector 90, Noida — Prime IT/ITES Corridor",
      "Excellent metro connectivity via Sector 91 Metro",
      "Direct access to Noida Expressway",
      "Connectivity to Delhi, Greater Noida & Jewar Airport",
      "15 mins from Connaught Place, Delhi",
    ],
    whyInvest: [
      "Asia's largest rooftop infinity pool — unmatched USP",
      "Prime IT/ITES hub location with high rental demand",
      "Ready to move with immediate possession",
      "Mix of office and retail for diverse portfolio",
      "Strong resale market with competitive rates",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "10% of Total Value" },
      { stage: "Within 45 Days", detail: "40%" },
      { stage: "On Structure Completion", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "Infinity Rooftop Pool", "Business Lounges", "High-Speed Elevators",
      "24x7 Security", "Cafeteria & Food Court", "Power Backup", "Ample Parking",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra has transformed NCR's commercial real estate with iconic projects like Alphathum, Cyberthum, and Grandthum. Known for innovative designs, investor-friendly models, and futuristic developments, Bhutani Infra has built a reputation for trust, quality, and timely delivery.",
    clientReviews: [
      { name: "Karan Sethi", text: "The rooftop infinity pool gives Alphathum an unmatched identity.", rating: 5 },
      { name: "Ritika Jain", text: "Prime location, resale market is strong. Good choice for investors.", rating: 5 },
      { name: "Vikas Arora", text: "Facilities are modern, though rentals took some time to stabilize.", rating: 4 },
      { name: "Meenal Khurana", text: "Great infrastructure, my tenants love the amenities and food court.", rating: 5 },
      { name: "Ankit Bansal", text: "Bought a small office unit. Happy with appreciation and returns.", rating: 5 },
    ],
    faqs: [
      { question: "What is the price range for Alphathum office spaces?", answer: "Office spaces start at ₹14,990 per sq. ft. (all-inclusive), with resale options at ₹12,500–₹14,000 per sq. ft." },
      { question: "Are there retail shops available in Alphathum?", answer: "Yes, retail shops are available priced between ₹24,000–₹35,000 per sq. ft." },
      { question: "Is Alphathum ready to move or still under construction?", answer: "The project is ready to move with immediate possession available." },
      { question: "What makes Alphathum different from other office projects in Noida?", answer: "Asia's largest rooftop infinity pool, futuristic architecture, and a 25-acre integrated business ecosystem make it unique." },
      { question: "How is the rental yield and ROI in Alphathum?", answer: "Strong rental demand from MNCs and startups in the IT/ITES corridor provides healthy rental yields and capital appreciation." },
      { question: "Does Alphathum offer assured return plans?", answer: "Yes, lease guarantee and assured return schemes are available. Contact our team for current details." },
    ],
  },

  {
    id: "cyberthum-office-space",
    slug: "bhutani-cyberthum-office-space-new",
    name: "Bhutani Cyberthum - Office Space",
    category: "Office Space",
    tags: ["Ready to Move / Under Construction", "Twin Towers", "Noida Expressway"],
    image: cyberthumOff4,
    gallery: [cyberthumOff1, cyberthumOff2, cyberthumOff3, cyberthumOff4, cyberthumOff5, cyberthumOff6],
    location: "Sector 140A, Noida",
    locationDetail: "Sector 140A, Noida — Noida Expressway",
    price: "₹6,000 – ₹8,250 per sq. ft.",
    priceNote: "Price: ₹12 L – ₹22 L onwards",
    status: "Ready to Move / Under Construction",
    size: "200 – 750 sq. ft.",
    config: "Office Spaces",
    availability: "For Sale",
    reviews: 24,
    description:
      "Bhutani Cyberthum in Sector 140A, Noida is a landmark commercial project offering state-of-the-art office spaces. Spread across an extensive area with iconic twin towers, Cyberthum represents the next generation of business hubs. With flexible configurations from 200 sq. ft. to 750 sq. ft., the project offers both bare-shell and ready-to-move options to cater to startups, growing companies, and large enterprises alike. Pricing begins at just ₹6,000 per sq. ft., making it an attractive opportunity for both end-users and investors.\n\nThe project doesn't just provide workspaces, it creates an ecosystem. With high-speed elevators, modern design, green building features, ample parking, and world-class recreational facilities, Cyberthum is designed to offer a superior work-life balance. Its prime location on the Noida Expressway ensures excellent connectivity to Delhi, Greater Noida, and the upcoming Jewar Airport, making it one of NCR's most desirable business destinations with high rental demand and long-term capital appreciation potential.",
    highlights: [
      "Iconic Twin Tower Design — Noida Expressway Landmark",
      "Flexible Office Sizes: 200–750 sq. ft.",
      "Bare-Shell & Ready-to-Move Options",
      "Entry Price from ₹12 Lakh — ₹22 L onwards",
      "Green Building Design & Modern Infrastructure",
      "High Rental Demand — Growing Commercial Corridor",
      "Long-Term Capital Appreciation Potential",
      "Connectivity to Jewar Airport & Delhi NCR",
    ],
    connectivity: [
      "Located directly on Noida Expressway — Sector 140A",
      "Seamless connectivity to Delhi & Greater Noida",
      "Near upcoming Jewar International Airport",
      "Well-connected to major IT parks and corporate hubs",
      "Metro connectivity in close proximity",
    ],
    whyInvest: [
      "Iconic twin tower landmark — high business credibility",
      "Competitive pricing from ₹6,000/sq.ft.",
      "High rental demand in the Noida Expressway corridor",
      "Jewar Airport proximity drives long-term value",
      "Flexible ticket sizes for all investor categories",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "10% of Total Value" },
      { stage: "Within 30 Days", detail: "40%" },
      { stage: "On Structure Completion", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "High-Speed Elevators", "24x7 Security", "Power Backup",
      "Ample Parking", "Cafeteria & Food Courts", "Green Building Design",
      "Business Lounges", "Recreational Spaces",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is one of the most reputed developers in Delhi NCR, known for creating benchmark commercial destinations like Alphathum, Cyberthum, and Grandthum. With a commitment to innovation, timely delivery, and investor-friendly projects, Bhutani Infra has built a strong reputation among both corporate occupiers and investors seeking high returns.",
    clientReviews: [
      { name: "Rohit Mehra", text: "Prime location and excellent metro connectivity make it a perfect choice for offices.", rating: 5 },
      { name: "Neha Verma", text: "Loved the modern glass facade and design. Slight delay in possession, but worth it.", rating: 5 },
      { name: "Arjun Malhotra", text: "A futuristic project with great ROI potential. Happy with my investment.", rating: 5 },
      { name: "Sakshi Taneja", text: "Good mix of office spaces and amenities. The cafeteria and lounges add real value.", rating: 4 },
    ],
    faqs: [
      { question: "What is the starting price of office spaces?", answer: "Office spaces start from ₹6,000 per sq. ft., with complete units from ₹12 Lakh onwards." },
      { question: "Is the project ready to move?", answer: "Partially — some towers are ready to move, while others are under construction with near-term possession." },
      { question: "What sizes are available?", answer: "Flexible office sizes from 200 to 750 sq. ft. in both bare-shell and fit-out options." },
      { question: "Is the project RERA approved?", answer: "Yes, fully RERA registered and compliant with all regulatory requirements." },
      { question: "What is the rental potential of Cyberthum offices?", answer: "High rental demand due to Noida Expressway location, proximity to IT parks, and Jewar Airport connectivity." },
      { question: "How is the connectivity?", answer: "Direct access to Noida Expressway with seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar International Airport." },
    ],
  },

  // ─── CO-WORKING SPACES ───────────────────────────────────────────────────

  {
    id: "alphathum-coworking",
    slug: "bhutani-alphathum-coworking",
    name: "Bhutani Alphathum",
    category: "Co-Working Space",
    tags: ["Ready to Move", "Co-Working", "Flagship"],
    image: alphathumCW3,
    gallery: [alphathumCW1, alphathumCW2, alphathumCW3, alphathumCW4],
    location: "Sector 90, Noida",
    locationDetail: "Sector 90, Noida — IT/ITES Hub, Near Noida Expressway",
    price: "₹12 Lacs – ₹14 Lacs*",
    priceNote: "₹8,955 – ₹13,000 per sq. ft. | Rent: ₹36,000/mo or ₹8,285/week",
    status: "Ready to Move",
    size: "100 – 150 sq. ft. | 25 Acres",
    config: "Co-working Space",
    availability: "For Sale",
    reviews: 28,
    description:
      "Bhutani Alphathum in Sector 90, Noida, is a flagship commercial project designed to redefine the future of co-working and serviced office spaces in India. Spread across 25 acres, Alphathum is best known for its futuristic architecture, Asia's largest rooftop infinity pool, and unmatched connectivity to Noida, Greater Noida, Delhi, and the upcoming Jewar Airport. Strategically located in Noida's IT/ITES hub, the project attracts leading multinational companies, startups, and entrepreneurs, creating a thriving business ecosystem with guaranteed high rental demand.\n\nThe project offers intelligently designed co-working spaces, cutting-edge amenities, and sustainable green building practices. With premium business lounges, high-speed elevators, 24x7 security, and vibrant social spaces like cafeterias and sky gardens, Alphathum goes beyond being just a workplace — it's a landmark for networking, innovation, and long-term investment growth. For investors, it provides assured returns and capital appreciation, making it one of the most rewarding commercial opportunities in NCR.",
    highlights: [
      "Flagship 25-Acre Commercial Development",
      "Asia's Largest Rooftop Infinity Pool",
      "Futuristic Architecture by Award-Winning Designers",
      "Co-working & Serviced Office Suites",
      "Strong Assured Returns & Capital Appreciation",
      "Premium Business Lounges & Sky Gardens",
      "Ready to Move — Immediate Possession",
      "Price from ₹12 Lacs — Rent from ₹36,000/mo",
    ],
    connectivity: [
      "Sector 90, Noida — Prime IT/ITES Corridor",
      "Excellent metro connectivity via Sector 91 Metro",
      "Direct access to Noida Expressway",
      "Connectivity to Delhi, Greater Noida & Jewar Airport",
      "15 mins from Connaught Place, Delhi",
    ],
    whyInvest: [
      "Asia's largest rooftop infinity pool — unmatched USP",
      "Flagship 25-acre integrated commercial campus",
      "Strong rental demand from MNCs and startups",
      "Assured returns with lease guarantee options",
      "Premium business ecosystem for networking & growth",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "50% of Total Value" },
      { stage: "On Completion", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "Asia's Largest Infinity Pool", "Business Lounges", "Sky Gardens",
      "High-Speed Elevators", "24x7 Security", "Power Backup",
      "Cafeteria", "Green Building Design", "Ample Parking",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is a trusted name in Indian real estate, renowned for delivering landmark commercial projects like Cyberthum, Alphathum, and City Center. With a strong focus on futuristic design, sustainability, and investor-friendly offerings, the developer has consistently introduced concepts that have transformed Noida's skyline. Their projects are not only architectural marvels but also high-return assets that ensure long-term value for investors.",
    clientReviews: [
      { name: "Ravi Sharma", text: "Alphathum is a brilliant investment choice! I bought a co-working unit here last year and the rental demand has been excellent. The location and connectivity make it one of the best commercial hubs in Noida.", rating: 5 },
      { name: "Neha Verma", text: "The design and facilities at Alphathum are world-class. I especially love the concept of the rooftop infinity pool and modern business lounges. It feels premium and futuristic. Slightly premium pricing, but totally worth it.", rating: 5 },
      { name: "Amit Kapoor", text: "Bhutani projects are always reliable, and Alphathum has exceeded my expectations. Great appreciation potential along with assured returns. Highly recommended for investors looking for steady growth.", rating: 4 },
    ],
    faqs: [
      { question: "What types of spaces are available at Alphathum?", answer: "Co-working spaces, serviced offices, and dedicated office suites from 100–150 sq. ft. per unit." },
      { question: "What is the price range of units?", answer: "₹8,955 – ₹13,000 per sq. ft. for purchase. Rental options from ₹36,000/month or ₹8,285/week." },
      { question: "Is there assured rental income?", answer: "Yes — lease guarantee and assured return schemes are available. Contact our team for current details." },
      { question: "How is the connectivity of Alphathum?", answer: "Excellent — Sector 90 Noida with Noida Expressway access, metro connectivity, and proximity to Delhi, Greater Noida & Jewar Airport." },
      { question: "What makes Alphathum unique?", answer: "Asia's largest rooftop infinity pool, futuristic architecture, and a premium 25-acre business ecosystem make it a landmark destination." },
      { question: "Who is the developer?", answer: "Bhutani Infra — known for landmark projects like Cyberthum, Alphathum, and City Center across NCR." },
    ],
  },

  {
    id: "cyberthum-coworking-pods",
    slug: "bhutani-cyberthum-coworking-pods",
    name: "Bhutani Cyberthum - Co-working Pods",
    category: "Co-Working Space",
    tags: ["Ready to Move", "MyPod", "~12% Returns"],
    image: cyberthumPods2,
    gallery: [cyberthumPods1, cyberthumPods2, cyberthumPods3, cyberthumPods4, cyberthumPods5],
    location: "Sector 140A, Noida",
    locationDetail: "Sector 140A, Noida — Noida Expressway",
    price: "₹6.26 Lakh – ₹7.25 Lakh*",
    priceNote: "₹55/sq.ft. lease guarantee · ~12% per annum assured returns",
    status: "Ready to Move",
    size: "100 – 500 sq. ft. Pods",
    config: "Co-working Pod (MyPod)",
    availability: "For Sale",
    reviews: 22,
    description:
      "Bhutani Cyberthum MyPod, located in Sector 140A Noida, introduces a new-age concept of co-working pods designed for startups, entrepreneurs, and freelancers. These compact, fully-furnished pods offer affordable yet premium office solutions in one of NCR's most advanced commercial hubs. With assured returns of ~12% per annum, a lease guarantee of ₹55 per sq. ft., and flexible unit sizes starting from just 100 sq. ft., Cyberthum MyPod makes it easier than ever for investors to enter the commercial real estate market with minimal risk.\n\nMore than just a workplace, Cyberthum offers a world-class ecosystem with smart infrastructure, high-speed internet, business lounges, and recreational spaces. Its strategic location along the Noida Expressway ensures seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar Airport, making it an ideal address for growing businesses. Whether you're looking for consistent rental income or long-term capital appreciation, Bhutani Cyberthum MyPod represents a futuristic, high-value investment opportunity.",
    highlights: [
      "New-Age Co-working Pod Concept (MyPod)",
      "Fully Furnished Compact Pods — Zero Setup Cost",
      "~12% Per Annum Assured Returns",
      "₹55/sq.ft. Lease Guarantee After Possession",
      "Low-Entry Investment from ₹6.26 Lakh",
      "Flexible Pod Sizes: 100–500 sq. ft.",
      "Noida Expressway — High Demand Corridor",
      "Strong Rental Income Potential",
    ],
    connectivity: [
      "Sector 140A, Noida — on Noida Expressway",
      "Direct connectivity to Delhi & Greater Noida",
      "Near upcoming Jewar International Airport",
      "Close to major IT parks and business hubs",
      "Metro connectivity in close proximity",
    ],
    whyInvest: [
      "Assured returns ~12% per annum",
      "Lease guarantee of ₹55/sq.ft. after possession",
      "Lowest entry point — from just ₹6.26 Lakh",
      "Fully furnished, zero setup cost",
      "Growing co-working demand in Noida Expressway corridor",
    ],
    paymentPlan: [
      { stage: "At Booking", detail: "50% of Total Value" },
      { stage: "During Construction", detail: "25%" },
      { stage: "On Possession", detail: "25%" },
    ],
    amenities: [
      "Business Lounges", "High-Speed Internet", "24x7 Security",
      "Power Backup", "Cafeteria", "Ample Parking", "Green Building Design",
    ],
    developer: "Bhutani Infra",
    developerDesc:
      "Bhutani Infra is among the most trusted names in commercial real estate, with a proven track record of delivering iconic projects like Alphathum, Cyberthum, and City Center. Known for its futuristic designs, sustainable developments, and investor-centric offerings, Bhutani Infra has established itself as a leader in creating high-value assets that combine innovation with long-term returns.",
    clientReviews: [
      { name: "Rajesh Kumar", text: "Investing in MyPod was the right decision! The lease guarantee and assured returns make it one of the safest and most rewarding commercial investments in NCR.", rating: 5 },
      { name: "Priya Mehta", text: "The affordability is a big plus. It's perfect for small businesses and startups looking to establish themselves in a premium location without huge overhead costs.", rating: 5 },
      { name: "Kunal Bhatia", text: "Cyberthum's infrastructure is world-class. I've already started leasing my pod and the rental demand is strong. Bhutani Infra really knows how to deliver value.", rating: 4 },
    ],
    faqs: [
      { question: "What is the price range of Cyberthum MyPods?", answer: "₹6.26 Lakh – ₹7.25 Lakh for co-working pods of 100–500 sq. ft." },
      { question: "Is there an assured return plan?", answer: "Yes, approximately 12% per annum assured returns on investment." },
      { question: "What is the lease guarantee after possession?", answer: "₹55 per sq. ft. per month lease guarantee after possession." },
      { question: "What sizes of pods are available?", answer: "Compact pods from 100 to 500 sq. ft. — fully furnished and ready to move." },
      { question: "How is the location advantage?", answer: "On Noida Expressway with seamless connectivity to Delhi, Greater Noida, and the upcoming Jewar International Airport." },
      { question: "Who is the developer?", answer: "Bhutani Infra — known for Alphathum, Cyberthum, and City Center across Delhi NCR." },
    ],
  },
];

// Helper to get properties by category
export const getPropertiesByCategory = (category: Property["category"]) =>
  allProperties.filter((p) => p.category === category);

// Category metadata for PropertiesSection cards
export const categories = [
  {
    key: "Residential" as const,
    title: "Residential",
    subtitle: "Premium Plots & Townships",
    location: "Dholera · Gujarat",
    desc: "Government-approved residential plots in India's first greenfield smart city — Dholera SIR.",
  },
  {
    key: "Commercial" as const,
    title: "Commercial",
    subtitle: "Offices, Co-Working & Retail",
    location: "Noida Expressway · Sector 90",
    desc: "Premium commercial spaces — co-working pods, office suites, and retail in Noida's top business corridors.",
  },
  {
    key: "Office Space" as const,
    title: "Office Spaces",
    subtitle: "Premium Office & Retail",
    location: "Noida · Sector 90 & 140A",
    desc: "World-class office spaces and retail shops with iconic designs, excellent connectivity, and high ROI potential.",
  },
  {
    key: "Co-Working Space" as const,
    title: "Co-Working Spaces",
    subtitle: "Flexible Workspaces",
    location: "Noida · Sector 90 & 140A",
    desc: "Modern co-working spaces and pods designed for startups, freelancers, and businesses seeking flexible work solutions.",
  },
];
