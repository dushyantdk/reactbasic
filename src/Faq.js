import React, { Component } from 'react';
import Slider from './Slider';
import content from './content.json';
import Footer from './Footer';

class Faq extends Component {
   render() {
     return (
       <div>
         <div className="w3-black" id="Faq">
            <div className="w3-container w3-content w3-padding-64">
              <h2 className="w3-center">Frequently Asked Questions</h2>
              <p className="w3-opacity w3-center"><i>A collection of 867 simple CSS, HTML5 & Responsive site templates, built by us and released for free under the Creative Commons.</i></p><br></br>

              {content.Faq.faq_list.map(item =>
                <div className="faq_container">
                <dt><b>{item.ques}</b></dt>
                <dd><p>{item.ans}</p></dd>
                </div>
              )}

            </div>
         </div>
       </div>
     );
   }
}
export default Faq;
