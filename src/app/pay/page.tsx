import type { Metadata } from "next";
import { SiteFooter, SiteHeader, WhatsAppButton } from "../components/SiteChrome";
import { CONTACT_EMAIL, PACKAGES, PAYMENT, bookHref, type Package } from "../lib/site";

export const metadata: Metadata = {
  title: "Packages & payment | Business Motion Labs",
  description: "Fixed prices in US dollars. Pay by bank transfer (ACH) or card.",
  robots: { index: false, follow: false },
};

const usd = (n: number) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

function invoiceMail(p: Package, method: "bank" | "card", deposit: number) {
  const subject = `Invoice request: ${p.name} package deposit (${usd(deposit)})`;
  const body = [
    "Hi Business Motion Labs,",
    "",
    `We'd like to start the ${p.name} package (${usd(p.setup)} setup + ${usd(p.monthly)}/month).`,
    `Please send an invoice for the ${usd(deposit)} deposit, paid by ${method === "bank" ? "bank transfer (ACH)" : "card"}.`,
    "",
    "Business name:",
    "Billing address:",
    "Contact name and phone:",
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function PackageCard({ p }: { p: Package }) {
  const deposit = Math.round(p.setup * PAYMENT.depositShare);
  const bankHref = PAYMENT.bankLink || invoiceMail(p, "bank", deposit);
  const cardHref = PAYMENT.paypalMe ? `${PAYMENT.paypalMe.replace(/\/$/, "")}/${deposit}USD` : invoiceMail(p, "card", deposit);
  const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
  return (
    <article
      id={p.id}
      className={`flex flex-col rounded-[28px] border p-7 ${p.popular ? "border-[#071528] bg-[#071528] text-white" : "border-black/[0.08] bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium tracking-[-0.03em]">{p.name}</h2>
        {p.popular && <span className="rounded-full bg-[#16b886] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#071528]">MOST CHOSEN</span>}
      </div>
      <p className={`mt-2 text-sm leading-6 ${p.popular ? "text-white/60" : "text-black/55"}`}>{p.bestFor}</p>
      <p className="mt-6 text-4xl font-medium tracking-[-0.04em]">
        {usd(p.setup)} <span className={`text-base font-normal ${p.popular ? "text-white/60" : "text-black/50"}`}>setup</span>
      </p>
      <p className={`mt-1 text-sm ${p.popular ? "text-white/70" : "text-black/60"}`}>then {usd(p.monthly)}/month from launch</p>

      <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-[#16b886]">ONE-TIME SETUP</p>
      <ul className="mt-3 grid gap-2 text-sm leading-6">
        {p.setupIncludes.map((x) => (<li key={x} className="flex gap-2"><span className="text-[#16b886]" aria-hidden>✓</span>{x}</li>))}
      </ul>
      <p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[#16b886]">EVERY MONTH</p>
      <ul className="mt-3 grid gap-2 text-sm leading-6">
        {p.monthlyIncludes.map((x) => (<li key={x} className="flex gap-2"><span className="text-[#16b886]" aria-hidden>✓</span>{x}</li>))}
      </ul>

      <div className="mt-auto pt-8">
        <p className={`mb-3 text-sm ${p.popular ? "text-white/70" : "text-black/60"}`}>
          Start with a {Math.round(PAYMENT.depositShare * 100)}% deposit: <span className="font-medium">{usd(deposit)}</span>
        </p>
        <div className="grid gap-2">
          <a href={bankHref} {...ext(bankHref)}
            className={`rounded-full px-5 py-3 text-center text-sm font-medium ${p.popular ? "bg-white text-[#071528]" : "bg-[#071528] text-white"}`}>
            Pay by bank transfer (ACH)
          </a>
          <a href={cardHref} {...ext(cardHref)}
            className={`rounded-full border px-5 py-3 text-center text-sm font-medium ${p.popular ? "border-white/30" : "border-black/15"}`}>
            Pay by card or PayPal
          </a>
        </div>
      </div>
    </article>
  );
}

const terms = [
  ["50% to start, 50% at launch", "Work starts when the deposit arrives. The second half is due when your site goes live, before the monthly plan begins."],
  ["Monthly plan billed in advance", "Starts on launch day. 3-month minimum, then month to month with 30 days' notice."],
  ["Invoices in US dollars", "Every payment gets an invoice by email. Bank transfer (ACH) has no card fee for you."],
  ["You own everything", "Your website, domain, customer list and accounts are yours. If you leave, we hand it all over."],
];

export default function PayPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader />
      <section className="mx-auto max-w-[1500px] px-6 pb-16 pt-36 lg:px-10 lg:pt-44">
        <p className="text-[10px] font-bold tracking-[0.25em] text-black/40">PACKAGES &amp; PAYMENT · US DOLLARS</p>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          One fixed price. No surprises.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
          Pick the package we agreed on your Growth Call and pay the deposit to get started. Not sure which one fits?{" "}
          <a href={bookHref} className="font-medium text-[#071528] underline underline-offset-4">Book a free call</a>.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((p) => (<PackageCard key={p.id} p={p} />))}
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 pb-24 lg:px-10">
        <h2 className="text-2xl font-medium tracking-[-0.03em]">How payment works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {terms.map(([t, d]) => (
            <div key={t} className="rounded-[20px] border border-black/[0.06] bg-white p-5">
              <p className="font-medium">{t}</p>
              <p className="mt-2 text-sm leading-6 text-black/55">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-black/50">
          Already have an invoice? Use the payment link in it, or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#071528] underline underline-offset-4">{CONTACT_EMAIL}</a>.
        </p>
      </section>
      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
