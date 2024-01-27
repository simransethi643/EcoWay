import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyMapComponent = () => (
  <LoadScript
    googleMapsApiKey="AIzaSyBVz2mqxc_sY4fsLefkHaSGNHValpgnaTE" // Replace with your API key
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Child components like markers, info windows, etc. go here */}
    </GoogleMap>
  </LoadScript>
);

export default React.memo(MyMapComponent);
