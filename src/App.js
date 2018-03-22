import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
   render() {
      return (
         <Router>
         <div>
            <div className="w3-top">
              <div className="w3-bar w3-black w3-card">
                <Link className="w3-bar-item w3-button w3-padding-large" to={'/'}>Home</Link>
                <Link className="w3-bar-item w3-button w3-padding-large" to={'/Login'}>Login</Link>
              </div>
            </div>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/Login' component={Login} />
            </Switch>
          </div>
         </Router>
      );
   }
}
export default App;
