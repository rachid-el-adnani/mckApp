import { setRequestLocale } from "next-intl/server";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Tournament } from "../components/Tournament";
import { Story } from "../components/Story";
import { Champions } from "../components/Champions";
import { Sponsors } from "../components/Sponsors";
import { Register } from "../components/Register";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Tournament />
        <Story />
        <Champions />
        <Sponsors />
        <Register />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
