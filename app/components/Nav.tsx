"use client";

import { useEffect, useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitcher } from "./LangSwitcher";
import { site } from "../lib/site";

const NAV_ITEMS = [
  { href: "#about", key: "about" as const },
  { href: "#tournament", key: "tournament" as const },
  { href: "#story", key: "story" as const },
  { href: "#sponsors", key: "sponsors" as const },
];

export function Nav() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  useEffect(() => {
    const getHeroHeight = () => {
      const hero = document.getElementById("home");
      return hero ? hero.offsetHeight : window.innerHeight;
    };
    let heroHeight = getHeroHeight();
    const onScroll = () => setVisible(window.scrollY > heroHeight - 80);
    const onResize = () => {
      heroHeight = getHeroHeight();
      onScroll();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!visible && open) setOpen(false);
  }, [visible, open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-transform duration-300 ease-out",
          visible ? "translate-y-0" : "-translate-y-full",
        ].join(" ")}
        aria-hidden={!visible}
        inert={!visible}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            className="flex items-center gap-2 text-[var(--color-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-atlas)] rounded-md"
            aria-label={tCommon("homeAria")}
          >
            <Logo />
          </a>

          <nav
            className="hidden md:flex items-center gap-5"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-[var(--color-text)]/80 hover:text-[var(--color-atlas)] transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <LangSwitcher />
            <ThemeToggle />
            <a href="#register" className="btn-primary text-xs">
              {t("register")}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-atlas)]"
              aria-label={tCommon("openMenu")}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-[60] md:hidden bg-[var(--color-navy)] text-[var(--color-cream)] transition-opacity duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="zellige-strong absolute inset-0 opacity-50 text-[var(--color-cream)]" />
        <div className="relative flex h-full flex-col">
          <div className="container-page flex h-16 items-center justify-between">
            <span className="text-[var(--color-cream)]">
              <Logo />
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-cream)]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ochre)]"
              aria-label={tCommon("closeMenu")}
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav
            className="container-page flex flex-1 flex-col justify-center gap-2 pb-20"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-display)" }}
                className="block text-4xl text-[var(--color-cream)] transition-colors hover:text-[var(--color-atlas-light)] md:text-5xl"
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 block text-4xl text-[var(--color-atlas-light)] md:text-5xl"
            >
              {t("register")}
            </a>

            <div className="mt-12 flex items-center gap-3">
              <LangSwitcher className="text-[var(--color-cream)]" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-cream)]/30 hover:bg-[var(--color-cream)]/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-cream)]/30 hover:bg-[var(--color-cream)]/10"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
