import React, { Component } from 'react';
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

class Header extends Component {
  render() {
    return (
      <header>
      <div className="row header_height">
        <div className="col s6 offset-s3 header_col_height">
            Crypto Kraken
        </div>

        <div className="col s2 settings_header">
        <NavLink to="/settings">
         <i className="material-icons settings_icon">settings</i>
         </NavLink>
         </div>
      </div>
      </header>
    )
  }
}

  export default Header
