import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacto/Contact";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <>
      <Presentation />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}


export default Home;