

import React from 'react'
import "./Components.css"
import TextField from '@material-ui/core/TextField';


export default function GeneralInfo() {
    return (
        <div>
            <TextField placeholder="Name"></TextField>
            <TextField placeholder="Email"></TextField>
            <TextField placeholder="Phone Number"></TextField>
        </div>
    )
}
