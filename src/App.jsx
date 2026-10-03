import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div id="top" className="max-w-[1280px] mx-auto bg-paper text-ink overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
