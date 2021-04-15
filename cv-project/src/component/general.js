import uniqid from "uniqid";
import Input from '@material-ui/core/Input';
import React from 'react'
import "./components.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function GeneralInfo(props) {
    

    

    const inputs2 = [
    
        {InputPlaceholder: "name",
         Title: "Name",
         type:"text",
         value: props.value.name},
         {InputPlaceholder: "email",
         Title: "Email",
         type:"email",
         value: props.value.email},
         {InputPlaceholder: "phoneNr",
         Title: "Phone Number",
         type:"tel",
         value: props.value.phoneNr}
         ]

    return (
        <div id="general-section">
            <h2>General Info</h2> 
            <form onSubmit={(e) =>props.submit(e)}>
                {inputs2.map(({Title ,type}) => <TextField   id={uniqid()} key={uniqid()} type={type} label={Title} required/>)}
                 <Button type="Submit" variant="contained" color="primary">Add Info</Button>
            </form>          
             <Input type="file" placeholder="Upload image"/>
        </div>
    )
}
