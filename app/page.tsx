import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import DevOps from "@/components/DevOps";
import AIExpertise from "@/components/AIExpertise";
import BookCall from "@/components/BookCall";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <DevOps />
        <AIExpertise />
        <BookCall />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
