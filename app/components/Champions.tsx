import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "../lib/site";

const CAPTION_KEYS = ["captionFirst", "captionRamadan", "captionMamba"] as const;
const TILTS = [-1.2, 0.8, -0.6];

export function Champions() {
  const t = useTranslations("champions");

  return (
    <section
      id="champions"
      className="section-pad relative bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
          >
            04
          </span>
        </div>

        <p className="section-tag text-[var(--color-atlas)]">{t("eyebrow")}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
          <h2 className="md:col-span-7 text-5xl leading-[0.9] md:text-7xl">
            {t("headlineA")}
            <br />
            <span className="text-[var(--color-atlas)]">
              {t("headlineB")}
            </span>
          </h2>
          <p className="md:col-span-5 max-w-md text-base leading-relaxed text-[var(--color-text)]/75">
            {t("subhead")}
          </p>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {site.champions.map((c, i) => (
            <li
              key={c.initials}
              style={{ transform: `rotate(${TILTS[i]}deg)` }}
              className="group relative"
            >
              <div className="tape-corner relative border-2 border-[var(--color-text-strong)] bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center justify-between bg-[var(--color-text-strong)] px-4 py-2.5 text-[var(--color-bg)]" />

                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-navy)]">
                  <Image
                    src={c.photo}
                    alt={`MCK champion ${c.initials}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute right-0 top-0 h-16 w-16 bg-[var(--color-atlas)]"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                  />
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="absolute bottom-2 left-3 text-3xl tracking-tighter text-[var(--color-cream)] drop-shadow-lg"
                  >
                    {c.year}
                  </span>
                </div>

                <div className="flex flex-col gap-2 px-5 py-5">
                  <p
                    className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-atlas)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    &#9670; {c.city}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-display)" }}
                    className="break-words text-2xl tracking-wider sm:text-3xl"
                  >
                    {c.name}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
                    {t(CAPTION_KEYS[i])}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
