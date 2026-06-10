import {
  Swords,
  Trophy,
  Activity,
  Medal,
  Users,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type FeatureDef = {
  key: 1 | 2 | 3 | 4 | 5 | 6;
  icon: LucideIcon;
  comingSoon?: boolean;
};

const FEATURES: FeatureDef[] = [
  { key: 1, icon: Swords },
  { key: 2, icon: Trophy, comingSoon: true },
  { key: 3, icon: Activity, comingSoon: true },
  { key: 4, icon: Medal },
  { key: 5, icon: Users },
  { key: 6, icon: Globe },
];

export function Tournament() {
  const t = useTranslations("tournament");

  return (
    <section
      id="tournament"
      className="section-pad relative bg-[var(--color-bg-alt)] text-[var(--color-text)]"
    >
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
          >
            02
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const num = String(i + 1).padStart(2, "0");
            const title = t(`f${f.key}Title` as const);
            const body = t(`f${f.key}Body` as const);
            return (
              <article
                key={f.key}
                className="group relative overflow-hidden border-2 border-[var(--color-text-strong)] bg-[var(--color-card)] p-7 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-atlas)]"
              >
                {/* Jersey number watermark */}
                <span
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-display)",
                    WebkitTextStroke: "1.5px rgba(196,42,45,0.18)",
                    color: "transparent",
                  }}
                  className="pointer-events-none absolute -right-3 -top-6 select-none text-[8rem] leading-none"
                >
                  {num}
                </span>

                {/* Top hair-line in atlas */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-atlas)] transition-all duration-200 group-hover:h-2"
                />

                <div className="relative flex h-11 w-11 items-center justify-center bg-[var(--color-atlas)] text-[var(--color-cream)]">
                  <Icon size={20} strokeWidth={2.25} />
                </div>

                <p
                  className="relative mt-5 text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-atlas)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("featureLabel")} {num}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="relative mt-1 text-3xl tracking-wider"
                >
                  {title}
                </h3>
                <p
                  className={[
                    "relative mt-3 text-[15px] leading-relaxed",
                    f.comingSoon
                      ? "italic text-[var(--color-text)]/55"
                      : "text-[var(--color-text)]/75",
                  ].join(" ")}
                >
                  {body}
                </p>

                {f.comingSoon && (
                  <span
                    aria-label={t("comingSoon")}
                    className="pointer-events-none absolute right-[-58px] top-6 z-10 w-[200px] rotate-45 bg-[var(--color-ink)] py-1 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-atlas)] shadow-md"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("comingSoon")}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
