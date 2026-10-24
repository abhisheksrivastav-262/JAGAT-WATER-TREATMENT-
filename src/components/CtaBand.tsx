import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "@/components/Reveal";

type CtaBandProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function CtaBand({
  title = "Tell us about your water or wastewater requirement",
  description = "Share your application, capacity and site details. Our team will review the requirement and respond with the right treatment approach and a quotation.",
  eyebrow = "Start a conversation",
}: CtaBandProps) {
  const phone = business.phones[0];

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="pointer-events-none absolute inset-0 dot-pattern opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-cyan/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-14 sm:py-16 lg:py-20">
        <Reveal className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <div>
            <span className="eyebrow-light eyebrow-line">{eyebrow}</span>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl leading-[1.15] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-white/65">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.8rem] text-white/55">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
                {phone.value}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
                {business.email}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Link href="/request-quote" className="btn-white justify-between">
              Request a quotation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={phone.href} className="btn-ghost-light justify-between">
              Call {phone.value}
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-2 py-2 text-[0.82rem] font-semibold text-white/70 transition hover:text-white"
            >
              Or send us a message
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
