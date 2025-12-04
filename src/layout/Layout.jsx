import { useTheme } from "next-themes";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {" "}
      <ScrollToTop />
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
