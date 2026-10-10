import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Business Motion Labs",
  description: "How Business Motion Labs collects, uses and protects personal information.",
};

const sections: [string, string[]][] = [
  [
    "Who we are",
    [
      "Business Motion Labs builds websites, online booking and automated follow-up for businesses. In this policy, \"we\" and \"us\" mean Business Motion Labs.",
      `You can contact us about privacy at any time at ${CONTACT_EMAIL}.`,
    ],
  ],
  [
    "What we collect",
    [
      "Information you send us: your name, business name, email, phone number, website, country and the details you write in our contact or audit form.",
      "Bookings: when you book a call, the booking tool (Google Calendar) shares your name, email and chosen time with us.",
      "Business contact information: for business outreach we use publicly available business details, such as a company's name, website, public phone number and public business email from its website or Google Business Profile.",
      "Email activity: our emails are sent through Resend, which tells us whether an email was delivered, opened or bounced, and whether you clicked a link.",
    ],
  ],
  [
    "How we use it",
    [
      "To reply to you, prepare a website audit, run the call you booked and send proposals you asked for.",
      "To send a small number of business emails about our services. Every email includes an unsubscribe link, and we stop immediately when you use it or reply asking us to stop.",
      "To keep records of our conversations in our CRM so our team can follow up properly.",
      "We do not sell personal information, and we do not use advertising cookies on this website.",
    ],
  ],
  [
    "Who we share it with",
    [
      "Only the service providers we need to run the business: Vercel (website hosting), Resend (email delivery), and Google Workspace and Google Cloud (email, calendar, CRM storage). They process data on our behalf.",
      "We may disclose information if the law requires it.",
    ],
  ],
  [
    "How long we keep it",
    [
      "We keep enquiry and client records for as long as we're in contact, and for up to 3 years after, unless you ask us to delete them sooner. Unsubscribe requests are kept so we never email you again.",
    ],
  ],
  [
    "Your choices and rights",
    [
      `You can ask us to see, correct or delete your information, or to stop contacting you, by emailing ${CONTACT_EMAIL}. Depending on where you live (for example the UK, EU, California or Canada), you may have additional rights under local law, and we'll honour them.`,
    ],
  ],
  [
    "Changes",
    ["If we change this policy, we'll update it on this page and change the date below."],
  ],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#071528]">
      <SiteHeader pricingHref="/gyms#pricing" />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">LEGAL</p>
        <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em]">Privacy policy</h1>
        <p className="mt-4 text-sm text-black/45">Last updated: 10 October 2026</p>
        <div className="mt-12 grid gap-10">
          {sections.map(([title, paras]) => (
            <section key={title}>
              <h2 className="text-2xl font-medium tracking-[-0.03em]">{title}</h2>
              <div className="mt-4 grid gap-3 text-base leading-7 text-black/60">
                {paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
