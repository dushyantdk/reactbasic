import React, { Component } from 'react';
import Months from './Months';
import content from './content.json';
import product_img from './newyork.jpg';

class Tours extends Component {
   render() {
      return (
        <div className="w3-black" id="tour">
           <div className="w3-container w3-content w3-padding-64">
             <Months />
             <div className="w3-row-padding w3-padding-32">
             {content.matched.product_name.map(item =>
               <div className="w3-third w3-margin-bottom">
                 <img src={product_img} alt="New York" className="w3-hover-opacity"/>
                 <div className="w3-container w3-white">
                   <p><b>{item.title}</b></p>
                   <p className="w3-opacity">{item.status}</p>
                   <p>{item.phar}</p>
                   <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                 </div>
               </div>
               )}
             </div>
           </div>
        </div>
      );
   }
}
export default Tours;
