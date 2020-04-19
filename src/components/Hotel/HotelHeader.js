import React from 'react';

const HotelHeader = ({ source, AltText }) => {
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={source} alt={AltText} />
        <h1>{source}</h1>
      </figure>
    </div>
  );
};

export default HotelHeader;
