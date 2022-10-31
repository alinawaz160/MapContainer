import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '500px',
};
export class MapContainer extends Component{

  state={
    latitude:null,
    longitude:null
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        onClick={(a,b,e)=>{
          this.setState({
            latitude:e.latLng.lat(),
            longitude:e.latLng.lng()
          })
         
        }}
      >
        <Marker
          position={{lat:this.state.latitude , lng:this.state.longitude}}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmsg7tuN5Y_UWTMUhvuidh_Hn-QSGaXtY'
})(MapContainer);