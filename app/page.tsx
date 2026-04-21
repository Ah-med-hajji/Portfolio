import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import DevOps from "@/components/DevOps";
import AIExpertise from "@/components/AIExpertise";
import BookCall from "@/components/BookCall";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Projects />
        <Testimonials />
        <DevOps />
        <AIExpertise />
        <BookCall />
        <Stack />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
