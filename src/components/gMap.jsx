import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -32.959927,
  lng: -71.539546,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) return "Error loading maps";

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={options}
      onUnmount={onUnmount}
    />
  ) : (
    "Loading Maps"
  );
}

export default React.memo(MyComponent);
