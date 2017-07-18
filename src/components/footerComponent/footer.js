import React, { Component } from 'react';
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
        <NavLink activeClassName="active" to="/tools">
          <div className="col s4 footerLink center">
            Tools
          </div>
          </NavLink>
          <NavLink exact activeClassName="active" to="/exchange">
          <div className="col s4 footerLink center">
            Home
          </div>
          </NavLink>
          <NavLink activeClassName="active" to="/portfolio">
          <div className="col s4 footerLink center">
            Portfolio
          </div>
          </NavLink>
        </div>
      </footer>
    )
  }
}

  export default Footer
