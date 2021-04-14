import FormGroup from '@material-ui/core/FormGroup';
import './App.css';

import Educational from "./component/educational";
import GeneralInfo from "./component/general";
import Practical from "./component/practical";
import Cvpaper from "./component/cvpaper";

import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   

  render() {
    return (
      <Grid container  justify={"center"} alignItems={"center"} zeroMinWidth={true}>
      
          <Educational />
          <GeneralInfo />
          <Practical />
          <Cvpaper />       
      </Grid>
    )
  }
}



export default App;
