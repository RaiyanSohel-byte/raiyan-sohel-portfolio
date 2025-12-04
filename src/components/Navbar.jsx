import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

import ShimmerButton from "./ShimmerButton";
import Logo from "./Logo";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#skills", text: "Skills" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "My Projects" },
    { href: "#contact", text: "Contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto close menu on window resize
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900 backdrop-blur-lg shadow-lg"
          : "bg-white/90 dark:bg-gray-900 backdrop-blur-md"
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="mx-auto px-6 lg:px-0 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.text}
                smooth
                to={`/${link.href}`}
                className={`text-sm lg:text-base font-medium transition-colors relative group ${
                  activeSection === link.href
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.text}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </HashLink>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <ShimmerButton />

            <a
              href="https://www.linkedin.com/in/raiyan-sohel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                Hire Me
              </button>
            </a>

            {theme === "dark" ? (
              <MdOutlineWbSunny
                color="white"
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              />
            ) : (
              <FaRegMoon
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
              {/* Theme toggle */}
              {theme === "dark" ? (
                <MdOutlineWbSunny
                  color="white"
                  onClick={() => setTheme("light")}
                  className="cursor-pointer ml-3"
                />
              ) : (
                <FaRegMoon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer ml-3"
                />
              )}

              {/* Mobile nav links */}
              {navLinks.map((link) => (
                <HashLink
                  key={link.text}
                  smooth
                  to={`/${link.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm sm:text-base font-medium rounded-md transition-colors ${
                    activeSection === link.href
                      ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.text}
                </HashLink>
              ))}

              {/* Hire + Shimmer */}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                <a
                  href="https://www.linkedin.com/in/raiyan-sohel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  <button className="px-6 py-2 text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                    Hire Me
                  </button>
                </a>
                <ShimmerButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
