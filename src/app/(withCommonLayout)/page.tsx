import Banner from "@/lib/HomePage/Banner/Banner";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
