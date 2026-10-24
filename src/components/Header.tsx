"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { business } from "@/config/business";
import { mainLinks, productMenu, serviceMenu, type NavItem } from "@/data/navigation";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass =
  "rounded-lg px-3 py-2 text-[0.83rem] font-semibold text-brand-navy/80 transition-colors hover:text-brand-blue xl:text-[0.86rem]";

function DesktopDropdown({
  label,
  href,
  items,
  viewAllHref,
  viewAllLabel,
}: {
  label: string;
  href: string;
  items: NavItem[];
  viewAllHref: string;
  viewAllLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center">
        <Link
          href={href}
          className={`${navLinkClass} ${isActive(pathname, href) ? "text-brand-blue" : ""}`}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`${open ? "Close" : "Open"} ${label} menu`}
          className="-ml-1 rounded-md p-1 text-brand-navy/60 transition hover:text-brand-blue"
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {open ? (
        <div className="absolute left-0 top-[calc(100%+10px)] w-[23rem] overflow-hidden rounded-2xl border border-brand-line bg-white p-2 shadow-soft">
          <div className="space-y-0.5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-mist"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-blue">
                  <Icon name={item.icon ?? "droplets"} className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-[0.83rem] font-semibold text-brand-navy">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-1 border-t border-brand-line pt-1">
            <Link
              href={viewAllHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.83rem] font-semibold text-brand-blue transition-colors hover:bg-brand-mist"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const primaryPhone = business.phones[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="hidden border-b border-white/10 bg-brand-navy text-white/75 lg:block">
        <div className="container-x flex h-10 items-center justify-between gap-6 text-[0.72rem]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
              Hardattpur, Jagatpur, Varanasi, Uttar Pradesh
            </span>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
              {business.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/50">GSTIN {business.gst}</span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            {business.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex items-center gap-1.5 font-medium text-white/85 transition hover:text-brand-cyan"
              >
                <Phone className="h-3 w-3" aria-hidden="true" />
                {phone.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b border-brand-line/80 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(8,43,73,0.35)]" : ""
        }`}
      >
        <div
          className={`container-x flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-[4.7rem] sm:h-20"
          }`}
        >
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            <Link
              href="/"
              className={`${navLinkClass} ${pathname === "/" ? "text-brand-blue" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${navLinkClass} ${isActive(pathname, "/about") ? "text-brand-blue" : ""}`}
            >
              About
            </Link>
            <DesktopDropdown
              label="Products"
              href="/products"
              items={productMenu}
              viewAllHref="/products"
              viewAllLabel="View all products"
            />
            <DesktopDropdown
              label="Services"
              href="/services"
              items={serviceMenu}
              viewAllHref="/services"
              viewAllLabel="View all services"
            />
            <Link
              href="/industries"
              className={`${navLinkClass} ${isActive(pathname, "/industries") ? "text-brand-blue" : ""}`}
            >
              Industries
            </Link>
            <Link
              href="/projects"
              className={`${navLinkClass} ${isActive(pathname, "/projects") ? "text-brand-blue" : ""}`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`${navLinkClass} ${isActive(pathname, "/contact") ? "text-brand-blue" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={primaryPhone.href}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist xl:inline-flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-brand-blue">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.62rem] font-medium uppercase tracking-wider text-slate-500">
                  Call now
                </span>
                <span className="text-[0.8rem]">{primaryPhone.value}</span>
              </span>
            </a>
            <Link href="/request-quote" className="btn-primary hidden !px-4 !py-2.5 text-[0.8rem] sm:inline-flex">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line text-brand-navy transition hover:bg-brand-mist lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(90vw,23rem)] flex-col bg-white shadow-2xl"
          >
            <div className="flex h-20 items-center justify-between border-b border-brand-line px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line text-brand-navy transition hover:bg-brand-mist"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <nav aria-label="Mobile primary" className="space-y-1">
                <Link
                  href="/"
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
                >
                  About Us
                </Link>

                <details className="group rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist [&::-webkit-details-marker]:hidden">
                    Products
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-1 space-y-1 pb-2 pl-3">
                    <Link
                      href="/products"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-mist"
                    >
                      All products
                    </Link>
                    {productMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-mist hover:text-brand-blue"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>

                <details className="group rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist [&::-webkit-details-marker]:hidden">
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-1 space-y-1 pb-2 pl-3">
                    <Link
                      href="/services"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-mist"
                    >
                      All services
                    </Link>
                    {serviceMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-mist hover:text-brand-blue"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>

                {mainLinks
                  .filter((item) => !["/", "/about"].includes(item.href))
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
                    >
                      {item.label}
                    </Link>
                  ))}
              </nav>

              <div className="mt-6 space-y-2.5 border-t border-brand-line pt-5">
                <a href={primaryPhone.href} className="btn-outline w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {primaryPhone.value}
                </a>
                <Link href="/request-quote" className="btn-primary w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-5 rounded-xl bg-brand-mist p-4 text-xs leading-6 text-slate-600">
                <p className="font-semibold text-brand-navy">Office &amp; workshop</p>
                <p className="mt-1">{business.address.full}</p>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-2 inline-block font-medium text-brand-blue hover:underline"
                >
                  {business.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
