import React, { Component } from 'react';
import {Table, Row, Col} from 'react-bootstrap';

const sampleSchedule = [
  {
    time: '8:00 AM',
    schedule: 'Check In and Breakfast'
  },
  {
    time: '9:00 AM',
    schedule: 'Introductions and Expectations'
  },
  {
    time: '9:30 AM',
    schedule: 'Form Teams and Brainstorm'
  },
  {
    time: '10:00 AM',
    schedule: 'Start Hacking!!'
  },
  {
    time: '12:00 PM',
    schedule: 'Lunch'
  },
  {
    time: '1:00 PM',
    schedule: 'Talks from Guest Speakers (optional)'
  },
  {
    time: '2:00 PM',
    schedule: 'Continue Hacking!'
  },
  {
    time: '5:00 PM',
    schedule: 'Dinner'
  },
  {
    time: '7:00 PM',
    schedule: 'Hacking Ends'
  },
  {
    time: '7:30 PM',
    schedule: 'Presentations'
  },
  {
    time: '9:00 PM',
    schedule: 'Winners Announced'
  }
]

class Schedule extends Component {
  render() {
    var schedules = sampleSchedule.map((event, index) =>
      <tr key={index}>
        <td>{event.time}</td>
        <td>{event.schedule}</td>
      </tr>
    )
    return (
      <Row>
        <Col md={6} sm={6} mdOffset={3} smOffset={3}>
          <Table bordered condensed hover>
            <tbody>
              {schedules}
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}

export default Schedule
