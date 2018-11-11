/**
 *
 *  Copyright 2017 Martin Spier <spiermar@gmail.com>
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 *
 */

/* eslint no-underscore-dangle: 0 */
/* eslint no-unused-vars: "off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchGUID } from "../../utils/IcarusUtils";
import { select } from "d3-selection";
import flameGraph from "d3-flame-graph";
import "d3-flame-graph/src/d3.flameGraph.css";

class FlameGraph extends Component {
  constructor(props) {
    super(props);

    ["drawFlameGraph"].forEach(k => {
      this[k] = this[k].bind(this);
    });

    this.state = {
      guid: fetchGUID(),
      chart: null,
    };
  }

  componentDidMount() {
    this.drawFlameGraph(this.state.guid, this.props.data);
  }

  drawFlameGraph(element, data) {
    const width = this.refs[`FlameGraph_${this.state.guid}`].offsetWidth;
    const cellHeight = 22;
    const chart = flameGraph()
      .width(width)
      .cellHeight(cellHeight)
      .transitionDuration(750)
      .sort(true)
      .title("");

    if (this.props.height) {
      chart.height(this.props.height);
    }

    chart.color(d => {
      return d.data.color;
    });

    select(`#FlameGraph_${element}`)
      .datum(data)
      .call(chart);
  }

  render() {
    return (
      <div
        ref={`FlameGraph_${this.state.guid}`}
        id={`FlameGraph_${this.state.guid}`}
        style={this.props.style}
      />
    );
  }
}

FlameGraph.propTypes = {
  data: PropTypes.object.isRequired,
  granularity: PropTypes.string.isRequired,
  height: PropTypes.number,
  style: PropTypes.object,
};

export default FlameGraph;
