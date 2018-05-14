import React, { Component } from 'react';

class Login  extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', ferror: '', lname: '', lerror:'', ename: '', eerror:''};
    this.userchanges = this.userchanges.bind(this);
    this.lastchanges = this.lastchanges.bind(this);
    this.enamechanges = this.enamechanges.bind(this);
    this.fromsubmit = this.fromsubmit.bind(this);
  }

    userchanges(event) {
       this.setState({fname: event.target.value});
       if (this.state.fname !== ''){
        this.setState({ferror: ''});
        }
    }

    lastchanges(event) {
       this.setState({lname: event.target.value});
       if (this.state.fname !== ''){
        this.setState({lerror: ''});
        }
    }

    enamechanges(event) {
       this.setState({ename: event.target.value});
       if (this.state.ename !== ''){
        this.setState({eerror: ''});
        }
    }

    fromsubmit(event) {
      if (this.state.fname === ''){
       this.setState({ferror: 'Please enter first name'});
       }
      else if (this.state.lname === ''){
       this.setState({lerror: 'Please enter last name'});
       }
       else if (this.state.ename === ''){
        this.setState({eerror: 'Please enter last name'});
        }
      else{
       alert('Hello: ' + this.state.fname + ' ' + this.state.lname);
       }
    }
   render() {
     return (
        <div>
          <div className="popup">
            <div className="login-page">
                <div className="form">
                  <form className="login-form">
                    <input type="text" name="fname" value={this.state.fname} onChange={this.userchanges}  placeholder="FirstName" />
                    <span className="error">{this.state.ferror}</span>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.lastchanges}  placeholder="LastNAme" />
                    <span className="error">{this.state.lerror}</span>
                    <input type="email" name="ename" value={this.state.ename} onChange={this.enamechanges}  placeholder="Email" />
                    <span className="error">{this.state.eerror}</span>
                    <input type="button" onClick={this.fromsubmit} value="Submit" />
                    <button onClick={this.onClose} className="cancel">Cancel</button>
                  </form>
                </div>
            </div>
            </div>
        </div>
      );
   }
}
export default Login;
