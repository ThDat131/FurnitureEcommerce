"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 10.816937291698467,
  lng: 106.67865336946285,
};

export function MyGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAZqAvvESxArAV7QRuuOF1t8vTmLfoUjyM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyGoogleMap);
