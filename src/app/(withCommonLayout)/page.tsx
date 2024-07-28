import About from "@/lib/HomePage/About/About";
import Banner from "@/lib/HomePage/Banner/Banner";
import Blog from "@/lib/HomePage/Blog/Blog";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import Project from "@/lib/HomePage/Project/Project";
import Skills from "@/lib/HomePage/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Contact></Contact>
      <Skills></Skills>
      <Project></Project>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
