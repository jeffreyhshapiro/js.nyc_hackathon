import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';

const sponsorInfo = [
  {
    name: 'Sponsor 1',
    img: 'http://placehold.it/150x150',
    sponsorSite: 'https://www.google.com'
  },
  {
    name: 'Sponsor 2',
    img: 'http://placehold.it/150x150',
    sponsorSite: 'https://www.google.com'
  },
  {
    name: 'Sponsor 3',
    img: 'http://placehold.it/150x150',
    sponsorSite: 'https://www.google.com'
  }
];

class Sponsors extends Component {
  render() {
    var eachSponsor = sponsorInfo.map((sponsor, index) =>
      <Col sm={4} key={index}>
        <a href={sponsor.sponsorSite} target="_blank">
          <img className="sponsorPhoto" src={sponsor.img} alt={sponsor.name} />
        </a>
        <div>{sponsor.name}</div>
      </Col>
    )
    return (
      <div id="sponsors-section">
        <h2 id="sponsors-heading">Sponsors</h2>
        <div id="sponsors">
          <Container>
            <Row>
              { eachSponsor }
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Sponsors;
