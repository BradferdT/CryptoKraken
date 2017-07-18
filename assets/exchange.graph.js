export function startGraphs(){
$.getJSON('https://api.lionshare.capital/api/prices?period=day', function(data){
  var btcString = data.data.BTC.toString();
  var ethString = data.data.ETH.toString();
  var ltcString = data.data.LTC.toString();
  var zecString = data.data.ZEC.toString();
  var xmrString = data.data.XMR.toString();
  var dashString = data.data.DASH.toString();

  console.log(typeof btcString);
  $('.btcGraph').attr('data-chart_values', `[${btcString}]`);
  $('.ethGraph').attr('data-chart_values', `[${ethString}]`);
  $('.ltcGraph').attr('data-chart_values', `[${ltcString}]`);
  $('.zecGraph').attr('data-chart_values', `[${zecString}]`);
  $('.xmrGraph').attr('data-chart_values', `[${xmrString}]`);
  $('.dashGraph').attr('data-chart_values', `[${dashString}]`);
  drawGraphs();
})
}
