import React from "react";
import "../style/field.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Field(props){
    return(
        
        <div className="field">
            <FontAwesomeIcon icon={props.icon} className="icon" />
            <h1>{props.title}</h1>
            <br></br>
            {props.comingSoon && <p>Coming Soon</p>}
        </div>
        
    )
}

export default Field;