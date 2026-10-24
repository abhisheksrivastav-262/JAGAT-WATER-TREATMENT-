import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business } from "@/config/business";
import { industryGroups } from "@/data/industries";
import { faqs } from "@/data/faqs";
import { getFeaturedProducts } from "@/data/products";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Water & Wastewater Treatment Solutions in Varanasi",
  description:
    "JAGAT WATER TREATMENT designs, builds and commissions STP, ETP, CETP, RO, water softener, filtration and air pollution control systems on a turnkey basis in Varanasi, Uttar Pradesh.",
  alternates: { canonical: "/" },
};

const processSteps = [
  {
    title: "Requirement & site study",
    text: "We start with the application, capacity, location, effluent or feed water data and site constraints.",
  },
  {
    title: "Design & engineering",
    text: "Process selection, drawings, equipment sizing and coordinated mechanical, electrical and instrumentation planning.",
  },
  {
    title: "Fabrication & supply",
    text: "Equipment is fabricated and supplied to the approved specification, with media and chemicals matched to the duty.",
  },
  {
    title: "Erection & commissioning",
    text: "Installation, testing and commissioning, followed by operating guidance for the plant team.",
  },
  {
    title: "Service & AMC/CMC",
    text: "Planned maintenance, blower servicing and performance checks keep the plant working as designed.",
  },
];

const whyChoose = [
  {
    icon: "shield-check",
    title: "Single-window turnkey delivery",
    text: "Design, engineering, construction, fabrication, supply, erection, testing and commissioning under one scope — including MEP and instrumentation.",
  },
  {
    icon: "settings",
    title: "Process-led selection",
    text: "Technologies such as FAB, MBBR, SBR, constructed wetland and MBR are selected around the effluent, site and reuse target rather than a fixed template.",
  },
  {
    icon: "recycle",
    title: "Reuse and recovery focus",
    text: "Tertiary polishing supports gardening, flushing, cooling tower make-up and floor washing, with ZLD system design available where discharge is restricted.",
  },
  {
    icon: "wrench",
    title: "Support after commissioning",
    text: "AMC/CMC contracts, blower servicing and performance evaluation studies help protect the investment after handover.",
  },
];

const capabilities = [
  {
    icon: "droplets",
    title: "Treatment plants",
    items: ["STP", "ETP", "CETP", "RO plants", "Water softeners", "DM plants"],
  },
  {
    icon: "settings",
    title: "Mechanical equipment",
    items: ["Pumps", "Root blowers", "Filter presses", "Flowmeters", "pH meters", "Dosing pumps"],
  },
  {
    icon: "filter",
    title: "Filtration & media",
    items: ["Pressure vessels", "Multiport valves", "Sand & carbon", "Resins", "SAFF / FAB media", "Diffusers"],
  },
  {
    icon: "lab",
    title: "Chemicals & APC",
    items: ["Polyelectrolytes", "Disinfectants", "Alum & lime", "Wet scrubbers", "Cyclone collectors", "OCEMS"],
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const homeServices = services.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <Image
          src="/images/products/sewage-treatment-plant.jpg"
          alt="Sewage treatment plant with aeration tanks and safety railings"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-x relative pb-10 pt-16 sm:pt-20 lg:pb-14 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="chip-light">Turnkey water treatment</span>
                <span className="chip-light border-brand-green/30 bg-brand-green/15 text-white/90">
                  Varanasi, Uttar Pradesh
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-balance text-[2.35rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
                Advanced water treatment solutions for a{" "}
                <span className="bg-gradient-to-r from-brand-cyan via-[#5cd6f0] to-[#5ee0a0] bg-clip-text text-transparent">
                  sustainable future
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/70 sm:text-[1.02rem]">
                JAGAT WATER TREATMENT designs, builds and commissions sewage,
                effluent and water treatment systems on a turnkey basis — from
                process design and fabrication to erection, testing and
                commissioning.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/services" className="btn-white">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/request-quote" className="btn-ghost-light">
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-white/60">
                <a
                  href={business.phones[0].href}
                  className="inline-flex items-center gap-2 font-semibold text-white/85 transition hover:text-brand-cyan"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
                  Call {business.phones[0].value}
                </a>
                <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
                <span>STP · ETP · CETP · WTP · RO · Air pollution control</span>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:pl-2">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[2rem] border border-white/10 bg-white/[0.03]"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">Turnkey scope</p>
                      <h2 className="mt-2 text-xl leading-snug">
                        From concept to commissioning
                      </h2>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <Icon name="settings" className="h-5 w-5" />
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Design, drawing & engineering",
                      "Fabrication & equipment supply",
                      "Erection, testing & commissioning",
                      "Mechanical, piping, electrical & instrumentation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.84rem] text-slate-600">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-brand-mist p-4 text-[0.75rem] leading-5 text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <span>
                      Office &amp; workshop in Varanasi, serving industrial,
                      institutional and community projects.
                    </span>
                  </div>

                  <Link href="/about" className="mt-4 link-arrow">
                    How we work
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-[0.74rem] text-white/60 sm:grid-cols-4 lg:mt-16">
            {[
              { icon: "factory", label: "STP / ETP / CETP" },
              { icon: "droplets", label: "RO & water softening" },
              { icon: "filter", label: "Filtration & media" },
              { icon: "wind", label: "Air pollution control" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <Icon name={item.icon} className="h-4 w-4 text-brand-cyan" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <div className="relative pb-8 pl-4 sm:pl-8">
                <div
                  className="absolute -bottom-2 left-0 top-8 hidden w-[60%] rounded-3xl border border-brand-line bg-brand-mist sm:block"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white shadow-soft">
                  <Image
                    src="/images/products/effluent-treatment-plant.jpg"
                    alt="Effluent treatment plant with blue process tanks and pipework"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-2xl border-4 border-white shadow-soft sm:w-[48%]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/products/water-softener.jpg"
                      alt="Water softener vessels installed with valves and pipework"
                      fill
                      sizes="(max-width: 1024px) 50vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -left-1 top-6 hidden rounded-xl bg-brand-navy px-4 py-3 text-white shadow-soft sm:block">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                    Varanasi
                  </p>
                  <p className="mt-1 text-[0.78rem] font-semibold">Uttar Pradesh, India</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHeading
                eyebrow="About JAGAT WATER TREATMENT"
                title="Water treatment built around your process, not a template"
                description="We work across sewage, effluent and water treatment — combining process design, equipment supply and site execution under a single scope."
              />
              <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-slate-600">
                <p>
                  From STP and ETP projects to RO plants, softeners, filtration
                  systems and air pollution control, our work is matched to the
                  application and site. Treated water can be polished for reuse
                  in gardening, flushing, cooling tower make-up and floor washing.
                </p>
                <p>
                  The team handles design, engineering, fabrication, supply,
                  erection, testing and commissioning, including mechanical,
                  piping, electrical and instrumentation work.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Turnkey design to commissioning",
                  "Technology selection by application",
                  "Reuse-focused treatment design",
                  "AMC/CMC and servicing support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.84rem] font-medium text-brand-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link href="/about" className="btn-outline">
                  More about us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={business.phones[0].href} className="link-arrow">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phones[0].value}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured products"
              title="Equipment and systems for every stage of treatment"
              description="Selected plant, mechanical, filtration and pollution control products from our range. Tell us the application and we will help with the right configuration."
            />
            <Link href="/products" className="btn-outline shrink-0">
              View all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Engineering, execution and support under one roof"
              description="From turnkey treatment plants to maintenance contracts and performance studies, each service is built around a clear, documented scope."
            />
            <Link href="/services" className="btn-outline shrink-0">
              All services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Why choose us"
                title="Practical engineering, coordinated delivery and long-term support"
                description="Our approach is built on the scope we actually deliver — from process selection through fabrication, commissioning and maintenance."
              />
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                  Specialised in
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  STP / ETP / WTP / RO · Environmental clearance &amp; waste
                  management systems
                </p>
                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-white transition hover:text-brand-cyan"
                >
                  See the full scope
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
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

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Industries we serve"
              title="Treatment systems for the sectors we document"
              description="Application areas drawn from our treatment plant, equipment and chemical range. Share your process and we will confirm the right approach."
            />
            <Link href="/industries" className="btn-outline shrink-0">
              Explore industries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industryGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 60}>
                <Link
                  href="/industries"
                  className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[0.98rem]">{group.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-slate-600">{group.description}</p>
                  <ul className="mt-4 space-y-1.5 text-[0.78rem] text-slate-500">
                    {group.industries.slice(0, 4).map((industry) => (
                      <li key={industry} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand-green" aria-hidden="true" />
                        {industry}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-4 text-[0.78rem] font-semibold text-brand-blue">
                    View applications
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Applications gallery"
              title="Plant and equipment photographs"
              description="Images from our company documentation. Project-specific references are available on request."
            />
            <Link href="/projects" className="btn-outline shrink-0">
              Open gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/images/products/effluent-treatment-plant.jpg",
                alt: "Effluent treatment plant with blue tanks",
                title: "Effluent Treatment Plant",
                tag: "Treatment plant",
              },
              {
                src: "/images/products/root-air-blower.jpg",
                alt: "Root air blower with motor and silencer",
                title: "Root Air Blower",
                tag: "Mechanical equipment",
              },
              {
                src: "/images/products/wet-scrubber.jpg",
                alt: "Wet scrubber with ductwork and stack",
                title: "Wet Scrubber",
                tag: "Air pollution control",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <Link
                  href="/projects"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line shadow-card"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-cyan">
                      {item.tag}
                    </span>
                    <span className="mt-1 block text-[0.92rem] font-semibold text-white">
                      {item.title}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our working process"
              title="A clear path from requirement to operation"
              description="Five stages keep the scope, responsibilities and handover points visible throughout the project."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 60}>
                <div className="relative h-full rounded-2xl border border-brand-line bg-brand-mist/60 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-[0.78rem] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[0.92rem] leading-snug">{step.title}</h3>
                  <p className="mt-2 text-[0.8rem] leading-6 text-slate-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Technical capabilities"
                title="A broad range, coordinated as one system"
                description="Plants, equipment, media and chemicals are selected together so each stage supports the next."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {["STP", "ETP", "CETP", "WTP", "RO", "DM", "APC", "OCEMS"].map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/products" className="mt-7 btn-primary inline-flex">
                Browse the product range
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <Reveal key={capability.title} delay={index * 60}>
                  <div className="h-full rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-blue">
                      <Icon name={capability.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="mt-3 text-[0.94rem]">{capability.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-[0.78rem] text-slate-600">
                      {capability.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-brand-green" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently asked questions"
                title="Answers before you enquire"
                description="A few practical questions about our scope, technologies and support. If yours is not covered, call or send us a message."
              />
              <div className="mt-7 rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                  Talk to the team
                </p>
                <div className="mt-4 space-y-2.5">
                  {business.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="flex items-center gap-3 rounded-xl border border-brand-line px-3 py-2.5 text-sm font-semibold text-brand-navy transition hover:border-brand-blue/30 hover:bg-brand-mist"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mist text-brand-blue">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] font-medium uppercase tracking-wider text-slate-500">
                          {phone.label}
                        </span>
                        {phone.value}
                      </span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-3 rounded-xl border border-brand-line px-3 py-2.5 text-sm font-medium text-brand-navy transition hover:border-brand-blue/30 hover:bg-brand-mist"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mist text-brand-blue">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="break-all text-[0.8rem]">{business.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <FaqAccordion items={faqs.slice(0, 6)} />
              <div className="mt-4 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand-blue transition hover:text-brand-green"
                >
                  Have another question? Contact us
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
