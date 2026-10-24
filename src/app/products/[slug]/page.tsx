import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { business } from "@/config/business";
import { products, getProduct, getRelatedProducts } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | JAGAT WATER TREATMENT`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const quoteHref = `/request-quote?interest=${encodeURIComponent(product.name)}`;

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.shortDescription}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        actions={
          <>
            <Link href={quoteHref} className="btn-white">
              Request Price Quote
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* Gallery Column */}
            <div>
              <ProductGallery
                main={{ src: product.image, alt: product.imageAlt }}
                images={product.images}
                fit={product.imageFit}
              />

              {/* Technical Specifications Table */}
              {product.specs.length > 0 ? (
                <div className="mt-10 overflow-hidden rounded-2xl border border-brand-line shadow-card">
                  <div className="bg-brand-navy px-5 py-3.5 text-white flex items-center justify-between">
                    <h3 className="text-sm font-bold flex items-center gap-2">
                      <FileSpreadsheet className="h-4 w-4 text-brand-cyan" />
                      Technical Specifications
                    </h3>
                    <span className="text-xs text-brand-cyan uppercase tracking-wider font-semibold">
                      Verified
                    </span>
                  </div>
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-brand-line bg-white">
                      {product.specs.map((spec, idx) => (
                        <tr key={idx} className="transition hover:bg-brand-mist/40">
                          <td className="p-3.5 sm:p-4 font-semibold text-brand-navy bg-brand-mist/30 w-1/3">
                            {spec.label}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>

            {/* Product Details & Actions Column */}
            <div className="space-y-8">
              <div>
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  {product.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm sm:text-base leading-7 text-slate-600">
                  {product.shortDescription}
                </p>
              </div>

              {/* Fast Quote Card */}
              <div className="rounded-2xl border border-brand-line bg-brand-mist/60 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-brand-navy">
                  Looking for pricing or custom capacity?
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  We supply standardized units and custom-engineered capacities from our Varanasi facility.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href={quoteHref} className="btn-primary !px-5 !py-2.5 text-xs">
                    Get Quotation for this Product
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a href={business.phones[0].href} className="btn-outline !px-4 !py-2.5 text-xs">
                    <Phone className="h-3.5 w-3.5" />
                    Call Sales Desk
                  </a>
                </div>
              </div>

              {/* Product Overview */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy">Product Overview</h3>
                <div className="mt-3 space-y-3">
                  {product.overview.map((para, idx) => (
                    <p key={idx} className="text-xs sm:text-sm leading-6 text-slate-700">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features List */}
              {product.features.length > 0 ? (
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">Key Features & Highlights</h3>
                  <div className="mt-3 space-y-2.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Applications List */}
              {product.applications.length > 0 ? (
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">Common Applications</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Related Products Section */}
          {related.length > 0 ? (
            <div className="mt-16 border-t border-brand-line pt-14">
              <div className="flex items-center justify-between">
                <div>
                  <span className="eyebrow">Related Range</span>
                  <h3 className="mt-1 text-2xl font-bold text-brand-navy">
                    Complementary Equipment & Media
                  </h3>
                </div>
                <Link href="/products" className="link-arrow hidden sm:inline-flex">
                  View full catalogue
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relProduct) => (
                  <ProductCard key={relProduct.slug} product={relProduct} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand
        eyebrow="Need advice on equipment selection?"
        title="Consult our team on sizing and technical specifications"
        description="Share your flow requirements, operating pressure, and chemical characteristics. We will verify compatibility before you place an order."
      />
    </>
  );
}
