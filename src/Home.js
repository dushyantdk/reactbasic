import React, { Component } from 'react';
import Slider from './Slider';
import Tours from './Tours';
import Ticketsmodel from './Ticketsmodel';
import Footer from './Footer';
class Home extends Component {
   render() {
      return (
         <div className="content">
            <Slider />
            <Tours />
            <Footer heading="Login Home" content="Hello Home Footer" />
         </div>
      );
   }
}
export default Home;
