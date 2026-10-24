"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery";

type Category = GalleryCategory;

export function GalleryGrid() {
  const [category, setCategory] = useState<Category>("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(
    () =>
      category === "All"
        ? gallery
        : gallery.filter((item) => item.category === category),
    [category],
  );

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? null : (current + 1) % items.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? null : (current - 1 + items.length) % items.length,
        );
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  const activeItem = active === null ? null : items[active];

  return (
    <div>
      <div
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {galleryCategories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={category === item}
            onClick={() => {
              setCategory(item);
              setActive(null);
            }}
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

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${item.title}`}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line bg-brand-mist text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            aria-label={`View larger image: ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`${
                item.fit === "contain" ? "object-contain p-6" : "object-cover"
              } transition duration-500 group-hover:scale-[1.03]`}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent opacity-80 transition group-hover:opacity-95" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand-cyan">
                  {item.category}
                </span>
                <span className="mt-1 block text-[0.92rem] font-semibold text-white">
                  {item.title}
                </span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-brand-navy">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-brand-navy/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                {activeItem.category}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{activeItem.title}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full max-h-[72vh] w-full max-w-6xl">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === null ? null : (current - 1 + items.length) % items.length,
                )
              }
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-navy sm:left-5"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActive((current) =>
                  current === null ? null : (current + 1) % items.length,
                )
              }
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-navy sm:right-5"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium text-white/70">
                {(active ?? 0) + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
