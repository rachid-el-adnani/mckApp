import { Instagram, Eye, MessageSquareText, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { ZelligePattern } from "./ZelligePattern";
import { site } from "../lib/site";

const BULLETS = [
  { icon: Eye, key: "b1" as const },
  { icon: MessageSquareText, key: "b2" as const },
  { icon: MapPin, key: "b3" as const },
];

const STEPS = ["step1", "step2", "step3"] as const;

export function Register() {
  const t = useTranslations("register");

  return (
    <section
      id="register"
      className="relative isolate overflow-hidden bg-[var(--color-navy)] text-[var(--color-cream)]"
    >
      <div className="absolute inset-0 -z-10 opacity-40 text-[var(--color-cream)]">
        <ZelligePattern color="currentColor" opacity={0.14} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[55vmin] w-[55vmin] rounded-full bg-[var(--color-atlas)]/30 blur-[120px]"
      />

      <div className="container-page relative pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-10 end-0 select-none text-[var(--color-atlas)]/40 md:-top-16"
            style={{ WebkitTextStroke: "2px rgba(228,74,77,0.55)" }}
          >
            06
          </span>
        </div>

        <p className="section-tag text-[var(--color-ochre)]">{t("eyebrow")}</p>

        <div className="mt-6 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <h2 className="text-5xl leading-[0.9] text-[var(--color-cream)] md:text-7xl">
              {t("headlineA")}
              <br />
              <span className="text-[var(--color-atlas-light)]">
                {t("headlineB")}
              </span>
            </h2>
            <div className="mt-6 h-[3px] w-24 bg-[var(--color-atlas)]" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-cream)]/80">
              {t("intro")}
            </p>

            <ul className="mt-10 space-y-5">
              {BULLETS.map((b) => (
                <li key={b.key} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-atlas)]/15 text-[var(--color-atlas-light)]">
                    <b.icon size={18} />
                  </span>
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-2xl tracking-wider text-[var(--color-cream)]"
                    >
                      {t(`${b.key}Title` as const)}
                    </p>
                    <p className="text-sm text-[var(--color-cream)]/70">
                      {t(`${b.key}Body` as const)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: 3-step poster card */}
          <div className="md:col-span-6">
            <div className="relative border-2 border-[var(--color-cream)]/20 bg-[var(--color-navy-light)]/70 p-6 backdrop-blur md:p-8">
              {/* Stamp */}
              <div
                aria-hidden
                className="absolute -top-5 -right-5 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border-2 border-[var(--color-atlas-light)] bg-[var(--color-navy)] text-center shadow-[var(--shadow-card)]"
              >
                <div>
                  <p
                    className="text-[9px] font-bold tracking-[0.18em] text-[var(--color-atlas-light)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("stampOpen")}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-display)" }}
                    className="mt-0.5 text-2xl leading-none text-[var(--color-cream)]"
                  >
                    {t("stampHours")}
                  </p>
                </div>
              </div>

              <p
                className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-ochre)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                &#9670; {t("cardEyebrow")}
              </p>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-3 text-4xl leading-none text-[var(--color-cream)]"
              >
                {t("cardHeadlineA")} <br />
                <span className="text-[var(--color-atlas-light)]">
                  {t("cardHeadlineB")}
                </span>
              </h3>
              <div className="mt-3 h-[2px] w-12 bg-[var(--color-atlas)]" />

              <ol className="mt-8 space-y-6">
                {STEPS.map((stepKey, i) => (
                  <li
                    key={stepKey}
                    className="relative grid grid-cols-[auto_1fr] gap-5 pb-6"
                  >
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute start-[26px] top-[52px] bottom-0 w-[2px] bg-[var(--color-cream)]/15"
                      />
                    )}
                    <span
                      style={{ fontFamily: "var(--font-display)" }}
                      className="relative flex h-[52px] w-[52px] items-center justify-center bg-[var(--color-atlas)] text-2xl text-[var(--color-cream)]"
                    >
                      0{i + 1}
                    </span>
                    <div className="pt-1">
                      <p
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-2xl leading-none tracking-wider text-[var(--color-cream)]"
                      >
                        {t(`${stepKey}Title` as const)}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-cream)]/70">
                        {t(`${stepKey}Body` as const)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary mt-8 w-full justify-center"
              >
                <Instagram size={16} />
                {t("cta")}
              </a>

              <p className="mt-4 text-center text-[11px] tracking-[0.18em] uppercase text-[var(--color-cream)]/45">
                {site.instagramHandle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
