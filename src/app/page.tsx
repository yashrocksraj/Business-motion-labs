import ContactForm from "./components/ContactForm";
import { BookButton, SiteFooter, SiteHeader, WhatsAppButton } from "./components/SiteChrome";
import { HOME_FAQ, INDUSTRY_LIST, TEAM, TOOLS } from "./lib/site";

const photo = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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
    <main id="top" className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 pb-16 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-44">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">
              WEBSITES · ONLINE BOOKING · AUTOMATIC FOLLOW-UP
            </p>
            <h1 className="mt-8 text-[clamp(2.9rem,6.4vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              More customers from the people{" "}
              <span className="text-black/25">who already find you online.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              We help gyms, studios, salons, restaurants and home-service businesses turn website visitors into
              bookings, orders and calls, with a fast website, online booking and replies that go out while you
              work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookButton />
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.14em] text-black/60 hover:text-black"
              >
                GET A FREE WEBSITE AUDIT <span aria-hidden>↗</span>
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
          </div>
          <figure className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#071528] lg:min-h-[600px]">
            <img
              src={photo("photo-1556742393-d75f468bfcb0")}
              alt="Café owner checking orders on a tablet at the counter"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071528]/85 via-[#071528]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-[9px] font-bold tracking-[0.22em] text-white/60">WHILE YOU&apos;RE BUSY RUNNING THE BUSINESS</p>
              <p className="mt-3 max-w-md text-2xl font-medium leading-tight tracking-[-0.03em]">
                Bookings come in, enquiries get answered, and reminders go out on their own.
              </p>
            </div>
          </figure>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-24 border-y border-black/[0.06] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">WHO WE HELP</p>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
                Built for businesses that live on bookings and repeat customers.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/55">
              Pick your industry to see where businesses like yours lose customers online, and how we fix it.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_LIST.map((i) => (
              <a
                key={i.slug}
                href={`/${i.slug}`}
                className="group relative block min-h-[320px] overflow-hidden rounded-[24px] bg-[#071528] text-white"
              >
                <img
                  src={i.image.replace("w=1600", "w=1000")}
                  alt={i.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-[#071528]/40 to-transparent" />
                <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{i.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{i.card}</p>
                  <span className="mt-4 text-[10px] font-bold tracking-[0.16em] text-white/80 group-hover:text-white">
                    SEE HOW WE HELP →
                  </span>
                </div>
              </a>
            ))}
            <a
              href="#contact"
              className="flex min-h-[320px] flex-col justify-end rounded-[24px] border border-black/[0.08] bg-[#f7f8f5] p-6 transition hover:bg-[#eef1ec]"
            >
              <h3 className="text-2xl font-medium tracking-[-0.03em]">Another local business?</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Clinics, studios, trades and other appointment-based businesses: send us your website and we&apos;ll
                tell you honestly whether we can help.
              </p>
              <span className="mt-4 text-[10px] font-bold tracking-[0.16em] text-black/70">ASK FOR A FREE AUDIT →</span>
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">WHAT CHANGES FOR YOUR CUSTOMERS</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            Small gaps lose customers every day. <span className="text-black/25">We close them.</span>
          </h2>
          <div className="mt-14 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white">
            <div className="hidden grid-cols-2 border-b border-black/[0.06] text-[10px] font-bold tracking-[0.2em] md:grid">
              <p className="px-8 py-5 text-[#b4232a]">TODAY</p>
              <p className="border-l border-black/[0.06] px-8 py-5 text-[#0f8a65]">WITH BUSINESS MOTION LABS</p>
            </div>
            {beforeAfter.map(([before, after]) => (
              <div key={before} className="grid border-b border-black/[0.06] last:border-b-0 md:grid-cols-2">
                <p className="px-6 py-5 text-base leading-7 text-black/55 md:px-8">
                  <span className="mr-2 text-[#b4232a]" aria-hidden>✕</span>
                  {before}
                </p>
                <p className="border-t border-black/[0.06] px-6 py-5 text-base leading-7 md:border-l md:border-t-0 md:px-8">
                  <span className="mr-2 text-[#16b886]" aria-hidden>✓</span>
                  {after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">WHAT WE DO</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            One team for your website, bookings and follow-up.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/35">{s.n}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton dark={false} />
            <a href="/gyms#pricing" className="text-[10px] font-bold tracking-[0.14em] text-white/60 hover:text-white">
              SEE WHAT&apos;S IN EACH PLAN ↗
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">HOW IT WORKS</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            From first call to live in about three weeks.
          </h2>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Free audit & Growth Call", "We check your website, Google profile and booking journey, then walk you through the three biggest fixes on a 20-minute call."],
              ["Plan & fixed price", "You get a clear plan and one fixed price in writing. Nothing starts until you're happy with it."],
              ["Build & launch", "We build, connect your booking and payment tools, test every step on a real phone, and launch."],
              ["Improve every month", "We watch what visitors do, fix what's slow, and send you a plain-English report."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-[24px] bg-[#f7f8f5] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-6 text-xl font-medium tracking-[-0.03em]">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT / TEAM */}
      <section id="about" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">ABOUT US</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              A small team. <span className="text-black/25">You talk to the people doing the work.</span>
            </h2>
            <div className="mt-8 grid gap-5 text-base leading-7 text-black/60">
              <p>
                Business Motion Labs is a young, two-founder agency based in India, working with local businesses in
                the US, UK, Canada and Australia. We started it because so many good businesses lose customers to
                small, fixable problems online: a slow page, a hidden phone number, an enquiry nobody answered.
              </p>
              <p>
                We&apos;re building our first client stories right now. That means you get both founders on your
                project, founding-client terms, and a team that has every reason to make your results visible.
              </p>
            </div>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-[24px] border border-black/[0.06] bg-white p-7">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-20 w-20 rounded-full object-cover" />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#071528] text-2xl font-medium text-white">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                )}
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{m.name}</h3>
                <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-black/40">{m.role.toUpperCase()}</p>
                <p className="mt-4 text-sm leading-6 text-black/60">{m.bio}</p>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium underline underline-offset-4">
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
            <div className="rounded-[24px] bg-[#071528] p-7 text-white sm:col-span-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/45">OUR PROMISES</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/75 sm:grid-cols-2">
                {[
                  "A reply to every message within one working day",
                  "One fixed price in writing before any work starts",
                  "Your website, domain and customer data stay yours",
                  "Calls scheduled in your time zone",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-[#16b886]" aria-hidden>✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">TOOLS WE BUILD WITH AND CONNECT TO</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <li key={t} className="rounded-full border border-black/[0.08] bg-[#f7f8f5] px-4 py-2 text-sm text-black/65">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">QUESTIONS & ANSWERS</p>
              <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">Straight answers.</h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-black/55">
                Can&apos;t find what you&apos;re looking for? Ask us on a free Growth Call, or write to us through the
                form below.
              </p>
            </div>
            <div className="grid gap-10">
              {HOME_FAQ.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-black/40">{group.category.toUpperCase()}</h3>
                  <div className="mt-4 grid gap-3">
                    {group.items.map((f) => (
                      <details key={f.q} className="group rounded-[20px] border border-black/[0.06] bg-white p-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                          {f.q}
                          <span className="shrink-0 text-xl text-black/30 transition group-open:rotate-45" aria-hidden>+</span>
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

      {/* GROWTH CALL */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-32">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">FREE GROWTH CALL</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-7xl">
              See what your website is costing you. <span className="text-white/30">In 20 minutes.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              We review your website, Google profile and booking journey before the call, then show you the three
              changes that would bring in the most customers. Free, no pressure. Slots are shown in your own time
              zone.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <BookButton dark={false} />
            <a href="#contact" className="text-[10px] font-bold tracking-[0.14em] text-white/60 hover:text-white">
              OR SEND US YOUR WEBSITE FOR A FREE AUDIT ↓
            </a>
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
