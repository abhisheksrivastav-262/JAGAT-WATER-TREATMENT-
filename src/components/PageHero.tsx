import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  children,
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-brand-navy">
      <div
        className="pointer-events-none absolute inset-0 dot-pattern opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-10 sm:py-12 lg:py-16">
        <Reveal>
          <Breadcrumbs items={crumbs} tone="light" />
          <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <span className="eyebrow-light eyebrow-line">{eyebrow}</span>
              <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[3rem]">
                {title}
              </h1>
              {description ? (
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-white/65">
                  {description}
                </p>
              ) : null}
            </div>
            {actions ? (
              <div className="flex flex-wrap gap-3 lg:justify-end">{actions}</div>
            ) : null}
          </div>
          {children}
        </Reveal>
      </div>
    </header>
  );
}
