import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { startSockets } from '../../../assets/exchange.socket.js';
import { startGraphs } from '../../../assets/exchange.graph.js';

import Bitcoin from './bitcoin';
import Ethereum from './ethereum';
import Litecoin from './litecoin';
import Zec from './zec';
import Xmr from './xmr';
import Dash from './dash';


class Exchange extends Component {
  constructor() {
  super();

  this.state = {
    loading: true
  };
}

componentDidMount() {
  setTimeout(() => this.setState({ loading: false }), 1500);
}
  render(){
    startSockets();
    startGraphs();
    const { loading } = this.state;

    if(loading) {
      return null; // render null when app is not ready
    }
    return(
      <div className="exchange">
        <Bitcoin />
        <Ethereum />
        <Litecoin />
        <Zec />
        <Xmr />
        <Dash />
      </div>

    );
  }
}

  export default Exchange;
