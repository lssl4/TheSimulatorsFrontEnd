import React from "react";
import MapDisplay from "./MapDisplay";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./Sidebar.css";
import Timeline from "./Timeline";

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

import { Map, View, Feature } from "ol";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate: 0,
      maxDate: 0,
    };
  }

  getMinAndMaxDate() {
    return { min: "1262275200000", max: "1588262400000" };
  }

  updateMap = (mapLayersArray) => {
    // Create an Openlayer Map instance which will hold the different map layers

    var result = new Map({
      //Display the map in the div with the id of 'map'
      target: "map",
      layers: mapLayersArray,
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

    return result;
  };

  componentWillMount() {
    var dates = this.getMinAndMaxDate();
    this.state.minDate = Number(dates.min);
    this.state.maxDate = Number(dates.max);
    this.state.selectedDate = (Number(dates.min) + Number(dates.max)) / 2;
  }

  render() {
    return (
      <body>
        <Container>
          <Row className="justify-content-sm-center">
            <Col>
              <header style={{ textAlign: "center" }} className="App-header">
                World Map
              </header>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col sm={9}>
              <MapDisplay
                date={this.state.selectedDate}
                updateMap={this.updateMap}
              ></MapDisplay>
            </Col>
            <Col sm={3}>
              <div className="sidebar">
                <h2>Factors</h2>

                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>

                <div className="population_text">
                  <b>Population Density</b>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="timeline">
            <Col sm={12}>
              <Timeline
                min={this.state.minDate}
                max={this.state.maxDate}
                updateMap={this.updateMap}
              />
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}
export default App;
