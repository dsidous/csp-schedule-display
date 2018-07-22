# csp-interview-schedule-display
Content Scheduling and Planning (CSP) React Interview Test

## Scenario 
Sky wants to modernise their existing back-office systems, moving away from stand-alone monoliths and into Web based applications. The first thing we want to do is to provide a new way of creating, visualising and interacting with TV schedules.

## Test Description 
The first phase of this project consists in being able to visualise the schedule information for a given date and channel. To finish the first phase, we have to complete two stages.

**The code that is provided is not complete! Clicking doesn't do anything nor selecting a date. We advise that you read the notes, further down on this document, in order to get to know which libraries were used and the commands that starts the ui and services.** 

### First Stage – Adding Form Validation
----
Currently with the UI, a user is able to try visualise a schedule, without providing all the fields that are mandatory:
* Channel
* Schedule Date

It is part of the requirements, that upon clicking on "View Schedule" without having all the mandatory fields filled, it should render the message "Please provide all fields before submitting" and stop any further action.

**We expect to see the use of TDD.**

### Second Stage – Fetching and display the Schedule
----
The API that returns the schedule, is available on the following endpoint:
http://localhost:3001/schedule-repo/api/v1/schedule?channel={channel_input}&date={channel_input}

**Check the notes on how to start this service**

The requirement that was given, is to fetch the data, and display the schedule information in a table format, with the following columns:
* Start Time
* End Time
* Title Name

**Please ensure you use TDD and use some state management** 

## Notes
### Libraries
* create-react-app - used to create the skeleton of the app
* semantic-ui-css - the css framework that gives the styling
* semantic-ui-react - provides react components for the styling components from semantic-ui
* react-datepicker - a date picker component
* moment - library to handle dates and times
* react-input-mask - library that provides input masking

If you need to add more libraries, please add them here alongside a description of their function

### Application commands
* npm install / yarn install 
* npm start / yarn start
* npm run start-mockapi / yarn start-mockapi
