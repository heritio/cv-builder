
import React from 'react'
import TextField from '@material-ui/core/TextField';

import "./components.css";
function Practical(props) {
    
    const inputs3 = [
        {InputPlaceholder: "Company Name",
         type:"text"},
         {InputPlaceholder: "Position Tittle",
         type:"text"},
         {InputPlaceholder: "Description Of Work", 
        type:"textarea"},
         {InputPlaceholder: "Start-Date",
         type:"date"},
        {InputPlaceholder: "End-Date", 
        type:"date"}
    ]
    return (
        <div id="practical-section">
            <h2>Practical</h2>
            {inputs3.map(({InputPlaceholder, type}) => <TextField type={type} Placeholder={InputPlaceholder} />)}
        </div>
    )
}

export default Practical;