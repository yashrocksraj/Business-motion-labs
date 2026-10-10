import ContactForm from "./components/ContactForm";
import { ConceptShowcase, GrowthCalculator, HeroPhone, IndustryExplorer, Reveal } from "./components/Interactive";
import { BookButton, SiteFooter, SiteHeader, WhatsAppButton } from "./components/SiteChrome";
import { HOME_FAQ, TOOLS, auditHref, bookHref } from "./lib/site";

const services = [
  { n: "01", title: "Websites that work on a phone", text: "Fast, clear pages that show what you offer, your prices or menu, your location and one obvious next step." },
  { n: "02", title: "Online booking & ordering", text: "Free trials, classes, appointments, tables, orders or quote requests, booked in a few taps, day or night." },
  { n: "03", title: "Instant replies & follow-up", text: "Every enquiry gets an answer in minutes, and people who didn't book get a friendly reminder instead of being forgotten." },
  { n: "04", title: "Google profile & local search", text: "A complete Google Business Profile, service pages and local signals, so nearby customers find you before a competitor." },
  { n: "05", title: "Reviews on autopilot", text: "Happy customers are asked for a review at the right moment, so your rating and review count keep growing." },
  { n: "06", title: "A monthly report you can read", text: "Visits, enquiries, bookings, calls and reviews in plain English, plus what we're improving next." },
];

const beforeAfter: [string, string][] = [
  ["A visitor can't find your prices or timings on their phone, and leaves.", "Services, prices and opening hours are clear on the first screen."],
  ["To book, they have to call during opening hours.", "They book online in a few taps, at 11 pm if they want to."],
  ["An enquiry sits in your inbox until tomorrow.", "They get an instant reply, and you get a notification."],
  ["Someone books, forgets, and doesn't show up.", "Automatic reminders go out before every appointment."],
  ["Happy customers leave without leaving a review.", "A review request goes out at the right moment."],
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[620px] w-[620px] rounded-full bg-[#16b886]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-6 pb-16 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-black/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#16b886]" />
              WEBSITES · ONLINE BOOKING · AUTOMATIC FOLLOW-UP
            </p>
            <h1 className="mt-8 text-[clamp(2.9rem,6.4vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              More customers from the people{" "}
              <span className="text-black/25">who already find you online.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Business Motion Labs helps gyms, studios, salons, restaurants and home-service businesses turn website
              visitors into bookings, orders and calls, with a fast website, online booking and replies that go out
              while you work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookButton />
              <a
                href={auditHref}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-white px-6 py-4 text-[10px] font-bold tracking-[0.14em] transition hover:border-black/40"
              >
                GET A FREE AUDIT REPORT <span aria-hidden>↗</span>
              </a>
            </div>
            <ul className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-sm text-black/60 sm:grid-cols-4 sm:gap-x-4">
              {["Free audit", "Fixed price", "Live in ~3 weeks", "You own it all"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-[#16b886]" aria-hidden>✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute inset-x-6 bottom-10 top-16 overflow-hidden rounded-[32px] bg-[#071528]">
                <img
                  src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1400&q=80"
                  alt="Café owner checking orders on a tablet at the counter"
                  className="h-full w-full object-cover opacity-60"
                />
              </div>
              <div className="relative py-6">
                <HeroPhone />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOOLS MARQUEE */}
      <section className="border-y border-black/[0.06] bg-white py-8" aria-label="Tools we build with and connect to">
        <p className="mb-5 text-center text-[10px] font-bold tracking-[0.25em] text-black/35">TOOLS WE BUILD WITH AND CONNECT TO</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="bml-marquee flex w-max gap-3">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <li key={i} className="whitespace-nowrap rounded-full border border-black/[0.08] bg-[#f7f8f5] px-5 py-2.5 text-sm text-black/60">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INDUSTRY EXPLORER */}
      <section id="industries" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">WHO WE HELP</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              Pick your industry. <span className="text-black/25">See where customers slip away.</span>
            </h2>
          </Reveal>
          <div className="mt-12">
            <IndustryExplorer />
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">WHAT CHANGES FOR YOUR CUSTOMERS</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              Small gaps lose customers every day. <span className="text-black/25">We close them.</span>
            </h2>
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#f7f8f5]">
            <div className="hidden grid-cols-2 border-b border-black/[0.06] text-[10px] font-bold tracking-[0.2em] md:grid">
              <p className="px-8 py-5 text-[#b4232a]">TODAY</p>
              <p className="border-l border-black/[0.06] bg-white px-8 py-5 text-[#0f8a65]">WITH BUSINESS MOTION LABS</p>
            </div>
            {beforeAfter.map(([before, after], i) => (
              <Reveal key={before} delay={i * 0.05}>
                <div className="group grid border-b border-black/[0.06] transition hover:bg-white md:grid-cols-2">
                  <p className="px-6 py-5 text-base leading-7 text-black/50 md:px-8">
                    <span className="mr-2 text-[#b4232a]" aria-hidden>✕</span>
                    {before}
                  </p>
                  <p className="border-t border-black/[0.06] bg-white px-6 py-5 text-base leading-7 md:border-l md:border-t-0 md:px-8">
                    <span className="mr-2 text-[#16b886]" aria-hidden>✓</span>
                    {after}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">WHAT WE DO</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              One partner for your website, bookings and follow-up.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#16b886]/50 hover:bg-white/[0.07]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/35 transition group-hover:text-[#16b886]">{s.n}</span>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-24 border-t border-white/10 bg-[#0b1d34] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">OUR WORK · CONCEPT PROJECTS</p>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
                Don&apos;t just read about it. <span className="text-white/30">Try it.</span>
              </h2>
            </Reveal>
            <a href="/work" className="text-[10px] font-bold tracking-[0.16em] text-white/60 hover:text-white">SEE ALL PROJECTS →</a>
          </div>
          <ConceptShowcase />
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">WHAT IT COULD BE WORTH</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              Move the sliders. <span className="text-black/25">See the difference a better journey makes.</span>
            </h2>
          </Reveal>
          <div className="mt-12">
            <GrowthCalculator />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">HOW IT WORKS</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              From first call to live in about three weeks.
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Free audit & Growth Call", "We check your website, Google profile and booking journey, then walk you through the three biggest fixes."],
              ["Plan & fixed price", "You get a clear plan and one fixed price in writing. Nothing starts until you're happy with it."],
              ["Build & launch", "We build, connect your booking and payment tools, test every step on a real phone, and launch."],
              ["Improve every month", "We watch what visitors do, fix what's slow, and send you a plain-English report."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-[24px] bg-[#f7f8f5] p-7 transition hover:bg-[#eef1ec]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-6 text-xl font-medium tracking-[-0.03em]">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section id="about" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-32">
          <Reveal>
            <div className="relative h-[380px] overflow-hidden rounded-[28px] sm:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?auto=format&fit=crop&w=1400&q=80"
                alt="A team working together around a table with laptops"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">ABOUT BUSINESS MOTION LABS</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-5xl">
              A digital growth studio for businesses that run on bookings.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/60">
              Strategy, design, engineering and automation under one roof, serving clients across the US, UK,
              Canada and Australia, with calls in your time zone and one accountable point of contact.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-black/65 sm:grid-cols-2">
              {[
                "A reply to every message within one working day",
                "One fixed price in writing before work starts",
                "Your website, domain and data stay yours",
                "A plain-English report every month",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="text-[#16b886]" aria-hidden>✓</span>{t}</li>
              ))}
            </ul>
            <a href="/about" className="mt-8 inline-block text-[10px] font-bold tracking-[0.16em] text-black/70 hover:text-black">
              MORE ABOUT US →
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <Reveal>
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">QUESTIONS & ANSWERS</p>
              <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">Straight answers.</h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-black/55">
                Can&apos;t find what you&apos;re looking for? Ask us on a free Growth Call, or send us a message below.
              </p>
            </Reveal>
            <div className="grid gap-10">
              {HOME_FAQ.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-black/40">{group.category.toUpperCase()}</h3>
                  <div className="mt-4 grid gap-3">
                    {group.items.map((f) => (
                      <details key={f.q} className="group rounded-[20px] border border-black/[0.06] bg-[#f7f8f5] p-6 transition open:bg-white open:shadow-sm">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                          {f.q}
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/40 transition group-open:rotate-45 group-open:bg-[#071528] group-open:text-white" aria-hidden>+</span>
                        </summary>
                        <p className="mt-4 text-base leading-7 text-black/60">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO START */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">TWO WAYS TO START</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              Talk it through, or get the report first.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <a href={bookHref} className="group flex h-full flex-col justify-between rounded-[28px] bg-white p-8 text-[#071528] transition hover:-translate-y-1">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-black/40">OPTION 1 · 20-MINUTE VIDEO CALL</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">Book a free Growth Call</h3>
                  <p className="mt-4 text-base leading-7 text-black/60">
                    We review your business before the call, then show you live what to fix first. You leave with a
                    plan and a fixed price.
                  </p>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#071528] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-white">
                  CHOOSE A TIME <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a href={auditHref} className="group flex h-full flex-col justify-between rounded-[28px] border border-white/15 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/45">OPTION 2 · BY EMAIL, NO CALL NEEDED</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">Get a free audit report</h3>
                  <p className="mt-4 text-base leading-7 text-white/65">
                    Send us your website. Within about 2 working days you get a written report: mobile experience,
                    booking path, Google profile vs competitors, and your top 3 fixes.
                  </p>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#16b886] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-[#071528]">
                  REQUEST MY REPORT <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT (renders its own section with id="contact") */}
      <ContactForm />

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
