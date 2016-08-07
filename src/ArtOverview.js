import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


class ArtList extends Component {  


  render() {
    let artNodes = this.props.data.map((artwork) => {
      return (<Art key={artwork.id} link={artwork.objectNumber} description={artwork.longTitle} title={artwork.title} img={artwork.webImage.url}>
      </Art>)
    });
    return (
      <div className="container">
        <div className="columns is-multiline gapless">
      
    {artNodes}
        </div>
    </div>
    );
  }
  
}

class Art extends Component {

  constructor(props) {
    super(props);
    this.state = {activeDrags: props.activeDrags};
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
  }
 

  onStart() {
     this.setState({activeDrags: ++this.state.activeDrags});

  }

  onStop(){
    this.setState({activeDrags: --this.state.activeDrags});
    document.elementFromPoint(x, y);
  }
  
  render() {
    
    return (
    

      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <img className="art-image" src={this.props.img} />
          </div>
          <div className="card-content">

            <div className="content">
              {this.props.description}
              
            </div>
            <Link to={`/artwork/${this.props.link}`}>
                Bekijk dit meesterwerk
            </Link>
          </div>
        </div>

      </div>
    );
  }

}
Art.defaultProps = {activeDrags: 0};

class ArtOverview extends Component { 

  componentDidMount() {
    this.serverRequest = $.getJSON("https://www.rijksmuseum.nl/api/nl/collection?q=jan%20luyken&key=fpGQTuED&format=json").done(function(data) {
      let response=data.artObjects;
      console.log(response);
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
ArtOverview.defaultProps = { initialArts: [], selected: {},
hoverOver: {} };

export default ArtOverview