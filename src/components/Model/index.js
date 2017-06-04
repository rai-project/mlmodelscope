import React from "react";
import { Dropdown } from "semantic-ui-react";

const MODELS = [{ key: "mxnet", value: "mxnet", flag: "mxnet", text: "mxnet" }];

const Model = () => (
  <Dropdown
    placeholder="Select Model"
    fluid
    search
    selection
    options={MODELS}
  />
);

export default Model;
