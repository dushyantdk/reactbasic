import React, { Component } from 'react';


class FaqlistingQ extends Component {
   render() {
     const {data} = this.props
     return (
       <div>
              {data.Faq.faq_list.map(item =>
                <div className="faq_container">
                <dt><b>{item.ques}</b></dt>
                <dd><p>{item.ans}</p></dd>
                </div>
              )}

       </div>
     );
   }
}
export default FaqlistingQ;
