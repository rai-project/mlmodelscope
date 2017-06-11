/* eslint-disable */
import React from "react";
import { Popup, Progress, Grid } from "semantic-ui-react";
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";

import { tail, toNumber } from "lodash";

export default function LocationFeature({ feature }) {
  const longlat = tail(feature.name.match(/\S+/g)).map(toNumber);
  console.log({ longlat });
  if (longlat.length !== 2) {
    return <div />;
  }
  const long = longlat[0];
  const lat = longlat[1];
  return (
    <Grid columns={3}>
      <Popup
        trigger={
          <Grid.Column width={10}>
            <ReactMapboxGl
              style={"mapbox://styles/mapbox/streets-v8"}
              accessToken="pk.eyJ1IjoiZGFra2FrIiwiYSI6ImNqM3I3d25yczAwMDc0ZnJ0enE2MzA5aXgifQ.1TRrk_M6j0uqvG55jraXpA"
              containerStyle={{
                width: "100%",
                height: window.innerHeight / 4
              }}
              zoom={[4]}
              maxZoom={17}
              center={[lat, long]}
            >

              <ZoomControl zoomDiff={1} />
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[lat, long]} />
              </Layer>
            </ReactMapboxGl>
          </Grid.Column>
        }
        content={`latitude = ${lat} , longitude = ${long}`}
        position="left center"
      />
      <Grid.Column width={4}>
        <Progress
          value={feature.probability}
          total={1}
          size="tiny"
          color={feature.probability > 0.8 ? "green" : "orange"}
        />
      </Grid.Column>
      <Grid.Column textAlign="right" width={2}>
        {Number(feature.probability.toFixed(4))}
      </Grid.Column>
    </Grid>
  );
}
