import React from 'react';
import { GoogleApiWrapper,Map } from 'google-maps-react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers:[],
      coords:[],
      lines:[]
    }
  }

  onMapClick = (mapProps,map,e) => {
    this.onAddMarker(mapProps,map,{coords:e.latLng})
    this.calcDistance(mapProps,this.state.coords)
  }
  
  onAddMarker = (mapProps,map,location) => {
    const {google} = mapProps;
    let marker = new google.maps.Marker({
      position: location.coords,
      map
    });
    this.setState({
      markers:[...this.state.markers,marker],
      coords:[...this.state.coords,marker.position]
    })
    let line = new google.maps.Polyline({
      path: this.state.coords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    this.setState({
      lines:[...this.state.lines,line]
    })
    line.setMap(map);
  }

  calcDistance = (mapProps,coords) => {
    const {google} = mapProps;
    const distance = (google.maps.geometry.spherical.computeLength(coords) / 1000).toFixed(2);
    console.log(distance)
    return distance
  }
  
  render() {
    const style = {
      width: '300px',
      height: '300px'
    }
    return (
       <Map 
          initialCenter = {{lat:49.444431,lng:32.059769}}
         style={style}
         google={this.props.google} 
         zoom={14}
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
))(GoogleMap)


//apiKey: AIzaSyCKXnyg0erUqCbgTge4fOO2vifuPdMQGEg
