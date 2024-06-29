import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import 'flowbite';
import Preloader from "./components/Preloader";

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [screenLoading, setScreenLoading] = useState(false);
  const [screenLoaded, setScreenLoaded] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
      setScreenLoaded(true)
    }, 1500);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <>
      {screenLoading && <Preloader />}
      <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="p-4 sm:ml-64 bg-[#f8fafc] dark:bg-slate-900">
        <Home />
        <About />
        <Experiences />
      </div>
    </>
  )
}
