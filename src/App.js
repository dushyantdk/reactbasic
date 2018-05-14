import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faq from './Faq';

class App extends Component {
   render() {
      return (
         <Router>
         <div>
            <div className="w3-top">
              <div className="w3-bar w3-black w3-card">
                <Link className="w3-bar-item w3-button w3-padding-large" to={'/'}>Home</Link>
                <Link className="w3-bar-item w3-button w3-padding-large" to={'/About'}>About</Link>
                <Link className="w3-bar-item w3-button w3-padding-large" to={'/Faq'}>Faq</Link>
              </div>
            </div>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/About' component={About} />
               <Route exact path='/Faq' component={Faq} />
            </Switch>
          </div>
         </Router>
      );
   }
}
export default App;
