import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
