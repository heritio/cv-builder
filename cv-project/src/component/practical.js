import TextField from '@material-ui/core/TextField';

import React from 'react'
import "./Components.css"
function Practical(props) {
    return (
        <div>
            <TextField placeholder="Company Name"></TextField>
            <TextField placeholder="Position Tittle"></TextField>
            <TextField placeholder="Description of job"></TextField>
            <TextField placeholder="Start-Date"></TextField>
            <TextField placeholder="End-Date"></TextField>
        </div>
    )
}

export default Practical;