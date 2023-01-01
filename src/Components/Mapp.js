import React from "react";
import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl";
// import { Marker } from 'react-map-gl';
import Map, { GeolocateControl, NavigationControl, Marker } from "react-map-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q";

function Mapp() {
  {
    document.body.style.backgroundColor = "#b7acac";
  }
  const [viewport, setviewport] = useState({
    longitude: 72.877656,
    latitude: 19.075984,
    zoom: 12,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setviewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 12,
      });
    });
  }, [viewport]);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q";
  return (
    <>
      <div>
        <div className="container" style={{ color: "#b7acac" }}>
          <Map
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{ width: "80vw", height: "80vh" }}
            initialViewState={viewport}
            onViewportChange={(viewport) => {
              setviewport(viewport);
              // mapboxAccessToken={process.env.TOKEN }
            }}
          >
            <Marker
              style={{color:'black'}}
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            <GeolocateControl
              // mapboxAccessToken={token}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
            <NavigationControl position="bottom-right" />
          </Map>
        </div>
      </div>
    </>
  );
}

export default Mapp;
