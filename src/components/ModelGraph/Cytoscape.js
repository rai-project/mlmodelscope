import React from "react";

import cytoscape from "cytoscape";
import cydagre from "cytoscape-dagre";
import cycola from "cytoscape-cola";

export default class Cytoscape extends React.Component {
  constructor() {
    super();
    cydagre(cytoscape); // register extension
    cycola(cytoscape);
  }
  componentDidMount() {
    this.update(this.props);
  }
  update(props) {
    let cy = cytoscape({
      container: this.refs.cyelement,
      layout: { name: "dagre", flow: { axis: "y" } },
      boxSelectionEnabled: false,
      autounselectify: true,

      style: [
        {
          selector: "node",
          style: {
            content: "data(id)",
            "text-opacity": 0.5,
            "text-valign": "center",
            "text-halign": "right",
            "background-color": "#11479e",
            shape: "rectangle"
          }
        },
        {
          selector: "edge",
          style: {
            "target-arrow-shape": "triangle",
            "line-color": "#9dbaea",
            "target-arrow-color": "#9dbaea",
            "curve-style": "bezier"
          }
        }
      ],
      ...props
    });

    this.cy = cy;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  componentWillUnmount() {
    this.cy.destroy();
  }

  getCy() {
    return this.cy;
  }

  render() {
    return <div style={this.props.containerStyle} ref="cyelement" />;
  }
}
