import React from 'react';
import Enzyme, {
  shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ScheduleVisualizerForm from '../ScheduleVisualizerForm';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const defaultProps = {
  submitHandler: () => {},
  dateChange: () => {},
  channelChange: () => {},
  date: {},
  channel: '',
  valid: false,
  submitted: true
}

it('renders without errors', () => {
  const wrapper = shallow( <ScheduleVisualizerForm {...defaultProps} /> );
  const appComponent = wrapper.find("[data-test='component-ScheduleVisualizerForm']");
  expect(appComponent.length).toBe(1);
});

it('shows error after submit if missing data', () => {
  const wrapper = shallow( <ScheduleVisualizerForm {...defaultProps} /> );
  const error = wrapper.find("[data-test='errorMessage']");
  expect(error.length).toBe(1);
});