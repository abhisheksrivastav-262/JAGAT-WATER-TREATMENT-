export type IndustryGroup = {
  title: string;
  icon: string;
  description: string;
  industries: string[];
};

export const industryGroups: IndustryGroup[] = [
  {
    title: "Community & Institutions",
    icon: "building-2",
    description:
      "Sewage and water treatment for developments where reliable sanitation and water reuse matter.",
    industries: [
      "Community and township projects",
      "Real estate developments",
      "Hotels and resorts",
      "Hospitals and healthcare facilities",
    ],
  },
  {
    title: "Industrial Manufacturing",
    icon: "factory",
    description:
      "Effluent and process water treatment for manufacturing operations with organic, inorganic or metal-bearing wastewater.",
    industries: [
      "Textile and dyeing",
      "Pharmaceutical",
      "Food processing and dairy",
      "Sugar and distillery",
      "Paper and pulp",
      "Tanneries and leather",
      "Paint",
      "Electroplating",
      "Cement",
      "Fertilizer",
      "Oil refineries",
      "Glass",
    ],
  },
  {
    title: "Utilities & Infrastructure",
    icon: "plug-zap",
    description:
      "Treatment and monitoring systems for power, chemical and public infrastructure applications.",
    industries: [
      "Power plants",
      "Foundries",
      "Chemical plants",
      "Municipal sewage and wastewater",
      "Construction and civil works",
      "Marine and dock operations",
    ],
  },
  {
    title: "Commercial & Facilities",
    icon: "store",
    description:
      "Compact water treatment, softening and disinfection for commercial buildings and facilities.",
    industries: [
      "Commercial buildings",
      "Institutional campuses",
      "Swimming pool water treatment",
      "Facilities requiring low-TDS water",
    ],
  },
];
