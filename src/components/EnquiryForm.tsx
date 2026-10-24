"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business";
import { products, productCategories } from "@/data/products";
import { services } from "@/data/services";
import {
  buildEnquiryMessage,
  enquiryChannelLabel,
  mailtoHref,
  whatsappHref,
} from "@/lib/enquiry";

type Variant = "contact" | "quote";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  application: string;
  capacity: string;
  location: string;
  technical: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  interest: "",
  application: "",
  capacity: "",
  location: "",
  technical: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm({
  variant = "contact",
  defaultInterest = "",
}: {
  variant?: Variant;
  defaultInterest?: string;
}) {
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    interest: defaultInterest,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const isQuote = variant === "quote";
  const channel = enquiryChannelLabel();
  const channelTitle = business.whatsapp.enabled ? "WhatsApp" : "email";
  const phone = business.phones[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      next.phone = "Enter a valid phone number with 10–15 digits.";
    }
    if (!emailPattern.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.interest.trim()) {
      next.interest = isQuote
        ? "Select the product or treatment solution you need."
        : "Select a product or service of interest.";
    }
    if (!form.location.trim()) {
      next.location = "Please enter the project location.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`enquiry-${firstKey}`)?.focus();
      return;
    }

    const heading = isQuote
      ? "I would like to request a quotation."
      : "I would like to make an enquiry.";

    const message = buildEnquiryMessage(
      heading,
      [
        { name: "fullName", label: "Name", value: form.fullName },
        { name: "company", label: "Company", value: form.company },
        { name: "phone", label: "Phone", value: form.phone },
        { name: "email", label: "Email", value: form.email },
        { name: "interest", label: "Product / service of interest", value: form.interest },
        { name: "application", label: "Application", value: form.application },
        { name: "capacity", label: isQuote ? "Capacity / quantity" : "Required capacity or technical requirement", value: form.capacity },
        { name: "location", label: "Project location", value: form.location },
        { name: "technical", label: "Technical requirements", value: form.technical },
      ],
      { message: form.message },
    );

    const subject = `${isQuote ? "Quotation request" : "Website enquiry"} | ${form.interest}`;
    const href = business.whatsapp.enabled
      ? whatsappHref(message)
      : mailtoHref(subject, message);

    setSubmitted(true);

    if (business.whatsapp.enabled) {
      const opened = window.open(href, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = href;
    } else {
      window.location.href = href;
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="enquiry-fullName">
            Full name <span className="text-brand-green">*</span>
          </label>
          <input
            id="enquiry-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className="field-input"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName ? <p className="field-error">{errors.fullName}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="enquiry-company">
            Company / organisation
          </label>
          <input
            id="enquiry-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            className="field-input"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="enquiry-phone">
            Phone number <span className="text-brand-green">*</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="field-input"
            placeholder="+91 00000 00000"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <p className="field-error">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="field-label" htmlFor="enquiry-email">
            Email address <span className="text-brand-green">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="field-input"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="enquiry-interest">
          {isQuote
            ? "Product or treatment solution required"
            : "Product or service of interest"}{" "}
          <span className="text-brand-green">*</span>
        </label>
        <select
          id="enquiry-interest"
          name="interest"
          value={form.interest}
          onChange={(event) => update("interest", event.target.value)}
          className="field-select"
          aria-invalid={Boolean(errors.interest)}
        >
          <option value="">Select a product or service</option>
          {productCategories.map((category) => (
            <optgroup key={category} label={category}>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.name}
                  </option>
                ))}
            </optgroup>
          ))}
          <optgroup label="Services">
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </optgroup>
          <option value="Other / not sure">Other / not sure</option>
        </select>
        {errors.interest ? <p className="field-error">{errors.interest}</p> : null}
      </div>

      <div className={`grid gap-5 ${isQuote ? "sm:grid-cols-2" : ""}`}>
        {isQuote ? (
          <div>
            <label className="field-label" htmlFor="enquiry-application">
              Application
            </label>
            <input
              id="enquiry-application"
              name="application"
              type="text"
              value={form.application}
              onChange={(event) => update("application", event.target.value)}
              className="field-input"
              placeholder="e.g. industrial wastewater, drinking water"
            />
          </div>
        ) : null}

        <div>
          <label className="field-label" htmlFor="enquiry-capacity">
            {isQuote
              ? "Capacity or quantity"
              : "Required capacity / technical requirement"}{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="enquiry-capacity"
            name="capacity"
            type="text"
            value={form.capacity}
            onChange={(event) => update("capacity", event.target.value)}
            className="field-input"
            placeholder="e.g. 50 KLD, flow rate, model"
          />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="enquiry-location">
          Project location <span className="text-brand-green">*</span>
        </label>
        <input
          id="enquiry-location"
          name="location"
          type="text"
          value={form.location}
          onChange={(event) => update("location", event.target.value)}
          className="field-input"
          placeholder="City, district and state"
          aria-invalid={Boolean(errors.location)}
        />
        {errors.location ? <p className="field-error">{errors.location}</p> : null}
      </div>

      {isQuote ? (
        <div>
          <label className="field-label" htmlFor="enquiry-technical">
            Technical requirements
          </label>
          <textarea
            id="enquiry-technical"
            name="technical"
            value={form.technical}
            onChange={(event) => update("technical", event.target.value)}
            className="field-textarea"
            placeholder="Inlet parameters, treatment target, available space, utilities or other technical details"
          />
        </div>
      ) : null}

      <div>
        <label className="field-label" htmlFor="enquiry-message">
          {isQuote ? "Additional message" : "Message"}
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="field-textarea"
          placeholder="Tell us briefly about your requirement"
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-brand-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[0.72rem] leading-5 text-slate-500">
          Your details are used only to respond to this enquiry. The form opens your{" "}
          {channel} app with the message prepared.
        </p>
        <button type="submit" className="btn-primary shrink-0">
          {isQuote ? "Submit Enquiry" : "Send Enquiry"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {!business.whatsapp.enabled ? (
        <p className="rounded-xl border border-brand-line bg-brand-mist px-4 py-3 text-[0.75rem] leading-5 text-slate-600">
          WhatsApp enquiry is not connected yet, so this form prepares an email instead.
          To talk now, call{" "}
          <a href={phone.href} className="font-semibold text-brand-blue hover:underline">
            {phone.value}
          </a>
          .
        </p>
      ) : null}

      <div aria-live="polite">
        {submitted ? (
          <p className="rounded-xl border border-brand-green/25 bg-brand-green/5 px-4 py-3 text-[0.78rem] leading-5 text-brand-navy">
            Your {channelTitle} app should open with the enquiry prepared. If it does not
            open, call{" "}
            <a href={phone.href} className="font-semibold text-brand-blue hover:underline">
              {phone.value}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${business.email}`}
              className="font-semibold text-brand-blue hover:underline"
            >
              {business.email}
            </a>
            .
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
          <a href={phone.href} className="hover:text-brand-blue">
            {phone.value}
          </a>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
          <a href={`mailto:${business.email}`} className="hover:text-brand-blue">
            {business.email}
          </a>
        </span>
        {business.whatsapp.enabled ? (
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
            WhatsApp configured
          </span>
        ) : null}
      </div>
    </form>
  );
}
