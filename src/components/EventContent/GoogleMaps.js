import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from 'react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHXnM8D1D3pfOMK2NZQs_U3MGLMmWjYnE",
})(MapContainer);

// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: props.apiKey,
//     language: props.language,
//   }
// ))(MapContainer)