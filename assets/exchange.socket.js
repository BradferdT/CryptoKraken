const settings = require('electron-settings');
var socket = io.connect('https://streamer.cryptocompare.com/');

export function startSockets(){

var subscription = ['2~Poloniex~ETH~USD','2~Poloniex~BTC~USD','2~Poloniex~LTC~USD','2~Poloniex~ZEC~USD','2~Poloniex~XMR~USD','2~Poloniex~DASH~USD'];

socket.emit('SubAdd', {subs:subscription});

  var btcOpen = 0;
  var ethOpen = 0;
  var ltcOpen = 0;
  var zecOpen = 0;
  var xmrOpen = 0;
  var dashOpen = 0;
  var portBtc = settings.get('myPortfolio.btc') || 0;
  var portEth = settings.get('myPortfolio.eth') || 0;
  var portLtc = settings.get('myPortfolio.ltc') || 0;
  var portZec = settings.get('myPortfolio.zec') || 0;
  var portXmr = settings.get('myPortfolio.xmr') || 0;
  var portDash = settings.get('myPortfolio.dash') || 0;
  var totalBtc = 0;
  var totalEth = 0;
  var totalLtc = 0;
  var totalZec = 0;
  var totalXmr = 0;
  var totalDash = 0;
  var valueBtc = 0;
  var valueEth = 0;
  var valueLtc = 0;
  var valueZec = 0;
  var valueXmr = 0;
  var valueDash = 0;


socket.on("m", function(message){
  var newM = message.split('~');
  if(newM[2] == 'BTC'){
    totalBtc = (parseFloat(portBtc) * parseFloat(newM[5]));
    $('.btcPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('btc',newM[5]);
    if(btcOpen != 0){
      let value = (newM[5] - btcOpen);
      valueBtc = ((value / newM[5]) * (portBtc * newM[5]));
      $('.btcChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.btcChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));
    }
  }else if(newM[2] == 'ETH'){
    totalEth = (parseFloat(portEth) * parseFloat(newM[5]));
    $('.ethPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('eth',newM[5]);
    if(ethOpen != 0){
      let value = (newM[5] - ethOpen);
      valueEth = ((value / newM[5]) * (portEth * newM[5]));
      $('.ethChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.ethChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));
    }
  }else if(newM[2] == 'LTC'){
    totalLtc = (parseFloat(portLtc) * parseFloat(newM[5]));
    $('.ltcPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('ltc',newM[5]);
    if(ltcOpen != 0){
      let value = (newM[5] - ltcOpen);
      valueLtc = ((value / newM[5]) * (portLtc * newM[5]));
      $('.ltcChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.ltcChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));
    }
  }else if(newM[2] == 'ZEC'){
    totalZec = (parseFloat(portZec) * parseFloat(newM[5]));
    $('.zecPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('zec',newM[5]);
    if(zecOpen != 0){
      let value = (newM[5] - zecOpen);
      valueZec = ((value / newM[5]) * (portZec * newM[5]));
      $('.zecChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.zecChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));

    }
  }else if(newM[2] == 'XMR'){
    totalXmr = (parseFloat(portXmr) * parseFloat(newM[5]));
    $('.xmrPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('xmr',newM[5]);
    if(xmrOpen != 0){
      let value = (newM[5] - xmrOpen);
      valueXmr = ((value / newM[5]) * (portXmr * newM[5]));
      $('.xmrChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.xmrChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));
    }
  }else if(newM[2] == 'DASH'){
    totalDash = (parseFloat(portDash) * parseFloat(newM[5]));
    $('.repPrice').html('$' + parseFloat(newM[5]).toFixed(2));
    $('.donut_inner_total').html('$' + (totalBtc + totalEth + totalLtc + totalZec + totalXmr + totalDash).toFixed(2));
    alert('dash',newM[5]);
    if(dashOpen != 0){
      let value = (newM[5] - dashOpen);
      valueDash = ((value / newM[5]) * (portXmr * newM[5]));
      $('.dashChangePerc').html(`$ ${value.toFixed(2)}`);
      upOrNot('.dashChangePerc',value);
      updatePortChange((valueBtc + valueEth + valueLtc + valueZec + valueXmr + valueDash).toFixed(2));
    }
  }
})



$.getJSON('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,ZEC,XMR,DASH&tsyms=USD',function(data){
  btcOpen = data.RAW.BTC.USD.OPEN24HOUR;
  ethOpen = data.RAW.ETH.USD.OPEN24HOUR;
  ltcOpen = data.RAW.LTC.USD.OPEN24HOUR;
  zecOpen = data.RAW.ZEC.USD.OPEN24HOUR;
  xmrOpen = data.RAW.XMR.USD.OPEN24HOUR;
  dashOpen = data.RAW.DASH.USD.OPEN24HOUR;
})
}

function upOrNot(element, value){
  if(value < 0){
    $(element).addClass('neg');
  }else{
    $(element).addClass('pos');
  }
}

function updatePortChange(value){
  if(value > 0){
    $('.donut_inner_up').addClass('pos');
  }else if(value < 0){
    $('.donut_inner_up').addClass('neg')
  }
  $('.donut_inner_up').html('$' + value);
}


function alert(coin,value){
  let currSetting = `${coin}Notification`;
  if(settings.has(currSetting)){
    if(settings.get(`${currSetting}.eval`) == 'greater'){
      if(parseFloat(value) > settings.get(`${currSetting}.value`)){
        submitNotification(settings.get(`${currSetting}.coin`),'Greater Than',settings.get(`${currSetting}.value`))
        settings.delete(`${currSetting}`);
      }
    }else{
      if(parseFloat(value) < settings.get(`${currSetting}.value`)){
          console.log('in alert for lessthan');
          submitNotification(settings.get(`${currSetting}.coin`),'Less Than',settings.get(`${currSetting}.value`))
          settings.delete(`${currSetting}`);
      }
    }
  }
}


function submitNotification(message,eva,value){
  console.log('submit notification called');
  Notification.requestPermission().then(function(result){
    var Notify = new Notification('Crypto Kraken', {
      'body': `${message} is ${eva} $${value}`,
      'icon': 'http://i.imgur.com/Mzi8LkZ.png'
    });
  })
}
