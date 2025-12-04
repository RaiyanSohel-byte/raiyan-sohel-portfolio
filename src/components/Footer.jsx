import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] pt-16 pb-8 overflow-hidden">
      {/* --- Background Elements (Consistent with Hero) --- */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Subtle Glow */}
      <div className="absolute -top-24 left-1/2 w-96 h-96 dark:bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Mission */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Logo /> {/* Assuming Logo handles its own sizing */}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm">
              Crafting robust MERN stack applications with a focus on
              scalability, performance, and clean design.
            </p>
            <div className="mt-8">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <HiOutlineMail className="text-xl" />
                <span>raiyansohel22@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Navigation
            </h4>
            <FooterLink href="#about">About Me</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#skills">Tech Stack</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>

          {/* Column 3: Socials & CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Connect
            </h4>
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/RaiyanSohel-byte"
                Icon={FaGithub}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/raiyan-sohel/"
                Icon={FaLinkedin}
              />
              <SocialIcon href="https://x.com/RaiyanSohel1" Icon={FaXTwitter} />
            </div>

            {/* Mini CTA Card */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 mb-2">Looking for a dev?</p>
              <a
                href="https://www.linkedin.com/in/raiyan-sohel"
                target="_blank"
              >
                <button className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                  Let's work together <BsArrowUpRight />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Raiyan Sohel. Built with React & Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components ---

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors w-fit"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
  >
    <Icon className="text-lg" />
  </a>
);
