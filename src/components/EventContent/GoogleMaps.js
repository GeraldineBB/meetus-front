import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component} from 'react';

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
        
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHXnM8D1D3pfOMK2NZQs_U3MGLMmWjYnE",
})(MapContainer);