import React from "react";
import SpotlightCard from "./SpotlightCard";

const Projects = ({ projects }) => {
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
