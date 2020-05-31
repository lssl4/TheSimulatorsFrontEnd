import React, { Component } from "react";
import { Map } from "ol";

import "./MapDisplay-Layers.js";

import { updateMapLayers } from "./MapDisplay-Layers.js";

import { Style, Icon } from "ol/style";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";

class MapDisplay extends Component {
  map = new Map();

  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    const h = window.innerWidth >= 992 ? window.innerHeight : window.height;
    this.setState({ height: h });
  }

  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentDidMount() {
    var mapLayersArray = updateMapLayers(this.state.date);
    document.getElementById("map").innerHTML = "";
    this.map = this.props.updateMap(mapLayersArray);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const style = {
      width: "100%",
      height: this.state.height,
      backgroundColor: "#cccccc",
    };
    return <div id="map" className={this.props.className} style={style}></div>;
  }
}

export default MapDisplay;
