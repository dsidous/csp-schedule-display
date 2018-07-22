import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

const ScheduleVisualizer = ({ data }) =>
  data.length > 0 ? (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Start Time</Table.HeaderCell>
          <Table.HeaderCell>End Time</Table.HeaderCell>
          <Table.HeaderCell>Title Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((item, i) => (
          <Table.Row key={i}>
            <Table.Cell>{item.startTime}</Table.Cell>
            <Table.Cell>{item.endTime}</Table.Cell>
            <Table.Cell>{item.titleName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ) : (
    <div>No schedules to be displayed</div>
  );

ScheduleVisualizer.propTypes = {
  data: PropTypes.array.isRequired
}

export default ScheduleVisualizer;
