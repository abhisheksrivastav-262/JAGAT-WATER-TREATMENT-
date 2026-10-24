import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <span className={`${isLight ? "eyebrow-light" : "eyebrow"} eyebrow-line`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.6rem] ${
          isLight ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[0.975rem] leading-7 ${
            isLight ? "text-white/70" : "text-slate-600"
          } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
