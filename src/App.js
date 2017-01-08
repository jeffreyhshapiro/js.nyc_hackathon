import React, { Component } from 'react';
import './App.css';
import {Container} from 'react-grid-system';
import logo from '../img/jsnyc.jpeg'
import Sponsor from './sponsor.jsx'
import ContactUs from './contactus.jsx'
import Schedule from './schedule.jsx'

const altProp = {
  'alt':'JavaScriptNYC'
}

const jsnyc = "https://www.meetup.com/JavaScript-New-York-City/"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="intro-section">
          <div className="App-header">
            <h2>JavaScript.NYC</h2>
            <a href={jsnyc} target="_blank">
              <img src={ logo } alt={ altProp } className="logo" />
            </a>
            <h3>Full Stack JavaScript Hackathon</h3>
          </div>
          <br />
          <div className="App-intro">
            <div>If it's JavaScript and you use it, we want you for our hackathon!</div>
            <div>We are looking for innovators to build great ideas using JavaScript.</div>
          </div>
          <br />
          <div className="App-intro">
            <div>March 4th 2017</div>
            <div>9:00 AM - 9:00 PM</div>
            <div>Location TBD</div>
            <div>Prizes awarded to 1st, 2nd, and 3rd place teams</div>
          </div>
        </div>
        <div>
          <Container>
            <h2 id="intro-section">Schedule</h2>
            <Schedule />
          </Container>
        </div>
        <div>
          <Sponsor />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;
