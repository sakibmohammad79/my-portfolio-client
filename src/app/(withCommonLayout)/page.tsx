import Banner from "@/lib/HomePage/Banner/Banner";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import Skills from "@/lib/HomePage/Skills/Skills";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Education></Education>
      <Contact></Contact>
      <Skills></Skills>
    </div>
  );
};

export default HomePage;
