import React from 'react';
import $ from 'jquery';
import jqueryui from 'jquery-ui';
// export for others scripts to use
window.$ = $;
window.jQuery = jqueryui;
import ReactDOM from 'react-dom';
import App from './App';
import ArtOverview from './ArtOverview';
import ArtDetail from './ArtDetail';
import './index.css';
import { Router, Route, Link, hashHistory } from 'react-router'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route name="artworks" path="/artworks" component={ArtOverview}/>
     
      <Route name="artwork" path="/artwork/:id" component={ArtDetail}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
