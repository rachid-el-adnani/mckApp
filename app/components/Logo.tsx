import Image from "next/image";

type LogoProps = {
  variant?: "mark" | "wordmark";
  className?: string;
};

export function Logo({ variant = "wordmark", className = "" }: LogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/logos/Logo.png"
        alt="Moroccan Court Kings"
        width={64}
        height={52}
        priority
        className={className || "h-8 w-auto"}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 leading-none ${className}`}
      aria-label="Moroccan Court Kings"
    >
      <Image
        src="/logos/Logo.png"
        alt=""
        width={64}
        height={52}
        priority
        className="h-7 w-auto md:h-8"
      />
      <span className="hidden text-xs font-semibold tracking-[0.22em] uppercase sm:inline-block">
        Moroccan Court Kings
      </span>
    </span>
  );
}
