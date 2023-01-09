import React from "react";
import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl";
// import { Marker } from 'react-map-gl';
import Map, { GeolocateControl, NavigationControl, Marker ,FullscreenControl} from "react-map-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q";

function Mapp(props) {
  const {lati,loni}=props;
  const [lat, setlat] = useState(props.lati);
  const [lon, setlon] = useState(props.loni);
  // console.log(lat);
  // console.log(lon);
  // console.log(lati);
  // console.log(loni);
  {
    document.body.style.backgroundColor = "#b7acac";
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      setlat(lati);
      setlon(loni);
    });
  },);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q";
  return (
    <>
      <div>
        <div className="container" style={{ color: "#b7acac" }}>
          <Map
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{ width: "80vw", height: "80vh" }}
            initialViewState={{
              latitude:lat,
              longitude:lon,
              zoom:5
            }}
            // onViewportChange={(lat,lon) => {
            //   setlat(lati);
            //   setlon(loni);
            //   // mapboxAccessToken={process.env.TOKEN }
            // }}
          >
            <Marker
              style={{color:'black'}}
              longitude={lon}
              latitude={lat}
            />
            <GeolocateControl
              // mapboxAccessToken={token}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
            <FullscreenControl/>
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
