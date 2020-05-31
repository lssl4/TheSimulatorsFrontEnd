import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { MapDisplay } from "./MapDisplay";

import { updateMapLayers } from "./MapDisplay-Layers.js";

export default class Timeline extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      value: Math.round((Number(props.min) + Number(props.max)) / 2),
    };

    console.log("asdf: " + JSON.stringify(this.state));

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    var mapLayersArray = updateMapLayers(this.state.value);
    this.map = this.props.updateMap(mapLayersArray);
  }

  render() {
    return (
      <div>
        <label
          for="timelineRange"
          style={{ display: "block", textAlign: "center" }}
        >
          Timeline Range
        </label>
        <p>
          Value:
          <span id="timelineValue">
            {console.log("this.state.value: " + this.state.value)}
            {new Date(Number(this.state.value)).toISOString().split("T")[0]}
          </span>
        </p>
        <input
          id="timelineRange"
          type="range"
          min={this.state.min}
          max={this.state.max}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Row id="timelineRangeLabels" style={{ fontSize: "0.75em" }}>
          <Col sm={12}>
            <div id="minDate" style={{ display: "inline", float: "left" }}>
              {new Date(this.state.min).toISOString().split("T")[0]}
            </div>
            <div id="maxDate" style={{ display: "inline", float: "right" }}>
              {new Date(this.state.max).toISOString().split("T")[0]}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
