import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Timeline extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <label
        for="timelineRange"
        style={{ display: "block", textAlign: "center" }}
      >
        Timeline Range
        <input id="timelineRange" type="range" min="1" max="100" />
        <span id="timelineValue"> </span>
      </label>
    );
  }
}
