
import React from 'react'

import "./components.css"

import TextField from '@material-ui/core/TextField';

function EducationalInfo(props) {


    const inputs = [
    
    {InputPlaceholder: "School Name",
     type:"text"},
     {InputPlaceholder: "Degree",
     type:"text"},
     {InputPlaceholder: "Start-Date",
     type:"date"},
    {InputPlaceholder:"End-Date", 
    type:"date"}
    
    ]
    
    
    return (
        <div id="education-section" className="bgcolor">
            <h2>Education</h2>  
            {inputs.map(({InputPlaceholder, type}) => <TextField type={type} Placeholder={InputPlaceholder} />)}
    
        </div>
    )
};

export default EducationalInfo;