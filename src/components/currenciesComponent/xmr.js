import React, { Component } from 'react';


class Xmr extends Component {
  render() {
    return (
      //<!-- Start of XMR -->
      <div className="row currency">
        <div className="col s3 abr">
            <div className="circle xmrColor"></div> XMR
        </div>
        <div className="col s4">
          <div className="money xmrPrice">
            $36.79
          </div>
          <div className="row">
            <div className="xmrChangePerc">
            $ 3.49
            </div>
          </div>
        </div>
        <div className="col s5 graph">
          <canvas id="myChart" width="55" height="20" className="cLine xmrGraph" data-chart_values="[15.95999971,15.811229,15.51079751,15.46049683,15.35000001]" data-chart_StrokeColor="rgba(155, 89, 182,1.0)"></canvas>
        </div>
        </div>
        //<!-- End of XMR -->
    )
  }
}

  export default Xmr
