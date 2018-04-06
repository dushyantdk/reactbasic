import React, { Component } from 'react';
import Slider from './Slider';
import Footer from './Footer';

class Login extends Component {
   render() {
      return (
         <div className="content">
          <Slider heading="About Us" content="The atmosphere in New York is lorem ipsum." />
          <Footer heading="Login Footer" content="Hello Login Footer" />
         </div>
      );
   }
}
export default Login;
