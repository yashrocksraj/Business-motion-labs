import type { Industry } from "../lib/site";
import { BookButton, SiteFooter, SiteHeader, WhatsAppButton } from "./SiteChrome";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10px] font-bold tracking-[0.25em] ${light ? "text-white/40" : "text-black/35"}`}>
      {children}
    </p>
  );
}

export default function IndustryPage({ data }: { data: Industry }) {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader pricingHref="#pricing" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-44">
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h1 className="mt-8 text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              {data.headline} <span className="text-black/25">{data.headlineMuted}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">{data.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookButton />
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.14em] text-black/60 hover:text-black"
              >
                GET A FREE WEBSITE AUDIT <span aria-hidden>↗</span>
              </a>
            </div>
            <p className="mt-6 text-xs text-black/40">
              Free 20-minute video call. Times shown in your own time zone.
            </p>
          </div>
          <figure className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#071528] lg:min-h-[560px]">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071528]/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 right-5 text-[10px] text-white/50">{data.imageCredit}</figcaption>
          </figure>
        </div>
      </section>

      {/* WHERE CUSTOMERS ARE LOST */}
      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>THE PROBLEM</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            Where {data.short} quietly lose new {data.customers}.
          </h2>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.journey.map((j, i) => (
              <li key={j.step} className="rounded-[24px] border border-black/[0.06] bg-[#f7f8f5] p-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/30">STEP 0{i + 1}</span>
                <p className="mt-4 text-xl font-medium tracking-[-0.03em]">{j.step}</p>
                <p className="mt-4 rounded-2xl bg-[#fdecec] px-4 py-3 text-sm leading-6 text-[#b4232a]">{j.leak}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm italic leading-6 text-black/50">
            Every step that&apos;s harder than it needs to be loses people who were already interested.
          </p>
        </div>
      </section>

      {/* HOW WE FIX IT */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow light>WHAT WE DO</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            Attract, convert, follow up. <span className="text-white/30">Done for you.</span>
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {data.fixes.map((f, i) => (
              <div key={f.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/35">0{i + 1}</span>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">{f.title}</h3>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/65">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16b886]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl rounded-[20px] bg-white/[0.06] px-6 py-5 text-sm leading-6 text-white/70">
            <span className="font-bold text-white">What it&apos;s worth: </span>
            {data.valueLine} <span className="text-white/40">(Example. We work it out with your own numbers on the call.)</span>
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 bg-[#f7f8f5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>PRICING</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            Three plans. One goal: <span className="text-black/25">more {data.customers}.</span>
          </h2>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {data.plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-[28px] p-8 ${
                  p.recommended ? "bg-[#071528] text-white shadow-xl" : "border border-black/[0.06] bg-white"
                }`}
              >
                {p.recommended && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#16b886] px-3 py-1 text-[9px] font-bold tracking-[0.14em] text-[#071528]">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="text-2xl font-medium tracking-[-0.03em]">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.recommended ? "text-white/50" : "text-black/45"}`}>{p.tagline}</p>
                <p className={`mt-6 text-sm ${p.recommended ? "text-white/60" : "text-black/55"}`}>
                  One-time setup + simple monthly plan
                </p>
                <ul className={`mt-8 grid flex-1 gap-3 text-sm leading-6 ${p.recommended ? "text-white/75" : "text-black/65"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-[#16b886]" aria-hidden>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <BookButton dark={!p.recommended} className="mt-10 w-full">
                  TALK ABOUT {p.name.toUpperCase()}
                </BookButton>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-black/[0.06] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-black/55">
              <span className="font-medium text-black/80">Pricing is shared on your free Growth Call.</span> Every business is
              different, so we look at yours first, then give you one fixed price in writing. No surprises, no hidden extras.
            </p>
            <BookButton>GET YOUR PRICE</BookButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-black/[0.06] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">
            Live in about three weeks.
          </h2>
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              ["Free Growth Call", "20 minutes. We show you what we found on your website and what to fix first."],
              ["Week 1", "Kick-off: access to your website and Google profile, plan agreed."],
              ["Weeks 2–3", "We build, test every step on a real phone, and launch."],
              ["Every month", "We watch the numbers, improve what's slow and send you a report."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-[24px] bg-[#f7f8f5] p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071528] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-5 text-xl font-medium tracking-[-0.03em]">{t}</p>
                <p className="mt-3 text-sm leading-6 text-black/55">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f8f5]">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <div>
            <Eyebrow>QUESTIONS</Eyebrow>
            <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-5xl">Good to know</h2>
          </div>
          <div className="grid gap-3">
            {data.faq.map((f) => (
              <details key={f.q} className="group rounded-[20px] border border-black/[0.06] bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium tracking-[-0.02em]">
                  {f.q}
                  <span className="ml-4 text-black/30 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-black/55">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 text-left lg:px-10 lg:py-32">
          <Eyebrow light>FREE GROWTH CALL</Eyebrow>
          <h2 className="mt-6 max-w-5xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-7xl">
            See what your website is costing you. <span className="text-white/30">In 20 minutes.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We review your website, Google profile and booking journey before the call, then show you the three
            changes that would bring in the most {data.customers}. No pressure. You keep the findings either way.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton dark={false} />
            <a href="/#contact" className="text-[10px] font-bold tracking-[0.14em] text-white/60 hover:text-white">
              OR SEND US YOUR WEBSITE FOR A FREE AUDIT ↗
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
