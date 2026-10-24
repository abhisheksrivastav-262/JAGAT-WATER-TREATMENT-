import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { business } from "@/config/business";
import { services, getService } from "@/data/services";
import { getProduct } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | JAGAT WATER TREATMENT`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedProducts = (service.relatedProducts || [])
    .map((productSlug) => getProduct(productSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const quoteHref = `/request-quote?interest=${encodeURIComponent(service.title)}`;

  return (
    <>
      <PageHero
        eyebrow="Specialised service"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle || service.title },
        ]}
        actions={
          <>
            <Link href={quoteHref} className="btn-white">
              Discuss this service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={business.phones[0].href} className="btn-ghost-light">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phones[0].value}
            </a>
          </>
        }
      />

      <section className="border-b border-brand-line bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
            {/* Main Content */}
            <div className="space-y-12">
              {service.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-brand-line bg-brand-navy shadow-card">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue shadow-md">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                </div>
              ) : null}

              {/* Overview */}
              <div>
                <SectionHeading
                  eyebrow="Service overview"
                  title="Approach and execution"
                />
                <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-slate-600">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Scope & Inclusions */}
              <div>
                <SectionHeading
                  eyebrow="Delivery scope"
                  title="What is included in the project"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-brand-line bg-brand-mist/50 p-4 text-[0.86rem] text-brand-navy"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <SectionHeading
                  eyebrow="Key benefits"
                  title="Why this approach works"
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-brand-line bg-white p-5 shadow-card"
                    >
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-blue">
                        Benefit {idx + 1}
                      </span>
                      <p className="mt-2 text-[0.88rem] font-medium leading-6 text-brand-navy">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Applications */}
              <div>
                <SectionHeading
                  eyebrow="Applications"
                  title="Sectors and application areas"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.applications.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center rounded-xl border border-brand-line bg-brand-mist px-3.5 py-2 text-[0.82rem] font-medium text-brand-navy"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Equipment */}
              {relatedProducts.length > 0 ? (
                <div className="border-t border-brand-line pt-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                      eyebrow="Related equipment"
                      title="Integrated equipment and systems"
                      description="Products frequently supplied and integrated within this scope."
                    />
                    <Link href="/products" className="btn-outline shrink-0">
                      All products
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {relatedProducts.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:self-start lg:sticky lg:top-24">
              <div className="rounded-2xl border border-brand-line bg-brand-mist/70 p-6 shadow-card">
                <span className="eyebrow">Project consultation</span>
                <h3 className="mt-2 text-lg font-bold text-brand-navy">
                  Need a proposal for {service.shortTitle}?
                </h3>
                <p className="mt-2 text-[0.82rem] leading-6 text-slate-600">
                  Share your capacity, site constraints and feed water or effluent details. Our engineering desk will confirm the scope and budget.
                </p>
                <Link
                  href={quoteHref}
                  className="mt-5 btn-primary w-full text-center"
                >
                  Request a quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-5 border-t border-brand-line pt-4 space-y-2 text-[0.82rem] text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-blue shrink-0" />
                    <a href={business.phones[0].href} className="font-semibold text-brand-navy hover:text-brand-blue">
                      {business.phones[0].value}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-blue shrink-0" />
                    <a href={`mailto:${business.email}`} className="truncate hover:text-brand-blue">
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-card">
                <h4 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">
                  Other Services
                </h4>
                <ul className="space-y-2 text-[0.84rem]">
                  {otherServices.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/services/${other.slug}`}
                        className="group flex items-center justify-between text-brand-navy hover:text-brand-blue py-1"
                      >
                        <span className="line-clamp-1">{other.shortTitle}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-blue" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-brand-line pt-3">
                  <Link href="/services" className="link-arrow text-[0.8rem]">
                    View all services
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a specific project in mind?"
        title={`Discuss ${service.shortTitle} with our engineering team`}
        description="Site visits and technical consultations are scheduled on request across Varanasi, Uttar Pradesh and neighboring industrial belts."
      />
    </>
  );
}
