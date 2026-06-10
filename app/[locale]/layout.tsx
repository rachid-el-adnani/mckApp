import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Knewave } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-knewave",
  display: "swap",
});

const siteUrl = "https://moroccancourtkings.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MCK — 1v1 Basketball, Born in Marrakech",
    template: "%s · MCK",
  },
  description:
    "MCK (Moroccan Court Kings) — the first ever 1v1 basketball tournament in Morocco, and the first on the African continent. Built by players, for players.",
  keywords: [
    "MCK",
    "Moroccan Court Kings",
    "1v1 basketball Morocco",
    "Marrakech basketball tournament",
    "street basketball Africa",
    "African 1v1 tournament",
  ],
  authors: [{ name: "Moroccan Court Kings" }],
  creator: "Moroccan Court Kings",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "MCK — 1v1 Basketball, Born in Marrakech",
    description:
      "The first ever 1v1 basketball tournament in Morocco, and the first on the African continent.",
    siteName: "MCK",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCK — 1v1 Basketball, Born in Marrakech",
    description:
      "The first ever 1v1 basketball tournament in Morocco, and the first on the African continent.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4ede0" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1a2b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Moroccan Court Kings",
  alternateName: "MCK",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "The first ever 1v1 basketball tournament in Morocco, and the first on the African continent. Born in Marrakech, 2022.",
  foundingDate: "2022",
  foundingLocation: { "@type": "Place", name: "Morocco" },
  sport: "Basketball",
  sameAs: ["https://www.instagram.com/moroccancourtkings/"],
};

const themeScript = `(function(){try{var k='mck-theme';var s=localStorage.getItem(k);var t=s==='dark'||s==='light'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${bebas.variable} ${inter.variable} ${knewave.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[var(--color-atlas)] focus:px-4 focus:py-2 focus:text-[var(--color-cream)] focus:outline-none"
        >
          {tCommon("skipToContent")}
        </a>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
