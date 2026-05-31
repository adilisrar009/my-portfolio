import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useLenis } from "@/hooks/use-lenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adil Israr — Front-End & Shopify Developer" },
      { name: "description", content: "Adil Israr is a front-end and Shopify developer from Chakwal, Pakistan, crafting responsive, conversion-focused web experiences." },
      { property: "og:title", content: "Adil Israr — Front-End & Shopify Developer" },
      { property: "og:description", content: "Portfolio of Adil Israr — responsive web interfaces, Shopify themes, and pixel-perfect front-end development." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  useLenis();
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
