import React, { Component } from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap'

const sponsorInfo = [
  {
    name: 'StrongLoop',
    img: 'https://upload.wikimedia.org/wikipedia/en/1/11/StrongLoop_logo.png',
    sponsorSite: 'https://strongloop.com/'
  },
];


class Sponsors extends Component {
  render() {
    var eachSponsor;
    if (sponsorInfo.length > 1 ) {
      eachSponsor = sponsorInfo.map((sponsor, index) =>
        <Col sm={4} key={index} >
          <a  href={sponsor.sponsorSite} target="_blank">
            <Image src={sponsor.img} alt={sponsor.name} responsive />
          </a>
          <div>{sponsor.name}</div>
        </Col>
      )
    }
    else {
      var sponsor = sponsorInfo[0]
      console.log(sponsorInfo)
      eachSponsor = (
        <Col md={2} mdOffset={5}>
          <a  href={sponsor.sponsorSite} target="_blank">
            <Image src={sponsor.img} alt={sponsor.name} responsive />
          </a>
        </Col>
      )
    }

    return (

          <Grid>
            <Row>
              <Col className="text-center">
                <h2 id="sponsors-heading">Sponsors</h2>

              </Col>
            </Row>
            <Row>
              { eachSponsor }
            </Row>
          </Grid>
      )
  }
}

export default Sponsors;
