import React, { Component } from 'react';
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
const settings = require('electron-settings');

console.log(settings.has('ethNotification'));
class Settings extends Component {

  constructor(props) {
   super(props);
   this.state = {
     coin: 'Bitcoin',
     eval: 'greater',
     value: '',
     displayBtc: settings.has('btcNotification'),
     displayEth: settings.has('ethNotification'),
     displayLtc: settings.has('ltcNotification'),
     displayZec: settings.has('zecNotification'),
     displayXmr: settings.has('xmrNotification'),
     displayDash: settings.has('dashNotification')
   };

   this.handleCoin = this.handleCoin.bind(this);
   this.handleEval = this.handleEval.bind(this);
   this.handleValue = this.handleValue.bind(this);
   this.addNotification = this.addNotification.bind(this);
   this.removeBtc = this.removeBtc.bind(this);
   this.removeEth = this.removeEth.bind(this);
   this.removeLtc = this.removeLtc.bind(this);
   this.removeZec = this.removeZec.bind(this);
   this.removeXmr = this.removeXmr.bind(this);
   this.removeDash = this.removeDash.bind(this);
 }

 addNotification(){
   if(this.state.coin == 'Bitcoin'){
     settings.set('btcNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayBtc: true})
   }else if(this.state.coin == 'Ethereum'){
     settings.set('ethNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayEth: true})
   }else if(this.state.coin == 'Zcash'){
     settings.set('zecNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayZec: true})
   }else if(this.state.coin == 'Litecoin'){
     settings.set('ltcNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayLtc: true});
   }else if(this.state.coin == 'Monero'){
     settings.set('xmrNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayXmr: true});
   }else if(this.state.coin == 'Dash'){
     settings.set('dashNotification',{
       coin: this.state.coin,
       eval: this.state.eval,
       value: this.state.value
     })
     this.setState({displayDash: true});
   }

   this.setState({
     coin: 'Bitcoin',
     eval: 'greater',
     value: ''
 })
 }

 handleCoin(event) {
   this.setState({coin: event.target.value});
 }

 handleEval(event) {
   this.setState({eval: event.target.value});
 }

 handleValue(event){
   this.setState({value: event.target.value});
 }

 removeBtc(){
   settings.delete('btcNotification');
   this.setState({displayBtc: false});
 }
 removeEth(){
   settings.delete('ethNotification');
   this.setState({displayEth: false});
 }
 removeLtc(){
   settings.delete('ltcNotification');
   this.setState({displayLtc: false});
 }
 removeZec(){
   settings.delete('zecNotification');
   this.setState({displayZec: false});
 }
 removeXmr(){
   settings.delete('xmrNotification');
   this.setState({displayXmr: false});
 }
 removeDash(){
   settings.delete('dashNotification');
   this.setState({displayDash: false});
 }


  testNotify(){
    Notification.requestPermission().then(function(result){
      var testNotification = new Notification('Crypto Kraken', {
        'body': 'Test Notification'
      });
    })
  }

  render() {
    return (
      <div>
      <div className="row">
      <div className="col s8">
        <div className="settings_title">Alerts</div>
        </div>
        <div className="col s4">
        <button className="settings_button_test" onClick={ this.testNotify }>Test Alert</button>
      </div>
      </div>
        <div className="row settings_row_border">
        <div className="col s4 select_coin">
        <select value={this.state.coin} onChange={this.handleCoin}>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Etherum</option>
            <option value="Litecoin">Litecoin</option>
            <option value="Zcash">Zcash</option>
            <option value="Monero">Monero</option>
            <option value="Dash">Dash</option>
          </select>
          </div>
          <div className="col s4 select_coin">
          <select value={this.state.eval} onChange={this.handleEval}>
              <option value="greater">Greater</option>
              <option value="less">Less Than</option>
            </select>
            </div>
            <div className="col s4 select_coin">
              <input type="number" placeholder="Dollars" className="settings_value_input" value={ this.state.value } onChange={ this.handleValue } />
              </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <button onClick={ this.addNotification } className="save_button">Add</button>
          </div>
        </div>

        <div className="row display_notifications center">
        <div className="col s12">
        {this.state.displayBtc && (<div className="alert_text" onClick={this.removeBtc}>
        Alert:  Bitcoin when {settings.get('btcNotification.eval')} than  ${settings.get('btcNotification.value')}</div>)}
        </div>
        <div className="col s12">
        {this.state.displayEth && (<div className="alert_text" onClick={this.removeEth}>
        Alert:  Ethereum when {settings.get('ethNotification.eval')} than  ${settings.get('ethNotification.value')}</div>)}
        </div>
        <div className="col s12">
        {this.state.displayLtc && (<div className="alert_text" onClick={this.removeLtc}>
        Alert:  Litecoin when {settings.get('ltcNotification.eval')} than  ${settings.get('ltcNotification.value')}</div>)}
        </div>
        <div className="col s12">
        {this.state.displayZec && (<div className="alert_text" onClick={this.removeZec}>
        Alert:  Zcash when {settings.get('zecNotification.eval')} than  ${settings.get('zecNotification.value')}</div>)}
        </div>
        <div className="col s12">
        {this.state.displayXmr && (<div className="alert_text" onClick={this.removeXmr}>
        Alert:  Monero when {settings.get('xmrNotification.eval')} than  ${settings.get('xmrNotification.value')}</div>)}
        </div>
        <div className="col s12">
        {this.state.displayDash && (<div className="alert_text" onClick={this.removeDash}>
        Alert:  Dash when {settings.get('dashNotification.eval')} than  ${settings.get('dashNotification.value')}</div>)}
        </div>
        </div>


      </div>
    )
  }
}

  export default Settings
