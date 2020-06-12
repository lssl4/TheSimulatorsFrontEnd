import React from "react";
import "./Sidebar.css";
import MapDisplay from "./MapDisplay";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <div className="sidebar">
          <h3 style={{ display: "block", textAlign: "center" }}>Factors</h3>

          <div className="toggle">
            <label class="switch">
              <input
                id="popDensity"
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              <span class="slider round"></span>
            </label>

            <div className="population_text">
              <b>Population Density</b>
            </div>
          </div>

          <div className="toggle">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>

            <div className="population_text">
              <b>Surface Day Temp</b>
            </div>
          </div>

          <div className="toggle">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>

            <div className="population_text">
              <b>Surface Night Temp</b>
            </div>
          </div>

          <div className="toggle">
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>

            <div className="population_text">
              <b>Surface Night Lights</b>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Sidebar;
