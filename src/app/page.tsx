import { CTA } from "@/templates/CTA";
import { FAQ } from "@/templates/FAQ";
import { Features } from "@/templates/Features";
import { Footer } from "@/templates/Footer";
import { Hero } from "@/templates/Hero";
import { Navbar } from "@/templates/Navbar";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
