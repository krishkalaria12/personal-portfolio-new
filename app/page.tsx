"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SpotlightPreview from "@/Pages/SpolightSection";
import ProjectSection from "@/Pages/ProjectSection";
import ContactSection from "@/Pages/ContactSection";
import SkillsSection from "@/Pages/SkillsSection";
import AboutSection from "@/Pages/AboutSection"

export default function Home() {
  return (
    <TracingBeam className="">
      <SpotlightPreview />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </TracingBeam>
  );
}
