import { span } from "framer-motion/client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";
export default function SpotlightCard({ project }) {
  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        /* * Keyframes for the border animation.
         * We animate the --border-angle custom property from 0deg to 360deg.
         * This changing angle is used in the conic-gradient background of the card,
         * creating the effect of a rotating highlight.
        */
        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        /* * The .animate-border class applies the animation.
         * The animation 'border-spin' runs for 6 seconds, is linear, and repeats infinitely.
        */
        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>
      <div className="w-full flex items-center justify-center p-4">
        {}
        <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.teal.500)_86%,theme(colors.cyan.300)_90%,theme(colors.teal.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
          {}
          <div className="relative text-center z-10 py-6 rounded-2xl w-full bg-white dark:bg-black h-full mx-auto">
            {}
            <div className="px-4">
              {" "}
              <img
                src={project.image}
                alt=""
                className="h-[250px] w-full object-cover rounded-lg"
              />
            </div>
            <div className="px-5">
              <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white mt-5">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2 my-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full 
                      bg-cyan-50/30 text-gray-800 dark:text-gray-200
                      border border-cyan-300 dark:border-cyan-600
                      hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm mt-2 text-gray-600 dark:text-slate-400">
                {project.details}
              </p>

              {}
              <div className="flex flex-col gap-4 mt-8">
                {}
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <button className="flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-gray-100 dark:bg-slate-800/60 backdrop-blur-sm text-black dark:text-white rounded-lg border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700/60 transition-colors duration-300 cursor-pointer">
                    {}
                    <RiLiveLine /> Live Demo
                  </button>
                  {}{" "}
                </a>
                <a
                  href={project.gitHub}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <button className="flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-gray-100 dark:bg-slate-800/60 backdrop-blur-sm text-black dark:text-white rounded-lg border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700/60 transition-colors duration-300 cursor-pointer">
                    {}
                    <FaGithub /> GitHub Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
