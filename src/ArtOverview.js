import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

class ArtList extends Component {  

  render() {
    var artNodes = this.props.data.map((artwork) => {
      return (<Art key={artwork.id} link={artwork.objectNumber} title={artwork.title} img={artwork.webImage.url}>
      </Art>)
    });
    return (<div className="artList">
    {artNodes}
    </div>
    );
  }
  
}

class Art extends Component { 
  render() {
    return <div className="artwork">
    <Link to={`/artwork/${this.props.link}`}>
    <img className="art-image" src={this.props.img} />
    </Link>
    {this.props.children}
    </div>
  }
}


class ArtOverview extends Component { 

  componentDidMount() {
    this.serverRequest = $.getJSON("https://www.rijksmuseum.nl/api/nl/collection?key=fpGQTuED&format=json").done(function(data) {
      var response=data.artObjects;

      data = response;
      this.setState({data: data});
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
    <div>
      <ArtList data={this.state.data} />
    </div>
    );
    
  }
 
}
ArtOverview.defaultProps = { initialArts: [] };

export default ArtOverview