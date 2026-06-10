import { Instagram, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "../lib/site";

export function Contact() {
  const t = useTranslations("contact");

  const cards = [
    {
      icon: Instagram,
      eyebrow: t("c1Eyebrow"),
      title: site.instagramHandle,
      body: t("c1Body"),
      action: { label: t("c1Cta"), href: site.instagram },
      tilt: -1.5,
    },
    {
      icon: Linkedin,
      eyebrow: t("c2Eyebrow"),
      title: t("c2Title"),
      body: t("c2Body"),
      action: { label: t("c2Cta"), href: site.linkedin },
      tilt: 1.2,
    },
    {
      icon: MapPin,
      eyebrow: t("c3Eyebrow"),
      title: t("c3Title"),
      body: t("c3Body"),
      action: {
        label: t("c3Cta"),
        href: `mailto:${site.email}?subject=${encodeURIComponent(t("emailSubjectHost"))}`,
      },
      tilt: -0.8,
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad relative bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden
            className="section-number absolute -top-12 end-0 select-none md:-top-20"
          >
            07
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

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isExternal = c.action.href.startsWith("http");
            return (
              <li key={i} style={{ transform: `rotate(${c.tilt}deg)` }}>
                <a
                  href={c.action.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  className="group block h-full overflow-hidden border-2 border-[var(--color-text-strong)] bg-[var(--color-bg-alt)] shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="flex items-center justify-between bg-[var(--color-atlas)] px-5 py-3 text-[var(--color-cream)]">
                    <span
                      style={{ fontFamily: "var(--font-mono)" }}
                      className="text-[10px] font-bold tracking-[0.22em] uppercase"
                    >
                      {c.eyebrow}
                    </span>
                    <Icon size={16} className="text-[var(--color-cream)]" />
                  </div>

                  <div className="flex h-full flex-col gap-4 p-6 pb-7 md:p-7">
                    <h3
                      style={{ fontFamily: "var(--font-display)" }}
                      className="break-words text-2xl tracking-wider text-[var(--color-text)] sm:text-3xl md:text-4xl"
                    >
                      {c.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[var(--color-text)]/75">
                      {c.body}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[var(--color-atlas)] transition-transform group-hover:translate-x-0.5">
                      {c.action.label}
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
