"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      businessName: String(formData.get("businessName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      projectDetails: String(formData.get("projectDetails") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const rawResponse = await response.text();

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        result = rawResponse ? JSON.parse(rawResponse) : {};
      } catch {
        result = {};
      }

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message ||
            "We couldn't send your inquiry. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your project inquiry has been sent successfully. We'll be in touch shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

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

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-[#101827] outline-none transition placeholder:text-black/35 focus:border-black/30 focus:bg-black/[0.05]";

  const labelClass = "mb-2 block text-sm font-medium text-[#101827]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name *
          </label>

          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            placeholder="Your business"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 555 123 4567"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="website" className={labelClass}>
            Current Website
          </label>

          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourbusiness.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>

          <input
            id="country"
            name="country"
            type="text"
            placeholder="United States"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          What do you need help with? *
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Website">Website</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Online Ordering">Online Ordering</option>
          <option value="Automation">Automation</option>
          <option value="CRM / Lead System">CRM / Lead System</option>
          <option value="Custom Software">Custom Software</option>
          <option value="SEO / Digital Growth">
            SEO / Digital Growth
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectDetails" className={labelClass}>
          Tell us about your project *
        </label>

        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={6}
          placeholder="Tell us about your business, what you want to build, and what you're trying to achieve."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Estimated Budget
        </label>

        <select
          id="budget"
          name="budget"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Select a budget range</option>
          <option value="Under $1,000">Under $1,000</option>
          <option value="$1,000 – $2,500">$1,000 – $2,500</option>
          <option value="$2,500 – $5,000">$2,500 – $5,000</option>
          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
          <option value="$10,000+">$10,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      {status.message && (
        <div
          className={`rounded-xl border px-4 py-4 text-sm ${
            status.type === "success"
              ? "border-green-600/20 bg-green-50 text-green-800"
              : "border-red-600/20 bg-red-50 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#101827] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1a2538] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending Inquiry..." : "Send Project Inquiry"}
      </button>

      <p className="text-center text-xs text-black/40">
        Your information is only used to respond to your project inquiry.
      </p>
    </form>
  );
}