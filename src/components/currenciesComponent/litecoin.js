import React, { Component } from 'react';


class Litecoin extends Component {
  render() {
    return (
      //<!-- Start of LTC -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle ltcColor"></div> LTC
        </div>
        <div className="col s4">
          <div className="money ltcPrice">
          $196.60
          </div>
          <div className="row">
            <div className="ltcChangePerc">
            $ 31.08
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine ltcGraph" data-chart_values="[49.83,50.32,50.73,48.76]" data-chart_StrokeColor="rgba(236, 240, 241,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of LTC -->
    )
  }
}

  export default Litecoin
