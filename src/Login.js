import React, { Component } from 'react';
import Header from './Slider';
import Footer from './Footer';

class Login extends Component {
   render() {
      return (
         <div className="content">
          <Header heading="Login" content="Hello login" />
          <Footer heading="Login Footer" content="Hello Login Footer" />
         </div>
      );
   }
}
export default Login;
