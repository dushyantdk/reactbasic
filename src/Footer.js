import React, { Component } from 'react';

class Footer extends Component {
   render() {
      return (
         <footer className="App-Footer">
         <h1>{this.props.heading}</h1>
         <p>{this.props.content}</p>
         </footer>
      );
   }
}
export default Footer;
