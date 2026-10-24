export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  overview: string[];
  includes: string[];
  benefits: string[];
  applications: string[];
  relatedProducts: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "turnkey-stp-etp-cetp",
    title: "Turnkey STP, ETP & CETP Solutions",
    shortTitle: "Turnkey STP / ETP / CETP",
    icon: "factory",
    image: "/images/products/sewage-treatment-plant.jpg",
    imageAlt: "Sewage treatment plant constructed on a turnkey basis",
    summary:
      "Complete sewage, effluent and common effluent treatment plants delivered from design through commissioning.",
    overview: [
      "JAGAT WATER TREATMENT delivers sewage treatment plants, effluent treatment plants and common effluent treatment plants on a turnkey basis. The scope covers design, drawings, engineering, supervision, construction, fabrication, supply, erection, testing and commissioning.",
      "Mechanical, piping, electrical and instrumentation work is included, so the plant is coordinated through a single delivery team rather than multiple disconnected contracts.",
      "Plants can be packaged or compact, or engineered for the site. Technology selection includes FAB, MBBR, SBR, constructed wetland, MBR and other options as required by the client and site conditions.",
    ],
    includes: [
      "Process design, drawings and engineering",
      "Civil construction and supervision",
      "Fabrication and equipment supply",
      "Mechanical, piping, electrical and instrumentation work",
      "Erection, testing and commissioning",
      "Tertiary polishing for water reuse",
    ],
    benefits: [
      "Single point of accountability from concept to commissioning",
      "Coordinated mechanical, electrical and instrumentation scope",
      "Technology matched to the site and discharge or reuse requirement",
      "Packaged options where space or speed is a constraint",
      "Reuse-focused design for gardening, flushing and cooling tower make-up",
    ],
    applications: [
      "Community and township projects",
      "Real estate developments",
      "Industries",
      "Hotels",
      "Hospitals",
      "Industrial estates requiring a CETP",
    ],
    relatedProducts: [
      "sewage-treatment-plant",
      "effluent-treatment-plant",
      "common-effluent-treatment-plant",
      "tube-deck-media",
    ],
    featured: true,
  },
  {
    slug: "water-treatment-plant-engineering",
    title: "Water Treatment Plant Design & Engineering",
    shortTitle: "Water Treatment Engineering",
    icon: "droplets",
    image: "/images/products/commercial-ro-plant.jpg",
    imageAlt: "Reverse osmosis water treatment plant with membrane housings",
    summary:
      "RO, softening, filtration and demineralisation systems engineered for the feed water and end use.",
    overview: [
      "Water treatment starts with the feed water. JAGAT WATER TREATMENT designs and supplies RO plants, water softeners, pressure filtration systems and demineralised (DM) water plants, with pre-treatment selected to protect the downstream process.",
      "Scope includes process design, equipment selection, supply, installation, testing and commissioning, along with the piping, electrical and instrumentation work needed to put the plant into service.",
      "Systems are configured for commercial, institutional and industrial duties where low TDS, controlled hardness or consistent water quality is required.",
    ],
    includes: [
      "Feed water assessment and process selection",
      "RO, softener, DM and filtration plant design",
      "Pre-treatment and media selection",
      "Equipment supply and installation",
      "Piping, electrical and instrumentation",
      "Testing and commissioning",
    ],
    benefits: [
      "Treatment train matched to the actual feed water",
      "Reduced scaling and fouling through appropriate pre-treatment",
      "Consistent water quality for the intended use",
      "Compact, plant-room-friendly configurations",
      "Single supplier for equipment and commissioning",
    ],
    applications: [
      "Commercial and institutional water supply",
      "Industrial process water",
      "Boiler and cooling water pre-treatment",
      "Low-TDS water requirements",
      "Demineralised water requirements",
    ],
    relatedProducts: [
      "commercial-ro-plant",
      "water-softener",
      "pressure-vessels",
      "filter-media",
    ],
    featured: true,
  },
  {
    slug: "air-pollution-control",
    title: "Air Pollution Control Systems",
    shortTitle: "Air Pollution Control",
    icon: "wind",
    image: "/images/products/wet-scrubber.jpg",
    imageAlt: "Wet scrubber air pollution control system",
    summary:
      "Wet scrubbers, cyclone and multi-cyclone collectors for industrial dust and gas streams.",
    overview: [
      "JAGAT WATER TREATMENT supplies air pollution control devices for industries generating fumes, smoke, odours, pungent gases, fog and fine dust. The systems help reduce pollution and maintain a cleaner working environment.",
      "Wet scrubbers collect particulate and gaseous pollutants in a scrubbing liquid, making them suitable where both must be captured in one system. Cyclone and multi-cyclone collectors use inertia and centrifugal force to separate heavier dusts.",
      "Systems are available in customised specifications, with scrubber type and size selected around the process operating conditions.",
    ],
    includes: [
      "System selection and sizing",
      "Wet scrubber supply and installation",
      "Cyclone and multi-cyclone dust collectors",
      "Ductwork, fan and mist eliminator coordination",
      "Pumping and recycle arrangements",
      "Controls and commissioning",
    ],
    benefits: [
      "Single system for particulate and gaseous pollutants with wet scrubbing",
      "Customised specifications for the process",
      "Modular, durable construction",
      "Low-maintenance cyclone separation for coarse dust",
      "Reduced emissions and cleaner workplace air",
    ],
    applications: [
      "Pharmaceutical",
      "Power plants",
      "Foundries",
      "Chemical plants",
      "Cement engineering",
      "Petroleum refineries, acid manufacturing and steel making",
    ],
    relatedProducts: [
      "wet-scrubber",
      "cyclone-dust-collector",
      "multi-cyclone-dust-collector",
      "root-air-blower",
    ],
    featured: true,
  },
  {
    slug: "operation-maintenance-amc",
    title: "Annual & Comprehensive Maintenance Contracts",
    shortTitle: "AMC / CMC & Servicing",
    icon: "wrench",
    image: "/images/products/root-air-blower-akash.jpg",
    imageAlt: "Root air blower serviced under maintenance contracts",
    summary:
      "Planned maintenance, AMC/CMC support and equipment servicing for water and wastewater systems.",
    overview: [
      "Treatment plants perform best with planned upkeep. JAGAT WATER TREATMENT offers Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) for water and wastewater systems.",
      "Support covers routine checks, consumables and media replacement planning, blower servicing and coordination of repairs. The exact scope is agreed per plant so responsibilities and visit frequency are clear.",
      "For existing installations, maintenance can be combined with a performance evaluation to identify upgrades before they become failures.",
    ],
    includes: [
      "Annual Maintenance Contracts (AMC)",
      "Comprehensive Maintenance Contracts (CMC)",
      "Root blower servicing",
      "Routine inspection and performance checks",
      "Consumables and media replacement planning",
      "Repair coordination",
    ],
    benefits: [
      "Planned upkeep instead of reactive breakdowns",
      "Clear scope and visit schedule",
      "One service partner for plant and equipment",
      "Better equipment life and process stability",
      "Maintenance history for future upgrades",
    ],
    applications: [
      "STP, ETP and CETP installations",
      "RO, softener and filtration plants",
      "Pump and blower installations",
      "Air pollution control systems",
    ],
    relatedProducts: [
      "root-air-blower",
      "chemical-dosing-pump",
      "sewage-pump",
      "filter-media",
    ],
    featured: true,
  },
  {
    slug: "performance-evaluation-feasibility",
    title: "Performance Evaluation & Feasibility Studies",
    shortTitle: "Evaluation & Feasibility",
    icon: "clipboard-check",
    image: "/images/products/effluent-treatment-plant.jpg",
    imageAlt: "Effluent treatment plant assessed through performance evaluation studies",
    summary:
      "Independent assessment of existing plants, plus feasibility studies for new builds and upgrades.",
    overview: [
      "JAGAT WATER TREATMENT carries out performance evaluation studies for existing ETP and CETP setups, reviewing how the plant is actually operating against its intended duty.",
      "Feasibility studies are offered for new ETP, WTP and CETP installations as well as modifications, renovation and expansion of existing facilities. This helps establish the right scope before capital is committed.",
      "Findings can be carried through into design, engineering and execution, so recommendations are not left as a standalone report.",
    ],
    includes: [
      "Performance evaluation of existing ETP/CETP setups",
      "Feasibility studies for new ETP, WTP and CETP installations",
      "Modification, renovation and expansion studies",
      "Process and equipment review",
      "Upgrade recommendations",
      "Design and execution follow-through",
    ],
    benefits: [
      "Decisions based on the plant's actual performance",
      "Clear scope before capital expenditure",
      "Identification of bottlenecks and upgrade options",
      "Better use of existing assets",
      "Continuity from study to implementation",
    ],
    applications: [
      "Existing industrial ETPs and CETPs",
      "New water and wastewater projects",
      "Plant expansion and renovation",
      "Hospital and institutional treatment facilities",
    ],
    relatedProducts: [
      "effluent-treatment-plant",
      "common-effluent-treatment-plant",
      "sewage-treatment-plant",
      "electromagnetic-flowmeter",
    ],
    featured: true,
  },
  {
    slug: "zero-liquid-discharge",
    title: "Zero Liquid Discharge (ZLD) System Design",
    shortTitle: "Zero Liquid Discharge",
    icon: "recycle",
    image: "/images/products/common-effluent-treatment-plant.jpg",
    imageAlt: "Common effluent treatment plant with zero liquid discharge design scope",
    summary:
      "Design of zero liquid discharge systems for industrial wastewater where discharge is restricted.",
    overview: [
      "Zero Liquid Discharge systems are designed to recover water and minimise or eliminate liquid discharge from an industrial facility.",
      "JAGAT WATER TREATMENT offers designs for ZLD systems as part of its effluent treatment engineering scope. The treatment train is configured around the effluent characteristics, recovery target and site constraints.",
      "ZLD design is developed together with the upstream ETP/CETP so that pretreatment, concentration and recovery stages work as one system.",
    ],
    includes: [
      "ZLD concept and process design",
      "Integration with ETP/CETP",
      "Recovery and concentration stage selection",
      "Equipment and instrumentation scope",
      "Engineering drawings",
      "Commissioning support",
    ],
    benefits: [
      "Reduced or eliminated liquid discharge",
      "Water recovery for reuse",
      "Compliance-oriented design",
      "Integrated approach with existing treatment",
      "Scope tailored to the effluent",
    ],
    applications: [
      "Industrial facilities with discharge restrictions",
      "Textile, pharmaceutical and chemical operations",
      "New ETP/CETP projects with reuse targets",
    ],
    relatedProducts: [
      "effluent-treatment-plant",
      "common-effluent-treatment-plant",
      "commercial-ro-plant",
      "hydraulic-filter-press",
    ],
  },
  {
    slug: "rain-water-harvesting",
    title: "Rain Water Harvesting",
    shortTitle: "Rain Water Harvesting",
    icon: "cloud-rain",
    image: "/images/products/pressure-vessels.jpg",
    imageAlt: "Filtration vessels used in rainwater harvesting and water treatment",
    summary:
      "Rainwater capture and reuse systems integrated with site drainage and treatment requirements.",
    overview: [
      "Rain water harvesting captures rainwater from roofs and paved areas so it can be stored, reused or directed to groundwater recharge instead of running off.",
      "JAGAT WATER TREATMENT includes rain water harvesting in its water management scope, coordinating collection, filtration and storage with the site's overall water treatment strategy.",
      "Systems are planned around the available catchment, intended reuse and site drainage.",
    ],
    includes: [
      "Catchment and demand review",
      "Collection and conveyance planning",
      "Filtration and pre-treatment",
      "Storage or recharge arrangements",
      "Integration with existing water systems",
    ],
    benefits: [
      "Reduces dependence on municipal or borewell supply",
      "Uses an otherwise wasted resource",
      "Can reduce runoff and local flooding",
      "Supports water reuse objectives",
    ],
    applications: [
      "Industrial campuses",
      "Commercial and institutional buildings",
      "Residential and township projects",
    ],
    relatedProducts: [
      "pressure-vessels",
      "filter-media",
      "water-softener",
      "commercial-ro-plant",
    ],
  },
  {
    slug: "monitoring-instrumentation",
    title: "Monitoring & Instrumentation",
    shortTitle: "Monitoring & Instrumentation",
    icon: "gauge",
    image: "/images/products/electromagnetic-flowmeter.jpg",
    imageAlt: "Electromagnetic flowmeter used for water monitoring",
    summary:
      "Flow, pH, pressure and online effluent monitoring instruments for treatment plant control.",
    overview: [
      "Reliable treatment depends on reliable measurement. JAGAT WATER TREATMENT supplies and commissions electromagnetic flowmeters, pH meters, piezometers and related instrumentation.",
      "Online Continuous Effluent Monitoring Systems (OCEMS) are also part of the monitoring scope, helping plants track effluent parameters continuously.",
      "Instruments are selected for the process conditions and integrated with the plant's control and reporting arrangements.",
    ],
    includes: [
      "Electromagnetic flowmeters",
      "pH meters",
      "Piezometers",
      "Online Continuous Effluent Monitoring Systems (OCEMS)",
      "Installation and commissioning",
      "Integration with plant controls",
    ],
    benefits: [
      "Accurate flow and water quality data",
      "Better dosing and process control",
      "Early warning of process drift",
      "Support for compliance reporting",
      "Instruments matched to the duty",
    ],
    applications: [
      "STP, ETP and CETP monitoring",
      "Industrial water and wastewater lines",
      "Groundwater and pore pressure monitoring",
      "Effluent discharge monitoring",
    ],
    relatedProducts: [
      "electromagnetic-flowmeter",
      "ph-meter",
      "piezometer",
      "chemical-dosing-pump",
    ],
  },
  {
    slug: "environmental-clearance-waste-management",
    title: "Environmental Clearance & Waste Management",
    shortTitle: "Environmental Clearance",
    icon: "leaf",
    summary:
      "Environmental clearance and waste management system planning for water and wastewater projects.",
    overview: [
      "JAGAT WATER TREATMENT lists environmental clearance and waste management systems among its specialisations, alongside STP, ETP, WTP and RO.",
      "For projects where these requirements apply, the scope is coordinated with the treatment plant design so that wastewater, sludge and solid waste streams are addressed together.",
      "The applicable statutory requirements and deliverables are confirmed for each project before work begins.",
    ],
    includes: [
      "Environmental clearance planning support",
      "Waste management system planning",
      "Integration with STP/ETP/CETP scope",
      "Sludge and solid waste stream review",
      "Documentation coordination",
    ],
    benefits: [
      "Treatment and environmental requirements considered together",
      "Fewer gaps between plant design and compliance needs",
      "Coordinated documentation",
      "Clear project scope",
    ],
    applications: [
      "New industrial projects",
      "Expansion and renovation projects",
      "Hospital and institutional facilities",
      "Water and wastewater infrastructure",
    ],
    relatedProducts: [
      "effluent-treatment-plant",
      "common-effluent-treatment-plant",
      "hydraulic-filter-press",
      "sewage-treatment-plant",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
  return services.filter((service) => service.featured);
}
