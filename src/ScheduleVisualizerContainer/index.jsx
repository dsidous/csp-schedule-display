import React, { Component } from "react";
import Moment from "moment";
import ScheduleVisualizerForm from "./ScheduleVisualizerForm";
import ScheduleVisualizer from "./ScheduleVisualizer";
import { Grid } from "semantic-ui-react";

class ScheduleVisualizerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: "",
      date: Moment(),
      valid: false,
      submitted: false,
      data: []
    };
  }

  channelChange = (e, { value }) => {
    this.setState({ channel: value });
  };

  dateChange = date => this.setState({ date });

  submitHandler = e => {
    const { channel, date } = this.state;
    if (channel === "" || date === "") {
      e.preventDefault();
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
      this.fetchData();
    }

    this.setState({ submitted: true });
  };

  fetchData = () => {
    const url = `http://localhost:3001/schedule-repo/api/v1/schedule?channel=${
      this.state.channel
    }&date=${this.state.date}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data[0].slots });
      });
  };

  render() {
    return (
      <Grid columns={2} divided="vertically" padded="horizontally">
        <Grid.Row>
          <Grid.Column>
            <ScheduleVisualizerForm
              channelChange={this.channelChange}
              dateChange={this.dateChange}
              submitHandler={this.submitHandler}
              date={this.state.date}
              channel={this.state.channel}
              submitted={this.state.submitted}
              valid={this.state.valid}
            />
          </Grid.Column>
          <Grid.Column>
            <ScheduleVisualizer data={this.state.data} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ScheduleVisualizerContainer;
