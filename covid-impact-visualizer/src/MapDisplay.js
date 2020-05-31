import React, { Component } from "react";
import { Map, View } from "ol";
import { ScaleLine, ZoomSlider, defaults as DefaultControls, OverviewMap } from "ol/control";
import { DragRotateAndZoom, defaults as DefaultInteractions } from 'ol/interaction';
import {baseLayer, populationDensityLayer, landSurfaceDayTempLayer, landSurfaceNightTempLayer, UVDoesAndIndexLayer, referenceLayer, nightTimeLightsLayer} from "./MapDisplay-Layers.js";

class MapDisplay extends Component {
  constructor(props) {
    super(props);
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
    // Create an Openlayer Map instance which will hold the different map layers
    const map = new Map({
      //Display the map in the div with the id of 'map'
      target: "map",
      layers: [ baseLayer, populationDensityLayer, landSurfaceDayTempLayer, landSurfaceNightTempLayer, nightTimeLightsLayer, referenceLayer ],
      interactions: DefaultInteractions().extend([new DragRotateAndZoom()]),

      //Add in the following map controls TODO: Need to update so user can interact with map
      controls: DefaultControls().extend([new ZoomSlider(), new ScaleLine(), new OverviewMap()]),

      //Render the tile layers in a map view with a geographical projection
      view: new View({
        projection: "EPSG:4326",
        center: [0, 0],
        zoom: 1,
      }),
    });
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
