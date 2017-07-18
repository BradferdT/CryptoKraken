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

export function drawDonut(){
  $('#graph1').empty();
  var btc = settings.get('myPortfolio.btc') || 0;
  var eth = settings.get('myPortfolio.eth') || 0;
  var ltc = settings.get('myPortfolio.ltc') || 0;
  var zec = settings.get('myPortfolio.zec') || 0;
  var xmr = settings.get('myPortfolio.xmr') || 0;
  var dash = settings.get('myPortfolio.dash') || 0;

  $()

  var node = document.querySelector('#graph1');
  var width = 204;
  var height = 204;
  var thickness = 7;
  var duration = 850;
  var delay = 100;
  var amounts = [(btc * coins.btcC),(eth * coins.ethC),(ltc * coins.ltcC),(zec * coins.zecC),(xmr * coins.xmrC),(dash * coins.dashC)]
  var fills = ['rgba(230, 126, 34,1.0)','rgba(41, 128, 185,1.0)','rgba(236, 240, 241,1.0)','rgba(241, 196, 15,1.0)','rgba(155, 89, 182,1.0)','rgba(46, 204, 113,1.0)']

  var radius = Math.min(width, height) / 2;
  var pie = d3.layout.pie().sort(null);

  var svg = d3.select('#graph1').append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  var arc = d3.svg.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

  svg.selectAll("path")
    .data(pie(amounts))
    .enter()
    .append("path")
    .style("fill", function(d, i) { return fills[i]; })
    .attr("d", arc)
  	.transition()
    .delay(delay)
    .duration(duration)
    .call(arcTween);

  function arcTween(transition) {
    transition.attrTween("d", function(d) {
      var interpolate = d3.interpolate(d.startAngle, d.endAngle);
      return function(t) {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    });
  }
}
