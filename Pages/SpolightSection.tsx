import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 items-center justify-around p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div>
        <h1 className="text-3xl md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-blue-500 md:text-5xl text-6xl dark:text-blue-500">
            Krish Kalaria
          </span>
          <br />
          <TypeAnimation
                sequence={[
                    'Web Developer',
                    1000,
                    'JavaScript',
                    1000,
                    'TypeScript',
                    1000,
                    'React JS',
                    1000,
                    'Next JS',
                    1000,
                    'Tailwind CSS',
                    1000,
                    'Node JS',
                    1000,
                    'Express JS',
                    1000,
                    'MongoDB',
                    1000,
                    'MySQL',
                    1000,
                    'Mongooses',
                    1000,
                ]}
                speed={50}
                className="text-bg-500 text-3xl font-semibold"
                repeat={Infinity}
                />
        </h1>
        {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl">
          Trying to make &apos;Hello World&apos; the new &apos;abc&apos; I am currently pursuing my
          Computer Science Engineering at VIT, Chennai. Technology excites me
          and I am always in awe of the change it drives in the world. Certain
          skills that I have worked with include Full Stack Web Development
          (Frontend , Backend , API , Database), . And what I might lack in
          skills I make up for with my determination to learn. Outside of tech,
          I am a tea lover, sports enthusiast and have spent my college days
          exploring and networking with different people. If you&apos;re looking for
          a dedicated Full Stack Web Developer with a proven track record of
          delivering top-notch applications, I would love to connect and discuss
          how I can contribute to your team&apos;s success. Feel free to reach out
          and let&apos;s create something amazing together!
        </p> */}
        <div className="flex flex-col space-y-2 mt-6">
          <div className="flex items-center gap-x-4 justify-between">
            <a className="w-full" href="https://www.linkedin.com/in/krish-kalaria/" target="_blank">
              <Button className="w-full">
                <LinkedInLogoIcon className="mr-2" /> LinkedIn
              </Button>
            </a>
            <a className="w-full" href="https://github.com/krishkalaria12" target="_blank">
              <Button className="w-full" variant={"outline"}>
                <GitHubLogoIcon className="mr-2" /> Github
              </Button>
            </a>
          </div>
        </div>
        </div>
        <div>
          <Image src={"/IMG_1359-01-01.jpeg"} className="pointer-events-none w-full h-[300px] md:w-[400px] md:h-[500px]" width={400} height={500} alt="Profile Photo" />
        </div>
      </div>
    </div>
  );
}
