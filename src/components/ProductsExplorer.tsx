"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

const categories = ["All", ...productCategories];

export function ProductsExplorer({
  initialCategory = "All",
}: {
  initialCategory?: string;
}) {
  const router = useRouter();
  const startingCategory = categories.includes(initialCategory)
    ? initialCategory
    : "All";
  const [category, setCategory] = useState(startingCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      if (!matchesCategory) return false;
      if (!search) return true;
      const haystack = [
        product.name,
        product.category,
        product.shortDescription,
        ...product.features,
        ...product.applications,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(search);
    });
  }, [category, query]);

  function selectCategory(next: string) {
    setCategory(next);
    const url =
      next === "All" ? "/products" : `/products?category=${encodeURIComponent(next)}`;
    router.replace(url, { scroll: false });
  }

  function reset() {
    setQuery("");
    selectCategory("All");
  }

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          role="tablist"
          aria-label="Filter products by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => selectCategory(item)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[0.78rem] font-semibold transition ${
                category === item
                  ? "border-brand-blue bg-brand-blue text-white shadow-card"
                  : "border-brand-line bg-white text-brand-navy/70 hover:border-brand-blue/30 hover:text-brand-blue"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or applications"
            className="field-input !py-2.5 !pl-10 !pr-9 text-[0.82rem]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-brand-mist hover:text-brand-navy"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.78rem] text-slate-500">
        <p>
          Showing <span className="font-semibold text-brand-navy">{filtered.length}</span> of{" "}
          {products.length} products
          {category !== "All" ? ` in ${category}` : ""}
          {query ? ` matching “${query}”` : ""}.
        </p>
        <p className="hidden sm:block">
          Capacities and models are confirmed against each project requirement.
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <Reveal key={product.slug} delay={Math.min(index, 5) * 45}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-brand-line bg-brand-mist px-6 py-14 text-center">
          <p className="font-display text-lg font-semibold text-brand-navy">
            No products match this filter
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
            Try a different category or search term, or tell us what you need and
            we will confirm whether it is part of our range.
          </p>
          <button type="button" onClick={reset} className="btn-primary mt-5">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
