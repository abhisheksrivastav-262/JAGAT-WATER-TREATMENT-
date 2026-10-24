import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { business, mapsDirectionsUrl } from "@/config/business";
import { Logo } from "@/components/Logo";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Industries we serve", href: "/industries" },
  { label: "Applications gallery", href: "/projects" },
  { label: "Contact us", href: "/contact" },
  { label: "Request a quote", href: "/request-quote" },
];

const productLinks = [
  { label: "Sewage treatment plants", href: "/products/sewage-treatment-plant" },
  { label: "Effluent treatment plants", href: "/products/effluent-treatment-plant" },
  { label: "Common effluent treatment", href: "/products/common-effluent-treatment-plant" },
  { label: "RO plants", href: "/products/commercial-ro-plant" },
  { label: "Water softeners", href: "/products/water-softener" },
  { label: "All products", href: "/products" },
];

const serviceLinks = [
  { label: "Turnkey STP / ETP / CETP", href: "/services/turnkey-stp-etp-cetp" },
  { label: "Water treatment engineering", href: "/services/water-treatment-plant-engineering" },
  { label: "Air pollution control", href: "/services/air-pollution-control" },
  { label: "AMC / CMC & servicing", href: "/services/operation-maintenance-amc" },
  { label: "All services", href: "/services" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white/70">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #16B9E8 0, transparent 32%), radial-gradient(circle at 85% 10%, #279447 0, transparent 30%)",
        }}
      />
      <div className="container-x relative pb-24 pt-14 md:pb-16 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-8">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[0.86rem] leading-6 text-white/65">
              Turnkey water and wastewater treatment solutions from Varanasi —
              STP, ETP, CETP, WTP, RO, softeners, treatment equipment, media and
              air pollution control.
            </p>
            <p className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-medium tracking-wide text-white/60">
              GSTIN {business.gst}
            </p>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.86rem] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.86rem] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-7 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.86rem] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-[0.86rem]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <span className="leading-6">{business.address.full}</span>
              </li>
              {business.phones.map((phone) => (
                <li key={phone.href} className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                  <span className="leading-6">
                    <span className="block text-[0.68rem] uppercase tracking-wider text-white/40">
                      {phone.label}
                    </span>
                    <a href={phone.href} className="font-semibold text-white hover:text-brand-cyan">
                      {phone.value}
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <a
                  href={`mailto:${business.email}`}
                  className="break-all leading-6 transition-colors hover:text-white"
                >
                  {business.email}
                </a>
              </li>
            </ul>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand-cyan transition hover:text-white"
            >
              Get directions
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.74rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="tracking-[0.08em]">
            STP · ETP · CETP · WTP · RO · WATER CHEMICALS · AIR POLLUTION CONTROL
          </p>
        </div>
      </div>
    </footer>
  );
}
