import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 z-0 cyber-grid-bg opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#0a1628]/90 via-background/80 to-background"
          aria-hidden
        />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;
