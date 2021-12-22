import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render(props) {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 48.8583,
          lng: 2.2945,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAYzUfMMQ2n860H6UfviaTAL9EJYWKs794",
})(MapContainer);
