import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import MapDisplay from "./MapDisplay";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./Sidebar.css";

const VALUES = ["2019-01-01", "2019-02-01", "2019-03-01"];

class App extends React.Component {
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
              <MapDisplay></MapDisplay>
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
              <Timeline min="2" max="110" />
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>New one</div>
        </Container>
      </body>
    );
  }
}
export default App;
