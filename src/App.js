import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Routes from './Routes'
import {Link} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="hero-wrapper"> 
          <div>
            {Routes}
          </div>
        </div>





      </div>
    );
  }
}

export default App;
