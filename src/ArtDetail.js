import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

class ArtDetail extends Component { 

  componentDidMount() {
  	
    this.serverRequest = $.getJSON('https://www.rijksmuseum.nl/api/nl/collection/'+this.props.params.id+'/?key=hnQJ1CmI').done(function(data) {
      var art = data.artObject;
      this.setState({data: art});
    }.bind(this));
  }

  constructor(props) {
    super(props);
    this.state = {data: props.initialArts};
  }
  

  componentWillUnmount() {
  
    this.serverRequest.abort();
  }

  render() {
    return (
    <div className="test">
      {this.state.data.title}
    </div>
    );
    
  }
 
}
ArtDetail.defaultProps = { initialArts: {} };

export default ArtDetail