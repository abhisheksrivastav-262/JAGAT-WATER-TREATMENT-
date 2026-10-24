export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export const productMenu: NavItem[] = [
  {
    label: "Treatment Plants",
    href: "/products?category=Treatment%20Plants",
    description: "STP, ETP, CETP, RO plants and water softeners",
    icon: "droplets",
  },
  {
    label: "Mechanical Equipment",
    href: "/products?category=Mechanical%20Equipment",
    description: "Pumps, blowers, flowmeters, pH meters and filter presses",
    icon: "settings",
  },
  {
    label: "Filtration Equipment",
    href: "/products?category=Filtration%20Equipment",
    description: "Pressure vessels, valves, media and diffusers",
    icon: "filter",
  },
  {
    label: "Water Chemicals",
    href: "/products?category=Water%20Chemicals",
    description: "Polyelectrolytes, disinfectants, alum and lime",
    icon: "lab",
  },
  {
    label: "Air Pollution Control",
    href: "/products?category=Air%20Pollution%20Control",
    description: "Wet scrubbers, cyclone and multi-cyclone collectors",
    icon: "wind",
  },
];

export const serviceMenu: NavItem[] = [
  {
    label: "Turnkey STP / ETP / CETP",
    href: "/services/turnkey-stp-etp-cetp",
    icon: "factory",
  },
  {
    label: "Water Treatment Engineering",
    href: "/services/water-treatment-plant-engineering",
    icon: "droplets",
  },
  {
    label: "Air Pollution Control",
    href: "/services/air-pollution-control",
    icon: "wind",
  },
  {
    label: "AMC / CMC & Servicing",
    href: "/services/operation-maintenance-amc",
    icon: "wrench",
  },
  {
    label: "Evaluation & Feasibility",
    href: "/services/performance-evaluation-feasibility",
    icon: "clipboard-check",
  },
  {
    label: "Zero Liquid Discharge",
    href: "/services/zero-liquid-discharge",
    icon: "recycle",
  },
];

export const mainLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
