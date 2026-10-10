"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import ContactForm from "./components/ContactForm";
import MediaShowcase from "./components/MediaShowcase";
import { SiteFooter } from "./components/SiteChrome";
import { INDUSTRY_LIST, bookHref, isExternalBooking } from "./lib/site";

const bookLinkProps = isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {};

const services = [
  {
    number: "01",
    title: "Digital Experiences",
    description:
      "High-performance websites, landing pages and digital experiences designed around how customers discover and choose a business.",
  },
  {
    number: "02",
    title: "E-commerce & Ordering",
    description:
      "Online stores, ordering systems, payments and customer journeys that turn digital traffic into real business.",
  },
  {
    number: "03",
    title: "Growth & SEO",
    description:
      "Search visibility, analytics and conversion improvements that make businesses easier to find and easier to choose.",
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Smarter workflows, notifications, CRM connections and integrations that reduce repetitive work.",
  },
  {
    number: "05",
    title: "Custom Technology",
    description:
      "Web applications, dashboards, APIs and internal tools built around the way your business actually operates.",
  },
  {
    number: "06",
    title: "Digital Operations",
    description:
      "Connected systems that bring your digital infrastructure together into one business engine.",
  },
];

const projects = [
  {
    number: "01",
    type: "REFERENCE PROJECT",
    title: "SitkaSea Daddy",
    category: "Hospitality / Online Ordering",
    description:
      "A custom digital experience designed around online ordering, payments, customer confirmation and mobile-first usability.",
    tags: ["Website", "Ordering", "Payments", "Mobile"],
  },
  {
    number: "02",
    type: "CONCEPT BUILD",
    title: "RestaurantOS",
    category: "Restaurant Technology",
    description:
      "A concept platform connecting menus, online ordering, customer information and restaurant operations.",
    tags: ["Ordering", "CRM", "Automation", "Analytics"],
  },
  {
    number: "03",
    type: "CONCEPT BUILD",
    title: "FitFlow",
    category: "Fitness / Lead Generation",
    description:
      "A concept digital system designed to help fitness businesses capture leads, manage inquiries and improve conversion.",
    tags: ["Lead Capture", "CRM", "Automation", "Growth"],
  },
  {
    number: "04",
    type: "CONCEPT BUILD",
    title: "LocalPro",
    category: "Local Business",
    description:
      "A concept digital growth platform connecting discovery, lead capture, customer communication and operations.",
    tags: ["SEO", "Leads", "CRM", "Automation"],
  },
];

const roadmap = [
  {
    number: "01",
    title: "Understand",
    short: "DISCOVER",
    description:
      "We start by understanding your business, customers, goals, existing technology and the problems you are trying to solve.",
    deliverable: "Business & Goal Brief",
  },
  {
    number: "02",
    title: "Audit",
    short: "ANALYZE",
    description:
      "We analyze the current digital presence across website, mobile experience, SEO, conversion, customer journey, analytics and technology.",
    deliverable: "Digital Audit Report",
  },
  {
    number: "03",
    title: "Opportunity Map",
    short: "IDENTIFY",
    description:
      "We turn the findings into a clear picture of critical issues, missed opportunities, quick wins and areas with the strongest growth potential.",
    deliverable: "Opportunity Map",
  },
  {
    number: "04",
    title: "Roadmap",
    short: "PLAN",
    description:
      "We prioritize what should happen now, next and later — creating a practical digital roadmap around your business goals.",
    deliverable: "Growth Roadmap",
  },
  {
    number: "05",
    title: "Build",
    short: "EXECUTE",
    description:
      "We design and develop the right solution, whether that means a website, ordering platform, automation, CRM, SEO system or custom technology.",
    deliverable: "Digital System",
  },
  {
    number: "06",
    title: "Optimize",
    short: "IMPROVE",
    description:
      "After launch, we use performance data, customer behavior and business feedback to continuously improve the system.",
    deliverable: "Optimization Plan",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductVisual({ index }: { index: number }) {
  const visuals = [
    {
      label: "ORDERING SYSTEM",
      title: "Your digital storefront",
      rows: ["Menu", "Order", "Payment", "Confirmation"],
    },
    {
      label: "RESTAURANT TECHNOLOGY",
      title: "Everything connected",
      rows: ["Customers", "Orders", "Operations", "Analytics"],
    },
    {
      label: "LEAD ENGINE",
      title: "Turn attention into action",
      rows: ["Discovery", "Inquiry", "Follow-up", "Conversion"],
    },
    {
      label: "GROWTH PLATFORM",
      title: "Make the business easier to find",
      rows: ["Search", "Content", "Leads", "Growth"],
    },
  ];

  const visual = visuals[index];

  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[28px] bg-[#0b1f3a] shadow-2xl sm:h-[520px]">
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:55px_55px]" />

      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative flex h-full flex-col justify-between p-7 text-white sm:p-10">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/45">
            {visual.label}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white/50">
            ↗
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm tracking-wide text-white/40">
            BUSINESS MOTION LABS
          </p>

          <h3 className="max-w-xl text-4xl font-medium tracking-[-0.055em] sm:text-6xl">
            {visual.title}
          </h3>

          <div className="mt-10 grid gap-2 sm:grid-cols-2">
            {visual.rows.map((row, rowIndex) => (
              <motion.div
                key={row}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rowIndex * 0.08 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="text-xs text-white/65">{row}</span>
                <span className="text-xs text-white/25">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectStage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const inView = useInView(sectionRef, { amount: 0.2 });

  useEffect(() => {
    if (!inView) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / totalScrollable)
      );

      setActiveProject(
        Math.min(
          projects.length - 1,
          Math.floor(progress * projects.length)
        )
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  const project = projects[activeProject];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative h-[400vh] bg-[#0b1f3a] text-white"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-6 text-[10px] font-bold tracking-[0.25em] text-white/35">
                SELECTED WORK
              </p>

              <div className="mb-8 flex gap-2">
                {projects.map((item, index) => (
                  <div
                    key={item.number}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeProject
                        ? "w-12 bg-white"
                        : "w-5 bg-white/15"
                    }`}
                  />
                ))}
              </div>

              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="mb-4 text-[9px] font-bold tracking-[0.22em] text-white/35">
                  {project.type}
                </p>

                <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
                  {project.title}
                </h2>

                <p className="mt-5 text-sm tracking-wide text-white/45">
                  {project.category}
                </p>

                <p className="mt-8 max-w-xl text-base leading-7 text-white/55">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-4 py-2 text-[9px] font-bold tracking-[0.14em] text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductVisual index={activeProject} />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.2em] text-white/25">
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}

function AuditRoadmap() {
  const [active, setActive] = useState(0);
  const step = roadmap[active];

  return (
    <section
      id="approach"
      className="bg-[#071528] text-white"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/30">
              OUR APPROACH
            </p>

            <h2 className="mt-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Before we build,
              <br />
              <span className="text-white/25">we understand.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-white/45">
              We don't begin with a template. We begin by understanding where
              your business is today, what's holding it back and where the
              strongest opportunities are.
            </p>
          </Reveal>

          <div>
            <div className="grid border-t border-white/10 sm:grid-cols-3">
              {roadmap.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`border-b border-r border-white/10 p-5 text-left transition sm:p-6 ${
                    active === index
                      ? "bg-white text-[#071528]"
                      : "text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.2em] opacity-50">
                      {item.number}
                    </span>

                    <span className="text-[9px] font-bold tracking-[0.15em] opacity-40">
                      {item.short}
                    </span>
                  </div>

                  <div className="mt-10 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/10 py-12"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.22em] text-white/30">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
                    {step.title}
                  </h3>

                  <p className="mt-7 max-w-2xl text-base leading-7 text-white/50">
                    {step.description}
                  </p>
                </div>

                <div className="self-end">
                  <div className="rounded-full border border-white/10 px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-white/45">
                    DELIVERABLE
                  </div>

                  <p className="mt-3 text-sm text-white/65">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/35">
                NOW → NEXT → LATER
              </p>

              <a
                href="#contact"
                className="w-fit rounded-full bg-white px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-[#071528] transition hover:bg-white/85"
              >
                START WITH AN AUDIT →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function PhotoPanel({
  src,
  alt,
  eyebrow,
  title,
  className = "",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#071528] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-[#071528]/30 to-black/5" />
      <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6 text-white sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.22em] text-white/55">
            {eyebrow}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white/60 backdrop-blur">
            ↗
          </span>
        </div>
        <div>
          <h3 className="max-w-xl text-3xl font-medium leading-[1] tracking-[-0.045em] sm:text-4xl">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenu(false);
  };

  const approachVisuals = [
    {
      label: "01 / UNDERSTAND",
      title: "Start with the business, not the template.",
      description:
        "We map goals, customers, technology, friction points and the moments that matter.",
      chips: ["Goals", "Customers", "Technology", "Pain points"],
    },
    {
      label: "02 / AUDIT",
      title: "Find what is holding digital growth back.",
      description:
        "We examine the website, mobile experience, SEO, conversion journey, analytics and technology.",
      chips: ["Performance", "Mobile UX", "SEO", "Conversion"],
    },
    {
      label: "03 / OPPORTUNITY MAP",
      title: "Turn problems into a clear priority list.",
      description:
        "We separate quick wins from high-impact opportunities and identify what deserves attention first.",
      chips: ["Quick wins", "High impact", "Missed demand", "Priorities"],
    },
    {
      label: "04 / ROADMAP",
      title: "Know what should happen now, next and later.",
      description:
        "We create a practical roadmap tied to business goals instead of a collection of disconnected tasks.",
      chips: ["Now", "Next", "Later", "Measure"],
    },
    {
      label: "05 / BUILD",
      title: "Connect the right technology.",
      description:
        "We design and develop the digital experience, applications, integrations and systems your business needs.",
      chips: ["Experience", "Data", "Automation", "Integrations"],
    },
    {
      label: "06 / OPTIMIZE",
      title: "Keep improving the engine.",
      description:
        "After launch, performance data and customer behavior guide the next round of improvements.",
      chips: ["Traffic", "Leads", "Conversion", "Retention"],
    },
  ];

  const serviceVisuals = [
    {
      eyebrow: "DIGITAL EXPERIENCE",
      title: "Discover → Explore → Trust → Convert",
      className:
        "bg-[linear-gradient(135deg,#0b1f3a_0%,#123b68_55%,#071528_100%)]",
    },
    {
      eyebrow: "ORDERING SYSTEM",
      title: "Menu → Cart → Payment → Confirmation",
      className:
        "bg-[linear-gradient(135deg,#071528_0%,#173b4f_55%,#0b1f3a_100%)]",
    },
    {
      eyebrow: "SEARCH & GROWTH",
      title: "Search → Traffic → Leads → Growth",
      className:
        "bg-[linear-gradient(135deg,#081a2d_0%,#163c5c_55%,#071528_100%)]",
    },
    {
      eyebrow: "AUTOMATION",
      title: "Trigger → Workflow → Notification → Action",
      className:
        "bg-[linear-gradient(135deg,#0b1f3a_0%,#243d5a_55%,#071528_100%)]",
    },
    {
      eyebrow: "CUSTOM TECHNOLOGY",
      title: "Interface → API → Data → Application",
      className:
        "bg-[linear-gradient(135deg,#071528_0%,#17365f_55%,#0b1f3a_100%)]",
    },
    {
      eyebrow: "DIGITAL OPERATIONS",
      title: "Customers → Systems → Insights → Decisions",
      className:
        "bg-[linear-gradient(135deg,#0a1b2e_0%,#16445a_55%,#071528_100%)]",
    },
  ];

  const industries = [
    ...INDUSTRY_LIST.map((i) => ({
      title: i.name,
      detail: i.card,
      image: i.image.replace("w=1600", "w=1200"),
      href: `/${i.slug}`,
    })),
    {
      title: "Other Local Businesses",
      detail: "Clinics, studios, professional and local services",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      href: "#contact",
    },
  ];

  const process = [
    ["01", "Design", "Turn strategy into a clear, premium digital experience."],
    ["02", "Build", "Develop the website, application, integrations or systems."],
    ["03", "Test", "QA across devices, journeys, forms, payments and functionality."],
    ["04", "Launch", "Put the system in front of real customers."],
    ["05", "Measure", "Track performance, behavior and business outcomes."],
    ["06", "Improve", "Continuously optimize what we built."],
  ];

  return (
    <main id="top" className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-5 lg:px-8">
          <div className="relative flex items-center justify-between rounded-full border border-black/[0.08] bg-[#f7f8f5]/90 px-4 py-3 shadow-sm backdrop-blur-xl">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">
                B
              </div>
              <span className="text-[10px] font-bold tracking-[0.14em] sm:text-[11px] sm:tracking-[0.16em]">
                BUSINESS MOTION LABS
              </span>
            </button>

            <nav className="hidden items-center gap-7 md:flex">
              {[
                ["Industries", "#industries"],
                ["Services", "#services"],
                ["Work", "#work"],
                ["Process", "#process"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-black/45 transition hover:text-black"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={bookHref}
                {...bookLinkProps}
                className="rounded-full bg-[#071528] px-4 py-2.5 text-[9px] font-bold tracking-[0.12em] text-white transition hover:bg-[#12335d] sm:px-5 sm:text-[10px]"
              >
                BOOK A FREE CALL
              </a>

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
              >
                {mobileMenu ? "×" : "☰"}
              </button>
            </div>

            {mobileMenu && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-3xl border border-black/10 bg-[#f7f8f5] p-5 shadow-xl md:hidden">
                <div className="grid gap-1">
                  {[
                    ["Industries", "#industries"],
                    ["Services", "#services"],
                    ["Work", "#work"],
                    ["Process", "#process"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMobileMenu(false)}
                      className="rounded-xl px-4 py-4 text-sm text-black/60 hover:bg-black/[0.04] hover:text-black"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute bottom-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-slate-100 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(7,21,40,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(7,21,40,.6)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-14 pt-40 lg:px-10 lg:pb-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.38fr] lg:items-end">
            <div>
              <Reveal>
                <p className="mb-8 text-[10px] font-bold tracking-[0.28em] text-black/35">
                  WEBSITES / ONLINE BOOKING / AUTOMATIC FOLLOW-UP
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                  More
                  <br />
                  Customers.
                  <br />
                  <span className="text-black/20">Less Effort.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-base leading-7 text-black/55">
                      We build websites, online booking and automatic
                      follow-up for gyms, studios, salons, restaurants and
                      home-service businesses, so more of the people who find
                      you online actually become customers.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <a
                        href={bookHref}
                        {...bookLinkProps}
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#071528] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-white transition hover:bg-[#12335d]"
                      >
                        BOOK A FREE GROWTH CALL <span aria-hidden>→</span>
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.14em] text-black/60 hover:text-black"
                      >
                        GET A FREE WEBSITE AUDIT <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </div>

                  <a
                    href="#industries"
                    className="group flex w-fit items-center gap-4 text-[10px] font-bold tracking-[0.16em]"
                  >
                    WHO WE HELP
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition group-hover:bg-[#071528] group-hover:text-white">
                      ↓
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="hidden lg:block">
                <PhotoPanel
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern technology-focused workspace"
                  eyebrow="DIGITAL BUSINESS / TECHNOLOGY"
                  title="Digital systems built around the way your business actually operates."
                  className="min-h-[560px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <p className="mb-8 text-[10px] font-bold tracking-[0.25em] text-black/30">
              THE IDEA
            </p>
            <h2 className="max-w-6xl text-4xl font-medium leading-[1] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Your business deserves more than just a{" "}
              <span className="text-black/20">website.</span>
            </h2>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              <p className="text-lg leading-8 text-black/55">
                Your digital presence is more than a homepage. It is the path
                customers take from discovery to decision.
              </p>
              <p className="text-lg leading-8 text-black/55">
                We connect the experiences, technology and systems behind that
                journey so the digital side of the business works harder.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="scroll-mt-24 bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30">
                OUR APPROACH
              </p>
              <h2 className="mt-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl">
                Before we build,
                <br />
                <span className="text-white/25">we understand.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-7 text-white/45">
                We don't begin with a template. We begin by understanding
                where your business is today, what's holding it back and where
                the strongest opportunities are.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Audit", "Opportunity", "Roadmap", "Build", "Optimize"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-bold tracking-[0.14em] text-white/40"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </Reveal>

            <div>
              <motion.div
                key={activeApproach}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[540px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1f3a] p-6 shadow-2xl sm:p-8"
              >
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:52px_52px]" />
                <motion.div
                  animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl"
                />

                <div className="relative flex min-h-[490px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.24em] text-white/40">
                        {approachVisuals[activeApproach].label}
                      </p>
                      <p className="mt-2 text-xs text-white/25">
                        BUSINESS MOTION LABS
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/45">
                      ↗
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                    <div>
                      <h3 className="max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-5xl">
                        {approachVisuals[activeApproach].title}
                      </h3>
                      <p className="mt-6 max-w-lg text-sm leading-6 text-white/45">
                        {approachVisuals[activeApproach].description}
                      </p>

                      <div className="mt-8 grid gap-2 sm:grid-cols-2">
                        {approachVisuals[activeApproach].chips.map(
                          (item, index) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.07,
                              }}
                              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3"
                            >
                              <span className="text-xs text-white/65">
                                {item}
                              </span>
                              <span className="text-xs text-white/25">→</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold tracking-[0.18em] text-white/35">
                          SYSTEM VIEW
                        </span>
                        <span className="text-[9px] text-white/25">
                          0{activeApproach + 1}
                        </span>
                      </div>

                      <div className="mt-8 flex h-36 items-end gap-2">
                        {[34, 48, 42, 64, 58, 76, 70, 92].map(
                          (height, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{
                                height: `${Math.max(
                                  18,
                                  height + activeApproach * 2
                                )}%`,
                              }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.04,
                              }}
                              className="flex-1 rounded-t-lg bg-white/20"
                            />
                          )
                        )}
                      </div>

                      <div className="mt-4 border-t border-white/10 pt-4">
                        <p className="text-[9px] font-bold tracking-[0.18em] text-white/30">
                          DIGITAL PRIORITY
                        </p>
                        <p className="mt-2 text-xl font-medium text-white">
                          {approachVisuals[activeApproach].chips[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 grid grid-cols-2 border-t border-white/10 sm:grid-cols-3">
                {roadmap.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveApproach(index)}
                    className={`border-b border-r border-white/10 p-5 text-left transition sm:p-6 ${
                      activeApproach === index
                        ? "bg-white text-[#071528]"
                        : "text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[0.2em] opacity-50">
                        {item.number}
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.15em] opacity-40">
                        {item.short}
                      </span>
                    </div>
                    <div className="mt-8 text-lg font-medium tracking-[-0.03em]">
                      {item.title}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <PhotoPanel
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                  alt="Business team planning a digital project"
                  eyebrow="UNDERSTAND"
                  title="Business context"
                  className="min-h-[220px]"
                />
                <PhotoPanel
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt="Technology and digital systems"
                  eyebrow="BUILD"
                  title="Technology"
                  className="min-h-[220px]"
                />
                <PhotoPanel
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                  alt="Analytics dashboard and growth data"
                  eyebrow="OPTIMIZE"
                  title="Performance"
                  className="min-h-[220px]"
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/30">NOW → NEXT → LATER</p>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-fit rounded-full bg-white px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-[#071528] transition hover:bg-white/85"
                >
                  START WITH AN AUDIT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <div className="mb-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
                WHAT WE BUILD
              </p>
              <h2 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Technology that connects the{" "}
                <span className="text-black/20">business.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.number}
                delay={index * 0.05}
                className="border-b border-black/10 p-6 md:border-r lg:p-8"
              >
                <div className="flex min-h-[490px] flex-col justify-between">
                  <div>
                    <div className="relative mb-8 h-52 overflow-hidden rounded-[22px] bg-[#071528] shadow-lg">
                      <img
                        src={[
                          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
                          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
                          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
                          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
                          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
                        ][index]}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-[#071528]/45 to-black/10" />
                      <div className="relative flex h-full flex-col justify-between p-5 text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-bold tracking-[0.2em] text-white/55">
                            {serviceVisuals[index].eyebrow}
                          </span>
                          <span className="rounded-full border border-white/20 bg-black/10 px-2 py-1 text-[7px] text-white/45 backdrop-blur">
                            SYSTEM
                          </span>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#071528]/55 p-3 backdrop-blur-md">
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            {serviceVisuals[index].title
                              .split(" → ")
                              .map((label, itemIndex, arr) => (
                                <div
                                  key={label}
                                  className="flex min-w-0 flex-1 items-center gap-1.5"
                                >
                                  <div className="flex min-h-10 min-w-0 flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] px-1.5 text-center text-[7px] font-bold tracking-[0.03em] text-white/75">
                                    {label}
                                  </div>
                                  {itemIndex < arr.length - 1 && (
                                    <span className="shrink-0 text-white/35">
                                      →
                                    </span>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-black/25">
                        {service.number}
                      </span>
                      <span className="text-black/20">↗</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-black/45">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.title === "Growth & SEO" &&
                      ["Technical SEO", "Local SEO", "Analytics"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 px-3 py-2 text-[8px] font-bold tracking-[0.1em] text-black/40"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    {service.title !== "Growth & SEO" && (
                      <span className="rounded-full border border-black/10 px-3 py-2 text-[8px] font-bold tracking-[0.1em] text-black/35">
                        BUSINESS SYSTEM
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL STORY */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <PhotoPanel
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88"
              alt="Modern restaurant and hospitality environment"
              eyebrow="DIGITAL EXPERIENCES / HOSPITALITY"
              title="The physical business and the digital experience should feel like the same brand."
              className="min-h-[560px]"
            />
            <div className="grid gap-4">
              <PhotoPanel
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                alt="Modern premium fitness environment"
                eyebrow="FITNESS / LEAD GENERATION"
                title="Turn attention into action."
                className="min-h-[272px]"
              />
              <PhotoPanel
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
                alt="Business team collaborating around a table"
                eyebrow="BUSINESS / OPERATIONS"
                title="Connect people, tools and systems."
                className="min-h-[272px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO SPOTLIGHT */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <Reveal>
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
                GROWTH & SEO
              </p>
              <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl">
                Make your business easier to{" "}
                <span className="text-black/20">find.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-7 text-black/50">
                Search is part of the customer journey. We connect technical
                SEO, local visibility, analytics and conversion so traffic has
                somewhere useful to go.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[30px] bg-[#071528] p-6 text-white shadow-2xl sm:p-8">
                <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:44px_44px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.2em] text-white/35">
                        SEARCH PERFORMANCE
                      </p>
                      <p className="mt-2 text-sm text-white/50">
                        Representative dashboard concept
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-2 text-[8px] text-white/35">
                      ANALYTICS
                    </span>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      ["VISIBILITY", "SEARCH"],
                      ["DISCOVERY", "LOCAL"],
                      ["CONVERSION", "LEADS"],
                    ].map(([label, value], index) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                      >
                        <p className="text-[8px] font-bold tracking-[0.15em] text-white/30">
                          {label}
                        </p>
                        <p className="mt-4 text-lg font-medium">{value}</p>
                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${55 + index * 13}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="h-full rounded-full bg-white/45"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-44 items-end gap-2">
                      {[22, 35, 30, 48, 45, 62, 58, 76, 70, 88, 80, 96].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.04,
                            }}
                            className="flex-1 rounded-t-lg bg-white/20"
                          />
                        )
                      )}
                    </div>
                    <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-[8px] font-bold tracking-[0.16em] text-white/25">
                      <span>DISCOVERY</span>
                      <span>TRAFFIC</span>
                      <span>LEADS</span>
                      <span>GROWTH</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
                INDUSTRIES
              </p>

              <div>
                <h2 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Built around the way{" "}
                  <span className="text-black/20">businesses operate.</span>
                </h2>

                <div className="mt-14 grid gap-4 sm:grid-cols-2">
                  {industries.map((industry, index) => (
                    <motion.a
                      key={industry.title}
                      href={industry.href}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="group relative block min-h-[310px] overflow-hidden rounded-[24px] bg-[#071528] text-white shadow-lg"
                    >
                      <img
                        src={industry.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-[#071528]/35 to-transparent" />

                      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.18em] text-white/45">
                            0{index + 1}
                          </span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50">
                            ↗
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.04em]">
                            {industry.title}
                          </h3>
                          <p className="mt-2 max-w-sm text-xs leading-5 text-white/55">
                            {industry.detail}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <ProjectStage />

      {/* MEDIA */}
      <MediaShowcase />

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
                DELIVERY
              </p>

              <div>
                <h2 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  From roadmap to{" "}
                  <span className="text-black/20">working system.</span>
                </h2>

                <div className="mt-16 border-t border-black/10">
                  {process.map(([number, title, description], index) => (
                    <motion.div
                      key={number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
                    >
                      <span className="text-[10px] font-bold tracking-[0.18em] text-black/25">
                        {number}
                      </span>
                      <h3 className="text-2xl font-medium tracking-[-0.04em]">
                        {title}
                      </h3>
                      <p className="text-sm leading-6 text-black/45">
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-40">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
                ABOUT
              </p>

              <div>
                <h2 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  We build the digital side of{" "}
                  <span className="text-black/20">business.</span>
                </h2>

                <p className="mt-10 max-w-3xl text-lg leading-8 text-black/50">
                  Business Motion Labs is a digital technology company focused
                  on helping businesses build stronger digital experiences,
                  systems and operations.
                </p>

                <div className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                  <PhotoPanel
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                    alt="Technology team collaborating in an office"
                    eyebrow="THE PEOPLE BEHIND THE SYSTEMS"
                    title="Strategy, technology and execution."
                    className="min-h-[430px]"
                  />

                  <div className="overflow-hidden rounded-[28px] bg-[#071528] p-6 text-white sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-white/35">
                      BUSINESS MOTION LABS / SYSTEM VIEW
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] text-white/35">
                      CONNECTED
                    </span>
                  </div>

                  <div className="mt-8 grid gap-2 sm:grid-cols-4">
                    {["EXPERIENCE", "GROWTH", "AUTOMATION", "TECHNOLOGY"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
                        >
                          <div className="mb-6 h-1.5 w-10 rounded-full bg-white/20" />
                          <p className="text-[9px] font-bold tracking-[0.12em] text-white/55">
                            {item}
                          </p>
                          <p className="mt-2 text-[10px] text-white/25">
                            0{index + 1} / SYSTEM
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-3 h-px bg-white/10" />
                  <div className="mt-4 flex items-center justify-between text-[9px] tracking-[0.14em] text-white/30">
                    <span>CONNECTED DIGITAL SYSTEMS</span>
                    <span>MOVE →</span>
                  </div>
                  </div>
                </div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-7">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                      TECHNOLOGY & DEVELOPMENT
                    </p>
                    <p className="mt-3 text-xl font-medium tracking-[-0.03em]">
                      Yash Raj
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-7">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                      BUSINESS DEVELOPMENT & OPERATIONS
                    </p>
                    <p className="mt-3 text-xl font-medium tracking-[-0.03em]">
                      Manas Dang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GROWTH CALL */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-32">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">
              FREE GROWTH CALL
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-7xl">
              See what your website is costing you.{" "}
              <span className="text-white/30">In 20 minutes.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              We review your website, Google profile and booking journey before
              the call, then show you the three changes that would bring in the
              most customers. Free, no pressure. Pick a time that suits you;
              slots are shown in your own time zone.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href={bookHref}
              {...bookLinkProps}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-5 text-[11px] font-bold tracking-[0.14em] text-[#071528] transition hover:bg-white/85"
            >
              BOOK A FREE GROWTH CALL <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="text-[10px] font-bold tracking-[0.14em] text-white/55 hover:text-white"
            >
              OR SEND US YOUR WEBSITE FOR A FREE AUDIT ↓
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28">
        <ContactForm />
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}
