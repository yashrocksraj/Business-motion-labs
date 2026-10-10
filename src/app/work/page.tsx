import type { Metadata } from "next";
import { ConceptShowcase, Reveal } from "../components/Interactive";
import { BookButton, SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { CONCEPTS } from "../lib/site";

export const metadata: Metadata = {
  title: "Our work: concept projects | Business Motion Labs",
  description: "Interactive concept projects showing how we design booking, ordering, quote and reporting systems for gyms, studios, salons, restaurants and home services.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />

      <section className="mx-auto max-w-[1500px] px-6 pb-16 pt-36 lg:px-10 lg:pt-44">
        <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">OUR WORK · CONCEPT PROJECTS</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
          See how we design for every industry. <span className="text-black/25">Click around.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
          These concept projects show our approach to the systems we build most: trial booking, class schedules,
          salon booking, direct ordering, quote requests and monthly reporting. The brands are fictional; the
          thinking is exactly what we bring to client work.
        </p>
      </section>

      <section className="bg-[#071528] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10 lg:py-28">
          <ConceptShowcase />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08}>
              <article className="h-full overflow-hidden rounded-[28px] border border-black/[0.06] bg-white">
                <div className="relative h-56">
                  <img src={c.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071528]/80 to-transparent" />
                  <div className="absolute bottom-5 left-6 text-white">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/70">CONCEPT · {c.industry.toUpperCase()}</p>
                    <h2 className="mt-1 text-2xl font-medium tracking-[-0.03em]">{c.brand}</h2>
                  </div>
                </div>
                <div className="grid gap-5 p-7">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-black/40">{c.service.toUpperCase()}</p>
                  <div>
                    <p className="text-sm font-medium">The problem</p>
                    <p className="mt-1 text-sm leading-6 text-black/55">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">What we designed</p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-black/60">
                      {c.solution.map((s) => <li key={s} className="flex gap-2"><span className="text-[#16b886]">✓</span>{s}</li>)}
                    </ul>
                  </div>
                  <p className="rounded-2xl bg-[#f7f8f5] px-4 py-3 text-sm text-black/65">{c.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 rounded-[28px] bg-[#071528] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg leading-7">Want something like this for your business?</p>
          <BookButton dark={false} />
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
