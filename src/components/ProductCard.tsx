import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const enquiryHref = `/request-quote?interest=${encodeURIComponent(product.name)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lift">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-brand-mist"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`${
            product.imageFit === "cover" ? "object-cover" : "object-contain p-5 sm:p-7"
          } transition duration-500 ease-out group-hover:scale-[1.025]`}
        />
        <span className="absolute left-3 top-3 inline-flex rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-brand-blue shadow-sm backdrop-blur">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.02rem] leading-snug">
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-brand-blue"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.86rem] leading-6 text-slate-600">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-brand-line pt-4">
          <Link href={`/products/${product.slug}`} className="link-arrow">
            View details
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href={enquiryHref}
            className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-slate-500 transition-colors hover:text-brand-green"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
