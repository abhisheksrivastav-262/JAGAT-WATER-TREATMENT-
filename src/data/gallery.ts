export const galleryCategories = [
  "All",
  "Treatment Plants",
  "Equipment",
  "Air Pollution Control",
  "Media & Chemicals",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  fit?: "contain" | "cover";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/products/sewage-treatment-plant.jpg",
    alt: "Sewage treatment plant aeration tanks with safety railings",
    title: "Sewage Treatment Plant",
    category: "Treatment Plants",
    fit: "cover",
  },
  {
    src: "/images/products/effluent-treatment-plant.jpg",
    alt: "Industrial effluent treatment plant with blue process tanks",
    title: "Effluent Treatment Plant",
    category: "Treatment Plants",
    fit: "cover",
  },
  {
    src: "/images/products/common-effluent-treatment-plant.jpg",
    alt: "Common effluent treatment plant with blue and red tanks",
    title: "Common Effluent Treatment Plant",
    category: "Treatment Plants",
    fit: "cover",
  },
  {
    src: "/images/products/water-softener.jpg",
    alt: "Blue water softener vessels installed with valves and piping",
    title: "Water Softener Installation",
    category: "Treatment Plants",
    fit: "cover",
  },
  {
    src: "/images/products/commercial-ro-plant.jpg",
    alt: "Commercial reverse osmosis plant with membrane housings",
    title: "Commercial RO Plant",
    category: "Treatment Plants",
    fit: "cover",
  },
  {
    src: "/images/products/root-air-blower.jpg",
    alt: "Root air blower with motor and silencer",
    title: "Root Air Blower",
    category: "Equipment",
    fit: "contain",
  },
  {
    src: "/images/products/hydraulic-filter-press.jpg",
    alt: "Hydraulic filter press for sludge dewatering",
    title: "Hydraulic Filter Press",
    category: "Equipment",
    fit: "contain",
  },
  {
    src: "/images/products/dewatering-pump.jpg",
    alt: "Dewatering pump for solids handling",
    title: "Dewatering Pump",
    category: "Equipment",
    fit: "contain",
  },
  {
    src: "/images/products/pressure-vessels.jpg",
    alt: "Pressure filter vessels in mild steel and stainless steel",
    title: "Pressure Filter Vessels",
    category: "Equipment",
    fit: "contain",
  },
  {
    src: "/images/products/uv-system.jpg",
    alt: "Ultraviolet water disinfection system",
    title: "UV Disinfection System",
    category: "Equipment",
    fit: "contain",
  },
  {
    src: "/images/products/wet-scrubber.jpg",
    alt: "Wet scrubber with ductwork and exhaust stack",
    title: "Wet Scrubber",
    category: "Air Pollution Control",
    fit: "cover",
  },
  {
    src: "/images/products/cyclone-dust-collector.jpg",
    alt: "Cyclone dust collector with collection bin",
    title: "Cyclone Dust Collector",
    category: "Air Pollution Control",
    fit: "cover",
  },
  {
    src: "/images/products/multi-cyclone-dust-collector.jpg",
    alt: "Multi-cyclone dust collector installed outdoors",
    title: "Multi-Cyclone Dust Collector",
    category: "Air Pollution Control",
    fit: "cover",
  },
  {
    src: "/images/products/filter-media.jpg",
    alt: "Samples of filter media, activated carbon and resin",
    title: "Filter Media & Resin",
    category: "Media & Chemicals",
    fit: "cover",
  },
  {
    src: "/images/products/tube-deck-media.jpg",
    alt: "Tube deck biological media for aeration",
    title: "Tube-Deck / SAFF Media",
    category: "Media & Chemicals",
    fit: "cover",
  },
  {
    src: "/images/products/fine-bubble-diffusers.jpg",
    alt: "Fine bubble disc diffusers with EPDM membranes",
    title: "Fine Bubble Diffusers",
    category: "Media & Chemicals",
    fit: "cover",
  },
];
