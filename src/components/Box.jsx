import React from "react";
import "../style/box.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom'; 
import Home from './Home'; 
import About from './About';

function Box() {
  return (
    <div class="header">
      <div id="headerContent">
        
        
        
      <Link to="/" className="nav">Home</Link> 
    
      <Link to="/about" className="nav">About</Link>

      
        
      </div>
    </div>
  );
}

export default Box;
