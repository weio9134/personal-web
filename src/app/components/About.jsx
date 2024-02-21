"use client";
import React, { useTransition, useState } from "react";
import Tab from "./Tab";
import Image from "next/image";
import Shapes from "./Shapes.jsx"

const sections = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li> Java </li>
        <li> Python </li>
        <li> React </li>
        <li> NextJS </li>
        <li> Tailwind CSS </li>
        <li> Git </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> 
          Cornell University, 2026 
          <ul className="list-disc pl-2">
            <li> College of Engineering, Dean's List </li>
          </ul>
        </li>
      </ul>
    ),
  },
  // {
  //   title: "Activities",
  //   id: "activities",
  //   content: (
  //     <ul className="list-disc pl-2">
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 items-center px-4 md:gap-10 sm:py-16 xl:px-16">
        <h2 className="md:col-span-2 text-4xl font-bold text-white mb-4"> About Me </h2>
        <div className="w-full h-full mt-0 pt-0">
          <Shapes />
        </div>

        <div className="w-full h-full md:col-start-2">
          <div className="text-left flex flex-col h-full place-self-center">
            <p className="text-base lg:text-lg">
              I'm a current Cornell student with a passion for web development and ML. 
              I'm a quick learner and always looking for ways to expand my knowledge and skill set. 
              I am a team player, always excited to work with others to create amazing applications!
            </p>
            <div className="flex flex-row justify-start mt-8">
              {sections?.map(elem => (
                <Tab 
                  selectTab={() => setTab(elem.id)}
                  active={tab == elem.id}
                  text={elem.title}
                  key={elem.id}
                />
              ))}
            </div>
            <div className="mt-8">
              {sections.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;