import Image from "next/image";
import { useTranslations } from "next-intl";
import { site } from "../lib/site";

const POLAROID_INDICES = [0, 2, 4, 7] as const;
const POLAROID_CAPTION_KEYS = [
  "captionInGame",
  "captionTournamentDay",
  "captionChampionCrowned",
  "captionSidelines",
] as const;
const TILTS = [-2, 1.5, -1, 2];

export function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("statFirstValue"), label: t("statFirstLabelMorocco") },
    { value: t("statFirstValue"), label: t("statFirstLabelAfrica") },
    { value: t("statPureValue"), label: t("statPureLabel") },
  ];

  const polaroids = POLAROID_INDICES.map((idx, i) => ({
    src: site.aboutPhotos[idx].src,
    caption: t(POLAROID_CAPTION_KEYS[i]),
    roll: `ROLL 0${i + 1}`,
  }));

  return (
    <section
      id="about"
      className="section-pad relative bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
          >
            01
          </span>
        </div>

        <p className="section-tag text-[var(--color-atlas)]">{t("eyebrow")}</p>

        <div className="mt-6 grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="text-5xl leading-[0.9] md:text-6xl">
              {t("headlineA")}
              <br />
              <span className="text-[var(--color-atlas)]">
                {t("headlineB")}
              </span>
            </h2>
            <div className="mt-6 h-[3px] w-24 bg-[var(--color-atlas)]" />
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-[var(--color-text)]/80">
              {t("paragraph1")}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text)]/80">
              {t("paragraph2")}
            </p>

            {/* Scoreboard stat blocks */}
            <dl className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="border-2 border-[var(--color-text-strong)] bg-[var(--color-bg-alt)]"
                >
                  <div className="h-2 bg-[var(--color-atlas)]" />
                  <div className="px-4 py-4 md:px-5 md:py-5">
                    <dt
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-3xl text-[var(--color-text)] md:text-5xl"
                    >
                      {s.value}
                    </dt>
                    <dd
                      className="mt-2 text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--color-text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {s.label}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Polaroid photo strip */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {polaroids.map((p, i) => (
            <figure
              key={p.roll}
              className="group relative bg-[var(--color-sand)] p-3 pb-12 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[var(--shadow-lift)]"
              style={{ transform: `rotate(${TILTS[i]}deg)` }}
            >
              <span
                aria-hidden
                className="absolute -top-2 -right-2 z-10 inline-flex rotate-6 bg-[var(--color-atlas)] px-2 py-1 text-[9px] font-bold tracking-[0.18em] uppercase text-[var(--color-cream)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {p.roll}
              </span>

              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-navy)]">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <figcaption
                className="absolute bottom-3 left-4 right-4 text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-text)]/80"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                &ndash; {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
