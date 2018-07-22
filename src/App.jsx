import React, { Component } from "react";
import "./App.css";
import { Header, Container } from "semantic-ui-react";
import ScheduleVisualizerContainer from "./ScheduleVisualizerContainer";

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <Header
          as="h1"
          content="Scheduling and Planning"
          textAlign="center"
          style={{ margin: "2em 0" }}
        />
        <Container>
          <ScheduleVisualizerContainer />
        </Container>
      </div>
    );
  }
}

export default App;
