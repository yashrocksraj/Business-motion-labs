import type { Metadata } from "next";
import { Reveal } from "../components/Interactive";
import { BookButton, SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { TEAM } from "../lib/site";

export const metadata: Metadata = {
  title: "About us | Business Motion Labs",
  description: "Business Motion Labs is a digital growth studio helping local businesses turn online attention into bookings, orders and calls.",
};

const principles = [
  ["Outcomes over output", "We measure success in bookings, orders and calls, not in pages delivered."],
  ["Clarity first", "Plain-English plans, one fixed price and a monthly report anyone can read in two minutes."],
  ["Built for the phone", "Most customers find you on a phone, so every page and flow is designed and tested there first."],
  ["Yours to keep", "Your website, domain, accounts and customer data always belong to you."],
];

const model = [
  ["Strategy & audit", "Every engagement starts with a structured audit of the full customer journey, from search to booking."],
  ["Design & engineering", "A dedicated delivery team builds on modern, fast technology and integrates with the tools you already use."],
  ["Automation", "Replies, reminders, follow-ups and review requests run on their own, so nothing depends on someone remembering."],
  ["Account management", "One point of contact, calls in your time zone, and a written monthly report with clear next steps."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />

      <section className="mx-auto max-w-[1500px] px-6 pb-20 pt-36 lg:px-10 lg:pt-44">
        <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">ABOUT BUSINESS MOTION LABS</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
          We help local businesses win the moment a customer finds them online.
        </h1>
        <div className="mt-10 grid max-w-5xl gap-6 text-lg leading-8 text-black/60 md:grid-cols-2">
          <p>
            Business Motion Labs is a digital growth studio for businesses that run on bookings, orders and calls:
            gyms and studios, salons, restaurants and home-service companies across the US, UK, Canada and Australia.
          </p>
          <p>
            We combine websites, online booking and ordering, automation and local search into one system, built
            around a single goal: turning more of the people who already find you into paying customers.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="relative h-[360px] overflow-hidden rounded-[32px] sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?auto=format&fit=crop&w=2000&q=80"
              alt="A team working together around a table with laptops"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071528]/70 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xl text-2xl font-medium leading-tight text-white sm:bottom-10 sm:left-10 sm:text-3xl">
              Strategy, design, engineering and automation, under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">WHAT WE BELIEVE</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">Principles we work by.</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/30">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">HOW WE DELIVER</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
              A global delivery model, <span className="text-white/30">working in your time zone.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Our delivery team is based in India and serves clients across North America, the UK and Australia,
              with calls scheduled in your hours and a reply to every message within one working day.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {model.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-xl font-medium tracking-[-0.03em]">{t}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">LEADERSHIP</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">The people accountable for your results.</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-6 rounded-[28px] border border-black/[0.06] bg-white p-7">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-24 w-24 shrink-0 rounded-2xl object-cover" />
                ) : (
                  <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#071528] text-3xl font-medium text-white">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{m.name}</h3>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-black/40">{m.role.toUpperCase()}</p>
                  <p className="mt-4 text-sm leading-6 text-black/60">{m.bio}</p>
                  <a href={`mailto:${m.email}`} className="mt-4 block text-sm font-medium text-[#071528] underline underline-offset-4">{m.email}</a>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm underline underline-offset-4">LinkedIn</a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 rounded-[28px] bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg leading-7">
            Want to see how we&apos;d approach your business? <span className="text-black/50">Start with a free 30-minute Growth Call.</span>
          </p>
          <BookButton />
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
