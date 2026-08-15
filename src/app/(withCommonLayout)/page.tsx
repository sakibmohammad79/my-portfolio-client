'use client'
import About from "@/lib/HomePage/About/About";
import Banner from "@/lib/HomePage/Banner/Banner";
import Blog from "@/lib/HomePage/Blog/Blog";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import Experience from "@/lib/HomePage/Experience/Experience";
import Project from "@/lib/HomePage/Project/Project";
import Skills from "@/lib/HomePage/Skills/Skills";
import Testimonials from "@/lib/HomePage/Testimonial/Testimonial";
import FloatingWhatsApp from "@/lib/UI/WhatsAppIcon/WhatsAppIcon";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Blog />
      <Testimonials />
      <Contact />

      <FloatingWhatsApp
        phoneNumber="+8801870584779"
        message="Hi Md. Sakib, I saw your portfolio and was very impressed with your work. we're hiring and I'd love to discuss an opportunity with you."
        showAfter={300}
      />
    </div>
  );
};

export default HomePage;