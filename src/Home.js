import React, { Component } from 'react';
import Slider from './Slider';
import Tours from './Tours';
import Footer from './Footer';
class Home extends Component {
   render() {
      return (
         <div className="content">
            <Slider heading="Home" content="The atmosphere in New York is lorem ipsum." />
            <Tours />
            <Footer heading="Login Home" content="Hello Home Footer" />
         </div>
      );
   }
}
export default Home;
