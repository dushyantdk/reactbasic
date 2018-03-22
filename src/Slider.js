import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Slider extends Component {
  render() {
    return (
        <div className="App-header">
        <div className="mySlides w3-display-container w3-center">
          <img src="https://www.w3schools.com/w3images/ny.jpg" />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>New York</h3>
            <p><b>The atmosphere in New York is lorem ipsum.</b></p>
          </div>
        </div>
        </div>
    );
  }
}

export default Slider;
