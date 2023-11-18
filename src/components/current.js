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
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
// })(MapContainer);











// import React, { useState, useEffect } from 'react';

// // Import MapContainer here

// function CurrentLocation() {
//   const [userLocation, setUserLocation] = useState(null);

//   // ... your existing code for user location

//   return (
//     <div>
//       <button onClick={getUserLocation}>Get User Location</button>

//       {userLocation && (
//         <div>
//           <h2>User Location</h2>
//           <p>Latitude: {userLocation.latitude}</p>
//           <p>Longitude: {userLocation.longitude}</p>
//           {/* Add the MapContainer component here */}
//           <MapContainer userLocation={userLocation} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CurrentLocation;
