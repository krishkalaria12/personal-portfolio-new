"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  link: string;
}

interface ThreeDCardDemoProps {
  courseData: Course[];
  className: string;
}

export function ThreeDCardDemo({ courseData, className }: ThreeDCardDemoProps) {
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
            {courseData.map((course) => (
                <CardContainer key={course.id} className="inter-var m-4">
                <CardBody className="relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-200 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={course.image}
                      height={100}
                      width={100}
                      className="h-60 w-full pointer-events-none object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <Link href={course.github}>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            <FaGithub className="w-10 h-10 text-white" />
                        </CardItem>
                    </Link>
                    <Link href={course.link}>
                        <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                        >
                        Visit Now
                        </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
  );
}
