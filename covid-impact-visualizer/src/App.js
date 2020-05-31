import React from "react";
import MapDisplay from "./MapDisplay";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./Sidebar.css";
import Timeline from "./Timeline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate: 0,
      maxDate: 0,
    };
  }

  getMinAndMaxDate() {
    return { min: "34", max: "90" };
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
              <header style={{ textAlign: "center" }} className="App-header">
                World Map
              </header>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col sm={9}>
              <MapDisplay date={this.state.selectedDate}></MapDisplay>
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
        </Container>
      </body>
    );
  }
}
export default App;
