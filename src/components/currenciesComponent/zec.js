import React, { Component } from 'react';


class Zec extends Component {
  render() {
    return (
      //<!-- Start of XMR -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle zecColor"></div> ZEC
        </div>
        <div className="col s4">
          <div className="money zecPrice">
          $160.01
          </div>
          <div className="row">
            <div className="zecChangePerc">
            $ 15.74
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine zecGraph" data-chart_values="[244.00000001,243.51000001,239,239.39559788]" data-chart_StrokeColor="rgba(241, 196, 15,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of ZEC -->
    )
  }
}

  export default Zec
