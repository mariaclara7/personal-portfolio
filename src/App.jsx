import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Home />
        <About />
      </div>
    </>
  )
}
