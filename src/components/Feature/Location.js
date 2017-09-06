/* eslint-disable */
import React from "react";
import { Popup, Progress, Grid } from "semantic-ui-react";
import ReactMapboxGl, {
  Layer,
  Feature,
  ScaleControl,
  ZoomControl
} from "react-mapbox-gl";

import config from "../../config";
import { tail, toNumber } from "lodash";

export default function Location({ feature, compact = false }) {
  if (!feature) {
    return null;
  }
  const longlat = tail(feature.name.match(/\S+/g)).map(toNumber);
  if (longlat.length !== 2) {
    return <div />;
  }
  const long = longlat[0];
  const lat = longlat[1];
  const Map = ReactMapboxGl({
    accessToken: config.mapbox.accessToken
  });
  return (
    <Grid columns={3}>
      <Popup
        trigger={
          <Grid.Column textAlign="left" width={compact ? 10 : 6}>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                width: "100%",
                height: window.innerHeight / 4
              }}
              zoom={[4]}
              maxZoom={17}
              center={[lat, long]}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "harbor-15" }}
              >
                {/*
                <ScaleControl />
                <ZoomControl />
                 */}
                <Feature coordinates={[lat, long]} />
              </Layer>
            </Map>
          </Grid.Column>
        }
        content={`latitude = ${lat} , longitude = ${long}`}
        position="left center"
      />
      {compact ? null : (
        <Grid.Column width={8}>
          <Progress
            size="tiny"
            percent={100 * feature.probability}
            color={feature.probability > 0.5 ? "green" : "orange"}
          />
        </Grid.Column>
      )}
      <Grid.Column textAlign="right" width={2}>
        {Number(feature.probability.toFixed(4))}
      </Grid.Column>
    </Grid>
  );
}
