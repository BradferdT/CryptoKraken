var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.HashRouter;
var Route = ReactRouter.Route;
import React, { Component } from 'react';
import { Switch } from 'react-router';
//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Exchange from './components/currenciesComponent/allCoins';
import Settings from './components/settingsComponent/settings';
import Tools from './components/toolsComponent/tools';
import Portfolio from './components/portfolioComponent/portfolio';
import PortSettings from './components/portfolioComponent/portSettings';

class App extends Component {
  render(){
    return(
      <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/tools" component={Tools} />
        <Route path="/portfolio/settings" component={PortSettings} />
        <Route path="/portfolio" component={Portfolio} />
        <Route  path="/" component={Exchange} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

  export default App;
