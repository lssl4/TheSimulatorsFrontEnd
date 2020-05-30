import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import MapDisplay from "./MapDisplay";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const VALUES = ["05/02/2002", "06/02/2002", "07/02/2002"];

class App extends React.Component {
  state = { value: 0, previous: 0 };

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
            <Col sm={12}>
              <MapDisplay />
            </Col>
          </Row>

          <Row className="timeline">
            <Col>
              <HorizontalTimeline
                index={this.state.value}
                indexClick={(index) => {
                  this.setState({ value: index, previous: this.state.value });
                }}
                values={VALUES}
              />
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default App;
