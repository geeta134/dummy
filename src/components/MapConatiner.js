// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         initialCenter={{
//           lat: this.props.userLocation.latitude,
//           lng: this.props.userLocation.longitude
//         }}
//         zoom={14}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           name={'Your Location'}
//         />

//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyA8mUek831n0s662gaf6Ezeh4_t0q5PMec'
// })(MapContainer);
