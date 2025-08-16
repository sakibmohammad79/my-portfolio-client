'use client'
import About from "@/lib/HomePage/About/About";
import Banner from "@/lib/HomePage/Banner/Banner";
import Blog from "@/lib/HomePage/Blog/Blog";
import Contact from "@/lib/HomePage/Contact/Contact";
import Education from "@/lib/HomePage/Education/Education";
import Experience from "@/lib/HomePage/Experience/Experience";
import Project from "@/lib/HomePage/Project/Project";
import Skills from "@/lib/HomePage/Skills/Skills";
import FloatingWhatsApp from "@/lib/UI/WhatsAppIcon/WhatsAppIcon";

import { useEffect } from "react";

const HomePage = () => {
  // Add smooth scroll behavior when component mounts
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div>
      <Banner />
      
      {/* Add scroll-margin-top for smooth scrolling offset */}
      <div 
        id="about" 
        style={{ scrollMarginTop: '100px' }}
      >
        <About />
      </div>

      <div 
        id="skill" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Skills />
      </div>
      
      <div 
        id="experience" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Experience />
      </div>
      
      <div 
        id="project" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Project />
      </div>
      
      <div 
        id="education" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Education />
      </div>
      
      <div 
        id="blog" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Blog />
      </div>
      
      <div 
        id="contact" 
        style={{ scrollMarginTop: '100px' }}
      >
        <Contact />
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="+8801870584779"
        message="Hi Md. Sakib, I saw your portfolio and was very impressed with your work. we're hiring and I'd love to discuss an opportunity with you."
        showAfter={300}
      />
    </div>
  );
};

export default HomePage;