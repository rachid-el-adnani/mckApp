import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-atlas)] text-center text-white"
    >
      <Image
        src="/champions/heroImage.png"
        alt=""
        width={1567}
        height={2088}
        priority
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-auto -translate-x-1/2 select-none opacity-75 grayscale md:left-auto md:right-0 md:translate-x-0"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      <Image
        src="/logos/tag.png"
        alt={t("tagAlt")}
        width={603}
        height={815}
        priority
        className="pointer-events-none absolute left-4 top-20 z-10 h-24 w-auto -rotate-6 select-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] md:left-10 md:top-10 md:h-44"
      />

      <div className="container-page relative flex flex-col items-center pt-24 pb-16 md:pt-32 md:pb-28">
        <h1
          style={{ fontFamily: "var(--font-paint)" }}
          className="text-[26vw] leading-[0.85] tracking-tight md:text-[16rem] md:leading-[0.8]"
        >
          {t("headline")}
        </h1>

        <p
          style={{ fontFamily: "var(--font-mono)" }}
          className="mt-8 flex flex-wrap justify-center gap-x-3 text-xs font-bold uppercase tracking-[0.22em] text-white/95 md:text-sm"
        >
          <span>{t("statMorocco")}</span>
          <span className="opacity-50">|</span>
          <span>{t("statAfrica")}</span>
          <span className="opacity-50">|</span>
          <span>{t("statPassion")}</span>
        </p>

        <p
          style={{ fontFamily: "var(--font-paint)" }}
          className="mt-3 text-5xl tracking-tight text-black md:text-7xl"
        >
          {t("accent")}
        </p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
