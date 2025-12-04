import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute={"class"} defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
