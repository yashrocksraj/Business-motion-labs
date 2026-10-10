import type { Metadata } from "next";
import LeadForm from "../components/LeadForm";
import { Reveal } from "../components/Interactive";
import { SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { ROLES } from "../lib/site";

export const metadata: Metadata = {
  title: "Careers | Business Motion Labs",
  description: "Join Business Motion Labs and help local businesses across the US, UK, Canada and Australia grow online.",
};

const perks = [
  ["Real impact", "Your work shows up as real bookings and orders for real businesses, every month."],
  ["Global clients", "Work with business owners in the US, UK, Canada and Australia from day one."],
  ["Learn fast", "Sales, design, engineering and automation sit side by side. You'll learn across all of them."],
  ["Grow with us", "We promote from within. Early team members shape how the company works."],
];

const process = [
  ["Apply", "Send the form below with your LinkedIn, portfolio or CV link."],
  ["Intro call", "A 20-minute conversation about you, the role and what you want next."],
  ["Practical task", "A short practical task that mirrors the real work."],
  ["Offer", "A clear offer and a structured first 30 days."],
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />

      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10 lg:pt-44">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">CAREERS AT BUSINESS MOTION LABS</p>
          <h1 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            Build the systems that help local businesses grow.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
            We&apos;re hiring people who care about doing excellent work for real businesses: in sales, engineering
            and digital marketing.
          </p>
          <a href="#roles" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#071528] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-white hover:bg-[#12335d]">
            SEE OPEN ROLES <span aria-hidden>↓</span>
          </a>
        </div>
        <div className="relative h-[380px] overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1702301266409-ed1bfe210971?auto=format&fit=crop&w=1400&q=80"
            alt="Two colleagues reviewing work on a laptop"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {perks.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="roles" className="scroll-mt-24 mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">OPEN ROLES</p>
        <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">Where you could fit in.</h2>
        <div className="mt-12 grid gap-3">
          {ROLES.map((r) => (
            <details key={r.title} className="group rounded-[24px] border border-black/[0.06] bg-white p-6 sm:p-8">
              <summary className="flex cursor-pointer list-none flex-col gap-2 sm:flex-row sm:items-center sm:justify-between [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-xl font-medium tracking-[-0.02em] sm:text-2xl">{r.title}</span>
                  <span className="mt-1 block text-sm text-black/50">{r.type}</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.14em] text-black/50 group-open:hidden">VIEW ROLE +</span>
              </summary>
              <div className="mt-6 grid gap-6 border-t border-black/[0.06] pt-6 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-base leading-7 text-black/65">{r.summary}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-black/60">
                    {r.needs.map((n) => (
                      <li key={n} className="flex gap-2"><span className="text-[#16b886]">✓</span>{n}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-end md:justify-end">
                  <a href="#apply" className="inline-flex items-center gap-3 rounded-full bg-[#071528] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-white hover:bg-[#12335d]">
                    APPLY FOR THIS ROLE <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10">
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/40">HOW WE HIRE</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map(([t, d], i) => (
              <li key={t} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16b886] text-sm font-bold text-[#071528]">{i + 1}</span>
                <p className="mt-5 text-xl font-medium">{t}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 mx-auto grid max-w-[1500px] gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">APPLY</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-5xl">Tell us about yourself.</h2>
          <p className="mt-6 text-base leading-7 text-black/55">
            Don&apos;t see the right role? Choose &quot;Open application&quot;. We read every application.
          </p>
        </div>
        <LeadForm variant="career" />
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
