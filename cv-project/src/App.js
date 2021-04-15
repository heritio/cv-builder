
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
        general: {
          name: "",
          email: "",
          phoneNr: ""
        },
        ourPractical: [],
        ourEducational: []
        
     }
    
   }
   
  onSubmit = (key, val) => {
    this.setState({[key]: val})
  };
  
 
  render() {
    
    return (
      <ThemeProvider theme={theme}>
      <div id="container">
        <h1 className ="title">CV Builder</h1>
        <h2 className ="title">Write CV and download in PDF format</h2>
        <div className="space bgcolor">
          <Educational  id="educational"/>
          <GeneralInfo  submit={this.onSubmit} id="general" value={this.state}/>
        </div>
          <Practical className="bgcolor" id="practical" />
          <Cvpaper name={this.state.name} email={this.state.email} phone={this.state.phoneNr} id="cvpaper"/>       
      </div>
      </ThemeProvider>
    )
  }
}



export default App;
