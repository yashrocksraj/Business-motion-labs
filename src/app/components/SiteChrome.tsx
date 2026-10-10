import { CONTACT_EMAIL, INDUSTRY_LIST, bookHref, isExternalBooking } from "../lib/site";

/** Header and footer for the inner pages (industry pages, privacy). Server components, no client JS. */

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
      {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-[10px] font-bold tracking-[0.14em] transition ${
        dark
          ? "bg-[#071528] text-white hover:bg-[#12335d]"
          : "bg-white text-[#071528] hover:bg-white/85"
      } ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function SiteHeader({ pricingHref = "#pricing" }: { pricingHref?: string }) {
  const links: [string, string][] = [
    ["Industries", "/#industries"],
    ["Pricing", pricingHref],
    ["About", "/#about"],
    ["Contact", "/#contact"],
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
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-xs text-black/45 transition hover:text-black">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={bookHref}
            {...(isExternalBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="rounded-full bg-[#071528] px-4 py-2.5 text-[9px] font-bold tracking-[0.12em] text-white transition hover:bg-[#12335d] sm:px-5 sm:text-[10px]"
          >
            BOOK A FREE CALL
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071528] text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.16em]">BUSINESS MOTION LABS</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
            Websites, online booking and automatic follow-up that turn more of the people who find you into customers.
          </p>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/35">INDUSTRIES</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/65">
            {INDUSTRY_LIST.map((i) => (
              <li key={i.slug}>
                <a href={`/${i.slug}`} className="hover:text-white">{i.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/35">GET STARTED</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/65">
            <li><a href={bookHref} className="hover:text-white">Book a free Growth Call</a></li>
            <li><a href="/#contact" className="hover:text-white">Get a free website audit</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em] text-white/35">COMPANY</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/65">
            <li><a href="/#about" className="hover:text-white">About us</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-3 text-[9px] font-bold tracking-[0.18em] text-white/30 sm:flex-row sm:justify-between">
          <span>© 2026 BUSINESS MOTION LABS</span>
          <span>PHOTOS VIA UNSPLASH</span>
        </div>
      </div>
    </footer>
  );
}
