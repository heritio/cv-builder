
import React from 'react'

import "./components.css"
import uniqid from "uniqid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            {inputs.map(({InputPlaceholder, type}) => <TextField id={uniqid()} key={uniqid()} type={type} label={InputPlaceholder} />)}
           <Button variant="contained" color="primary">Add Education</Button>
        </div>
    )
};

export default EducationalInfo;