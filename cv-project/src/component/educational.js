import "./Components.css"
import React from 'react'
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

function EducationalInfo(props) {
    return (
        <div>  
            <TextField placeholder="School Name"></TextField>
            <TextField placeholder="Degree"></TextField>
            <TextField placeholder="Start-Date"></TextField>
            <TextField placeholder="End-Date"></TextField>
        </div>
    )
}

export default EducationalInfo;