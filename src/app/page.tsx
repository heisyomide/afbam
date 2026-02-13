import Hero from "./components/Hero";
import ServiceBar from "./components/ServiceBar";
import ServicesGrid from "./components/ServicesGrid";
import HiringSection from "./components/HiringSection";
import Footer from "./components/Footer";
import BodySections from "./components/BodySections"; // The Osogbo Intro
import SpannerBanner from "./components/SpannerBanner"; // The Tool Image
import AboutGallery from "./components/about"; // The 3-Column Team/Work section
import MaroonCTA from "./components/MaroonCTA"; // The "Contact Us" Maroon Bar
import Footers from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceBar />
      <BodySections />
      <SpannerBanner />
      <AboutGallery />
      <HiringSection />
      <MaroonCTA />
      <Footers />
    </main>
  );
}