/**
 * Site-wide settings and the content of the industry pages.
 * Edit this file to change prices, copy or the booking link.
 */

/** Google Calendar appointment-schedule link. Leave "" until it exists:
 *  every "Book a call" button then falls back to the contact form. */
export const BOOKING_URL: string = "";

export const CONTACT_EMAIL = "sales@businessmotionlabs.com";

/* Real contact details. Anything left "" is simply not shown on the site. */
export const PHONE: string = ""; // e.g. "+91 98xxxxxxxx"
export const WHATSAPP: string = ""; // digits only with country code, e.g. "9198xxxxxxxx"
export const ADDRESS: string = "36 A/1, Industrial Area, Dada Nagar, Kanpur, Uttar Pradesh 208022, India"; // office address shown in the footer
export const LINKEDIN: string = ""; // company LinkedIn URL
export const INSTAGRAM: string = ""; // Instagram URL

export const TEAM = [
  {
    name: "Yash Raj",
    role: "Technology & Development",
    email: "yash@businessmotionlabs.com",
    bio: "Leads product and engineering: websites, booking and ordering flows, integrations and automation, and the quality bar every launch has to clear.",
    photo: "", // e.g. "/team/yash.jpg" once a real photo is added to /public/team
    linkedin: "",
  },
  {
    name: "Manas Dang",
    role: "Business Development & Operations",
    email: "manas@businessmotionlabs.com",
    bio: "Leads client strategy and delivery: audits, Growth Calls, project management and the monthly reporting that keeps every engagement accountable.",
    photo: "",
    linkedin: "",
  },
];

/** Tools we build with or connect to. Names only, no logos. */
export const TOOLS = [
  "Next.js", "React", "WordPress", "Shopify", "Vercel", "Google Business Profile", "Google Analytics 4",
  "Google Search Console", "Google Calendar", "Google Workspace", "Stripe", "Square", "Fresha", "Vagaro",
  "Mindbody", "OpenTable", "Toast", "Resend", "WhatsApp Business", "Zapier",
];

export const HOME_FAQ: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Getting started",
    items: [
      { q: "What exactly do you do?", a: "We fix the path between someone finding your business online and becoming a customer: a fast mobile website, online booking or ordering, an instant reply to every enquiry, automatic follow-ups and review requests, and a monthly report on what's working." },
      { q: "Who do you work with?", a: "Local businesses that live on bookings, calls and repeat customers: gyms and fitness studios, yoga and pilates studios, salons and beauty businesses, restaurants and cafés, and plumbers and other home-service businesses." },
      { q: "What happens on the free Growth Call?", a: "It's a 20-minute video call. Before it, we look at your website, Google profile and booking journey the way a new customer would. On the call we show you what we found and the three changes that would help most. There's no obligation, and you keep the findings." },
      { q: "Do you really audit my website for free?", a: "Yes. Send us your website through the form and we'll send a short report with the three things to fix first, usually within 2 working days." },
    ],
  },
  {
    category: "Pricing & payment",
    items: [
      { q: "How much does it cost?", a: "Every business is different, so we share pricing on the free Growth Call. You get one fixed price in writing: a one-time setup fee plus a simple monthly plan. No hidden extras." },
      { q: "How do I pay?", a: "By invoice, in US dollars or your local currency, by card or bank transfer. Setup is paid 50% to start and 50% at launch; the monthly plan is billed in advance." },
      { q: "Is there a long contract?", a: "No long lock-in. Monthly plans have a 3-month minimum, then run month to month with 30 days' notice." },
      { q: "Are there other costs?", a: "Only things you'd pay for anyway, directly to the provider: for example ad spend, SMS credits or your booking software subscription. We tell you about these up front." },
    ],
  },
  {
    category: "Working with us",
    items: [
      { q: "Where are you based, and what about time zones?", a: "Our delivery team is based in India and works with clients across the US, UK, Canada and Australia. Calls are scheduled in your time zone, and every message gets a reply within one working day." },
      { q: "How long until it's live?", a: "Most projects go live in about 3 weeks. You'll need around an hour with us in the first week; we handle the rest." },
      { q: "Do I own my website and data?", a: "Yes. Your website, domain, customer list and accounts are yours. If you ever leave, we hand everything over." },
      { q: "Can you work with the tools I already use?", a: "Usually, yes. We connect to common booking, ordering, payment and calendar tools rather than asking you to switch." },
    ],
  },
  {
    category: "Results",
    items: [
      { q: "Do you guarantee results?", a: "No honest agency can guarantee a number of new customers. What we do guarantee is a clear plan, work delivered as agreed, and a monthly report so you can see exactly what's happening." },
      { q: "How will I know it's working?", a: "Each month you get a short report: visits, enquiries, bookings or calls, reviews, and what we're improving next." },
      { q: "Can I see examples of your work?", a: "Yes. Our Work page shows concept projects for each industry we serve, so you can see exactly how we approach a booking flow, an ordering system or a quote form. Client results are published there with each client's permission." },
    ],
  },
];

/** Every "Book a call" button goes to /book, which shows the calendar (or a request form until BOOKING_URL is set). */
export const bookHref = "/book";
export const auditHref = "/audit";
export const isExternalBooking = false;

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Plan = {
  name: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
};

export type Industry = {
  slug: string;
  name: string; // "Gyms & Fitness"
  card: string; // one-line summary for the homepage card
  short: string; // "gyms"
  customers: string; // "members"
  eyebrow: string;
  headline: string;
  headlineMuted: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  journey: { step: string; leak: string }[];
  fixes: { title: string; items: string[] }[];
  valueLine: string;
  plans: Plan[];
  faq: { q: string; a: string }[];
};

const fitnessPlans = (s1: string, s2: string, s3: string, lapsed: string): Plan[] => [
  {
    name: "Starter",
    tagline: s1,
    features: [
      "Mobile landing page for your intro offer",
      "Online booking form and calendar",
      "Instant email/SMS reply to every enquiry",
      "Google Business Profile clean-up",
    ],
  },
  {
    name: "Growth",
    tagline: s2,
    recommended: true,
    features: [
      "Everything in Starter",
      "Full website, up to 6 pages",
      "Automatic lead follow-ups",
      "Missed-call text-back and review requests",
      "Monthly results report",
    ],
  },
  {
    name: "Pro",
    tagline: s3,
    features: [
      "Everything in Growth",
      "Online sign-up and payments",
      `Win-back messages for ${lapsed}`,
      "Landing pages for your ads",
      "Monthly strategy call",
    ],
  },
];

const commonFaq = (customers: string) => [
  {
    q: "How much does it cost?",
    a: "It depends on the plan and the size of your business. After the free Growth Call you get a fixed price in writing: setup plus a monthly fee, no hidden extras.",
  },
  {
    q: "How long does it take?",
    a: "Most projects are live in about 3 weeks. You'll spend around an hour with us in week one, and we handle the rest.",
  },
  {
    q: "Do I have to change the tools I already use?",
    a: "Usually not. We connect to the booking, payment and calendar tools you already have wherever we can.",
  },
  {
    q: "Is there a contract?",
    a: "Monthly plans have a 3-month minimum, then run month to month with 30 days' notice. Setup is paid 50% upfront and 50% at launch.",
  },
  {
    q: "How do I know it's working?",
    a: `Every month you get a short report: enquiries, bookings and new ${customers}, and what we're improving next.`,
  },
];

export const INDUSTRIES: Record<string, Industry> = {
  gyms: {
    slug: "gyms",
    card: "Free-trial booking, instant replies, member follow-up",
    name: "Gyms & Fitness",
    short: "gyms",
    customers: "members",
    eyebrow: "FOR GYMS & FITNESS STUDIOS",
    headline: "More members from the people",
    headlineMuted: "who already find you.",
    intro:
      "People search for a gym, look at your site on their phone and decide in seconds. We make that path fast and simple: a clear free-trial offer, online booking, and an instant reply to every enquiry.",
    image: unsplash("photo-1517836357463-d25dfeac3438"),
    imageAlt: "Person preparing to lift a barbell in a gym",
    imageCredit: "Photo: Victor Freitas / Unsplash",
    journey: [
      { step: "Finds you on Google", leak: "Weak profile or few reviews: they pick a competitor" },
      { step: "Opens your site on a phone", leak: "Slow or hard to use: they leave in seconds" },
      { step: "Wants a free trial", leak: "No clear button: they never ask" },
      { step: "Sends an enquiry", leak: "No reply for hours: they join somewhere else" },
    ],
    fixes: [
      { title: "Attract", items: ["Google Business Profile clean-up", "Fast, mobile-first website", "Automatic review requests"] },
      { title: "Convert", items: ["One clear 'Book a free trial' button", "Online trial booking with a calendar", "Tap-to-call and missed-call text-back"] },
      { title: "Follow up", items: ["Instant reply to every enquiry", "Reminders so trials actually show up", "Win-back messages for lapsed members"] },
    ],
    valueLine:
      "At $50 a month, one member is worth $600 a year. A handful of extra members a month adds up fast.",
    plans: fitnessPlans("Trial Booster", "Member Engine", "Full Funnel", "cancelled members"),
    faq: commonFaq("members"),
  },
  yoga: {
    slug: "yoga",
    card: "Class booking, intro offers, bringing first-timers back",
    name: "Yoga & Pilates",
    short: "yoga studios",
    customers: "students",
    eyebrow: "FOR YOGA & PILATES STUDIOS",
    headline: "More students from the people",
    headlineMuted: "who already find you.",
    intro:
      "New students want to see your class times, try a first class and feel welcome. We make your schedule easy to find, booking simple, and follow-up automatic, so first-timers become regulars.",
    image: unsplash("photo-1761034114082-c2d63456a82a"),
    imageAlt: "People practising yoga in a studio class",
    imageCredit: "Photo: Christian Harb / Unsplash",
    journey: [
      { step: "Finds you on Google or Instagram", leak: "Few reviews or old posts: they try another studio" },
      { step: "Checks your class times", leak: "Schedule hard to find on a phone: they give up" },
      { step: "Wants a first class", leak: "No intro offer or booking button: they wait" },
      { step: "Comes once", leak: "No follow-up: they never come back" },
    ],
    fixes: [
      { title: "Attract", items: ["Google Business Profile clean-up", "Fast, mobile-first website", "Automatic review requests"] },
      { title: "Convert", items: ["Clear class schedule and intro offer", "Online class booking", "Tap-to-call and missed-call text-back"] },
      { title: "Follow up", items: ["Instant reply to every question", "Class reminders to cut no-shows", "'We miss you' messages after 2–3 weeks away"] },
    ],
    valueLine:
      "At $100 a month, one student is worth $1,200 a year. Every first-timer who becomes a regular adds up fast.",
    plans: fitnessPlans("Intro Offer Booster", "Student Engine", "Full Studio", "lapsed students"),
    faq: commonFaq("students"),
  },
  salons: {
    slug: "salons",
    card: "Online booking, fewer no-shows, rebooking reminders",
    name: "Salons & Beauty",
    short: "salons",
    customers: "clients",
    eyebrow: "FOR HAIR, BEAUTY & WAXING SALONS",
    headline: "Fuller chairs from the people",
    headlineMuted: "who already find you.",
    intro:
      "Clients want to see your work, check prices and book in a few taps, any time of day. We set up online booking, reminders that cut no-shows, and rebooking messages that bring regulars back.",
    image: unsplash("photo-1580618672591-eb180b1a973f"),
    imageAlt: "Hairstylist blow-drying a client's hair",
    imageCredit: "Photo: Adam Winger / Unsplash",
    journey: [
      { step: "Finds you on Google or Instagram", leak: "Few photos or reviews: they pick another salon" },
      { step: "Looks for services and prices", leak: "No price list on a phone: they move on" },
      { step: "Wants to book", leak: "Has to call during opening hours: they give up" },
      { step: "Books but forgets", leak: "No reminder: an empty chair" },
    ],
    fixes: [
      { title: "Attract", items: ["Google Business Profile clean-up", "Mobile site with services, prices and photos", "Automatic review requests"] },
      { title: "Convert", items: ["Online booking with the tool you already use", "Instagram 'Book now' link", "Missed-call text-back"] },
      { title: "Follow up", items: ["Reminders to cut no-shows", "'Time to rebook' messages", "Win-back offers after 60+ days away"] },
    ],
    valueLine:
      "A regular client at $60 a visit, 8 visits a year, is worth $480. Fewer no-shows and more rebookings add up fast.",
    plans: [
      {
        name: "Starter",
        tagline: "Book Online",
        features: ["Mobile booking page", "Online booking with Fresha, Vagaro, Square or similar", "Instagram 'Book now' link", "Google Business Profile clean-up"],
      },
      {
        name: "Growth",
        tagline: "Full Chairs",
        recommended: true,
        features: ["Everything in Starter", "Full website: services, prices, gallery", "Reminders to cut no-shows", "Rebooking reminders and review requests", "Monthly results report"],
      },
      {
        name: "Pro",
        tagline: "Loyal Clients",
        features: ["Everything in Growth", "Win-back offers for lapsed clients", "Gift cards and packages online", "Birthday and seasonal offers", "Monthly strategy call"],
      },
    ],
    faq: commonFaq("clients"),
  },
  restaurants: {
    slug: "restaurants",
    card: "Direct ordering, table booking, a guest list you own",
    name: "Restaurants & Cafés",
    short: "restaurants",
    customers: "guests",
    eyebrow: "FOR RESTAURANTS & CAFÉS",
    headline: "More direct orders from people",
    headlineMuted: "already looking for you.",
    intro:
      "Hungry people decide fast. We give you a quick mobile menu, direct ordering and table booking without app commissions, and a guest list you own, so first-time guests come back.",
    image: unsplash("photo-1466978913421-dad2ebd01d17"),
    imageAlt: "Friends sharing burgers and fries at a table",
    imageCredit: "Photo: Dan Gold / Unsplash",
    journey: [
      { step: "Searches 'restaurants near me'", leak: "Old photos or few reviews: they choose another" },
      { step: "Opens your menu on a phone", leak: "PDF menu or slow site: they leave" },
      { step: "Wants to order or book", leak: "No direct option: they go elsewhere" },
      { step: "Orders through a delivery app", leak: "The app takes a big commission and keeps their details" },
    ],
    fixes: [
      { title: "Attract", items: ["Google Business Profile with fresh photos", "Fast mobile menu (no PDFs)", "Automatic review requests"] },
      { title: "Convert", items: ["Direct online ordering, no app commission", "Online table booking", "Instagram 'Order / Book' links"] },
      { title: "Follow up", items: ["Booking reminders to cut no-shows", "Guest list for offers and events", "Win-back offers for guests who stopped coming"] },
    ],
    valueLine:
      "A regular guest spending $40 a month is worth $480 a year. Add the delivery-app commission you save on every direct order.",
    plans: [
      {
        name: "Starter",
        tagline: "Direct Orders",
        features: ["Fast mobile menu page", "Direct online ordering or booking link", "Instagram 'Order / Book' links", "Google Business Profile clean-up"],
      },
      {
        name: "Growth",
        tagline: "Full Tables",
        recommended: true,
        features: ["Everything in Starter", "Full website: menu, photos, events", "Table booking with reminders", "Guest list and review requests", "Monthly results report"],
      },
      {
        name: "Pro",
        tagline: "Regulars Club",
        features: ["Everything in Growth", "Loyalty and win-back offers", "Birthday and event campaigns", "Landing pages for ads and catering", "Monthly strategy call"],
      },
    ],
    faq: commonFaq("guests"),
  },
  plumbers: {
    slug: "plumbers",
    card: "Tap-to-call, quote requests, missed-call text-back",
    name: "Plumbers & Home Services",
    short: "plumbers and home-service businesses",
    customers: "jobs",
    eyebrow: "FOR PLUMBERS & HOME SERVICES",
    headline: "More booked jobs from people",
    headlineMuted: "already searching for you.",
    intro:
      "When a pipe bursts, people call the first business that answers. We put you near the top, make calling and quote requests one tap, and reply instantly, even when you're on a job.",
    image: unsplash("photo-1676210134188-4c05dd172f89"),
    imageAlt: "Plumber working on a pipe in a wall",
    imageCredit: "Photo: Timur Shakerzianov / Unsplash",
    journey: [
      { step: "Searches 'plumber near me'", leak: "Not near the top: they call a competitor" },
      { step: "Opens your site on a phone", leak: "No tap-to-call button: they leave" },
      { step: "Wants a price or a visit", leak: "No quote form: they ask someone else" },
      { step: "Calls while you're busy", leak: "No call back within minutes: the job goes elsewhere" },
    ],
    fixes: [
      { title: "Attract", items: ["Google Business Profile with service areas", "Fast mobile site with service pages", "Review requests after every job"] },
      { title: "Convert", items: ["Big tap-to-call button on every page", "Online quote request form", "Missed-call text-back, day and night"] },
      { title: "Follow up", items: ["Instant reply to every enquiry", "Automatic follow-up on open quotes", "Service reminders to past customers"] },
    ],
    valueLine:
      "At $350 a job, just 1–2 extra booked jobs a month make a real difference over a year.",
    plans: [
      {
        name: "Starter",
        tagline: "Calls & Quotes",
        features: ["Tap-to-call landing page", "Online quote request form", "Instant SMS/email reply to enquiries", "Google Business Profile clean-up"],
      },
      {
        name: "Growth",
        tagline: "Booked Jobs",
        recommended: true,
        features: ["Everything in Starter", "Full website with service and area pages", "Missed-call text-back", "Quote follow-ups and review requests", "Monthly results report"],
      },
      {
        name: "Pro",
        tagline: "Full Pipeline",
        features: ["Everything in Growth", "Online booking with deposits", "Service reminders to past customers", "Landing pages for ads", "Monthly strategy call"],
      },
    ],
    faq: commonFaq("customers"),
  },
};

export const INDUSTRY_LIST = [
  INDUSTRIES.gyms,
  INDUSTRIES.yoga,
  INDUSTRIES.salons,
  INDUSTRIES.restaurants,
  INDUSTRIES.plumbers,
];

/* ---------- Concept projects (Work page). Fictional brands, clearly labelled as concepts. ---------- */
export type Concept = {
  slug: string;
  brand: string;
  industry: string;
  service: string;
  mock: "trial" | "schedule" | "salon" | "order" | "quote" | "dashboard";
  summary: string;
  problem: string;
  solution: string[];
  outcome: string;
  image: string;
};

export const CONCEPTS: Concept[] = [
  {
    slug: "ironpulse", brand: "IronPulse Fitness", industry: "Gyms & Fitness", service: "Trial booking funnel",
    mock: "trial",
    summary: "A free-trial funnel that books, confirms and reminds, without anyone at the front desk.",
    problem: "Visitors liked the gym but had to call or walk in to try it. Evening enquiries waited until the next day.",
    solution: ["One-tap 'Book a free trial' on every page", "Live class and slot picker", "Instant SMS + email confirmation", "Reminder 2 hours before, and a follow-up after the visit"],
    outcome: "Designed to turn after-hours visitors into booked trials and cut no-shows.",
    image: unsplash("photo-1517836357463-d25dfeac3438", 1200),
  },
  {
    slug: "lotusflow", brand: "Lotus Flow Studio", industry: "Yoga & Pilates", service: "Class schedule & intro offer",
    mock: "schedule",
    summary: "A schedule that's actually readable on a phone, with an intro offer built into every class.",
    problem: "The timetable was a PDF. First-timers couldn't tell which class suited them, so they never booked.",
    solution: ["Mobile weekly schedule with level filters", "Intro-pass offer on first booking", "Waitlist with automatic spot release", "'We miss you' message after two weeks away"],
    outcome: "Designed to make the first class easy and the second one automatic.",
    image: unsplash("photo-1761034114082-c2d63456a82a", 1200),
  },
  {
    slug: "velvet", brand: "Velvet & Co. Salon", industry: "Salons & Beauty", service: "Online booking & reminders",
    mock: "salon",
    summary: "Book a stylist, service and time in under a minute, with reminders that protect the diary.",
    problem: "Bookings only happened by phone during opening hours, and no-shows left gaps every week.",
    solution: ["Service menu with prices and durations", "Stylist and time-slot picker", "Reminders 24 hours and 2 hours before", "'Time to rebook' message after 5 weeks"],
    outcome: "Designed to fill chairs outside opening hours and reduce no-shows.",
    image: unsplash("photo-1580618672591-eb180b1a973f", 1200),
  },
  {
    slug: "harbor", brand: "Harbor Street Kitchen", industry: "Restaurants & Cafés", service: "Direct ordering & table booking",
    mock: "order",
    summary: "Commission-free ordering and table booking, with a guest list the restaurant owns.",
    problem: "Most orders came through delivery apps that took a large commission and kept the customer details.",
    solution: ["Fast mobile menu with photos", "Direct pickup and delivery ordering", "Table booking with reminders", "Guest list for offers and events"],
    outcome: "Designed to move repeat orders from apps to the restaurant's own channel.",
    image: unsplash("photo-1466978913421-dad2ebd01d17", 1200),
  },
  {
    slug: "rapidflow", brand: "RapidFlow Plumbing", industry: "Home Services", service: "Calls, quotes & missed-call text-back",
    mock: "quote",
    summary: "Every caller gets an answer, even when the plumber is under a sink.",
    problem: "Calls went unanswered during jobs, and those customers simply rang the next plumber on Google.",
    solution: ["Sticky tap-to-call button", "Two-step quote request with photo upload", "Automatic text-back for missed calls", "Quote follow-up after 48 hours"],
    outcome: "Designed to capture the jobs that used to be lost to voicemail.",
    image: unsplash("photo-1676210134188-4c05dd172f89", 1200),
  },
  {
    slug: "pulse-report", brand: "Growth Report", industry: "All industries", service: "Monthly reporting",
    mock: "dashboard",
    summary: "One page that shows an owner what happened this month, in plain English.",
    problem: "Owners had analytics accounts they never opened, and no idea which changes were working.",
    solution: ["Visits, enquiries, bookings and calls in one view", "Review count and rating trend", "What changed this month, and why", "Next month's priorities"],
    outcome: "Designed so every client can see progress in two minutes.",
    image: unsplash("photo-1551434678-e076c223a692", 1200),
  },
];

/* ---------- Careers. Edit roles here; remove any you are not hiring for. ---------- */
export const ROLES = [
  {
    title: "Sales Development Representative (US & UK markets)",
    type: "Full-time · Remote or Kanpur · Evening shift (US/UK hours)",
    summary: "Research local businesses, run personalised outreach, book Growth Calls and keep the CRM spotless.",
    needs: ["Excellent spoken and written English", "Comfortable on calls with business owners", "Organised and target-driven"],
  },
  {
    title: "Web Developer (Next.js / React)",
    type: "Full-time · Remote",
    summary: "Build fast, mobile-first websites, booking and ordering flows, and the integrations behind them.",
    needs: ["Strong React and TypeScript", "An eye for clean UI on small screens", "Experience with APIs and third-party integrations"],
  },
  {
    title: "Digital Marketing & Local SEO Executive",
    type: "Full-time · Remote or Kanpur",
    summary: "Own Google Business Profiles, local SEO, review programmes and monthly client reports.",
    needs: ["Hands-on local SEO experience", "Comfort with GA4 and Search Console", "Clear written communication"],
  },
  {
    title: "Business Development Intern",
    type: "Internship · 3–6 months · Remote",
    summary: "Learn agency sales from the ground up: lead research, audits, outreach and call preparation.",
    needs: ["Curious and quick to learn", "Good English", "Final-year students and recent graduates welcome"],
  },
];
