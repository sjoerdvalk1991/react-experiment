import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
import logo from './logo.svg';
import './App.css';
import ArtOverview from './ArtOverview';
import ArtDetail from './ArtDetail';
import { Router, Route, Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


class App extends Component {


  constructor(props) {
    super(props);
  }
  
  render() {
    

    return (
      <div>
        {this.props.children}
      </div>
     
    );
  }
}

export default App;
