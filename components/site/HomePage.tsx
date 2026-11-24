import type { Content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Training from "@/components/Training";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage({ c }: { c: Content }) {
  return (
    <>
      <Navbar altHref={c.ALT_LANG.home} />
      <main>
        <Hero c={c} />
        <Projects c={c} />
        <Experience c={c} />
        <Training c={c} />
        <Services c={c} />
        <Skills c={c} />
        <About c={c} />
        <Contact />
      </main>
      <Footer c={c} />
    </>
  );
}
