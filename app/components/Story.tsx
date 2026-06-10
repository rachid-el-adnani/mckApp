import { useTranslations } from "next-intl";
import { ZelligePattern } from "./ZelligePattern";

export function Story() {
  const t = useTranslations("story");
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-[var(--color-atlas-dark)] text-[var(--color-cream)]"
    >
      <div className="absolute inset-0 -z-10 opacity-50 text-[var(--color-cream)]">
        <ZelligePattern color="currentColor" opacity={0.18} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-atlas)] via-[var(--color-atlas-dark)] to-[var(--color-atlas-dark)]"
      />

      {/* Vertical OUR STORY rail */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-center text-[var(--color-sand)] md:block"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
          &#9670; Origin &middot; 03 &#9670; MCK &#9670; EST. 2022 &#9670;
        </span>
      </div>

      <div className="container-page relative pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
            style={{ WebkitTextStroke: "2px rgba(244,237,224,0.4)" }}
          >
            03
          </span>
        </div>

        <div className="h-[3px] w-32 bg-[var(--color-cream)]/70 md:w-48" />
        <p
          className="mt-3 text-[10px] font-bold tracking-[0.32em] uppercase text-[var(--color-cream)]/80"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t("eyebrow")}
        </p>

        <div className="mt-6 grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Massive slogan */}
          <div className="md:col-span-6">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[24vw] leading-[0.82] text-[var(--color-cream)] md:text-[15vw] lg:text-[13rem]"
            >
              {t("sloganA")}
              <br />
              <span className="text-[var(--color-ochre)]">
                {t("sloganB")}
              </span>
            </h2>
          </div>

          {/* Story body */}
          <div className="md:col-span-6 md:pt-4">
            <span
              aria-hidden
              className="block text-6xl leading-none text-[var(--color-sand)]/70"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 space-y-5 text-lg leading-relaxed text-[var(--color-cream)]/90 md:text-xl">
              <p>{t("q1")}</p>
              <p>{t("q2")}</p>
              <p>{t("q3")}</p>
              <p>{t("q4")}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
