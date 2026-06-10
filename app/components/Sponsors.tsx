import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "../lib/site";

const ROLE_KEYS = ["rchimRole", "drywichRole", "wearRole"] as const;
const DESC_KEYS = [
  "rchimDescription",
  "drywichDescription",
  "wearDescription",
] as const;

export function Sponsors() {
  const t = useTranslations("sponsors");

  return (
    <section
      id="sponsors"
      className="section-pad bg-[var(--color-bg-deep)] text-[var(--color-text)]"
    >
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
          >
            05
          </span>
        </div>

        <p className="section-tag text-[var(--color-atlas)]">{t("eyebrow")}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
          <h2 className="md:col-span-7 text-5xl leading-[0.9] md:text-7xl">
            {t("headline")}
          </h2>
          <p className="md:col-span-5 max-w-md text-base text-[var(--color-text)]/75">
            {t("subhead")}
          </p>
        </div>

        <p
          className="mt-6 text-[10px] font-bold tracking-[0.28em] uppercase text-[var(--color-sand)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          &#9670; {t("meta")}
        </p>

        <ul className="mt-14 flex flex-col gap-6 md:gap-8">
          {site.sponsors.map((s, i) => (
            <li key={s.slug} className="group relative">
              {/* atlas-red top rule */}
              <div
                aria-hidden
                className="h-[2px] w-full bg-[var(--color-atlas)]/30 transition-all duration-200 group-hover:h-[4px] group-hover:bg-[var(--color-atlas)]"
              />

              {/* index strip */}
              <div
                className="flex items-center justify-between px-1 pt-3 pb-5 text-[10px] font-bold tracking-[0.28em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="text-[var(--color-text)]/60">
                  0{i + 1} / 0{site.sponsors.length}
                </span>
                <span className="text-[var(--color-sand)]">
                  {t("since")} {s.since}
                </span>
              </div>

              {/* The 2K banner — single colored slab, logo bleeds off left */}
              <div
                style={{ backgroundColor: s.bannerBg }}
                className="relative h-44 w-full overflow-hidden border-2 border-[var(--color-text-strong)] shadow-[var(--shadow-card)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)] md:h-[13rem]"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]"
                />

                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={720}
                  height={720}
                  priority={i === 0}
                  className="absolute -start-[6%] top-1/2 z-0 h-[140%] w-auto -translate-y-1/2 select-none object-contain drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.04] md:-start-[4%] md:h-[260%]"
                />

                <div className="relative z-10 flex h-full flex-col justify-center gap-2 ps-[52%] pe-4 text-[var(--color-cream)] md:ps-[44%] md:pe-10">
                  <p
                    className="text-[10px] font-bold tracking-[0.32em] uppercase text-[var(--color-cream)]/70"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t(ROLE_KEYS[i])}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-3xl leading-[0.9] tracking-wider md:text-6xl lg:text-7xl"
                  >
                    {s.name}
                  </h3>
                  <p className="hidden max-w-md text-sm leading-relaxed text-[var(--color-cream)]/85 md:block">
                    {t(DESC_KEYS[i])}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-4 border-2 border-[var(--color-text-strong)] bg-[var(--color-navy)] p-7 text-[var(--color-cream)] md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-xl">
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-ochre)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &#9670; {t("ctaEyebrow")}
            </p>
            <p
              className="mt-3 text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("ctaHeadline")}
            </p>
          </div>
          <a
            href={`mailto:${site.email}?subject=Sponsorship%20%E2%80%94%20MCK`}
            className="btn-primary"
          >
            {t("ctaButton")} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
