import React from "react";
import "../style/App.css";
import Box from './Box';
import Footer from "./Footer";

function About() {
  return (
    <div className="Container">
      
      <h3 style={{marginTop:"150px",marginInline:"40px", marginBottom:"400px"}}>
      At Continental, we are a team of passionate AI consultants dedicated to helping businesses harness the transformative power of artificial intelligence. We believe that AI has the potential to revolutionize every industry, and we are committed to helping our clients achieve their business goals through the strategic implementation of AI solutions.
      </h3>
      <Footer/>
    </div>
    
  )
}

export default About;