import { useTheme } from "next-themes";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-gray-50 dark:bg-black space-y-8">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <Skills />
      <About />
      <Projects />
      <ContactFooter />
      <Footer />
    </div>
  );
}

export default App;
