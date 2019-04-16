import React from 'react';
import { GoogleApiWrapper,Map } from 'google-maps-react';

class GoogleMapPath extends React.Component {
  onMapLoaded = async (mapProps,map) => {
    const {google} = mapProps;
    this.props.coordinates.map(item => {
        let markers = new google.maps.Marker({
            position: {lat:item.lat, lng: item.lng},
            map
        });
        return markers
    })
    let lines = new google.maps.Polyline({
        path: this.props.coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
    lines.setMap(map);
  }
  
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return this.props.pathList.map(item => {
      if(item.id === this.props.id) {
        return (
            <Map key={item.id}
              initialCenter = {{lat:49.444431,lng:32.059769}}
              style={style}
              google={this.props.google} 
              zoom={18}
              onReady={this.onMapLoaded}
            /> 
        );
      } else {
        return null
      }
    })
  }
}
export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
    libraries: props.libraries
  }
))(GoogleMapPath)
  
