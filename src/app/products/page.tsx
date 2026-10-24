import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/config/business";
import { productCategories, products } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Products & Treatment Equipment",
  description:
    "Explore STP, ETP, CETP, RO plants, water softeners, pumps, blowers, filter presses, pressure vessels, filter media, water chemicals and air pollution control equipment from JAGAT WATER TREATMENT.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : "All";

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Treatment plants, equipment, media and chemicals"
        description="A practical catalogue covering every stage of water and wastewater treatment — from process plants and pumps to filtration media, treatment chemicals and air pollution control."
        crumbs={[{ label: "Products" }]}
        actions={
          <>
            <Link href="/request-quote" className="btn-white">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={business.phones[0].href} className="btn-ghost-light">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call the team
            </a>
          </>
        }
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {productCategories.map((item) => (
            <span key={item} className="chip-light">
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="border-b border-brand-line bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Browse the range"
              title="Find the right product for your treatment stage"
              description="Filter by category or search by product name and application. Each product page lists the documented features, applications and technical details."
            />
            <p className="shrink-0 rounded-xl border border-brand-line bg-brand-mist px-4 py-3 text-[0.75rem] leading-5 text-slate-600">
              {products.length} products across {productCategories.length} categories
            </p>
          </Reveal>

          <ProductsExplorer initialCategory={category} />

          <div className="mt-10 rounded-2xl border border-brand-line bg-brand-mist/70 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="text-[0.9rem] font-semibold text-brand-navy">
                Need help matching a product to your application?
              </p>
              <p className="mt-1 text-[0.82rem] leading-6 text-slate-600">
                Share the flow rate, water quality, location and treatment target.
                We will confirm the configuration and specification.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
              <Link href="/request-quote" className="btn-primary">
                Request a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={business.phones[0].href} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Describe the problem, and we will map the treatment train"
        description="Send us the application, capacity and site details. Our team will review the requirement and recommend the appropriate plant, equipment and support scope."
      />
    </>
  );
}
