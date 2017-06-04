import React from "react";
import yeast from "yeast";
import { Dropdown } from "semantic-ui-react";

const MODELS = [
  { key: yeast(), value: "mxnet1", text: "mxnet1" },
  { key: yeast(), value: "mxnet2", text: "mxnet2" }
];

const Model = () =>
  <Dropdown
    placeholder="Select Model"
    fluid
    search
    selection
    options={MODELS}
  />;

export default Model;
