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
import {
  baseLayer,
  populationDensityLayer,
  landSurfaceDayTempLayer,
  landSurfaceNightTempLayer,
  UVDoesAndIndexLayer,
  referenceLayer,
  nightTimeLightsLayer,
} from "./MapDisplay-Layers.js";
import { Vector as VectorLayer } from "ol/layer";
import { Vector } from "ol/source";
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
    // Create an Openlayer Map instance which will hold the different map layers
    this.map = new Map({
      //Display the map in the div with the id of 'map'
      target: "map",
      layers: [
        baseLayer,
        populationDensityLayer,
        landSurfaceDayTempLayer,
        landSurfaceNightTempLayer,
        nightTimeLightsLayer,
        referenceLayer,
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

    //TODO: later this data can be used to get covid data cloest to selected coordinate
    this.map.on('click', function(evt){
      let coordinate = transform(evt.coordinate);
    })
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
