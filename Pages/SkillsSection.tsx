"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import SkillCard from "@/components/skills/skillCard";
import {images} from "../data/images"

interface Skill {
  title: string;
  image: any;
}

const skillsData: Skill[] = [
  { title: 'JavaScript', image: images.JS },
  { title: 'TypeScript', image: images.TypeScript },
  { title: 'HTML', image: images.HTML },
  { title: 'CSS', image: images.CSS },
  { title: 'Tailwind CSS', image: images.Tailwind },
  { title: 'React', image: images.React },
  { title: 'Next JS', image: images.Next },
  { title: 'MYSql', image: images.MYSql },
  { title: 'MongoDB', image: images.MongoDB },
  { title: 'Node JS', image: images.Node },
  { title: 'Express JS', image: images.Express },
  { title: 'Appwrite', image: images.Appwrite },
  { title: 'Supabase', image: images.Supabase },
  { title: 'Vercel', image: images.vercel },
  { title: 'Git', image: images.git },
  
];

function SkillsSection() {
  return (
    <div className="py-10 mb-6 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div>
      <h1 className="md:text-4xl text-6xl mt-6 lg:text-8xl font-bold text-center text-white relative z-20">
        Skills
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      </div>
      <div className="items-center w-full justify-center sm:grid-cols-3 grid-cols-2  grid md:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
