import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (

    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Aboutus} />
      </Switch>
      </div>
    );
  }
}

export default Nav;
