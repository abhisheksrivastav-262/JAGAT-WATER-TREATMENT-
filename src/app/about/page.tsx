import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { business, mapsDirectionsUrl } from "@/config/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JAGAT WATER TREATMENT, a Varanasi-based water and wastewater treatment business offering turnkey STP, ETP, CETP, RO, filtration and air pollution control solutions.",
};

const focusAreas = [
  {
    icon: "factory",
    title: "Sewage & effluent treatment",
    text: "STP, ETP and CETP projects with process design, engineering, construction and commissioning.",
  },
  {
    icon: "droplets",
    title: "Water treatment & reuse",
    text: "RO plants, softeners, DM plants, pressure filtration and reuse-focused treatment trains.",
  },
  {
    icon: "filter",
    title: "Equipment, media & chemicals",
    text: "Pumps, blowers, valves, vessels, filter media, resins, diffusers and treatment chemicals.",
  },
  {
    icon: "wind",
    title: "Air pollution control",
    text: "Wet scrubbers, cyclone and multi-cyclone dust collectors for industrial exhaust streams.",
  },
  {
    icon: "clipboard-check",
    title: "Studies & evaluation",
    text: "Performance evaluation, feasibility studies, renovation and expansion planning for existing plants.",
  },
  {
    icon: "wrench",
    title: "Service & maintenance",
    text: "AMC/CMC contracts, blower servicing and planned upkeep after commissioning.",
  },
];

const values = [
  {
    title: "Application first",
    text: "The treatment train follows the effluent, feed water, site conditions and reuse target — not a fixed package.",
  },
  {
    title: "One coordinated scope",
    text: "Design, fabrication, supply, erection and MEP&I work are handled as a single delivery rather than disconnected contracts.",
  },
  {
    title: "Reuse in mind",
    text: "Where the application allows, tertiary polishing and recovery are planned so treated water can be used again.",
  },
  {
    title: "Support after handover",
    text: "Maintenance contracts, servicing and performance checks help keep the plant operating as intended.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Water treatment engineering, built in Varanasi"
        description="JAGAT WATER TREATMENT works across sewage, effluent and water treatment — designing, supplying, installing and supporting systems for industrial, institutional and community applications."
        crumbs={[{ label: "About" }]}
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
      />

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-line shadow-soft">
                  <Image
                    src="/images/products/sewage-treatment-plant.jpg"
                    alt="Sewage treatment plant with aeration tanks and safety railings"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line">
                    <Image
                      src="/images/products/commercial-ro-plant.jpg"
                      alt="Commercial reverse osmosis plant with membrane housings"
                      fill
                      sizes="(max-width: 1024px) 50vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line">
                    <Image
                      src="/images/products/pressure-vessels.jpg"
                      alt="Pressure filter vessels in mild steel and stainless steel"
                      fill
                      sizes="(max-width: 1024px) 50vw, 24vw"
                      className="object-contain bg-brand-mist p-4"
                    />
                  </div>
                </div>
                <div className="absolute -right-3 top-6 hidden rounded-xl bg-brand-navy px-4 py-3 text-white shadow-soft sm:block">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                    Office &amp; workshop
                  </p>
                  <p className="mt-1 text-[0.78rem] font-semibold">Varanasi, Uttar Pradesh</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHeading
                eyebrow="Who we are"
                title="A practical partner for water and wastewater projects"
                description="Our work is organised around the full project lifecycle: understanding the requirement, selecting the process, building and installing the system, and supporting it after commissioning."
              />
              <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-slate-600">
                <p>
                  JAGAT WATER TREATMENT operates from Plot No. 5–6, Hardattpur
                  (G.T. Road), Jagatpur, Rohaniya, Varanasi, with an office and
                  workshop at the same location. The team provides treatment
                  plant solutions and the equipment, media and chemicals that
                  support them.
                </p>
                <p>
                  We are specialised in STP, ETP, WTP, RO and environmental
                  clearance and waste management systems. Projects can be
                  delivered as packaged or compact units or engineered for the
                  site, with the scope agreed clearly before work begins.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Turnkey design to commissioning",
                  "Industrial, institutional & community",
                  "Equipment, media & chemicals",
                  "AMC/CMC & performance support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-brand-line bg-brand-mist/60 px-3 py-2.5 text-[0.82rem] font-medium text-brand-navy"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/products" className="btn-outline">
                  View our products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Find our office
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our focus"
              title="What we work on"
              description="Six connected areas of work, delivered individually or as part of a turnkey project."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                    <Icon name={area.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[1rem]">{area.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-6 text-slate-600">{area.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <SectionHeading
                eyebrow="Our approach"
                title="Clear scope, coordinated execution"
                description="Good treatment outcomes come from decisions made in the right order — and from keeping the interfaces between disciplines under control."
              />
              <div className="mt-6 rounded-2xl border border-brand-line bg-brand-mist p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                  Delivery model
                </p>
                <ul className="mt-3 space-y-2 text-[0.84rem] text-slate-600">
                  <li>Design, drawings and engineering</li>
                  <li>Fabrication, supply and site work</li>
                  <li>Mechanical, piping, electrical and instrumentation</li>
                  <li>Testing, commissioning and handover</li>
                </ul>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 60}>
                  <div className="h-full rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-[0.98rem]">{value.title}</h3>
                    <p className="mt-2 text-[0.84rem] leading-6 text-slate-600">{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Environmental responsibility"
                title="Treating water as a resource, not just a discharge"
                description="The strongest environmental outcome is often to keep treated water in use. Our scope supports that wherever the application allows."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Tertiary polishing for gardening, flushing, cooling tower make-up and floor washing",
                  "Zero Liquid Discharge system design for restricted-discharge facilities",
                  "Sludge dewatering with filter presses and polymer dosing",
                  "Air pollution control for dust, fumes, odours and process gases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] leading-6 text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/products/wet-scrubber.jpg"
                  alt="Wet scrubber air pollution control system"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 text-brand-navy shadow-lg backdrop-blur">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                    Air pollution control
                  </p>
                  <p className="mt-1 text-[0.82rem] font-semibold">
                    Wet scrubbers, cyclones &amp; multi-cyclones
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-brand-line bg-brand-mist/60 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    Visit us
                  </p>
                  <p className="mt-2 max-w-xl text-[0.92rem] leading-6 text-slate-600">
                    {business.address.full}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem]">
                    <a href={business.phones[0].href} className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-blue">
                      <Phone className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
                      {business.phones[0].value}
                    </a>
                    <a href={`mailto:${business.email}`} className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-blue">
                      <Mail className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Contact us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
