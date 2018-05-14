
import React, { Component } from 'react';
import axios from 'axios'

class Ticketsmodel  extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', ferror: '', lname: '', lerror:'', ename: '', eerror:'', username:'', profileimg:''};
    this.userchanges = this.userchanges.bind(this);
    this.fromsubmit = this.fromsubmit.bind(this);
  }

    userchanges(event) {
       this.setState({fname: event.target.value});
    }


    fromsubmit() {
      axios.get('https://api.github.com/users/' + this.state.fname)
      .then(response => this.setState({username: response.data.name, profileimg: response.data.avatar_url}))
      console.log(this.state.username, this.state.profileimg)
    }
   render() {
     return (
        <div>
          <div className="popup">
            <div className="login-page">
                <div className="form">
                  <form className="login-form">
                    <input type="text" name="fname" value={this.state.fname} onChange={this.userchanges}  placeholder="FirstName" />
                    <input type="button" onClick={this.fromsubmit} value="Submit" />
                    // <button onClick={this.onClose} className="cancel">Cancel</button>
                    <div className="profileimg"> <img src={this.state.profileimg} alt="" /> </div>
                    <p className="username">{this.state.username}</p>
                  </form>
                </div>
            </div>
            </div>
        </div>
      );
   }
}
export default Ticketsmodel;
