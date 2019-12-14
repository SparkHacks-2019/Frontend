import React from "react";
import {DeckGL} from "@deck.gl/react";
import { MapView } from '@deck.gl/core';
import { LineLayer } from "@deck.gl/layers";
import { Box, Text } from "grommet";
import {StaticMap} from 'react-map-gl';

// Initial viewport settings
const initialViewState = {
    longitude: -79.749866,
    latitude: 43.695668,
    zoom: 17,
    pitch: 50,
    bearing: 0
  };
  

const MAP_ACCESS_POINT =
  "pk.eyJ1IjoicmlzaGlvc2F1ciIsImEiOiJjazQ1MGFsdGYwMWtpM2pzZTl2dnVmMXl2In0.FUdiHcmq-omE6MtdwgSFeQ";

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

const DashboardCityVisualization = props => {
  const layers = [new LineLayer({ id: "line-layer", data })];
  return (
    <Box >
      <DeckGL height="75%"  initialViewState={initialViewState} layers={layers} >
        <MapView onStyleLoad={(map)=>map.resize()} id="map" style={{margin:"full"}} width="100%" type="fill-extrusion" controller={true}>
          <StaticMap type="fill-extrusion" mapboxApiAccessToken={MAP_ACCESS_POINT} />
        </MapView>
      </DeckGL>

      <Text  pad={{top:"25rem"}}></Text>
    </Box>
  );
};

export default DashboardCityVisualization;
