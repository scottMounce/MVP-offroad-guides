import React from 'react';
import GoogleMapReact from 'google-map-react'
import styles from './map.module.css';
import MAP_API from './hide.jsx';
import LocationPin from './LocationPin.jsx';

const Map = ({ location, zoomLevel, shop }) => (

  <div className={styles.googleMap}>
    <GoogleMapReact 
      bootstrapURLKeys={{ key: MAP_API }}
      defaultCenter={location}      
      defaultZoom={zoomLevel}
    >
    <LocationPin 
      lat={location.lat}
      lng={location.lng}
      text={location.address}
      name={shop.name}
    />
    </GoogleMapReact>
  </div>
)

export default Map;