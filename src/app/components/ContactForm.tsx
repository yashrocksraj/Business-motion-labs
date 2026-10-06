"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const business = form.get("business");
    const email = form.get("email");
    const phone = form.get("phone");
    const country = form.get("country");
    const website = form.get("website");
    const service = form.get("service");
    const budget = form.get("budget");
    const details = form.get("details");

    const subject = `New Project Inquiry — ${business}`;

    const body = `
NEW PROJECT INQUIRY

Name:
${name}

Business:
${business}

Email:
${email}

Phone:
${phone}

Country:
${country}

Current Website:
${website || "Not provided"}

Service Required:
${service}

Budget:
${budget}

Project Details:
${details}
`;

    window.location.href =
      `mailto:hello@businessmotionlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <section
      id="contact"
      className="bg-[#071528] px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/35">
              START A PROJECT
            </p>

            <h2 className="mt-8 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
              Let's move
              <br />
              your business
              <br />
              <span className="text-white/25">forward.</span>
            </h2>

            <p className="mt-10 max-w-md text-base leading-7 text-white/45">
              Tell us what you're building, what isn't working, or where you
              want your business to go.
            </p>

            <div className="mt-12 text-sm text-white/40">
              hello@businessmotionlabs.com
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your name *"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <input
                required
                name="business"
                placeholder="Business name *"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                required
                type="email"
                name="email"
                placeholder="Email address *"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <input
                name="phone"
                placeholder="Phone number"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="country"
                placeholder="Country"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />

              <input
                name="website"
                placeholder="Current website"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <select
              required
              name="service"
              defaultValue=""
              className="rounded-xl border border-white/10 bg-[#0b1f3a] px-5 py-4 text-sm text-white outline-none focus:border-white/30"
            >
              <option value="" disabled>
                What do you need? *
              </option>
              <option>Website</option>
              <option>E-commerce</option>
              <option>Online Ordering</option>
              <option>Automation</option>
              <option>CRM / Lead System</option>
              <option>Custom Software</option>
              <option>SEO / Digital Growth</option>
              <option>Something else</option>
            </select>

            <select
              name="budget"
              defaultValue=""
              className="rounded-xl border border-white/10 bg-[#0b1f3a] px-5 py-4 text-sm text-white outline-none focus:border-white/30"
            >
              <option value="" disabled>
                Estimated project budget
              </option>
              <option>Under $1,000</option>
              <option>$1,000 – $2,500</option>
              <option>$2,500 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000+</option>
              <option>Not sure yet</option>
            </select>

            <textarea
              required
              name="details"
              rows={6}
              placeholder="Tell us about your project *"
              className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
            />

            <button
              type="submit"
              className="group mt-2 flex items-center justify-between rounded-xl bg-white px-6 py-5 text-left text-[#071528] transition hover:bg-white/90"
            >
              <span className="text-[10px] font-bold tracking-[0.18em]">
                SEND PROJECT INQUIRY
              </span>

              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            {sent && (
              <p className="text-xs text-white/40">
                Your email application should now open with the project
                details prepared.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}