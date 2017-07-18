import React, { Component } from 'react';
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
const settings = require('electron-settings');

var coins = {
  btcC: 0,
  ethC: 0,
  ltcC: 0,
  zecC: 0,
  xmrC: 0,
  dashC: 0,
}

$.getJSON('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,ZEC,XMR,DASH&tsyms=USD&e=Poloniex', function(data){
    coins.btcC = data.RAW.BTC.USD.PRICE,
    coins.ethC = data.RAW.ETH.USD.PRICE,
    coins.ltcC = data.RAW.LTC.USD.PRICE,
    coins.zecC = data.RAW.ZEC.USD.PRICE,
    coins.xmrC = data.RAW.XMR.USD.PRICE,
    coins.dashC = data.RAW.DASH.USD.PRICE
})

class PortSettings extends Component {

  constructor(){
    super();
    this.state = {
      showUSD: true,
      total: 0,
      btc: settings.get('myPortfolio.btc') || 0,
      eth: settings.get('myPortfolio.eth') || 0,
      ltc: settings.get('myPortfolio.ltc') || 0,
      zec: settings.get('myPortfolio.zec') || 0,
      xmr: settings.get('myPortfolio.xmr') || 0,
      dash: settings.get('myPortfolio.dash') || 0
    }

    this.changeCurrency = this.changeCurrency.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.saveCoins = this.saveCoins.bind(this);
    this.updateBTC = this.updateBTC.bind(this);
    this.updateETH = this.updateETH.bind(this);
    this.updateLTC = this.updateLTC.bind(this);
    this.updateZEC = this.updateZEC.bind(this);
    this.updateXMR = this.updateXMR.bind(this);
    this.updateDASH = this.updateDASH.bind(this);
    setTimeout(this.updateTotal, 50);
  }
  changeCurrency(){
    if(this.state.showUSD){
      this.setState({btc: parseFloat(this.state.btc * coins.btcC).toFixed(2)});
      this.setState({eth: parseFloat(this.state.eth * coins.ethC).toFixed(2)});
      this.setState({ltc: parseFloat(this.state.ltc * coins.ltcC).toFixed(2)});
      this.setState({zec: parseFloat(this.state.zec * coins.zecC).toFixed(2)});
      this.setState({xmr: parseFloat(this.state.xmr * coins.xmrC).toFixed(2)});
      this.setState({dash: parseFloat(this.state.dash * coins.dashC).toFixed(2)});
      $('.settings_change').html('USD');
      $('.settings_curr').html('Hide USD');
      this.setState({showUSD: false});
    }else{
      this.setState({btc: parseFloat(this.state.btc / coins.btcC).toFixed(8)});
      this.setState({eth: parseFloat(this.state.eth / coins.ethC).toFixed(8)});
      this.setState({ltc: parseFloat(this.state.ltc / coins.ltcC).toFixed(8)});
      this.setState({zec: parseFloat(this.state.zec / coins.zecC).toFixed(8)});
      this.setState({xmr: parseFloat(this.state.xmr / coins.xmrC).toFixed(8)});
      this.setState({dash: parseFloat(this.state.dash / coins.dashC).toFixed(8)});
      $('.set_btc').html('BTC');
      $('.set_eth').html('ETH');
      $('.set_ltc').html('LTC');
      $('.set_zec').html('ZEC');
      $('.set_xmr').html('XMR');
      $('.set_dash').html('DASH');
      $('.settings_curr').html('Show USD');
      this.setState({showUSD: true});
    }
  }

  updateBTC(event){
    this.setState({btc: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateETH(event){
    this.setState({eth: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateLTC(event){
    this.setState({ltc: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateZEC(event){
    this.setState({zec: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateXMR(event){
    this.setState({xmr: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateDASH(event){
    this.setState({dash: event.target.value});
    setTimeout(this.updateTotal,50);
  }

  updateTotal(btc){
    let btcT = parseFloat(this.state.btc);
    let ethT = parseFloat(this.state.eth);
    let ltcT = parseFloat(this.state.ltc);
    let zecT = parseFloat(this.state.zec);
    let xmrT = parseFloat(this.state.xmr);
    let dashT = parseFloat(this.state.dash);
    if(this.state.showUSD){
    this.setState({total: ((btcT * coins.btcC) + (ethT * coins.ethC) + (ltcT * coins.ltcC) + (zecT * coins.zecC) + (xmrT * coins.xmrC) + (dashT * coins.dashC)).toFixed(2)})
    }else{
      console.log(btcT);
      this.setState({total: (btcT + ethT + ltcT + zecT + xmrT + dashT).toFixed(2)})
    }
  }

  saveCoins(){
    if(!this.state.showUSD){
      settings.set('myPortfolio', {
        btc: parseFloat((this.state.btc / coins.btcC)).toFixed(8),
        eth: parseFloat((this.state.eth / coins.ethC)).toFixed(8),
        ltc: parseFloat((this.state.ltc / coins.ltcC)).toFixed(8),
        zec: parseFloat((this.state.zec / coins.zecC)).toFixed(8),
        xmr: parseFloat((this.state.xmr / coins.xmrC)).toFixed(8),
        dash: parseFloat((this.state.dash / coins.dashC)).toFixed(8),
        total: this.state.total
      })
    }else{
    settings.set('myPortfolio', {
      btc: parseFloat(this.state.btc),
      eth: parseFloat(this.state.eth),
      ltc: parseFloat(this.state.ltc),
      zec: parseFloat(this.state.zec),
      xmr: parseFloat(this.state.xmr),
      dash: parseFloat(this.state.dash),
      total: this.state.total
    })
  }
}

  render() {
    return (
      <div>
      <div className="row settings_row">
        <div className="col s8 settings_total">
          Total: ${ this.state.total }
        </div>
        <div onClick={ this.changeCurrency } className="col s4 center settings_curr">
          Show USD
        </div>
      </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle btcColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Bitcoin</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.btc) } onChange={ this.updateBTC } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_btc">BTC</span>
  </div>
  </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle ethColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Ethereum</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.eth) } onChange={ this.updateETH } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_eth">ETH</span>
  </div>
  </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle ltcColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Litecoin</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.ltc) } onChange={ this.updateLTC } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_ltc">LTC</span>
  </div>
  </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle zecColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Zcash</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.zec) } onChange={ this.updateZEC } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_zec">ZEC</span>
  </div>
  </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle xmrColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Monero</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.xmr) } onChange={ this.updateXMR } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_xmr">XMR</span>
  </div>
  </div>
      <div className="row input_cur_row">
    <div className="col s1 settings_circle">
      <div className="circle dashColor center"></div>
    </div>
  <div className="col s2 curr_column coin_column">
    <span className="settings_text settings_coin">Dash</span>
  </div>
    <div className="col s6 curr_column">
      <input type="number" value={ parseFloat(this.state.dash) } onChange={ this.updateDASH } id="btc_input" />
    </div>
  <div className="col s1 curr_column change_column">
    <span className="settings_text settings_change set_dash">Dash</span>
  </div>
  </div>

    <div className="row">
      <div className="col s6">
      <NavLink activeClassName="active" to="/portfolio">
        <button className="cancel_button">Cancel</button>
      </NavLink>
      </div>
      <div className="col s6">
      <NavLink activeClassName="active" to="/portfolio">
        <button onClick={ this.saveCoins } className="save_button">Save</button>
      </NavLink>
      </div>
    </div>


      </div>
    )
  }
}

  export default PortSettings
