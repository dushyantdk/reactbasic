import React, { Component } from 'react';

class Tours extends Component {
   render() {
      return (
        <div className="w3-black" id="tour">
           <div className="w3-container w3-content w3-padding-64">
             <h2 className="w3-wide w3-center">TOUR DATES</h2>
             <p className="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br></br>

             <ul className="w3-ul w3-border w3-white w3-text-grey">
               <li claclassNamess="w3-padding">September <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
               <li className="w3-padding">October <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
               <li className="w3-padding">November <span className="w3-badge w3-right w3-margin-right">3</span></li>
             </ul>

             <div className="w3-row-padding w3-padding-32">
               <div className="w3-third w3-margin-bottom">
                 <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="New York" className="w3-hover-opacity"/>
                 <div className="w3-container w3-white">
                   <p><b>New York</b></p>
                   <p className="w3-opacity">Fri 27 Nov 2016</p>
                   <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                   <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                 </div>
               </div>
               <div className="w3-third w3-margin-bottom">
                 <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="Paris" className="w3-hover-opacity"/>
                 <div className="w3-container w3-white">
                   <p><b>Paris</b></p>
                   <p className="w3-opacity">Sat 28 Nov 2016</p>
                   <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                   <button className="w3-button w3-black w3-margin-bottom"> Buy Tickets </button>
                 </div>
               </div>
               <div className="w3-third w3-margin-bottom">
                 <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="San Francisco" className="w3-hover-opacity"/>
                 <div className="w3-container w3-white">
                   <p><b>San Francisco</b></p>
                   <p className="w3-opacity">Sun 29 Nov 2016</p>
                   <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                   <button className="w3-button w3-black w3-margin-bottom"> Buy Tickets </button>
                 </div>
               </div>
             </div>
           </div>
        </div>
      );
   }
}
export default Tours;
