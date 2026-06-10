"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "../../i18n/navigation";
import { routing, type Locale } from "../../i18n/routing";

const LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className = "" }: LangSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const tCommon = useTranslations("common");
  const [pending, startTransition] = useTransition();

  const onSelect = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label={tCommon("languageLabel")}
      className={[
        "inline-flex items-center rounded-full border border-current/20 p-0.5 text-current",
        pending ? "opacity-60" : "",
        className,
      ].join(" ")}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => onSelect(loc)}
            aria-pressed={active}
            className={[
              "rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors",
              active
                ? "bg-[var(--color-atlas)] text-[var(--color-cream)]"
                : "text-current/70 hover:text-current",
            ].join(" ")}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
}
