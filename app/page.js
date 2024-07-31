// import AboutSection from "@/components/AboutSection";
// import ContactSection from "@/components/ContactSection";
// import EducationSection from "@/components/EducationSection";
// import GallerySection from "@/components/GallerySection";
// import HeroSection from "@/components/HeroSection";

// export default function Home() {
//   return (
//     <main className="w-full">
//       <HeroSection />
//       <AboutSection />
//       <EducationSection />
//       <GallerySection />
//       <ContactSection />
//     </main>
//   );
// }

"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import MainNavbar from "@/components/MainNavbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <>
      <MainNavbar />
      <section id="home-me" style={{ height: "100vh" }}>
        <HeroSection />
      </section>
      <section id="about-me" style={{ height: "100vh" }}>
        <AboutSection />
      </section>
      <section id="education-me" style={{ height: "100vh" }}>
        <EducationSection />
      </section>
      <section id="gallery-me" style={{ height: "100vh" }}>
        <GallerySection />
      </section>
      <section id="contact-me" style={{ height: "100vh" }}>
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
