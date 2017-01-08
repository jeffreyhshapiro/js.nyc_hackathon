import React from 'react';

function sponsorsList() {
  const sponsorInfo = ["Jeff", "Greg", "DL"]
  const listOfSponsors = sponsorInfo.map((sponsor, index) =>
    <span key={index}>{sponsor}</span>
  );
  return <div>{listOfSponsors}</div>
}


export default sponsorsList;
