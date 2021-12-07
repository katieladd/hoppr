import React, {useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const apiKey: string = (process.env.REACT_APP_MAPS_KEY as string);

const containerStyle = {
  width: '50vw',
  height: '50vh'
};


const options = {
  disableDefaultUI: true
}

type Props = {
  lat: any,
  lng: any
}

const Map: React.FC<Props>= ({lat, lng }) => {
  const center = {
    lat: lat,
    lng: lng
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        options={options}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map