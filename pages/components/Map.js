import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic29uYW1hMyIsImEiOiJja3ZtOGN2Yjcwc3ZrMm5vNTE4ZmhlbW9kIn0.pC7Jki2ZoLEMvYgXJrnv_Q";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      //center: [-99.29011, 39.39172],
      center: [77.4538, 28.6692],
      zoom: 5,
    });
  });
  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div` flex-1`;
