"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import ContactForm from "./components/ContactForm";
import MediaShowcase from "./components/MediaShowcase";

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

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-5 lg:px-8">
          <div className="relative flex items-center justify-between rounded-full border border-black/[0.08] bg-[#f7f8f5]/90 px-4 py-3 shadow-sm backdrop-blur-xl">
            <a
              href="#top"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">
                B
              </div>

              <span className="text-[10px] font-bold tracking-[0.14em] sm:text-[11px] sm:tracking-[0.16em]">
                BUSINESS MOTION LABS
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              <a
                href="#approach"
                className="text-xs text-black/45 transition hover:text-black"
              >
                Approach
              </a>

              <a
                href="#services"
                className="text-xs text-black/45 transition hover:text-black"
              >
                Services
              </a>

              <a
                href="#work"
                className="text-xs text-black/45 transition hover:text-black"
              >
                Work
              </a>

              <a
                href="#process"
                className="text-xs text-black/45 transition hover:text-black"
              >
                Process
              </a>

              <a
                href="#about"
                className="text-xs text-black/45 transition hover:text-black"
              >
                About
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="rounded-full bg-[#071528] px-4 py-2.5 text-[9px] font-bold tracking-[0.12em] text-white transition hover:bg-[#12335d] sm:px-5 sm:text-[10px]"
              >
                START A PROJECT
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
                    ["Approach", "#approach"],
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
      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="absolute bottom-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-slate-100 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(7,21,40,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(7,21,40,.6)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-14 pt-40 lg:px-10 lg:pb-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.32fr] lg:items-end">
            <div>
              <Reveal>
                <p className="mb-8 text-[10px] font-bold tracking-[0.28em] text-black/35">
                  DIGITAL TECHNOLOGY / GROWTH / SYSTEMS
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                  Move Your
                  <br />
                  Business
                  <br />
                  <span className="text-black/20">Forward.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-xl text-base leading-7 text-black/50">
                    Business Motion Labs helps businesses grow through better
                    digital experiences, technology, automation and customer
                    systems.
                  </p>

                  <a
                    href="#approach"
                    className="group flex w-fit items-center gap-4 text-[10px] font-bold tracking-[0.16em]"
                  >
                    SEE HOW WE WORK
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition group-hover:bg-[#071528] group-hover:text-white">
                      ↓
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="hidden lg:block">
                <div className="border-l border-black/10 pl-7">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                    BUSINESS MOTION LABS
                  </p>

                  <p className="mt-4 text-sm leading-6 text-black/45">
                    Digital systems built to help businesses move.
                  </p>
                </div>
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

      {/* APPROACH / AUDIT ROADMAP */}
      <AuditRoadmap />

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f8f5]">
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
                className="border-b border-black/10 p-7 md:border-r lg:p-10"
              >
                <div className="flex min-h-[270px] flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-black/25">
                      {service.number}
                    </span>

                    <span className="text-black/20">↗</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-black/45">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white">
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

                <div className="mt-14 grid grid-cols-2 border-t border-black/10 sm:grid-cols-3">
                  {[
                    "Restaurants & Hospitality",
                    "Fitness & Gyms",
                    "Local Businesses",
                    "Professional Services",
                    "E-commerce",
                    "Growing Businesses",
                  ].map((industry, index) => (
                    <div
                      key={industry}
                      className="border-b border-r border-black/10 px-4 py-6 text-sm text-black/55 sm:px-6"
                    >
                      <span className="mr-3 text-[9px] text-black/25">
                        0{index + 1}
                      </span>
                      {industry}
                    </div>
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
      <section id="process" className="bg-white">
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
                  {[
                    ["01", "Design", "Turn the strategy into a clear, premium digital experience."],
                    ["02", "Build", "Develop the website, application, integrations or systems."],
                    ["03", "Test", "QA across devices, journeys, forms, payments and key functionality."],
                    ["04", "Launch", "Put the system in front of real customers."],
                    ["05", "Measure", "Track performance, behavior and business outcomes."],
                    ["06", "Improve", "Continuously optimize what we built."],
                  ].map(([number, title, description], index) => (
                    <motion.div
                      key={number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                      }}
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
      <section id="about" className="bg-[#f7f8f5]">
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

      {/* CONTACT */}
      <ContactForm />

      {/* FOOTER */}
      <footer className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] border-t border-white/10 px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-5 text-[9px] font-bold tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 BUSINESS MOTION LABS</span>

            <span>DIGITAL TECHNOLOGY / GROWTH / SYSTEMS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}