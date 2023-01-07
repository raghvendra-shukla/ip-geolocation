import React from "react";
import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl";
// import { Marker } from 'react-map-gl';
import Map, { GeolocateControl, NavigationControl, Marker } from "react-map-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q";

function Mapp(props) {
  const {lati,loni}=props;
  // console.log(typeof(lati));
  // console.log(lati);
  // console.log(loni);
  {
    document.body.style.backgroundColor = "#b7acac";
  }
  // marker.setLatLng([lat, lon]);
  // mymap.setView([lat, lon], 5);
  // const ll = new mapboxgl.LngLat(lati, loni);
  const ll = new mapboxgl.LngLat(72.877656, 19.075984);
  ll.toBounds(100).toArray();
  // console.log(ll.lng); // = -123.9749
  const [viewport, setviewport] = useState({
    // longitude: 72.877656,
    // latitude: 19.075984,
    latitude: parseFloat(lati),
    longitude: parseFloat(loni),
    zoom: 12,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setviewport({
        ...viewport,
        // latitude: pos.coords.latitude,
        // longitude: pos.coords.longitude,
        latitude: parseFloat(lati),
        longitude: parseFloat(loni),
        zoom: 12,
      });
    });
  }, []);
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

Mapp.defaultProps={
  lati:19.075984,
  loni:72.877656
}

export default Mapp;
