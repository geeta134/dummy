import React, { useState, useEffect } from 'react';

function CurrentLocation() {
    const [userLocation, setUserLocation] = useState(null);
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
  
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(454545, userLocation)
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      }
  
      else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  
    useEffect(() => {
      getUserLocation();
    }, []);
  
    return (
      <>
      <div>
        
        <button onClick={getUserLocation}>Get User Location</button>
  
        {userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
            <h1>Geeta</h1>
          </div>
        )}
        </div>
      </>
    )
  }
export default CurrentLocation;

// import React, { useState, useEffect } from 'react';
// import MapConatiner from '.components/MapConatiner';

// function CurrentLocation() {
//   const [userLocation, setUserLocation] = useState(null);


//   return (
//     <div>
//       <button onClick={getUserLocation}>Get User Location</button>

//       {userLocation && (
//         <div>
//           <h2>User Location</h2>
//           <p>Latitude: {userLocation.latitude}</p>
//           <p>Longitude: {userLocation.longitude}</p>
//           <MapContainer userLocation={userLocation} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CurrentLocation;
