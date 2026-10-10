import type { Metadata } from "next";
import LeadForm from "../components/LeadForm";
import { SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { bookHref } from "../lib/site";

export const metadata: Metadata = {
  title: "Free website audit report | Business Motion Labs",
  description: "Send us your website and get a free report: how it performs on a phone, how easy it is to book or call, how you compare with nearby competitors, and the three fixes that matter most.",
};

const checks = [
  ["Mobile experience", "Speed, readability and how many taps it takes to book, order or call."],
  ["Booking & contact path", "Whether a new customer can take the next step in under a minute."],
  ["Google profile & reviews", "Your rating, review count and profile completeness vs 3 nearby competitors."],
  ["Follow-up", "What happens after someone enquires: how fast, and whether anyone follows up."],
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 pb-24 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pt-44">
        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">FREE WEBSITE AUDIT REPORT · BY EMAIL</p>
          <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            See your website the way a new customer does.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
            A real person reviews your website and sends you a short, plain-English report, usually within 2
            working days. No call needed.
          </p>
          <div className="mt-10 rounded-[28px] bg-[#071528] p-7 text-white">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#16b886]">WHAT&apos;S IN YOUR REPORT</p>
            <ul className="mt-5 grid gap-4">
              {checks.map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 text-[#16b886]" aria-hidden>✓</span>
                  <span><span className="font-medium">{t}</span><span className="mt-1 block text-sm leading-6 text-white/60">{d}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-white/75">
              Plus: <span className="font-medium text-white">your top 3 fixes</span>, ranked by impact.
            </p>
          </div>
          <p className="mt-8 text-sm text-black/50">
            Prefer to talk it through?{" "}
            <a href={bookHref} className="font-medium text-[#071528] underline underline-offset-4">Book a free Growth Call →</a>
          </p>
        </div>
        <div>
          <LeadForm variant="audit" />
        </div>
      </section>
      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
