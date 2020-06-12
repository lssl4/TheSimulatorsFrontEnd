import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import MapDisplay from "./MapDisplay";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Timeline from "./Timeline";
import Sidebar from "./Sidebar";
import CovidDisplay from "./CovidDisplay";

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
              <h1 style={{ textAlign: "center" }} className="App-header">
                World Map
              </h1>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col sm={9}>
              <MapDisplay></MapDisplay>
            </Col>
            <Col sm={3}>
              <Sidebar></Sidebar>
            </Col>
          </Row>

          <Row className="timeline">
            <Col sm={12}>
              <Timeline min={this.state.minDate} max={this.state.maxDate} />
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}
export default App;
