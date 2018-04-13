import React, { Component } from 'react';

class Ticketsmodel extends Component {
   render() {
      return (
        <div>
          <div className="popup">
            <div className="login-page">
                <div className="form">
                  <form className="login-form">
                    <input placeholder="username" type="text" />
                    <input placeholder="password" type="password" />
                    <button>login</button>
                    <button onClick={this.onClose} className="cancel">Cancel</button>
                  </form>
                </div>
            </div>
            </div>
        </div>
      );
   }
}
export default Ticketsmodel;
