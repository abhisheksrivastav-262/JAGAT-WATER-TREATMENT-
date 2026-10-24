import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const enquiryHref = `/request-quote?interest=${encodeURIComponent(service.title)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lift">
      <Link
        href={`/services/${service.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-brand-navy"
        tabIndex={-1}
        aria-hidden="true"
      >
        {service.image ? (
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 grid-pattern opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
        <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand-blue shadow-sm">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.02rem] leading-snug">
          <Link
            href={`/services/${service.slug}`}
            className="transition-colors hover:text-brand-blue"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.86rem] leading-6 text-slate-600">
          {service.summary}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-brand-line pt-4">
          <Link href={`/services/${service.slug}`} className="link-arrow">
            View details
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href={enquiryHref}
            className="text-[0.78rem] font-semibold text-brand-green transition-colors hover:text-brand-navy"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </article>
  );
}
