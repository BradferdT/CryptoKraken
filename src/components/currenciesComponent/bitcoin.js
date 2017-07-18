import React, { Component } from 'react';


class Bitcoin extends Component {
  render() {
    return (
      //<!-- Start of BTC -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle btcColor"></div> BTC
        </div>
        <div className="col s4">
          <div className="money btcPrice">
            $2333.51
          </div>
          <div className="row">
            <div className="btcChangePerc">
            $ 270.50
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine btcGraph" data-chart_values="[28,100,90,556,320,27,300]" data-chart_StrokeColor="rgba(230, 126, 34,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of BTC -->
    )
  }
}

  export default Bitcoin
