import React, { Component } from 'react';


class Ethereum extends Component {
  render() {
    return (
    //<!-- Start of ETH -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle ethColor"></div> ETH
        </div>
        <div className="col s4">
          <div className="money ethPrice">
          $44.30
          </div>
          <div className="row">
            <div className="ethChangePerc">
            $ 3.02
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine ethGraph" data-chart_values="[242.76,243.06,242.98,238.81,238.47]" data-chart_StrokeColor="rgba(41, 128, 185,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of ETH -->
    )
  }
}

  export default Ethereum
