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
      let art = data.artObject;
      let artImage = art.webImage;
      this.setState({data: art});
      this.setState({imgData: artImage});
    }.bind(this));
  }

  constructor(props) {
    super(props);
    this.state = {data: props.initialArts};
    this.state = {imgData: props.imgObject};
  }
  

  componentWillUnmount() {
  
    this.serverRequest.abort();
  }

  render() {

    let divStyle = {
      color: 'white',
      backgroundImage: 'url(' + this.state.imgData.url + ')',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all', // 'ms' is the only lowercase vendor prefix
      height: ''+(this.state.imgData.height / 4)+'px',
      width: ''+(this.state.imgData.width / 4)+'px' 

    };
    return (
    <div className="art-detailcontainer">  
      <div className="art-detail" style={divStyle}>
      </div>
    </div>
    );
    
  }
 
}
ArtDetail.defaultProps = { initialArts: {}, imgObject: {} };

export default ArtDetail