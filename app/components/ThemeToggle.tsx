"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

type Theme = "light" | "dark";
const KEY = "mck-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(KEY) as Theme | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("common");

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(KEY, theme);
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t("openLightMode") : t("openDarkMode")}
      aria-pressed={isDark}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-current transition-colors hover:bg-current/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-atlas)]",
        className,
      ].join(" ")}
    >
      {/* Show the icon you'd switch TO: Moon in light, Sun in dark.
         Renders Moon by default on SSR so first paint is stable. */}
      <Moon
        size={18}
        className={mounted && isDark ? "hidden" : "block"}
        aria-hidden
      />
      <Sun
        size={18}
        className={mounted && isDark ? "block" : "hidden"}
        aria-hidden
      />
    </button>
  );
}
