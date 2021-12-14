import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from 'react';
import { useSelector } from "react-redux";

// const Lat = () => {
//   const {currentLat} = useSelector(state => state.events);
//   return {currentLat};
// }

// const Lng = () => {
//   const {currentLng} = useSelector(state => state.events);
//   return {currentLng};
// }

export class MapContainer extends Component {
  render(props) {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: this.props.currentLat,
            lng: this.props.currentLng
          }
        }
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHXnM8D1D3pfOMK2NZQs_U3MGLMmWjYnE",
})(MapContainer);