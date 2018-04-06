import React, { Component } from 'react';
import './App.css';
class Slider extends Component {
  render() {
    return (
        <div className="App-header">
        <div className="mySlides w3-display-container w3-center">
          <div className="slier_content w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>{this.props.heading}</h3>
            <p>{this.props.content}</p>
          </div>
        </div>
        </div>
    );
  }
}

export default Slider;
