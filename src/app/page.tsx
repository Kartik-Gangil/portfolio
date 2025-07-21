import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Contact  from "./Components/Contact";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skill />
      <Project />
      <Experience />
      <Contact />
      <Footer/>
    </>
  );
}
