
import React, { Component } from 'react'
import {  ThemeProvider } from '@material-ui/core/styles';



import './App.css';
import theme from "./component/theme";

import Educational from "./component/educational";
import GeneralInfo from "./component/general";
import Practical from "./component/practical";
import Cvpaper from "./component/cvpaper";



class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   

  render() {
    return (
      <ThemeProvider theme={theme}>
      <div id="container">
        <div className="space bgcolor">
          <labe></labe>
          <Educational  id="educational"/>
          <GeneralInfo id="general"/>
        </div>
          <Practical className="bgcolor" id="practical" />
          <Cvpaper id="cvpaper"/>       
      </div>
      </ThemeProvider>
    )
  }
}



export default App;
