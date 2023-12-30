import React from "react";
import "../style/home.css";
import Footer from "./Footer";
import Field from "./Field";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <div className="Container-1" >
        
      <div style={{marginBottom:"380px"}} className='Container-2'>
      <h1 style={{fontSize:"xxx-large",fontWeight:"bold"}}>AI Consultant</h1>
        <h2>Unlocking AI's Potential for Your Success</h2>
        <br></br>
        <h1 style={{fontSize:"300%"}}>Explore Our Solutions</h1>
        <div className="fields">
          
          <Link to="./law" className="link">
          <Field icon={faScaleBalanced} title="Indian Law"/>
          </Link>
        
          
          <Field icon={faNotesMedical} title="Health Care" comingSoon={true}/>
          <Field icon={faBusinessTime} title="Business" comingSoon={true}/>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home;