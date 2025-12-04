import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showWelcome && (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      )}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
