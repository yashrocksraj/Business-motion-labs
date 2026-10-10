import type { Metadata } from "next";
import LeadForm from "../components/LeadForm";
import { SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { BOOKING_URL, auditHref } from "../lib/site";

export const metadata: Metadata = {
  title: "Book a free Growth Call | Business Motion Labs",
  description: "A free 20-minute video call: we review your website and booking journey and show you the three changes that would bring in the most customers.",
};

const steps = [
  ["Before the call", "We review your website, Google profile and booking journey the way a new customer would."],
  ["On the call (20 min)", "We walk you through what we found and the three changes that would bring in the most customers."],
  ["After the call", "You get a written plan and one fixed price. No pressure. You keep the findings either way."],
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 pb-24 pt-36 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:pt-44">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">FREE GROWTH CALL · 20 MINUTES · VIDEO</p>
          <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            Let&apos;s find the customers your website is losing.
          </h1>
          <ol className="mt-10 grid gap-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-[20px] border border-black/[0.06] bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">{i + 1}</span>
                <span>
                  <span className="block font-medium">{t}</span>
                  <span className="mt-1 block text-sm leading-6 text-black/55">{d}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-black/50">
            Not ready for a call?{" "}
            <a href={auditHref} className="font-medium text-[#071528] underline underline-offset-4">Get a free audit report by email instead →</a>
          </p>
        </div>
        <div>
          {BOOKING_URL ? (
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
                <p className="text-sm font-medium">Pick a time. Slots are shown in your time zone.</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-xs underline">Open in new tab</a>
              </div>
              <iframe src={BOOKING_URL} title="Book a Growth Call" className="h-[760px] w-full border-0" />
            </div>
          ) : (
            <div>
              <p className="mb-4 text-sm text-black/55">
                Tell us a little about your business and the best time to talk. We&apos;ll reply within one working
                day with times in your time zone.
              </p>
              <LeadForm variant="call" />
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
