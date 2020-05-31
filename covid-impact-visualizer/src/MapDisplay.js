import React, { Component } from "react";
import { Map, View, Feature } from "ol";
import {
  ScaleLine,
  ZoomSlider,
  defaults as DefaultControls,
  OverviewMap,
  MousePosition,
} from "ol/control";
import {
  DragRotateAndZoom,
  defaults as DefaultInteractions,
} from "ol/interaction";
import "./MapDisplay-Layers.js";
import { Vector as VectorLayer } from "ol/layer";
import { Vector } from "ol/source";
import { Style, Icon } from "ol/style";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { updateMapLayers } from "./MapDisplay-Layers.js";

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

  updateMap() {}

  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentDidMount() {
    var vectorLayer = new VectorLayer({
      source: new Vector({
        features: [new Feature({ geometry: new Point(fromLonLat([24, 24])) })],
      }),
      style: new Style({ pointRadius: 6, fillColor: "red", fillOpacity: 0.5 }),
    });

    var layersObject = updateMapLayers(this.state.date);

    // Create an Openlayer Map instance which will hold the different map layers
    this.map = new Map({
      //Display the map in the div with the id of 'map'
      target: "map",
      layers: [
        layersObject.baseLayer,
        layersObject.populationDensityLayer,
        layersObject.landSurfaceDayTempLayer,
        layersObject.landSurfaceNightTempLayer,
        layersObject.nightTimeLightsLayer,
        layersObject.referenceLayer,
        vectorLayer,
      ],
      interactions: DefaultInteractions().extend([new DragRotateAndZoom()]),

      //Add in the following map controls TODO: Need to update so user can interact with map
      controls: DefaultControls().extend([
        new ZoomSlider(),
        new ScaleLine(),
        new OverviewMap(),
        new MousePosition(),
      ]),

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
