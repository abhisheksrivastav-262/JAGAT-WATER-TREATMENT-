"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt: string };

export function ProductGallery({
  main,
  images = [],
  fit = "contain",
}: {
  main: GalleryImage;
  images?: GalleryImage[];
  fit?: "contain" | "cover";
}) {
  const all = [main, ...images];
  const [active, setActive] = useState(0);
  const current = all[active] ?? main;

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line bg-brand-mist shadow-card">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={
            fit === "cover" ? "object-cover" : "object-contain p-6 sm:p-10"
          }
          priority
        />
      </div>
      {all.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2.5">
          {all.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image: ${image.alt}`}
              aria-pressed={active === index}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-white transition ${
                active === index
                  ? "border-brand-blue ring-2 ring-brand-cyan/30"
                  : "border-brand-line opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="120px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
