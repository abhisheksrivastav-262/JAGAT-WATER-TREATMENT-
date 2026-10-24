import {
  Award,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  CloudRain,
  Droplet,
  Droplets,
  Factory,
  Filter,
  Gauge,
  Leaf,
  PlugZap,
  Recycle,
  Settings2,
  ShieldCheck,
  Store,
  TestTubeDiagonal,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  award: Award,
  "building-2": Building2,
  "check-circle": CheckCircle2,
  "clipboard-check": ClipboardCheck,
  "cloud-rain": CloudRain,
  droplet: Droplet,
  droplets: Droplets,
  factory: Factory,
  filter: Filter,
  gauge: Gauge,
  leaf: Leaf,
  "plug-zap": PlugZap,
  recycle: Recycle,
  settings: Settings2,
  "shield-check": ShieldCheck,
  store: Store,
  lab: TestTubeDiagonal,
  wind: Wind,
  wrench: Wrench,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = icons[name] ?? Droplets;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
