import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from 'react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {lat: '48.864716', lng: '2.349014'};
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: this.state.lat,
            lng: this.state.lng
          }
        }
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHXnM8D1D3pfOMK2NZQs_U3MGLMmWjYnE",
})(MapContainer);