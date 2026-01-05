import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import me from "../assets/me.png";
import TypewriterView from "./TypewriterView";

// Icons
import {
  RiJavascriptFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaNodeJs, FaReact, FaGithub, FaLinkedin } from "react-icons/fa"; // Simplified imports
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return <PortfolioHero />;
}

const PortfolioHero = () => {
  const { theme } = useTheme();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative mt-7 w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] px-6 lg:px-12 pt-20 pb-12">
      {/* --- Background Elements --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Gradient Orbs (Glow effects) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 dark:bg-cyan-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Text Content --- */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
          >
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
              <TypewriterView />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            A passionate{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              MERN Stack Developer
            </span>{" "}
            crafting scalable full-stack applications. I build accessible,
            pixel-perfect, and performant web experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://linkedin.com/in/raiyan-sohel"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/raiyan-sohel"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-md shadow-lg cursor-pointer hover:shadow-xl transition-all"
                >
                  Hire Me
                </motion.button>
              </a>
            </a>
            <a
              href="https://drive.google.com/file/d/1aDC3UGUeLxYG1FIWLC7bJFJ8y6lxT3KF/view?usp=sharing"
              target="_blank"
            >
              <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                Resume
              </button>
            </a>
          </motion.div>

          {/* Tech Stack Strip */}
          <motion.div variants={itemVariants} className="mt-10 lg:mt-7 w-full">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-black dark:text-gray-400">
              <TechIcon Icon={RiJavascriptFill} color="hover:text-yellow-400" />
              <TechIcon Icon={FaReact} color="hover:text-cyan-400" />
              <TechIcon
                Icon={RiNextjsLine}
                color="hover:text-black dark:hover:text-white"
              />
              <TechIcon Icon={FaNodeJs} color="hover:text-green-500" />
              <TechIcon
                Icon={SiExpress}
                color="hover:text-gray-600 dark:hover:text-gray-300"
              />
              <TechIcon Icon={SiMongodb} color="hover:text-green-600" />
              <TechIcon Icon={RiTailwindCssFill} color="hover:text-cyan-500" />
            </div>
          </motion.div>
          {/* Socials (Desktop Layout) */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-6 text-gray-500 dark:text-gray-400"
          >
            <SocialLink
              href="https://linkedin.com/in/raiyan-sohel"
              Icon={FaLinkedin}
            />
            <SocialLink
              href="https://github.com/RaiyanSohel-byte"
              Icon={FaGithub}
            />
            <SocialLink href="https://x.com/RaiyanSohel1" Icon={FaXTwitter} />
          </motion.div>
        </div>

        {/* --- Image Section --- */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Ring behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-[2rem] rotate-6 opacity-30 blur-2xl dark:opacity-40"></div>

          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-gray-100 dark:bg-gray-800">
            <img
              src={me}
              alt="Raiyan Sohel"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x400/1a1a1a/FFFFFF?text=Avatar";
              }}
            />
          </div>

          {/* Floating Card Element (Optional detail) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3"
          >
            <div className="bg-blue-50 dark:bg-green-900/30 p-2 rounded-full text-[#377cc8]">
              <SiTypescript size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Latest Focus
              </p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Typescript
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Reusable Components for cleanliness
const TechIcon = ({ Icon, color }) => (
  <div
    className={`p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300 ${color} cursor-pointer group`}
  >
    <Icon className="text-2xl group-hover:scale-110 transition-transform" />
  </div>
);

const SocialLink = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    <Icon className="text-2xl" />
  </a>
);
