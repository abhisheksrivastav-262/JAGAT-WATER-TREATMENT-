import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  FileCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { business, mapsDirectionsUrl, mapsEmbedUrl } from "@/config/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us | Office, Workshop & Support Desk in Varanasi",
  description:
    "Contact JAGAT WATER TREATMENT in Varanasi, Uttar Pradesh for turnkey STP, ETP, CETP, RO plants, water softeners, treatment chemicals, and air pollution control equipment.",
};

const contactFaqs = [
  {
    question: "How quickly do you respond with a preliminary proposal?",
    answer:
      "For standard equipment and packaged units, we usually furnish specifications and budgetary quotes within 24–48 hours. For turnkey STP/ETP projects, we review the effluent parameters and arrange an on-site survey if required before submitting a detailed proposal.",
  },
  {
    question: "Do you provide on-site inspections across Uttar Pradesh and North India?",
    answer:
      "Yes. Our engineering team conducts site surveys, physical layout measurements, and effluent sampling across Varanasi, Prayagraj, Gorakhpur, Lucknow, Kanpur, and surrounding states.",
  },
  {
    question: "Can we visit your office and workshop in Varanasi?",
    answer:
      "Yes. Our office and workshop are located at Plot No. 5–6, Hardattpur (G.T. Road), Jagatpur, Rohaniya, Varanasi. We recommend calling in advance to ensure the relevant engineering specialist is present.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Get in touch with JAGAT WATER TREATMENT"
        description="Our office and workshop are located on G.T. Road, Varanasi. Call our team, send an email, or submit an enquiry for treatment plants, equipment, media, chemicals and site visits."
        crumbs={[{ label: "Contact" }]}
        actions={
          <a href={business.phones[0].href} className="btn-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phones[0].value}
          </a>
        }
      />

      <section className="border-b border-brand-line bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* Left: Contact Info & Map */}
            <div className="space-y-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Reach our team"
                  title="Office, workshop and engineering desk"
                  description="We are based in Varanasi and work with industrial, institutional and commercial clients across Uttar Pradesh and neighboring regions."
                />

                <div className="mt-8 space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-2xl border border-brand-line bg-brand-mist/60 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-bold text-brand-navy">
                        Telephone &amp; Mobile
                      </h3>
                      <div className="mt-2 space-y-1">
                        {business.phones.map((phone) => (
                          <div key={phone.value} className="text-[0.84rem]">
                            <span className="text-slate-500 mr-2">{phone.label}:</span>
                            <a
                              href={phone.href}
                              className="font-semibold text-brand-blue hover:underline"
                            >
                              {phone.value}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 rounded-2xl border border-brand-line bg-brand-mist/60 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-bold text-brand-navy">
                        Email Correspondence
                      </h3>
                      <p className="mt-1 text-[0.82rem] text-slate-600">
                        For drawings, tender specifications and effluent test reports:
                      </p>
                      <a
                        href={`mailto:${business.email}`}
                        className="mt-1.5 inline-block text-[0.86rem] font-semibold text-brand-blue hover:underline break-all"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 rounded-2xl border border-brand-line bg-brand-mist/60 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-bold text-brand-navy">
                        Office &amp; Workshop Address
                      </h3>
                      <p className="mt-1 text-[0.84rem] leading-6 text-slate-700">
                        {business.address.full}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-[0.78rem]">
                        <a
                          href={mapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-brand-blue hover:underline"
                        >
                          Directions on Google Maps
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="flex items-start gap-4 rounded-2xl border border-brand-line bg-brand-mist/60 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <FileCheck className="h-5 w-5" />
                    </span>
                    <div className="text-[0.82rem] leading-5 text-slate-600">
                      <p className="font-bold text-brand-navy">
                        Registration &amp; Visiting Information
                      </p>
                      <p className="mt-1">
                        <strong className="text-brand-navy">GSTIN:</strong> {business.gst}
                      </p>
                      <p className="mt-1">
                        <strong className="text-brand-navy">Hours Note:</strong> {business.hoursNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-brand-line shadow-card">
                  <div className="bg-brand-navy px-4 py-2.5 text-[0.78rem] font-semibold text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-cyan" />
                      Hardattpur, G.T. Road, Rohaniya, Varanasi
                    </span>
                    <a
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-cyan hover:underline"
                    >
                      Open in Maps →
                    </a>
                  </div>
                  <iframe
                    title="JAGAT WATER TREATMENT Location Map"
                    src={mapsEmbedUrl}
                    width="100%"
                    height="260"
                    loading="lazy"
                    className="border-0 w-full"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: Enquiry Form */}
            <div>
              <Reveal>
                <div className="rounded-3xl border border-brand-line bg-white p-6 shadow-card sm:p-8">
                  <SectionHeading
                    eyebrow="Send an enquiry"
                    title="Tell us about your requirement"
                    description="Fill out the details below. Our team will review the information and follow up promptly."
                  />

                  <div className="mt-8 border-t border-brand-line pt-6">
                    <EnquiryForm variant="contact" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor FAQ */}
      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Visitor guidance"
              title="Frequently asked contact questions"
              description="Information on visits, quotation timelines and on-site engineering surveys."
            />
          </Reveal>

          <div className="mt-8 mx-auto max-w-3xl">
            <FaqAccordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
