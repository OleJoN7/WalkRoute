import React from 'react';
import { GoogleApiWrapper,Map } from 'google-maps-react';

class GoogleMapCreatePath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers:[],
      distance:''
    }
  }
  
  onMapClick = (mapProps,map,e) => {
    this.onAddMarker(mapProps,map,{coords:e.latLng})
    const distance = this.calcDistance(mapProps,this.state.markers)
    this.setState({distance})
    this.props.onMapChange(this.state)
  }
  
  onAddMarker = (mapProps,map,location) => {
    const {google} = mapProps;
    let marker = new google.maps.Marker({
      position: location.coords,
      map
    });
    this.setState({
      markers:[...this.state.markers,marker.position]
    })
    let line = new google.maps.Polyline({
      path: this.state.markers,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  }

  calcDistance = (mapProps,coords) => {
    const {google} = mapProps;
    const distance = (google.maps.geometry.spherical.computeLength(coords) / 1000).toFixed(2);
    return distance
  }
  
  render() {
    const style = {
      width: '300px',
      height: '100%'
    }
    return (
      <Map 
        initialCenter = {{lat:49.444431,lng:32.059769}}
        style={style}
        google={this.props.google} 
        zoom={18}
        onClick={this.onMapClick}
      />
    );
  }
}
export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
    libraries: props.libraries,
  }
))(GoogleMapCreatePath)

