import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "JAGAT WATER TREATMENT | Water & Wastewater Treatment Solutions",
    template: "%s | JAGAT WATER TREATMENT",
  },
  description:
    "Turnkey STP, ETP, CETP, RO, water softener, filtration, water chemical and air pollution control solutions from JAGAT WATER TREATMENT, Varanasi, Uttar Pradesh.",
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "Industrial water treatment",
  keywords: [
    "water treatment Varanasi",
    "sewage treatment plant Varanasi",
    "effluent treatment plant Uttar Pradesh",
    "STP ETP CETP",
    "industrial water treatment",
    "water softener",
    "RO plant",
    "water treatment equipment",
    "air pollution control",
    "JAGAT WATER TREATMENT",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: business.siteUrl,
    siteName: business.name,
    title: "JAGAT WATER TREATMENT | Water & Wastewater Treatment Solutions",
    description:
      "Turnkey STP, ETP, CETP, RO, softening, filtration, water chemicals and air pollution control systems, engineered and commissioned from Varanasi.",
    images: [
      {
        url: "/images/products/sewage-treatment-plant.jpg",
        width: 1280,
        height: 640,
        alt: "Sewage treatment plant by JAGAT WATER TREATMENT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAGAT WATER TREATMENT | Water & Wastewater Treatment Solutions",
    description:
      "Turnkey STP, ETP, CETP, RO, softening, filtration, water chemicals and air pollution control systems from Varanasi.",
    images: ["/images/products/sewage-treatment-plant.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0756A5",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": `${business.siteUrl}/#organization`,
  name: business.name,
  url: business.siteUrl,
  logo: `${business.siteUrl}/images/brand/jagat-water-treatment-logo.png`,
  image: `${business.siteUrl}/images/products/sewage-treatment-plant.jpg`,
  description: business.description,
  slogan: business.tagline,
  email: business.email,
  telephone: business.phones.map((phone) => phone.value),
  taxID: business.gst,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Plot No. 5–6, Hardattpur (G.T. Road), Jagatpur, Rohaniya",
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Varanasi" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Sewage treatment plants",
    "Effluent treatment plants",
    "Common effluent treatment plants",
    "Reverse osmosis plants",
    "Water softeners",
    "Water treatment equipment",
    "Water chemicals",
    "Air pollution control devices",
  ],
  contactPoint: business.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.value,
    contactType: "sales",
    areaServed: "IN",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
