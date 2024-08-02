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
import BlogSection from "@/components/BlogSection";
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
      <div className="">
        <MainNavbar />
      </div>
      <section id="home-me">
        <HeroSection />
      </section>
      <section id="about-me">
        <AboutSection />
      </section>
      <section id="education-me">
        <EducationSection />
      </section>
      <section id="gallery-me">
        <GallerySection />
      </section>
      <section id="contact-me">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
