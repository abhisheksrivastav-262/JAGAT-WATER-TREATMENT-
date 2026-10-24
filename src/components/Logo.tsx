import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

export function Logo({ variant = "dark", compact = false, className = "" }: LogoProps) {
  const size = compact ? "h-11 w-11" : "h-14 w-14";

  return (
    <Link
      href="/"
      aria-label="JAGAT WATER TREATMENT — home"
      className={`group flex shrink-0 items-center gap-3 ${className}`}
    >
      <span
        className={`relative flex ${size} shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${
          variant === "light" ? "ring-2 ring-white/15" : "ring-1 ring-brand-line"
        }`}
      >
        <Image
          src="/images/brand/jagat-water-treatment-logo.png"
          alt="JAGAT WATER TREATMENT logo"
          width={56}
          height={56}
          className="h-full w-full scale-[1.02] object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.02rem] font-extrabold tracking-[-0.02em] ${
            variant === "light" ? "text-white" : "text-brand-navy"
          }`}
        >
          JAGAT
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] ${
            variant === "light" ? "text-brand-cyan" : "text-brand-blue"
          }`}
        >
          Water Treatment
        </span>
      </span>
    </Link>
  );
}
