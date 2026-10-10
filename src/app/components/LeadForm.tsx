"use client";

import { FormEvent, useState } from "react";
import { INDUSTRY_LIST, ROLES } from "../lib/site";

type Variant = "call" | "audit" | "career";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
};

const COUNTRIES = ["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "United Arab Emirates", "India", "Other"];

const FIELDS: Record<Variant, Field[]> = {
  call: [
    { name: "name", label: "Your name", required: true, placeholder: "Jane Smith" },
    { name: "businessName", label: "Business name", required: true, placeholder: "Your business" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@business.com" },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+1 555 123 4567" },
    { name: "country", label: "Country", type: "select", options: COUNTRIES, required: true },
    { name: "preferredTime", label: "Best time for a call (your time zone)", type: "select", options: ["Morning", "Afternoon", "Evening", "Any time"] },
    { name: "website", label: "Website (optional)", type: "url", placeholder: "https://yourbusiness.com", full: true },
    { name: "projectDetails", label: "What would you like to talk about?", type: "textarea", required: true, full: true, placeholder: "e.g. We get website visitors but very few trial bookings." },
  ],
  audit: [
    { name: "name", label: "Your name", required: true, placeholder: "Jane Smith" },
    { name: "businessName", label: "Business name", required: true, placeholder: "Your business" },
    { name: "email", label: "Email (we send the report here)", type: "email", required: true, placeholder: "you@business.com" },
    { name: "website", label: "Website to audit", type: "url", required: true, placeholder: "https://yourbusiness.com" },
    { name: "service", label: "Industry", type: "select", required: true, options: [...INDUSTRY_LIST.map((i) => i.name), "Other"] },
    { name: "country", label: "Country", type: "select", options: COUNTRIES },
    { name: "projectDetails", label: "What's your biggest challenge right now?", type: "textarea", required: true, full: true, placeholder: "e.g. Not enough online bookings, too many no-shows, people don't find us on Google…" },
  ],
  career: [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
    { name: "service", label: "Role", type: "select", required: true, options: [...ROLES.map((r) => r.title), "Open application"] },
    { name: "country", label: "City / Country", placeholder: "Kanpur, India" },
    { name: "website", label: "LinkedIn, portfolio or CV link", type: "url", required: true, placeholder: "https://linkedin.com/in/…", full: true },
    { name: "projectDetails", label: "Why you, and why Business Motion Labs?", type: "textarea", required: true, full: true },
  ],
};

const COPY: Record<Variant, { formType: string; button: string; success: string }> = {
  call: { formType: "Growth Call request", button: "Request my Growth Call", success: "Thank you! We'll email you within one working day with times in your time zone." },
  audit: { formType: "Website audit request", button: "Send me my free audit", success: "Thank you! Your audit report will arrive by email, usually within 2 working days." },
  career: { formType: "Career application", button: "Submit application", success: "Thank you for applying! If your profile matches, we'll contact you within a week." },
};

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-[#f7f8f5] px-4 py-3.5 text-sm outline-none transition focus:border-[#071528] focus:bg-white";

export default function LeadForm({ variant }: { variant: Variant }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { data[k] = String(v); });
    if (data.preferredTime) {
      data.projectDetails = `${data.projectDetails}\n\nBest time for a call: ${data.preferredTime}`;
      delete data.preferredTime;
    }
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: COPY[variant].formType }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || "Something went wrong.");
      form.reset();
      setStatus({ ok: true, msg: COPY[variant].success });
    } catch (err) {
      setStatus({ ok: false, msg: (err as Error).message + " Please try again, or email sales@businessmotionlabs.com." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] border border-black/10 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS[variant].map((f) => (
          <label key={f.name} className={`grid gap-2 ${f.full ? "sm:col-span-2" : ""}`}>
            <span className="text-[10px] font-bold tracking-[0.14em] text-black/45">
              {f.label.toUpperCase()} {f.required && <span className="text-[#b4232a]">*</span>}
            </span>
            {f.type === "select" ? (
              <select name={f.name} required={f.required} defaultValue="" className={inputClass}>
                <option value="" disabled>Select…</option>
                {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} placeholder={f.placeholder} rows={5} className={`${inputClass} resize-y`} />
            ) : (
              <input name={f.name} type={f.type || "text"} required={f.required} placeholder={f.placeholder} className={inputClass} />
            )}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={busy}
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#071528] px-6 py-4 text-[11px] font-bold tracking-[0.14em] text-white transition hover:bg-[#12335d] disabled:opacity-60 sm:w-auto"
      >
        {busy ? "SENDING…" : COPY[variant].button.toUpperCase()} <span aria-hidden>→</span>
      </button>
      {status && (
        <p role="status" className={`mt-5 rounded-2xl px-4 py-3 text-sm ${status.ok ? "bg-[#e7f7f1] text-[#0f6b4f]" : "bg-[#fdecec] text-[#b4232a]"}`}>
          {status.msg}
        </p>
      )}
      <p className="mt-5 text-xs leading-5 text-black/40">
        We use your details only to reply to this request. See our <a href="/privacy" className="underline">privacy policy</a>.
      </p>
    </form>
  );
}
