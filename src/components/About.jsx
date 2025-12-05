import { motion } from "framer-motion";

import { FiUser } from "react-icons/fi";
import ShimmerButton from "./ShimmerButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative max-w-7xl w-full py-24 mx-auto overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 z-0 dark:block" />
      <div className="absolute inset-0  dark:hidden" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#004f5e]/40 to-transparent" />

      <div className="max-w-7xl relative z-10 mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex-1 flex justify-center"
        >
          <div className="relative w-72  md:w-[500px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/40 dark:border-neutral-800/60 bg-neutral-800/40 dark:bg-neutral-900/40 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About me image"
              fill
              className="object-cover md:h-[450px]"
            />
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 w-72 h-20 blur-3xl bg-[#004f5e]/30 rounded-full opacity-60" />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiUser
              size={32}
              className="text-xl text-[#004f5e] dark:text-[#004f5e]"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              About{" "}
              <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400">
                Me
              </span>
            </h2>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg mb-6">
            I’m a <span className="font-bold">MERN-Stack</span> developer whose
            journey began with small web experiments and gradually grew into a
            strong passion for building modern, visually engaging, and
            high-performance digital experiences. I enjoy crafting clean
            interfaces, smooth animations, and scalable backend systems that
            turn ideas into reliable, user-focused products.
          </p>

          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg mb-8">
            I’m driven by curiosity, problem-solving, and the excitement of
            learning new technologies. Projects that blend creativity with
            technical depth are where I feel most at home. Outside of coding, I
            stay inspired through activities like sports, traveling, and
            creative interests such as drawing and music each adding a fresh
            perspective to my work and personal growth.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#contact" className="text-center">
              <button className="px-6 py-2  text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                Contact Me
              </button>
            </a>{" "}
            <ShimmerButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
