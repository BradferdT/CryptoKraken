import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="row header_height">
        <div className="col s6 offset-s3 header_col_height">
            Crypto Kraken
        </div>
         <i className="material-icons settings_icon">settings</i>
      </div>
      </header>
    )
  }
}

  export default Header
