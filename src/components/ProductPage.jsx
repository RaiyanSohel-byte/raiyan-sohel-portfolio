import { IoReturnUpBackOutline } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Added FaExternalLinkAlt for Live link
import { useLoaderData, useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
// Assume this is an array of technology strings, like ['React', 'Next.js', 'MongoDB']
// You would need to update your 'projects' data structure to include a 'technologies' array.
// const project = { ..., technologies: ['React', 'Next.js', 'Tailwind CSS'] }

const ProductPage = () => {
  const { id } = useParams();
  // Assume projects is loaded via useLoaderData
  const projects = useLoaderData();
  const project = projects.find((project) => project.id === parseInt(id));
  const navigate = useNavigate();

  // Define staggered animations for the right column content
  const contentVariants = {
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

  if (!project)
    return (
      <div className="py-24 min-h-screen text-center dark:bg-[#050505] dark:text-gray-100">
        <p className="text-xl">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 text-blue-500 hover:text-blue-700 transition"
        >
          Go back to portfolio
        </button>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-[#050505] dark:text-gray-100 min-h-screen"
    >
      <div className="py-24 transition-colors duration-300">
        {/* Main Content Grid */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left Column: Image + Back Button */}
          <motion.section
            className="space-y-4 relative order-2 lg:order-1"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Redesigned Back Button */}
            <motion.button
              onClick={() => navigate(-1)}
              className="cursor-pointer text-base font-semibold flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <IoReturnUpBackOutline className="text-2xl group-hover:scale-110 transition-transform" />
              Back to Portfolio
            </motion.button>

            {/* Image Container with Shadow/Glow */}
            <div className="aspect-[5/3] w-full rounded-3xl overflow-hidden relative shadow-2xl dark:shadow-cyan-500/10">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                loading="lazy"
              />
            </div>

            {/* Tech Stack Pills (Moved here for better visual balance on desktop) */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <TechPill key={index} name={tech} />
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Right Column: Project Info & Links */}
          <motion.section
            className="flex flex-col order-1 lg:order-2"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tighter mb-4"
            >
              <span className="">{project.name}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              {project.longDetails}
            </motion.p>

            {/* Technical Links - Redesigned as prominent Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-8"
            >
              <ProjectButton
                href={project.live}
                label="Live Demo"
                Icon={FaExternalLinkAlt}
                primary={true}
              />
              <ProjectButton
                href={project.gitHub}
                label="View Code"
                Icon={FaGithub}
                primary={false}
              />
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-cyan-500 pl-3">
                Key Features
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-base"
                    variants={itemVariants}
                  >
                    <svg
                      className="mt-1 w-4 h-4 text-cyan-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
};

export default ProductPage;

// --- Helper Components ---

/**
 * Pill component for displaying individual technologies.
 * @param {string} name - The name of the technology.
 */
const TechPill = ({ name }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
    {name}
  </span>
);

/**
 * Button component for Live Link and GitHub Repo.
 * @param {string} href - The link URL.
 * @param {string} label - The button text.
 * @param {React.Component} Icon - The icon component (FaGithub or FaExternalLinkAlt).
 * @param {boolean} primary - True for the main (Live Demo) button.
 */
const ProjectButton = ({ href, label, Icon, primary }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`
            flex items-center gap-2 px-6 py-2 font-semibold rounded-md transition-all shadow-md
            ${
              primary
                ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-500/50"
                : "bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            }
        `}
  >
    <Icon className="text-lg" />
    {label}
  </motion.a>
);
