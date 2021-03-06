import React, { Component } from "react";
import Map from "./containers/map";
import "./App.css";

class App extends Component {
  render() {
    const widthStyle = {
      width: "800px"
    };
    return (
      <div style={widthStyle}>
        <div className="App">
          <Map className="map" />
        </div>
      </div>
    );
  }
}

export default App;
