import React, { Component } from 'react';
import content from './content.json';

class Tours extends Component {
   render() {
      return (
        <div className="w3-black" id="services">
           <div className="w3-container w3-content">
             <h2 className="w3-center">We Are A Creative Digital Agency</h2>
             <p className="w3-opacity w3-center"><i>Focused on Growing Brands Online</i></p><br></br>
             <div className="w3-row-padding w3-padding-32">
             {content.matched.product_name.map(item =>
               <div className="w3-third w3-margin-bottom service_block">
                  <div className="w3-white">
                 <img src={item.image} alt="New York" className="w3-hover-opacity"/>
                 <div className="w3-container">
                   <p><b>{item.title}</b></p>
                   <p className="w3-opacity">{item.status}</p>
                   <p>{item.phar}</p>
                   <button className="w3-button w3-black w3-margin-bottom">{item.buttontxt}</button>
                 </div>
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
