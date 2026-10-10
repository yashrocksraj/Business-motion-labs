import {
  ADDRESS,
  CONTACT_EMAIL,
  INDUSTRY_LIST,
  INSTAGRAM,
  LINKEDIN,
  PHONE,
  WHATSAPP,
  auditHref,
  bookHref,
  isExternalBooking,
} from "../lib/site";

/** Shared header, footer and buttons. Server components, no client JS (the mobile menu uses <details>). */

const bookLinkProps = isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {};

export function BookButton({
  children = "BOOK A FREE GROWTH CALL",
  dark = true,
  className = "",
}: {
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={bookHref}
      {...bookLinkProps}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-[10px] font-bold tracking-[0.14em] transition ${
        dark ? "bg-[#071528] text-white hover:bg-[#12335d]" : "bg-white text-[#071528] hover:bg-white/85"
      } ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function SiteHeader({ pricingHref = "/gyms#pricing" }: { pricingHref?: string }) {
  const links: [string, string][] = [
    ["Industries", "/#industries"],
    ["Services", "/#services"],
    ["Work", "/work"],
    ["Plans", pricingHref],
    ["About", "/about"],
    ["Careers", "/careers"],
    ["FAQ", "/#faq"],
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-5 lg:px-8">
        <div className="relative flex items-center justify-between rounded-full border border-black/[0.08] bg-[#f7f8f5]/90 px-4 py-3 shadow-sm backdrop-blur-xl">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071528] text-sm font-bold text-white">
              B
            </span>
            <span className="text-[10px] font-bold tracking-[0.14em] sm:text-[11px] sm:tracking-[0.16em]">
              BUSINESS MOTION LABS
            </span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-xs text-black/50 transition hover:text-black">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={auditHref}
              className="hidden rounded-full border border-black/15 px-4 py-2.5 text-[10px] font-bold tracking-[0.12em] transition hover:border-black/40 sm:inline-block"
            >
              FREE AUDIT
            </a>
            <a
              href={bookHref}
              {...bookLinkProps}
              className="rounded-full bg-[#071528] px-4 py-2.5 text-[9px] font-bold tracking-[0.12em] text-white transition hover:bg-[#12335d] sm:px-5 sm:text-[10px]"
            >
              BOOK A FREE CALL
            </a>
            <details className="group xl:hidden">
              <summary
                aria-label="Open menu"
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 [&::-webkit-details-marker]:hidden"
              >
                <span className="group-open:hidden">☰</span>
                <span className="hidden group-open:inline">×</span>
              </summary>
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-3xl border border-black/10 bg-[#f7f8f5] p-4 shadow-xl">
                <div className="grid gap-1">
                  {[...links, ["Free website audit", auditHref] as [string, string], ["Contact", "/#contact"] as [string, string]].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="rounded-xl px-4 py-3 text-sm text-black/65 hover:bg-black/[0.04] hover:text-black"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

export function WhatsAppButton() {
  if (!WHATSAPP) return null;
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Business Motion Labs, I'd like to know more about a free Growth Call.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:brightness-95"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.88.75.77-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.85 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.69c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
      WhatsApp
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071528] text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.16em]">BUSINESS MOTION LABS</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
            Websites, online booking and automatic follow-up that turn more of the people who find you into customers.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-white/70">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
            {PHONE && <li><a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white">{PHONE}</a></li>}
            {WHATSAPP && <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a></li>}
            {ADDRESS && <li className="max-w-xs leading-6 text-white/55">{ADDRESS}</li>}
          </ul>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/40">INDUSTRIES</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            {INDUSTRY_LIST.map((i) => (
              <li key={i.slug}><a href={`/${i.slug}`} className="hover:text-white">{i.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/40">GET STARTED</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            <li><a href={bookHref} className="hover:text-white">Book a free Growth Call</a></li>
            <li><a href={auditHref} className="hover:text-white">Get a free website audit</a></li>
            <li><a href="/work" className="hover:text-white">Our work</a></li>
            <li><a href="/#faq" className="hover:text-white">Questions & answers</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact us</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/40">COMPANY</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            <li><a href="/about" className="hover:text-white">About us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy policy</a></li>
            {LINKEDIN && <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>}
            {INSTAGRAM && <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-3 text-[9px] font-bold tracking-[0.18em] text-white/35 sm:flex-row sm:justify-between">
          <span>© 2026 BUSINESS MOTION LABS</span>
          <span>STOCK PHOTOS VIA UNSPLASH</span>
        </div>
      </div>
    </footer>
  );
}
