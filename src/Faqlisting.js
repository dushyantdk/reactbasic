import React, { Component } from 'react';
import content from './content.json';

class Faqlisting extends Component {
   render() {
     return (
       <div>
              {content.Faq.faq_list.map(item =>
                <div className="faq_container">
                <dd><p>{item.ans}</p></dd>
                </div>
              )}
       </div>
     );
   }
}
export default Faqlisting;
