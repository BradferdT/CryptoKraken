import React, { Component } from 'react';
const settings = require('electron-settings');
import { startSockets } from '../../../assets/exchange.socket.js';
import { drawDonut } from '../../../assets/portfolio.graph.js';
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
import ReactTooltip from 'react-tooltip';

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      total: settings.get('myPortfolio.total') || 0,
      btc: settings.get('myPortfolio.btc') || 0,
      eth: settings.get('myPortfolio.eth') || 0,
      ltc: settings.get('myPortfolio.ltc') || 0,
      zec: settings.get('myPortfolio.zec') || 0,
      xmr: settings.get('myPortfolio.xmr') || 0,
      dash: settings.get('myPortfolio.dash') || 0
    }
      }
  render() {
      startSockets();
     setTimeout(drawDonut,70);
    return (
      <div>
        <div className="row">
          <div className="col s12 donut_graph center">
          <div id="graph1" className="donut-chart">
            </div>
          </div>
          <div className="row">
          <div className="col s12 center">
          <NavLink className="edit_link" to="/portfolio/settings">
            Edit
          </NavLink>
          </div>
          </div>
        </div>
        <div className="row port_cur_row">
      <div className="col s1 settings_circle port_circle">
        <div className="circle btcColor center"></div>
      </div>
    <div className="col s3 curr_column coin_column">
      <span className="settings_text settings_coin">Bitcoin</span>
    </div>
      <div className="col s4 curr_column port_text">
        { this.state.btc }
      </div>
    </div>
    <div className="row port_cur_row">
  <div className="col s1 settings_circle port_circle">
    <div className="circle ethColor center"></div>
  </div>
<div className="col s3 curr_column coin_column">
  <span className="settings_text settings_coin">Ethereum</span>
</div>
  <div className="col s4 curr_column port_text">
    { this.state.eth }
  </div>
</div>
<div className="row port_cur_row">
<div className="col s1 settings_circle port_circle">
<div className="circle ltcColor center"></div>
</div>
<div className="col s3 curr_column coin_column">
<span className="settings_text settings_coin">Litecoin</span>
</div>
<div className="col s4 curr_column port_text">
{ this.state.ltc }
</div>
</div>
<div className="row port_cur_row">
<div className="col s1 settings_circle port_circle">
<div className="circle zecColor center"></div>
</div>
<div className="col s3 curr_column coin_column">
<span className="settings_text settings_coin">Zcash</span>
</div>
<div className="col s4 curr_column port_text">
{ this.state.zec }
</div>
</div>
<div className="row port_cur_row">
<div className="col s1 settings_circle port_circle">
<div className="circle xmrColor center"></div>
</div>
<div className="col s3 curr_column coin_column">
<span className="settings_text settings_coin">Monero</span>
</div>
<div className="col s4 curr_column port_text">
{ this.state.xmr }
</div>
</div>
<div className="row port_cur_row">
<div className="col s1 settings_circle port_circle">
<div className="circle dashColor center"></div>
</div>
<div className="col s3 curr_column coin_column">
<span className="settings_text settings_coin">Dash</span>
</div>
<div className="col s4 curr_column port_text">
{ this.state.dash }
</div>
</div>

          <div className="donut_inner_total" data-tip="Total Invested" data-delay-show='500'>

          </div>
          <div className="donut_inner_up" data-tip="24hr Change" data-delay-show='500'>

          </div>
            <ReactTooltip />
      </div>
    )
  }
}

  export default Portfolio
