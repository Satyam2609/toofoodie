import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { About, Services, Testimonials } from "@/components/AboutServices";
import { Contact, Footer } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
