import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import "./Components.css";

function Cvpaper(props) {
    return (
        <>
            <Paper>
               <div id="cvheader">Header</div>
               <div id="maininfo">Main</div>
               <div id="sidetab">sidetab</div>
            </Paper>
        </>
    )
}

Cvpaper.propTypes = {

}

export default Cvpaper;

