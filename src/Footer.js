import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import './Footer.css'
export default class Footer extends Component {
  render () {
    return (
      <Grid fluid className="footer">
        <Row>
          <Col md={8}>
            <Col md={4}>
              <Row>
                <h2>Contact Us</h2>
              </Row>
              <Row>
                  © Copyright 2016 JavaScript NYC
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <a className="contact-link">Link</a>
              </Row>
              <Row>
                <a className="contact-link">Link</a>
              </Row>
              <Row>
                <a className="contact-link">Link</a>
              </Row>
              <Row>
                <a className="contact-link">Link</a>
              </Row>
            </Col>
          </Col>
          <Col md={2} mdOffset={2}>
            <Col md={3}><a className="social" href="https://twitter.com/jsnyc2017"><i className="fa fa-twitter" aria-hidden="true"></i></a></Col>
            <Col md={3}><a className="social" href="https://www.meetup.com/JavaScript-New-York-City/"><i className="fa fa-meetup" aria-hidden="true"></i></a></Col>
            <Col md={3}><a className="social" href="www.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a></Col>
          </Col>
        </Row>
      </Grid>
    )
  }
}
