import { IoReturnUpBackOutline } from "react-icons/io5";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find((project) => project.id === parseInt(id));
  const navigate = useNavigate();

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-24 min-h-screen transition-colors duration-300 text-gray-900 dark:bg-[#050505] dark:text-gray-100 font-sans">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left Column: Image + Go Back Button */}
          <motion.section
            className="space-y-4 relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer text-xl font-bold flex items-center gap-2 mb-8"
            >
              <IoReturnUpBackOutline /> Go Back
            </button>
            <div className="aspect-[5/3] w-full border border-gray-300 dark:border-gray-100 rounded-3xl overflow-hidden relative">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                loading="lazy"
              />
            </div>
          </motion.section>

          {/* Right Column: Product Info */}
          <motion.section
            className="flex flex-col pt-4 lg:pt-12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase tracking-wide mb-6">
              {project.name}
            </h1>

            <div className="space-y-8 text-gray-600 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-lg">
              <p>{project.longDetails}</p>

              {/* Technical Links */}
              <div className="space-y-2">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white underline"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white underline"
                  >
                    Github Repo
                  </a>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Features
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
};

export default ProductPage;
