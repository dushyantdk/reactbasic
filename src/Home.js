import React, { Component } from 'react';
import Slider from './Slider';
import Tours from './Tours';
import Footer from './Footer';
import About from './About';
class Home extends Component {
   render() {
      return (
        <div>
         <div className="content">
            <Slider heading="Home" content="The atmosphere in New York is lorem ipsum." />
            <About />
            <Tours />
            <Footer content="Copyright" />
         </div>
         </div>
      );
   }
}
export default Home;
