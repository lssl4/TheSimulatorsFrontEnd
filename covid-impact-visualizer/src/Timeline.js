import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
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
          Value: <span id="timelineValue"> {this.state.value}</span>
        </p>
        <input
          id="timelineRange"
          type="range"
          min={this.state.min}
          max={this.state.max}
          onChange={this.handleChange}
        />
        <Row id="timelineRangeLabels" style={{ fontSize: "0.75em" }}>
          <Col sm={12}>
            <div id="minDate" style={{ display: "inline", float: "left" }}>
              {this.state.min}
            </div>
            <div id="maxDate" style={{ display: "inline", float: "right" }}>
              {this.state.max}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
