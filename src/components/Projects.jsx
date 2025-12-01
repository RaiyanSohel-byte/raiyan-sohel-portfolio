import React from "react";
import SpotlightCard from "./SpotlightCard";
import rentWheels from "../assets/rentWheels.png";
import prodexa from "../assets/prodexa.png";
import skillSwap from "../assets/skillSwap.png";
const projects = [
  {
    name: "RentWheels",
    image: rentWheels,
    details:
      "Rent Wheels – A modern car rental web application where users can browse, search, and book cars easily. Built with React, Tailwind CSS, Node.js, Express, MongoDB, and Firebase.",
    techs: ["React.js", "Node.js", "Express.js", "Mongo DB", "Firebase Auth"],
    live: "https://stirring-gingersnap-70f67e.netlify.app/",
    gitHub: "https://github.com/RaiyanSohel-byte/rent-wheels-client",
  },
  {
    name: "Prodexa",
    image: prodexa,
    details:
      "Prodexa is a scalable full-stack product and inventory platform offering product creation, categorization, search, secure authentication, and a modern, clean UI/UX.",
    techs: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "Firebase Auth",
    ],
    live: "https://prodexa-client-nine.vercel.app/",
    gitHub: "https://github.com/RaiyanSohel-byte/prodexa-client",
  },
  {
    name: "SkillSwap",
    image: skillSwap,
    details:
      "SkillSwap is an interactive platform for learning, teaching, and exchanging skills, featuring secure authentication, dynamic routing, responsive design, built with React and Firebase.",
    techs: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "Firebase Auth",
    ],
    live: "https://magenta-ganache-45c5e3.netlify.app/",
    gitHub: "https://github.com/RaiyanSohel-byte/skill-swap-client",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-7xl relative w-full py-24 mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 z-0 dark:block" />
      <div className="absolute inset-0  dark:hidden" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#004f5e]/40 to-transparent" />
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-8">
        My{" "}
        <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {" "}
        {projects.map((project, i) => (
          <SpotlightCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
