import React from 'react'

import "./components.css";

function Cvpaper(props) {
    return (
        <div className="cv-space"> 
               <div id="cv-header">
                 {props.name} 
               </div>
               <div  className="info-section">
                   <div id="main-info" >

                   </div>
                  
                  <div id="side-tab">
                    <div className="">Phone-Nr: {props.phone}</div> 
                    <div>Email:    {props.email}</div>
                  </div>  
               </div>
              
          
        </div>
    )
}


export default Cvpaper;

