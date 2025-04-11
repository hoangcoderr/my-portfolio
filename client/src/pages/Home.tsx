import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Apply smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <HeroSection />
      <AnimatePresence>
        <motion.main 
          className="pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.main>
      </AnimatePresence>
      <BackToTop />
    </>
  );
}
