

import React from 'react'
import "./components.css"
import TextField from '@material-ui/core/TextField';


export default function GeneralInfo() {
    const inputs2 = [
    
        {InputPlaceholder: "Name",
         type:"text"},
         {InputPlaceholder: "Email",
         type:"email"},
         {InputPlaceholder: "Phone Number",
         type:"number"}
        
        ]
    return (
        <div id="general-section">
            <h2>General Info</h2>
            {inputs2.map(({InputPlaceholder, type}) => <TextField type={type} Placeholder={InputPlaceholder} />)}
        </div>
    )
}
