import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { business } from "@/config/business";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const light = tone === "light";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${business.siteUrl}${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol
        className={`flex flex-wrap items-center gap-1.5 ${
          light ? "text-white/50" : "text-slate-500"
        }`}
      >
        {all.map((item, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  className={`h-3.5 w-3.5 ${light ? "text-white/25" : "text-slate-300"}`}
                  aria-hidden="true"
                />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`rounded transition-colors ${
                    light ? "hover:text-white" : "hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? `font-medium ${light ? "text-white" : "text-brand-navy"}`
                      : ""
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
