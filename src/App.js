import "./App.css";
import Footer from "./common/Footer";
import StaticImg from "./common/StaticImg";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Navbar from "./screens/NavBar";
import Projects from "./screens/Projects";
import Quali from "./screens/Qualifications";

function App() {
  return (
    <>
      <Navbar />
      <StaticImg />
      <Home />
      <AboutMe />
      <Quali />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
