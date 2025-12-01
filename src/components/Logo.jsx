import { useTheme } from "next-themes";
import React from "react";
import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";
const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center">
      <a href="#" className="flex items-center gap-1 group">
        <img
          className="w-7 lg:w-8"
          src={theme === "dark" ? logoDark : logoLight}
          alt=""
        />
        <span className="lobster text-gray-900 dark:text-gray-100 text-xl lg:text-2xl font-bold">
          Raiyan
        </span>
      </a>
    </div>
  );
};

export default Logo;
