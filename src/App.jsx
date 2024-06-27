import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <>
      <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="p-4 sm:ml-64 bg-[#f8fafc] dark:bg-slate-900">
        <Home />
        <About />
        <Experiences />
      </div>
    </>
  )
}
