
import React from 'react'
import TextField from '@material-ui/core/TextField';
import uniqid from "uniqid";
import "./components.css";
import Button from '@material-ui/core/Button';

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
            {inputs3.map(({InputPlaceholder, type}) => <TextField id={uniqid()} key={uniqid()} type={type}   label={InputPlaceholder}/>)}
            <Button variant="contained" color="primary">Add Work Experience</Button>
        </div>
    )
}

export default Practical;