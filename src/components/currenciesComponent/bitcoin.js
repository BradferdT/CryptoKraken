import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class Bitcoin extends Component {
  render() {
    return (
      //<!-- Start of BTC -->
      <div className="row currency">
        <div className="col s3 abr" data-tip="Bitcoin" data-delay-show='500'>
            <div className="circle btcColor"></div> BTC
        </div>
        <div className="col s4">
          <div data-tip="Current Price" data-delay-show='500' className="money btcPrice">
            $2333.51
          </div>
          <div className="row">
            <div data-tip="24hr Dollar Change" data-delay-show='500' className="btcChangePerc">
            $ 270.50
            </div>
          </div>
        </div>
        <div data-tip="24hr Graph Change" data-delay-show='500' className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine btcGraph" data-chart_values="[28,100,90,556,320,27,300]" data-chart_StrokeColor="rgba(230, 126, 34,1.0)"></canvas>
        </div>
        <ReactTooltip />
        </div>
        //<!-- End of BTC -->
    )
  }
}

  export default Bitcoin
