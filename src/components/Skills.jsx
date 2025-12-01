import React, { useEffect, useState, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  SiHtml5 as HtmlIconCard,
  SiCss3 as CssIconCard,
  SiJavascript as JsIconCard,
  SiReact as ReactIconCard,
  SiNextdotjs as NextIconCard,
  SiNodedotjs as NodeIconCard,
  SiTailwindcss as TailwindIconCard,
  SiMongodb as MongoIconCard,
  SiExpress as ExpressIconCard,
  SiGit as GitIconCard,
  SiFigma as FigmaIconCard,
  SiGithub as GithubIconCard,
  SiVercel as VercelIconCard,
} from "react-icons/si";
import { BiLogoVisualStudio as VSCodeIconCard } from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
const iconMap = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  express: SiExpress,
};
const skillCardIcons = {
  HTML5: { icon: HtmlIconCard, color: "#E34F26" },
  CSS3: { icon: CssIconCard, color: "#1572B6" },
  JavaScript: { icon: JsIconCard, color: "#F7DF1E" },
  React: { icon: ReactIconCard, color: "#61DAFB" },
  "Next.js": { icon: NextIconCard, color: "#000000" },
  "Node.js": { icon: NodeIconCard, color: "#339933" },
  "Tailwind CSS": { icon: TailwindIconCard, color: "#06B6D4" },
  MongoDB: { icon: MongoIconCard, color: "#47A248" },
  "Express.js": { icon: ExpressIconCard, color: "#000000" },
  Git: { icon: GitIconCard, color: "#F05032" },
  GitHub: { icon: GithubIconCard, color: "#181717" },
  "VS Code": { icon: VSCodeIconCard, color: "#007ACC" },
  Figma: { icon: FigmaIconCard, color: "#F24E1E" },
  Vercel: { icon: VercelIconCard, color: "#000000" },
};
// Data Categories for the Grid View
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Figma", "Netlify", "Vercel", "NPM"],
  },
];

const SkillIcon = memo(({ type, className }) => {
  const Icon = iconMap[type];
  if (!Icon) return null;
  return <Icon className={className} />;
});
const OrbitingSkill = memo(({ config, angle, containerSize }) => {
  const [hovered, setHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  // Calculate responsive radius based on container size (approx logic)
  const responsiveRadius = (orbitRadius / 250) * (containerSize / 2);

  const x = Math.cos(angle) * responsiveRadius;
  const y = Math.sin(angle) * responsiveRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-0 ease-linear will-change-transform"
      style={{
        width: size,
        height: size,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: hovered ? 50 : 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
          hovered
            ? "scale-125 shadow-2xl bg-gray-800"
            : "bg-black/80 shadow-lg hover:shadow-cyan-500/50"
        }`}
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <SkillIcon type={iconType} className="w-full h-full text-white" />

        {/* Tooltip */}
        <div
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-[10px] font-medium text-white whitespace-nowrap transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
});

const GlowingOrbitPath = memo(
  ({ radius, containerSize, glowColor = "cyan" }) => {
    // Responsive radius calculation
    const responsiveRadius = (radius / 250) * (containerSize / 2);

    const colors = {
      cyan: "text-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]",
      purple: "text-purple-500/20 shadow-[0_0_20px_rgba(147,51,234,0.1)]",
    }[glowColor];

    return (
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current ${colors}`}
        style={{
          width: responsiveRadius * 2,
          height: responsiveRadius * 2,
        }}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function SkillsSection() {
  const [time, setTime] = useState(0);
  const [containerSize, setContainerSize] = useState(400); // Default size

  // Responsive container sizing
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 40, 500); // Max 500px, 20px padding
      setContainerSize(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation Loop
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setTime((prev) => prev + 0.005); // Smoother, frame-rate independent increment could be better, but keeping simple
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const orbitConfigs = [
    { radius: 140, glowColor: "cyan" },
    { radius: 220, glowColor: "purple" },
  ];

  const skillsConfig = useMemo(
    () => [
      // Inner Orbit (HTML/CSS/JS)
      {
        id: "html",
        orbitRadius: 140,
        size: 40,
        speed: 1.5,
        iconType: "html",
        phaseShift: 0,
        label: "HTML5",
      },
      {
        id: "css",
        orbitRadius: 140,
        size: 40,
        speed: 1.5,
        iconType: "css",
        phaseShift: (2 * Math.PI) / 3,
        label: "CSS3",
      },
      {
        id: "js",
        orbitRadius: 140,
        size: 40,
        speed: 1.5,
        iconType: "javascript",
        phaseShift: (4 * Math.PI) / 3,
        label: "JavaScript",
      },

      // Outer Orbit (Frameworks & Backend)
      {
        id: "react",
        orbitRadius: 220,
        size: 50,
        speed: -1,
        iconType: "react",
        phaseShift: 0,
        label: "React",
      },
      {
        id: "next",
        orbitRadius: 220,
        size: 45,
        speed: -1,
        iconType: "next",
        phaseShift: 1,
        label: "Next.js",
      },
      {
        id: "node",
        orbitRadius: 220,
        size: 45,
        speed: -1,
        iconType: "node",
        phaseShift: 2,
        label: "Node.js",
      },
      {
        id: "tailwind",
        orbitRadius: 220,
        size: 40,
        speed: -1,
        iconType: "tailwind",
        phaseShift: 3,
        label: "Tailwind",
      },
      {
        id: "mongo",
        orbitRadius: 220,
        size: 40,
        speed: -1,
        iconType: "mongodb",
        phaseShift: 4,
        label: "MongoDB",
      },
      {
        id: "express",
        orbitRadius: 220,
        size: 40,
        speed: -1,
        iconType: "express",
        phaseShift: 5,
        label: "Express",
      },
    ],
    []
  );

  return (
    <section
      id="skills"
      className="relative max-w-7xl w-full py-20 mx-auto overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 z-0" />
      <div className="absolute top-0 left-0 w-full mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section: Context & Grid (For readability) */}
        <div className="flex-1 w-full max-w-xl order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              My{" "}
              <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-500 ">
                Tech Stack
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              I specialize in building robust, scalable web applications. From
              pixel-perfect frontends to powerful backend systems, here are the
              tools I use to bring ideas to life.
            </p>

            {/* Categorized Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 dark:bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl hover:border-cyan-500/30 transition-colors"
                >
                  <h3 className="text-black dark:text-white font-semibold mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      const IconData = skillCardIcons[skill];
                      if (!IconData) return null;
                      const { icon: Icon, color } = IconData;
                      return (
                        <span
                          key={skill}
                          className="flex items-center gap-2 px-3 py-1 text-xs md:text-sm rounded-md border border-neutral-700 dark:border-neutral-600 transition-colors"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                          }}
                        >
                          <Icon
                            style={{
                              color,
                              minWidth: "20px",
                              minHeight: "20px",
                            }}
                          />
                          <span className="text-gray-700 dark:text-gray-200">
                            {skill}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Section: The Orbit Animation (Visual Hook) */}
        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] z-20" />

            {/* Orbit Paths */}
            {orbitConfigs.map((config, i) => (
              <GlowingOrbitPath
                key={i}
                radius={config.radius}
                glowColor={config.glowColor}
                containerSize={containerSize}
              />
            ))}

            {/* Orbiting Skills */}
            {skillsConfig.map((config) => {
              const angle = time * config.speed + config.phaseShift;
              return (
                <OrbitingSkill
                  key={config.id}
                  config={config}
                  angle={angle}
                  containerSize={containerSize}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
