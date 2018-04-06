import React, { Component } from 'react';
import content from './content.json';
class Months extends Component {

   render() {
     //console.log(content.data.product_status)
      return (
        <div className="w3-black" id="about">
           <div className="w3-container w3-content w3-padding-64">
             <h2 className="w3-center">About Us</h2>
             <p className="w3-opacity w3-center"><i>Our vision is to discern the full potential of the Internet — universal access to research and education, full participation in culture — to propel a new era of development, augmentation, and productivity.</i></p><br></br>
             <ul className="w3-ul w3-border w3-white w3-text-grey">
              {content.data.product_status.map(item =>
                  <li className="w3-padding">{item.title}</li>
               )}
             </ul>
           </div>
        </div>
      );
   }
}
export default Months;
