export type PhoneContact = {
  label: string;
  value: string;
  href: string;
};

export const business = {
  name: "JAGAT WATER TREATMENT",
  shortName: "Jagat Water Treatment",
  legalName: "JAGAT WATER TREATMENT",
  tagline: "Advanced water treatment solutions for a sustainable future",
  description:
    "JAGAT WATER TREATMENT designs, builds and supports sewage treatment, effluent treatment, water treatment and air pollution control systems on a turnkey basis from Varanasi, Uttar Pradesh.",
  specialities: [
    "STP",
    "ETP",
    "CETP",
    "WTP",
    "RO",
    "Water Softeners",
    "Air Pollution Control",
  ],
  email: "Jagatnarayan201193@gmail.com",
  gst: "09GZYPS4837N1ZU",
  phones: [
    {
      label: "Sales & enquiries",
      value: "+91 99358 01302",
      raw: "9935801302",
      href: "tel:+919935801302",
    },
    {
      label: "Office",
      value: "+91 80094 00540",
      raw: "8009400540",
      href: "tel:+918009400540",
    },
  ] satisfies (PhoneContact & { raw: string })[],
  address: {
    line1: "Plot No. 5–6, Hardattpur (G.T. Road)",
    line2: "Jagatpur, Rohaniya",
    city: "Varanasi",
    district: "Varanasi",
    state: "Uttar Pradesh",
    postalCode: "221108",
    country: "India",
    full: "Plot No. 5–6, Hardattpur (G.T. Road), Jagatpur, Rohaniya, District Varanasi, Uttar Pradesh – 221108, India",
  },
  location: {
    locality: "Varanasi",
    region: "Uttar Pradesh",
    country: "IN",
  },
  /*
   * WhatsApp is intentionally disabled until the business confirms which
   * number is WhatsApp-enabled. When confirmed, set `enabled` to true and
   * update `number` with the full international format (no +, spaces or dashes).
   * All enquiry forms and WhatsApp buttons read from this single config.
   */
  whatsapp: {
    enabled: false,
    number: "919935801302",
    displayNumber: "+91 99358 01302",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.jagatwatertreatment.in",
  hoursNote:
    "Call or email to confirm a convenient appointment. Site visits are scheduled on request.",
} as const;

export const businessAddressQuery = encodeURIComponent(
  "Plot No. 5-6, Hardattpur, G.T. Road, Jagatpur, Rohaniya, Varanasi, Uttar Pradesh 221108, India",
);

export const mapsEmbedUrl = `https://www.google.com/maps?q=${businessAddressQuery}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessAddressQuery}`;
