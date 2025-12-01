import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

import ShimmerButton from "./ShimmerButton";
import Logo from "./Logo";
const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ... (existing useEffects)

  // NEW useEffect for Intersection Observer
  useEffect(() => {
    // Get all sections you want to observe (based on your navLinks)
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observerOptions = {
      // The section is considered "active" when at least 30% of it is visible
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is intersecting (visible), set it as the active section
        if (entry.isIntersecting) {
          // entry.target.id gives you the section ID (e.g., "skills", "about")
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Start observing each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const navLinks = [
    {
      href: "#skills",
      text: "Skills",
    },
    {
      href: "#about",
      text: "About",
    },

    {
      href: "#projects",
      text: "My Projects",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];
  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900 backdrop-blur-lg shadow-lg"
          : "bg-white/90 dark:bg-gray-900 backdrop-blur-md"
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {}
          <Logo />

          {}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                // Check if the link is active and apply different base and hover styles
                className={`text-sm lg:text-base font-medium transition-colors relative group ${
                  activeSection === link.href
                    ? "text-gray-900 dark:text-white" // Active styles (e.g., darker/lighter text)
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" // Inactive styles
                }`}
              >
                {link.text}
                {/* Conditional visibility and styling for the underline span */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${
                    activeSection === link.href
                      ? "w-full" // Always full width when active
                      : "group-hover:w-full" // Only on hover when inactive
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <ShimmerButton />

            <a href="https://www.linkedin.com/in/raiyan-sohel/" target="_blank">
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

          {}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
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
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                <a
                  href="https://www.linkedin.com/in/raiyan-sohel/"
                  target="_blank"
                  className="text-center"
                >
                  <button className="px-6 py-2  text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                    Hire Me
                  </button>
                </a>{" "}
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
