import About from "@/lib/HomePage/About/About";
import Banner from "@/lib/HomePage/Banner/Banner";
import Blog from "@/lib/HomePage/Blog/Blog";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import Experience from "@/lib/HomePage/Experience/Experience";
import Project from "@/lib/HomePage/Project/Project";
import Skills from "@/lib/HomePage/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div id="about">
        <About></About>
      </div>

      <div id="skill">
        <Skills></Skills>
      </div>
      <div id="experience">
        <Experience></Experience>
      </div>
      <div id="project">
        <Project></Project>
      </div>
      <div id="education">
        <Education></Education>
      </div>
      <div id="blog">
        <Blog></Blog>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomePage;
