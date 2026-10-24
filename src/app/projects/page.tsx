import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business } from "@/config/business";
import { gallery } from "@/data/gallery";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Applications Gallery | Plant & Equipment Photographs",
  description:
    "Photographs of STP, ETP, CETP, RO plants, water softeners, filter media, blowers and air pollution control equipment by JAGAT WATER TREATMENT in Varanasi.",
};

const projectCapabilities = [
  {
    icon: "factory",
    title: "Turnkey STP, ETP & CETP Plants",
    text: "Site-built and packaged biological treatment systems incorporating MBBR media, secondary clarifiers and tertiary polishing for water reuse.",
  },
  {
    icon: "droplets",
    title: "RO & Water Softening Plants",
    text: "Commercial and industrial reverse osmosis systems with duplex water softening vessels for boilers, hotels, hospitals and institutions.",
  },
  {
    icon: "wind",
    title: "Air Pollution Control Equipment",
    text: "Packed bed wet scrubbers, cyclone and multi-cyclone dust collectors for boiler exhaust and industrial particulate emission control.",
  },
  {
    icon: "wrench",
    title: "Equipment, Media & Servicing",
    text: "Supply and servicing of root blowers, filter presses, pressure vessels, fine bubble diffusers, resins and water treatment chemicals.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications gallery"
        title="Plant, equipment and installation photographs"
        description="Photographs from our company documentation and client installations across water, wastewater and air pollution control. Project-specific references and site visits are available on request."
        crumbs={[{ label: "Gallery" }]}
        actions={
          <>
            <Link href="/request-quote" className="btn-white">
              Discuss a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={business.phones[0].href} className="btn-ghost-light">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phones[0].value}
            </a>
          </>
        }
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {["Treatment Plants", "Mechanical Equipment", "Filtration", "Air Pollution Control", "Media & Chemicals"].map((item) => (
            <span key={item} className="chip-light">
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Main Gallery Grid */}
      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Browse photographs"
              title="Equipment and installation portfolio"
              description="Filter by category or click on any photograph to open the image in full screen. Each photo represents systems and equipment supplied by our team."
            />
            <p className="shrink-0 rounded-xl border border-brand-line bg-brand-mist px-4 py-3 text-[0.78rem] font-medium text-slate-600">
              {gallery.length} verified photographs
            </p>
          </Reveal>

          <GalleryGrid />
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Capabilities"
              title="What our portfolio covers"
              description="A practical scope spanning complete turnkey plants, specialized machinery, filtration media and long-term maintenance."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectCapabilities.map((cap, index) => (
              <Reveal key={cap.title} delay={index * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                    <Icon name={cap.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[0.98rem]">{cap.title}</h3>
                  <p className="mt-2 text-[0.84rem] leading-6 text-slate-600">{cap.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-brand-line bg-white p-6 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="text-[0.95rem] font-bold text-brand-navy">
                Looking for references or site visits near Varanasi?
              </p>
              <p className="mt-1 text-[0.84rem] leading-6 text-slate-600">
                We can arrange client site inspections and share technical process drawings for similar capacity plants.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
              <Link href="/request-quote" className="btn-primary">
                Request project proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={business.phones[0].href} className="btn-outline">
                <Phone className="h-4 w-4" />
                Call our office
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a plant requirement?"
        title="Share your site details and treatment capacity"
        description="Our engineering team will assess the footprint, influent water characteristics and output standards to furnish a technical proposal."
      />
    </>
  );
}
