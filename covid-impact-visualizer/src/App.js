import React from "react";
import "./App.css";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ["2019-01-01", "2019-02-01", "2019-03-01"];

class App extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div className="App">
        <body>
          <header className="App-header">World Map</header>
          <div className="mapLayout">
            <div className="mapElement">Map Element</div>
            <div className="sidebarElement">Sidebar Element</div>
          </div>

          <div className="timeline">
            <HorizontalTimeline
              index={this.state.value}
              indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
              }}
              values={VALUES}
            />
          </div>
          <div>New one</div>
        </body>
      </div>
    );
  }
}

export default App;
