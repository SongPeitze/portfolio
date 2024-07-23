import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";
import Parallax from "./components/parallax/Parallax";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <NavBar />
      <Banner />
      <section id="skills">
        <Parallax type="skills" />
      </section>
      <Skills />
      <section id="projects">
        <Parallax type="projects" />
      </section>
      <Project />
      <Contact />
    </div>
  );
}

export default App;
