import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
import ReactDOM from 'react-dom';
import App from './App';
import ArtOverview from './ArtOverview';
import ArtDetail from './ArtDetail';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router'
ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="artworks" component={ArtOverview}/>
     
      <Route path="/artwork/:id" component={ArtDetail}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
