import { ExternalLink } from "lucide-react";
import React from "react";
export default function ShimmerButton() {
  const customCss = `
 
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

   
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (
    <div className="flex items-center justify-center font-sans ">
      <style>{customCss}</style>
      <a
        href="https://drive.google.com/file/d/17uCqrmRqWdH3F0a9fJJtKi2TdTfyD_YH/view?usp=sharing"
        target="_blank"
      >
        <button className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-lg overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)",
              animation: "shimmer-spin 2.5s linear infinite",
            }}
          />
          <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-6 py-1.5 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
            <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" /> Resume
          </span>
        </button>
      </a>
    </div>
  );
}
