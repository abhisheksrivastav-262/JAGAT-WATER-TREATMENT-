import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business } from "@/config/business";
import { industryGroups } from "@/data/industries";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve | Water & Wastewater Treatment Solutions",
  description:
    "Treatment plant solutions, equipment and chemicals for textile, pharmaceutical, food, dairy, chemical, power, hotels, hospitals and real estate by JAGAT WATER TREATMENT in Varanasi.",
};

const sectorSolutions = [
  {
    title: "Textile & Dyeing",
    challenges: "High COD/BOD, synthetic azo dyes, fluctuating pH and dissolved salts.",
    approach: "Physicochemical coagulation followed by biological treatment (MBBR/SBR), decolorizing dosing, dual-media filtration and tertiary RO recovery.",
    output: "Colorless effluent conforming to UPPCB discharge or recycled for boiler and washing.",
  },
  {
    title: "Pharmaceuticals & Chemical Plants",
    challenges: "Refractory organics, high TDS, active pharmaceutical ingredients and solvent residues.",
    approach: "Equalization, Advanced Oxidation Processes (AOP), submerged Membrane Bioreactors (MBR) and multiple-effect evaporation (MEE).",
    output: "Compliant discharge with hazardous sludge dewatering and Zero Liquid Discharge (ZLD) capability.",
  },
  {
    title: "Food Processing, Sugar & Dairy",
    challenges: "High biodegradable organics, suspended solids, fats, oils and grease (FOG).",
    approach: "Oil and grease separators, Dissolved Air Flotation (DAF), anaerobic digestion and extended aeration with secondary clarification.",
    output: "Treated water polished for agricultural irrigation, floor washing and horticulture.",
  },
  {
    title: "Electroplating & Metal Finishing",
    challenges: "Heavy metals (Chromium, Nickel, Zinc, Cyanide) and extreme acidic/alkaline wash water.",
    approach: "Chromium reduction, cyanide oxidation, lime/alum chemical precipitation and hydraulic filter press dewatering.",
    output: "Heavy metals reduced to below detection limits with neutral pH and dry sludge cake.",
  },
  {
    title: "Townships, Hotels & Hospitals",
    challenges: "Domestic wastewater, seasonal and diurnal flow peaks, strict odour and space constraints.",
    approach: "Odorless packaged MBBR or SBR sewage treatment plants, tertiary polishing, UV disinfection and dual-plumbing reuse.",
    output: "Crystal-clear treated water recycled for landscape gardening, toilet flushing and HVAC cooling make-up.",
  },
  {
    title: "Power Plants & Boiler Utilities",
    challenges: "Raw water hardness, scale-forming silica, dissolved minerals and high conductivity.",
    approach: "Multi-grade sand and carbon filters, duplex resin water softeners, two-pass reverse osmosis and mixed-bed demineralizers (DM).",
    output: "Low-conductivity, zero-hardness boiler feed water preventing tube scaling and blowdown losses.",
  },
];

const complianceHighlights = [
  {
    title: "CPCB & UPPCB Standards",
    text: "Plants engineered and commissioned to meet the statutory discharge limits prescribed by central and state pollution control boards.",
  },
  {
    title: "Zero Liquid Discharge (ZLD)",
    text: "Closed-loop water recovery architectures designed for highly polluting or water-stressed industrial clusters.",
  },
  {
    title: "Monitoring & Instrumentation",
    text: "Supply of electromagnetic flowmeters, digital pH transmitters and OCEMS telemetry integration for statutory compliance.",
  },
  {
    title: "Sludge Management",
    text: "Hydraulic filter presses and drying beds engineered to produce non-leachable, transportable dry cakes for authorised disposal.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Treatment systems for the sectors we document"
        description="Application areas drawn from our treatment plant, equipment, media and chemical range. Share your process and effluent characteristics, and our team will configure the right treatment approach."
        crumbs={[{ label: "Industries" }]}
        actions={
          <>
            <Link href="/request-quote" className="btn-white">
              Discuss Sector Requirements
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
          {["Textiles", "Pharmaceuticals", "Food & Dairy", "Chemicals", "Hotels", "Hospitals", "Townships", "Power"].map((item) => (
            <span key={item} className="chip-light">
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      {/* 4 Core Industry Sectors */}
      <section className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Application groups"
              title="Four core application sectors"
              description="Each sector presents different flow profiles, contaminant loads and treated water reuse opportunities."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industryGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lift sm:p-7">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue">
                      <Icon name={group.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[1.05rem] leading-snug">{group.title}</h3>
                      <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                        {group.industries.length} Application Areas
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.88rem] leading-6 text-slate-600">
                    {group.description}
                  </p>

                  <div className="mt-5 border-t border-brand-line pt-4 flex-1">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-500 mb-2.5">
                      Documented Industries:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.industries.map((ind) => (
                        <span
                          key={ind}
                          className="inline-flex items-center rounded-lg border border-brand-line bg-brand-mist/60 px-3 py-1.5 text-[0.8rem] text-brand-navy"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-brand-line pt-4 flex items-center justify-between">
                    <Link
                      href={`/request-quote?interest=${encodeURIComponent(group.title)}`}
                      className="link-arrow text-[0.82rem]"
                    >
                      Enquire for this sector
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/services"
                      className="text-[0.78rem] font-semibold text-slate-500 hover:text-brand-blue"
                    >
                      View services
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Treatment Architectures */}
      <section className="border-b border-brand-line bg-brand-mist py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Treatment architectures"
              title="Engineered solutions for challenging wastewater streams"
              description="How process design, equipment selection and tertiary recovery are configured for specific industrial applications."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectorSolutions.map((sol, index) => (
              <Reveal key={sol.title} delay={index * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                  <h3 className="text-[1rem] font-bold text-brand-navy">{sol.title}</h3>

                  <div className="mt-3">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500 block">
                      Wastewater Challenge:
                    </span>
                    <p className="mt-1 text-[0.82rem] leading-5 text-slate-600">
                      {sol.challenges}
                    </p>
                  </div>

                  <div className="mt-3">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-blue block">
                      Engineered Approach:
                    </span>
                    <p className="mt-1 text-[0.82rem] leading-5 text-brand-navy font-medium">
                      {sol.approach}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-brand-line">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-green block">
                      Compliance &amp; Reuse:
                    </span>
                    <p className="mt-1 text-[0.78rem] leading-5 text-slate-600">
                      {sol.output}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Pollution Board Norms */}
      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Compliance & standards"
                title="Meeting UPPCB and CPCB environmental norms"
                description="Regulatory adherence is fundamental to plant design. We ensure treatment trains meet prescribed outlet parameters to avoid regulatory penalties or factory shutdown notices."
              />
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                  Turnkey Guarantee
                </p>
                <p className="mt-2 text-[0.86rem] leading-6 text-white/70">
                  Every plant includes commissioning water sample testing, outlet compliance documentation, and operator training to ensure continuous compliance after handover.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 btn-white inline-flex !py-2.5 !px-4 text-[0.8rem]"
                >
                  Consult on compliance
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {complianceHighlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-[0.98rem] text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.84rem] leading-6 text-white/60">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to discuss your facility?"
        title="Connect with our industrial wastewater team"
        description="We carry out effluent sampling, space feasibility assessments and site visits across Varanasi, Uttar Pradesh and adjacent industrial areas."
      />
    </>
  );
}
