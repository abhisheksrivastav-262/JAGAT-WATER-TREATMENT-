import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck,
  Phone,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { business } from "@/config/business";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services | Water & Wastewater Treatment Engineering",
  description:
    "Turnkey sewage, effluent, water treatment and air pollution control engineering by JAGAT WATER TREATMENT in Varanasi — design, fabrication, supply, erection, commissioning and AMC.",
};

const serviceStages = [
  {
    step: "01",
    title: "Requirement & water analysis",
    text: "Review of raw water or effluent parameters, site constraints, required capacity and target discharge or reuse standards.",
  },
  {
    step: "02",
    title: "Process design & drawings",
    text: "Selection of treatment process (MBBR, SBR, MBR, RO, softeners) with P&ID, hydraulic flow profile and equipment sizing.",
  },
  {
    step: "03",
    title: "Fabrication & procurement",
    text: "Supply and fabrication of process tanks, clarifiers, blowers, pressure vessels, filter presses and electrical control panels.",
  },
  {
    step: "04",
    title: "Civil supervision & erection",
    text: "Site execution covering mechanical piping, electrical switchgear, instrumentation, valve manifolds and equipment positioning.",
  },
  {
    step: "05",
    title: "Commissioning & AMC support",
    text: "Wet testing, biomass seeding, lab test verification, operator handover, and long-term maintenance contracts (AMC/CMC).",
  },
];

const turnkeyBenefits = [
  {
    icon: "shield-check",
    title: "Single-point accountability",
    text: "One experienced team handles process design, supply, erection and commissioning — eliminating disputes between separate civil, mechanical and electrical contractors.",
  },
  {
    icon: "settings",
    title: "Process matched to feed water",
    text: "Technologies are engineered around the actual effluent characteristics, available plant footprint and discharge requirements rather than rigid pre-fab templates.",
  },
  {
    icon: "recycle",
    title: "Water reuse & resource recovery",
    text: "Tertiary filtration, ultrafiltration and RO polishing configured so treated water can be recycled for horticulture, cooling tower make-up or toilet flushing.",
  },
  {
    icon: "wrench",
    title: "Support after handover",
    text: "Annual Maintenance Contracts (AMC), blower overhaul, filter media replacement and spare parts availability from our Varanasi facility.",
  },
];

export default function ServicesPage() {
  const serviceFaqs = faqs.filter((_, idx) => [0, 1, 2, 3, 5].includes(idx));

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Engineering, execution and support under one roof"
        description="From turnkey STP and ETP construction to water treatment engineering, air pollution control, AMC maintenance and performance evaluations — delivered with a documented scope from Varanasi."
        crumbs={[{ label: "Services" }]}
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
          {services.map((item) => (
            <span key={item.slug} className="chip-light">
              {item.shortTitle}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Services Grid Section */}
      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Specialised services"
              title="Tailored engineering for water, wastewater and emissions"
              description="Explore our primary capabilities. Each service covers documented deliverables, engineering oversight and compliance support."
            />
            <p className="shrink-0 rounded-xl border border-brand-line bg-brand-mist px-4 py-3 text-[0.78rem] font-medium text-slate-600">
              {services.length} core engineering disciplines
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Scope & Benefits */}
      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Why turnkey delivery"
                title="Single-window responsibility from concept to commissioning"
                description="Managing separate contractors for civil design, pump procurement, piping and instrumentation often leads to delays and performance gaps. We coordinate every discipline under one roof."
              />
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                  Complete Scope Includes
                </p>
                <ul className="mt-4 space-y-2.5 text-[0.84rem] text-white/75">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0" />
                    Process design, hydraulic calculations and P&ID
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0" />
                    Equipment fabrication, pump & blower procurement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0" />
                    Civil tank construction supervision & piping erection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0" />
                    Testing, wet commissioning and operator training
                  </li>
                </ul>
                <Link
                  href="/request-quote"
                  className="mt-6 btn-white inline-flex !py-2.5 !px-4 text-[0.8rem]"
                >
                  Request a turnkey quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {turnkeyBenefits.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.09]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[1rem] text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.84rem] leading-6 text-white/60">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our working process"
              title="A structured path from requirement to handover"
              description="Five clear stages keep scope, responsibilities and milestones transparent throughout the project lifecycle."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceStages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 60}>
                <div className="relative flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Stage {stage.step}
                  </span>
                  <h3 className="mt-2 text-[0.98rem] leading-snug">{stage.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-slate-600">{stage.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Common questions"
              title="Frequently asked questions about our services"
              description="Practical answers about our turnkey project scope, technology selection, maintenance agreements and site feasibility."
            />
          </Reveal>

          <div className="mt-10 mx-auto max-w-3xl">
            <FaqAccordion items={serviceFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a project requirement?"
        title="Discuss your treatment application with our engineering team"
        description="Share your feed water details, capacity requirements and site location in Varanasi, Uttar Pradesh or nearby regions for a preliminary technical consultation."
      />
    </>
  );
}
