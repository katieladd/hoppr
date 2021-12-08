import React, {useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const apiKey: string = (process.env.REACT_APP_MAPS_KEY as string);

type CenterProps = {
  lat: string,
  lng: string
}

const containerStyle = {
  width: '50vw',
  height: '50vh'
};

const options = {
  disableDefaultUI: true
}

const Map: React.FC<CenterProps>= ({lat, lng}) => {

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  return isLoaded? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
      >
        <Marker
        position={{
          lat:center.lat,
          lng:center.lng
        }}/>
      </GoogleMap>
  ) : <></>

}

export default Map