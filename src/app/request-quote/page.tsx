import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business } from "@/config/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Request a Quote | Turnkey Project & Equipment Proposal",
  description:
    "Request an itemized techno-commercial quote for STP, ETP, CETP, RO plants, water softeners, filter media, water chemicals and air pollution control systems from JAGAT WATER TREATMENT in Varanasi.",
};

type RequestQuoteProps = {
  searchParams: Promise<{ interest?: string | string[] }>;
};

export default async function RequestQuotePage({ searchParams }: RequestQuoteProps) {
  const params = await searchParams;
  const initialInterest =
    typeof params.interest === "string" ? decodeURIComponent(params.interest) : "";

  return (
    <>
      <PageHero
        eyebrow="Proposal request"
        title="Request a detailed project or equipment quotation"
        description="Share your flow rate, feed water or effluent analysis parameters, site location and treatment targets. Our engineering team will review your specifications and furnish an itemized proposal."
        crumbs={[{ label: "Request a Quote" }]}
        actions={
          <a href={business.phones[0].href} className="btn-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Direct Sales: {business.phones[0].value}
          </a>
        }
      />

      <section className="border-b border-brand-line bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* Left: What to expect & guidelines */}
            <div className="space-y-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Our approach"
                  title="What happens after you submit"
                  description="We treat every inquiry with technical diligence. Rather than generic price lists, we calculate equipment sizing and hydraulic retention to fit your exact site parameters."
                />

                <div className="mt-8 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Specification review (within 24 hours)",
                      desc: "Our process engineers review the influent flow rate, water analysis report and discharge requirements.",
                    },
                    {
                      step: "2",
                      title: "Site survey & sampling (if needed)",
                      desc: "For complex industrial effluents, we arrange a site visit in Varanasi or across North India to inspect physical layouts and collect composite samples.",
                    },
                    {
                      step: "3",
                      title: "Itemized techno-commercial proposal",
                      desc: "You receive a clear proposal containing the process flow diagram (P&ID), equipment bill of materials, power ratings, civil sizing and Capex/Opex estimates.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-mist font-bold text-brand-blue text-sm shadow-card">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-[0.95rem] font-bold text-brand-navy">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[0.84rem] leading-6 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-brand-line bg-brand-mist/60 p-6 shadow-card">
                  <div className="flex items-center gap-3 text-brand-navy">
                    <ShieldCheck className="h-5 w-5 text-brand-green shrink-0" />
                    <h4 className="text-[0.92rem] font-bold">
                      Direct engineering support
                    </h4>
                  </div>
                  <p className="mt-2 text-[0.84rem] leading-6 text-slate-600">
                    If you are dealing with a pollution board notice, urgent plant breakdown, or tight tender submission deadline, call us directly for expedited engineering support.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-[0.82rem] font-semibold">
                    <a
                      href={business.phones[0].href}
                      className="text-brand-blue hover:underline"
                    >
                      Call Sales: {business.phones[0].value}
                    </a>
                    <a
                      href={business.phones[1].href}
                      className="text-brand-blue hover:underline"
                    >
                      Call Office: {business.phones[1].value}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Quotation Form */}
            <div>
              <Reveal>
                <div className="rounded-3xl border border-brand-line bg-white p-6 shadow-card sm:p-8">
                  <SectionHeading
                    eyebrow="Project questionnaire"
                    title="Project & equipment details"
                    description="Provide as much information as possible to help us configure the right plant or equipment for you."
                  />

                  <div className="mt-8 border-t border-brand-line pt-6">
                    <EnquiryForm variant="quote" defaultInterest={initialInterest} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
