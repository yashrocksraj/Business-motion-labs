"use client";

import { FormEvent, useState } from "react";

const services = [
  "Free website audit",
  "New or better website",
  "Online booking / ordering",
  "Instant replies & follow-up",
  "Google profile & local search",
  "Reviews",
  "Other",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    service: "",
    projectDetails: "",
    budget: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your project inquiry has been sent successfully. We'll be in touch shortly.",
      });

      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        website: "",
        country: "",
        service: "",
        projectDetails: "",
        budget: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "mt-3 w-full rounded-2xl border border-black/10 bg-white px-5 py-5 text-base text-[#071528] outline-none transition placeholder:text-black/30 focus:border-black/30 focus:ring-2 focus:ring-black/[0.04]";

  const labelClassName =
    "text-[11px] font-bold tracking-[0.08em] text-[#071528]";

  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-[#f7f8f5]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/30">
              FREE WEBSITE AUDIT
            </p>

            <h2 className="mt-7 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Send us your website.{" "}
              <span className="text-black/20">We&apos;ll tell you what to fix.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-black/50">
              We check it the way a new customer would: on Google, on a phone,
              and when they try to book, order or call. You get a short report
              with the three things to fix first. Free, no obligation.
            </p>

            <div className="mt-12 space-y-5 border-t border-black/10 pt-8">
              <div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                  BUSINESS MOTION LABS
                </p>

                <p className="mt-2 text-sm text-black/55">
                  Websites, online booking and automatic follow-up for local
                  businesses
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-black/30">
                  RESPONSE
                </p>

                <p className="mt-2 text-sm text-black/55">
                  A real person replies within one working day. Audit reports
                  usually arrive within 2 working days.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[28px] border border-black/10 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="space-y-6">
                {/* NAME + BUSINESS */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClassName}>
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className={labelClassName}
                    >
                      Business Name *
                    </label>

                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your business"
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClassName}>
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* WEBSITE + COUNTRY */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="website" className={labelClassName}>
                      Current Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbusiness.com"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className={labelClassName}>
                      Country
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label htmlFor="service" className={labelClassName}>
                    What do you need help with? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClassName} appearance-auto`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className={labelClassName}
                  >
                    Tell us about your business *
                  </label>

                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    rows={7}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your business, what you want to build, what problem you're trying to solve, and anything else we should know."
                    className={`${inputClassName} resize-y`}
                  />
                </div>

                {/* BUDGET */}
                <div>
                  <label htmlFor="budget" className={labelClassName}>
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClassName} appearance-auto`}
                  >
                    <option value="">
                      Select an approximate budget
                    </option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* STATUS MESSAGE */}
                {status.type && (
                  <div
                    className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#071528] px-6 py-5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#12335d] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Sending Inquiry..."
                    : "Send for a free audit"}
                </button>

                <p className="text-center text-[10px] leading-5 text-black/35">
                  By submitting this form, you agree to be contacted regarding
                  your project inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
