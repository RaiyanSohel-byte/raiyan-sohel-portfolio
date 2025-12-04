import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300 dark:border-neutral-800 bg-gray-100 dark:bg-gray-900 py-10 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* LOGO / NAME */}
        <div>
          <Logo />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            MERN-Stack Developer • Building modern digital experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-cyan-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-500 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-500 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-500 transition">
            Contact
          </a>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-6 text-2xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/RaiyanSohel-byte"
            target="_blank"
            className="hover:text-cyan-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raiyan-sohel/"
            target="_blank"
            className="hover:text-cyan-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/RaiyanSohel1"
            target="_blank"
            className="hover:text-cyan-500 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm mt-10 border-t border-neutral-300 dark:border-neutral-800 pt-5">
        © {new Date().getFullYear()} Raiyan Sohel. All rights reserved.
      </div>
    </footer>
  );
}
