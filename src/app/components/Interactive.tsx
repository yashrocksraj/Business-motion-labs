"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONCEPTS, INDUSTRY_LIST, type Concept } from "../lib/site";

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Phone frame ---------------- */
export function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-[280px] rounded-[44px] border-[10px] border-[#0b1a2e] bg-[#0b1a2e] shadow-2xl ${className}`}>
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0b1a2e]" />
      <div className="relative h-[560px] overflow-hidden rounded-[34px] bg-white">{children}</div>
    </div>
  );
}

/* ---------------- Hero: live activity feed ---------------- */
const FEED = [
  { icon: "📅", title: "New trial booked", text: "Tue 6:30 pm · Strength class", tone: "bg-[#e7f7f1] text-[#0f6b4f]" },
  { icon: "💬", title: "Enquiry answered in 40 s", text: "\"Do you have parking?\" → auto-reply sent", tone: "bg-[#eef3ff] text-[#1d4ed8]" },
  { icon: "⏰", title: "Reminder sent", text: "Haircut & colour · tomorrow 11:00 am", tone: "bg-[#fff6e5] text-[#9a5b00]" },
  { icon: "🛍️", title: "Direct order received", text: "2 × burger, fries · pickup 7:15 pm", tone: "bg-[#e7f7f1] text-[#0f6b4f]" },
  { icon: "📞", title: "Missed call → text sent", text: "\"Sorry we missed you, how can we help?\"", tone: "bg-[#eef3ff] text-[#1d4ed8]" },
  { icon: "⭐", title: "New 5-star review", text: "\"Booking took 30 seconds!\"", tone: "bg-[#fff6e5] text-[#9a5b00]" },
];

export function HeroPhone() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const t = setInterval(() => setN((v) => v + 1), 2200);
    return () => clearInterval(t);
  }, []);
  const items = useMemo(() => Array.from({ length: 4 }, (_, i) => ({ ...FEED[(n - i) % FEED.length], key: n - i })), [n]);
  return (
    <div className="relative">
      <Phone>
        <div className="flex h-full flex-col bg-[#f4f6f3]">
          <div className="bg-[#071528] px-5 pb-5 pt-10 text-white">
            <p className="text-[10px] font-bold tracking-[0.18em] text-white/50">YOUR BUSINESS · TODAY</p>
            <p className="mt-2 text-xl font-medium">While you were working</p>
          </div>
          <div className="flex-1 space-y-3 p-4">
            <AnimatePresence initial={false}>
              {items.map((it) => (
                <motion.div
                  key={it.key}
                  layout
                  initial={{ opacity: 0, y: -24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45 }}
                  className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${it.tone}`}>{it.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#071528]">{it.title}</p>
                    <p className="truncate text-xs text-black/50">{it.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Phone>
      <p className="mt-4 text-center text-[11px] text-black/40">Illustration of a typical day with our system</p>
    </div>
  );
}

/* ---------------- Industry explorer ---------------- */
export function IndustryExplorer() {
  const [i, setI] = useState(0);
  const d = INDUSTRY_LIST[i];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {INDUSTRY_LIST.map((ind, k) => (
          <button
            key={ind.slug}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`rounded-full px-5 py-2.5 text-sm transition ${
              k === i ? "bg-[#071528] text-white" : "border border-black/10 bg-white text-black/60 hover:text-black"
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={d.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#071528]">
            <img src={d.image.replace("w=1600", "w=1100")} alt={d.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-[#071528]/30 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/60">{d.eyebrow}</p>
              <p className="mt-3 text-3xl font-medium leading-tight tracking-[-0.03em]">
                {d.headline} {d.headlineMuted}
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-black/[0.06] bg-white p-6">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#b4232a]">WHERE {d.customers.toUpperCase()} ARE LOST TODAY</p>
              <ul className="mt-4 grid gap-3">
                {d.journey.map((j) => (
                  <li key={j.step} className="flex gap-3 text-sm leading-6">
                    <span className="mt-0.5 text-[#b4232a]" aria-hidden>✕</span>
                    <span><span className="font-medium">{j.step}:</span> <span className="text-black/55">{j.leak.split(": ")[1] || j.leak}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] bg-[#071528] p-6 text-white">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#16b886]">WHAT WE PUT IN PLACE</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {d.fixes.map((f) => (
                  <li key={f.title}>
                    <p className="font-medium">{f.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">{f.items[1]}</p>
                  </li>
                ))}
              </ul>
              <a href={`/${d.slug}`} className="mt-6 inline-block text-[10px] font-bold tracking-[0.16em] text-white/80 hover:text-white">
                SEE THE FULL {d.name.toUpperCase()} PAGE →
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Growth calculator ---------------- */
function Slider({ label, value, min, max, step, onChange, fmt }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; fmt: (v: number) => string }) {
  return (
    <label className="grid gap-2">
      <span className="flex items-baseline justify-between text-sm">
        <span className="text-white/65">{label}</span>
        <span className="text-lg font-medium text-white">{fmt(value)}</span>
      </span>
      <input type="range" className="bml-range w-full" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

export function GrowthCalculator() {
  const [visitors, setVisitors] = useState(1500);
  const [rate, setRate] = useState(2);
  const [value, setValue] = useState(600);
  const [lift, setLift] = useState(1);
  const extra = Math.round((visitors * lift) / 100);
  const yearly = extra * value * 12;
  const money = (v: number) => "$" + v.toLocaleString("en-US");
  return (
    <div className="grid gap-8 rounded-[32px] bg-[#071528] p-6 text-white sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-7">
        <Slider label="Website visitors per month" value={visitors} min={200} max={10000} step={100} onChange={setVisitors} fmt={(v) => v.toLocaleString("en-US")} />
        <Slider label="Visitors who become customers today" value={rate} min={0.5} max={10} step={0.5} onChange={setRate} fmt={(v) => v + "%"} />
        <Slider label="What one customer is worth per year" value={value} min={100} max={5000} step={50} onChange={setValue} fmt={money} />
        <Slider label="Improvement from a better journey" value={lift} min={0.5} max={5} step={0.5} onChange={setLift} fmt={(v) => "+" + v + " pts"} />
      </div>
      <div className="flex flex-col justify-between rounded-[24px] bg-white/[0.06] p-7">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/45">ESTIMATE</p>
          <p className="mt-4 text-sm text-white/60">
            From {(rate).toString()}% to {(rate + lift).toString()}% of visitors becoming customers means about
          </p>
          <motion.p key={extra} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-6xl font-medium tracking-[-0.05em]">
            +{extra}
          </motion.p>
          <p className="text-sm text-white/60">extra customers every month</p>
          <motion.p key={yearly} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} className="mt-8 text-4xl font-medium tracking-[-0.04em] text-[#16b886]">
            {money(yearly)}
          </motion.p>
          <p className="text-sm text-white/60">potential extra revenue per year</p>
        </div>
        <p className="mt-8 text-xs leading-5 text-white/40">
          A simple estimate for illustration, not a promise. On a free Growth Call we work it out with your real numbers.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Concept mockups ---------------- */
function MockHeader({ brand, color }: { brand: string; color: string }) {
  return (
    <div className="px-5 pb-4 pt-10 text-white" style={{ background: color }}>
      <p className="text-[10px] font-bold tracking-[0.18em] opacity-70">CONCEPT</p>
      <p className="mt-1 text-lg font-semibold">{brand}</p>
    </div>
  );
}

function Pill({ active, children, onClick }: { active: boolean; children: ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-xl border px-3 py-2 text-xs transition ${active ? "border-transparent bg-[#071528] text-white" : "border-black/10 bg-white text-black/70 hover:border-black/30"}`}>
      {children}
    </button>
  );
}

function Confirm({ show, text }: { show: boolean; text: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#0f6b4f] p-4 text-sm text-white shadow-xl">
          ✓ {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ConceptMock({ c }: { c: Concept }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(-1);
  const [done, setDone] = useState(false);
  const [qty, setQty] = useState<number[]>([0, 0, 0, 0]);
  useEffect(() => { setA(0); setB(-1); setDone(false); setQty([0, 0, 0, 0]); }, [c.slug]);
  const book = (label: string) => (
    <button onClick={() => setDone(true)} disabled={b < 0} className="mt-4 w-full rounded-xl bg-[#16b886] py-3 text-sm font-semibold text-[#071528] disabled:opacity-40">
      {label}
    </button>
  );

  if (c.mock === "trial")
    return (
      <Phone>
        <MockHeader brand={c.brand} color="#111827" />
        <div className="p-4">
          <p className="text-sm font-semibold">Book your free trial</p>
          <p className="mt-3 text-[11px] font-bold tracking-[0.12em] text-black/40">CLASS</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Strength", "HIIT", "Open gym"].map((x, k) => <Pill key={x} active={a === k} onClick={() => setA(k)}>{x}</Pill>)}
          </div>
          <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-black/40">TIME · TUESDAY</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["6:30 am", "12:00 pm", "5:30 pm", "6:30 pm", "7:30 pm", "8:30 pm"].map((x, k) => <Pill key={x} active={b === k} onClick={() => setB(k)}>{x}</Pill>)}
          </div>
          {book("Book free trial")}
          <p className="mt-3 text-center text-[11px] text-black/40">Confirmation by SMS & email · reminder 2 h before</p>
        </div>
        <Confirm show={done} text="Trial booked! Confirmation sent by SMS." />
      </Phone>
    );

  if (c.mock === "schedule")
    return (
      <Phone>
        <MockHeader brand={c.brand} color="#6b4f3a" />
        <div className="p-4">
          <div className="flex gap-1.5">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, k) => <Pill key={d} active={a === k} onClick={() => { setA(k); setB(-1); }}>{d}</Pill>)}
          </div>
          <div className="mt-4 grid gap-2">
            {[["7:00 am", "Sunrise Flow", "All levels"], ["9:30 am", "Pilates Mat", "Beginner"], ["6:00 pm", "Vinyasa", "Intermediate"], ["7:30 pm", "Yin & Restore", "All levels"]].map(([t, n, l], k) => (
              <button key={n} onClick={() => setB(k)} className={`flex items-center justify-between rounded-2xl border p-3 text-left transition ${b === k ? "border-[#071528] bg-[#071528] text-white" : "border-black/10"}`}>
                <span><span className="block text-sm font-semibold">{n}</span><span className="text-[11px] opacity-60">{t} · {l}</span></span>
                <span className="text-xs">{b === k ? "Selected" : "Book"}</span>
              </button>
            ))}
          </div>
          {book("Use intro pass: 3 classes")}
        </div>
        <Confirm show={done} text="You're in! See you in class." />
      </Phone>
    );

  if (c.mock === "salon")
    return (
      <Phone>
        <MockHeader brand={c.brand} color="#7a2e4a" />
        <div className="p-4">
          <p className="text-[11px] font-bold tracking-[0.12em] text-black/40">SERVICE</p>
          <div className="mt-2 grid gap-2">
            {[["Cut & blow-dry", "45 min · $55"], ["Colour & gloss", "90 min · $120"], ["Full leg wax", "40 min · $45"]].map(([n, d], k) => (
              <button key={n} onClick={() => setA(k)} className={`flex justify-between rounded-xl border p-3 text-left text-sm transition ${a === k ? "border-[#7a2e4a] bg-[#fbeef3]" : "border-black/10"}`}>
                <span className="font-medium">{n}</span><span className="text-xs text-black/50">{d}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-black/40">THURSDAY WITH ANNA</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["10:00", "11:15", "13:30", "15:00", "16:45", "18:00"].map((x, k) => <Pill key={x} active={b === k} onClick={() => setB(k)}>{x}</Pill>)}
          </div>
          {book("Confirm booking")}
        </div>
        <Confirm show={done} text="Booked! Reminder 24 h before." />
      </Phone>
    );

  if (c.mock === "order") {
    const items = [["Smash burger", 14], ["Fish tacos", 13], ["Truffle fries", 7], ["Lemonade", 4]] as const;
    const total = items.reduce((sum, item, k) => sum + item[1] * qty[k], 0);
    return (
      <Phone>
        <MockHeader brand={c.brand} color="#9a3412" />
        <div className="p-4">
          <div className="flex gap-2">
            {["Pickup", "Delivery", "Book a table"].map((x, k) => <Pill key={x} active={a === k} onClick={() => setA(k)}>{x}</Pill>)}
          </div>
          <div className="mt-4 grid gap-2">
            {items.map(([n, p], k) => (
              <div key={n} className="flex items-center justify-between rounded-xl border border-black/10 p-3">
                <span><span className="block text-sm font-medium">{n}</span><span className="text-xs text-black/50">${p}</span></span>
                <span className="flex items-center gap-2">
                  {qty[k] > 0 && <span className="text-sm font-semibold">{qty[k]}</span>}
                  <button onClick={() => { const q = [...qty]; q[k] = Math.min(9, q[k] + 1); setQty(q); }} className="h-8 w-8 rounded-full bg-[#071528] text-white">+</button>
                </span>
              </div>
            ))}
          </div>
          <button onClick={() => setDone(true)} disabled={total === 0} className="mt-4 w-full rounded-xl bg-[#16b886] py-3 text-sm font-semibold text-[#071528] disabled:opacity-40">
            Order direct · ${total}
          </button>
          <p className="mt-2 text-center text-[11px] text-black/40">No app commission · pay online or at pickup</p>
        </div>
        <Confirm show={done} text="Order received! Ready in 20 min." />
      </Phone>
    );
  }

  if (c.mock === "quote")
    return (
      <Phone>
        <MockHeader brand={c.brand} color="#0c4a6e" />
        <div className="p-4">
          <a className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#16b886] py-3 text-sm font-semibold text-[#071528]">📞 Tap to call now</a>
          <p className="mt-5 text-sm font-semibold">Or get a quote in 30 seconds</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Leak / burst pipe", "Blocked drain", "Water heater", "Bathroom refit"].map((x, k) => <Pill key={x} active={b === k} onClick={() => setB(k)}>{x}</Pill>)}
          </div>
          <div className="mt-3 flex gap-2">
            {["Emergency", "This week", "Flexible"].map((x, k) => <Pill key={x} active={a === k} onClick={() => setA(k)}>{x}</Pill>)}
          </div>
          {book("Request my quote")}
          <div className="mt-4 rounded-2xl bg-[#eef3ff] p-3 text-xs text-[#1d4ed8]">
            <p className="font-semibold">Missed-call text-back</p>
            <p className="mt-1">&quot;Hi, it&apos;s RapidFlow. Sorry we missed your call, we&apos;re on a job. What do you need help with?&quot;</p>
          </div>
        </div>
        <Confirm show={done} text="Quote request sent! We'll call within 15 min." />
      </Phone>
    );

  // dashboard
  const bars = [38, 52, 47, 61, 70, 84];
  return (
    <Phone>
      <MockHeader brand={c.brand} color="#071528" />
      <div className="p-4">
        <p className="text-[11px] text-black/40">Sample data · concept</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[["Visits", "4,210"], ["Enquiries", "126"], ["Bookings", "84"], ["Reviews", "4.8 ★"]].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-[#f4f6f3] p-3">
              <p className="text-[11px] text-black/45">{k}</p>
              <p className="text-lg font-semibold">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-black/40">BOOKINGS · LAST 6 MONTHS</p>
        <div className="mt-2 flex h-28 items-end gap-2">
          {bars.map((h, k) => (
            <motion.div key={k} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: k * 0.08, duration: 0.5 }} className="flex-1 rounded-t-md bg-[#16b886]" />
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-black/10 p-3 text-xs leading-5 text-black/60">
          <span className="font-semibold text-black">This month:</span> new trial page live, reply time down to under a minute. <span className="font-semibold text-black">Next:</span> review requests after every visit.
        </div>
      </div>
    </Phone>
  );
}

/* ---------------- Concept showcase (tabs) ---------------- */
export function ConceptShowcase({ limit }: { limit?: number }) {
  const list = limit ? CONCEPTS.slice(0, limit) : CONCEPTS;
  const [i, setI] = useState(0);
  const c = list[i];
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <div className="flex flex-wrap gap-2">
          {list.map((x, k) => (
            <button key={x.slug} onClick={() => setI(k)} className={`rounded-full px-4 py-2 text-sm transition ${k === i ? "bg-white text-[#071528]" : "border border-white/15 text-white/60 hover:text-white"}`}>
              {x.service}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={c.slug} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="mt-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#16b886]">CONCEPT PROJECT · {c.industry.toUpperCase()}</p>
            <h3 className="mt-3 text-4xl font-medium tracking-[-0.04em]">{c.brand}</h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">{c.summary}</p>
            <ul className="mt-6 grid max-w-xl gap-2 sm:grid-cols-2">
              {c.solution.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-white/70"><span className="text-[#16b886]">✓</span>{s}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/45">Try it: the phone on the right is clickable.</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <ConceptMock c={c} />
    </div>
  );
}
