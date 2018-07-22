import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { Form, Dropdown, Button, Message } from "semantic-ui-react";
import InputMask from "react-input-mask";
import channelOptions from "Shared/channels";

const ScheduleVisualizerForm = ({
  submitHandler,
  dateChange,
  channelChange,
  date,
  submitted,
  valid,
  channel
}) => {
  return (
    <Form onSubmit={submitHandler} data-test="component-ScheduleVisualizerForm">
      <Form.Field>
        <label>Channel</label>
        <Dropdown
          placeholder="Select a channel"
          search
          selection
          options={channelOptions}
          onChange={channelChange}
          value={channel}
          name="channel"
        />
      </Form.Field>
      <Form.Field>
        <label>Schedule Date</label>
        <DatePicker
          dateFormat="DD/MM/YYYY"
          customInput={<InputMask mask="99/99/9999" />}
          onChange={dateChange}
          selected={date}
          name="date"
        />
      </Form.Field>
      <Button type="submit">View Schedule</Button>
      <Message warning visible={submitted && !valid} size="small" data-test="errorMessage">
        <Message.Header>
          Please provide all fields before submitting
        </Message.Header>
      </Message>
    </Form>
  );
};

ScheduleVisualizerForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  dateChange: PropTypes.func.isRequired,
  channelChange: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  submitted: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  channel: PropTypes.string.isRequired
}

export default ScheduleVisualizerForm;
