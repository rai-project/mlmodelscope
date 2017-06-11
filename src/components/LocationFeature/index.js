/* eslint-disable */
import React from "react";
import { Card } from "semantic-ui-react";

import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";

export default function LocationFeature({ lat, long }) {
  return (
    // eslint-disable-next-line
    <Card>
      <ReactMapboxGl
        style={"mapbox://styles/mapbox/streets-v8"}
        accessToken="pk.eyJ1IjoiZGFra2FrIiwiYSI6ImNqM3I3d25yczAwMDc0ZnJ0enE2MzA5aXgifQ.1TRrk_M6j0uqvG55jraXpA"
        containerStyle={{
          width: "inherit",
          height: window.innerHeight / 4
        }}
        zoom={[0]}
        maxZoom={15}
        center={[lat, long]}
      >

        <ZoomControl zoomDiff={1} />
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[lat, long]} />
        </Layer>
      </ReactMapboxGl>
    </Card>
  );
}
