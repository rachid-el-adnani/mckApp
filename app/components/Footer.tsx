import { Instagram, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { site } from "../lib/site";

const NAV_ITEMS = [
  { href: "#about", key: "about" as const },
  { href: "#tournament", key: "tournament" as const },
  { href: "#story", key: "story" as const },
  { href: "#sponsors", key: "sponsors" as const },
  { href: "#register", key: "register" as const },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-cream)]">
      {/* Top ticker strip */}
      <div
        aria-hidden
        className="overflow-hidden border-b border-[var(--color-cream)]/10 bg-[var(--color-atlas)] py-3"
      >
        <div className="flex w-max animate-marquee">
          {Array.from({ length: 2 }).map((_, copy) => (
            <span
              key={copy}
              style={{ fontFamily: "var(--font-mono)" }}
              className="block whitespace-nowrap text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-cream)]"
            >
              {Array.from({ length: 8 }).map(() => t("ticker")).join("")}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[var(--color-cream)]">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-cream)]/70">
              {t("description")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-cream)]/20 transition-colors hover:bg-[var(--color-cream)]/10 hover:text-[var(--color-atlas-light)]"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-cream)]/20 transition-colors hover:bg-[var(--color-cream)]/10 hover:text-[var(--color-atlas-light)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-cream)]/20 transition-colors hover:bg-[var(--color-cream)]/10 hover:text-[var(--color-atlas-light)]"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-ochre)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &#9670; {t("exploreEyebrow")}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[var(--color-cream)]/85 hover:text-[var(--color-atlas-light)] transition-colors"
                  >
                    {tNav(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-ochre)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &#9670; {t("contactEyebrow")}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--color-cream)]/85 hover:text-[var(--color-atlas-light)] transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--color-cream)]/85 hover:text-[var(--color-atlas-light)] transition-colors"
                >
                  {t("instagramLine", { handle: site.instagramHandle })}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--color-cream)]/85 hover:text-[var(--color-atlas-light)] transition-colors"
                >
                  {t("linkedinLine")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Slogan rule */}
        <div className="mt-12 h-[2px] w-full bg-[var(--color-atlas)]" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-[var(--color-cream)]/60 md:flex-row md:items-center md:justify-between">
          <p style={{ fontFamily: "var(--font-mono)" }}>
            {t("copyright", { year })}
          </p>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl tracking-[0.12em] text-[var(--color-cream)] md:text-3xl"
          >
            {t("sloganA")} &middot;{" "}
            <span className="text-[var(--color-atlas-light)]">
              {t("sloganB")}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
